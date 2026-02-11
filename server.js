const express= require('express');
const app= express();
const port=3000;

app.use(express.json());
app.get('/about',(req,res)=>{
    res.json({
        message:"Welcome to the about page!"
    })
    });


app.post('/contact',(req,res)=>{
    const {name,email,message}=req.body;
    res.json({
        message:`Thank you, ${name}! We have received your message: "${message}". We will contact you at ${email} soon.`
    });
}
);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
