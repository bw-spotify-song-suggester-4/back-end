
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
        tbl.decimal('acousticness', 10)
        tbl.decimal('danceability', 10)
        tbl.decimal('duration_ms', 10)
        tbl.decimal('energy', 10)
        
    })
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
        tbl.string('real_track_id')
            .notNullable()
    })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('account_to_music')
    .dropTableIfExists('music')
    .dropTableIfExists('accounts');
};
