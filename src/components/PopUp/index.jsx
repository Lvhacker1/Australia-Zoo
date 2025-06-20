import Header from "../Header"
import styles from "./popUp.module.css"


const PopUp = ({content, onClose}) => {
    return (
        <div className={styles.popUp}>
            <Header />
            <button className={styles.closeButton} onClick={onClose}>X</button>
            <div className={styles.popUpContent}>
                {content}
            </div>
        </div>
    )
}

export default PopUp