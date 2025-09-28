"use server";
import axios from "axios";

export const fetchStarships = async (id?: string | number) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/starships`;
  const url = id ? `${baseUrl}/${id}` : baseUrl;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
