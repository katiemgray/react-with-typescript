// take in arr of obj and render as list
import React from "react"; 

interface IProps {
    people: { // <----- defines that it is an object
      name: string
      age: number
      url: string
      note?: string // <------ defines that this is field optional with the ?
    }[] // <--- defines that it is an array of objects
  }

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
    return (
        <div>
            I am a List
        </div>
    )
}

export default List