const express = require("express");
const router = express.Router();
const cors = require("cors");
const connectDb = require("./Connection/dbconnection");

const app = express();

connectDb
app.use(cors());
const PORT =5001;
app.get('/', (req, res) => {
    // Access a specific collection
    console.log("this is first database");  
    // Perform database operations
   
  });
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});