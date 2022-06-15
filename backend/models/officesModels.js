const connection = require('./connection');

const getAll = async () => {
  const [offices] = await connection.execute(
    `SELECT 
      id, first_name, last_name, birthday, city, email, phone, state, address 
    FROM Offices_do_Seu_Ze.offices;`,
  );
  return offices;
};

const findById = async (id) => {
  const [office] = await connection.execute(
    `SELECT 
      id, first_name, last_name, birthday, city, email, phone, state, address 
    FROM Offices_do_Seu_Ze.offices 
    WHERE id = ?;`, 
    [id]
  )
  return office;
};

const create = async (id, first_name, last_name, birthday, city, email, phone, state, address) => await connection.execute(
  `INSERT INTO Offices_do_Seu_Ze.offices 
    (id, first_name, last_name, birthday, city, email, phone, state, address ) 
  VALUES (?,?,?,?,?,?,?,?,?);`,
  [id, first_name, last_name, birthday, city, email, phone, state, address]
);

const update = async (id, first_name, last_name, birthday, city, email, phone, state, address) => await connection.execute(
  `UPDATE Offices_do_Seu_Ze.offices 
  SET first_name=?, last_name=?, birthday=?, city=?, email=?, phone=?, state=?, address=? 
  WHERE id = ?;`,
  [first_name, last_name, birthday, city, email, phone, state, address, id]
);

const remove = async (id) => await connection.execute(
  `DELETE FROM Offices_do_Seu_Ze.offices
  WHERE id = ?;`,
  [id]
);

module.exports = {
	getAll,
  findById,
  create,
  update,
  remove
};
