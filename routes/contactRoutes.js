const express = require('express');
const validateToken = require('../middleware/validateTokenHandler');
const router = express.Router();
const {getContact, getContacts, createContact, modifyContact, deleteContact} = require('../controllers/contactController');

// if all the routes are private then we can use below synax.
router.use(validateToken);
router.route('/:id').get(getContact).put(modifyContact).delete(deleteContact)

router.route('/').get(getContacts).post(createContact)

module.exports = router;

