import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
    return (
        <>
            <div className={styles.NavBar}>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <h2 className={styles.NavBarBrand}>React Basics</h2>
                </Link>
                <div className={styles.NavBarItems}>
                    <Link to="/" className={styles.NavBarItem}>
                        <div>Home</div>
                    </Link>
                    <Link to="/about" className={styles.NavBarItem}>
                        <div>About</div>
                    </Link>
                    <Link to="/contact" className={styles.NavBarItem}>
                        <div>Contact</div>
                    </Link>
                </div>
            </div>
        </>
    );
}
