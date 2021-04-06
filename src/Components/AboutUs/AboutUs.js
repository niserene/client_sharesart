import React from 'react'
import { FaLayerGroup } from 'react-icons/fa';
import './About.css'

class AboutUs extends React.Component{

    constructor({data})
    {
        super();
        this.state={
            data:data
        }
    }

    render(){
        const data = this.state.data;
        
        const AboutUsCard = ({title,description})=>{
            return (
                <div className="about-us-card">
                    <div className="au-card-heading">
                        <FaLayerGroup />
                        <h5>{title}</h5>
                    </div>
                    <p className="au-card-description">
                        {description}    
                    </p>
                </div>
            )
        }
        const AboutUsHeaderCard = (item)=>{
            return (
                <div className="about-us-header-container">
                    <div className="about-us-header-imgSection">
                        <img src={item.imgUrl} alt="" className="about-us-header-img"/>
                    </div>
                    <div className="about-us-header">
                        <div className="about-us-header-heading">{item.title}</div>
                        <div className="about-us-header-info">{item.info}</div>
                    </div>
                </div>
            )
        }
        const AboutUsCardsList = data.main.map( card=>{
            return <AboutUsCard {...card} />
        })
        const AboutUsHeaderList = data.header.map( item=>{
            return <AboutUsHeaderCard {...item} />
        })

        return(
            <div className="aboutUs-container">
                <h2 className="component-heading">
                    About Us
                </h2>
                {AboutUsHeaderList}
                <div className="about-us-card-container">
                    { AboutUsCardsList }             
                </div>
            </div>
        )
    }
}

export default AboutUs
