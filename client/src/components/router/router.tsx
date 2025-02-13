import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Actuality from "../actuality/Actuality"; // Correction du nom du composant (évitez les accents)
import AddActuality from "../add_actuality/AddActuality";
import Connexion from "../connexion/connexion";
import Inscriptionform from "../inscription/Inscription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Composant principal contenant le layout global (Navbar + Footer)
    children: [
      {
        path: "/", // Page d'accueil (connexion)
        element: <Connexion />,
      },
      {
        path: "/inscriptionform", // Route pour l'inscription
        element: <Inscriptionform />,
      },
      {
        path: "/actuality", // Route pour afficher les actualités (correction du nom)
        element: <Actuality />,
      },
      {
        path: "/Ajoutactualité", // Route pour ajouter une actualité (correction du nom)
        element: <AddActuality />,
      },
    ],
  },
]);

export default router;
