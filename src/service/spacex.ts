import { headers } from "next/headers";
import { Launch, Launches } from "@/server/SpaceX/types";

async function fetchRequest<T>(path: string) {
  try {
    const host = headers().get("host");
    const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
    const response = await fetch(
      process.env.INTERNAL_API_URL || `${protocol}://${host}/api/` + path,
      { next: { revalidate: 3600 } }
    );

    //   const rPath = await import(`../app/api/${path}/route`);
    //   const response = await rPath.GET();

    if (!response.ok) {
      console.warn(
        process.env.INTERNAL_API_URL || `${protocol}://${host}/api/` + path
      );
      throw new Error("Failed to fetch data", await response.json());
    }

    return response.json() as Promise<T>;
  } catch (error) {
    console.error(path, error);
  }
}

export const getUpcomingLaunches = async () => {
  const data = await fetchRequest<Launches>(`launches/upcoming`);

  return data;
};

export const getPastLaunches = async () => {
  const data = await fetchRequest<Launches>(`launches/past`);

  return data;
};

export const getNextLaunch = async () => {
  const data = await fetchRequest<Launch>(`launches/next`);

  return data;
};

export const getLastLaunch = async () => {
  const data = await fetchRequest<Launch>("launches/last");

  return data;
};

export const getLaunchById = async (id: string) => {
  const data = await fetchRequest<Launch>(`launches/${id}`);

  return data;
};
