import React from 'react'
import { FaInstagramSquare, FaLinkedinIn, FaTwitterSquare } from 'react-icons/fa'
import {MdPlace ,MdPhone ,MdEmail} from 'react-icons/md'
import {Link } from 'react-router-dom'
import { isEmail } from '../utils/Validation/Validation'
import './Footer.css'


class Footer extends React.Component {

    constructor(props){
        super();
        this.state={
            email:'',
            logo:'https://res.cloudinary.com/nishantdev/image/upload/v1617291221/NewLogoSharesArt_ericzs.png'
        }
        
        this.handleSubscribe = this.handleSubscribe.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubscribe(){
        const email = this.state.email;
        if(isEmail(email))
        {
            alert(email)
            this.props.newsLetter({email});
        }
    }
    handleChange(event)
    {
        var value = event.target.value;
        this.setState((state)=>{
            state['email'] = value;
            return state;
        })
    }
    render(){

        return (
            <div className="footer-container ">

                <div className="container-fluid footer">
                    
                    <div className="footer-logo">
                        <Link to='/' className={"footer-logo-item"}>
                            <img src={this.state.logo} alt="" className="footer-logo-img" />
                        </Link>
                        <p className={"footer-logo-description"}>The most trustable financial advisory at your service , the real advisor</p>
                    </div>

                    <div className="address-section">
                
                        <h4 className="footer-section-heading">
                            Get In Touch
                        </h4>
                
                        <div className="footer-section-item">
                            <MdPlace className="footer-section-icon"/>
                            <p className="footer-data">
                                125,shares Art & Comp. Unkonwn Road ,Dwarka - Delhi ,564100
                            </p>
                        </div>

                        <div className="footer-section-item">
                            <MdPhone className={"footer-section-icon"}/>
                            <p className=" footer-data">(+91) 963214785</p>
                        </div>

                        <div className="footer-section-item">
                            <MdEmail className={"footer-section-icon"} />
                            <p className=" footer-data">
                                sharesart@email.com
                            </p>
                        </div>

                    </div>
                    
                    <div className="social-media-email">
                        
                        <h4 className="footer-section-heading">
                            Connect with Us
                        </h4>
                        <h6>Follow Us</h6>                   
                        <div className="footer-soc">
                
                            <Link to="">
                                <FaInstagramSquare className="footer-soc-icon" />
                            </Link>
                        
                            <Link to="">
                                <FaLinkedinIn className="footer-soc-icon" />
                            </Link>
                        
                            <Link to="">
                                <FaTwitterSquare className="footer-soc-icon" />
                            </Link>
                        
                        </div>
                        
                        <div className="telegram-group">
                            
                            <h6> <Link>JOIN </Link> Our Telegram Channel</h6>
                        
                        </div>

                        <div className="news-letter">
                            
                            <h5>Subscribe to our News Letter</h5>
                            {/* <p>you may unsubscribe anytime</p> */}
                            <input 
                            type="email" 
                            placeholder="Your email" 
                            className="news-letter-input"
                            onChange={this.handleChange} />
                            <button className="subscribe-btn btn" onClick={this.handleSubscribe}>Subscribe</button>
                        
                        </div>

                    </div>

                    <div className="footer-explore">
                        <h4 className="footer-section-heading">
                            Explore
                        </h4>
                        <div className="footer-explore-section">
                            <Link className="footer-explore-item">
                                <h6>Home</h6>
                            </Link>
                            <Link className="footer-explore-item">
                                <h6>About Us</h6>
                            </Link>
                            <Link className="footer-explore-item">
                                <h6>Services</h6>
                            </Link>
                            <Link className="footer-explore-item">
                                <h6>Contact Us</h6>
                            </Link>
                            <Link className="footer-explore-item">
                                <h6>Careers</h6>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="footer-end">
                    <p className='footer-end-para'>Copyright <span>&copy; 2021 </span>Shares Art & Company </p>
                    <p className="footer-end-para">All rights reserved.</p>
                </div>
                
            </div>
        )
    }
}

export default Footer;
