<!---
[![Build Status](https://travis-ci.org/jabiel/Elixir.svg?branch=master)](https://travis-ci.org/jabiel/Elixir)
-->

# Elixir
Simple Cordva/Ionic application build using Visual Studio

## Application is available in play store
https://play.google.com/store/apps/details?id=com.jabiel.elixir


## Installation
If new in cordova install it using npm

```bash
npm install -g cordova 
```

## Visual studio integration
This is vero old project and most of cordova/ionic version are deprecated
I had a trouble with debugging project from VS so this is how to run app outside VS

To run app in browser emulator:
```bash
cordova platform add browser
cordova run browser
```

To run app in android emulator:
```bash
cordova run android
```


## Testing
To run tests:

```bash
npm install -g karma-cli
npm test
```

## License
GNU General Public License v3.0
