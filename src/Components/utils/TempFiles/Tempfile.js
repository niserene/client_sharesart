import React from 'react'
import { FaTimes } from 'react-icons/fa';

import './Tempfile.css'


class Toast extends React.Component{
    
    constructor(props)
    {
        super();
        this.state = {
            show:false,
            color:'',
            message:'Welcome to Shares Art service'
        }
        this.hideTheToast = this.hideTheToast.bind(this);
    }

    componentDidMount()
    {
        var show = this.props.show;
        var time = this.props.time;
        this.setState((state)=>{
            state['show'] = show;
            return state;
        })
        setInterval(()=>{
            this.hideTheToast();
        },time)
    }
    hideTheToast(){

        this.setState((state)=>{
            state['show'] = false;
            return state;
        })
    }
    render()
    {
        return (
            <div className={"toast-container "+(this.state.show ?"showToast" : "hideToast")}>
                <div className="toast-section" style = {{color:this.state.color ? this.state.color:''}}>
                    <div className="toast-text">
                        {this.state.message}
                    </div>
                    <div className="toastHideButton" onClick={this.hideTheToast}>
                        <FaTimes className="toastIcon" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Toast;
