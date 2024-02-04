import React from "react";
import { useNavigate } from "react-router-dom";
import './CancelConfirm.css'

const CancelConfirm = () => {
    const navigate = useNavigate();

    const handleReturnHome = (event) => {
        navigate('/')
    }

    return(
        <div className="cancelled-body">
            <h2 className="p__cormorant">Booking Cancelled</h2>
            <p className="p__opensans">Your reservation has been cancelled.</p>
            <button onClick={handleReturnHome}>Return Home</button>
        </div>
    );
}

export default CancelConfirm;