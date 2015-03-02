# UIBlocker

A wrapper around the [BlockUI](https://github.com/malsup/blockui) jQuery
plugin to block the UI while a function is running.  If the wrapped function
returns a promise, the UI will be blocked until the promise is resolved.

## Install

npm install --save uiblocker

## Usage

var uiblocker = require('uiblocker');

var blockedFunction = uiblocker.makeBlocked(fn);

## Credits

Based on code developed for [GreatVines Mobile](https://itunes.apple.com/us/app/greatvines/id619865435).

UI Blocking done by [Mike Alsup's](https://github.com/malsup) code.
