// Update with your config settings.
import path from 'path';

const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database', 'dev.copy.sqlite'),
    },
    migrations: {
      directory: path.resolve(__dirname, 'database', 'migrations'),
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: path.resolve(__dirname, 'database', 'seeds'),
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10,
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
export default config;
