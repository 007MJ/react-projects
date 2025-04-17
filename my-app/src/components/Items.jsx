import { useState } from "react";



function Items() {
    let nextId = 0;
    const [nvalue, setnValue] = useState('');
    const [boxs, setBoxs] = useState([])

    return (

        <div>
            <p>Add items</p>
            <input value={nvalue} 
            onChange={event => setnValue(event.target.value)}/>

            <button onClick={() => {
                setBoxs([
                ...boxs,
                    {
                        id: nextId++,
                        name: nvalue,
                    },
                ]);
            setnValue('')
            }}> add</button>
            <hr />
            <ul>
                {
                    boxs.map((box) => (
                        <li key={box.id}> {box.name}</li>
                    ))    
                }
            </ul>
        </div>

    )
}


export default Items;