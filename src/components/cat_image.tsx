import CatImageDescription from "../data/cat_image_description";

const CatImage = ({catImage}: {catImage: CatImageDescription}): JSX.Element =>
    <>
    <img className='card__image' src={catImage.image} alt={catImage.altText}/>
    <p className='card__text__small'>
        Image licenced under <a href={catImage.licenceUrl}>{catImage.licenceType}</a>
        {catImage.attributionName && (
            <>
                &nbsp; by <a href={catImage.attributionUrl}>{catImage.attributionName}</a>
            </>
        )}
    </p>
    </>;
export default CatImage;