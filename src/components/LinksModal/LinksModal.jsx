import React, { useState } from 'react';
import s from './LinksModal.module.css'; // Імпортуємо CSS

function LinksModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>{
            !isModalOpen && (
                <button onClick={openModal} className={s.buttonMain}>Jetzt anmelden!</button>
            )
        }
            {
                isModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <div className={s.form}>
                                <input type="Name" placeholder="Name*" />
                                <input type="Email" placeholder='Email' />
                                <input type="Telephone" placeholder='Telefonnummer*' />
                                <button className={s.buttonMain} type='submit'>Jetzt Senden</button>
                            </div>
                            <button onClick={closeModal} className={s.buttonMain}>schließen?</button>
                        </div>
                    </div>
                )
            }
        </div >
    );
}

export default LinksModal;