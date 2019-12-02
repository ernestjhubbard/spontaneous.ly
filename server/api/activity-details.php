<?php
$link = get_db_link();

if ($request['method'] === 'POST') {
  $activity_id = $request['body']['activityId'];
  $query =   "SELECT * FROM activities WHERE activityId = $activity_id";
  $result = mysqli_query($link, $query);
  $output = mysqli_fetch_assoc($result);
  $response['body'] = $output;
  send($response);
}
