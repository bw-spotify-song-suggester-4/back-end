
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('accounts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        {id: 1, name: "Shanda", email:"test@email.com", password:"test"},
        // {id: 2, name: '', email:'', password:''},
        // {id: 3, name: '', email:'', password:''},
        // {id: 4, name: '', email:'', password:''},
        // {id: 5, name: '', email:'', password:''},
        // {id: 6, name: '', email:'', password:''} 
      ]);
    });
};
