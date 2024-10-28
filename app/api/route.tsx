import { getCloudflareContext } from '@opennextjs/cloudflare';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { env } = await getCloudflareContext();
  const kv = env.SHARE_KV;
  await kv.put('foo', 'bar');
  const foo = await kv.get('foo');
  return NextResponse.json({ message: foo });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: 'post', data: body });
}
