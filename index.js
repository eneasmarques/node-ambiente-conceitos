const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

// para informações de formulário html
app.use(express.urlencoded({ extended: false }))

// informando extensao para arquivos nunjucks
app.set('view engine', 'njk')

// verifica se a idade é inválida para solicitá-la novamente
const checaIdade = (req, res, next) => {
  const { idade } = req.query

  return idade <= 0 || !idade ? res.redirect('/') : next()
}

app.get('/', (req, res) => {
  return res.render('age')
})

app.post('/check', (req, res) => {
  const { idade } = req.body

  return idade >= 18
    ? res.redirect(`/major/?idade=${idade}`)
    : res.redirect(`/minor/?idade=${idade}`)
})

app.get('/minor', checaIdade, (req, res) => {
  const { idade } = req.query

  return res.render('minor', { idade })
})

app.get('/major', checaIdade, (req, res) => {
  const { idade } = req.query

  return res.render('major', { idade })
})

app.listen(3000)
