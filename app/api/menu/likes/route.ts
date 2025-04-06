import { likes } from 'actions/firestore'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title')

  if (!title) {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 })
  }

  try {
    const likesMap = await likes()
    if (!likesMap) {
      return NextResponse.json({ likes: 0 })
    }

    // likesMap is a Map, so we use get() to retrieve values
    return NextResponse.json({ likes: likesMap.get(title) || 0 })
  } catch (error) {
    console.error('Error fetching likes:', error)
    return NextResponse.json({ error: 'Failed to fetch likes' }, { status: 500 })
  }
}
