import mongoose from 'mongoose'
import * as dotenv from 'dotenv';

dotenv.config();
const mongoUrl = process.env['MONGOURL'];

export async function connect(){
  mongoose.connect(mongoUrl).then(()=> console.log('db connection established')).catch(error => console.error(error))
}