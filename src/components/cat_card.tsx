import Cat from "../data/cat";
import CatImageDescription from "../data/cat_image_description";
import CatImage from "./cat_image";

const CatCard = ({cat, catImage}: {cat: Cat, catImage: CatImageDescription}): JSX.Element =>
    <div className="card">
        <h3 className="card__text card__header">Name: {cat.name}</h3>
            <CatImage catImage={catImage} />
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