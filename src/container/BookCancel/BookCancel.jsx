import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './BookCancel.css'

const BookCancel = () => {
    const navigate = useNavigate();

    const handleCancel = (event) => {
        navigate('/cancelled')
    }

    return(
        <div className="cancel-booking-body">
            <h2 className="p__cormorant">Cancel Booking?</h2>
            <p className="p__opensans">Are you sure you want to cancel your booking?</p>
            <button onClick={handleCancel}>Confirm Cancel</button>
        </div>
    );
}

export default BookCancel;