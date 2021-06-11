import React, { useEffect, useState } from 'react'
import './Contact.scss'

export default function Contact() {

const [mailto, setMailto] = useState('#');

    useEffect(() => {
        const input_fields = document.querySelectorAll('input');
        for (let i = 0; i < input_fields.length; i++) {
            let field = input_fields[i];
            field.addEventListener('input', (e) => {
                if (e.target.value !== '') {
                    e.target.parentNode.classList.add('animation')
                } else if (e.target.value === '') {
                    e.target.parentNode.classList.remove('animation')
                }
            })
        }
    }, []);


/* 

    const destinataire = 'stefan.llobera@gmail.com'
    const mailPwd = () => {
        
        const prenom = document.querySelector('input#prenom');
        const nom = document.querySelector('input#nom');
        const contenu = document.querySelector('textarea#txt');
        if (prenom && nom && contenu) {
            console.log('nuibsjgbfdsuigds')
            setMailto(encodeURI('mailto:' + destinataire + '?' +
            '&subject=Contact de ' + prenom.value + ' ' + nom.value +
            '&body=' + contenu.value));
        }
    }


    const handleSendMail = mailPwd(); */

    return (
        <section className="section-contact" id="contact">

            <h2><strong>Rentrons</strong> en Contact</h2>

            <div className="container-form">

                <form className="form-bloc" >

                    <div className="form-groupe">
                        <label htmlFor="prenom">Prénom</label>
                        <input type="text" required maxLength="16" id="prenom" />
                    </div>
                    <div className="form-groupe">
                        <label htmlFor="nom">Nom</label>
                        <input type="text" required maxLength="16" id="nom" />
                    </div>
                    <div className="form-groupe">
                        <textarea id="txt" placeholder="Votre message" required></textarea>
                    </div>

                    <div className="form-groupe">
                        <a className="button-sub">ENVOYER</a>
                    </div>
                </form>
            </div>
        </section>
    )
}
