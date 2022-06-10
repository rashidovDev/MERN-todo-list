const {Router} = require('express');
const router = Router();

const {getAllStaff, getStaffById, addStaffBook,updateStaffBook,removePersonBook} = require("../controllers/personControllers")

//CRUD

router.get('/', getAllStaff)
router.post('/add', addStaffBook)
router.get('/:id', getStaffById)
router.put('/:id', updateStaffBook)
router.delete('/:id', removePersonBook)  

module.exports = router;
