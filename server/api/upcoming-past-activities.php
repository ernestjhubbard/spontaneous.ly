<?php

$link = get_db_link();

if ($request['method'] === 'GET') {
  $user_id = 68;
  $operator = $request['query']['activityType'] === 'Upcoming' ? '>' : '<';
  $sql_activities = "SELECT reservations.activityId, activities.activity, activities.dateTime, activities.points, activities.image
                       FROM reservations
                       JOIN activities
                         ON activities.activityId = reservations.activityId
                      WHERE userId = $user_id
                        AND activities.dateTime $operator NOW()
                        AND isCancelled = 0
                   ORDER BY activities.dateTime ASC";
  $activities_query = mysqli_query($link, $sql_activities);
  $activities = mysqli_fetch_all($activities_query, MYSQLI_ASSOC);
  $response['body'] = $activities;
  send($response);
}
