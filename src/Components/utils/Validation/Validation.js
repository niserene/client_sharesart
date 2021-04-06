export const isNotEmpty = value =>{
    if(value)return true;
    return false;
}
export const isEmail = email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const isLength = password =>{
    return (password.length >= 6)
}

export const isMatch = (password, cf_password)=>{
    return (password===cf_password)
}
export const goodSignup = ({email, password, username}) =>{

    if(isNotEmpty(username)&&isNotEmpty(email)&&isNotEmpty(password)&&isLength(password)&&isEmail(email))return true;
    return false;
}
export const goodSignin = ({email, password}) =>{

    if(isNotEmpty(email)&&isNotEmpty(password)&&isLength(password)&&isEmail(email))return true;
    return false;
}


const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const day = ["sun","mon","tue","wed","thu","fri","sat"]

export const getTime  = (data)=>{
    
    var time = data.getHours().toString()+":"+data.getMinutes().toString();
    return time+" hours";
}

export const getDate = (data)=>{
    
    var date = day[data.getDate()].toUpperCase()+"-"+data.getFullYear().toString()+" "+month[data.getMonth()]+" "+data.getDate().toString();
    return date
}