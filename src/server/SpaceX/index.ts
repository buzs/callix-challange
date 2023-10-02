import { spacexApi } from "./api";
import { Launch } from "./types";

const parseData = (data: Launch) => {

};

const getData = async <T>(path: string) => {
  const { data, status } = await spacexApi.get<T>(`launches/${path}`);

  if (status !== 200) {
    throw new Error("Error fetching data in SpaceX API");
  }

  return data;
}

export const getUpcomingLaunches = async () => {
  const data = await getData<Launch[]>("upcoming");

  return data;
};

export const getPastLaunches = async () => {
  const data = await getData<Launch[]>("past");

  return data;
};

export const getNextLaunch = async () => {
  const data = await getData<Launch>("next");;

  return data;
};

export const getLastLaunch = async () => {
  const data = await getData<Launch>("latest");

  return data;
};

export const getLaunchById = async (id: string) => {
  const data = await getData<Launch>(id);

  return data;
};
