import Pocketbase from 'pocketbase'
const pb = new Pocketbase('https://premier.pockethost.io')


pb.autoCancellation(false) //BUG:

export const filecdn = (
  collection_id: string,
  record_id: string,
  filename: string
) =>
  `https://premier.pockethost.io/api/files/${collection_id}/${record_id}/${filename}`

export const adminauth =  () =>
   pb.admins.authWithPassword('premier@gmail.com', 'premierentp')

export default pb