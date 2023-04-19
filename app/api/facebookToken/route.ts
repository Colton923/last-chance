import { NextResponse } from 'next/server'

export async function GET() {
  if (!process.env.FACEBOOK_APP_SECRET)
    throw new Error('FACEBOOK_APP_SECRET is not defined.')
  try {
    const getFacebookToken = await fetch(
      `https://graph.facebook.com/oauth/access_token?client_id=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}&client_secret=${process.env.FACEBOOK_APP_SECRET}&grant_type=client_credentials`
    )
      .then((res) => res.json())
      .then((json) => {
        return json
      })
      .catch((err) => {
        console.log('err', err)
        return err
      })
    return NextResponse.json(getFacebookToken)
  } catch (err) {
    console.log('err', err)
    return NextResponse.json(err)
  }
}
