const http = require('http')
const dotenv = require('dotenv')
const { URL } = require('url')
dotenv.config()

let products = []
let nextId = 1

const server = http.createServer((req, res) => {
	const { url, method } = req
	const newURL = new URL(url, `http://${req.headers.host}`)
	const path = newURL.pathname.split('/').slice(1)
	const query = newURL.searchParams

	res.setHeader('Content-Type', 'application/json; charset=utf-8')

	if (path[0] === 'products') {
		if (method === 'GET' && path.length < 2 && !query.toString().length) {
			res.statusCode = 200
			res.end(JSON.stringify(products))
		} else if (method === 'GET' && path.length === 2) {
			const product = products?.find(i => i.id === +path[1])

			if (!product) {
				res.statusCode = 404
				res.end(JSON.stringify(`Продукт с id=${path[1]} не найден`))
				return
			}

			res.statusCode = 200
			res.end(JSON.stringify(product))
		} else if (method === 'GET' && query.get('title')) {
			if (!products.length) {
				res.statusCode = 400
				res.end(JSON.stringify('Продуктов пока нету'))
				return
			}
			let value = query.get('title')
			const data = products.filter(i =>
				i.title.toLowerCase().includes(value.toLowerCase())
			)
			if (!data.length) {
				res.statusCode = 404
				res.end(JSON.stringify('Продукт с таким именим не найден'))
				return
			}
			res.statusCode = 200
			res.end(
				JSON.stringify({ message: `Вы ввели ${query.get('title')}`, data })
			)
		} else if (method === 'POST') {
			let body = ''
			req.on('data', chunk => {
				body += chunk
			})

			req.on('end', () => {
				try {
					const data = JSON.parse(body)
					if (data.title && data.desc && data.price) {
						const newProduct = {
							id: nextId++,
							title: data.title,
							desc: data.desc,
							price: +data.price,
						}

						products.push(newProduct)
						res.statusCode = 201
						res.end(JSON.stringify(newProduct))
					} else {
						res.statusCode = 400
						res.end(
							JSON.stringify(
								'Пожалуйста, укажите все данные: title, desc, price'
							)
						)
					}
				} catch (err) {
					res.statusCode = 400
					res.end(JSON.stringify('Ошибка: данные должны быть в формате JSON'))
				}
			})
		} else if (method === 'PUT' && path.length === 2) {
			let body = ''

			req.on('data', chunk => {
				body += chunk
			})

			req.on('end', () => {
				try {
					const data = JSON.parse(body)
					const index = products.findIndex(i => i.id === +path[1])

					if (index === -1) {
						res.statusCode = 404
						res.end(JSON.stringify(`Продукт с id=${path[1]} не найден`))
						return
					}

					const oldProduct = products[index]
					const updateProduct = {
						...oldProduct,
						title: data.title ?? oldProduct.title,
						desc: data.desc ?? oldProduct.desc,
						price: data.price ?? oldProduct.price,
					}
					products[index] = updateProduct

					res.statusCode = 200
					res.end(JSON.stringify(updateProduct))
				} catch (error) {
					res.statusCode = 400
					res.end(JSON.stringify('Ошибка: ожидается JSON'))
				}
			})
		} else if (method === 'DELETE' && path.length === 2) {
			const product = products.find(i => i.id === +path[1])
			if (!product) {
				res.statusCode = 404
				res.end(JSON.stringify(`Продукт с id=${path[1]} не найден`))
				return
			}
			const filtered = products.filter(i => i.id !== +path[1])
			products = filtered

			res.statusCode = 200
			res.end(JSON.stringify({ message: 'Продукт удалён', product }))
		} else {
			res.statusCode = 405
			res.end(JSON.stringify('Метод не поддерживаеться'))
		}
	} else {
		res.statusCode = 404
		res.end(JSON.stringify('404 Not Found'))
	}
})

const PORT = process.env.PORT

server.listen(PORT, () => {
	console.log(`Сервер работает на http://localhost:${PORT}`)
})
