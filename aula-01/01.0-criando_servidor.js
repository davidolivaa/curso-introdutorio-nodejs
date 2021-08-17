//console.log('Ola Mundo')
//esse comando pode ser rodado pelo cmd com o comando node 'nome do arquivo js'

const http1 = require('http')

http1.createServer( (requisicao, resposta) => { //arrow function como parametro do metodo, nela estao a requisiçao feita e a resposta obtida
    resposta.writeHead(200, {'Content-Type': 'text/plain'}); //cabeçalho
    resposta.write('Curso NodeJS'); //mensagem do servidor
    resposta.end()
}).listen(1337) //porta em que o servidor criado sera ouvido
//atraves do cmd rodando esse arquivo o servidor estara no ar
//para acessa-lo é so ir no navegador e inserir: localhost:1337
//para sair de um servidor e entrar em outro (ou no mesmo caso ele tenha sido atualizado), basta usar ctrl+c 2 vezes no cmd para sair

// Criando rotas
const http2 = require('http')
const porta = 3000
const host = '127.0.0.1' //esse é o host padrao e ele sera usado caso nao seja especificado outro

const servidor = http2.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'}); //cabeçalho

    //interceptaçao das rotas, a url sera verificada e tera uma resposta para cada uma
    if(req.url == '/'){
        res.write('<h1>Seja bem vindo</h1>')
    } else if(req.url == '/canal'){
        res.write('<h1>CFB Cursos</h1>')
    } else if(req.url == '/curso'){
        req.write('<h1>Curso de NodeJS</h1>')
    } else if(req.url == '/curso/python'){
        req.write('<h1>Curso de Python</h1>')
    } 
    res.end()

}).listen(porta, host, () => {console.log('Servidor online')}) //no metodo listen pode ser enviado varios parametros e funçoes entre eles