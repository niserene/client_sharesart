import React from 'react'
import {getDate, getTime} from '../../utils/Validation/Validation'
import './ContactsList.css'
import { FaEnvelope, FaPhone, FaPencilAlt, FaCalendar } from 'react-icons/fa'

const ContactsList = (props)=>{

    const ContactsListCard = (data)=>{

        const d = new Date(data.createdAt);
        const date = getDate(d);
        const time = getTime(d);
        return(
            <div className="contacts-list-card">
                
                <div className="contacts-list-card-item">
                    <FaCalendar className="contacts-list-card-icon"/>
                    <div className="contact-list-card-text">
                        {date+"  "+time}
                    </div>
                </div>

                <div className="contacts-list-card-item">
                    <FaEnvelope className="contacts-list-card-icon" />
                    <div className="contacts-list-card-text">
                        {data.email}
                    </div>
                </div>

                <div className="contacts-list-card-item">
                    <FaPhone className="contacts-list-card-icon" />
                    <div className="contacts-list-card-text">
                        {data.phone ? data.phone:'Unavailable'}
                    </div>
                </div>

                <div className="contacts-list-card-item">
                    <FaPencilAlt className="contacts-list-card-icon" />
                    <div className="contacts-list-card-text">
                        {data.message}
                    </div>
                </div>

            </div>
        )
    }
    
    var dataList = []
    for(let i=props.contactsList.length-1;i>=0;i--){
        dataList.push(props.contactsList[i])
    }
    var AllContactsList = dataList.map( item=>{
        return <ContactsListCard {...item} />
    })

    return(
        
        <div className="ContactsListContainer">
            <div className="contacts-list-container-heading">
                <h4 className="bottom-border">All the Contacts Request made to us</h4>
            </div>
            <div className="contacts-list-card-section">
                {AllContactsList}    
            </div>
        </div>
    )
}

export default ContactsList;