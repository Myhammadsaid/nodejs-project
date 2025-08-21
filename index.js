const http = require('http')
const dotenv = require('dotenv')
const os = require('os')
dotenv.config()

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
	const { url, method } = req
	let result = 3
	if (url === '/2') {
		result = url[1]
	}
	const random = Math.floor(Math.random() * 10).toString()
	let platform = random > 5 ? os.platform() : 'win32'
	res.write(`Привет, ${platform}\n`)

	if (random == result) {
		res.end(`METHOD: ${method}\nURL: ${url}`)
	} else {
		res.end(random)
	}

	// res.end('Привет! Это мой первый сервер на Node.js 🚀')
})

const PORT = process.env.PORT

server.listen(PORT, () => {
	console.log(`Сервер работает на http://localhost:${PORT}`)
})
