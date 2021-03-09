const H2Repository = require('./H2Repository.js');

class AlunosRepository extends H2Repository {
    constructor(apiUrl) {
        super(apiUrl, '/alunos')
    }

    async getNotasAlunoById(id) {
        return await super.listSubPath(id, "notas");
    }

    async createNotasAlunoById(id, obj) {
        return await super.insertInSubPath(id, "notas", obj)
    }

    async atualizarNotasAlunoById(id, notaId) {
        return await super.updateSubPath(id, "notas", notaId, obj)
    }
}

module.exports = AlunosRepository;