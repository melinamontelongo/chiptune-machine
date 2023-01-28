import "../assets/styles/SliderVolume.css"
const SliderVolume = ({ handleChange }) => {
    return(
        <div className="slider">
            <p className="m-0 p-0">Volume</p>
            <input className="m-0 p-0" type="range" min="0" max="100" step="10" onChange={handleChange}></input>
        </div>
    )
};

export default SliderVolume;