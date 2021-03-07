const H2Repository = require('./H2Repository.js');

class AlunosRepository extends H2Repository {
    constructor(apiUrl) {
        super(apiUrl, '/alunos')
    }
}

module.exports = AlunosRepository;