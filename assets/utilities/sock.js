import React from "react";
import { NativeModules } from "react-native";



	var ws = new WebSocket("ws://token-network.herokuapp.com/ws");

// 	ws.onopen = function (event){
// 		ws.send("hello from client");
// 	};

	ws.onmessage = function (event){
		var data = JSON.parse(event.data);
		document.getElementById("chain").textContent = data;
		console.log(event.data);
		console.log(data);
		return data
	};


export { ws as CHAINDATA };
