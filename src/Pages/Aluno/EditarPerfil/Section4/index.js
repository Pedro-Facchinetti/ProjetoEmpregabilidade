import React, { useState } from "react";
import styles from './Section4.module.scss';
import Popup from "../ButtomPopup";

function RenderSection4(props) {
    const [showPopup, setShowPopup] = useState(false);
    const [items, setItems] = useState([]);
    const [boxAreaContent, setBoxAreaContent] = useState([]);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
        setBoxAreaContent([...boxAreaContent, newItem]);
    };

    return (
        <section className={styles.section4}>
            <div className={styles.info_top}>
                <h1>Experiências</h1>
            </div>

            <div className={styles.info_bottom}>
                <div className={styles.box_area}>
                    {boxAreaContent.map((content, index) => (
                        <div key={index}>{content}</div>
                    ))}
                    <button onClick={() => setShowPopup(true)}>Adicionar competência +</button>
                    {showPopup && (
                        <Popup
                            placeholder={'Escreva suas experências:'}
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

export default RenderSection4;
