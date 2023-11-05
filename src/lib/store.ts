import type { Collection } from '@/components/products/types'
import {atom} from 'nanostores'

export const $cols = atom<Collection[]>([])
