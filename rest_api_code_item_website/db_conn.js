import mysql2 from 'mysql2';

const db_conn = mysql2.createConnection({
   user:"root",
   password:"root",
   host:"localhost",
   database:"afd6232"
});
db_conn.connect(function(err){
	 if(err)
		  console.log(err)
	 else 
          console.log("database connected");
});
export default db_conn;		  