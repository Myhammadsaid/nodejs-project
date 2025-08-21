const path = require('path')
const filePath = '/home/alex/Projects/node-course/files/report.pdf'

// console.log(path.basename(filePath))
// console.log(path.dirname(filePath))
// console.log(path.extname(filePath))
// console.log(path.join(__dirname, 'index.js'))
// console.log(path.join(__filename, 'index.js'))
// console.log(path.resolve(__dirname, 'start', 'index.js'))
// console.log(path.resolve(__filename, 'start', 'index.js'))

// const pathUser = {
// 	basename: path.basename(filePath),
// 	extname: path.extname(filePath),
// 	dirname: path.dirname(filePath),
// 	resolve: path.resolve(path.dirname(filePath), '../../logs/error.log'),
// }

// console.log(pathUser)

// const pathDemo = process.argv[2]

// if (pathDemo === '--help' || !pathDemo) {
// 	console.log(`Использование:
//   node path-demo.js <путь_к_файлу>

// Описание:
//   Этот скрипт разбирает путь к файлу, выводит его имя, расширение и папку.
//   Затем формирует новый путь к резервной копии с расширением .bak

// Пример:
//   node path-demo.js /home/user/data/info.txt
// `)
// 	process.exit(0)
// }

// let parsed = path.parse(pathDemo)

// console.log(`
// Имя файла: ${parsed.base}
// Расширение: ${parsed.ext}
// Родительская папка: ${parsed.dir}
// Путь к резервной копии: ${path.join(parsed.dir, parsed.name + '.bak')}
// `)

const myURL = new URL(
	'https://example.com:8080/path/page.html?user=alex&age=30#bio'
)

// console.log(myURL)
// console.log(myURL.host)

// for (const [key, value] of myURL.searchParams) {
// 	console.log(key, value)
// }

// получить значение:
// console.log(myURL.searchParams.get('user'))
// добавить параметр:
// myURL.searchParams.append('token', '123')
// console.log(myURL)
// удалить параметр:
// myURL.searchParams.delete('age')
// console.log(myURL)
// проверить наличие:
// console.log(myURL.searchParams.has('user'))

// const url = new URL(
// 	'https://github.com/user123/project?sort=stars&lang=javascript#readme'
// )

// url.searchParams.set('sort', 'updated')

// console.log(
// 	`
// 	Protocol: ${url.protocol}
// 	Domen: ${url.hostname}
// 	Path: ${url.pathname}
// 	Search: ${url.search}
// 	Hash: ${url.hash ? url.hash : 'Хеша нету в ссылке'}
// 	Lang: ${url.searchParams.get('lang')}
// 	`
// )

// console.log('Full path: ', url.href)

// const url = new URL(
// 	'https://api.example.com/v1/users?page=5&limit=20&token=abc123'
// )

// url.searchParams.append('sort', 'desc')
// url.searchParams.delete('token')

// console.log(
// 	`
// 	Protocol: ${url.protocol}
// 	Domen: ${url.hostname}
// 	Path: ${url.pathname}
// 	Query: ${url.search}
// 	Page: ${url.searchParams.get('page')}
// 	`
// )

// console.log('FullPath: ', url.href)

const fs = require('fs')

// fs.writeFile('notes/foo.txt', 'Test for writeFile --> fs', err => {
// 	if (err) throw err
// 	console.log('Файл создан или перезаписан')
// })

// fs.readFile('notes/foo.txt', 'utf-8', (err, data) => {
// 	if (err) throw err
// 	console.log('Файл содержит в себе: ', data)
// })

// let text = '\nbla bla bla...'

// fs.appendFile('notes/foo.txt', text, err => {
// 	if (err) throw err
// 	console.log('В файл был записан текст: ', text)
// })

// for (let i = 0; i < 100; i++) {
// 	fs.appendFile('notes/foo.txt', '\nbla bla bla...', err => {
// 		if (err) throw err
// 	})
// }

// fs.unlink('notes/foo.txt', err => {
// 	if (err) throw err
// 	console.log('Файл был удален')
// })

// fs.mkdir('example', err => {
// 	if (err) throw err
// 	console.log('Папка создан')
// })

// fs.readdir('notes', (err, list) => {
// 	if (err) throw err
// 	console.log('Список файлов:')
// 	list?.forEach(file => {
// 		console.log(`--${file}`)
// 	})
// })

// fs.rmdir('example', err => {
// 	if (err) throw err
// 	console.log('Папка был удален')
// })

// fs.mkdir('test', err => {
// 	if (err) {
// 		console.log('Такой папка существует')
// 	} else {
// 		console.log('Папка создан')
// 	}
// })

// let text = 'foo, this is a test file!'
// fs.writeFile('test/message.txt', text, err => {
// 	if (err) throw err
// 	let append = '\nThis line was appended.'
// 	fs.appendFile('test/message.txt', append, err => {
// 		if (err) throw err
// 		fs.readFile('test/message.txt', 'utf-8', (err, data) => {
// 			if (err) throw err
// 			console.log('Содержимый файла:\n', data)
// 			console.log('Длина текста', data.toString().length)
// 		})
// 	})
// })

// fs.readdir('test', (err, list) => {
// 	if (err) throw err
// 	let count1 = 0
// 	let count2 = 0
// 	list?.forEach(file => {
// 		if (path.extname(file) === '.txt') {
// 			count1++
// 			console.log(`-- ${file}`)
// 		} else {
// 			count2++
// 		}
// 	})
// 	console.log('Всего .txt файлов:', count1)
// 	console.log('Всего не .txt файлов:', count2)
// })

// const os = require('os')

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.hostname())
// console.log(os.type())
// const cpus = os.cpus()

// cpus.forEach((cpus, index) => {
// 	console.log(`Ядро ${index + 1}: ${cpus.model} - ${cpus.speed}`)
// })

// console.log(`Количество ядер: ${cpus.length}`)

// let argvs = process.argv.slice(2)

// let text = `Использование:
//   node url-demo.js <url> [--add-param=ключ=значение]

// Описание:
//   Скрипт разбирает URL, показывает его части и query-параметры.
//   Можно добавить новый query-параметр через --add-param.

// Пример:
//   node url-demo.js "https://example.com/page?user=alex" --add-param=lang=ru`

// if (!argvs.length || argvs[0] === '--help') {
// 	console.log(text)
// 	process.exit(0)
// }

// let url = new URL(argvs[0])
// argvs.slice(1)?.forEach(item => {
// 	if (item.startsWith('--add-param=')) {
// 		let key = item.split('=')[1]
// 		let value = item.split('=')[2]
// 		url.searchParams.append(key, value)
// 	} else {
// 		console.log(text)
// 		process.exit(0)
// 	}
// })

// console.log(
// 	`
// 		Protocol: ${url.protocol}
// 	 	Domen: ${url.hostname}
// 	 	Port: ${url.port}
//  		Path: ${url.pathname}
//  		Hash: ${url.hash ? url.hash : 'Хеш нету в ссылке'}
//  		Query: ${url.search}
// 		`
// )

// 🔹 Часть 2 — Дополнительное упражнение с аргументами
// const args = [
// 	'--env=production',
// 	'--config=db.json',
// 	'--verbose',
// 	'--config=server.json',
// 	'--mode=dev',
// ]
// const result = []
// args.forEach(item => {
// 	if (item.startsWith('--config=')) {
// 		result.push(item.split('=')[1])
// 	}
// })
// console.log(result)

const Emitter = require('events')
const emitter = new Emitter()

// function isName(name = 'World!') {
// 	console.log(`Hello, ${name}`)
// }

// emitter.on('listener', isName)
// // emitter.off('listener', isName) // снять слушателя.
// emitter.emit('listener', 'Mike')

// emitter.once('foo', isName)
// emitter.emit('foo') // сработает
// emitter.emit('foo') // не сработает

// // emitter.removeListener('listener', isName) // старое имя (работает аналогично).
// emitter.emit('listener', 'Mike')

// emitter.on('name', isName)

// // emitter.removeAllListeners(['name'])
// emitter.emit('listener', 'Mike')
// emitter.emit('name', 'John')

// console.log(emitter.listenerCount('listener'))
// console.log(emitter.eventNames())
// console.log(emitter.listeners('name'))

// emitter.on('ping', () => console.log('pong'))
// emitter.emit('ping')

// emitter.on('sum', (a, b) => console.log(a + b))
// emitter.emit('sum', 4, 5)

// emitter.on('hello', name => console.log(`Hello, ${name}`))
// emitter.emit('hello', 'Алекс')

// emitter.once('login', user => console.log(`${user} вошёл в систему`))
// emitter.emit('login', 'john')
// // emitter.emit('login', 'john')

// emitter.on('data', str => console.log(`длина: ${str.length}`))
// emitter.on('data', str => console.log(str.toUpperCase()))
// emitter.emit('data', 'nodejs')

// function removeListener(arr) {
// 	let inx = arr?.indexOf('data')
// 	if (inx !== -1) {
// 		const listeners = emitter.listeners(arr[inx])
// 		for (const fn of listeners) {
// 			emitter.off(arr[inx], fn)
// 		}
// 	}
// }
// emitter.on('off', removeListener)
// emitter.emit('off', emitter.eventNames())

// let count = 0
// function message(str) {
// 	if (str) {
// 		count++
// 		if (count > 4) {
// 			console.log('\nЛимит сообщение истек!')
// 			return
// 		}
// 		console.log(`📩 Пользователь написал: ${str}`)
// 		console.log(`Всего сообщений: ${count}`)
// 	} else {
// 		console.log('Напишите сообщение')
// 	}
// }

// emitter.on('message', message)
// emitter.emit('message', 'Привет')
// emitter.emit('message', 'Как дела?')
// emitter.emit('message', 'Всё хорошо')
// emitter.emit('message', 'bla bla bla...')
// emitter.emit('message', 'bla bla bla...')
// emitter.removeAllListeners('message')
// emitter.emit('message', 'Всё хорошо')

// const readable = fs.createReadStream('./test/message.txt', {
// 	encoding: 'utf-8',
// highWaterMark: 16 // размер буфера (по 16 байт)
// })

// readable.on('data', chunk => {
// 	console.log(chunk)
// })

// readable.on('end', () => console.log('\nЧтения завершено'))

// const writable = fs.createWriteStream('./test/foo.txt')
// writable.write('Первая строка\n')
// writable.write('Вторая строка\n')
// writable.end('👉 Запись завершена\n')

// const copy = fs.createWriteStream('./test/package.txt')
// readable.pipe(copy)

// for (let i = 0; i < 10; i++) {
// 	fs.appendFile('./test/input.txt', 'datadatadatadata\n', err => {
// 		if (err) throw err
// 	})
// }

// const inputfile = fs.createReadStream('./test/input.txt', {
// 	encoding: 'utf-8',
// })

// inputfile.on('data', chunk => {
// 	if (chunk.length) {
// 		console.log(chunk)
// 		console.log(`Количество строк в файле: ${chunk.length}`)
// 	} else {
// 		console.log('Файл пуст')
// 		process.exit(0)
// 	}
// })

// inputfile.on('end', () => console.log('\nЧтения завершено'))

// const copyfile = fs.createWriteStream('./test/output.txt')

// inputfile.pipe(copyfile)

// const lengthFile = fs.createReadStream('./test/input.txt', {
// 	encoding: 'utf-8',
// })

// const appendFIle = fs.createWriteStream('./test/output.txt')

// lengthFile.on('data', chunk => {
// 	if (chunk.length) {
// 		let num = 0
// 		let chunks = chunk.split('\n')
// 		chunks.forEach(item => {
// 			if (item) {
// 				num++
// 				appendFIle.write(`${num}: ${item}\n`)
// 			}
// 		})
// 	} else {
// 		console.log('Файл пуст')
// 		process.exit(0)
// 	}
// })
