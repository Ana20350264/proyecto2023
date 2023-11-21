const {Router} = require('express'); 
const {listBook, 
        listBookByID, 
        addBook, 
        updateBook, 
        deleteBook, 
        singInBook 
        } = require('../controllers/books');
const { updateRow } = require('../models/books');

const router = Router();

// http://localhost:3000/api/v1/users/
router.get('/', listBook);
router.get('/:id', listBookByID);
router.post('/', singInBook);
router.put('/', addBook);
router.patch('/:id', updateBook); 
router.delete('/:id', deleteBook);
module.exports = router;