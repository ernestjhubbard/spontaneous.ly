<?php
$link = get_db_link();

if ($request['method'] === 'POST') {
  $user_id = 1;
  $transaction_type = $request['body']['transactionType'];
  if($transaction_type ==="reservation" && isset($request['body']['activityId'])){
    print('what the fuck');
      $activity_id = $request['body']['activityId'];
      $transaction = "reservation";
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
    }
  else{
    if($transaction_type === "re-roll"){
      $sql_reroll = "INSERT INTO points (`userId`, `value`, `transactionType`) 
                          VALUES ($user_id, -25, '$transaction_type')";
      mysqli_query($link, $sql_reroll);
    }
    else if($transaction_type === "cancellation"){
      $sql_cancel = "INSERT INTO points (`userId`, `value`, `transactionType`) 
                          VALUES ($user_id, -50, '$transaction_type')";
      mysqli_query($link, $sql_cancel);
    }
    else{
      throw new ApiError("Invalid Transaction Type", 400);
    }
    $response['body'] = "Post Successful";
    send($response);
  }
}