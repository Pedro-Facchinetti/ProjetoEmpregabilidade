import React, { useState } from 'react';
import styles from './Popup.module.scss'; // Importe os estilos

function Popup({ onClose, onAddItem, items, placeholder }) {
    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        if (newItem.trim() !== '') {
            onAddItem(newItem);
            setNewItem('');
        }
    };

    return (
        <div className={styles.popup_container}>
            <div className={styles.popup_content}>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button onClick={handleAddItem}>Adicionar</button>
                <button onClick={onClose}>Fechar</button>
                
                <div className={styles.item_list}>
                    {items.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Popup;
