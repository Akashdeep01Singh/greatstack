import 'dotenv/config';
import express from 'express';  
import cors from 'cors';
import connectDB from './configs/mongodb.js'



// App configurationconst app = express();
const PORT = process.env.PORT || 4000;
const app = express()
await connectDB()

// Middleware configuration
app.use(express.json());
app.use(cors());

// API ROUTES 
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
} );

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});