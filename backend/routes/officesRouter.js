const { Router } = require('express');
const { getAll, findById } = require('../models/officesModels');

const officeRouter = Router();

officeRouter.get('/', async (req, res) => {
  const offices = await getAll()
  res.status(200).json(offices)
});

officeRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const office = await findById(id);
  res.status(200).json(office);
} )

module.exports = officeRouter;