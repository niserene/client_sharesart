import React from 'react'
import {withRouter } from 'react-router'
import './ActivationEmail.css'
import Loading from '../utils/Loading/Loading'
import TempCard from '../utils/TempFiles/TempCard'
class ActivationEmail extends React.Component{

    componentDidMount()
    {
        const activation_token = this.props.match.params.activation_token;
        // alert(activation_token)
        this.props.activateAccount({activation_token});
    }
    render(){
        
        return ((this.props.isLoading)? <Loading /> : <TempCard data={this.props.data}/>)
    }
}
export default withRouter(ActivationEmail);
