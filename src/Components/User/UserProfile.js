import React from 'react'
import './UserProfile.css'
import { FaUserAlt ,FaEnvelope, FaPhoneAlt,FaPaperclip} from 'react-icons/fa';
import {Link } from 'react-router-dom'
class UserProfile extends React.Component{

    constructor(props){
        super();
        this.state={
            isLogged:props.isLogged,
            username:props.user.username,
            email:props.user.email,
            phone:'Unavailable',
            imgUrl:'https://res.cloudinary.com/nishantdev/image/upload/v1617210093/undraw_Profile_data_re_v81r_gwdvo0.svg'
        }
        this.handleLogout = this.handleLogout.bind(this);
    }
    componentDidMount(){
        // alert("props"+JSON.stringify(this.props))
        this.setState((state)=>{
            state.isLogged=this.props.isLogged
            state.username=this.props.user.username
            state.email=this.props.user.email
            return state;
        })
        this.handleLogout = this.handleLogout.bind(this);
        this.handleAllUser = this.handleAllUser.bind(this);
        this.handleGetContacts = this.handleGetContacts.bind(this);
        this.handleGetNewsLetter = this.handleGetNewsLetter.bind(this);
    }
    handleLogout()
    {
        this.props.logoutUser();
    }
    handleAllUser(){
        this.props.getAllUsers();
    }
    handleGetNewsLetter(){
        this.props.getNewsLetter();
    }
    handleGetContacts(){
        this.props.getContacts();
    }
    render()
    {
        const username = this.props.user.username
        const email = this.props.user.email
        const isAdmin = this.props.isAdmin
        return(
            <div className="userprofile-container">
                <div className="userprofile-section">
                    <div className="userprofile-img-section">
                        <img src={this.state.imgUrl} alt="" className="userprofile-img"/>
                    </div>
                    <div className="userprofile">
                    <div style={{display:isAdmin?'':'none'}} className="userprofile-item">
                            <FaPaperclip className="userprofile-icon" />
                            <h6 className="userprofile-value">admin</h6>
                        </div>
                        <div className="userprofile-item">
                            <FaUserAlt className="userprofile-icon" />
                            <h5 className="userprofile-value">{username}</h5>
                        </div>
                        <div className="userprofile-item">
                            <FaEnvelope className="userprofile-icon" />
                            <h5 className="userprofile-value">{email}</h5>
                        </div>
                        <div className="userprofile-item">
                            <FaPhoneAlt className="userprofile-icon" />
                            <h5 className="userprofile-value">{this.state.phone}</h5>
                        </div>
                        <div className="userprofile-item userprofile-btnList">
                        
                            <Link className="userprofile-btn"
                            onClick={this.handleLogout} >
                                Logout
                            </Link>
                            
                            <Link to='/user/reset/changepassword' className="userprofile-btn">
                                Reset Password
                            </Link>
                            
                            <Link to="/alluser" 
                             style={{display:isAdmin?'':'none'}}
                             className="userprofile-btn"
                             onClick={this.handleAllUser}>
                                All Users
                            </Link>
                            
                            <Link to="/newsLetterList" 
                             style={{display:isAdmin?'':'none'}}
                             className="userprofile-btn"
                             onClick={this.handleGetNewsLetter}>
                                NewsLetter Subscribers
                            </Link>

                            <Link to="/contactsList" 
                             style={{display:isAdmin?'':'none'}}
                             className="userprofile-btn"
                             onClick={this.handleGetContacts}>
                                Customer Messages
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="user-settings">
                    <h2 className="user-settings-heading">
                        User Activities
                    </h2>
                    <div className="user-activity">
                        NOTHING TO SHOW 
                    </div>
                </div>
            </div>
        )
    }
}
export default UserProfile
