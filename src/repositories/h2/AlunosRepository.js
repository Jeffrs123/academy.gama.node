const H2Repository = require('./H2Repository.js');

class AlunosRepository extends H2Repository {
    constructor(apiUrl) {
        super(apiUrl, '/alunos')
    }

    async getNotasAlunoById(id) {
        return await super.listSubPath(id, "notas");
    }
}

module.exports = AlunosRepository;