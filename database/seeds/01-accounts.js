
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('accounts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        {id: 1, name: "Shanda", email:"test@email.com", password:"test"},
        
      ]);
    });
};
