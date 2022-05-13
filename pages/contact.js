import React from "react";
import styles from "../styles/Home.module.css"

function Contact() {
    return (
        <div className={styles.main}>
            <h1 className={styles.contactTitle}>

                Aguardamos o seu contato
            </h1>

            <div className={styles.grid}>

                <a href="https://goo.gl/maps/sHmoip3uzqc9f84V8" className={styles.card}>
                    <img src="/map.png" alt="Map" width="750" height="500" />
                </a>

                <a href="https://api.whatsapp.com/send?phone=5511992436608" className={styles.card}>
                    <ul className={styles.whatsappList}>
                        <li >Whats</li>

                    </ul>
                </a>


                <a href="mailto: {contato@ragasil.com.br}" className={styles.card}>
                    <ul className={styles.emailList}>
                        <li >Email</li>

                    </ul>
                </a>


                <div className={styles.card2}>
                    <ul className={styles.list}>

                        <li>Milk</li>
                    </ul>
                </div>
                <div className={styles.card2}>
                    <ul className={styles.list}>

                        <li>Suggar</li>

                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Contact