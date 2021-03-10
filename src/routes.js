const LinguagemController = require('./controllers/LinguagemController.js');
const LancamentosController = require('./controllers/LancamentosControllerPoliglota.js');
const AlunosController = require('./controllers/AlunosControllerPoliglota.js')
const AutorizacaoController = require('./controllers/AutorizacaoController.js');

module.exports = [
  {
    method: 'POST',
    path: '/token',
    handler: AutorizacaoController.token,
    config: {
      auth: false
    }
  },
  {
    method: 'POST',
    path: '/alunos',
    handler: AlunosController.createAluno
  },
  {
    method: 'GET',
    path: '/alunos',
    handler: AlunosController.getAllAlunos
  },
  {
    method: 'GET',
    path: '/alunos/{id}',
    handler: AlunosController.getAlunoById
  },
  {
    method: 'PUT',
    path: '/alunos/{id}',
    handler: AlunosController.updateAlunoById
  },
  {
    method: 'DELETE',
    path: '/alunos/{id}',
    handler: AlunosController.deleteAlunoById
  },
  {
    method: 'GET',
    path: '/alunos/{id}/notas',
    handler: AlunosController.getNotasAlunoById
  },
  {
    method: 'POST',
    path: '/alunos/{id}/notas',
    handler: AlunosController.createNotasAlunoById
  },
  {
    method: 'PUT',
    path: '/alunos/{id}/notas/{notaId}',
    handler: AlunosController.atualizarNotasAlunoById
  },
];