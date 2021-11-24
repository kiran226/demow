import React from 'react';
import Person from './Person';

function PersonList() {
    const persons =[
        {
            id:1,
            name:'kiran',
            age:26,
            skill :'React'
        },
        {
            id:2,
            name : 'kirru',
            age:25,
            skill :'Angular'
        },
        {
            id : 3,
            name : 'gandikota',
            age: 28,
            skill : 'All'
        }
    ];
    const personList = persons.map(person => <Person key={person.id} person={person} /> )
    return (
        <div>
            {personList}
        </div>
    )
}

export default PersonList
