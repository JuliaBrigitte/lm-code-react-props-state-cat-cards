import Cat from "../data/cat";

const CatCard = ({cat}: {cat: Cat}): JSX.Element =>
    <div className="card">
        <h3 className="card__text card__header">Name: {cat.name}</h3>
        <p className="card__text">Species: {cat.species}</p>
        <p className="card__text">Favourite Food(s): {
            cat.favFoods.map((food: string) =>
                (
                    food + " "
                ))
                }
        </p>
        <p className="card__text">Birth Year: {cat.birthYear}</p>
    </div>;

export default CatCard;