const express = require('express');
const router = express.Router();
const { Users } = require('../../db/models');

const pinsRouter = require('./pin.route');
const commentRouter = require('./comment.route');
const saveRouter = require('./save.route');

router.use('/', [pinsRouter]);
router.use('/pin', [commentRouter]);
router.use('/save', [saveRouter]);

router.get('/', (_req, res) => {
  res.send('정상적으로 요청되었습니다.');
});

router.post('/', async (req, res) => {
  const Id = await Users.create();
  return Id;
});

module.exports = router;
