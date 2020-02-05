
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('account_to_music').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('account_to_music').insert([
        {account_id: 1, track_id: 1},

      ]);
    });
};
