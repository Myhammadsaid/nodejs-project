const fs = require('fs')
const fs_promises = require('fs/promises')
const path = require('path')

const argv = process.argv.slice(2)

const NOTES_DIR = 'notes'

async function run() {
	switch (argv[0]) {
		case 'add':
			try {
				await fs_promises.mkdir(NOTES_DIR, { recursive: true }) // создаёт, если нет
				const filePath = path.join(NOTES_DIR, `${argv[1]}.txt`)
				await fs_promises.writeFile(filePath, argv[2])
				console.log('Заметка создана')
			} catch (err) {
				console.error('Ошибка при добавлении заметки:', err)
			}
			break

		case 'read':
			try {
				const filePath = path.join(NOTES_DIR, `${argv[1]}.txt`)
				const data = await fs_promises.readFile(filePath, 'utf-8')
				console.log('Содержимое:', data)
			} catch (err) {
				console.error('Ошибка при чтении файла:', err.message)
			}
			break

		case 'uppdate': // опечатка! Лучше 'update'
			try {
				const filePath = path.join(NOTES_DIR, `${argv[1]}.txt`)
				await fs_promises.appendFile(filePath, argv[2])
				console.log('Заметка обновлена')
			} catch (err) {
				console.error('Ошибка при обновлении:', err.message)
			}
			break

		case 'delete':
			try {
				const filePath = path.join(NOTES_DIR, `${argv[1]}.txt`)
				await fs_promises.unlink(filePath)
				console.log('Заметка удалена')
			} catch (err) {
				console.error('Ошибка при удалении:', err.message)
			}
			break

		case 'list':
			try {
				const files = await fs_promises.readdir(NOTES_DIR)
				console.log('Список заметок:')
				files.forEach(file => console.log('- ' + file))
			} catch (err) {
				console.error('Ошибка при чтении папки:', err.message)
			}
			break

		default:
			console.log('Неизвестная команда')
	}
}

run()
