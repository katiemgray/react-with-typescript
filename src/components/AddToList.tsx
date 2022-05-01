import React, {useState} from "react"; 

const AddToList = () => {
    // set up two way binding for inputs
    
    const [input, setInput] = useState({
        name: "", 
        age: "", 
        note: "", 
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { // but prior to change, e is implied 'any', which can be anything
        setInput({ // set input to what it currently is
            ...input, 
            [e.target.name]: e.target.value // override whatever e.target.name is to e.target.value
        })

    }

    // for the onChange function, typescript would know what the type of e is when it is an inline function
    return (
        <div className="AddToList">
            <input type="text" placeholder="Name" className="AddToList-input" value={input.name} onChange={(handleChange)} name="name"/> 
            <input type="text" placeholder="Age" className="AddToList-input" value={input.age} onChange={(handleChange)} name="age"/>
            <input type="text" placeholder="Image URL" className="AddToList-input" value={input.img} onChange={(handleChange)} name="img"/>
            <textarea placeholder="Notes" className="AddToList-input" value={input.note} onChange={(handleChange)} name="note"/>
        </div>
    )
    // originally, ts was complaining about using handleChange for the textarea element b/c it is not of type HTMLInputElement, it is HTMLTextAreaElement, solve by adding the | above
}

export default AddToList; 