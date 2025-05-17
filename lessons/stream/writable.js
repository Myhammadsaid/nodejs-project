// ✏️ 2. Writable Stream (Записываемый поток)

//	Записываемый поток используется для записи данных. Например, можно записывать данные в файл или отправлять их в ответ клиенту на сервере.

const fs = require('fs')
const { Writable } = require('stream')

// Создаём записываемый поток, чтобы записывать данные в файл
// const writableStream = fs.createWriteStream('output.txt')

// Записываем данные в поток
// writableStream.write('Hello, world!\n')
// writableStream.write('Записываем ещё одну строку\n')

// Закрываем поток
// writableStream.end('Запись завершена.')

// Обрабатываем завершение записи
// writableStream.on('finish', () => {
// console.log('Данные успешно записаны!')
// })

class MyWritable extends Writable {
	constructor() {
		super()
	}

	_write(chunk, encoding, callback) {
		fs.writeFile(
			'notes/output.txt',
			chunk.toString() + '\n',
			{ flag: 'a' },
			err => {
				if (err) throw err
			}
		)
		callback()
	}
}

const writable = new MyWritable()
writable.write('Hello, World!')
writable.end('Зпись завершена!')
writable.on('finish', () => console.log('Данный успешно записанны'))
