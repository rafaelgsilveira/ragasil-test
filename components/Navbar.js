import React, {Component} from 'react';
import styles from '../styles/Navbar.module.css'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';


const MenuItems = [
    {
        title: "Home",
        url: "home",
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
        url: "contact",
        className: "nav-links"
    },
    {
        title: "Inscreva-se",
        url: "#",
        className: "nav-links-mobile"
    },
]

class Navbar extends Component{
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className={styles.navbarItems}>
                <h1 className={styles.navbarLogo}>
                    <a href='home'>
                    <img src="/logo_name_contorno.png" alt="Ragasil" width="200" height="40"/>
                    </a>
                    </h1>
                <div className={styles.menuIcon} onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : styles.navMenu}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index} className={styles.navLinks}>
                                <a  className={item.className}  href={item.url}>
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