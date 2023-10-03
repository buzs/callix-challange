import { getLaunchById } from "@/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    const data = await getLaunchById(id);

    return Response.json(data);
  } catch (error) {
    return Response.json({
      ok: false,
      error,
    });
  }
}
