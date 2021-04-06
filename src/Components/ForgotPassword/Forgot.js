import React from 'react'
import {Link} from 'react-router-dom'
import TempCard from '../utils/TempFiles/TempCard'
import Loading from '../utils/Loading/Loading'
import './Forgot.css'

class Forgot extends React.Component{

    constructor(props){
        super();
        this.state = {
            email:'',
            info:'No Issue! Enter you registered email in the section below and we will send you an email with instructions to reset your password.',
            logo:'https://res.cloudinary.com/nishantdev/image/upload/v1616769648/sharesArtLogo_iqmdsv.png'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNoChange = this.handleNoChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event)
    {
        var value = event.target.value;
        this.setState((state)=>{
            state['email'] = value;
            return state;
        })
    }
    handleNoChange(){

    }
    handleSubmit(email)
    {
        alert('submit '+email);
        this.props.forgotPassword({email});
    }
    render()
    {
        var err = this.props.err
        var show = this.props.show
        var reshow = this.props.reshow
        var heading = this.props.data.heading
        var info = this.props.data.info
        var email = this.props.data.email
        // alert(email)
        if(err)return <TempCard data={this.props.data}/>
        else if(this.props.isLoading) return <Loading />
        else return(

            <div className="forgot">
                <div className="forgot-container">
                    <div className="forgot-logo">
                        <img src={this.state.logo} alt="" className="forgot-logo-img"/>
                        <h3 className="forgot-logo-heading">For Financial Freak</h3>
                    </div>
                    <div className="forgot-section">
                        
                        <h4 className="forgot-logo-heading forgot-section-item">{heading}</h4>
                        
                        <p className="forgot-section-info forgot-section-item">{info}</p>
                        
                        <input
                        style = {{display:err?'none':''}} 
                        type="email"
                        placeholder="Your Email"
                        onChange={show?this.handleChange:this.handleNoChange}
                        value = {show?this.state.email:email}
                        name = "email"
                        className = "forgot-section-item forgot-section-input"
                        />

                        <button style={{display:err?'none':''}} className="forgot-section-item forgot-section-btn" onClick={show?()=>this.handleSubmit(this.state.email):()=>this.handleSubmit(email)}>
                            {reshow?"Resend the Link":"Send the Link"}
                        </button>

                        <p className="forgot-section-item">
                            Back to <Link to="/auth/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div>    

        )
    }

}

export default Forgot;