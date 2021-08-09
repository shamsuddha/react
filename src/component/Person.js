import React from "react";

function Person({person})
{
    return (
        <div>
            <h4> I am {person.name}</h4>
            <h4> I am {person.age} years old</h4>
            <h4> I am {person.skill} is my favourite</h4>
        </div>
    )
}

export default Person;