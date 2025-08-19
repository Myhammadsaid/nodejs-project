const path = require('path')
const dotenv = require('dotenv')
const fs = require('fs')
dotenv.config()

// console.log(process.pid)

// const str = process.argv.slice(2)
// console.log(str)

// console.log(path.join(__dirname, 'sayt', 'yaratiw', 'uz'))
// console.log(path.join(__filename, 'sayt', 'yaratiw', 'uz'))

// const fullPath = path.resolve(__dirname, 'first', 'second', 'third.js')
// console.log(path.parse(fullPath))

// const siteURL = 'http://localhost:5000/users?id=4'
// const url = new URL(siteURL)
// console.log(url)

// const PORT = process.env.PORT
// const SERVER_HOST = process.env.SERVER_HOST
// const STATIC_DIR = process.env.STATIC_DIR

// const FULL_URL = `http://${SERVER_HOST}:${PORT}/${STATIC_DIR}/index.html`
// const FULL_PATH = path.resolve(__dirname, STATIC_DIR, 'index.html')
// const NEW_URL = new URL(FULL_URL)
// const NEW_PATH = path.parse(FULL_PATH)
// const PID = process.pid
// const ARGV = process.argv.slice(2)

// const UBJECT = {
// 	PID: PID,
// 	Arguments: ARGV,
// 	Server_URL: NEW_URL,
// 	Path_Info: NEW_PATH,
// }

// console.log(UBJECT)

// fs.mkdirSync(path.resolve(__dirname, 'dir'))

// fs.mkdirSync(path.resolve(__dirname, 'dir1', 'dir2', 'dir3'), {
// 	recursive: true,
// })

// fs.mkdir(path.resolve(__dirname, 'dir'), err => {
// 	if (err) {
// 		console.log(err)
// 		return
// 	}
// 	console.log('Папка создан')
// })

// fs.rmdir(path.resolve(__dirname, 'dir'), err => {
// 	if (err) {
// 		console.log(err)
// 		return
// 	}
// 	console.log('Папка удалена')
// })

// fs.writeFile(
// 	path.resolve(__dirname, 'test.txt'),
// 	'sdasdas asd 123 \n sad',
// 	err => {
// 		if (err) {
// 			console.log(err)
// 			return
// 		}
// 		console.log('Файл создан')
// 	}
// )

// fs.appendFile(
// 	path.resolve(__dirname, 'test.txt'),
// 	'sdasdas asd 123 \n sad',
// 	err => {
// 		if (err) {
// 			console.log(err)
// 			return
// 		}
// 		console.log('Файл обновлен')
// 	}
// )

const asyncWriteFile = async (path, data) => {
	return new Promise((resolve, reject) =>
		fs.writeFile(path, data, err => {
			if (err) {
				return reject(err.message)
			}
			resolve()
		})
	)
}

const asyncAppendFile = async (path, data) => {
	return new Promise((resolve, reject) =>
		fs.appendFile(path, data, err => {
			if (err) {
				return reject(err.message)
			}
			resolve()
		})
	)
}

const asyncReadFile = path => {
	return new Promise((resolve, reject) =>
		fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
			if (err) {
				return reject(err.message)
			}
			resolve(data)
		})
	)
}

const asyncRemoveFile = path => {
	return new Promise((resolve, reject) =>
		fs.rm(path, err => {
			if (err) {
				return reject(err.message)
			}
			resolve()
		})
	)
}

// asyncWriteFile(path.resolve(__dirname, 'text.txt'), 'data')
// 	.then(() => asyncAppendFile(path.resolve(__dirname, 'text.txt'), '123'))
// 	.then(() => asyncAppendFile(path.resolve(__dirname, 'text.txt'), '345'))
// 	.then(() => asyncAppendFile(path.resolve(__dirname, 'text.txt'), '678'))
// 	.then(() => asyncReadFile(path.resolve(__dirname, 'text.txt')))
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))

// asyncRemoveFile(path.resolve(__dirname, 'text.txt')).then(() =>
// 	console.log('Файл удален')
// )

const text = process.env.TEXT || process.argv.slice(2).join(' ')

const writeFile = (path, data) => {
	return new Promise((resolve, reject) =>
		fs.writeFile(path, data, err => {
			if (err) {
				return reject(err.message)
			}
			resolve()
		})
	)
}

const readFile = path => {
	return new Promise((resolve, reject) =>
		fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
			if (err) {
				return reject(err.message)
			}
			resolve(`Кол-во слов ${data.split(' ').length}`)
		})
	)
}

const newFile = (path, data) => {
	return new Promise((resolve, reject) =>
		fs.writeFile(path, data, err => {
			if (err) {
				return reject(err.message)
			}
			resolve()
		})
	)
}

const removeFile = path => {
	return new Promise((resolve, reject) =>
		fs.rm(path, err => {
			if (err) {
				reject(err.message)
			}
			resolve()
		})
	)
}

// writeFile(path.resolve(__dirname, 'example.txt'), text)
// 	.then(() => readFile(path.resolve(__dirname, 'example.txt')))
// 	.then(data => newFile(path.resolve(__dirname, 'count.txt'), data))
// 	.then(() => removeFile(path.resolve(__dirname, 'example.txt')))
// 	.catch(err => console.log(err))

const os = require('os')

// const cpus = os.cpus().length

// for (let i = 0; i < cpus.length - 2; i++) {
// 	const CPUcore = cpus[i]
// 	console.log('Запустить еще один nodejs процесс')
// }

// console.log(process.pid)

// const Emitter = require('events')
// const { resolveObjectURL } = require('buffer')

// const emitter = new Emitter()

// const MESSAGE = process.env.MESSAGE || ''

// const callback = (first, second, third) => {
// 	console.log('Вы присалали сообщение ' + first)
// 	console.log('Второй аргумент ' + second)
// }

// emitter.once('senpai', callback)

// emitter.on('senpai', callback)
// emitter.on('senpai', callback)
// emitter.on('senpai', callback)

// emitter.removeListener('senpai', callback)

// if (MESSAGE) {
// 	emitter.emit('senpai', MESSAGE, 1234)
// } else {
// 	emitter.emit('senpai', 'Вы не указали сообщение.')
// }

{
	/*************************************/
}

// const stream = fs.createReadStream(path.resolve(__dirname, 'list.txt'))
// const stream = fs.createReadStream(path.resolve(__dirname, 'list.txt'), {encoding: 'utf-8'})

// stream.on('data', chunk => {
// 	console.log(chunk)
// })

// stream.on('close', () => console.log('Закончили читать'))
// stream.on('open', () => console.log('Начали читать'))
// stream.on('error', err => console.log(err))

{
	/*************************************/
}

// const writableStream = fs.createWriteStream(
// 	path.resolve(__dirname, 'list2.txt')
// )

// for (let i = 0; i < 20; i++) {
// 	writableStream.write(i + '\n')
// }
// writableStream.end()

{
	/***************************************************************** */
}

// const test = () => {
// 	console.log('Hello, World!')
// }

// emitter.once('test', test)
// emitter.emit('test', test)

// const argv = process.argv[2]
// const paths = path.resolve(__dirname, 'file', 'text.txt')
// const url = new URL(argv)

// console.log(path.parse(paths))
// console.log(url)

// const dir = path.resolve(__dirname, 'lessons')

// fs.readdir(dir, (err, files) => {
// 	if (err) {
// 		console.log(err)
// 		return
// 	}
// 	let count = 0
// 	files.forEach(item => {
// 		if (path.extname(item) === '.txt') {
// 			count++
// 		}
// 	})
// 	console.log(count)
// })

// const ReadFolder = dir => {
// 	return new Promise((resolve, reject) =>
// 		fs.readdir(dir, (err, files) => {
// 			if (err) {
// 				return reject(err.message)
// 			}
// 			let count = 0
// 			files.forEach(item => {
// 				if (path.extname(item) === '.txt') {
// 					count++
// 				}
// 			})
// 			resolve(count)
// 		})
// 	)
// }

// ReadFolder(path.resolve(__dirname, 'lessons')).then(result =>
// 	console.log(result)
// )

// const cpus = os.cpus().length
// const all__memory = (os.totalmem() / 1024 / 1024).toFixed(2)
// const free__memory = (os.freemem() / 1024 / 1024).toFixed(2)
// const platform = os.platform()
// const arch = os.arch()
// const object = {
// 	'количество ядер': cpus,
// 	'свободная память': free__memory,
// 	'общая память': all__memory,
// 	'информация о платформе и архитектуре': platform + ' ' + arch,
// }
// console.log(object)

// const Emmiter = require('events')
// const emmiter = new Emmiter()

// const high = () => {
// 	console.log('Число слишком высокая остановливаем поток')
// 	clearInterval(timer)
// }

// emmiter.on('high', high)

// const random__data = () => {
// 	let random = Math.random().toFixed(1)
// 	if (random == 0.9) {
// 		return emmiter.emit('high', high)
// 	}
// 	console.log(random)
// }

// const timer = setInterval(() => {
// 	emmiter.once('random', random__data)
// 	emmiter.emit('random', random__data)
// }, 1000)

// const { Readable } = require('stream')
// const readable = new Readable({
// 	read() {},
// })

// let count = 1

// const time = setInterval(() => {
// 	readable.push(`Data Chunk #${count++}`)
// 	if (count > 5) {
// 		readable.push(null)
// 		clearInterval(time)
// 	}
// }, 1000)

// readable.on('data', chunk => {
// 	console.log(chunk.toString())
// })

// readable.on('end', () => {
// 	console.log('Поток остоновлен')
// })

// const writableStream = fs.createWriteStream(
// 	path.resolve(__dirname, 'output.txt')
// )

// readable.pipe(writableStream)
