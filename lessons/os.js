const os = require('os')

console.log('🖥️ Информация об операционной системе')
console.log('------------------------------------')
console.log('Платформа:', os.platform()) // linux, win32, darwin
console.log('Архитектура процессора:', os.arch()) // x64, arm и т.д.
console.log('Тип ОС:', os.type()) // Linux, Windows_NT и т.п.
console.log('Имя хоста:', os.hostname()) // Название машины
console.log('Домашняя директория:', os.homedir()) // /home/username или C:\Users\Name
console.log('Время работы системы (в секундах):', os.uptime())

console.log('\n🧠 Память')
console.log('Всего памяти (МБ):', (os.totalmem() / 1024 / 1024).toFixed(2))
console.log('Свободной памяти (МБ):', (os.freemem() / 1024 / 1024).toFixed(2))

console.log('\n🧩 Процессоры')
const cpus = os.cpus()
console.log(`Количество ядер: ${cpus.length}`)
cpus.forEach((cpu, index) => {
	console.log(`Ядро ${index + 1}: ${cpu.model} - ${cpu.speed} MHz`)
})

console.log('\n🌐 Сетевые интерфейсы')
const interfaces = os.networkInterfaces()
for (const name in interfaces) {
	for (const net of interfaces[name]) {
		if (net.family === 'IPv4' && !net.internal) {
			console.log(`Интерфейс ${name}: IP-адрес — ${net.address}`)
		}
	}
}
