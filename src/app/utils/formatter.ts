export const extractFilmId = (url: string): string => {
  const match = url.match(/\/films\/(\d+)\//);
  return match ? match[1] : "";
};
