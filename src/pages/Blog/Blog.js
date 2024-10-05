import React from 'react';
import styles from "./Blog.module.css"
import BlogItem from "./components/BlogItem/BlogItem";
import GradientButton from "../../components/GradientButton/GradientButton";
import DownloadBlock from "../../components/DownloadBlock/DownloadBlock";
import FeatureConstruction from "../../components/FeatureConstruction/FeatureConstruction";
const Blog = () => {
    return (
        <div className={styles.container}>
            {/*<p className={styles.title}>Volve blog</p>*/}
            <FeatureConstruction/>
            {/*<div className={styles.blogContent}>*/}
            {/*    <BlogItem/>*/}
            {/*    <BlogItem/>*/}
            {/*    <BlogItem/>*/}
            {/*    <BlogItem/>*/}
            {/*    <BlogItem/>*/}
            {/*</div>*/}
            {/*<GradientButton text={'see more news'} className={styles.buttonMore}/>*/}
            <DownloadBlock/>
        </div>
    );
};

export default Blog;
