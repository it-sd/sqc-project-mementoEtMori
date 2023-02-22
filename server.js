const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5163

const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

const query = async function (sql, params) {
  let client
  let results = []
  try {
    client = await pool.connect()
    const response = await client.query(sql, params)
    if (response && response.rows) {
      results = response.rows
    }
  } catch (err) {
    console.error(err)
  }
  if (client) client.release()
  return results
}

const queryAllCharities = async function (src) {
  const sql = `SELECT * FROM $(src);`
  const results = await query(sql)
  return { entries: results }
}

module.exports = { 
  query,
  queryAllCharities
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function (req, res) {
    res.render('pages/index')
  })
  .get('/about', function (req, res) {
    res.render('pages/about')
  })
  .get('/health', function (req, res) {
    const result = query('SELECT charityName FROM charities;')
    if (result.length === 0) {
      res.status(500).send('Unhealthy')
    } else {
      res.status(200).send('Healthy')
    }
  })
  .get('/list', async function (req, res) {
    const charityName = await queryAllCharities('charityName')
    const category = await queryAllCharities('category')
    const state = await queryAllCharities('state')
    
    const entries = {
      charityName: charityName.entries,
      category: category.entries,
      state: state.entries,
      table: ''
    }
    res.render('pages/list', entries)
  })
  .get('/list/:table', async function (req, res) {
    const entries = await queryAllCharities(req.params.table)
    const data = {
      table: req.params.table,
      charityName: [],
      category: [],
      state: []
    }

    res.render('pages/list', data)
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))



