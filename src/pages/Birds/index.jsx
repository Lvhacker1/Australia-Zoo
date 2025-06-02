import { useState } from "react"
import Sidebar from "../../components/Sidebar"
import { animals } from "../../data/animals";
import AnimalCard from "../../components/AnimalCard";
import styles from "../pageContent.module.css"
import PageTitle from "../../components/PageTitle";

const Birds = () => {
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const birds = animals.filter(a => a.group.toLowerCase() === 'birds');
  
    const handleAnimalClick = (animal) => {
      setSelectedAnimal(prev => prev?.id === animal.id ? null : animal);
    };
    return (
        <div className={styles.pageContainer}>
            <div className={styles.sidebar}>
                <Sidebar
                animals={birds}
                activeAnimalId={selectedAnimal?.id}
                onAnimalClick={handleAnimalClick} 
                />
            </div>
            <div className={styles.content}>
                {selectedAnimal ? (
                    <AnimalCard animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />
                ) : (
                    <>
                    <PageTitle pageTitle="Welcome to Birds Page" />
                    <p>Here you can learn more about various bird species found at the zoo.</p>
                    <p>Click on any bird in the list to see detailed information about it.</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Birds