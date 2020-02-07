
exports.up = function(knex, Promise) {
    return knex.schema
     .createTable('accounts', account => {
        account.increments();
        account.string('name')
            .notNullable();
        account.string('email')
            .notNullable()
            .unique();
        account.string('password')
            .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('accounts');
};
