export function extractId(url: string): string | null {
  const match = url.match(/\/(\d+)\/?$/);
  return match ? match[1] : null;
}

export type DateFormat = "long" | "short";

export const formatDate = (
  dateString: string,
  format: DateFormat = "long",
): string => {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    console.warn(`Invalid date string: ${dateString}`);
    return dateString;
  }

  if (format === "long") {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } else if (format === "short") {
    return date.toLocaleDateString("en-US", {
      year: "2-digit",
      month: "numeric",
      day: "numeric",
    });
  }

  return dateString;
};
