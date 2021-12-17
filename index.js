const PORT = 8080
const express = require('express')
const axios =require('axios')
const cheerio = require('cheerio')
const { request, response } = require('express')

const app = express()

const articles = []

app.get('/', (request, response ) => {
    response.json('haloooo')
})