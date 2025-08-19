// 📁 Работа с файлами в Node.js (fs):

// Node.js предоставляет модуль fs для взаимодействия с файлами и папками. Он работает в двух вариантах:

//     Синхронные методы (fs.writeFileSync, fs.readFileSync и т.д.)

//     Асинхронные методы (fs.writeFile, fs.readFile и т.д., с колбэками или промисами)

const fs = require('fs')

//  1. Создание или перезапись файла
fs.writeFile('notes/example.txt', 'Hello, Node.Js!', err => {
	if (err) throw err
	console.log('Файл создан или перезаписан!')
})

//  2. Чтение файла
fs.readFile('notes/example.txt', 'utf-8', (err, data) => {
	if (err) throw err
	console.log('Содержимое файла:', data)
})

//  3. Добавление в файл (append)
fs.appendFile('notes/example.txt', '\n Добавленная строка', err => {
	if (err) throw err
	console.log('Данные добавлены в файл')
})

//  4. Удаление файла
// fs.unlink('notes/example.txt', err => {
// 	if (err) throw err
// 	console.log('Файл удалён')
// })

//  📂 Работа с папками:

//  Создание папки
// fs.mkdir('example', err => {
// 	if (err) throw err
// 	console.log('Папка создан')
// })

// Чтения папки
fs.readdir('notes', (err, list) => {
	if (err) throw err
	console.log('Список файлов:')
	list.forEach(files => {
		console.log(`-${files}`)
	})
})

//  Удаление папки
// fs.rmdir('example', err => {
// 	if (err) throw err
// 	console.log('Папка удалён')
// })
