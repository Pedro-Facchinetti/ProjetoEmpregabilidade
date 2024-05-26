import React, { useState } from "react";
import styles from './Section5.module.scss';
import Popup from "../ButtomPopup";

function RenderSection5(props) {
    const [showPopup, setShowPopup] = useState(false);
    const [items, setItems] = useState([]);
    const [boxAreaContent, setBoxAreaContent] = useState([]);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
        setBoxAreaContent([...boxAreaContent, newItem]);
    };

    return (
        <section className={styles.section5}>
            <div className={styles.info_top}>
                <h1>Idiomas</h1>
            </div>

            <div className={styles.info_bottom}>
                <div className={styles.box_area}>
                    {boxAreaContent.map((content, index) => (
                        <div key={index}>{content}</div>
                    ))}
                    <button onClick={() => setShowPopup(true)}>Adicionar lingua +</button>
                    {showPopup && (
                        <Popup
                            placeholder={'Escreva suas linguas:'}
                            onClose={() => setShowPopup(false)}
                            onAddItem={handleAddItem}
                            items={items}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

export default RenderSection5;
