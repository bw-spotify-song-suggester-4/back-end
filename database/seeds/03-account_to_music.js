
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('account_to_music').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('account_to_music').insert([
        {account_id: 1, song_id: 1, real_track_id:"123"},
        // {account_id: 2, song_id: 2, real_track_id:""},
        // {account_id: 3, song_id: 3, real_track_id:""},
        // {account_id: 4, song_id: 1, real_track_id:""},
        // {account_id: 5, song_id: 2, real_track_id:""},
        // {account_id: 6, song_id: 3, real_track_id:""},
        // {account_id: 1, song_id: 1, real_track_id:""},
        // {account_id: 2, song_id: 2, real_track_id:""}

      ]);
    });
};
