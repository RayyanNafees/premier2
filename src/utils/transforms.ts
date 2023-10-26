export const capitalize_col = (colname: string) =>
  colname
    .split('_')
    .map((i) => i[0].toUpperCase() + i.slice(1).toLowerCase())
    .join(' ')
    .trim()

export const colify = (capitalized_col: string) =>
  capitalized_col
    .split(' ')
    .map((i) => i.toUpperCase())
    .join('_')
