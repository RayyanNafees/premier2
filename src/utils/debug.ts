import fs from 'node:fs/promises'

export const log = <T extends unknown>(obj: T, ...msg: string[]): T => {
  console.log(...msg, obj)
  return obj
}

export const error = (e: Error) => fs.writeFile('logs.txt', JSON.stringify(e))
