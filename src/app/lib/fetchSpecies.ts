"use server";
import axios from "axios";

export const fetchSpecies = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/species`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
