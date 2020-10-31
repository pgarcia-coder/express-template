import Knex from 'knex';

export const queryBuilder = Knex({ client: 'pg' });