<?php
$link = get_db_link();

/* QUERY TO GET CURRENT LOGGED IN USER */

$sql_sender = "SELECT userId FROM `logins` 
                         ORDER BY `logins`.`loginId` DESC";
$user_query = mysqli_query($link, $sql_sender);
$user_fetch = mysqli_fetch_assoc($user_query);
$sender_id = $user_fetch['userId'];

/* RETRIEVES MESSAGES -- retrieveMessages ON FRONT END -- STILL NEED TO FIX THE QUERY */

if ($request['method'] === 'GET') {
    $sql_messages = "SELECT * FROM messages AS m JOIN users AS u
                             WHERE u.`userId` = m.`senderId`";
    $messages_query = mysqli_query($link, $sql_messages);
    $messages = [];
    while($row = mysqli_fetch_assoc($messages_query)){
      $messages[] = $row;
    }
    $response['body'] = $request['body'];
    send($response);
}

  /* WHAT IS THIS DOING AGAIN */
if ($request['method'] === 'POST'){
  if(isset($request['body']['recipientId']) && !isset($request['body']['message'])){
    $recipient_id = $request['body']['recipientId'];
    $sql_messages = "SELECT * FROM messages AS m JOIN users AS u
                                ON $sender_id = u.`userId`";
    $messages_query = mysqli_query($link, $sql_messages);
    $messages = [];
    while($row = mysqli_fetch_assoc($messages_query)){
      $messages[] = $row;
    }
    $response['body'] = $messages;
    send($response);
  }

  /* SECOND POST REQUEST GRABS THE USER THEY'RE TALKING TO -- DIDN'T WANT TO FLOOD THE USERS TABLE */

  else if(isset($request['body']['friendId']) && !isset($request['body']['message'])){
    $friend_id = $request['body']['friendId'];
    $sql_friend = "SELECT * FROM users WHERE userId = $friend_id";
    $friend_query = mysqli_query($link, $sql_friend);
    $friend = mysqli_fetch_assoc($friend_query);
    $response['body'] = $friend;
    send($response);
  }

  /* THIRD POST REQUEST SENDS THE MESSAGE TO RECIPIENT */

  else if(isset($request['body']['message'])){
    $recipient_id = $request['body']['recipientId'];
    $sender_message = $request['body']['message'];
    $sql_send_message = "INSERT INTO `messages` ( `message`, `senderId`, `recipientId`)
                            VALUES (?,?,?)";
    $prepared_message =mysqli_prepare($link, $sql_send_message);
    mysqli_stmt_bind_param($prepared_message, 'sii', $sender_message, $sender_id, $recipient_id);
    mysqli_stmt_execute($prepared_message);
    $response['body'] = $sender_message;
    send($response);
  }
}