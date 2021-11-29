import React from "react";
import { NativeModules } from "react-native";



const url = WebSocket('ws://token-network.herokuapp.com/ws');

url.onmessage = function(event) {
	var message = null
};


export var url;
