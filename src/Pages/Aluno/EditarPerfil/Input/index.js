import React, { useState } from "react";
import styles from './inputEdit.module.scss'

function TextInput(props) {
    const [input, setInput] = useState('');

    <div className={styles.wrap_input}>
        <input
            className={input !== "" ? styles.has_val__input : styles.input}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
        />
        <span className={styles.focus_input} data_placeholder="Input"></span>
    </div>
}

export default TextInput;

//Colocar esse input aqui: https://codepen.io/mrWhiner/pen/mdexvXE