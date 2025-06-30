import { create_shortUrl } from "../services/url_shortener_service.js";
import urlSchema from '../models/shorturl.model.js';
export const generate_shortUrl=async (req,res)=>{
    const {longUrl}=req.body;
    let shortUrl=await create_shortUrl(longUrl);
    shortUrl = `http://localhost:3000/${shortUrl}`;
    res.send(shortUrl);
}

export const redirectshort_url= async (req,res)=>{
    const {id}=req.params;
    const url=await urlSchema.findOneAndUpdate({short_url:id},{$inc:{clicks:1}});
    if(url){
        return res.redirect(encodeURI(url.full_url));

    }else{
        return res.status(404).send("Not Found");
    }
}