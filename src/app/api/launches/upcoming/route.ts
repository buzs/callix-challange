import { getUpcomingLaunches } from "@/server/SpaceX";

export async function GET() {
  const data = await getUpcomingLaunches();

  const sortData = data.sort((a, b) => {
    return b.date_unix - a.date_unix;
  });

  return Response.json(sortData);
}
