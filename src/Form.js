import "./App.css";
import { useState, useEffect } from "react";

function Form() {
  const [name, setName] = useState("");
  // const [name2, setName2] = useState("");
const [show,setShow]=useState(false);

 const namechange=(event)=>{
   console.log(event.target.value)
   setName(event.target.value);
  //  console.log(event.target.value);
 }
 const formSubmit=(event)=>{
    event.preventDefault()
    console.log("fjhvdsfhjvdsfhjdsvfsdh")
    setShow(true)
  // setName2(name)
  // setName("")
 }

  return (
    <div>
      <form>
        <label>
          
          Name:{show?name:""}
          <input onChange={(e) =>namechange(e)} type="text" name="name" />
        </label>
        {/* <input  type="submit" value="Submit" /> */}
        <button onClick={(e) => formSubmit(e)}>Save</button>
      </form>{" "}
    </div>
  );
}
export default Form;
