import React, {useEffect, useState} from 'react';
import './Navbar.css';

function Navbar() {
    const [show, handleShow] = useState();
    
    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false)
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])
    return (
        <div className={`navbar ${show && "nav_black"}`}>
            <img 
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Netflix.png"
                alt="NETFLIX"
            />
            <img 
                className="nav_avatar" 
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                alt="Netflix Logo" 
            />
        </div>
    )
}

export default Navbar;
