import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log('Received request body:', body);
        const path = body.path;

        if (!path) {
            return NextResponse.json({ error: 'Path field is required' }, { status: 400 });
        }

        // Call revalidateTag with the path value
        revalidateTag(path);

        return NextResponse.json({ message: `Revalidation triggered for path: ${path}` });
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}