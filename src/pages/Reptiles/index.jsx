import { useState } from "react"
import Sidebar from "../../components/Sidebar"
import { animals } from "../../data/animals";
import AnimalCard from "../../components/AnimalCard";
import styles from "../pageContent.module.css"
import PageTitle from "../../components/PageTitle";

const Reptiles = () => {
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const reptiles = animals.filter(a => a.group.toLowerCase() === 'reptiles');
  
    const handleAnimalClick = (animal) => {
      setSelectedAnimal(prev => prev?.id === animal.id ? null : animal);
    };
    return (
        <div className={styles.pageContainer}>
            <div className={styles.sidebar}>
                <Sidebar
                animals={reptiles}
                activeAnimalId={selectedAnimal?.id}
                onAnimalClick={handleAnimalClick} 
                />
            </div>
            <div className={styles.content}>
                {selectedAnimal ? (
                    <AnimalCard animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />
                ) : ( 
                    <>
                    <PageTitle pageTitle="Welcome to Reptiles Page" />
                    <p>Welcome to the Reptiles section of our zoo website.</p>
                    <p>Click on an animal from the list to explore fascinating facts about these remarkable creatures.</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Reptiles