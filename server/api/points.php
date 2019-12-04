<?php

$link = get_db_link();
$sql_login = "SELECT userId
                FROM `logins`
            ORDER BY `logins`.`loginId` DESC";
$login_query = mysqli_query($link, $sql_login);
$user_fetch = mysqli_fetch_assoc($login_query);
$user_id = $user_fetch['userId'];
if ($request['method'] === 'GET') {
  if (isset($request['query']['userId'])) {
    $user_id = $request['query']['userId'];
  }
  $sql_user_points = "SELECT value
                        FROM points
                       WHERE userId = $user_id";
  $user_points_query = mysqli_query($link, $sql_user_points);
  $user_points = mysqli_fetch_all($user_points_query, MYSQLI_ASSOC);
  $response['body'] = $user_points;
  send($response);
} else if ($request['method'] === 'POST') {
  $transaction_type = $request['body']['transactionType'];
  if ($transaction_type === "reservation" && isset($request['body']['activityId'])){
      $activity_id = $request['body']['activityId'];
      $sql_points = "SELECT points
                       FROM activities
                      WHERE activityId = $activity_id";
      $points_query = mysqli_query($link, $sql_points);
      $points = mysqli_fetch_assoc($points_query);
      $point_value = $points['points'];
      $sql_transaction = "INSERT INTO points (`userId`, `value`, `transactionType`)
                               VALUES ($user_id, $point_value, '$transaction_type')";
      mysqli_query($link, $sql_transaction);
      $response['body'] = $points;
      send($response);
    } else {
    if ($transaction_type === "reroll") {
      $sql_reroll = "INSERT INTO points (`userId`, `value`, `transactionType`)
                          VALUES ($user_id, -25, '$transaction_type')";
      mysqli_query($link, $sql_reroll);
    } else if($transaction_type === "cancellation") {
      $sql_cancel = "INSERT INTO points (`userId`, `value`, `transactionType`)
                          VALUES ($user_id, -50, '$transaction_type')";
      mysqli_query($link, $sql_cancel);
    } else {
      throw new ApiError("Invalid Transaction Type", 400);
    }
    $response['body'] = "Post Successful";
    send($response);
  }
}
