import React from 'react'
import s from "./Links.module.css"
const Links = () => {
    return (
        <div className={s.linksWrapper}>
            <a href="https://www.instagram.com/svitlana_stylist_berlin" target="_blank" className={s.linkButton}>
                Instagram
            </a>
            <a href="google.com" target="_blank" className={s.linkButton}>Telegram</a>
        </div>
    )
}

export default Links