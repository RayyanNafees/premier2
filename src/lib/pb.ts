import Pocketbase from 'pocketbase'
import { capitalize_col } from '../utils/transforms'
const { PB_HOST, PB_EMAIL, PB_PASS } = import.meta.env

const pb = new Pocketbase(PB_HOST)
pb.autoCancellation(false) //BUG:

export const filecdn = (
  collection_id: string,
  record_id: string,
  filename: string
) => `${PB_HOST}/api/files/${collection_id}/${record_id}/${filename}`

export const adminauth = () =>
  pb.admins
    .authWithPassword(PB_EMAIL, PB_PASS)
    .catch((e) => console.log("Can't login as Admin:", e))

export const colNames = (capitalize = true) =>
  pb.collections
    .getFullList({
      sort: '-created',
    })
    .then((colarr) =>
      colarr.map((col) => (capitalize ? capitalize_col(col.name) : col.name))
    )
    .catch((e) => {
      console.log("Couldn't load Collection Names due to", e)
      return []
    })
export default pb
