<?php
$link = get_db_link();


if ($request['method'] === 'PUT') {
  $user_id = $_SESSION['user_id'];
  $recipient_id = $request['body']['recipientId'];
  $sql_accept = "UPDATE friendRequests
                    SET isAccepted = 0, isPending = 0
                  WHERE (senderId = $user_id OR senderId = $recipient_id)
                    AND (recipientId = $user_id OR recipientId = $recipient_id)";
  mysqli_query($link, $sql_accept);
  $response['body'] = "success";
  send($response);
}

if ($request['method'] === 'DELETE'){
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