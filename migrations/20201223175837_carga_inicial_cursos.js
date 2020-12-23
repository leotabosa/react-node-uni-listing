const cursos = [
  {
    universidade_id: 1,
    nome: "Análise e desenvolvimento de sistemas",
  },
  {
    universidade_id: 2,
    nome: "Análise e desenvolvimento de sistemas",
  },
  {
    universidade_id: 3,
    nome: "Análise de sistemas",
  },
  {
    universidade_id: 4,
    nome: "Análise e desenvolvimento de sistemas",
  },
  {
    universidade_id: 5,
    nome: "Análise e desenvolvimento de sistemas",
  },
  {
    universidade_id: 6,
    nome: "Análise e desenvolvimento de sistemas",
  },
  {
    universidade_id: 8,
    nome: "Análise e desenvolvimento de sistemas",
  },
  {
    universidade_id: 9,
    nome: "Análise e desenvolvimento de sistemas",
  },
  {
    universidade_id: 10,
    nome: "Análise e desenvolvimento de sistemas",
  },
  {
    universidade_id: 11,
    nome: "Análise e desenvolvimento de sistemas",
  },
  {
    universidade_id: 12,
    nome: "Análise e desenvolvimento de sistemas",
  },
  {
    universidade_id: 12,
    nome: "Banco de dados",
  },
  {
    universidade_id: 3,
    nome: "Ciência da computação",
  },
  {
    universidade_id: 4,
    nome: "Ciência da computação",
  },
  {
    universidade_id: 7,
    nome: "Ciência da computação",
  },
  {
    universidade_id: 10,
    nome: "Ciência da computação",
  },
  {
    universidade_id: 11,
    nome: "Ciência da computação",
  },
  {
    universidade_id: 12,
    nome: "Ciência da computação",
  },
  {
    universidade_id: 13,
    nome: "Ciência da computação",
  },
  {
    universidade_id: 14,
    nome: "Ciência da computação",
  },
  {
    universidade_id: 11,
    nome: "Computação em nuvem",
  },
  {
    universidade_id: 3,
    nome: "Engenharia de computação",
  },
  {
    universidade_id: 10,
    nome: "Engenharia de computação",
  },
  {
    universidade_id: 11,
    nome: "Engenharia de computação",
  },
  {
    universidade_id: 14,
    nome: "Engenharia de computação",
  },
  {
    universidade_id: 6,
    nome: "Engenharia de controle e automação",
  },
  {
    universidade_id: 11,
    nome: "Engenharia de controle e automação",
  },
  {
    universidade_id: 10,
    nome: "Engenharia de mecatrônica",
  },
  {
    universidade_id: 10,
    nome: "Engenharia de telecomunicações",
  },
  {
    universidade_id: 11,
    nome: "Engenharia de telecomunicações",
  },
  {
    universidade_id: 14,
    nome: "Engenharia de telecomunicações",
  },
  {
    universidade_id: 15,
    nome: "Engenharia de telecomunicações",
  },
  {
    universidade_id: 11,
    nome: "Engenharia eletrônica",
  },
  {
    universidade_id: 6,
    nome: "Gestão da tecnologia da informação",
  },
  {
    universidade_id: 7,
    nome: "Gestão da tecnologia da informação",
  },
  {
    universidade_id: 9,
    nome: "Gestão da tecnologia da informação",
  },
  {
    universidade_id: 3,
    nome: "Gestão de rede de computadores",
  },
  {
    universidade_id: 1,
    nome: "Redes de computadores",
  },
  {
    universidade_id: 4,
    nome: "Redes de computadores",
  },
  {
    universidade_id: 6,
    nome: "Redes de computadores",
  },
  {
    universidade_id: 8,
    nome: "Redes de computadores",
  },
  {
    universidade_id: 9,
    nome: "Redes de computadores",
  },
  {
    universidade_id: 12,
    nome: "Redes de computadores",
  },
  {
    universidade_id: 15,
    nome: "Redes de computadores",
  },
  {
    universidade_id: 2,
    nome: "Sistema de informação",
  },
  {
    universidade_id: 4,
    nome: "Sistema de informação",
  },
  {
    universidade_id: 5,
    nome: "Redes de computadores",
  },
  {
    universidade_id: 6,
    nome: "Sistema de informação",
  },
  {
    universidade_id: 12,
    nome: "Sistema de informação",
  },
  {
    universidade_id: 15,
    nome: "Sistema de informação",
  },
  {
    universidade_id: 16,
    nome: "Sistema de informação",
  },
  {
    universidade_id: 5,
    nome: "Sistema e mídias digitais",
  },
  {
    universidade_id: 14,
    nome: "Sistema e mídias digitais",
  },
  {
    universidade_id: 2,
    nome: "Sistema para internet",
  },
  {
    universidade_id: 3,
    nome: "Sistema para internet",
  },
  {
    universidade_id: 12,
    nome: "Sistema para internet",
  },
  {
    universidade_id: 15,
    nome: "Sistema para internet",
  },
  {
    universidade_id: 4,
    nome: "Telemática",
  },
  {
    universidade_id: 10,
    nome: "Telemática",
  },
  {
    universidade_id: 17,
    nome: "Web design e web master",
  },
  {
    universidade_id: 18,
    nome: "Segurança da informação",
  },
];

exports.up = function(knex) {
  return knex.batchInsert("curso", cursos);
};

exports.down = function(knex) {};
