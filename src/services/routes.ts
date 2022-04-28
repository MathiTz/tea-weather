import { IWeather } from "./@types";
import api from "./api";

export const getCityByWoeId = async (woeId: number) => {
  const response = await api.get<IWeather>(`api/location/${woeId}/`);

  return response.data;
};
