const users = require("./model");
const savedata= async (req, res) => {
    try {
      const dayData = req.body;

      for (const element of dayData) {
        const existingUser = await users.findOne({ id: element.id });
  
        if (existingUser) {
          await users.findOneAndUpdate({ id: element.id }, element);
        } else {
          await users.create(element);
        }
      }
  
      res.status(200).send("Data saved successfully");
    } catch (error) {
      console.error("Error saving data to MongoDB:", error);
      res.status(500).send("Error saving data");
    }
  };
  
const getdata=async(req,res)=>{
    try {
      const Users = await users.find();
      console.log(Users)
      res.status(200).json(Users);
    } catch (error) {
      console.error(" retrieving Error:", error);
      res.status(500).send("Error retrieving data");
    }
  }
   
  module.exports={getdata,savedata};
