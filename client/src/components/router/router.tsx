import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Actuality from "../actuality/Actuality";
import AddActuality from "../add_actuality/AddActuality";
import Connexion from "../connexion/connexion";
import Inscriptionform from "../inscription/Inscription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Connexion />,
      },
      {
        path: "/inscriptionform",
        element: <Inscriptionform />,
      },
      {
        path: "/actuality",
        element: <Actuality />,
      },
      {
        path: "/Ajoutactualité",
        element: <AddActuality />,
      },
    ],
  },
]);

export default router;
