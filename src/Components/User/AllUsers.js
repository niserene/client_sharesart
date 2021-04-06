
import React from 'react'
import './AllUsers.css'
import TempCard from '../utils/TempFiles/TempCard'
import ProfileCard from '../utils/TempFiles/ProfileCard'
import Loading from '../utils/Loading/Loading';

class AllUser extends React.Component{
    
    constructor(props)
    {
        super();
        this.state={
            done:'none'
        }
    }
    render(){
        const data = {
            heading:'Access Denied : 503',
            info:'You are not authorized to access this route'
        }
        if(!(this.props.isAdmin)){
            return <TempCard data={data}/>
        }
        else{
            const AllUsersList = (this.props.allUsers).map( user =>{
                return <ProfileCard {...user} />
            })

            return (this.props.isLoading)? <Loading />:
            (this.props.err) ? <TempCard data = {this.props.data} />:
                (
                <div className="alluser">
                    <h3 className="alluser-heading">
                        All Registered Users Info
                    </h3>
                    <div className="alluser-container">
                        {AllUsersList}
                    </div>
                </div>
            )
        }
    }
}


export default AllUser;