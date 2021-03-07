const ConfigResolver = require("../core/ConfigResolver");

exports.listarAlunos = async (req, h) => {
    const LancamentosRepository = require(`../repositories/${ConfigResolver.requestResolver(req).FILE}/AlunosRepository.js`);
    const repositorio = new LancamentosRepository(ConfigResolver.requestResolver(req).URL);
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