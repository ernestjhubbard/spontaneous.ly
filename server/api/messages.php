<?php
$link = get_db_link();
$sql_sender = "SELECT userId FROM `logins` 
                         ORDER BY `logins`.`loginId` DESC";
$user_query = mysqli_query($link, $sql_sender);
$user_fetch = mysqli_fetch_assoc($user_query);
$sender_id = $user_fetch['userId'];
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
if ($request['method'] === 'POST'){
  if(isset($request['body']['recipientId'])){
    $recipient_id = $request['body']['recipientId'];
    $sql_messages = "SELECT * FROM messages AS m JOIN users AS u
                                ON $sender_id = u.`userId`
                             WHERE $recipient_id = m.`recipientId`";
    $messages_query = mysqli_query($link, $sql_messages);
    $messages = [];
    while($row = mysqli_fetch_assoc($messages_query)){
      $messages[] = $row;
    }
    $response['body'] = $messages;
    send($response);
  }
  // else{
  //   $recipient_id = $request['body']['recipientId'];
  //   $sender_message = $request['body']['message'];
  //   $sql_send_message = "INSERT INTO `messages` ( `message`, `senderId`, `recipientId`)
  //                           VALUES (?,?,?)";
  //   $prepared_message =mysqli_prepare($link, $sql_send_message);
  //   mysqli_stmt_bind_param($prepared_message, 'sii', $sender_message, $sender_id, $recipient_id);
  //   mysqli_stmt_execute($prepared_message);
  // }
}