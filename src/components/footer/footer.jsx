import React from "react";
import styles from "./footer.module.css";

const Footer = ({ data : { updated_at: updatedAt} }) => {
    if (!updatedAt) {
        return '';
    }
    return (
        <footer className={styles.container}>
            This website is scraped from <a href="https://www.mohfw.gov.in/">MoHFW</a> &nbsp;&nbsp;|&nbsp;&nbsp; Last updated at: {new Date(updatedAt).toLocaleString()}
        </footer>
    )
}

export default Footer;
