import paths from "../../../data/headerLinks"
import NavItem from "../NavItem"
import styles from "./navBar.module.css"


const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.navList}> {paths.map((path) => (
                <li key={path}>
                    <NavItem path={path} />
                </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar