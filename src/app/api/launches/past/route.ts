import { getPastLaunches } from "@/server";

export async function GET(request: Request) {
  try {
    const data = await getPastLaunches();

    const sortData = data.sort((a, b) => {
      return b.date_unix - a.date_unix;
    });

    return Response.json(sortData);
  } catch (error) {
    return Response.json({
      ok: false,
      error: "Error",
    });
  }
}
