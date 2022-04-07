import {useState} from "react";
import Cat from "../data/cat";

const CatForm = ({cats, triggerCatsUpdate, catCount}: {cats: Array<Cat>, triggerCatsUpdate: Function, catCount: number}) : JSX.Element =>
{
    const [ myName, setMyName ] = useState<string>('New Cat');
    const [ myFavouriteFood, setMyFavouriteFood ] = useState<Array<string>>(['wet food', 'dry food']);
    const [ myBirthday, setMyBirthday ] = useState<number>(2022);

    // @ts-ignore
    const handleSubmit = (event) => {
        event.preventDefault()
        triggerCatsUpdate([...cats,{
            name: myName,
            species: "Cat",
            favFoods: myFavouriteFood,
            birthYear: myBirthday,
        }])
        catCount = cats.length;
    };

    return (
        <div>
            <h4>Add a new Cat -{myName}-</h4>
            <p>
                New Cat name: {myName}, Favourite Food: {[Object.values(myFavouriteFood).join(", ")]}, Birth Year: {myBirthday}
            </p>

            <form>
                <label>
                    Name:
                    <input type="text" value={myName} name="myName" onChange={(e) => setMyName(e.target.value)} />
                </label>
                <label>
                    Favourite Food:
                    <input type="text" value={myFavouriteFood} name="...myFavouriteFood" onChange={(e) => setMyFavouriteFood(e.target.value.split(','))}/>
                </label>
                <label>
                    Birth Year:
                    <input type="number" value={myBirthday} name="myBirthday" onChange={(e) => setMyBirthday(parseInt(e.target.value, 10))} />
                </label>
                <input type="submit" value="Submit" onClick={(event) => handleSubmit(event)} />
            </form>
        </div>
    );

}

export default CatForm;