import type { Collection } from '@/components/products/types'
import { persistentAtom as atom } from '@nanostores/persistent'
import {  computed } from 'nanostores'

export const LS_COL = 'premier-cols'

export const $cols = atom<Collection[]>(LS_COL, [], {
  encode: JSON.stringify,
  decode: JSON.parse,
})

export const $col_ids = computed(
  $cols,
  (cols) => new Set(cols.map((col: Collection) => col.name))
)
