import React from 'react'
import './Services.css'


class Services extends React.Component{

    constructor({data})
    {
        super();
        this.state={
            done:'none'
        }
    
    }
    render(){
        // var data = (this.props.data)[0];
        const ServicesCard = ({data})=>{
            var bgStyle = {
                style:{
                    'background':`url(${data.imgUrl})`,
                    'background-repeat':'no-repeat',
                    'background-size':'contain'
                }
            }
            const ListItem = ({data})=>{
                return(
                    <li className="service-card-list-item">{data}</li>
                )
            }
            const ServiceCardList = data.list.map( item=>{
                return <ListItem data={item}/>
            })
            return(
                <div className="services-container">
                    <div className="services-card services-card-text" style={{order:(data.imgStart)}}>
                        <h3 className="services-card-item services-card-heading">
                            {data.title}
                        </h3>
                        <p className="services-card-item services-card-info" >
                            {data.info}
                        </p>
                        <ul className="service-card-list">
                            {ServiceCardList}
                        </ul>
                    </div>
                    <div className="services-card services-card-img" {...bgStyle} >

                    </div>
                </div>
            )
        }
        var ServicesCardsItems = (this.props.data).map( card =>{
            return <ServicesCard data = {card}/>
        })
        return(
            <div className="services">
                <h2 className="component-heading">
                    Wide Range of Services
                </h2>
                {ServicesCardsItems}
            </div>
        )
    }

}

export default Services
