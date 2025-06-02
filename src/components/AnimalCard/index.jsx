import { Link } from "react-router-dom";
import styles from "./animalCard.module.css"
import PopUp from "../PopUp";
import { useState } from "react";

const AnimalCard = ({animal}) => {
      const [showPopUp, setShowPopUp] = useState(false);
      const shortDescription = animal.description.slice(0, 200) + (animal.description.length > 200 ? '...' : '');

      const popUpContent = (
        <>
        <div className={styles.imageContainer}>
            {animal.image && (
                <img src={animal.image} alt={animal.name}></img>
            )}
        </div>
        <div>
            <h2>{animal.name}</h2>
            <div className={styles.content}>
                <p><strong>Group:</strong> <Link to={`/${animal.group}`}>{animal.group}</Link></p>
                <p><strong>Name:</strong>{animal.name}</p>
                <p><strong>Lifespan:</strong>{animal.lifespan}</p>
                <p><strong>Food:</strong>{animal.food}</p>
                <p><strong>Length:</strong>{animal.length}</p>
                <p><strong>Weight:</strong>{animal.weight}</p>
                <p><strong>Found:</strong>{animal.found}</p>
            </div>
            <div className={styles.description}>
                <p>{animal.description}</p>
            </div>
        </div>
        </>
      )
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                {animal.image && (
                    <img src={animal.image} alt={animal.name}></img>
                )}
            </div>
            <div>
                <h2>{animal.name}</h2>
                <div className={styles.content}>
                    <p><strong>Group:</strong> <Link to={`/${animal.group}`}>{animal.group}</Link></p>
                    <p><strong>Name:</strong>{animal.name}</p>
                    <p><strong>Lifespan:</strong>{animal.lifespan}</p>
                    <p><strong>Food:</strong>{animal.food}</p>
                    <p><strong>Length:</strong>{animal.length}</p>
                    <p><strong>Weight:</strong>{animal.weight}</p>
                    <p><strong>Found:</strong>{animal.found}</p>
                </div>
                <div className={styles.description}>
                    <p>{shortDescription}</p>
                    {animal.description.length > 200 && (
                        <button className={styles.button}
                        onClick={() => setShowPopUp(true)}>
                            Read More
                        </button>
                    )}
                </div>
            </div>
            {showPopUp && (
                <PopUp content={popUpContent} onClose={() => setShowPopUp(false)} />
            )}
        </div>
    )
}

export default AnimalCard