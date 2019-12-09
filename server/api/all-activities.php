<?php

$link = get_db_link();

if ($request['method'] === 'GET') {
  if (!$request['query']['cost'] || !$request['query']['points']) {
    $sql_query = "SELECT *
                    FROM activities
                   WHERE dateTime > NOW()";
  }

  $max_cost = $request['query']['cost'] * 70;
  $distance = $request['query']['distance'];
  $max_points = $request['query']['points'] * 15;


  if ($max_points === 15) {
    $sql_query = "SELECT *
                    FROM activities
                   WHERE points < 16
                     AND cost < $max_cost
                     AND dateTime > NOW()";
  } else if ($max_points === 30) {
    $sql_query = "SELECT *
                    FROM activities
                   WHERE points
                 BETWEEN 16
                     AND 30
                     AND cost < $max_cost
                     AND dateTime > NOW()";
  } else if ($max_points === 45) {
    $sql_query = "SELECT *
                    FROM activities
                   WHERE points
                 BETWEEN 31
                     AND 45
                     AND cost < $max_cost
                     AND dateTime > NOW()";
  } else if ($max_points === 60) {
    $sql_query = "SELECT *
                    FROM activities
                   WHERE points
                 BETWEEN 46
                     AND 60
                     AND cost < $max_cost
                     AND dateTime > NOW()";
  } else if ($max_points === 75) {
    $sql_query = "SELECT *
                    FROM activities
                   WHERE points > 60
                     AND cost < $max_cost
                     AND dateTime > NOW()";
  }
  $result = mysqli_query($link, $sql_query);
  $output = [];

  while ($row = mysqli_fetch_assoc($result)) {
    $output[] = $row;
  }

  $response['body'] = $output;
  send($response);
}
