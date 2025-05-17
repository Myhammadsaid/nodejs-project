// 📖 1. Readable Stream (Читаемый поток)

//	Читаемый поток используется для чтения данных. Например, можно читать файл, получать данные с сервера или даже данные от пользователя.

const fs = require('fs')
const { Readable } = require('stream')

// Создаём читаемый поток, чтобы читать данные из файла
// const readableStream = fs.createReadStream('notes/list.txt', { encoding: 'utf8' })

// Обрабатываем событие 'data', которое возникает при чтении данных
// readableStream.on('data', chunk => {
// console.log('Получили данные:', chunk) // chunk - это часть данных, которая пришла
// })

// Когда чтение завершено
// readableStream.on('end', () => {
// 	console.log('Чтение завершено!')
// })

// Задача

// 1. MyReadable Stream: Чтение из массива данных
class MyReadable extends Readable {
	constructor(data) {
		super()
		this.data = data
	}

	_read(size) {
		if (this.data.length === 0) {
			this.push(null) // Закрыть поток, когда данные закончились
		} else {
			this.push(this.data.shift()) // Отправить следующий элемент
		}
	}
}

// Тестирование
const readable = new MyReadable(['Hello', 'Stream', 'World'])
readable.on('data', chunk => {
	console.log('Полученные данные:', chunk.toString()) // Выводим данные
})
readable.on('end', () => {
	console.log('Чтение завершено!') // Поток завершён
})
