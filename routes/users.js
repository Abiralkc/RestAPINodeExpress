import express from 'express';

const router = express.Router();

const users =[
    {
        firstname:"John",
        lastName:"Doe",
        age:25
    },
    {
        firstname:"Jane",
        lastName:"Doe",
        age:24

    }
]



//all routes in here are starting with /users
router.get('/',(req,res)=>{
    res.send(users);
});

router.post('/',(req,res) =>{
    const user = req.body;

    users.push(user);

    res.send(`USER with the name ${user.firstName} added to the database`);
})

export default router;