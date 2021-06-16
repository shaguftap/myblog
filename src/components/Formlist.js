import React from 'react';
function Formlist({arr,edidata,deletedata}){


return(
    <div>
         {arr.map((item) => {

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
    </div>
)

}

export default Formlist