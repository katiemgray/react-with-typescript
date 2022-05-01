import React, {useState} from "react"; 
import { IState as Props } from '../App'; 

interface IProps { // handing defining types on state passed down from the parent
    people: Props["people"] // can just use the interface set in state from the parent
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({setPeople, people}) => { // this line is how you actually use the interface, and get rid of the error on the parent component
    // set up two way binding for inputs
    
    const [input, setInput] = useState({
        name: "", 
        age: "", 
        note: "", 
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => { // but prior to change, e is implied 'any', which can be anything
        // also need to set explicitly what you want to return for this function, in this case I want to return voic
        setInput({ // set input to what it currently is
            ...input, 
            [e.target.name]: e.target.value // override whatever e.target.name is to e.target.value
        })

    }

    const handleClick = (): void => {
        // append to people using setPeoplle
        if(
            !input.name ||
            !input.age ||
            !input.img
        ) {
            return
        }

        setPeople([
            ...people, 
            {
                name: input.name, 
                age: parseInt(input.age), // this ts error b/c number e.tartget.valueis going to be a string, so need to parseInt
                url: input.img,
                note: input.note

            }
        ])

        setInput({
            name: "",
            age: "",
            img: "",
            note: ""
        })

    }

    // for the onChange function, typescript would know what the type of e is when it is an inline function
    return (
        <div className="AddToList">
            <input type="text" placeholder="Name" className="AddToList-input" value={input.name} onChange={(handleChange)} name="name"/> 
            <input type="text" placeholder="Age" className="AddToList-input" value={input.age} onChange={(handleChange)} name="age"/>
            <input type="text" placeholder="Image URL" className="AddToList-input" value={input.img} onChange={(handleChange)} name="img"/>
            <textarea placeholder="Notes" className="AddToList-input" value={input.note} onChange={(handleChange)} name="note"/>
            <button className="AddToList-btn" onClick={handleClick}>
                Add to List
            </button>
        </div>
    )
    // originally, ts was complaining about using handleChange for the textarea element b/c it is not of type HTMLInputElement, it is HTMLTextAreaElement, solve by adding the | above
}

export default AddToList; 