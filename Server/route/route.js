import mongoose from "mongoose";
import Express from 'express'
import bcrypt from 'bcrypt'
const router = Express.Router()
import hash_password from "../model/model.js";

// router.post('/add', async (req, res) => {
//     try {
//         const { title, description } = req.body
//         const data = new model({ title: title, description: description })
//         await data.save().then(() => {
//             console.log('data is cuccessfully inserted')
//         })


//     } catch (error) {
//         console.log('data in not inserted')
//     }
// })



// ============user=========




router.post('/user', async (req, res) => {
    try {
        const saltround = 10
        const { email, password } = req.body
        const a = await hash_password.findOne({ email })
        if (a) {
            console.log('user is already registerd')

        }
        else {
            bcrypt.hash(password, saltround, async (err, hash) => {
                const data = new hash_password({ email: email, password: hash })
                await data.save().then(() => {
                    console.log('new user is registered')
                })
            })
        }


    } catch (error) {

    }
})



// ============login==========
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        const a = await hash_password.findOne({ email })
        
        if (a) {
           
           bcrypt.compare(password, a.password,(err,ress)=>{
            if(ress){
                console.log('ghh')
            }
            else{
                console.log('nnnnn')
            }
           })
          


        }
        else {
            console.log('not')
        }

    } catch (error) {

    }




    // try {
    //     const { email, password } = req.body;
       
    //     const user = await user.findOne({ email });
    //     if (user) {
    //         const passwordMatch = await bcrypt.compare(password, user.password);
    //         if (passwordMatch) {
    //             console.log('correct');
                
    //         } else {
    //             console.log('Incorrect password');
                
    //         }
    //     } else {
    //         console.log('User not found');
           
    //     }
    // } catch (error) {
    //     console.error(error);
    //       }


});




// router.get('/getdata', async (req, res) => {
//     try {
//         const data = await model.find()
//         res.json(data)
//     } catch (error) {

//     }
// })



// router.get('/getdetailpage/:id', async (req, res) => {
//     try {
//         const id=req.params.id
//         console.log(id)
//         const data = await model.findById(id)
//         res.json(data)
//     } catch (error) {

//     }
// })




// router.delete('/deletedata/:id', async (req, res) => {
//     try {
//         const id = req.params.id

//         const d = await model.findByIdAndDelete(id)
//         res.json(d)
//     } catch (error) {

//     }
// })




// router.put('/updatedata/:id', async (req, res) => {
//     try {
//         const { title, description } = req.body
//         const id = req.params.id

//         const d = await model.findByIdAndUpdate(id, { title: title, description: description })
//         res.json(d)
//     } catch (error) {

//     }
// })







export default router
