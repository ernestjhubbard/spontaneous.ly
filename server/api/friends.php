<?php
$link = get_db_link()

/* RETRIEVES LIST OF FRIENDS OF THE CURRENT LOGGED IN USER */

if ($request['method'] === 'GET') {
    $sql_current_user = "SELECT userId FROM `logins` 
                       ORDER BY `logins`.`loginId` DESC";
    $user_query = mysqli_query($link, $sql_current_user);
    $user_fetch = mysqli_fetch_assoc($user_query);
    $user_id = $user_fetch['userId'];
    $sql_get_friends = "SELECT * FROM users AS u JOIN friendRequests AS f
                                   ON f.`recipientId` = u.`userId`
                                WHERE f.`isAccepted` = 1 
                                  AND f.`senderId` = $user_id";
    $friends_query = mysqli_query($link, $sql_get_friends);
    $output = [];
    while($row = mysqli_fetch_assoc($friends_query)){
      $output[] = $row;
    }
    $response['body'] = $output;
    send($response);
  }
  
/* USER CAN ADD A FRIEND -- NOT YET IMPLEMENTED FRONT END */

if ($request['method'] === 'POST') {
    $sender_id = $request['body']['senderId'];
    $recipient_id = $request['body']['recipientId'];
    $add_friend_query = "INSERT INTO friendRequests (senderId, recipientId, isAccepted)
                              VALUES ($sender_id, $recipient_id, 1)";
    mysqli_query($link, $add_friend_query);
    $response['body'] = "SUCCESS";
    send($response);
}