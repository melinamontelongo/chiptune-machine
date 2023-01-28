import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useEffect, useState, useCallback } from "react";
import DrumPad from "./components/DrumPad";
import DrumDisplay from "./components/DrumDisplay";
import DrumButton from "./components/DrumButton";
import SliderVolume from "./components/SliderVolume";
import Modal from "./components/Modal";
import drumData from "./assets/sounds_data.json";

function App() {

  //Power state
  const [powerOn, setPower] = useState(true);
  //Audio volume
  const [volume, setVolume] = useState(50);
  //Key pressed
  const [currentKey, setKey] = useState(null);
  //Bank (current sound set)
  const [bankOn, setBank] = useState(false);
  //Noise (noise sound set)
  const [noiseOn, setNoise] = useState(false);
  //Colors in keys
  const [colorIndex, setColorIndex] = useState(0);
  const [color, setColor] = useState("red");

  //To play current audio
  const playAudio = useCallback((audioId) => {
    const audioToPlay = document.getElementById(audioId);
    if (audioToPlay) {
      audioToPlay.volume = volume / 100;
      audioToPlay.play();
      audioToPlay.currentTime = 0;
    }
  }, [volume])

  //Adding/Removing listeners
  useEffect(() => {
    //Handler to set currentKey on keyDown
    const handleKeydown = e => {
      if (powerOn) {
        const pressedKey = e.key.toUpperCase()
        const keyElement = document.getElementsByClassName(pressedKey)[0]
        setKey(pressedKey);
        playAudio(pressedKey);
        //Adding style if exists
        if (keyElement) {
          keyElement.classList.add("drum-pad-active")
        }
      }
    }
    //Handler to remove key's active style
    const handleKeyup = e => {
      const pressedKey = e.key.toUpperCase()
      const keyElement = document.getElementsByClassName(pressedKey)[0]
      //Removing style if exists
      if (keyElement) {
        keyElement.classList.remove("drum-pad-active")
      }
    }
    //Add keydown listener and clean up
    document.addEventListener("keydown", handleKeydown)
    document.addEventListener("keyup", handleKeyup)
    return () => {
      document.removeEventListener("keydown", handleKeydown)
      document.removeEventListener("keyup", handleKeyup)
    };
  }, [powerOn, playAudio]);

  //Changing colors
  useEffect(() => {
    const colors = ["rgb(253, 32, 32)", "rgb(255, 11, 125)", "rgb(150, 21, 255)", "rgb(36, 39, 255)", "rgb(1, 255, 179)", "rgb(179, 255, 1)"];
      if(powerOn){
        setTimeout(() => {
          const nextColorIndex = colorIndex + 1
          if (colors[nextColorIndex]) {
            setColor(colors[nextColorIndex])
            setColorIndex(nextColorIndex)
          } else {
            setColor(colors[0])
            setColorIndex(0)
          };
        }, 1500);
      } else {
        setColor(null)
      }
  }, [colorIndex, color, powerOn])

  //Handler to update pressed key
  const handleClick = (clickedKey) => {
    setKey(clickedKey);
    playAudio(clickedKey.toUpperCase())
  };
  //Handler to manage power
  const handlePowerChange = () => {
    setPower(!powerOn)
  };
  //Handler to manage volume change
  const handleVolumeChange = e => {
    setVolume(parseInt(e.target.value))
  }
  //Handler to manage sound set change
  const handleBankChange = () => {
    setBank(!bankOn)
  }
  //Handler to manage noise toggle
  const handleNoiseChange = () => {
    setNoise(!noiseOn)
  }
  return (
    <div className="App d-flex justify-content-center align-items-center">
      <div className="drum-container container rounded" id="drum-machine" style={{outlineColor: color}}>
        <div className="row d-flex align-items-center justify-content-center ps-md-4 ps-2 pe-2 mb-4 ">
          <div className="col-12 col-md-8 mt-4">
            <div className="row">
              <DrumPad drumKey={"Q"} color={color} soundSource={drumData} noiseOn={noiseOn} soundBank={bankOn} isPowerOn={powerOn} handleClick={handleClick} />
              <DrumPad drumKey={"W"} color={color} soundSource={drumData} noiseOn={noiseOn} soundBank={bankOn} isPowerOn={powerOn} handleClick={handleClick} />
              <DrumPad drumKey={"E"} color={color} soundSource={drumData} noiseOn={noiseOn} soundBank={bankOn} isPowerOn={powerOn} handleClick={handleClick} />
            </div>
            <div className="row">
              <DrumPad drumKey={"A"} color={color} soundSource={drumData} noiseOn={noiseOn} soundBank={bankOn} isPowerOn={powerOn} handleClick={handleClick} />
              <DrumPad drumKey={"S"} color={color} soundSource={drumData} noiseOn={noiseOn} soundBank={bankOn} isPowerOn={powerOn} handleClick={handleClick} />
              <DrumPad drumKey={"D"} color={color} soundSource={drumData} noiseOn={noiseOn} soundBank={bankOn} isPowerOn={powerOn} handleClick={handleClick} />
            </div>
            <div className="row">
              <DrumPad drumKey={"Z"} color={color} soundSource={drumData} noiseOn={noiseOn} soundBank={bankOn} isPowerOn={powerOn} handleClick={handleClick} />
              <DrumPad drumKey={"X"} color={color} soundSource={drumData} noiseOn={noiseOn} soundBank={bankOn} isPowerOn={powerOn} handleClick={handleClick} />
              <DrumPad drumKey={"C"} color={color} soundSource={drumData} noiseOn={noiseOn} soundBank={bankOn} isPowerOn={powerOn} handleClick={handleClick} />
            </div>
          </div>
          <div className="col-12 col-md-4 text-center">
            <div className="row">
              <DrumButton textToDisplay={"Power"} isTrue={powerOn} handleChange={handlePowerChange} color={color}/>
              <DrumDisplay pressedKey={currentKey} keyData={drumData} noiseOn={noiseOn} soundBank={bankOn} color={color}/>
              <SliderVolume handleChange={handleVolumeChange} />
              <DrumButton textToDisplay={"Bank"} isTrue={bankOn} handleChange={handleBankChange} color={color}/>
              <DrumButton textToDisplay={"Noise"} isTrue={noiseOn} handleChange={handleNoiseChange} color={color}/>
              <Modal color={color}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
