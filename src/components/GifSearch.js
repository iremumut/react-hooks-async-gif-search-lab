import { useState } from "react";

function GifSearch({search, handleFormSubmit, inputHandler}){    

    return(
        <>
            <form onSubmit={(e) => handleFormSubmit(e)}> 
                <div className="mb-3">
                    <label htmlFor="search" className="form-label">Enter a search term: </label>
                    <input type="text" className="form-control" id="seach" value={search} onChange={inputHandler} />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </>
    )
}

export default GifSearch;