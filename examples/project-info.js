const path = require('path')
const fs = require('fs')
const os = require('os')
let argv = process.argv.slice(2)
let inx = false
argv.indexOf('--help') === -1 ? (inx = false) : (inx = true)
const text = `
Использование:
  node project-info.js <url> <folder> [--add-param=ключ=значение]

Описание:
  Скрипт разбирает URL, выводит его части и query-параметры.
  Затем читает указанную папку и выводит все .txt файлы (с полными путями).
  В конце показывает информацию о вашей операционной системе.

Аргументы:
  <url>                 Любой URL (например "https://site.com/page")
  <folder>              Путь к папке, которую нужно прочитать
  --add-param=key=value (необязательно) Добавляет параметр к URL

Пример:
  node project-info.js "https://example.com/api?token=123" ./test --add-param=lang=en
		`

if (!argv.length || inx) {
	console.log(text)
	process.exit(0)
}

let URL_ARGV = new URL(argv[0])

argv.slice(2)?.forEach(item => {
	if (item.startsWith('--add-param')) {
		const [, kv] = item.split('--add-param=')
		const [k, v] = kv.split('=')
		URL_ARGV.searchParams.append(k, v)
	}
})

const parsed_url = {
	protocol: URL_ARGV.protocol,
	domen: URL_ARGV.hostname,
	path: URL_ARGV.pathname,
	query: URL_ARGV.search,
	parsed: URL_ARGV.href,
}
console.log(parsed_url)

fs.readdir(argv[1], (err, files) => {
	if (err) {
		console.log('Такой папки не существует')
		process.exit(0)
	}
	let count = 0
	files.forEach(item => {
		if (path.extname(item) === '.txt') {
			console.log(path.resolve(argv[1], item))
			count++
		}
	})
	console.log(`Количество файлов с расширением .txt ${count}`)
})

console.log(
	`
	Платформа: ${os.platform()}
	Архитектура: ${os.arch()}
	Число ядер: ${os.cpus().length}
	`
)
