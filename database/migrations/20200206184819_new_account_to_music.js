
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('account_to_music', tbl => {
        tbl.integer('account_id')
            .unsigned()
            .references('id')
            .inTable('accounts')
            .onUpdate('cascade')
            .onDelete('cascade');
        tbl.integer('song_id')
            .references('id')
            .inTable('music')
            .onUpdate('cascade')
            .onDelete('cascade');
        tbl.string('favorites_id')
            .notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('account_to_music')
};
