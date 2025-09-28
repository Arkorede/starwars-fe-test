"use server";
import axios from "axios";

export const fetchPeople = async (id?: string | number) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/people`;
  const url = id ? `${baseUrl}/${id}` : baseUrl;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
