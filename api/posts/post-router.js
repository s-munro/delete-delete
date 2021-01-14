const express = require('express')
const Post = require('./post-model')

const router = express.Router()

// router.get('/', async (req, res, next) => {
//   try {
//     const data = await Post.get()
//     res.json(data)
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/', async (req, res, next) => {
  Post.get()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.get('/:id', checkId, async (req, res, next) => {
  try {
    const data = await Post.getById(req.params.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.post('/', checkPayload, async (req, res, next) => {
  try {
    const data = await Post.create(req.body)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', checkId, checkPayload, async (req, res, next) => {
  try {
    const data = await Post.update()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', checkId, async (req, res, next) => {
  try {
    const data = await Post.remove()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, stack: err.stack })
})

function checkId(req, res, next) {
  next()
}

function checkPayload(req, res, next) {
  next()
}

module.exports = router
