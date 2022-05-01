import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'; 

//4. defines a certain type, set outside of the function
interface IState {
  people: { // <----- defines that it is an object
    name: string
    age: number
    url: string
    note?: string // <------ defines that this is field optional with the ?
  }[] // <--- defines that it is an array of objects
}

function App() {
  // 1. 
  // const [number, setNumber] = useState(5); // we can override the infernce that it made by defining the Type within <>, but in this case it is best to just let typescript infer the type for this state

  // const changeNumber = () => {
  //   setNumber('10');
  // };

  // 2. 
  // create state for each card, it will define the type for you right away
  // const [people, setPeople] = useState([
  //   {
  //     name: "Lebron James", 
  //     url: "url", 
  //     age: 36, 
  //     note: "some note goes here"
  //   }, 
  //   {
  //     name: "Kobe Bryant", 
  //     url: "url", 
  //     age: 36
  //   }
  // ])

  // people.map(person => {
  //  // person.height // if I try accessing this, typescript will yell at me
  //  // person.age = "36" // also will be yelled at
  // })

  //3.  but what about if we want to start with an empty array for state? - so we have to define the types manually
  // rather than throw all of the type definitions instide the <> for state, we create an interface to pass to it instead

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James", 
      url: "", 
      age: 36, 
      note: "some note goes here"
    }
  ]) // <--- now we can access our interface
  // 5. Next piece will be typing props with typescript - ie if another component is rendering the data, how do we pass typed props to it
  // if you don't define the types for the props for the component that you are trying to pass to, it won't work

  people.map(person => {
    person.note
  })


  return (
    <div className="App">
      <h1>People Invited to our Party</h1>
      <List people={people}/> 
    </div>
  );
}

export default App;
