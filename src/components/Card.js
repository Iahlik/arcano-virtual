const Card = ({ arcano }) => {
    return (
        <div className="card">
            <img src={arcano.imagen} alt={arcano.nombre} />
            <h3>{arcano.nombre}</h3>
            <p>{arcano.significado}</p>
        </div>
    );
};

export default Card;
