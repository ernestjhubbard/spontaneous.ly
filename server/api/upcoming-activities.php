<?php

$link = get_db_link();

if ($request['method'] === 'GET') {
  $user_id = 1;
  $sql_reserved_activities = "SELECT reservations.activityId, activities.activity, activities.date, activities.time, activities.points, activities.image
                                FROM reservations
                                JOIN activities
                                  ON activities.activityId = reservations.activityId
                               WHERE userId = $user_id
                                 AND isCancelled = 0";
  $reserved_activities_query = mysqli_query($link, $sql_reserved_activities);
  $upcoming_activities = mysqli_fetch_all($reserved_activities_query, MYSQLI_ASSOC);
  $response['body'] = $upcoming_activities;
  send($response);
}
