const universidades = [
  {
    nome: "Centro Universitário Ateneu",
    sigla: "UNIATENEU",
    cidade: "Fortaleza",
    uf: "CE",
    fundacao: "2002",
  },
  {
    nome: "Centro Universitário Christus",
    sigla: "UNICHRISTUS",
    cidade: "Fortaleza",
    uf: "CE",
    fundacao: "1995",
  },
  {
    nome: "Centro Universitário da Grande Fortaleza",
    sigla: "UNIGRANDE",
    cidade: "Fortaleza",
    uf: "CE",
    fundacao: "2000",
  },
  {
    nome: "Centro Universitário Estácio do Ceará",
    sigla: "ESTÁCIO",
    cidade: "Fortaleza",
    uf: "CE",
    fundacao: "1970",
  },
  {
    nome: "Centro Universitário Fametro",
    sigla: "UNIFAMETRO",
    cidade: "Fortaleza",
    uf: "CE",
    fundacao: "2002",
  },
  {
    nome: "Centro Universitário Fanor Wyden",
    sigla: "UNIFANOR",
    cidade: "Fortaleza",
    uf: "CE",
    fundacao: "2001",
  },
  {
    nome: "Centro Universitário Farias Brito",
    sigla: "FB UNI",
    cidade: "Fortaleza",
    uf: "CE",
    fundacao: "1996",
  },
];

exports.up = function(knex) {
  return knex.batchInsert("universidade", universidades);
};

exports.down = function(knex) {};
