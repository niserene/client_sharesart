import React from 'react'
import {Link} from 'react-router-dom'
import { FaBars, FaTimes, FaUser} from 'react-icons/fa'
import './Navbar.css'


class Navbar extends React.Component{
    
    constructor(props){
        super();
        this.state={
            click:false,
            button:true,
            isLogged:props.isLogged,
            logoImg:'https://res.cloudinary.com/nishantdev/image/upload/v1617291221/NewLogoSharesArt_ericzs.png'
        }
        this.handleMenuBtnClick = this.handleMenuBtnClick.bind(this);
        this.showMenuButton = this.showMenuButton.bind(this);
        this.hideMenuButton = this.hideMenuButton.bind(this);
    }
    componentDidMount(){

        this.setState((state)=>{
            state['theme'] = this.props.theme
            state['isLogged'] = this.props.isLogged
            return state;
        })
    }
    handleMenuBtnClick(){
        var res = !(this.state.click)
        this.setState((state)=>{
            state.click = res
            return state;
        })
    }
    hideMenuButton(){

        this.setState((state)=>{
            state.click = false;
            return state;
        })
    }
    showMenuButton(){

        var res = true;
        if(window.innerWidth <= 960) res = false;
        this.setState(( state )=>{
            state.button = res
            return state;
        })

    }

    render(){
        window.addEventListener('resize',this.showMenuButton);
        const click = this.state.click ;
        const isLogged = this.props.isLogged;

        const NavData = [
            {
                name:"Home",
                url:'/'
            },
            {
                name:'About Us',
                url:'/about-us',
            },
            {
                name:'Services',
                url:'/services',
            },
            {
                name:'Contact Us',
                url:'/contact-us',
            }
        ]
        const NavItem = ({name,url})=>{
            return(
                <Link to={url} className='nav-link' onClick={this.hideMenuButton} >
                    <div className="nav-item">{name}</div>
                </Link>
            )
        }
        const NavItemList = NavData.map( item=>{
            return <NavItem  url={item.url} name={item.name} />
        })
        const AuthBtn = ()=>{
            return(
                <Link to="/auth/register" className='nav-link-btn' onClick={this.hideMenuButton} >
                    <div className="button">Signup</div>
                </Link>
            )
        }
        const UserBtn = ()=>{
            return(
                <Link to="/userprofile" className='nav-link nav-link-icon' onClick={this.hideMenuButton} >
                    <FaUser className="nav-icon" />
                </Link>
            )
        }
        const SelectionBtn = isLogged ? <UserBtn /> : <AuthBtn />
        
        return <>

        <div className='navbar'>
            
            <div className="navbar-logo">
                <Link to="/" className="logo-link">
                    <img src={this.state.logoImg} alt="" className="logo-img"/>
                </Link>
            </div>

            <div className="menu-icon" onClick={this.handleMenuBtnClick}>
                {click ? <FaTimes className="navbar-menu-bar"/>:<FaBars className="navbar-menu-bar" />}
            </div>
            
            <div className={ click ? "nav-menu active":"nav-menu"}>

                { NavItemList }
                { SelectionBtn }

            </div>

        </div>

        </>
    }
        
}
export default Navbar
