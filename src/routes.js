const LinguagemController = require('./controllers/LinguagemController.js');
// const LancamentosController = require('./controllers/LancamentosControllerPoliglota.js');
const AlunosController = require('./controllers/AlunosControllerPoliglota.js')
const AutorizacaoController = require('./controllers/AutorizacaoController.js');

module.exports = [
  {
    method: 'POST',
    path: '/api/v2/token',
    handler: AutorizacaoController.token,
    config: {
      auth: false
    }
  },
  {
    method: 'POST',
    path: '/api/v2/alunos',
    handler: AlunosController.createAluno
  },
  {
    method: 'GET',
    path: '/api/v2/alunos',
    handler: AlunosController.getAllAlunos
  },
  {
    method: 'GET',
    path: '/api/v2/alunos/{id}',
    handler: AlunosController.getAlunoById
  },
  {
    method: 'PUT',
    path: '/api/v2/alunos/{id}',
    handler: AlunosController.updateAlunoById
  },
  {
    method: 'DELETE',
    path: '/api/v2/alunos/{id}',
    handler: AlunosController.deleteAlunoById
  },
  {
    method: 'GET',
    path: '/api/v2/alunos/{id}/notas',
    handler: AlunosController.getNotasAlunoById
  },
  {
    method: 'POST',
    path: '/api/v2/alunos/{id}/notas',
    handler: AlunosController.createNotasAlunoById
  },
  {
    method: 'PUT',
    path: '/api/v2/alunos/{id}/notas/{notaId}',
    handler: AlunosController.atualizarNotasAlunoById
  },
];