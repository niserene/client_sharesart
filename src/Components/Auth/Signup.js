import React from 'react'
import {Link} from 'react-router-dom'
import './Signup.css'
import {FaUserAlt, FaEnvelope, FaKey, FaEye, FaEyeSlash, FaArrowAltCircleRight} from 'react-icons/fa';
import {isEmail, isLength, goodSignup, goodSignin } from '../utils/Validation/Validation';
// import {GoogleLogin} from 'react-google-login'

const Eye = ({value,change})=>{
    return (!value?<FaEye onClick={change} className="input-icon ml5"/> : <FaEyeSlash onClick={change} className="input-icon ml5" />)
}
class Signup extends React.Component{
    
    constructor(props){        
        super();
        this.state = {
            click:true,
            username:'',
            email:'',
            password:'',
            cf_password:'',
            passV:false,
            btnText:'',
            loginText:'Login/SignIn Here',
            signupText:'Register/SignUp Here',
            err:'',
            success:'',
            authData:{},
            usernameErr:'',
            passwordErr:'',
            emailErr:'',
            pA:false,
            eA:false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handlePath = this.handlePath.bind(this);
        this.handlePassV = this.handlePassV.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
    }
    componentDidMount(){

        // alert("Auth here"+JSON.stringify(this.props.authData))
        this.setState((state)=>{
            state['theme'] = this.props.theme
            state['authData'] = this.props.authData
            state['click'] = this.props.click
            return state;
        })
    }

    handlePassV(){
        const res = !(this.state.passV)
        this.setState((state)=>{
            state['passV'] = res
            return state;
        })
    }
    handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        var eA = this.state.eA,pA = this.state.pA
        if(name==='password')pA = true;
        if(name==="email")eA = true;
        var passwordErr = this.state.passwordErr, emailErr = this.state.emailErr
        if(pA)
        {
            if(!isLength(this.state.password)){
                passwordErr = 'Password must be atleast 6 characters'
            }
            else passwordErr = ''
        }
        else if(eA)
        {
            if(!isEmail(this.state.email)){
                emailErr = 'Enter a valid email address'
            }
            else emailErr = ''
        }
        this.setState((state)=>{
            state[name] = value;
            state['passwordErr'] = passwordErr
            state['emailErr'] = emailErr
            state['eA'] = eA
            state['pA'] = pA
            return state;
        })
    }

    handleSignIn(event){
        const email = this.state.email
        const password = this.state.password
        if(goodSignin({email,password}))
        {
            event.preventDefault();
            const data = {
                email:email,
                password:password
            }
            
            this.props.loginUser(data);   
        }
    }
    handleSignUp(event){
        const username = this.state.username
        const email = this.state.email
        const password = this.state.password
        // const cf_password = this.state.cf_password
        if(goodSignup({email, password, username}))
        {
            event.preventDefault();
            const data = {
                username,
                email,
                password
            }
            this.props.signupUser(data);
        }
    }

    handlePath(){
        const res = this.state.click;
        var signup = document.querySelector('.signup');
        var signin = document.querySelector('.signin');
        if(res){
            signup.classList.remove('active-path-down');
            signin.classList.add('active-path-up');
        }
        else{
            signup.classList.add('active-path-down');
            signin.classList.remove('active-path-up');
        }
        this.setState((state)=>{
            state['click'] = !res;
            state['username']='';
            state['password']='';
            state['email']='';
            state['emailErr'] = '';
            state['passwordErr'] = '';
            return state;
        })
    }
    responseGoogle(response){
        const tokenId = response.tokenId;
        alert("Hello I have been called")
        this.props.loginUserGoogle({tokenId});
    
    }
    render(){
        const click = this.state.click
        const success = this.state.success
        const err = this.state.err
        const btnText = click ? this.state.loginText : this.state.signupText ;
        
        const ErrorText = ({err})=>{
            return(
                <div className="form-item-err">
                    <p className="errorText">{err}</p>
                </div>
            )
        }
        return(
            <div className="register">
                <div className="register-img">
                    <h3>{success}</h3>
                    <h4>{err}</h4>
                </div>
                <div className="register-container">

                <div className={click ? " signin active-path-up ":" signin "}>
                    
                    <div className="form-item">
                        <h3 className="text-center">Login/Sign In</h3>
                    </div>
                    
                    <div className="form-item">

                        <label className={"label"} htmlFor="email" >
                            <FaEnvelope className="input-icon mr5"/>
                        </label>
                        
                        <input 
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="input-field"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                        />

                    </div>
                    
                    <ErrorText err={this.state.emailErr}/>

                    <div className="form-item"> 
                        <label className="label" htmlFor="password">
                            <FaKey className="user-icon mr5" />
                        </label>
                        
                        <input 
                        id="password"
                        type={this.state.passV ? "text" :"password"}
                        placeholder="Password"
                        className="input-field"
                        value={this.state.password}
                        onChange={this.handleChange}
                        name = "password"
                        />

                        <Eye value={this.state.passV} change={this.handlePassV} />

                    </div>
                    
                    <ErrorText err={this.state.passwordErr}/>

                    <div className="form-item-row">
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe" className="label">Remember me</label>  
                    </div>
                    
                    <div className="form-item ml15 mb1">
                        <Link to='/forgot-password'>
                            forgot password ?
                        </Link>
                    </div>
                    
                    <div className="form-item justify-content-between">    
                        <button 
                        className="btn auth-btn ml15"
                        onClick = {this.handleSignIn}
                        >Login <FaArrowAltCircleRight/>
                        </button>

                        {/* <GoogleLogin
                        clientId="997686510784-53d5e99bgj65lqm6lungl54gaj5c6f5r.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        // className="googleBtn"
                        /> */}
                    </div>
                
                </div>
                
                <div className="LoginBtn btn" to="auth/signup" onClick={this.handlePath}>{btnText}</div>
                
                <div className={click ? " signup ":" signup active-path-down "}>
                    
                    <div className="form-item">
                        <h4 className=" text-center">Register/Sign Up</h4>
                    </div>
                    
                    <div className="form-item">
                        <label className={"label"} htmlFor="username">
                            <FaUserAlt className="input-icon mr15" />
                        </label>
                        
                        <input 
                        id="username"
                        type="text"
                        placeholder="Your Name"
                        className="input-field"
                        value={this.state.username}
                        onChange={this.handleChange}
                        name="username"
                        />

                    </div>
                    
                    <ErrorText err={this.state.usernameErr}/>

                    <div className="form-item">
                        <label className={"label"} htmlFor="email" >
                            <FaEnvelope className="user-icon mr5" />
                        </label>
                        
                        <input 
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="input-field"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                        />

                    </div>

                    <ErrorText err={this.state.emailErr}/>

                    <div className="form-item"> 
                        <label className="label" htmlFor="password">
                            <FaKey className="user-icon mr5" />
                        </label>
                        
                        <input 
                        id="password"
                        type={this.state.passV ? "text" :"password"}
                        placeholder="Password"
                        className="input-field"
                        value={this.state.password}
                        onChange={this.handleChange}
                        name = "password"
                        />

                        <Eye value={this.state.passV} change={this.handlePassV} />

                    </div>
                    
                    <ErrorText err={this.state.passwordErr}/>

                    <div className="form-item mb1">
                        <button 
                        className="btn auth-btn"
                        onClick = {this.handleSignUp}>
                            Signup <FaArrowAltCircleRight/>
                        </button>
                    </div>

                    <div className="form-item mb1">
                        <h5 className=" text-center">Or You Can ,</h5>
                    </div>

                    <div className="form-item">
                    {/* <GoogleLogin
                        clientId="997686510784-53d5e99bgj65lqm6lungl54gaj5c6f5r.apps.googleusercontent.com"
                        buttonText="Signup with Google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        // className="googleBtn"
                    /> */}
                    </div>
                </div>       
                </div> 
            </div>
        )
    }
}

export default Signup
