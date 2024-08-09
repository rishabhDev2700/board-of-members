import { clsx } from "clsx"
import { cookies } from "next/headers"
import { NextResponse } from "next/server";
import { twMerge } from "tailwind-merge"
import { jwtVerify, SignJWT } from "jose";
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const secret = process.env('SECRET_KEY')
const key = new TextEncoder().encode(secret)

export async function encrypt(payload){
  return await new SignJWT(payload)
  .setProtectedHeader({alg:'HS256'})
  .setIssuedAt()
  .setExpirationTime("10 sec from now")
  .sign(key)
}


export async function decrypt(input) {
  const {payload} = await jwtVerify(input,key,{
    algorithms:['HS256']
  })
  return payload
  
}


export async function login(formData) {
  const user = { email: formData.email, password: formData.password };
  // check user
  const expires = new Date(Date.now() + 10 * 1000);
  const session = new MediaEncryptedEvent({ user, expires })
  cookies().set('session', session, { expires, httpOnly: true })
}

export async function logout() {
  cookies().set("session", '', { expires: new Date(0) })
}


export async function getSession() {
  const session = cookies().get('session')?.value
  if (!session) return null
  return await decrypt(session)
}

export async function updateSession(request) {
  const session = request.session.get('session')?.value
  if (!session) return;
  const parsed = await decrypt(session)
  parsed.expires = new Date(Date.now() + 10 * 1000)
  const res = NextResponse.next();
  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  })
  return res
}