import "../assets/styles/Modal.css"
const Modal = ({ color }) => {
    const modalStyle = {
        outline: `1px solid ${color}`,
        transition: "all 1s ease-in-out"
    }
    const headerStyle = {
        borderBottom: `2px dashed ${color}`,
        transition: "all 1s ease-in-out"
    }
    const buttonStyle = {
        color: color,
        transition: "all 1s ease-in-out"
    }
    return (
        <>
        <div className="col-12">
            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                ?
            </button>
        </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" >
                    <div className="modal-content" style={modalStyle}>
                        <div className="modal-header" style={headerStyle}>
                            <h5 className="modal-title" id="exampleModalLabel">Welcome to Chiptune Machine</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-start mb-0 pb-0 ">

                            <p> - Lost? Use your keyboard or mouse to hear sounds.</p>
                            <p> - Bored? Change the sound set by toggling the "Bank" or "Noise" switches.</p>
                            <p> - Too low? Turn the volume up with the slider.</p>
                            <p> - Done? Turn the machine off with the power button.</p>
                            <p> - Have fun!</p>
                        </div>
                        <div className="modal-footer mt-0 pt-0 mx-auto">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal" style={buttonStyle}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;