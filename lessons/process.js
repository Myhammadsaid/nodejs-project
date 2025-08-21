const dotenv = require('dotenv')
dotenv.config()

console.log('PORT:', process.env.PORT)
console.log('NODE_ENV:', process.env.NODE_ENV)
// Получение переменных окружения

console.log('Arguments:', process.argv)
// Аргументы командной строки

console.log('Текущая рабочая директория:', process.cwd())
// Текущая рабочая директория

console.log('ID процесса:', process.pid)
// ID процесса

// Обработка выхода
process.on('exit', code => {
	console.log(`Процесс завершён с кодом: ${code}`)
})

// Задача

let name = process.env.DEFAULT_NAME
let lang = process.env.DEFAULT_LANG

const args = process.argv.slice(2)

if (args.includes('--help')) {
	console.log(`
Использование:
  node greet.js --name=Имя --lang=язык

Аргументы:
  --name=<имя>   Имя пользователя (по умолчанию из .env или 'Гость')
  --lang=<язык>  Язык приветствия: en, ru, de (по умолчанию из .env)
`)
	process.exit(0)
}

args.forEach(item => {
	if (item.includes('--name=')) {
		name = item.split('=')[1]
	}
	if (item.includes('--lang=')) {
		lang = item.split('=')[1]
	}
})

switch (lang) {
	case 'en':
		console.log(`Hello, ${name}`)
		break
	default:
		console.log(`Привет, ${name}`)
		break
}
