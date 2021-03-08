const ConfigResolver = require("../core/ConfigResolver");

exports.createAluno = async (req, h) => {
  const persistencia = req.headers['x-persistence'];
  const AlunosRepository = require(`../repositories/${ConfigResolver.requestResolver(req).FILE}/AlunosRepository.js`);
  const repositorio = new AlunosRepository(ConfigResolver.requestResolver(req).URL);
  return repositorio.insert(req.payload);
}

exports.getAllAlunos = async (req, h) => {
    const AlunosRepository = require(`../repositories/${ConfigResolver.requestResolver(req).FILE}/AlunosRepository.js`);
    const repositorio = new AlunosRepository(ConfigResolver.requestResolver(req).URL);
    
    return repositorio.list(req.query);
}

exports.getAlunoById = async (req, h) => {
  const AlunosRepository = require(`../repositories/${ConfigResolver.requestResolver(req).FILE}/AlunosRepository.js`);
  const repositorio = new AlunosRepository(ConfigResolver.requestResolver(req).URL);
  const item = await repositorio.getById(req.params.id);
  return item;
}

exports.updateAlunoById = async (req, h) => {
  const AlunosRepository = require(`../repositories/${ConfigResolver.requestResolver(req).FILE}/AlunosRepository.js`);
  const repositorio = new AlunosRepository(ConfigResolver.requestResolver(req).URL);
  return repositorio.update(req.params.id, req.payload);
}

exports.deleteAlunoById = async (req, h) => {
  const AlunosRepository = require(`../repositories/${ConfigResolver.requestResolver(req).FILE}/AlunosRepository.js`);
  const repositorio = new AlunosRepository(ConfigResolver.requestResolver(req).URL);
  return repositorio.delete(req.params.id);
}