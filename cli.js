#!/usr/bin/env mode

// import stuff
var minimist = require("minimist");
var nodeFetch = require("node-fetch");
var momentTimeZone = require("moment-timezone");

// get the arguments from command line
const[,, ...args] = process.argv;

// check if the user needs help
if (args == "--h") {
	// log help text
	console.log('	
Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE
    -h            Show this help message and exit.
    -n, -s        Latitude: N positive; S negative.
    -e, -w        Longitude: E positive; W negative.
    -z            Time zone: uses tz.guess() from moment-timezone by default.
    -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.
    -j            Echo pretty JSON from open-meteo API and exit.');
	exit(0);
}
const timezone = moment.tz.guess();
