<?php

require_once '../api/_lifecycle.php';

switch ($request['path']) {
  case '/':
    readfile('index.html');
    exit;
  case '/api/points':
  case '/api/users':
  case '/api/reservations':
  case '/api/all-activities':
  case '/api/activity-details':
  case '/api/health-check':
    require_once "..${request['path']}.php";
  default:
    throw new ApiError("Cannot ${request['method']} ${request['path']}", 404);
}
