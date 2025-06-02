import styles from "./sideBar.module.css"

const Sidebar = ({ animals = [], activeAnimalId, onAnimalClick}) => {
   
    return (
        <aside className={styles.sidebar}>
            <ul className={styles.sidebarList}>
                {animals.map(animal => (
                <li key={animal.id}
                className={`${styles.sidebarListItem} ${activeAnimalId === animal.id ? styles.activeAnimal : ""}`}
                onClick={() => onAnimalClick(animal)}
                tabIndex={0}
                aria-pressed={activeAnimalId === animal.id}>
                    {animal.name}

                </li>
            ))}
            </ul>
        </aside>
    )
}

export default Sidebar