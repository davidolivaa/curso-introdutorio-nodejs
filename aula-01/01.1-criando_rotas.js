// Criando rotas
const http2 = require('http')
const url = require('url') //acessando a url e armazenando em uma variavel
const porta = 3000
const host = '127.0.0.1' //esse é o host padrao e ele sera usado caso nao seja especificado outro

const servidor = http2.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'}); //cabeçalho
    res.write(req.url) //escrevendo o que tem na variavel url
    const p = url.parse(req.url, true).query // true confirma a transformaçao em string
    res.write('<br/>' + p.curso) //forma de enviar entradas 
    res.write('<br/>' + p.nome)
    res.end()

})
servidor.listen(porta, () => {console.log('Servidor online')}) //no metodo listen pode ser enviado varios parametros e funçoes entre eles