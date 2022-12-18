import menu from "../menu.json"
import Meal from "./Meal"

export default function ListMeal({categorieActuelle, commande, setCommande}){

    const metas = menu[categorieActuelle]

    let repas = []
    for (const plat in metas){
        repas.push(plat)
    }

    const ajoutRepas = (item) =>{
        setCommande(oldCommande => [...oldCommande, item])
    }

    return(
        <div>
            {repas.map((item) => {
                return <Meal key={item} ajoutRepas={() => ajoutRepas(item)} meta={metas[item]} nom={item}/>
            })}
        </div>
    )
}