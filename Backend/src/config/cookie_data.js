export const cookiesOption={
    httpOnly:true,
    secure:process.env.NODE_ENV==="production",
    sameSite:"none",
    maxAge:1000*60*5
}