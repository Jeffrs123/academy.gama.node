function obterConfig(req) {
    return req.headers['x-persistence'] === 'rest'
    //? 'http://localhost:3030'
    ? 'http://localhost:8080/api/v1'
    : req.server.plugins['hapi-mongodb'].db;
}

exports.listarAlunos = async (req, h) => {
    console.log('POLIGLOT ALUNOS req: ' + req.headers['x-persistence'])
    const persistencia = req.headers['x-persistence'];
    const LancamentosRepository = require(`../repositories/${persistencia}/AlunosRepository.js`);
    const repositorio = new LancamentosRepository(obterConfig(req));
    return repositorio.list();
}



/*
  
  exports.listarLancamentos = async (req, h) => {
    console.log('POLIGLOTa req: ' + req)
    const persistencia = req.headers['x-persistence'];
    const LancamentosRepository = require(`../repositories/${persistencia}/LancamentosRepository.js`);
    const repositorio = new LancamentosRepository(obterConfig(req));
    return repositorio.list();
  }
  
  exports.obterLancamento = async (req, h) => {
    const persistencia = req.headers['x-persistence'];
    const LancamentosRepository = require(`../repositories/${persistencia}/LancamentosRepository.js`);
    const repositorio = new LancamentosRepository(obterConfig(req));
    const lancamento = await repositorio.getById(req.params.id);
    return lancamento;
  }
  
  exports.inserirLancamento = async (req, h) => {
    const persistencia = req.headers['x-persistence'];
    const LancamentosRepository = require(`../repositories/${persistencia}/LancamentosRepository.js`);
    const repositorio = new LancamentosRepository(obterConfig(req));
    return repositorio.insert(req.payload);
  }
  
  exports.atualizarLancamento = async (req, h) => {
    const persistencia = req.headers['x-persistence'];
    const LancamentosRepository = require(`../repositories/${persistencia}/LancamentosRepository.js`);
    const repositorio = new LancamentosRepository(obterConfig(req));
    return repositorio.update(req.params.id, req.payload);
  }
  
  exports.apagarLancamento = async (req, h) => {
    const persistencia = req.headers['x-persistence'];
    const LancamentosRepository = require(`../repositories/${persistencia}/LancamentosRepository.js`);
    const repositorio = new LancamentosRepository(obterConfig(req));
    return repositorio.delete(req.params.id);
  }
  
  exports.obterSaldo = async (req, h) => {
    const persistencia = req.headers['x-persistence'];
    const LancamentosRepository = require(`../repositories/${persistencia}/LancamentosRepository.js`);
    const repositorio = new LancamentosRepository(obterConfig(req));
  
    const saldo = await repositorio.obterSaldo();
    return saldo;
  }
  
  exports.agruparPorCategoria = async (req, h) => {
    const persistencia = req.headers['x-persistence'];
    const LancamentosRepository = require(`../repositories/${persistencia}/LancamentosRepository.js`);
    const repositorio = new LancamentosRepository(obterConfig(req));
  
    return repositorio.resumoPorCategoria();
  }
*/