import { item } from 'actions/sanity'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 })
  }

  try {
    const menuItem = await item(id)
    if (!menuItem) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 })
    }
    return NextResponse.json(menuItem)
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching menu item:', error)
    }
    return NextResponse.json({ error: 'Failed to fetch menu item' }, { status: 500 })
  }
}
