import React from 'react'
import './ProfileCard.css'
import { FaPhoneAlt, FaEnvelope,FaPaperclip, FaUserAlt } from 'react-icons/fa'

function ProfileCard(props) {

    return (
        <div className="profile-card-container">
            
            <div className="profile-card-item">
                <FaPaperclip className="profile-card-icon"/>
                <h5 className="profile-card-value">{props.role===1?'admin':'Customer'}</h5>
            </div>

            <div className="profile-card-item">
                <FaUserAlt className="profile-card-icon"/>
                <h5 className="profile-card-value">{props.username}</h5>
            </div>
            
            <div className="profile-card-item">
                <FaEnvelope className="profile-card-icon"/>
                <h5 className="profile-card-value">{props.email}</h5>
            </div>

            <div className="profile-card-item">
                <FaPhoneAlt className="profile-card-icon"/>
                <h5 className="profile-card-value">{props.phone?props.phone:'Unavailable'}</h5>
            </div>
        
        </div>
    )
}

export default ProfileCard
