import menu from "../menu.json"
import "../css/Categories.css"
import { useState } from "react"

export default function Categories(props){
    
    let categories = []
    for (const categorie in menu){
        categories.push(categorie)
    }
    
    const changerCategorie = (categorie) => {
        props.setCategorieActuelle(categorie)
    }

    return (
        <div className="Categories">
            {categories.map((categorie) =>{
                return <button key={categorie} onClick={() => {changerCategorie(categorie)}}>{categorie}</button>
            })}
        </div>
    )
}