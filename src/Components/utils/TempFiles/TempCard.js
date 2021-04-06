import React from 'react'
import {Link} from 'react-router-dom'
import './TempCard.css'

function TempCard(props) {

    var data = props.data
    return (
        <div className="temp-container">
            <div className="temp-card">
                <h3 className="temp-card-item temp-card-heading">{data.heading}</h3>
                <h5 className="temp-card-item temp-card-info">{data.info}</h5>
                <p className="temp-card-item">
                    Back to <Link to="/auth/login">Login</Link>
                </p>
            </div>
        </div>
    )
}

export default TempCard
