
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 6001;
const app = express();
const mysql = require("mysql");
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: 4306,
  database: "fooddelivery",
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0,
});

app.get("/helloindia", (req, res) => {
  const pass = req.query.pass;
  if (pass == 1234) {
    res.status(200).json({ message: " Login Sucessfully!" });
  } else {
    res.status(201).json({ message: "Login unsucessfull!" });
  }
});

app.post("/v2/api/login", (req, res) => {
  const { email, password } = req.body;

  // Sql query
  const query = `SELECT * FROM users WHERE email = ? AND password = ?`;

  pool.query(query, [email, password], (err, result) => {
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else if (result.length > 0) {
      const user = result[0];
      res.status(200).json({ message: " Login Sucess", user: { id: user.id, email: user.email, name: user.name }, });
      
    } else {
      res.status(401).json({ message: "Please Check Your Email And Password" });
    }
  });
});

app.post("/v2/api/signup", (req, res) => {
  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  // Insert datas into tables
  const sql = `INSERT into users (fullname, email, password) VALUES(?, ?, ?)`;
  //check already email
  const emailcheck = `SELECT * FROM users WHERE email = ?`;

  pool.query(emailcheck, [email], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (result.length > 0) {
      return res.status(409).json({ message: "Email alread Exist try Login" });
    }

    pool.query(sql, [fullname, email, password], (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Server internal error" });
      }
      return res.status(200).json({ message: "Resistration sucessfully " });
    });
  });
});

app.post("/v2/api/order", (req, res) => {
  const { name, contact_no, email, ordered_items, address } = req.body;

  if (!name || !contact_no || !email || !ordered_items || !address) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = `
    INSERT INTO order_by_user (name, contact_no, email, ordered_items, address) 
    VALUES (?, ?, ?, ?, ?)
  `;

  pool.query(
    sql,
    [name, contact_no, email, ordered_items, address],
    (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }

      return res
        .status(201)
        .json({
          message: "Order placed successfully!",
          orderId: result.insertId,
        });
    }
  );
});

app.get("/v2/api/getorder", (req, res) => {
  const sql = "SELECT * FROM order_by_user "

  pool.query(sql, (err, result) => {
    if(err) {
      console.log("Database error:", err);
    }else{
      res.status(200).json({All_Order: "The below is Your order" , result})
    }
  })
})


app.post("/v2/api/onboarding/provider", (req, res) => {
  const {fullname , email , password , ownername , tifinservicename , serviceaddress } = req.body;



  console.log(fullname);
  
  if (!fullname ||!email ||!password ||!ownername ||!tifinservicename ||!serviceaddress) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = `
    INSERT INTO provider (provider_name, email, password, owner_name, tiffin_service_name, service_address) 
    VALUES (?,?,?,?,?,?);

  `;

  pool.query(
    sql,
    [fullname, email, password, ownername, tifinservicename, serviceaddress],
    (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }

      return res
       .status(200)
       .json({
          message: "Provider Onboarding successfully! We will Contact You soon...",
          providerId: result,
        });
    })
      
})


app.post('/api/providers/login', (req, res) => {
  const {email , password} = req.body;

  if(!email || !password) {
    return res.status(400).json({message: "All field are required!"});
  }


  const sql = `SELECT * FROM provider WHERE email = ? AND password = ?`

  pool.query(sql,[email , password], (err, result) => {
    if(err) {
     return res.status(500).json({message: "Internal Server Error", error: err.message});
    }

    if(result.length > 0) {

      return res.status(200).json({message: "Login successful" , data: result});
    }else{
      return res.status(201).json({message: "Check Your email and password" });

    }

  })

})





app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
