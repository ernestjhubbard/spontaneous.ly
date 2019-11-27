<?php
$link = get_db_link();

if ($request['method'] === 'GET') {
  $query =   "SELECT * FROM activities";
  $result = mysqli_query($link, $query);
  $output = [];
  while ($row = mysqli_fetch_assoc($result)) {
    $output[] = $row;
  }
  $response['body'] = $output;
  send($response);
}

// Select All Activities Between 5 and 15 Points (Level 1):
//      SELECT *
//        FROM `activities`
//       WHERE points < 16

// Select All Activities Between 16 and 30 (Level 2):
//      SELECT *
//        FROM `activities`
//       WHERE points
//     BETWEEN 16
//         AND 30

// Select All Activities Between 31 and 45 (Level 3):
//      SELECT *
//        FROM `activities`
//       WHERE points
//     BETWEEN 31
//         AND 45

// Select All Activities Between 46 and 60 (Level 4):
//      SELECT *
//        FROM `activities`
//       WHERE points
//     BETWEEN 46
//         AND 60

// Select All Activities Over 61 (Level 5):
//      SELECT *
//        FROM `activities`
//       WHERE points > 60
