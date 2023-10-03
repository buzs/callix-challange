import { getNextLaunch } from "@/server";

export async function GET(request: Request) {
  try {
    const data = await getNextLaunch();

    return Response.json(data);
  } catch (error) {
    return Response.json({
      ok: false,
      error,
    });
  }
}
