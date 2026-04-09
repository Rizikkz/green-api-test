# GREEN API Test

Тестовое задание на позицию DevOps Engineer.

## Что реализовано

Разработана HTML-страница с вызовами методов GREEN API:

- getSettings
- getStateInstance
- sendMessage
- sendFileByUrl

На странице реализованы:

- ввод `idInstance`
- ввод `ApiTokenInstance`
- отдельные поля для отправки сообщения и файла
- вывод ответа API в отдельное поле только для чтения

## Архитектура решения

Из-за ограничений CORS прямые запросы из браузера к GREEN API блокировались, поэтому был реализован backend proxy на Node.js + Express.

Схема работы:

`Frontend (index.html) -> local backend (server.js) -> GREEN API`

## Структура проекта

- `index.html` — frontend страница
- `server.js` — backend proxy для запросов к GREEN API
- `package.json` — зависимости проекта
- `package-lock.json` — lock-файл npm

## Локальный запуск

### 1. Установить зависимости

```bash
npm install
node server.js
python3 -m http.server 8000
```
## Открыть в браузере

http://localhost:8000


## Проверка

Проект протестирован локально.
Метод getSettings успешно возвращает ответ от GREEN API со статусом 200 OK.

## Примечание

Для работы необходимо использовать реальные:
	•	idInstance
	•	ApiTokenInstance

    https://console.green-api.com/