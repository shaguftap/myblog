import "./App.css";
import { useState,useEffect} from "react";
const temparr=[
    {
        name:"shagu",
        address:"noida"
    },
    {
        name:"adil",
        address:"dhanbad"

    }
]
const Workuseeffect=()=>{
    const [arr, setArr] = useState([]);
    // console.log("render");
    useEffect(()=>{
        setTimeout(() => {
          setArr(temparr)  
        },2*1000);
    },[])

console.log(arr);
if (arr.length===0){
    return(
        <div>Loading</div>
    )   
}
return(
    <div>
    {arr.map((shagu)=>{
        return(
            <div>
            <li>{shagu.name}</li>
            <li>{shagu.address}</li>
            </div>

        )
    }) }
    </div>
)

}
export default Workuseeffect;