const connection = require('./connection');

const getAll = async () => {
  const [offices] = await connection.execute(
    'SELECT id, first_name, last_name, birthday, city, email, phone, state, address FROM Offices_do_Seu_Ze.offices;',
  );
  return offices;
};

const findById = async (id) => {
  const [office] = await connection.execute(
    'SELECT id, first_name, last_name, birthday, city, email, phone, state, address FROM Offices_do_Seu_Ze.offices WHERE id = ?;', [id]
  )
  return office;
};

const create = async (id, first_name, last_name, birthday, city, email, phone, state, address) => await connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?,?,?,?,?,?,?)',
  [id, first_name, last_name, birthday, city, email, phone, state, address]
)

// const update = async () => {

// }

// const delete = async (id) => {

// }

module.exports = {
	getAll,
  findById,
  create
};
