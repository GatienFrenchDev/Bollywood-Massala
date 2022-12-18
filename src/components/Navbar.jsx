import { useState, useEffect } from "react";
import "../css/Navbar.css";
import "../index.css";

export default function Navbar() {

    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setClock(new Date()), 1000);
        return () => {
          clearInterval(interval);
        };
      }, []);

    return (
        <div className="navbar">
            <h3>Bollywood Massala</h3>
            <p>{clock.toLocaleString("fr")}</p>
        </div>
    )
}