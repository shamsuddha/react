import React from "react";
import Person from "./Person";
function NameList()
{
    const persons = [
        {
            id: 1,
            name: 'Rajit',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Asma',
            age: 30,
            skill: 'React'
        },
        {
            id: 3,
            name: 'Rahat',
            age: 28,
            skill: 'Angular'
        }
    ]

    const names = ['rajit', 'asma', 'rahat']

    const person = persons.map((person)=><Person key={person.id} person={person}></Person>)
    const name = names.map((name, index)=> <h1 key={index}>My name is {name}</h1>)

    return (
        <div>
            {person}
            {name}
        </div>
    )
}
export default NameList;