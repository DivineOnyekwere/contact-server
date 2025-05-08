import express from 'express';
const routes = express.Router();

const contacts = [
    {
        id: '2',
        name: 'Mr Divine',
        number: '09065910552',
        actions: 'Delete'
    }
]

routes.get('/', (req, res)=>{
    res.json(contacts)
    console.log('Contacts API Accessed')
})

routes.post('/', (req, res)=>{
    const newContact = req.body;
    if(newContact.name !== '' || newContact.number !== '' || newContact !== undefined){
        contacts.push(newContact)
        res.json(newContact)
        console.log(`${newContact.name} has been added`)
    }
})

routes.delete('/:id', (req, res)=>{
    const contactId = req.params.id
    const index = contacts.findIndex(contact =>{
        contact.id === contactId
    })
    contacts.splice(index, 1)
    res.json(contacts)
})

export default routes