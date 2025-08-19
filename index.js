const http = require('http')
const dotenv = require('dotenv')
dotenv.config()

let todos = [] // Здесь будем хранить задачи в памяти
let nextId = 1

const server = http.createServer((req, res) => {
	// Добавляем CORS заголовки в ответ, чтобы разрешить доступ с любого источника
	res.setHeader('Access-Control-Allow-Origin', '*') // или конкретный источник вместо '*'
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS'
	)
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

	// Если запрос OPTIONS (предварительный CORS запрос), отвечаем сразу
	if (req.method === 'OPTIONS') {
		res.writeHead(204)
		res.end()
		return
	}

	const { method, url } = req

	// Разбираем URL и параметры (для простоты без query-парсера)
	const urlParts = url.split('/')
	// /todos или /todos/1
	const baseRoute = urlParts[1]
	const id = urlParts[2] ? Number(urlParts[2]) : null

	// Устанавливаем заголовок для JSON
	res.setHeader('Content-Type', 'application/json; charset=utf-8')

	if (baseRoute !== 'todos') {
		res.writeHead(404)
		res.end(JSON.stringify({ error: 'Маршрут не найден' }))
		return
	}

	if (method === 'GET' && id === null) {
		// Получить все задачи
		res.writeHead(200)
		res.end(JSON.stringify(todos))
	} else if (method === 'GET' && id !== null) {
		const todo = todos.find(i => i.id === id)
		if (!todo) {
			res.writeHead(404)
			res.end(JSON.stringify({ error: 'Маршрут не найден' }))
			return
		}
		res.writeHead(200)
		res.end(JSON.stringify(todo))
	} else if (method === 'POST' && id === null) {
		// Добавить новую задачу
		let body = ''
		req.on('data', chunk => {
			body += chunk.toString()
		})
		req.on('end', () => {
			try {
				const { title } = JSON.parse(body)
				if (!title) {
					res.writeHead(400)
					res.end(JSON.stringify({ error: 'Поле title обязательно' }))
					return
				}
				const newTodo = { id: nextId++, title, completed: false }
				todos.push(newTodo)
				res.writeHead(201)
				res.end(JSON.stringify(newTodo))
			} catch {
				res.writeHead(400)
				res.end(JSON.stringify({ error: 'Неверный JSON' }))
			}
		})
	} else if (method === 'PUT' && id !== null) {
		// Обновить задачу по id
		let body = ''
		req.on('data', chunk => {
			body += chunk.toString()
		})
		req.on('end', () => {
			try {
				const update = JSON.parse(body)
				const todo = todos.find(t => t.id === id)
				if (!todo) {
					res.writeHead(404)
					res.end(JSON.stringify({ error: 'Задача не найдена' }))
					return
				}
				// Обновляем поля
				if (typeof update.title === 'string') todo.title = update.title
				if (typeof update.completed === 'boolean')
					todo.completed = update.completed
				res.writeHead(200)
				res.end(JSON.stringify(todo))
			} catch {
				res.writeHead(400)
				res.end(JSON.stringify({ error: 'Неверный JSON' }))
			}
		})
	} else if (method === 'DELETE' && id !== null) {
		// Удалить задачу по id
		const index = todos.findIndex(t => t.id === id)
		if (index === -1) {
			res.writeHead(404)
			res.end(JSON.stringify({ error: 'Задача не найдена' }))
			return
		}
		todos.splice(index, 1)
		res.writeHead(204) // No Content
		res.end()
	} else {
		res.writeHead(405) // Method Not Allowed
		res.end(JSON.stringify({ error: 'Метод не поддерживается' }))
	}
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
	console.log(`Сервер работает на http://localhost:${PORT}`)
})
