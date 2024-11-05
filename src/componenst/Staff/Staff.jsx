import React from 'react'
import s from "./Staff.module.css"


const Staff = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.staffBox}>
                <h2 className={s.titleText}>Susanna Mollie</h2>
                <p className={s.text}>Alle Menschen sind frei und gleich an Würde und Rechten geboren.
                    Alle Menschen sind frei und gleich an Würde und Rechten geboren.
                    Alle Menschen sind frei und gleich an Würde und Rechten geboren.
                    Alle Menschen sind frei und gleich an Würde und Rechten geboren.
                    Alle Menschen sind frei und gleich an Würde und Rechten geboren.
                </p>
                <img src="/src/assets/Images/SK.png" alt="Susanna Mollie" className={s.staffImage} />
                <img />
            </div>
            <div className={s.staffBox}>
                <h2 className={s.titleText}>Ben Moritz</h2>
                <p className={s.text}>Alle Menschen sind frei und gleich an Würde und Rechten geboren.
                    Alle Menschen sind frei und gleich an Würde und Rechten geboren.
                    Alle Menschen sind frei und gleich an Würde und Rechten geboren.
                </p>
                <img src="/src/assets/Images/SK.png" alt="Susanna Mollie" className={s.staffImage} />
                <img /></div>
        </div>
    )
}

export default Staff