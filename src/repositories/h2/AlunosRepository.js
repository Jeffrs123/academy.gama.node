const H2Repository = require('./H2Repository.js');

class AlunosRepository extends H2Repository {
    constructor(apiUrl) {
        super(apiUrl, '/alunos')
    }

    async getNotasAlunoById(id) {
        return super.listSubPath(id, "notas");
    }

    async createNotasAlunoById(id, obj) {
        console.log("cheguei no create do alunso repository");
        return super.insertInSubPath(id, "notas", obj)
    }

    async atualizarNotasAlunoById(id, notaId, obj) {
        return super.updateSubPath(id, "notas", notaId, obj)
    }
}

module.exports = AlunosRepository;