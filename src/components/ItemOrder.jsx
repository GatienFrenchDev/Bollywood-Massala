import menu from "../menu.json";

export default function ItemOrder({ nom, commande, setCommande, categorieActuelle }) {
    return(
        <div>
            <h3>{nom}</h3>
            <h2>{menu[categorieActuelle][nom][0]}€</h2>
            <h6>{menu[categorieActuelle][nom][1]}</h6>
            <button onClick={() => {
                const newCommande = [...commande]
                let i = 0
                while(newCommande[i] != nom){
                    i++
                }
                newCommande.pop(i)
                setCommande(newCommande)
            }}>-</button>
        </div>
    )
}