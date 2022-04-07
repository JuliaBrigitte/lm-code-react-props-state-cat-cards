import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import CatCard from "./components/cat_card";
import { useState } from 'react'
import Cat from "./data/cat";
import cat1 from './assets/images/cat1.jpg';
import cat2 from './assets/images/cat2.jpg';
import cat3 from './assets/images/cat3.jpg';
import cat4 from './assets/images/cat4.jpg';
import cat5 from './assets/images/cat5.jpg';
import cat6 from './assets/images/cat6.jpg';
import cat7 from './assets/images/cat7.jpg';
import cat8 from './assets/images/cat8.jpg';
import cat9 from './assets/images/cat9.jpg';
import cat10 from './assets/images/cat10.jpg';
import cat11 from './assets/images/cat11.jpg';
import cat12 from './assets/images/cat12.jpg';
import dogs from './data/dog-data';
import initialCats from "./data/cat-data";
import images from "./data/cat-image-data";


function App(this: any) {

	const emptyImage = {
		image: "",
		altText: 'No image available',
		licenceType: '',
		licenceUrl: '',
		attributionName: '',
		attributionUrl: ''
	}

	let [cats, setCats] = useState<Array<Cat>>(initialCats)

	let catCount = cats.length;
	const dogCount = dogs.length;

	console.log("Our pretties 😻: ", cats)

	const [ myName, setMyName ] = useState<string>('New Cat');
	const [ myFavouriteFood, setMyFavouriteFood ] = useState<Array<string>>(['wet food', 'dry food']);
	const [ myBirthday, setMyBirthday ] = useState<number>(2022);

	// @ts-ignore
	const handleSubmit = (event) => {
		event.preventDefault()
		setCats([...cats,{
			name: myName,
			species: "Cat",
			favFoods: myFavouriteFood,
			birthYear: myBirthday,
		}])
		catCount = cats.length;
	}

	return (
		<>
			<Navbar />
			<Header catCount={catCount} species="Cat"/>

			<h4>Add a new Cat -{myName}-</h4>
			New Cat name: {myName}, Favourite Food: {[Object.values(myFavouriteFood).join(", ")]}, Birth Year: {myBirthday}
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


			<main>
				<div className='cards__wrapper'>
						{/*{cats.map((cat: Cat, index) =>*/}
						{/*	(*/}
						{/*		index < catCount-1 && (<CatCard cat={cat} catImage={images[index]}/>)*/}
						{/*	)*/}
						{/*)*/}
						{/*}*/}
					{cats.map((cat: Cat, index) =>
						<div key={index}>
							{
								index < 12 && (<CatCard cat={cat} catImage={images[index]}/>)
							}
							{
								index > 11 && (<CatCard cat={cat} catImage={emptyImage}/>)
							}
						</div>
					)
					}
					{
						<Header catCount={dogCount} species="Dog"/>
					}
					{dogs.map((cat: Cat, index) =>
						<div key={index}>
							{
								(<CatCard cat={cat} catImage={emptyImage}/>)
							}

						</div>
					)
					}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
