import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
export default function AddItem(){
    const [catlist,setCatlist] = useState([]);
    const [hidepage,setHide]= useState(false);
    const [msg,setMsg]= useState('');
    const [errmsg, setErrMsg] = useState('');
    useEffect(()=>{
            axios.get("http://localhost:8081/catlist",{headers:{'x-access-token':localStorage.getItem('logintoken')}}).then((response)=>{
                    if(response.data.result!='')
                    {
                        setCatlist(response.data.result);
                        console.log(catlist);
                    }
                    else
                        setErrMsg("error in loading category list")

            }).catch((err)=>{
                console.log("error loading data");
                setHide(true);
                console.log(err)});

    },[]);
    const [itemdata, setItemData] = useState({iname:'',cp:0,sp:0,discount:0,dom:'',doe:'',imageurl:'',catid:0});
    const AddItemSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8081/additemsubmit",itemdata,{headers:{'x-access-token':localStorage.getItem('logintoken')}}).then((response)=>{
                if(response.data.result==1)
                    setMsg("item added");
                else
                    setMsg("try again");

        }).catch((err)=>{});


    };
    return (
        <>
        <div className="text-warning">{hidepage && "error loading data from server try again"}</div>
            <div className={`col-md-6 mx-auto ${hidepage ? "hide":""}`}>
                <div className="text-success bg-dark">{msg.length>0 && msg}</div>
                <form>
                    <div className="table">
                { errmsg.length==0 &&  
                       <table className="table table-striped"> 
                       <tbody>
                        <tr>
                            <td>Item name</td>
                            <td> <input type="text" className="form-item" id="Itemname" onChange={(e)=>setItemData({...itemdata,iname:e.target.value})} />
                            {itemdata.iname}
                            </td>
                    </tr>
                     <tr>
                        <td>Item category </td>
                       <td> <select id="catname" onChange={(e)=>setItemData({...itemdata,catid:e.target.value})}>
                            {catlist.length>0 && catlist.map((category)=>(
                                    <option key={category.catid+category.catname} value={category.catid}>{category.catname}</option>
                            ))}
                        </select> </td>
                        </tr>
                          <tr>
                            <td>Item cost price</td>
                            <td> <input type="number" className="form-item" onChange={(e)=>setItemData({...itemdata,cp:e.target.value})}/>
                            </td>
                    </tr>
                      <tr>
                            <td>Item sellprice</td>
                            <td> <input type="number" className="form-item" id="sp" onChange={(e)=>setItemData({...itemdata,sp:e.target.value})}/>
                            </td>
                    </tr>
                      <tr>
                            <td>Discount</td>
                            <td> <input type="text" className="form-item" id="disc" onChange={(e)=>setItemData({...itemdata,discount:e.target.value})}/>
                            </td>
                    </tr>
                      <tr>
                            <td>Item DOM</td>
                            <td> <input type="date" className="form-item" id="dom" onChange={(e)=>setItemData({...itemdata,dom:e.target.value})}/>
                            </td>
                    </tr>
                      <tr>
                            <td>Item DOE</td>
                            <td> <input type="date" className="form-item" id="doe" onChange={(e)=>setItemData({...itemdata,doe:e.target.value})}/>
                            </td>
                    </tr>
                      <tr>
                            <td>Item Image URL</td>
                            <td> <input type="text" className="form-item" id="iurl" onChange={(e)=>setItemData({...itemdata,imageurl:e.target.value})}/>
                            </td>
                    </tr>
                      <tr>
                             
                            <td> <input type="button" className="btn btn-success" value="Add Item" onClick={AddItemSubmit}/>
                            </td>
                    </tr></tbody>
                     </table>
                     }
                     <span className="text-danger">{errmsg.length>0 && <Link to="/login" >Login</Link>}</span>
                     </div>
                </form>            
            </div>
            </>
    );
}