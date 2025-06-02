import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "./layout.module.css"
import { Outlet } from "react-router-dom"


const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout