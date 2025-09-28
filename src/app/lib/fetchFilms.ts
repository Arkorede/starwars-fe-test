"use server";
import axios from "axios";

export const fetchFilms = async (id?: string | number) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/films`;
  const url = id ? `${baseUrl}/${id}` : baseUrl;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
