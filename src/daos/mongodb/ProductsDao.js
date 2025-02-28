import MongoDao from "./MongoDao.js";
import { Product } from "./models/Products.js";

export default class ProductsDaoMongo extends MongoDao {
    constructor() {
        super(Product);
    }

    async getAllTitles() {
        return await this.model.find().select("title").lean();
    }
}