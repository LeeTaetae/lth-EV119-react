import { createBrowserRouter } from "react-router-dom";
import Intro from "../pages/intro/Intro";
import MapContainer from "../pages/map/MapContainer";
import EmergencyRoomDetail from "../pages/emergencyRoom/EmergencyRoomDetail";
import RouteGuidance from "../pages/route/RouteGuidance";
import HelpPage from "../pages/help/HelpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />
  },
  {
    path: "/intro",
    element: <Intro />
  },
  {
    path: "/main/map",
    element: <MapContainer />
  },
  {
    path: "/main/emergency-room/:id",
    element: <EmergencyRoomDetail />
  },
  {
    path: "/main/route/:id",
    element: <RouteGuidance />
  },
  {
    path: "/main/help",
    element: <HelpPage />
  },
])

export default router;