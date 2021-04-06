import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import './MainComponent.css'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import HomePage from './Home/HomePage' ;
import AboutUs from './AboutUs/AboutUs'
import Services from './Services/Services'
import ContactUs from './ContactUs/ContactUs';
import Forgot from './ForgotPassword/Forgot'
import { HomeData } from './Data/HomeData';
import { AboutData } from './Data/AboutData';
import { ServicesData } from './Data/ServicesData';
import ActivationEmail from './Auth/ActivationEmail';
import Reset from './ForgotPassword/Reset'
import {connect} from 'react-redux'
import { activateAccount, loginUser, loginUserGoogle, logoutUser, signupUser } from '../Redux/Actions/authAction';
import {resetPassword, forgotPassword} from '../Redux/Actions/passwordAction'
import {contactUsRequest, newsLetterRequest} from '../Redux/Actions/usersAction'
import {showToast, hideToast} from '../Redux/Actions/toastAction'
import Auth from './Auth/Auth';
import UserProfile from './User/UserProfile';
import AllUser from './User/AllUsers'
import Error404 from './Error404/Error404';
import { InitialSetup } from '../Redux/Actions/initialSetup';
import Toast from './utils/ToastFile/Toast';
import { getAllContactsRequests, getAllNewsLetterRequests, getAllUsers } from '../Redux/Actions/adminAction';
import NewsLetterList from './User/NewsLetterList/NewsLetterList';
import ContactsList from './User/ContactList/ContactsList.js'
 

const mapStateToProps = state=>{
    return{
        auth : state.auth,
        token : state.token,
        users:state.users,
        toast : state.toast,
        password:state.password,
        admin : state.admin
    }
}

const mapDispatchToProps = (dispatch) =>({

    initialSetup : ()=>{dispatch(InitialSetup())} ,
    loginUser : (data)=>{ dispatch(loginUser( data ))},
    loginUserGoogle : (data)=>{ dispatch(loginUserGoogle( data ))},
    signupUser : (data)=>{ dispatch(signupUser( data ))},
    activateAccount :(data)=>{ dispatch(activateAccount(data))},
    logoutUser : ()=>{ dispatch(logoutUser())},
    newsLetter : (data)=>{ dispatch(newsLetterRequest(data))},
    contactRequest:(data)=>{dispatch(contactUsRequest(data))} ,
    showToast : (data)=>{dispatch(showToast(data))},
    hideToast : ()=>{dispatch(hideToast())},
    resetPassword : (data)=>{dispatch(resetPassword(data))},
    forgotPassword: (data)=>{dispatch(forgotPassword(data))},
    getAllUsers : ()=>{dispatch(getAllUsers())},
    getAllNewsLetterRequests:()=>{dispatch(getAllNewsLetterRequests())},
    getAllContactsRequests : ()=> {dispatch(getAllContactsRequests())}

})
class MainComponent extends React.Component{

    constructor(){
        super();
        
        this.state = {
            theme:'dark'
        }
    }
    componentDidMount()
    {
        this.props.initialSetup();
    }
    
    render(){
        const isLogged = this.props.auth.isLogged
        
        const NavbarData = {
            theme:'dark',
            isLogged:isLogged
        }
        const UserProfileData = {
            isAdmin:this.props.auth.isAdmin,
            isLogged:isLogged,
            user : this.props.auth.user,
            logoutUser:this.props.logoutUser,
            getAllUsers: this.props.getAllUsers,
            getContacts: this.props.getAllContactsRequests,
            getNewsLetter:this.props.getAllNewsLetterRequests
        }
        var AuthData = {
            isLoading:this.props.auth.isLoading,
            err:this.props.auth.err,
            errData:this.props.auth.errData,
            loginUser:this.props.loginUser,
            signupUser:this.props.signupUser,
            loginUserGoogle:this.props.loginUserGoogle,
            auth : this.props.auth
        }
        var ToastData = {
            show:this.props.toast.show,
            message:this.props.toast.message,
            time:this.props.toast.time,
            color: this.props.toast.color,
            hideToast:this.props.hideToast
        }
        var ForgotData = {
            forgotPassword:this.props.forgotPassword,
            data:{
                ...(this.props.password.forgot.data)
            },
            err:this.props.password.forgot.err,
            show:this.props.password.forgot.show,
            reshow:this.props.password.forgot.reshow,
            isLoading:this.props.password.forgot.isLoading
        }
        var ActivationData = {
            activateAccount:this.props.activateAccount,
            isLoading:false,
            data:{
                heading:'Email Activation',
                info:'Email activation done succesfully :)'
            }
        }
        var ResetData = {
            resetPassword:this.props.resetPassword,
            isDone:this.props.password.reset.isDone,
            err:this.props.password.reset.err,
            isLoading:this.props.password.reset.isLoading,
            data:{
                ...(this.props.password.reset.data)
            }
        }
        var AllUserData = {
            isAdmin: this.props.auth.isAdmin,
            allUsers:this.props.users.allUsers,
            isLoading:this.props.users.isLoading,
            err:this.props.users.err,
            data:this.props.users.data,
            getAllUsers: this.props.getAllUsers
        }
        var FooterData = {
            newsLetter:this.props.newsLetter
        }
        var ContactUsData = {
            contactRequest:this.props.contactRequest
        }

        var NewsLetterListData = {
            newsLetter:this.props.admin.newsLetterList
        }
        var ContactsListData = {
            contactsList:this.props.admin.contactsList
        }
        return (
            <>
              <Navbar {...NavbarData} />
              <Switch>
              
                  <Route path='/' exact component = {()=><HomePage data={HomeData} />} />
                  
                  <Route path='/about-us' exact component = {()=><AboutUs data={AboutData} />} />
                  
                  <Route path='/services' exact component = {()=><Services data={ServicesData}/>} />
                  
                  <Route path='/contact-us' exact component = {()=><ContactUs {...ContactUsData} />} />
                  
                  <Route path='/auth' component= {()=><Auth {...AuthData} />} />
                  
                  <Route path='/user/activate/:activation_token' exact component={()=><ActivationEmail {...ActivationData }/>} />
                  <Route path='/userprofile' exact component={()=> isLogged? <UserProfile {...UserProfileData} /> : <Error404 />}/>
                  
                  <Route path='/not-found' exact component = {()=><Error404 />} />

                  <Route path='/forgot-password' exact component = {()=> <Forgot {...ForgotData}/> } />

                  <Route path = '/user/reset/:reset_token' exact component = {()=> <Reset {...ResetData} />} />

                  <Route path = '/alluser' exact component={()=><AllUser {...AllUserData}/> } />

                  <Route path = '/newsLetterList' exact component={()=><NewsLetterList {...NewsLetterListData}/> } />
                  
                  <Route path = '/contactsList' exact component={()=><ContactsList {...ContactsListData}/> } />

                  <Route component={()=> <Error404/>} />  
                  
              </Switch>

              <Footer {...FooterData} />
              <Toast {...ToastData}/>
            </>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));