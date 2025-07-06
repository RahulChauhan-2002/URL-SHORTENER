import { generate_nanoId } from "../utils/helper.js";
import urlSchema from '../models/shorturl.model.js';

export const create_shortUrl = async (url) => {
    const shortUrl = generate_nanoId(7);

    const newUrl = new urlSchema({
        full_url: url,
        short_url: shortUrl,
    });

    await newUrl.save();
    return shortUrl; 
};
