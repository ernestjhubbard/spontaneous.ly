<?php
$link = get_db_link();

if ($request['method'] === 'GET') {
  $user_id = $_SESSION['user_id'];
  if (isset($request['query']['userId'])) {
    $user_id = $request['query']['userId'];
  }
    $isAccepted = $request['query']['isAccepted'];
    $isPending = $request['query']['isPending'];
    if(isset($isPending)){
    $sql_get_friends = "SELECT firstName, lastName, image, userId, f.senderId, f.isPending
                          FROM users
                            AS u
                          JOIN friendRequests
                            AS f
                            ON f.senderId = u.userId
                           AND f.isPending = 1
                           AND f.senderId != $user_id
                           AND f.recipientId = $user_id";
    $friends_query = mysqli_query($link, $sql_get_friends);
    $output = [];
    while($row = mysqli_fetch_assoc($friends_query)){
      $output[] = $row;
    }
    $response['body'] = $output;
    send($response);
    } else if(isset($isAccepted)){
    $sql_get_friends = "SELECT firstName, lastName, image, userId, f.senderId, f.isAccepted
                          FROM users
                            AS u
                          JOIN friendRequests
                            AS f
                            ON f.senderId = u.userId
                           AND f.isAccepted = 1
                           AND f.senderId != $user_id
                           AND f.recipientId = $user_id";
    $friends_query = mysqli_query($link, $sql_get_friends);
    $output = [];
    while ($row = mysqli_fetch_assoc($friends_query)) {
      $output[] = $row;
    }
    $response['body'] = $output;
    send($response);
    }
}

if ($request['method'] === 'POST') {
    $sender_id = $_SESSION['user_id'];
    $recipient_id = $request['body']['recipientId'];
    $add_friend_query = "INSERT INTO friendRequests (senderId, recipientId, isAccepted, isPending)
                              VALUES ($sender_id, $recipient_id, 0, 1), ($recipient_id, $sender_id, 0, 0)";
    mysqli_query($link, $add_friend_query);
    $response['body'] = "SUCCESS";
    send($response);
}

if ($request['method'] === 'PUT'){
    $user_id = $_SESSION['user_id'];
    $recipient_id = $request['body']['recipientId'];
    $sql_accept = "UPDATE friendRequests
                      SET isAccepted = 1, isPending = 0
                    WHERE (senderId = $user_id OR senderId = $recipient_id)
                      AND (recipientId = $user_id OR recipientId = $recipient_id)";
    mysqli_query($link, $sql_accept);
    $response['body'] = "success";
    send($response);
}
