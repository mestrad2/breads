const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker')
const bakerSeedData = require('../models/baker_seed')

// SEED DATA
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})


// INDEX
baker.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then(foundBakers => {
            res.send(foundBakers)
        })
})

// SHOW
baker.get('/:id', (req,res) => {
    Baker.findById(req.params.id)
    .populate({
        path: 'breads',
        options: {limit: 2}
    })
    .then(foundBaker => {
        res.render('bakerShow', {
            baker: foundBaker
        })
    })
})


// DELETE
baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id)
    .then(deletedBaker => {
        res.status(303).redirect('/breads')
    })
})

module.exports = baker    