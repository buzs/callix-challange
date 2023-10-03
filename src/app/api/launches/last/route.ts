import { getLastLaunch } from "@/server";

export async function GET(request: Request) {
  try {
    const data = await getLastLaunch();

    return Response.json(data);
  } catch (error) {
    return Response.json({
      ok: false,
      error: "Error",
    });
  }
}
