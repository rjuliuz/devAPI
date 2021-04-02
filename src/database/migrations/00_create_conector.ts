import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('conectors', table => {
    table.string('id').notNullable().primary();
    table.string('name').notNullable();
    table.string('type').notNullable();
    table.string('privacy').notNullable();
    table.string('base_url').notNullable();
    table.string('logo_url').notNullable();
    table.string('category').notNullable();
    table.string('description').notNullable();
    table.string('status').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('conectors');
}
