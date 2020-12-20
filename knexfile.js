module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./sample_db.sqlite3",
    },
  },

  staging: {
    client: "sqlite3",
    connection: {
      filename: "./sample_db.sqlite3",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "sample_db",
      user: "postgres",
      password: "123",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
