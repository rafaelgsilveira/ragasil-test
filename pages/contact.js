import React from "react";
import styles from "../styles/Home.module.css"

function Contact() {
    return (
        <div className="container">
            <div>
                <h2>Entre em Contato</h2>
            </div>
            <div className={styles.grid}>
                <div className="column">
                    <img src="/old_phone.jpg" alt="Phone" width="600" height="400" />

                </div>
                <div className="column">
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>

                </div>
            </div>
        </div>

    )
}

export default Contact