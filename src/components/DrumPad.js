import React from "react";
import "../assets/styles/DrumPad.css";
const DrumPad = ({ drumKey, color, soundSource, noiseOn, soundBank, isPowerOn, handleClick }) => {
    const audioToPlay = React.useRef(null)
    let soundSet;
    if(noiseOn){
        soundSet = soundSource.sound_set_03[drumKey];
    } else if(soundBank){
        soundSet = soundSource.sound_set_02[drumKey];
    } else {
        soundSet = soundSource.sound_set_01[drumKey];
    }

    const audioPlay = (e) => {
        if (isPowerOn) {
            audioToPlay.current.play();
            handleClick(drumKey)
        }
    }
    return (
        <div className={`drum-pad ${drumKey} col rounded d-flex  align-items-center justify-content-center mb-2`}
            style={{borderColor: color, color: color, boxShadow: color}}
            onClick={audioPlay}
            id={soundSet.name.replace(" ", "-")}>

            {drumKey}

            <audio
                src={soundSet.source.replace(" ", "-")}
                ref={audioToPlay}
                className="clip"
                id={drumKey}>
            </audio>
        </div>
    )
}

export default DrumPad;