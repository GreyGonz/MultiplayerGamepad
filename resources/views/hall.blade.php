@extends('layouts.app')

@push('styles')
  <link href="{{ asset('css/ball.css') }}" rel="stylesheet">
@endpush

@push('scripts')
  <script src="{{ mix('js/gamePads.js') }}" defer></script>
@endpush

@section('content')
  <div>
    <p>Press a button to activate your game controller.</p>
    <div class="ball" id="ball"></div>
    <div class="ball" id="ball2"></div>
  </div>
@endsection
