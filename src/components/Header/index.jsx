import Navigation from "../Navigation/NavBar"
import styles from "./header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <h2>Australia Zoo</h2>
            </div>
            <div className={styles.navMenu}>
                <Navigation />  
            </div>
            
        </header>
    )
}

export default Header