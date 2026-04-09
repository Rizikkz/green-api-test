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

### 1. Открыть проект в терминале

```bash
cd green-api-test
```
### 2. Установить зависимости

```bash
npm install
```
### 3. Запустить backend (первый терминал)
```bash
node server.js
```
Должно появиться:
`Server started on http://127.0.0.1:3000`  => ❗ Этот терминал не закрывать

### 4. Открыть второй терминал и запустить frontend
```bash
python3 -m http.server 8000
```
### 5. Открыть в браузере
```bash
http://localhost:8000
```

### 6. Ввести данные
```bash
idInstance
```
```bash
ApiTokenInstance
```
И нажать кнопку `getSettings`

## Проверка

Проект протестирован локально.
Метод getSettings успешно возвращает ответ от GREEN API со статусом 200 OK.

## Примечание

Для работы необходимо использовать реальные:
	•	idInstance
	•	ApiTokenInstance

    https://console.green-api.com/