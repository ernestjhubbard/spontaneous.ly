<?php

require_once '../api/_lifecycle.php';

switch ($request['path']) {
  case '/':
    readfile('index.html');
    exit;
  case '/api/health-check':
    require_once "..${request['path']}.php";
  default:
    throw new ApiError("Cannot ${request['method']} ${request['path']}", 404);
}
