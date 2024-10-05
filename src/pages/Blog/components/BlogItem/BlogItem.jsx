import React from 'react';
import styles from "./BlogItem.module.css"

const BlogItem = () => {
    return (
        <div className={styles.blogContainer}>
            <img src={"images/blogImg.png"}/>
            <div className={styles.blogInfo}>
                <p className={styles.date}>13 / 06 / 2023</p>
                <p className={styles.title}>Christen Harper on Surreal Feeling Modeling Her Own Designs in 2023 SI
                    Swimsuit Issue</p>
                <p className={styles.text}>Christen Harper’s 2023 SI Swimsuit experience was one to remember. The
                    three-time brand model, who was named co-winner of the Swim Search in 2021 and earned co-Rookie of
                    the Year honors in ’22</p>
            </div>
        </div>
    );
};

export default BlogItem;