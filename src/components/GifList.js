import { v4 as uuidv4 } from 'uuid';

function GiftList({images}){

    const imgLi = images.map((img) => {
        return (<li>
                <img src={img} key={uuidv4()} className="rounded mx-auto d-block" style={{"width": "200px", "height": "200px"}}/>
               </li>)
    })


    return(
    <div>
        <ul>
            {imgLi? imgLi : ''}
        </ul>
    </div>)
}

export default GiftList;