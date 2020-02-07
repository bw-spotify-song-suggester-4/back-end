
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('music', tbl => {
        tbl.increments();
        tbl.string('artist_name')
            .notNullable();
        tbl.string('track_name')
            .notNullable();
        tbl.string('track_id')
            .notNullable();
        tbl.string('cover_art')
        tbl.decimal('acousticness', 10)
        tbl.decimal('danceability', 10)
        tbl.decimal('duration_ms', 10)
        tbl.decimal('energy', 10)
        tbl.decimal('instrumentalness', 10)
        tbl.decimal('key', 10)
        tbl.decimal('liveness', 10)
        tbl.decimal('loudness', 10)
        tbl.boolean('mode')
        tbl.decimal('speechiness', 10)
        tbl.decimal('tempo', 10)
        tbl.decimal('time_signature', 10)
        tbl.decimal('valence', 10)
        tbl.decimal('popularity', 10)
    })
};

exports.down = function(knex) {
    return knex.schema
     .dropTableIfExists('music')
};
