import React from 'react'
import { FaTimes } from 'react-icons/fa';

import './Toast.css'


class Toast extends React.Component{
    
    constructor(props)
    {
        super();
        this.state = {
            show:props.show,
            color:props.color,
            message:props.message,
            time:props.time
        }
        this.hideToast = this.hideToast.bind(this);
    }
    hideToast(time)
    {
       this.props.hideToast();
    }
    render()
    {
        const message = this.props.message
        const show = this.props.show
        return (
            <div className={"toast-container "+(show ?"showToast" : "hideToast")}>
                <div className="toast-section" style = {{color:this.state.color ? this.state.color:''}}>
                    <div className="toast-text">
                        {message}
                    </div>
                    <div className="toastHideButton" onClick={this.hideToast}>
                        <FaTimes className="toastIcon" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Toast;
