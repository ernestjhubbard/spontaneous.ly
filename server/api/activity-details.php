<?php
$link = get_db_link();

if ($request['method'] === 'GET') {
  $activity_id = $request['body']['activityId'];
  $query =   "SELECT * FROM activities WHERE activityId = $activity_id";
  $result = mysqli_query($link, $query);
  $output = [];
  while ($row = mysqli_fetch_assoc($result)) {
    $output[] = $row;
  }
  $response['body'] = $output;
  send($response);
}
