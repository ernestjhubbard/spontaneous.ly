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
  $min_points = $max_points - 14;

  $sql_query = "SELECT *
                  FROM activities
                 WHERE points
               BETWEEN $min_points
                   AND $max_points
                   AND cost < $max_cost
                   AND dateTime > NOW()";

  $result = mysqli_query($link, $sql_query);
  $output = [];

  while ($row = mysqli_fetch_assoc($result)) {
    $output[] = $row;
  }

  $response['body'] = $output;
  send($response);
}
