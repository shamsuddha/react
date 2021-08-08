import React from "react";


const Greet = ({name}) =>

{
    return(
        <div>
            <h1>{name}</h1>
            {/*  <h1>{props.children}</h1>*/}
        </div>
    )
}

export default Greet;