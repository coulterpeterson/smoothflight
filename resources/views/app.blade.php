<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>{{ config('app.name') }}</title>

        <!-- Styles -->
        <link rel="icon" href="{{ asset('assets/logo.svg') }}">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    </head>
    <body class="antialiased">
       <div id="app" class="h-screen"></div>

       <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
