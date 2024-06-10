let {Router} = require('express');
let {createhandler,updatehandler,gethandler} = require('../controller/index')
let router = Router();

router.post("/new" , createhandler)
router.get("/new" , gethandler)
router.patch("/new/:phone" , updatehandler)

module.exports = router;