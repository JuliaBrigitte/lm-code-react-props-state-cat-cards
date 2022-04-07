import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import CatCard from "./components/cat_card";
import { useState } from 'react'
import Cat from "./data/cat";
import dogs from './data/dog-data';
import initialCats from "./data/cat-data";
import images from "./data/cat-image-data";
import CatForm from './components/cat_form';


function App(this: any) {

	const emptyImage = {
		image: "",
		altText: 'No image available',
		licenceType: '',
		licenceUrl: '',
		attributionName: '',
		attributionUrl: ''
	}

	const [cats, setCats] = useState<Array<Cat>>(initialCats)

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

			<CatForm cats={cats} triggerCatsUpdate={setCats} catCount={catCount}/>


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
