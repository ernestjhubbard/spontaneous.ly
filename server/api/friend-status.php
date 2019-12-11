<?php

$link = get_db_link();
if ($request['method'] === 'GET') {
  $logged_in_user = $_SESSION['user_id'];
  $user_id = $request['query']['userId'];
  $sql_friend_status = "SELECT u.userId, u.firstName, u.lastName, u.image, f.isAccepted, f.isPending, f.recipientId, f.senderId
                          FROM friendRequests AS f
                          JOIN users AS u
                            ON u.userId = f.recipientId
                         WHERE f.recipientId = '$user_id'";
  $friend_query = mysqli_query($link, $sql_friend_status);
  $user = mysqli_fetch_assoc($friend_query);
  $response['body'] = $user;
  send($response);
}
