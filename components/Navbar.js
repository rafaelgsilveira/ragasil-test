import React, {Component} from 'react';
import styles from '../styles/Navbar.module.css'


const MenuItems = [
    {
        title: "Home",
        url: "#",
        className: "nav-links"
    },
    {
        title: "Serviços",
        url: "#",
        className: "nav-links"
    },
    {
        title: "Blog",
        url: "#",
        className: "nav-links"
    },
    {
        title: "Contato",
        url: "#",
        className: "nav-links"
    },
    {
        title: "Inscreva-se",
        url: "#",
        className: "nav-links-mobile"
    },
]

class Navbar extends Component{
    render() {
        return(
            <nav className={styles.navbarItems}>
                <h1 className="navbar-logo">
                    <img src="/logo_name_white.svg" alt="Ragasil" width="100" height="80"/>
                </h1>
                <div className="menu-icon">

                </div>
                <ul >
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a  className={item.className} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar