const router = require('express').Router();
const { models } = require('../models');
const Player = models.Player;

router.get('/', async (req, res, next) => {
  try {
    const playerList = await Player.findAll()
    res.send({status: 'success', result: playerList });  
  } catch (err) {
    console.log(err.message)
    res.send({ status: 'failed', result: 'Please try again.' })
  }
})

router.post('/create', async (req, res, next) => {
  try {
    const { firstname, lastname } = req.body;
    await Player.create({ firstname, lastname })
    res.send({ status: 'success', result: 'created' })
  } catch (err) {
    console.log(err.message)
    res.send({ status: 'failed', result: 'Please try again.' })
  }
})

router.delete('/delete/:id', async (req, res, next) => {
  try {
    await Player.destroy({
      where: { id: req.params.id }
    })
    res.send({ status: 'failed', result: 'Deleted' })
  } catch (err) {
    console.log(err.message)
    res.send({ status: 'failed', result: 'Please try again.' })
  }
})

router.put('/update/:pid', async (req, res, next) => {
  try {
    const playerDetails = await Player.findOne({ where: { id: req.params.pid } })
    if (!playerDetails) res.send({ status: 'failed', result: 'Player not exist' })
    await playerDetails.update(req.body);
    res.send({ status: 'success', result: 'updated' });
  } catch (err) {
    console.log(err.message)
    res.send({ status: 'failed', result: 'Please try again.' })
  }
})

module.exports = router;