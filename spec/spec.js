const { queryAllCharities } = require('../server.js')

describe('charity server', function () {
  const baseUrl = 'https://localhost:5163'
  const res = between200and399 = async function (route) {
  it('should return 200', async function () {
  const url = new URL(route, baseUrl)
  const res = await fetch(url)
  expect(res.status.greaterThanOrEqual(200),
  expect(res.status).lessThanOrEqual(399))
  }, 10000)
}

describe("GET '/'", function () {
  between200and399('/')
})

describe("GET '/health'", function () {
  between200and399('/health')
})

describe("GET '/about'", function () {
  between200and399('/about')
})

describe('queryAllCharities', function () {
    it('should return an array of charities', async function () {
      const results = await queryAllCharities('charity')
      expect(results).toBeDefined()
      expect(results.entries).toBeDefined()
      expect(results.entries.length).toBeGreaterThan(0)
    })
  })
