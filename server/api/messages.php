<?php
$link = get_db_link();

$user_id = $_SESSION['user_id'];

if ($request['method'] === 'GET') {
    if(isset($request['query']['recipientId'])){
      $recipient_id = $request['query']['recipientId'];
      $sql_messages = "SELECT *
                         FROM messages
                           AS m
                         JOIN users
                           AS u
                           ON $user_id = u.userId
                        WHERE ($user_id = m.senderId
                           OR $user_id = m.recipientId)
                          AND ($recipient_id = m.senderId
                           OR $recipient_id = m.recipientId)";
      $messages_query = mysqli_query($link, $sql_messages);
      $messages = [];
      while($row = mysqli_fetch_assoc($messages_query)){
        $messages[] = $row;
      }
      $response['body'] = $messages;
      send($response);
    }
    else if (isset($request['query']['userId'])){
      $friend_id = $request['query']['userId'];
      $sql_friend = "SELECT firstName, lastName, image, userId
                       FROM users
                      WHERE $friend_id = userId";
      $friend_query = mysqli_query($link, $sql_friend);
      $friend = mysqli_fetch_assoc($friend_query);
      $response['body'] = $friend;
      send($response);
    }
}
if ($request['method'] === 'POST'){

  if(isset($request['body']['friendId']) && !isset($request['body']['message'])){
    $friend_id = $request['body']['friendId'];
    $sql_friend = "SELECT * FROM users WHERE userId = $friend_id";
    $friend_query = mysqli_query($link, $sql_friend);
    $friend = mysqli_fetch_assoc($friend_query);
    $response['body'] = $friend;
    send($response);
  }

  else if(isset($request['body']['message'])){
    $recipient_id = $request['body']['recipientId'];
    $sender_message = $request['body']['message'];
    $sql_send_message = "INSERT INTO messages (message, senderId, recipientId) VALUES (?,?,?)";
    $prepared_message = mysqli_prepare($link, $sql_send_message);
    mysqli_stmt_bind_param($prepared_message, 'sii', $sender_message, $user_id, $recipient_id);
    mysqli_stmt_execute($prepared_message);
    $response['body'] = $sender_message;
    send($response);
  }
}
