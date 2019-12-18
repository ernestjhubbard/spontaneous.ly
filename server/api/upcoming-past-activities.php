<?php

$link = get_db_link();

if ($request['method'] === 'GET') {
  $user_id = $_SESSION['user_id'];
  if (isset($request['query']['userId'])) {
    $user_id = $request['query']['userId'];
  }
  $operator = $request['query']['activityType'] === 'Upcoming' ? '>' : '<';
  $sql_activities = "SELECT r.activityId, a.activity, a.dateTime, a.points, a.image
                       FROM reservations
                         AS r
                       JOIN activities
                         AS a
                         ON a.activityId = r.activityId
                      WHERE userId = $user_id
                        AND a.dateTime $operator NOW()
                        AND isCancelled = 0
                   ORDER BY a.dateTime ASC";
  $activities_query = mysqli_query($link, $sql_activities);
  $activities = mysqli_fetch_all($activities_query, MYSQLI_ASSOC);
  $response['body'] = $activities;
  send($response);
}
