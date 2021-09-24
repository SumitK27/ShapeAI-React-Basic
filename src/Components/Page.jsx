import React from "react";
import styles from "./Pages.module.css";

export default function Page({ title, content }) {
    return (
        <div className={styles.Page}>
            <h3 className={styles.PageTitle}>{title}</h3>
            <p className={styles.PageContent}>{content}</p>
        </div>
    );
}
