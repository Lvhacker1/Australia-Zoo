import { useState } from "react"
import Sidebar from "../../components/Sidebar"
import { animals } from "../../data/animals";
import AnimalCard from "../../components/AnimalCard";
import styles from "../pageContent.module.css"
import PageTitle from "../../components/PageTitle";

const Home = () => {
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    const handleAnimalClick = (animal) => {
        setSelectedAnimal(prev => prev?.id === animal.id ? null : animal)
    }
    return (
        <div className={styles.pageContainer}>
            <div className={styles.sidebar}>
                <Sidebar
                animals={animals}
                activeAnimalId={selectedAnimal?.id}
                onAnimalClick={handleAnimalClick} 
                />
            </div>
            <div className={styles.content}>
                {selectedAnimal ? (
                    <AnimalCard animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />
                ) : (
                    <>
                    <PageTitle pageTitle="Welcome to Australia Zoo!" />
                    <p>Here you can discover a variety of amazing animals.</p>
                    <p>Select an animal from the list to learn more about it.</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Home