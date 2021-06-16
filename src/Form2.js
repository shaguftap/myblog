import "./App.css";
import { useState } from "react";
import Formlist from "./components/Formlist";
import { v4 as uuidv4 } from 'uuid';

let temarr = []

function Form2() {
  const [name, setName] = useState("");
  // const [show, setShow] = useState(false);
  const [arr, setArr] = useState([]);
  const [add, setAdd] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const nameChange = (event) => {
    setName(event.target.value);
  };
  const addChange = (event) => {
    setAdd(event.target.value);
  };
  const phoneChange = (event) => {
    setPhone(event.target.value);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    let id = uuidv4()
    // setShow(true);
    let temobj = {
      userid: id,
      name: name,
      address: add,
      phone: phone
    }
    temarr.push(temobj)
    setArr(temarr);
    setName("");
    setAdd("");
    setPhone("");
  };
  const formUpdate = (event) => {
    event.preventDefault();
    // return
    if (id) {
      let newdata = arr.map((item) => {
        if (item.userid ===id) {
          item.name = name;
          item.address = add;
          item.phone = phone;
        }
        return item;
      })
   
      setArr(newdata);
      setId("")
      setName("");
    setAdd("");
    setPhone("");
      // console.log(newdata);
      // console.log(data);

    }
    else {
      alert("please select before update")
    }

  }
  const edidata = (id) => {
    console.log(id);
   let userdata= arr.find(item => item.userid ===id);
    // let userdata = arr.find((item) => {
    //   if (item.userid === id) {
    //     return item
    //   }
    // })
    setId(userdata.userid)
    setName(userdata.name);
    setAdd(userdata.address);
    setPhone(userdata.phone);

    // console.log(userdata);
  }

  // console.log(arr);


  
  // console.log(uuidv4())
  // console.log(add);

  const deletedata=(id)=>{
    const newitem = arr.filter((item) => item.userid !== id);
    console.log(newitem);
    setArr(newitem)
  }
  return (
    <div className="App">
      <form>
        <div>
          <label>
            {/* Name:{show ? name : ""} */}
            <div className="textalign">Full Name</div>
            <div className="inputaera">
            <input onChange={(e) => nameChange(e)} type="text" name="name" value={name} />

            </div>
          </label>
          <br></br>
          <label>
           <div className="textalign"> Address</div>
            <input onChange={(e) => addChange(e)}  type="text" name="add" value={add} />
          </label>
          <br></br>
          <label>
           <div className="textalign">Phone</div> 
            <input onChange={(e) => phoneChange(e)}   type="text" name="phone" value={phone} />
          </label></div>
        <button className="buttonde" onClick={(e) => formSubmit(e)}>Save</button>
        <button className="buttonde" onClick={(e) => formUpdate(e)}>Update</button>


      </form>{" "}
      {/* {arr.map((item) => {

        return (
          <div className="form2style">
            <li>{item.name}</li>
            <li>{item.address}</li>
            <li>{item.phone}</li>
            <button onClick={() => edidata(item.userid)}>Edit</button>
            <button onClick={() => deletedata(item.userid)}>Delete</button>
          </div>
        )
      })}
       */}
       <Formlist  arr={arr}edidata={edidata} deletedata={deletedata}/>
    </div>
  );
}

export default Form2;
