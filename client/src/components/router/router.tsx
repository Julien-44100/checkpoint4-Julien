import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Actualité from "../actuality/Actuality";
import AddActuality from "../add_actuality/AddActuality";
import Connexion from "../connexion/connexion";
import Inscriptionform from "../inscription/Inscription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Ce sera votre composant principal qui contient le layout global (Navbar + Footer)
    children: [
      {
        path: "/",
        element: <Connexion />, // Page d'accueil
      },
      {
        path: "/inscriptionform", // La route pour l'inscription
        element: <Inscriptionform />,
      },
      {
        path: "/Actuality", // La route pour l'inscription
        element: <Actualité />,
      },
      {
        path: "/Ajoutactualité", // La route pour l'inscription
        element: <AddActuality />,
      },
    ],
  },
]);

export default router;
