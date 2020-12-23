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
  {
    nome: "Faculdade Cearense",
    sigla: "FAC",
    uf: "CE",
    cidade: "Fortaleza",
    fundacao: "2002",
  },
  {
    nome: "Faculdade de Tecnologia do Nordeste",
    sigla: "FATENE",
    uf: "CE",
    cidade: "Fortaleza",
    fundacao: "2002",
  },
  {
    nome: "Instituto Federal de Educação, Ciência e Tecnologia",
    sigla: "IFCE",
    uf: "CE",
    cidade: "Fortaleza",
    fundacao: "2008",
  },
  {
    nome: "Universidade de Fortaleza",
    sigla: "UNIFOR",
    uf: "CE",
    cidade: "Fortaleza",
    fundacao: "1973",
  },
  {
    nome: "Faculdade Lourenço Filho",
    sigla: "FLF",
    uf: "CE",
    cidade: "Fortaleza",
    fundacao: "1997",
  },
  {
    nome: "Universidade Estadual do Ceará",
    sigla: "UECE",
    uf: "CE",
    cidade: "Fortaleza",
    fundacao: "1975",
  },
  {
    nome: "Universidade Federal do Ceará",
    sigla: "UFC",
    uf: "CE",
    cidade: "Fortaleza",
    fundacao: "1954",
  },
  {
    nome: "Centro Universitário Mauricio de Nassau",
    sigla: "UNINASSAU",
    UF: "CE",
    cidade: "Fortaleza",
    fundacao: "2003",
  },

  {
    nome: "Centro Universitário Sete de Setembro",
    sigla: "UNI7",
    UF: "CE",
    cidade: "Fortaleza",
    fundacao: "2001",
  },
  {
    nome: "Universidade Estadual Vale do Acaraú",
    sigla: "UVA",
    UF: "CE",
    cidade: "Fortaleza",
    fundacao: "1968",
  },
  {
    nome: "UNICE – Ensino Superior",
    sigla: "UNICE",
    UF: "CE",
    cidade: "Fortaleza",
    fundacao: "1990",
  },
];

exports.up = function(knex) {
  return knex.batchInsert("universidade", universidades);
};

exports.down = function(knex) {};
