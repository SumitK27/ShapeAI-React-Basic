import React, { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className={styles.Counter}>
            <div className={styles.CounterNumber}>{count}</div>
            <button
                className={styles.CounterBtn}
                onClick={function () {
                    setCount(count - 1);
                }}
            >
                -
            </button>
            <button
                className={styles.CounterBtn}
                onClick={function () {
                    setCount(count + 1);
                }}
            >
                +
            </button>
        </div>
    );
}
