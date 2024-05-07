import prisma from "@/lib/prisma";

interface Body {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: Body = await request.json();
  const user = await prisma.user.create({
    data: body,
  });

  return new Response(JSON.stringify(user));
}
