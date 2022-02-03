import { useState } from "react";
import GiftList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {

    const [images, setImages] = useState([]);
    const [search, setSearch] = useState('');

    function fetchData(query){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then((res) => res.json())
        .then((res) => {
            //console.log(res);
            let newImgs = [];
            for(let i=0;i<3;i++){
                newImgs = [...newImgs,res.data[i].images.original.url];
            }
            setImages(newImgs);
        })
    }

    function inputHandler(e){
        setSearch(e.target.value);
    }

    function handleFormSubmit(e){
        e.preventDefault();
        fetchData(search);
        setSearch('');
    }

    return(
        <div className="container">
            <div className="row">
            <div className="col-6">
                <GiftList images={images}/>
            </div>
            <div className="col-6">
                <GifSearch search={search} handleFormSubmit={handleFormSubmit} inputHandler={inputHandler}/>
            </div>
            </div>
        </div>
    )
}

export default GifListContainer;