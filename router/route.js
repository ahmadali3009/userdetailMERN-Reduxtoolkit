let {Router} = require('express');
let {createhandler,updatehandler,gethandler,deletehandler} = require('../controller/index')
let router = Router();

router.post("/new" , createhandler)
router.get("/new" , gethandler)
router.patch("/new/:phone" , updatehandler)
router.delete("/new/:phone", deletehandler)

module.exports = router;