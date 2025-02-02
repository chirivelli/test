import {createRoot} from "react-dom/client";
import App from "./App.jsx";

document.addEventListener("DOMContentLoaded", () => {
    createRoot(document.getElementById("root")).render(<App />)
})
