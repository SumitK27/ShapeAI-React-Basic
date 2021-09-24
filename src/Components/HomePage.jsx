import React from "react";
import Page from "./Page";
import styles from "./Pages.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className={styles.Page}>
            <h2 className={styles.PageTitle}>Home Page</h2>
            <div className={styles.Columns}>
                <Page
                    title="Page 1"
                    content="Nulla anim nostrud sit duis labore sit magna. Voluptate fugiat veniam id est aliquip enim aute dolore ullamco laborum velit sit dolore. Exercitation id magna sunt dolor sunt duis. Minim consectetur eiusmod amet sit do amet amet officia laboris ad quis voluptate ipsum. Magna veniam sint ullamco eu aliqua mollit. In consequat officia ullamco exercitation est eu quis."
                />
                <Page
                    title="Page 2"
                    content="Non ipsum officia nulla cillum consequat duis in eiusmod veniam nulla cillum fugiat ut est. Dolore cupidatat ut laborum proident deserunt cupidatat sint et aliqua velit consectetur laborum. Esse enim ullamco aute eiusmod deserunt mollit incididunt ea dolore veniam. Excepteur occaecat voluptate culpa nulla do. Fugiat nisi laboris cupidatat minim adipisicing enim anim aute labore enim. Reprehenderit sunt anim et amet laborum.
                        
                        Sint est sint sint do laborum do culpa adipisicing velit ullamco ullamco laborum nisi. Do fugiat consectetur sit dolore elit voluptate qui Lorem ad. Cupidatat laboris ex voluptate laborum ipsum excepteur qui eiusmod consequat aliquip. Dolore sit anim dolor ut sint sint elit est commodo proident pariatur excepteur. Voluptate ea nulla aliqua nostrud duis exercitation dolore. Amet dolor laborum adipisicing magna sit. Eiusmod et ullamco eiusmod fugiat eu do ex id aliquip officia.
                        "
                />
            </div>
            <Link to="/counter">
                <button>Counter</button>
            </Link>
        </div>
    );
}
