<?php

$link = get_db_link();

if ($request['method'] === 'GET') {
  $sql_login = "SELECT userId
                  FROM `logins`
              ORDER BY `logins`.`loginId` DESC";
  $login_query = mysqli_query($link, $sql_login);
  $user_fetch = mysqli_fetch_assoc($login_query);
  $user_id = $user_fetch['userId'];
  if (isset($request['query']['userId'])) {
    $user_id = $request['query']['userId'];
  }
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
