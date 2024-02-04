import React from "react";
import {useNavigate} from "react-router-dom";
import './BookConfirm.css'

const BookConfirm = () => {
    const navigate = useNavigate();

    const handleCancel = (event) => {
        navigate('/cancel')
    } 

    const handleGoHome = (event) => {
        navigate('/')
    } 

    return(
    <section className="cancel-booking-body">
        <h2 className="p__cormorant">Thank You for Booking!</h2>
        <p className="p__opensans">Your response has been recorded.</p>
        <button onClick={handleGoHome}>Go Home</button>
        <button onClick={handleCancel}>Cancel Booking</button>
    </section>
    )
};

export default BookConfirm;