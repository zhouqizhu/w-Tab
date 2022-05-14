const express = require('express')
const router = express.Router()

const searchEngine = require('../serve_schema/searchEngine');
const exploreSiteList = require('../serve_schema/exploreSiteList');
const siteContainer = require('../serve_schema/siteContainer');
const siteDrawerListLeft = require('../serve_schema/siteDrawerListLeft');
const siteDrawerListRight = require('../serve_schema/siteDrawerListRight');

let result = {
  code: 200,
  msg: 'ok'
}

//获取数据
router.get('/searchEngine', async (req, res) => {
  let { start, limit } = req.query
  if (start == undefined) start = 0;
  if (limit == undefined) limit = 100;
  let data = await searchEngine.find().skip(Number(start)).limit(Number(limit));
  res.json({ ...result, data })
})

router.get('/exploreSiteList', async (req, res) => {
  let { start, limit } = req.query
  if (start == undefined) start = 0;
  if (limit == undefined) limit = 100;
  let data = await exploreSiteList.find().skip(Number(start)).limit(Number(limit));
  res.json({ ...result, data })
})

router.get('/siteContainer', async (req, res) => {
  let { start, limit } = req.query
  if (start == undefined) start = 0;
  if (limit == undefined) limit = 100;
  let data = await siteContainer.find().skip(Number(start)).limit(Number(limit));
  res.json({ ...result, data })
})

router.get('/siteDrawerListLeft', async (req, res) => {
  let { start, limit } = req.query
  if (start == undefined) start = 0;
  if (limit == undefined) limit = 100;
  let data = await siteDrawerListLeft.find().skip(Number(start)).limit(Number(limit));
  res.json({ ...result, data })
})

router.get('/siteDrawerListRight', async (req, res) => {
  let { start, limit } = req.query
  if (start == undefined) start = 0;
  if (limit == undefined) limit = 100;
  let data = await siteDrawerListRight.find().skip(Number(start)).limit(Number(limit));
  res.json({ ...result, data })
})

module.exports = router