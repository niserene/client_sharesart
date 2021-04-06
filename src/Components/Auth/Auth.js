import React from 'react'
import {Route, Switch} from 'react-router'
import Error404 from '../Error404/Error404';
import Loading from '../utils/Loading/Loading';
import Signup from './Signup';

class Auth extends React.Component{

    constructor(props){
        super();
        this.state = {
            done:'none'
        }
    }

    render(){
        return this.props.isLoading? <Loading /> :
        (
            <Switch>

                <Route path = "/auth/register" exact component = {()=><Signup click={true} {...this.props} />} />

                <Route path = "/auth/login" exact component = {()=><Signup click={false} {...this.props}/>} />

                <Route component={()=><Error404/>} />

            </Switch>
        )
    }
}

export default Auth
