const router=require('express').Router();
const Data=require('./model/Data');

const generateRandom=()=>{
  return  (Math.random() + 1).toString(36).substring(7);
}

router.post('/short',async(req,res)=>{

  const urlExist= await Data.findOne({longUrl:req.body.longUrl});
  if(urlExist){
   res.send("localhost:3000/"+urlExist.shortUrl);
    return;
  }

       const data=new Data({
        longUrl:req.body.longUrl,
        shortUrl:generateRandom()
       });

       try{
         const saveData=await data.save();
         res.send(data.shortUrl);
       }catch(err){
        res.status(400).send(err);
       }
});



router.get('/:shortUrl',async(req,res)=>{
    const url=req.params.shortUrl;
const short=await Data.findOne({shortUrl:url});
if(short){
    res.redirect(short.longUrl);
}
});

module.exports=router;