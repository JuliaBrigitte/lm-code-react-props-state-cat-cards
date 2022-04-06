import Cat from "../data/cat";
import CatImageDescription from "../data/cat_image_description";
import CatImage from "./cat_image";

const CatCard = ({cat, catImage}: {cat: Cat, catImage: CatImageDescription}): JSX.Element =>
{
    const { name, species, favFoods, birthYear } = cat;
    return (
        <div className="card">
        <h3 className="card__text card__header">Name: {name}</h3>
        <CatImage catImage={catImage} />
        <p  className="card__text">Species: {species}</p>
        <p className="card__text">Favourite Food(s): {
            Object.values(favFoods.join(", "))
        }
        </p>
        <p className="card__text">Birth Year: {birthYear}</p>
    </div>)
}


export default CatCard;