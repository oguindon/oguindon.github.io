import { useState } from 'react';
import './Navbar.css';
import NavbarBS from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/logo.png';
import help from '../img/help.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Navbar = () => {

    // Source: https://react-bootstrap.github.io/components/modal/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    if (!localStorage.getItem('language')){
        localStorage.setItem('language', 'en');
    }

    const english_version = [
        "Home", "Books", "Contact Us", "Browse Stocks", "News", "Learn", "Sign Up", "Log In", "Sign Up", "First Name: ", "Surname: ", "Email: ", "Password: ", "I certify that I have read the Terms and Conditions.",
        "Close", "Log In", "Sign Out", "Français", "Welcome", "Minimum length of 8",
        ""
    ]
    const french_version = [
        "Acceuil", "Livres", "Contactez-nous", "Parcourir les actions", "Actualités", "Apprendre", "S'inscrire", "Se connecter", "S'inscrire", "Prénom: ", "Nom: ", "Courriel: ", "Mot de passe: ", "Je certifie que j'ai lu les termes et conditions.",
        "Fermer", "Se connecter", "Se déconnecter", "English", "Bienvenue", "Taille minimale de 8",
        ""
    ]

    var active_language = english_version;
    if (localStorage.getItem('language') == 'fr') {
        active_language = french_version;
    }

    // Function to handle submission of sign-up modal
    function handleSubmit(){
        var name = document.getElementById("givennames").value + " " + document.getElementById("surname").value;
        localStorage.setItem('name', name);
        localStorage.setItem('email', document.getElementById("email").value);
        localStorage.setItem('cash', 500);
        localStorage.setItem('password', document.getElementById("password").value);
        localStorage.setItem('stocks', JSON.stringify([]));
        handleClose();
    }

    // Function to handle submission of log-in modal
    function handleSubmit2(){
        if (localStorage.getItem('email') == document.getElementById("email_submission").value && localStorage.getItem('password') == document.getElementById("password_submission").value){
            localStorage.setItem('signedin', true);
            handleClose2();
        }
        else {
            alert("Invalid username or password.");
        }
    }

    // Function to handle signing out
    function signOutButton(){
        localStorage.clear();
        window.location.reload();
        return false;
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

    // Displays a welcome message if user is logged in, otherwise shows the log in / sign up button
    function displayLogIn(){
        if (localStorage.getItem('name') && localStorage.getItem('signedin')){
            return <span style={{color:'white'}}>
                {active_language[18]} {localStorage.getItem('name')}
                <Button variant="light" onClick={signOutButton} style={{marginLeft:"15px", marginRight:"5px"}}>{active_language[16]}</Button>
            </span>;
        } else {
            return <span>
                <Button variant="light" onClick={handleShow} style={{marginLeft:"5px", marginRight:"5px"}}>{active_language[6]}</Button>
                <Button variant="light" onClick={handleShow2} style={{marginLeft:"5px", marginRight:"5px"}}>{active_language[7]}</Button>
            </span>
        }
    }

    function helpMe(message){
        alert(message);
    }

    return ( 
        <div className="header">
            <br />
            <a href="/">
                <img src={logo} alt="logo"  width="25%"/>
            </a>
            <br /><br />
            <NavbarBS bg="dark" variant="dark" style={{paddingLeft:"20%", paddingRight:"20%"}}>
                <NavbarBS.Collapse>
                    <Nav className="mr-auto">
                        <NavbarBS.Brand href="/"> {active_language[0]} </NavbarBS.Brand>
                        <Nav.Link href="/books"> {active_language[1]}</Nav.Link>
                        <Nav.Link href="/contactus"> {active_language[2]} </Nav.Link>
                    </Nav>
                    {displayLogIn()}
                    <Button variant="light" onClick={changeLang} style={{marginLeft:"5px", marginRight:"5px"}}>{active_language[17]}</Button>
                </NavbarBS.Collapse>
            </NavbarBS>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{active_language[8]}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>
                            {active_language[9]}
                            <input type="text" name="givennames" id="givennames" style={{marginLeft:"10px", width:"243px"}}/>
                            <a><img src={help} style={{marginLeft:"10px", width:"25px", height:"25px"}}/></a>
                        </label>
                        <label>
                            {active_language[10]}
                            <input type="text" name="surname" id="surname" style={{marginLeft:"10px", width:"255px"}}/>
                            <a><img src={help} style={{marginLeft:"10px", width:"25px", height:"25px"}}/></a>
                        </label>
                        <label>
                            {active_language[11]}
                            <input type="text" name="email" id="email" style={{marginLeft:"10px", width:"280px"}}/>
                            <a><img src={help} style={{marginLeft:"10px", width:"25px", height:"25px"}}/></a>
                        </label>
                        <label>
                            {active_language[12]}
                            <input type="password" name="password" id="password" style={{marginLeft:"10px", width:"250px"}}/>
                            <a><img src={help} style={{marginLeft:"10px", width:"25px", height:"25px"}}/></a>
                        </label>
                        <label>
                            <input type="checkbox" name="terms" style={{marginRight:"10px"}}/>
                            {active_language[13]}
                        </label>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>{active_language[14]}</Button>
                    <Button variant="danger" onClick={handleSubmit}> {active_language[6]}</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>{active_language[15]}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>
                            {active_language[11]}
                            <input type="text" name="email" id="email_submission" style={{marginLeft:"10px", width:"250px"}}/>
                            <a><img src={help} style={{marginLeft:"10px", width:"25px", height:"25px"}}/></a>
                        </label>
                        <label>
                            {active_language[12]}
                            <input type="password" name="password" id="password_submission" style={{marginLeft:"10px", width:"220px"}}/>
                            <a><img src={help} style={{marginLeft:"10px", width:"25px", height:"25px"}}/></a>
                        </label>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}> {active_language[14]} </Button>
                    <Button variant="danger" onClick={handleSubmit2}> {active_language[7]} </Button>
                </Modal.Footer>
            </Modal>
        </div>
        
     );
}
 
export default Navbar;