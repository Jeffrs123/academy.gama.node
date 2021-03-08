const { Binary } = require('mongodb');
const MongoDbRepository = require('./MongoDbRepository.js');

class AlunosRepository extends MongoDbRepository {

    constructor(db) {
        super(db, 'alunos')
    }

    async list(query = {}) {
        const val = await this.resolverQuery(query);
        return super.list(val);
    }

    async resolverQuery(query) {
        if (query.nome !== null && query.nome !== void 0) {
            const stg2 = new RegExp(query.nome);
            query = { nome: stg2 };
        } else {
            query = {}
        }
        return query;
    }
}

module.exports = AlunosRepository;