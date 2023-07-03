import React from 'react';
import '../App.css'

function Contact_us() {
    return(<>
            <div class="center">
                <h1>Contactez-Nous</h1>
                <p>111 rue Wellington</p>
                <p>Ottawa, Ontario</p>
                <p>613-555-5555</p>
                <p>courriel@placeholder.ca</p>
                <div class="center">
                    <h2>Heures d'opération</h2>
                    <ul>
                        <li>Lundi: Fermé</li>
                        <li>Mardi-Samedi: 9h00 - 21h00</li>
                        <li>Dimanche: 11h00 - 19h00</li>
                    </ul>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179768.5488241935!2d-76.07796168343947!3d45.2501470058093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04ff2716357f%3A0x1ad6b145c95526a4!2sParliament%20of%20Canada!5e0!3m2!1sen!2sca!4v1686537936218!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"
            </div>
        </>
    );
}

export default Contact_us;