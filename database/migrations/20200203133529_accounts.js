
exports.up = function(knex) {
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
    .createTable('music', tbl => {
        tbl.increments();
        tbl.string('track_id')
            .notNullable();
        tbl.string('track_name')
            .notNullable();
        tbl.string('artist_name')
            .notNullable();
        tbl.string('genre', 25);
        tbl.string('tag_en', 25)
    })
    .createTable('account_to_music', tbl => {
        tbl.integer('account_id')
            .unsigned()
            .references('id')
            .inTable('accounts')
            .onUpdate('cascade')
            .onDelete('cascade');
        tbl.integer('track_id')
            .references('id')
            .inTable('music')
            .onUpdate('cascade')
            .onDelete('cascade');
        tbl.string('favorites_id')
            .notNullable()
    })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('account_to_music')
    .dropTableIfExists('music')
    .dropTableIfExists('accounts');
};
