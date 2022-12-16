import mongoose from "mongoose"

mongoose.connect("mongodb+srv://wesleynode:34217170@alura-node.ntrgllp.mongodb.net/alura-node")

let db = mongoose.connection;

export default db;