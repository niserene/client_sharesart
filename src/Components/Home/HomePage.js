import React from 'react' ;
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel'
import './HomePage.css'
import AboutUs from '../AboutUs/AboutUs';
import {AboutData} from '../Data/AboutData'
import Services from '../Services/Services';
import { ServicesData } from '../Data/ServicesData';


class HomePage extends React.Component{

    constructor({data}){
        super();
        this.state = {
            data:data
        }
    }

    render(){
        const HomePageCard = ({title, subtitle, description, imgUrl, btnTxt, btnUrl, direction})=>{
            return(
                <div className="home-card" style={{'flexDirection':direction}}>
                        <div className="home-card-text">
                            <h2 className="home-card-heading">{title}</h2>
                            <h5 className="home-card-subtitle">{subtitle}</h5>
                            <p className="home-card-description">{description}</p>
                            <a className="home-card-link" href={btnUrl}>
                                <button className="home-card-btn">
                                    {btnTxt}
                                </button>
                            </a>
                        </div>
                        <div className="home-card-img">
                            <img src={imgUrl} alt="" className="home-card-img" />
                        </div>
                </div>
            )
        }
        const HomeCardList = this.state.data.map( card =>{
            
            return <HomePageCard {...card} title={card.title} subtitle={card.subtitle} description={card.description} imgUrl={card.imgUrl} btnText={card.btnText} btnUrl={card.btnUrl} />
        })
    
        return (
            <>
            <div className="home-page">
                <Carousel 
                // axis="vertical"
                autoPlay={true} 
                interval={3000} 
                infiniteLoop={true} 
                emulateTouch={true}
                swipeable = {false}
                showStatus={false}
                verticalSwipe="standard"
                showIndicators={false}
                swipeScrollTolerance={40}
                className={"carousel"}
                >
                    {HomeCardList}
                </Carousel>
            </div>

            <AboutUs data={AboutData}/>
            <Services data={ServicesData} />
            
            </>
        )
    }
}

export default HomePage
