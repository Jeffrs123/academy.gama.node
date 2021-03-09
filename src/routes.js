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
    handler: AlunosController.createAluno,
    config: {
      auth: false
    }
  },
  {
    method: 'GET',
    path: '/alunos',
    handler: AlunosController.getAllAlunos,
    config: {
      auth: false
    }
  },
  {
    method: 'GET',
    path: '/alunos/{id}',
    handler: AlunosController.getAlunoById,
    config: {
      auth: false
    }
  },
  {
    method: 'PUT',
    path: '/alunos/{id}',
    handler: AlunosController.updateAlunoById,
    config: {
      auth: false
    }
  },
  {
    method: 'DELETE',
    path: '/alunos/{id}',
    handler: AlunosController.deleteAlunoById,
    config: {
      auth: false
    }
  },
  {
    method: 'GET',
    path: '/alunos/{id}/notas',
    handler: AlunosController.getNotasAlunoById,
    config: {
      auth: false
    }
  },
  {
    method: 'POST',
    path: '/alunos/{id}/notas',
    handler: AlunosController.createNotasAlunoById,
    config: {
      auth: false
    }
  },
  {
    method: 'PUT',
    path: '/alunos/{id}/notas/{notaId}',
    handler: AlunosController.atualizarNotasAlunoById,
    config: {
      auth: false
    }
  },
];
  /*{
    method: 'GET',
    path: '/lancamentos',
    handler: LancamentosController.listarLancamentos
  },
  {
    method: 'GET',
    path: '/lancamentos/{id}',
    handler: LancamentosController.obterLancamento
  },
  {
    method: 'POST',
    path: '/lancamentos',
    handler: LancamentosController.inserirLancamento
  },
  {
    method: 'PATCH',
    path: '/lancamentos/{id}',
    handler: LancamentosController.atualizarLancamento
  },
  {
    method: 'DELETE',
    path: '/lancamentos/{id}',
    handler: LancamentosController.apagarLancamento
  },
  {
    method: 'GET',
    path: '/lancamentos/saldo',
    handler: LancamentosController.obterSaldo
  },,
  // {
  //   method: 'GET',
  //   path: '/lancamentos/receitas',
  //   handler: LancamentosController.listarReceitas
  // },
  // {
  //   method: 'GET',
  //   path: '/lancamentos/despesas',
  //   handler: LancamentosController.listarDespesas
  // },
  {
    method: 'GET',
    path: '/lancamentos/por-categoria',
    handler: LancamentosController.agruparPorCategoria
  },
  ,
  {
    method: 'GET',
    path: '/lancamentos',
    handler: LancamentosController.listarLancamentos,
    config: {
      auth: false
    }
  }
  */
  