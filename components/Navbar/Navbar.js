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
                <h1 className="navbar-logo">
                    <img src="/logo_name.svg" alt="Ragasil" width="100" height="30"/>
                </h1>
                <div className="menu-icon">

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