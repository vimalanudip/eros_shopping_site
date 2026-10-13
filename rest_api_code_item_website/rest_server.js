import express from 'express';
const app = express();
import cors from 'cors';
const PORT =8081;
import jwt from 'jsonwebtoken';
const JWT_SECRET_KEY = "AFD6232-10-9*&^%";
import { createHash } from 'node:crypto';
import db_conn from './db_conn.js';

let token_check = (req,res,next)=>{
	const login_token = req.headers['x-access-token'];
	//console.log(login_token);
	/* verifying the jwt token  */
	jwt.verify(login_token,JWT_SECRET_KEY,function(err,decoded){
		if(err)
			 res.send({"err":"error in database operation",result:''});
		 else
		 {
			 console.log(decoded); // we get user id, iat and exp 
			 // we will check exp with current time if it is less then token is valid else token is expired.
			 const time_sec = Date.now()/1000;
			 console.log(time_sec);
			 console.log(time_sec > decoded.exp);
			 if(time_sec>decoded.exp)
			 {
				 return res.send({'err':"token expired login again",result:''});
			 }			 
		 }		
	});//jwt.verify method ends here  	
  next();	
};

app.use(express.json({limit:"20mb"}));
app.use(cors({origin:'http://localhost:5173'}))
/* cors is use to allow origin to access rest api  */
app.get("/",(req,res)=>{
	res.json({msg:"this is home page which is called from postman"});
});
app.get("/mul2no",(req,res)=>{
	console.log("rest api server called at 8081 time :"+Date.now());
	res.send({'result':req.query['no1']*req.query['no2']});
});
app.post("/max2no",(req,res)=>{	
	const n1 = req.body.n1;
	const n2 = req.body.n2;
	let result=0;
	if (n1>n2)
		result=n1;
	else 
		result=n2
	res.send({'max':result});
});
app.get("/emplist",(req,res)=>{
	db_conn.query("select * from emp",(err,result)=>{
		if(err)
		{
			console.log(err);
		res.send({"err":"error in database operation"});
		}
		else
			res.send({"result":result});
	});
});
app.get("/catlist",token_check,(req,res)=>{
	db_conn.query("select * from category",(err,result)=>{
		if(err)
		{
			console.log(err);
		res.send({"err":"error in database operation",result:''});
		}
		else
		{			 
			res.send({"result":result,'err':''});
		}
	});
	
});
app.post("/additemsubmit",token_check,(req,res)=>{
	const {iname,cp,sp,dom,doe,discount,imageurl,catid} = req.body;
	var doe2=null;
	  if(doe!='')
		   doe2=doe;
	
	 db_conn.query("insert into item (iname,costprice,sellprice,discount,dom,doe,imageurl,catid) values(?,?,?,?,?,?,?,?)",[iname,cp,sp,discount,dom,doe2,imageurl,catid],function(err,result){
			if(err)
			{
				console.log(err);
			return	res.send({result:0,err:"error saving item"});
			}
			else 
				return res.send({result:1,err:''});
	 });
});
app.get("/listitems",function(req,res){
	db_conn.query("select id,iname,costprice,sellprice,discount,dom,doe,category.catid cat_id,catname from item inner join category on category.catid=item.catid;", function (err,result){
			if(err)
			{
				console.log(err);
				return res.send({'err':'error in database operation','result':''});				
			}
			else if(result.length==0)
					return res.send({'msg':'no item found','result':''});				
				 else 
					  return res.send({'result':result});	
	}); // end of db_conn.query method
});
app.post("/loginsubmit",(req,res)=>{
	const {email,pwd} = req.body;
	const md5Hash_pwd = createHash('md5').update(pwd).digest('hex');
	db_conn.query("select * from user where email=? and password=?",[email,md5Hash_pwd],function(err,result){
			if(err)
			{
				console.log(err);
				return res.send({'err':'error in database operation','token':''});				
			}
			else if(result.length==0)
					return res.send({'msg':'no record matched','token':''});				
				 else if(result.length==1)
				 { // we will write down the code to generate the jwt token
				 
				
				 const token =jwt.sign({userid:result[0].id},JWT_SECRET_KEY,{'expiresIn':"5000"}); 
					  
					  return res.send({'token':token,'msg':"tokencreated"});	
				 }
					 
		
	});
	
});
app.listen(PORT,()=>console.log("rest api server runnning at port no "+PORT));