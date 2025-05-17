const EventEmitter = require('events')

class Logger extends EventEmitter {
	constructor(text) {
		super() // Нужно вызвать родительский конструктор
		this.text = text
	}

	log() {
		const time = par => {
			const date = new Date()
			console.log(
				`[${date.getFullYear()}-${
					date.getMonth() + 1
				}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] ${par}`
			)
		}

		// Подписываемся на событие 'desc'
		this.on('desc', time)

		// Генерируем событие 'desc'
		this.emit('desc', this.text)
	}
}

module.exports = Logger
