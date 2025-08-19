const { Readable, Writable } = require('stream')
const fs = require('fs')

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

class MyWritable extends Writable {
	constructor() {
		super()
	}

	_write(chunk, encoding, callback) {
		fs.writeFileSync(
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

const readable = new MyReadable(['Hello', 'Stream', 'World'])
const writable = new MyWritable()
readable.pipe(writable)
