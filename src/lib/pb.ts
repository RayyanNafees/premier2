import Pocketbase from 'pocketbase'
const { PB_HOST, PB_EMAIL, PB_PASS } = import.meta.env
const pb = new Pocketbase(PB_HOST)
console.log({ PB_HOST, PB_EMAIL, PB_PASS })
pb.autoCancellation(false) //BUG:

export const filecdn = (
  collection_id: string,
  record_id: string,
  filename: string
) => `${PB_HOST}/api/files/${collection_id}/${record_id}/${filename}`

export const adminauth = () => pb.admins.authWithPassword(PB_EMAIL, PB_PASS)

export default pb
