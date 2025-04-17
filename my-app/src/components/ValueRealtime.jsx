import { useState } from "react";



function ValueRealTime() {
    const [value, setValue] = useState();

    return (
        <div>
            <input  value={value}
                onChange={(event) => {
                    setValue(event.target.value)
                }}
            />
            <p>Weclome : {value}</p>
        </div>
    )
}


export default ValueRealTime;