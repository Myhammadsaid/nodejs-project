// const { URL } = require('url')

// const myURL = new URL(
// 	'https://example.com:8080/path/page.html?user=alex&age=30#bio'
// )

// console.log(myURL.protocol) // 'https:'
// console.log(myURL.hostname) // 'example.com'
// console.log(myURL.port) // '8080'
// console.log(myURL.pathname) // '/path/page.html'
// console.log(myURL.search) // '?user=alex&age=30'
// console.log(myURL.hash) // '#bio'

// const params = myURL.searchParams
// for (const [key, value] of params) {
// 	console.log(key, value)
// }
// user alex
// age 30

//Задача

const rawUrl = process.argv[2]
const queArg = process.argv[3]

if (!rawUrl || rawUrl === '--help') {
	console.log(`
Использование:
  node url-demo.js <url> [--add-param=ключ=значение]

Описание:
  Скрипт разбирает URL, показывает его части и query-параметры.
  Можно добавить новый query-параметр через --add-param.

Пример:
  node url-demo.js "https://example.com/page?user=alex" --add-param=lang=ru
`)
	process.exit(0)
}

const baseUrl = new URL(rawUrl)

if (queArg?.startsWith('--add-param=')) {
	const value = queArg.replace('--add-param=', '').split('=')
	if (value.length === 2) {
		baseUrl.searchParams.set(value[0], value[1])
	}
}

console.log(
	`
			Протокол: ${baseUrl.protocol}
			Хост: ${baseUrl.hostname}
			Порт: ${baseUrl.port}
			Путь: ${baseUrl.pathname}
			Хэш: ${baseUrl.hash || 'нету'}
			query-параметры: 
	`
)
for (const [key, value] of baseUrl.searchParams) {
	console.log(`\t\t\t${key} = ${value}`)
}

console.log(`\nПолный URL: ${baseUrl}`)

const args = [
	'--env=production',
	'--config=db.json',
	'--verbose',
	'--config=server.json',
	'--mode=dev',
]
const res = []
args.forEach(item => {
	if (item.startsWith('--config=')) {
		const val = item.replace('--config=', '')
		res.push(val)
	}
})
console.log(res)
