const { Router } = require('express');
const { getAll, findById, create, update, remove } = require('../models/officesModels');

const officeRouter = Router();

officeRouter.get('/', async (req, res) => {
  const offices = await getAll()
  res.status(200).json(offices)
});

officeRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const office = await findById(id);
  res.status(200).json(office);
});

officeRouter.post('/:id', async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, birthday, city, email, phone, state, address } = req.body;

  await create(id, first_name, last_name, birthday, city, email, phone, state, address);

  res.status(201).json({message: 'Office create with sucess! '});
});

officeRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, birthday, city, email, phone, state, address } = req.body;

  await update(id, first_name, last_name, birthday, city, email, phone, state, address);

  res.status(201).json({ message: 'Update office with sucess'});
});

officeRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await remove(id);

  res.status(200).json({ message: 'Delete office with sucess'});
});

module.exports = officeRouter;