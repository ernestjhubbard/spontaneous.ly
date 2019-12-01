<?php
$link = get_db_link();
if ($request['method'] === 'GET') {
    $sql_sender = "SELECT userId FROM `logins` 
                             ORDER BY `logins`.`loginId` DESC";
    $user_query = mysqli_query($link, $sql_sender);
    $user_fetch = mysqli_fetch_assoc($user_query);
    $user_id = $user_fetch['userId'];
    $sql_messages = "SELECT * FROM messages AS m JOIN users AS u
                             WHERE u.`userId` = m.`senderId`";
    $messages_query = mysqli_query($link, $sql_messages);
    $messages = [];
    while($row = mysqli_fetch_assoc($messages_query)){
      $messages[] = $row;
    }
    $response['body'] = $messages;
    send($response);
  }