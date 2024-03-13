const express = require('express');
const app = express();

app.set('view engine', 'ejs'); 
// Serve static files from the 'public' directory
app.use(express.static('./public'));

//  app.get("/" , (req , res ) =>{
//     res.send("helo welocme to prfolie "
//  });


        // -----now use      :  res.render for file to acess karne kr liea ---
      app.get("/" , (req , res )=>{
        res.render("index")
      })

      app.get("/about" , (req , res ) =>{
        res.render("about")
      })
         
      app.get("/error" , (req , res ) =>{
        res.render("error")
      } );
app.listen(3000 , ()=>{
  console.log("server is stated ");
});
