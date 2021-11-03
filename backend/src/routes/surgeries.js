const express = require('express')
const router = express.Router()

const Surgerie = require('../models/Surgerie')

router.get('/', async (req, res) => {
    const surgerie = await Surgerie.find()
    res.json(surgerie)
})

router.post('/', async (req, res) => {
    const surgerie = new Surgerie(req.body)
    await surgerie.save()
    res.json("Surgerie Saved")
})

router.put('/:id', async (req, res) => {
    await Surgerie.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status: "Surgerie Updated"
    });
})

router.delete('/:id', async (req, res) => {
    await Surgerie.findByIdAndRemove(req.params.id);
    res.json({
        status: "Surgerie Deleted"
    });
})

module.exports = router;