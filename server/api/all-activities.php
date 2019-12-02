<?php
$link = get_db_link();

if ($request['method'] === 'GET') {
  // If the user somehow bypasses the filter, they will see all activities, rather than throw an error
  if (!isset($request['body']['points'])) {
    $sql_query = "SELECT *
                    FROM `activities`";
  }
  if ($request['body']['points'] > 4 && $request['body']['points'] < 16) {
    $sql_query = "SELECT *
                    FROM `activities`
                   WHERE points < 16";
  } else if ($request['body']['points'] > 15 && $request['body']['points'] < 31) {
    $sql_query = "SELECT *
                    FROM `activities`
                   WHERE points
                 BETWEEN 16
                     AND 30";
  } else if ($request['body']['points'] > 30 && $request['body']['points'] < 46) {
    $sql_query = "SELECT *
                    FROM `activities`
                   WHERE points
                 BETWEEN 31
                     AND 45";
  } else if ($request['body']['points'] > 45 && $request['body']['points'] < 61) {
    $sql_query = "SELECT *
                    FROM `activities`
                   WHERE points
                 BETWEEN 46
                     AND 60";
  } else if ($request['body']['points'] >= 61) {
    $sql_query = "SELECT *
                    FROM `activities`
                   WHERE points > 60";
  }
  $result = mysqli_query($link, $sql_query);
  $output = [];
  while ($row = mysqli_fetch_assoc($result)) {
    $output[] = $row;
  }
  $response['body'] = $output;
  send($response);
}
