const os = require('os')

console.log('🖥️ Информация об операционной системе')
console.log('------------------------------------')
console.log('Платформа:', os.platform()) // linux, win32, darwin
console.log('Архитектура процессора:', os.arch()) // x64, arm и т.д.
console.log('Тип ОС:', os.type()) // Linux, Windows_NT и т.п.
console.log('Имя хоста:', os.hostname()) // Название машины

console.log('\n🧩 Процессоры')
const cpus = os.cpus()
console.log(`Количество ядер: ${cpus.length}`)
cpus.forEach((cpu, index) => {
	console.log(`Ядро ${index + 1}: ${cpu.model} - ${cpu.speed} MHz`)
})
