const router=require('express').Router();
const Data=require('./model/Data');

const generateRandom=async()=>{
// const random=(Math.random() + 1).toString(36).substring(7);
// const check=await Data.findOne({shortUrl:random});
// if(check){generateRandom();}
// return random;
return random=(Math.random() + 1).toString(36).substring(7);
}

const checkCustom=async(custom)=>{
     const customCheck=await Data.findOne({shortUrl:custom});
     if(customCheck)  return true;
     else return false;
}

router.post('/short',async(req,res)=>{

  const urlExist= await Data.findOne({longUrl:req.body.longUrl});
  if(urlExist){
   res.send("https://shrt-jivs.onrender.com"+urlExist.shortUrl);
    return;
  }

       const data=new Data({
        longUrl:req.body.longUrl,
        shortUrl:await generateRandom()
       });

       try{
         const saveData=await data.save();
         res.send("https://shrt-jivs.onrender.com"+data.shortUrl);
       }catch(err){
        res.status(400).send(err);
       }
});

router.post('/custom',async(req,res)=>{
    console.log(req.body.shortUrl);
  const custom=await checkCustom(req.body.shortUrl);
  if(custom){
    res.send("ShortUrl Already Exists ,Please try someother");
    return;
  }
  else{
    const data=new Data({
        longUrl:req.body.longUrl,
        shortUrl:req.body.shortUrl
       });
       
       try{
         const saveData=await data.save();
         res.send("https://shrt-jivs.onrender.com"+data.shortUrl);
       }catch(err){
        res.status(400).send(err);
       }
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