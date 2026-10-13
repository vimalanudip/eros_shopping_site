import axios from "axios";
import { useEffect,useState } from "react";
export default function ListItem()
{
  const [msg,setMsg] = useState('');
  const [itemarray, setItemArray] = useState([]);
  useEffect(()=>{
        axios.get("http://localhost:8081/listitems").then( (response)=>{
            if(response.data.result.length>0)
                setItemArray(response.data.result);
            else if (response.data.err.length>0)
                  setMsg(response.data.err)
                else if(response.data.msg.length>0)
                  setMsg(response.data.msg)
        }).catch();
  });
  return (
    <div className="row">
        <div className="col-md-8">
              
            <div className="table">
                <div className="text-warning">{msg}</div>
                <table >
                    <tr>
                    <th>Item Name</th>
                    <th>Cost Price</th>
                    <th>Sell Price</th>
                    <th>Discount</th>
                    <th>DOM</th>
                    <th>DOE</th>                    
                    <th>Category</th>    
                    </tr>    
                  {itemarray.length>0 && itemarray.map((item)=>(
                   <tr key={item.id}>
                    <td>{item.iname}</td>
                    <td>{item.costprice}</td>
                    <td>{item.sellprice}</td>
                    <td>{item.dom}</td>
                    <td>{item.doe}</td>
                    <td>{item.catname}</td>
                   </tr>
                  ))}  
                </table>    
            </div>    
        </div> 
    </div>
  )
}