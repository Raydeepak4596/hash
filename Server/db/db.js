import mongoose from "mongoose";

const db=async()=>{
   try {
     await  mongoose.connect(process.env.URL).then(()=>{console.log('data base successfully connected')})
   } catch (error) {
    console.log('database is not connected')
   }
   
}
export default db