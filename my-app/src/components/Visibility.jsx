import { useState } from "react";



function Visibility(propst) 
{

    if (propst.show === 1)
    {
        return (
            <div>
             <img src="https://jonahwrites.blog/wp-content/uploads/2023/12/mg-46_uh51.png?w=1024" alt="jujutsu kaisin 3" />
            </div>
        )
    }
    
    if (propst.show === 2) 
    {
        return (
            <div>
             <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/hanami-at-the-kyoto-goodwill-event.jpg" alt="jujutsu kaisin 3" />
            </div>
        )
    }
    else
    {
        return (
            <div>
             <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/02/jujutsu-kaisen-suguru-geto.jpg" alt="jujutsu kaisin 3" />
            </div>
        )
    }
}

export default Visibility;