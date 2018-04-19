@extends('layouts.app')

@push('styles')
  <link href="{{ asset('css/ball.css') }}" rel="stylesheet">
@endpush

@push('scripts')
  <script src="{!! mix('js/gamePads.js') !!}"></script>
@endpush

@section('content')
  <div>
    <p>Press a button to activate your game controller.</p>
    <div id="ball"></div>
    <div id="ball2"></div>
  </div>
@endsection


{{--<!DOCTYPE html>--}}

{{--<html lang="en">--}}

{{--<head>--}}
  {{--<meta charset="UTF-8">--}}
  {{--<title>Gamepad API + NW.js Demo</title>--}}
  {{--<script src="script.js"></script>--}}
  {{--<meta name="csrf-token" content="{{ csrf_token() }}">--}}
  {{--<meta name="user" content="{{ Auth::user() }}">--}}
  {{--<style>--}}
    {{--div {--}}
      {{--position: absolute;--}}
      {{--left: calc(50vw - 25px);--}}
      {{--top: calc(50vh - 25px);--}}
      {{--background-color: red;--}}
      {{--width: 50px;--}}
      {{--height: 50px;--}}
      {{--border-radius: 25px;--}}
    {{--}--}}
  {{--</style>--}}
{{--</head>--}}

{{--<body>--}}
{{--<p>Press a button to activate your game controller.</p>--}}
{{--<div id="ball"></div>--}}
{{--<div id="ball2"></div>--}}

{{--<script src="{!! mix('js/app.js') !!}"></script>--}}
{{--<script src="{!! mix('js/gamePads.js') !!}"></script>--}}

{{--</body>--}}

{{--</html>--}}
