import Services from "./classServices.js";
import { prodDao } from "../daos/persistence.js";
import productsRepository from "../repositories/ProductsRepository.js";

const prodRepository = new productsRepository();

export default class ProductServices extends Services {
    constructor() {
        super(prodDao);
    }

    /**
     * Valida si los campos pasados son los correctos para el modelo
     * @param {Object} body - Objeto body de HTTP Request
     * @returns {Object} - Objeto de campos
     */
    validateChanges(body) {
        const allowedFields = ["title", "description", "code", "price", "status", "stock", "category", "thumbnails"];
        const validFields = {};

        allowedFields.forEach(field => {
            if (body[field] !== undefined) {
                validFields[field] = body[field];
            }
        });

        return validFields;
    }

    /**
     * Devuelve todos los titulos de los productos
     * @returns {Array} - Arreglo con los titulos de los productos
     */
    async getTitles() {
        return await prodDao.getAllTitles();
    }

}
