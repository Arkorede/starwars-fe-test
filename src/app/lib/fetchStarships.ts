"use server";
import axios from "axios";

export const fetchStarships = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/starships`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
