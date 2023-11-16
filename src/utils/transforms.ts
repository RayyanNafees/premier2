export const capitalize_col = (colname: string) => // WOODEN_FRAMES => Wooden Frames
  colname
    .split('_')
    .map((i) => i[0].toUpperCase() + i.slice(1).toLowerCase())
    .join(' ')
    .trim()

export const colify = (capitalized_col: string) => // Wooden Frames => WOODEN_FRAMES
  capitalized_col
    .split(' ')
    .map((i) => i.toUpperCase())
    .join('_')
