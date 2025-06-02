import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <p className={styles.footerText}>&copy; 2025 | Australia Zoo | All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer