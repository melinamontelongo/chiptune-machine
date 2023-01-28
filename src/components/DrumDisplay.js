import "../assets/styles/DrumDisplay.css";
const DrumDisplay = ({ pressedKey, keyData, noiseOn, soundBank, color}) => {
    let soundName;
    if (noiseOn) {
        soundName = keyData.sound_set_03[pressedKey]
    } else if (soundBank) {
        soundName = keyData.sound_set_02[pressedKey]
    } else {
        soundName = keyData.sound_set_01[pressedKey]
    }
    
    return (
        <div id="display" className="col-12 mb-2">
            <div className="drum-display-background rounded">
                <p className="drum-display"
                    style={{color: color}}
                    dangerouslySetInnerHTML={pressedKey && soundName !== undefined ? { __html: soundName.name } : { __html: "<br />" }} />
            </div>
        </div>
    );
};

export default DrumDisplay;