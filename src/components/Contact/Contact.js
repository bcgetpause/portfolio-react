import React, { useEffect } from 'react'
import './Contact.scss'
import gsap from "gsap";

export default function Contact() {

    //const [mailto, setMailto] = useState('#');

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

        const tl = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
                trigger: ".section-contact",
                start: "top center", // when the top of the trigger hits the top of the viewport
                toggleActions: "play none none reverse"
            }
        });
        // add animations and labels to the timeline
        tl.from(".section-contact", { opacity: 0 });

    }, []);

    /**
     * Fonction permettant d'utiliser la fonction mailto pour envoyer un mail
     */
    const sendMail = () => {
        const destinataire = 'stefan.llobera@gmail.com'
        const prenom = document.querySelector('input#prenom');
        const nom = document.querySelector('input#nom');
        const contenu = document.querySelector('textarea#txt');
        if (prenom && nom && contenu) {
            if (prenom.value !== '' && nom.value !== '' && contenu.value !== '') {
                const mailto =
                    encodeURI('mailto:' + destinataire + '?' +
                        'subject=Contact de ' + prenom.value + ' ' + nom.value +
                        '&body=' + contenu.value);
                window.location.href = mailto;
            }
        }
    }

    /**
     * Fonction permettant de ne pas recharger la page apres avoir validé le formulaire de contact
     * @param {*} event 
     */
    const submited = (event) => {
        event.preventDefault();
    };


    return (
        <section className="section-contact" id="contact">

            <h2><strong>Rentrons</strong> en Contact</h2>

            <div className="container-form">
                <form className="form-bloc" onSubmit={submited} >

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
                        <button onClick={sendMail} className="button-sub">ENVOYER</button>
                    </div>

                </form>
            </div>
        </section>
    )
}
