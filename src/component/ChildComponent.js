import React from "react";

function ChildComponent(props)
{
    return(
        <div>
            <button onClick= {()=>props.name('Shamsuddha al amin')}>Click Me</button>
        </div>
    )

}

export default ChildComponent;