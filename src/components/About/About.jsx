import React from 'react'
import s from "./About.module.css"
const About = () => {
    return (
        <div>
            <h1 className={s.title}>WAY!</h1>
            <h2 className={s.subtitle}>BERLIN</h2>
            <p className={s.text}>Ein neues Wort in deinem Stil.</p>
            <p className={s.text}>V0.07</p>
        </div>
    )
}

export default About