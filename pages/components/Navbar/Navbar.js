import React, {Component} from 'react';

const MenuItems = [
    {
        title: "Home",
        url: "#",
        className: "nav-links"
    },
    {
        title: "Services",
        url: "#",
        className: "nav-links"
    },
    {
        title: "Products",
        url: "#",
        className: "nav-links"
    },
    {
        title: "Contact Us",
        url: "#",
        className: "nav-links"
    },
    {
        title: "Sign up",
        url: "#",
        className: "nav-links-mobile"
    },
]

class Navbar extends Component{
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Ragasil</h1>
                <div className="menu-icon">
                    <img src={"public/assets/images/logo-name.png"}/><img/>

                </div>
                <ul>
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