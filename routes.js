const router=require('express').Router();
const controller=require('./controller');

router.post('/short',controller.shortUrl);

router.post('/custom',controller.customUrl);

router.get('/:shortUrl',controller.redirectUrl);

router.get("/",controller.getAllShortUrl);

module.exports=router;