import { useState } from 'react';
import './Navbar.css';
import NavbarBS from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/logo.png';
import help from '../img/help.png';
import cartpng from '../img/cart.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Navbar = () => {


    if (!localStorage.getItem('language')){
        localStorage.setItem('language', 'en');
    }

    const english_version = [
        "HOME", "Shop for Books", "Contact Us", "Daily Reading", "News", "Learn", "Sign Up", "Log In", "Sign Up", "First Name: ", "Surname: ", "Email: ", "Password: ", "I certify that I have read the Terms and Conditions.",
        "Close", "Log In", "Sign Out", "Français", "Welcome", "Minimum length of 8", ""
    ]
    const french_version = [
        "ACCEUIL", "Acheter des Livres", "Contactez-nous", "Lecture Quotidienne", "Actualités", "Apprendre", "S'inscrire", "Se connecter", "S'inscrire", "Prénom: ", "Nom: ", "Courriel: ", "Mot de passe: ", "Je certifie que j'ai lu les termes et conditions.",
        "Fermer", "Se connecter", "Se déconnecter", "English", "Bienvenue", "Taille minimale de 8", ""
    ]

    var active_language = english_version;
    if (localStorage.getItem('language') == 'fr') {
        active_language = french_version;
    }

    function changeLang(){
        if (localStorage.getItem('language') == 'fr'){
            localStorage.setItem('language', 'en');
        }
        else if (localStorage.getItem('language') == 'en'){
            localStorage.setItem('language', 'fr');
        }
        document.location.reload(true);
    } 

    return ( 
        <div className="header">
            <br />
            <a href="/">
                <img src={logo} alt="logo"  width="25%"/>
            </a>
            <br /><br />
            <NavbarBS bg="dark" variant="dark" style={{paddingLeft:"10%", paddingRight:"10%", }}>
                <NavbarBS.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="/" style={{marginLeft:"5px", marginRight:"5px", color:"aqua"}}> {active_language[0]} </Nav.Link>
                        <Nav.Link href="/books" style={{marginLeft:"5px", marginRight:"5px", color:"lightcyan"}}> {active_language[1]}</Nav.Link>
                        <Nav.Link href="/dailyreading" style={{marginLeft:"5px", marginRight:"5px", color:"lightcyan"}}> {active_language[3]}</Nav.Link>
                        <Nav.Link href="/contactus" style={{marginLeft:"5px", marginRight: "20px", color:"lightcyan"}}> {active_language[2]} </Nav.Link>
                    </Nav>
                    <Button variant="dark" onClick={changeLang} style={{marginLeft:"5px", marginRight:"5px"}}>{active_language[17]}</Button>
                    
                    <Nav.Link href="/cart" style={{marginLeft:"15px", height: "10%", width:"10%"}}>
                        <img src={cartpng} alt="shopping cart" width='50%' height='50%'/>
                    </Nav.Link>
                </NavbarBS.Collapse>
            </NavbarBS>
        </div>
        
     );
}
 
export default Navbar;