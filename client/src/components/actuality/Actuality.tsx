import { useEffect, useState } from "react";

function Actuality() {
  const [actualities, setActualities] = useState<
    {
      id: number;
      name_actuality: string;
      add_photo: string;
      actuality: string;
    }[]
  >([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/actualities`)
      .then((response) => response.json())
      .then((data) => setActualities(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des actualités :", error),
      );
  }, []);

  return (
    <div>
      <h1>Liste des Actualités</h1>
      {actualities.length > 0 ? (
        actualities.map((actuality) => (
          <div key={actuality.id} className="actuality-card">
            <h2>{actuality.name_actuality}</h2>
            {actuality.add_photo && (
              <img src={actuality.add_photo} alt="Actualité" />
            )}
            <p>{actuality.actuality}</p>
          </div>
        ))
      ) : (
        <p>Aucune actualité pour le moment.</p>
      )}
    </div>
  );
}

export default Actuality;
