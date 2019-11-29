<?php
$link = get_db_link();

if ($request['method'] === 'GET') {
    $query =   "SELECT * FROM users";
    $result = mysqli_query($link, $query);
    $output = [];
    while($row = mysqli_fetch_assoc($result)){
      $output[] = $row;
    }
    $response['body'] = $output;
    send($response);
}

if ($request['method'] === 'POST') {
    $query =   "SELECT * FROM users";
    $result = mysqli_query($link, $query);
    $output = [];
    while($row = mysqli_fetch_assoc($result)){
      $output[] = $row;
    }
    $response['body'] = $output;
    send($response);
}