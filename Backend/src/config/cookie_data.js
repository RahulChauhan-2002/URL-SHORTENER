export const cookiesOption={
    httpOnly:true,
    secure:process.env.NODE_ENV==="production",
    sameSite:"lax",
    maxAge:1000*60*1
}