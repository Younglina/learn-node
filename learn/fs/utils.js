import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'url'
export const getDirname = (path) => resolve(dirname(fileURLToPath(import.meta.url)), path)