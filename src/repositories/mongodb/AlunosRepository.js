const { Binary } = require('mongodb');
const MongoDbRepository = require('./MongoDbRepository.js');

class AlunosRepository extends MongoDbRepository {

    constructor(db) {
        super(db, 'alunos')
    }

    async list(query = {}) {
        console.log("chamado pelo node MONGO DB")
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

    async getNotasAlunoById(id) {
        return super.listSubPath(id, "notas", "alunoId");
    }

    async createNotasAlunoById(id, obj) {
        const media_conceito = await this.calcularMedia(obj);
        const status_aprovacao = await this.calcularStatusAprovacao(media_conceito);
        const fullDoc = { ...obj, media_conceito, status_aprovacao};
        return super.insertInSubPath(id, "notas", fullDoc, "alunoId");
    }

    async atualizarNotasAlunoById(id, notaId, obj) {
        const media_conceito = await this.calcularMedia(obj);
        const status_aprovacao = await this.calcularStatusAprovacao(media_conceito);
        const fullDoc = { ...obj, media_conceito, status_aprovacao};
        return super.updateSubPath(id, "notas", notaId, fullDoc)
    }

    async calcularStatusAprovacao(status_aprovacao) {
        return status_aprovacao > 7 ? 'APROVADO': status_aprovacao < 4 ? 'REPROVADO' : 'RECUPERACAO';
    }

    async calcularMedia(doc) {
        
        var nota = 0;

        if (doc['nota_um'] != null && doc['nota_um'] != void 0) {
            nota += doc['nota_um'];
        } 
        if (doc['nota_dois'] != null && doc['nota_dois'] != void 0) {
            nota += doc['nota_dois'];
        } 
        if (doc['nota_apresentacao'] != null && doc['nota_apresentacao'] != void 0) {
            nota += doc['nota_apresentacao'];
        } 
        if (doc['nota_trabalho'] != null && doc['nota_trabalho'] != void 0) {
            nota += doc['nota_trabalho'];
        }

        return nota / 4;
    }
}

module.exports = AlunosRepository;