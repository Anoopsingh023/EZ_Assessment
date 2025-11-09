import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Film from "./components/services/Film";
import { AnimatePresence, motion } from "framer-motion";
import Branding from "./components/services/Branding";
import Art from "./components/services/Art";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      
    },
    {path: "film", element: <Film/>},
    {path: "branding", element: <Branding/>},
    {path: "art", element: <Art/>}
  ]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="min-h-screen"
      >
        <RouterProvider router={appRouter} />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
