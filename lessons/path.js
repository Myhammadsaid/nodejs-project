const path = require('path')

// const fullPath = '/Users/alex/project/src/index.js'

// console.log(path.basename(fullPath)) // 'index.js'
// console.log(path.dirname(fullPath)) // '/Users/alex/project/src'
// console.log(path.extname(fullPath)) // '.js'
// console.log(path.join(__dirname, 'data', '../logs/app.log'))
// // '/Users/alex/project/logs/app.log'
// console.log(path.join(__dirname, 'os', '..'))
// // D:\Backend\Node.js\lessons
// console.log(path.join(__dirname))
// // D:\Backend\Node.js\lessons
// console.log(path.join(__filename))
// // D:\Backend\Node.js\lessons\path.js
// console.log(path.resolve('src', './utils')) // Абсолютный путь от cwd

// Задача

const pathName = process.argv[2]

if (!pathName || pathName === '--help') {
	console.log(`
		Использование:
  node path-demo.js <путь_к_файлу>

Описание:
  Этот скрипт разбирает путь к файлу, выводит его имя, расширение и папку.
  Затем формирует новый путь к резервной копии с расширением .bak

Пример:
  node path-demo.js /home/user/data/info.txt

		`)
	process.exit(0)
}

const parsed = path.parse(pathName)
console.log(parsed)

console.log(`
	Имя файла: ${parsed.base}
	расширение: ${parsed.ext}
	родительскую папку: ${parsed.dir}
	Путь к резервной копии: ${path.join(parsed.dir, parsed.name + '.bak')}
	`)
