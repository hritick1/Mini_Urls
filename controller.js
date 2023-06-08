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



   const shortUrl=async(req,res)=>{

    const urlExist= await Data.findOne({longUrl:req.body.longUrl});
    if(urlExist){
     res.send("https://shrt-jivs.onrender.com/"+urlExist.shortUrl);
      return;
    }
  
         const data=new Data({
          longUrl:req.body.longUrl,
          shortUrl:await generateRandom(),
          visits:0
         });
  
         try{
           const saveData=await data.save();
           res.send("https://shrt-jivs.onrender.com/"+data.shortUrl);
         }catch(err){
          res.status(400).send(err);
         }
  };



const customUrl=async(req,res)=>{
    console.log(req.body.shortUrl);
  const custom=await checkCustom(req.body.shortUrl);
  if(custom){
    res.send("ShortUrl Already Exists ,Please try someother");
    return;
  }
  else{
    const data=new Data({
        longUrl:req.body.longUrl,
        shortUrl:req.body.shortUrl,
        visits:0
        
       });
       
       try{
         const saveData=await data.save();
         res.send("https://shrt-jivs.onrender.com/"+data.shortUrl);
       }catch(err){
        res.status(400).send(err);
       }
  }

};


const redirectUrl=async(req,res)=>{
    const url=req.params.shortUrl;
const short=await Data.findOne({shortUrl:url});
console.log(short);
await Data.findByIdAndUpdate(short._id,{visits:short.visits+1});
if(short){
    res.redirect(short.longUrl);
}
};

const getAllShortUrl=async(req,res)=>{
  const urls=await Data.find({});
  res.send(urls);
}



module.exports={shortUrl,customUrl,redirectUrl,getAllShortUrl};

