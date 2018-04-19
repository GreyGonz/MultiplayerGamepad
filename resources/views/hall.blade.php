<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Gamepad API + NW.js Demo</title>
  {{--<script src="script.js"></script>--}}
  <script src="{!! mix('js/gamePads.js') !!}"></script>
  <style>
    div {
      position: absolute;
      left: calc(50vw - 25px);
      top: calc(50vh - 25px);
      background-color: red;
      width: 50px;
      height: 50px;
      border-radius: 25px;
    }
  </style>
</head>

<body>
<p>Press a button to activate your game controller.</p>
<div id="ball"></div>
<div id="ball2"></div>
</body>

</html>
