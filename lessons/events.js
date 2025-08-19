const Emitter = require('events')

const emitter = new Emitter()

const callback = (data, second, third) => {
	console.log('Вы прислали сообщение ' + data)
	console.log('Второй аргумент ' + second)
}

emitter.once('message', callback)

emitter.emit('message', 'Привет', '2')
emitter.emit('message')
emitter.emit('message')
emitter.emit('message')
emitter.emit('message')

emitter.removeAllListeners()
emitter.removeListener('message', callback)

const MESSAGE = process.env.message || ''

if (MESSAGE) {
	emitter.emit('message', MESSAGE, 123)
} else {
	emitter.emit('message', 'Вы не указали сообщение')
}

// Когда удобно использовать?
// http
// websockets
// long pulling
// clusters

// 🔁 emitter.on — постоянная подписка на событие
function слушатель1(сообщение) {
	console.log('🟢 Слушатель 1 получил:', сообщение)
}
emitter.on('сообщение', слушатель1)

// 🔂 emitter.once — только один раз
emitter.once('сообщение', сообщение => {
	console.log('🔵 Слушатель 2 (once) получил:', сообщение)
})

// ✅ emitter.emit — вызывает (испускает) событие
console.log('\n👉 Первый вызов события')
emitter.emit('сообщение', 'Привет в первый раз')

console.log('\n👉 Второй вызов события')
emitter.emit('сообщение', 'Привет во второй раз')

// ❌ emitter.off — отписка от события
emitter.off('сообщение', слушатель1)

console.log('\n👉 Третий вызов события (после отписки)')
emitter.emit('сообщение', 'Привет в третий раз')

// 📊 emitter.listenerCount — сколько подписчиков осталось
const количество = emitter.listenerCount('сообщение')
console.log('\n👥 Подписчиков на "сообщение":', количество)

const Logger = require('./logger')
const logger = new Logger('Сервер запущен')
logger.log()
