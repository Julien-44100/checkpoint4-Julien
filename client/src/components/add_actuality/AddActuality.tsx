import "./AddActuality.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddActuality() {
  const [nameActuality, setNameActuality] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [addactuality, setAddActuality] = useState("");
  const navigate = useNavigate();

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      name_actuality: nameActuality,
      add_photo: selectedPhoto,
      actuality: addactuality,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/Add-actuality`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        alert("Actualité ajoutée avec succès !");

        setNameActuality("");
        setSelectedPhoto(null);
        setAddActuality("");

        navigate("/actuality", { replace: true });
      } else {
        alert("Erreur lors de l'ajout de l'actualité.");
      }
    } catch (error) {
      console.error("Erreur :", error);
    }
  };

  return (
    <div className="add-actuality">
      <div className="form--add">
        <form className="form-add-actuality" onSubmit={handleSubmit}>
          <h1 className="name-actuality">Nom de l'actualité</h1>
          <input
            type="text"
            id="text"
            name="name_actuality"
            placeholder="Enter your name actuality"
            required
            value={nameActuality}
            onChange={(e) => setNameActuality(e.target.value)}
          />

          <h2 className="photo">Ajouter une photo</h2>
          <input
            type="file"
            accept="image/*"
            id="photo-upload"
            style={{ display: "none" }}
            onChange={handlePhotoChange}
          />
          <label htmlFor="photo-upload">
            <button
              type="button"
              onClick={() => document.getElementById("photo-upload")?.click()}
            >
              Ajouter une photo
            </button>
          </label>
          {selectedPhoto && (
            <div>
              <h3>Aperçu de la photo :</h3>
              <img
                src={selectedPhoto}
                alt="Aperçu"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          )}

          <label className="actuality" htmlFor="actuality">
            Actualité
          </label>
          <input
            type="text"
            id="actuality"
            name="actuality"
            placeholder="actuality"
            required
            value={addactuality}
            onChange={(e) => setAddActuality(e.target.value)}
          />

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default AddActuality;
