const { ObjectId } = require('mongodb');

class MongoDbRepository {
  constructor(db, collection) {
    this.db = db;
    this.collection = db.collection(collection);
  }

  async list(query = {}) {
    return this.collection.find(query).toArray();
  }

  async listSubPath(id, subPath, forengKey) {
    const _id = ObjectId.createFromHexString(id);
    const subItems = await this.db.collection(subPath).find({[forengKey]: _id}).toArray();
    return subItems;
  }

  async get(query = {}, options = {}) {
    return this.collection.findOne(query, options);
  }

  async getById(id) {
    const _id = ObjectId.createFromHexString(id);
    return this.get({ _id });
  }

  async insert(doc) {
    const { ops } = await this.collection.insertOne(doc);
    return ops[0];
  }

  async insertInSubPath(id, subPath, doc, forengKey) {
    const _id = ObjectId.createFromHexString(id);
    const { ops } = await this.db.collection(subPath).insertOne({ ...doc, [forengKey]: _id});
    return ops[0];
  }

  async update(id, obj) {
    const _id = ObjectId.createFromHexString(id);
    const { modifiedCount } = await this.collection.updateOne({ _id }, {
      $set: obj
    });
    console.log("modifiedCount", modifiedCount)
    return modifiedCount;
  }

  async delete(id) {
    const _id = ObjectId.createFromHexString(id);
    const resultado = await this.collection.deleteOne({ _id });
    return resultado.result;
  }
}

module.exports = MongoDbRepository;