import urlSchema from '../models/shorturl.model.js';
import { generate_nanoId } from "../utils/helper.js";

export const create_shortUrl = async (longUrl, userId) => {

    const shortCode = generate_nanoId(7);
    const newUrl = new urlSchema({
        full_url: longUrl,
        short_url: shortCode,
        user: userId || undefined,
    });

    await newUrl.save();
    return shortCode;
};
