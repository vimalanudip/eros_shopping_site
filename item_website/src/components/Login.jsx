import { useState } from "react";   
import axios from "axios";
   export default function Login()
   {
     const [email,setEmail]= useState('');
     const [pwd,setPwd]= useState('');
     const [msg,setMsg]= useState('');
     
     const login_submit = ()=>{
            axios.post("http://localhost:8081/loginsubmit",{email:email,pwd:pwd}).then(response=>{
                    if(response.data.token.length>0)
                    {
                        localStorage.setItem('logintoken',response.data.token);
                        setMsg("login successfull");
                    }
                    else
                    {
                        setMsg("try again");
                    }

            }).catch(error=>{});

     }
    return (
   <>        
   <div class="col-md-6 mx-auto">
    <div >{msg.length>0&& msg}</div>
                <form>
                    <div className="table">

                       <table className="table table-striped"> 
                        <tr>
                            <td>Email</td>
                            <td> <input type="text" className="form-item" id="Itemname"  onChange={(e)=>setEmail(e.target.value)} />                          
                            </td>
                        </tr>
                          <tr>
                            <td>Password</td>
                            <td> <input type="password" className="form-item" id="pwd"   onChange={(e)=>setPwd(e.target.value)}/>                    
                            </td>
                        </tr>
                        <tr>
                            <td ><input type="button" onClick={login_submit} value="login"/></td>
                        </tr>
                        </table>
                        </div>
                        </form>
                        </div>
 
</>);
}