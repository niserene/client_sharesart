import React from 'react'
import { isEmail } from '../utils/Validation/Validation';
import './ContactUs.css'
class ContactUs extends React.Component{

    constructor(props){
        super();
        this.state={
            username:'',
            email:'',
            phone:'',
            message:'',
            callback:true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(event){
        var key = event.target.name
        var value = event.target.value
        if( key === 'callback')value = event.target.checked
        this.setState((state)=>{
            state[key] = value;
            return state;
        })
    }
    
    handleSubmit(event){
        event.preventDefault();
        const email = this.state.email
        const message = this.state.message
        const phone = this.state.phone
        const username = this.state.username
        const callback = this.state.callback
        if(isEmail(email))
        {
            this.props.contactRequest({
                email,message,phone,username,callback
            });
        }
    }
    
    handleCancel(){
        this.setState((state)=>{
            return {
                ...state,
                username:'',
                callback:false,
                email:'',
                message:'',
                phone:''
            }
        })
    }
    render(){
        return (
            <div className="contact-container">

                <div className="contact-heading">
                    <h2 className="contact-text" id="contact-heading">
                        <a href="#contact-form">Get In Touch</a>
                    </h2>
                    <div className="contact-soc-icons">
                        <div className="contact-icon">f</div>
                        <div className="contact-icon">G</div>
                        <div className="contact-icon">in</div>
                    </div>
                </div>
                
                <div className="contact-form" id="contact-form">
                    
                    <div className="contact-form-item">
                        <input 
                        type="text"
                        placeholder="Your Name"
                        id="username"
                        name="username"
                        className="contact-input"
                        onChange={this.handleChange}
                        value={this.state.username} 
                        />
                    </div>
                    <div className="contact-form-item">
                        <input 
                        type="email"
                        placeholder="Your Email Address"
                        id="email"
                        name="email"
                        className="contact-input"
                        onChange={this.handleChange}
                        value={this.state.email} 
                        />
                    </div>
                    <div className="contact-form-item">
                        <input 
                        type="tel"
                        placeholder="Contact Number"
                        id="phone"
                        name="phone"
                        className="contact-input" 
                        value={this.state.phone}
                        onChange={this.handleChange}
                        />
                    </div>
                    
                    <div className="contact-form-item">
                        <textarea 
                        placeholder="Your Message here"
                        id="message"
                        name="message"
                        className="contact-input" 
                        rows="8"
                        onChange = {this.handleChange}
                        value = {this.state.message}
                        ></textarea>
                    </div>

                    <div className="contact-form-item">
                        <input 
                        type="checkbox"
                        checked={this.state.callback}
                        id="callback"
                        name="callback"
                        onChange={this.handleChange}
                        className="contact-checkbox" 
                        />
                        <label htmlFor="callback" className="contact-label">Request a Callback</label>
                    </div>
                    <div className="contact-form-item">
                        <button className="contact-btn" onClick = {this.handleCancel}>
                            Cancel
                        </button>
                        <button className="contact-btn" onClick = {this.handleSubmit}>
                            Send
                        </button>
                    </div>
                </div>
    
            </div>
        )
    }
}

export default ContactUs
