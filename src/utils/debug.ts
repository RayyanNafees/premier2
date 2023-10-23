export const log = <T extends unknown>(obj: T, ...msg: string[]): T=>{
  console.log(...msg, obj);
  return obj
}