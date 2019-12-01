<?php
$link = get_db_link();
if ($request['method'] === 'GET') {
    $user_id = $request['body']['userId'];
    $sql_get_friends = "SELECT * FROM friendRequests AS f JOIN users AS u 
                                   ON f.`senderId` = u.`userId`
                                WHERE f.`isAccepted` = 1 
                                  AND u.`userId` = $user_id";
    $friends_query = mysqli_query($link, $sql_get_friends);
    $output = [];
    while($row = mysqli_fetch_assoc($friends_query)){
      $output[] = $row;
    }
    $response['body'] = $output;
    send($response);
  }
if ($request['method'] === 'POST') {
    $sender_id = $request['body']['senderId'];
    $recipient_id = $request['body']['recipientId'];
    $add_friend_query = "INSERT INTO friendRequests (senderId, recipientId, isAccepted)
                              VALUES ($sender_id, $recipient_id, 1)";
    mysqli_query($link, $add_friend_query);
    $response['body'] = "SUCCESS";
    send($response);
}