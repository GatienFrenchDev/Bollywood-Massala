import { useState } from "react"

import Categories from "./Categories"
import ListMeal from "./ListMeal"
import Order from "./Order";

export default function Plats() {

    const [categorieActuelle, setCategorieActuelle] = useState("Entrées");
    const [commande, setCommande] = useState([]);

    return (
        <div className="racine">
            <Categories setCategorieActuelle={setCategorieActuelle} />
            <ListMeal categorieActuelle={categorieActuelle} commande={commande} setCommande={setCommande} />
            <Order commande={commande} setCommande={setCommande} categorieActuelle={categorieActuelle}/>
        </div>
    )
}