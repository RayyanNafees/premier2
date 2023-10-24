export const capitalize_col = (colname: string) =>
  colname
    .split("_")
    .map((i) => i[0].toUpperCase() + i.slice(1).toLowerCase())
    .join(" ")
    .trim();
