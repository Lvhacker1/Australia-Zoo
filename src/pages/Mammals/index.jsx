import { useState } from "react"
import Sidebar from "../../components/Sidebar"
import { animals } from "../../data/animals";
import AnimalCard from "../../components/AnimalCard";
import styles from "../pageContent.module.css"
import PageTitle from "../../components/PageTitle";

const Mammals = () => {
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const mammals = animals.filter(a => a.group.toLowerCase() === 'mammals');
  
    const handleAnimalClick = (animal) => {
      setSelectedAnimal(prev => prev?.id === animal.id ? null : animal);
    };
    return (
        <div className={styles.pageContainer}>
            <div className={styles.sidebar}>
                <Sidebar
                animals={mammals}
                activeAnimalId={selectedAnimal?.id}
                onAnimalClick={handleAnimalClick} 
                />
            </div>
            <div className={styles.content}>
                {selectedAnimal ? (
                    <AnimalCard animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />
                ) : (
                    <>
                    <PageTitle pageTitle="Welcome to Mammals Page" />
                    <p>Discover fascinating mammals living at our zoo.</p>
                    <p>Click on any mammal in the list to see detailed information about it.</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Mammals