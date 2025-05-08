console.log('server initialize')
import express from 'express';
import phonebookRoutes from './routes/phonebook.js'
import morgan from 'morgan';
import bodyParser from 'body-parser'
const app = express();
const port = 3000;

app.use(morgan())
app.use(bodyParser.json())
app.use('/api/contacts', phonebookRoutes)

app.listen(port, ()=>{
    console.log(`server connected at http://localhost:${port}`)
})