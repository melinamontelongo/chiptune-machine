import "../assets/styles/DrumButton.css";

const DrumButton = ({ textToDisplay, isTrue, handleChange, color }) => {
    return (
        <div className="col-12 mx-auto power-container text-center mb-4">
            {textToDisplay}
            <div className="power-button" onClick={handleChange}>
                <div className={`switch ${isTrue ? "" : "float-end"}`} style={{backgroundColor: color}}></div>
            </div>
        </div>
    )
};

export default DrumButton;