const http = require('http')
const dotenv = require('dotenv')
const { URL } = require('url')
dotenv.config()

const server = http.createServer((req, res) => {
	const { url, method } = req
	const newURL = new URL(url, `http://${req.headers.host}`)
	const path = newURL.pathname
	const query = newURL.searchParams

	if (path === '/') {
		res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
		res.end('Welcome to Home Page')
	} else if (path === '/about') {
		res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
		if (method === 'POST') {
			res.end('Вы отправили форму')
		} else {
			res.end('This is About Page')
		}
	} else if (path === '/contact') {
		const q = query.get('name')

		// Query

		res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
		res.end(`Contact us at example@gmail.com\nYou send: ${q ? q : 'nothing'}`)
	} else if (path === '/time') {
		res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
		let time = new Date()
		res.end(
			`Время сервера: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
		)
	} else if (path === '/json') {
		const obj = {
			status: 'success',
			user: 'Alex',
			skills: ['Node.js', 'Events', 'HTTP'],
		}
		res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
		res.end(JSON.stringify(obj))
	} else {
		res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
		res.end(`404 Page Not Found\nThe page isn't exist ${url}`)
	}
})

const PORT = process.env.PORT

server.listen(PORT, () => {
	console.log(`Сервер работает на http://localhost:${PORT}`)
})
