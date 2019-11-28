<?php
$link = get_db_link();

if ($request['method'] === 'GET') {
    $query =   "SELECT points FROM activities";
    $result = mysqli_query($link, $query);
    $output = [];
    $count = 0;
    while($row = mysqli_fetch_assoc($result)){
      $count += $row['points'];
    }
    $response['body'] = $count;
    send($response);
}