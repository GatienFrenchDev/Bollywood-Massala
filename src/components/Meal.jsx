export default function Meal({ajoutRepas, nom, meta}) {
    return (
        <button onClick={ajoutRepas}>
            <h3>{nom}</h3>
            <h5>{meta[0]} €</h5>
            <p>{meta[1]}</p>
        </button>
    )
}