import React from "react";
import styles from "./Pages.module.css";

export default function ContactPage() {
    return (
        <div className={styles.Page}>
            <h2 className={styles.PageTitle}>Contact</h2>

            <div className="container">
                <form action="/action_page.php">
                    <label>First Name</label>
                    <input type="text" placeholder="Your name.." />

                    <label>Last Name</label>
                    <input type="text" placeholder="Your last name.." />

                    <label>Country</label>
                    <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>

                    <label>Subject</label>
                    <textarea
                        placeholder="Write something.."
                        style={{ height: "200px" }}
                    ></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}
