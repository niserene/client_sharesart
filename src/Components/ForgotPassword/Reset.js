import React from 'react'
import './Reset.css'
import { isLength, isMatch, isNotEmpty } from '../utils/Validation/Validation'
import TempCard from '../utils/TempFiles/TempCard'
import Loading from '../utils/Loading/Loading'
import { withRouter } from 'react-router-dom'

class Reset extends React.Component{
    constructor(props)
    {
        super();
        this.state = {
            password:'',
            cf_password:'',
            pActive:false,
            cActive:false,
            token:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount()
    {
        const reset_token = this.props.match.params.reset_token;
        this.setState((state)=>{
            state['token'] = reset_token;
            return state;
        })
    }
    handleChange(event){
        var name = event.target.name;
        var value = event.target.value;
        var pActive = this.state.pActive
        var cActive = this.state.cActive
        var cError = this.state.cError
        var pError = this.state.pError
        if(name==='password') pActive = true;
        else cActive = true;

        if(name==='password'){
            if(!isLength(value))
            pError='Password must be atleast 6 characters'
            else pError=''
            if(!isMatch(value,this.state.cf_password)){
                cError='Password does not match'
            }
            else cError=''
        }
        else{
            if(!isLength(this.state.password))
            pError='Password must be atleast 6 characters'
            else pError=''
            if(!isMatch(value,this.state.password)){
                cError='Password does not match'
            }
            else cError=''
        }
        this.setState((state)=>{
            state[name] = value;
            state['cActive'] = cActive
            state['pActive'] = pActive 
            state['cError'] = cError
            state['pError'] = pError
            return state;
        })
    }
    handleSubmit()
    {
        var password = this.state.password
        var cf_password = this.state.cf_password
        if(isLength(password)&&isMatch(password,cf_password)&&isNotEmpty(password)){
            alert("submited"+password+" "+cf_password);
        }
        const token = this.state.token
        alert("token here "+token)
        this.props.resetPassword({password,token})
    }

    render()
    {
        return (this.props.isDone) ? <TempCard data={this.props.data}/>:
        (this.props.isLoading)?<Loading/>:
        (
            <div className="reset">
                <div className="reset-container">
                    <h3 className="reset-item">
                        Reset Password
                    </h3>
                    <div className="reset-item">
                        <input 
                        type="text"
                        value = {this.state.value}
                        name = "password"
                        placeholder="New Password"
                        onChange = {this.handleChange} 
                        className="reset-input"/>
                        <p className="reset-input-error">
                            {this.state.pError}
                        </p>
                    </div>
                    <div className="reset-item">
                        <input 
                        type="text"
                        value = {this.state.value}
                        name = "cf_password"
                        placeholder="Confirm Password"
                        onChange={this.handleChange} 
                        className="reset-input"/>
                        <p className="reset-input-error">
                            {this.state.cError}
                        </p>
                    </div>
                    <div className="reset-item">
                        <button className="reset-btn" onClick={this.handleSubmit}>Reset Password</button>
                    </div>
                </div>
            </div>   
        )
    }
}

export default withRouter(Reset);