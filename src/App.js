import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Unity, { UnityContext } from "react-unity-webgl";
import BtnGeneral from './components/BtnGeneral/';
import axios from 'axios';

const unityContext = new UnityContext({
  loaderUrl: "./Game/Build/Game.loader.js",
  dataUrl: "./Game/Build/Game.data",
  frameworkUrl: "./Game/Build/Game.framework.js",
  codeUrl: "./Game/Build/Game.wasm",
});

function App() {

  async function ResponseGetPlayer() {
    try {      
      const res = await axios.get(`https://boredaperacersdev.free.mockoapp.net/GetPlayer`);
      unityContext.send("GameController", "GetPlayer", JSON.stringify(res.data));      
    } catch (error) {
      console.log(error);
    }
  }

  async function ResponseGetCars() {
    try {      
      const res = await axios.get(`https://boredaperacersdev.free.mockoapp.net/GetCars`);
      unityContext.send("GameController", "GetCars", JSON.stringify(res.data));      
    } catch (error) {
      console.log(error);
    }
  }

  async function ResponseGetWorlds() {
    try {      
      const res = await axios.get(`https://boredaperacersdev.free.mockoapp.net/GetWorlds`);
      unityContext.send("GameController", "GetWorlds", JSON.stringify(res.data));      
    } catch (error) {
      console.log(error);
    }
  }

  async function ResponseGetCircuits(worldId) {
    try {      
      const res = await axios.get(`https://boredaperacersdev.free.mockoapp.net/GetCircuits`, worldId);
      unityContext.send("GameController", "GetCircuits", JSON.stringify(res.data));      
    } catch (error) {
      console.log(error);
    }
  }

  async function ResponseGetCircuitTimes(worldId) {
    try {      
      const res = await axios.get(`https://boredaperacersdev.free.mockoapp.net/GetCircuitTimes`, worldId);
      unityContext.send("GameController", "GetCircuitTimes", JSON.stringify(res.data));      
    } catch (error) {
      console.log(error);
    }
  }
  async function ResponseGetRankings(worldId) {
    try {      
      const res = await axios.get(`https://boredaperacersdev.free.mockoapp.net/GetRankings`, worldId);
      unityContext.send("GameController", "GetRankings", JSON.stringify(res.data));      
    } catch (error) {
      console.log(error);
    }
  }

  async function ResponseBuyCar(carId) {
    try {      
      const res = await axios.post(`https://boredaperacersdev.free.mockoapp.net/BuyCar`, carId);
      unityContext.send("GameController", "BuyCar", JSON.stringify(res.data));      
    } catch (error) {
      console.log(error);
    }
  }

  async function ResponseSelectCar(carId) {
    try {      
      const res = await axios.post(`https://boredaperacersdev.free.mockoapp.net/SelectCar`, carId);
      unityContext.send("GameController", "SelectCar", JSON.stringify(res.data));      
    } catch (error) {
      console.log(error);
    }
  }

  async function ResponseStartGame(worldId) {
    try {      
      const res = await axios.post(`https://boredaperacersdev.free.mockoapp.net/StartGame`, worldId);
      unityContext.send("GameController", "StartGame", JSON.stringify(res.data));      
    } catch (error) {
      console.log(error);
    }
  }

  async function ResponseCompleteCircuit(circuit) {
    try {      
      const res = await axios.post(`https://boredaperacersdev.free.mockoapp.net/CompleteCircuit`, circuit);
      unityContext.send("GameController", "CompleteCircuit", JSON.stringify(res.data));      
    } catch (error) {
      console.log(error);
    }
  }

  async function ResponseUpdatePlayerSettings(settings) {
    try {      
      const res = await axios.post(`https://boredaperacersdev.free.mockoapp.net/UpdatePlayerSettings`, settings);
      unityContext.send("GameController", "UpdatePlayerSettings", JSON.stringify(res.data));      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    unityContext.on("GetPlayer", function () {      
      ResponseGetPlayer();
    });

    unityContext.on("GetCars", function () {      
      ResponseGetCars();
    });

    unityContext.on("GetWorlds", function () {      
      ResponseGetWorlds();
    });

    unityContext.on("GetCircuits", function (worldId) {      
      ResponseGetCircuits(worldId);
    });

    unityContext.on("GetCircuitTimes", function (worldId) {      
      ResponseGetCircuitTimes(worldId);
    });

    unityContext.on("GetRankings", function (worldId) {      
      ResponseGetRankings(worldId);
    });

    unityContext.on("BuyCar", function (carId) {      
      ResponseBuyCar(carId);
    });

    unityContext.on("SelectCar", function (carId) {      
      ResponseSelectCar(carId);
    });

    unityContext.on("StartGame", function (worldId) {      
      ResponseStartGame(worldId);
    });

    unityContext.on("CompleteCircuit", function (circuit) {      
      ResponseCompleteCircuit(circuit);
    });

    unityContext.on("UpdatePlayerSettings", function (settings) {      
      ResponseUpdatePlayerSettings(settings);
    });

  }, []);

  return (
    <div className="App">
      
      <Unity unityContext={unityContext}
      style={{
        width: '50%', height: 500, background: "black"
      }}
      />

    </div>
  );
}

export default App;
