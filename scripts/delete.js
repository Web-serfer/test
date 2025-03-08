// скрипт для удаления программно созданных файлов и папок
const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");

// Получаем путь из аргументов командной строки
const targetPath = process.argv[2];

if (!targetPath) {
  console.error("Ошибка: укажите путь к файлу или папке для удаления.");
  console.log("Примеры:");
  console.log("  npm run delete -- ./app/components           # Удалить папку");
  console.log("  npm run delete -- ./app/components/Button.js # Удалить файл");
  process.exit(1);
}

// Формируем полный путь
const fullPath = path.resolve(targetPath);

// Проверяем, существует ли файл/папка
if (fs.existsSync(fullPath)) {
  const stats = fs.statSync(fullPath); // Получаем информацию о файле/папке

  if (stats.isFile()) {
    console.log(`Удаление файла: ${fullPath}`);
    fs.unlinkSync(fullPath); // Удаляем файл
    console.log(`Файл успешно удалён: ${fullPath}`);
  } else if (stats.isDirectory()) {
    console.log(`Удаление папки: ${fullPath}`);
    try {
      rimraf.sync(fullPath); // Удаляем папку и всё её содержимое
      console.log(`Папка успешно удалена: ${fullPath}`);
    } catch (error) {
      console.error(`Ошибка при удалении папки: ${error.message}`);
    }
  } else {
    console.error(`Ошибка: "${fullPath}" не является ни файлом, ни папкой.`);
    process.exit(1);
  }
} else {
  console.error(`Ошибка: файл/папка не найдены: ${fullPath}`);
  process.exit(1);
}
