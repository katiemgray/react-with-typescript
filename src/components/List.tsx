// take in arr of obj and render as list
import { render } from "@testing-library/react";
import React from "react"; 
import {IState as IProps } from "../App"

// interface IProps {
//     people: { // <----- defines that it is an object
//       name: string
//       age: number
//       url: string
//       note?: string // <------ defines that this is field optional with the ?
//     }[] // <--- defines that it is an array of objects
//   }

//   One way to do it
// const List = (props: IProps ) => {
//     return (
//         <div>
//             I am a List
//         </div>
//     )
// }

//   One way to do it, descructured 
// const List = ({people}: IProps ) => {
//     return (
//         <div>
//             I am a List
//         </div>
//     )
// }

//  Alternitively, I could also define the type of element on the left, of type React Functional Component, and contains the types of Iprops 
// now, it has a lot more detail of what it is 

const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => { // originally, typescript inferred that I was going to return an array of nothing, so need to define what you wan to return (ie a JSX Element that is an array)
        return people.map((person) => {
            return (
                <li className="List" key={person.name}>
                <div className="List-header">
                    <img className="List-img" src={person.url} alt="" />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
            )
        })
    }
    return (
        <ul>
           {renderList()} 
        </ul>
    )
}

export default List