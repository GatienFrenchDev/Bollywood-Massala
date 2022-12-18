import ItemOrder from "./ItemOrder";

export default function Order({ commande, setCommande, categorieActuelle }) {
    let id = 0;

    const submitOrder = (commande) =>{
        console.log("envoi de la commande")
    }

    return (
        <div>
            {commande.map(element => {
                id++
                return <ItemOrder key={id} nom={element} commande={commande} setCommande={setCommande} categorieActuelle={categorieActuelle}/>
            })}
            <button onClick={() => submitOrder(commande)}>VALIDER</button>
        </div>
    )
}