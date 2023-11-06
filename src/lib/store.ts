import type { Collection } from '@/components/products/types'
import { atom, computed } from 'nanostores'

export const $cols = atom<Collection[]>([])

export const $col_ids = computed(
  $cols,
  (cols) => new Set(cols.map((col: Collection) => col.name))
)
