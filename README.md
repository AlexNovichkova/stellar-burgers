# Проектная работа Mesto

---

**Stellar Burgers** — это космическая бургерная, где каждая форма жизни может заказать бургер своей мечты. Через веб-приложение пользователи могут собирать бургеры из ингредиентов, просматривать ленту заказов и управлять своим профилем. Приложение построено с использованием React, Redux, React Router и интеграции с API.

<img width="657" alt="Stellar" src="https://github.com/user-attachments/assets/2adb8cfd-9c12-4a33-a1c6-0ee919299f82" />


**Стек:** React, Redux, Node.js, TypeScript, Cypress, Jest

---

## Что сделала

1. Реализовала маршрутизацию с использованием React Router, включая динамические и защищенные маршруты.
2. Настроила авторизацию пользователей.
3. Разработала интерфейс редактирования данных пользователя с функцией отмены и сохранения изменений.
4. Организовала обновление данных о заказах в реальном времени через WebSocket.
5. Написала интеграционные тесты с использованием Cypress для проверки модальных окон, конструктора бургеров и создания заказов.
6. Написала unit-тесты для Redux-слайсов с использованием Jest, проверяя обработку экшенов и изменение состояния.

---

1. Создание и удаление карточек

- Написана функция создания карточки, принимающая данные одной карточки и колбэк для удаления.
- Карточки генерируются через шаблон #card-template и добавляются в контейнер .places\_\_list.
- Реализована функция удаления карточки, вызываемая из обработчика клика по иконке.

2. Настройка Webpack

- Инициализирован npm, установлены webpack, webpack-cli, webpack-dev-server.
- Настроены сборки:
  - build: пересоздаёт папку dist с собранным проектом.
  - dev: запускает проект на локальном сервере.
  - deploy: развернуть содержимое папки dist на GitHub Pages.
- Минификация и транспиляция JavaScript через Babel.
- Подключение CSS через Webpack, включая минификацию и вендорные префиксы.
- Обработка изображений, шрифтов и HTML.

3. Работа модальных окон

- Открытие и закрытие попапов при клике на кнопки или крестики.
- Возможность закрывать попап кликом на оверлей или нажатием клавиши Esc.

4. Редактирование профиля

- Поля формы заполняются текущими данными пользователя при открытии.
- Обновление данных профиля при отправке формы и их отображение на странице.

5. Добавление новых карточек

- Реализована форма для добавления карточек.
- При добавлении новой карточки она отображается в начале списка, форма очищается, и попап закрывается.

6. Лайки и просмотр изображений

- Лайк карточек меняет цвет и сохраняется в данных.
- Просмотр увеличенного изображения по клику на карточку.

7. Валидация форм «Редактировать профиль» и «Новое место»

- Проверка длины текстовых полей, формат ссылки.
- При ошибках отображаются сообщения, кнопка «Сохранить» блокируется.

---

## Установка и запуск

Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

## Сборка

```
npm run build
```

## Тесты

### Тесты Jest

```
npm run test
```

### Интеграционные тесты Cypress

```
npm run cypress
```

---

## Архитектура приложения

### Состояние

Состояние приложения управляется через Redux с использованием `@reduxjs/toolkit`. Данные получаются из API и сохраняются в Redux Store. Используются `createSlice` и `createAsyncThunk` для управления состоянием и асинхронными запросами.

### Компоненты

Проект разбит на функциональные компоненты:

- `ConstructorPage` — отображает ингредиенты и сборку бургера.

- `Feed` — показывает ленту заказов с реальным обновлением.

- `Profile` — позволяет пользователям редактировать свои данные.

- `IngredientDetails` — модальное окно с описанием ингредиента.

- `OrderInfo` — отображает подробности заказа.

---

## Тестирование

Проект покрыт юнит-тестами (Jest) и интеграционными тестами (Cypress).

### Юнит-тесты

- Тестирование `rootReducer`.
- Проверка редьюсеров:
  - Добавление, удаление ингредиентов, изменение порядка ингредиентов в constructor.
  - Обработка запросов API в ingredients (успех, ошибка, загрузка).

### Интеграционные тесты (Cypress)

- Тестирование конструктора бургера:
  - Добавление булки и начинки.
  - Открытие/закрытие модальных окон ингредиентов.
- Тестирование создания заказа:
  - Переход по маршруту `/feed`.
  - Проверка отображения заказа в модальном окне.
  - Очистка конструктора после оформления заказа.

---

## Функциональные возможности

####Навигация и маршруты

Приложение включает следующие маршруты:

- `/` — Главная страница с конструктором бургеров (компонент `ConstructorPage`).

- `/feed` — Лента заказов, доступная всем пользователям (компонент `Feed`).

- `/ingredients/:id` — Страница ингредиента с модальным окном (компоненты `IngredientDetails` и `Modal`).

- `/profile` — Личный кабинет пользователя, доступный только авторизованным пользователям (компонент `Profile`).

- `/profile/orders` — История заказов, доступная только авторизованным пользователям (компонент `ProfileOrders`).

- `/profile/orders/:number` — Подробности заказа в личном кабинете (компоненты `OrderInfo` и `Modal`).

- `/feed/:number` — Подробности заказа в ленте заказов (компоненты `OrderInfo` и `Modal`).

- `/login` — Авторизация (компонент `Login`).

- `/register` — Регистрация (компонент `Register`).

- `/forgot-password` — Восстановление пароля (компонент `ForgotPassword`).

- `/reset-password` — Сброс пароля (компонент `ResetPassword`).

- `*` — Страница 404 (компонент `NotFound404`).

---

