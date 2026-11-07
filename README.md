# Доверка — лендинг переводов

Одностраничный лендинг на **Astro 7**, **Tailwind CSS 4** и готовой React-интеграцией.

Макет: фрейм `6004:24947` из Figma, десктопная версия с резиновым масштабированием
до планшетных ширин.

## Стек

- Astro 7 — статическая генерация;
- Tailwind CSS 4 — утилиты и дизайн-токены;
- React 19 + `@astrojs/react` — подключены для будущих интерактивных островов
  (текущая страница полностью статическая);
- TypeScript strict;
- ESLint 10, Prettier, `astro check`.

## Требования

- Node.js `>= 22.23.4` (рекомендуется актуальный LTS);
- npm `>= 9.6.5`.

## Установка и запуск

```bash
npm install
npm run dev
```

Dev-сервер: <http://localhost:4321>

## Команды

| Команда                | Что делает                                    |
| :--------------------- | :-------------------------------------------- |
| `npm run dev`          | Dev-сервер с горячей перезагрузкой            |
| `npm run build`        | Production-сборка в `dist/`                   |
| `npm run preview`      | Локальный предпросмотр собранного сайта       |
| `npm run check`        | Проверка типов и `.astro` через `astro check` |
| `npm run lint`         | Проверка кода ESLint                          |
| `npm run lint:fix`     | Автоисправление ошибок ESLint                 |
| `npm run format`       | Форматирование Prettier                       |
| `npm run format:check` | Проверка форматирования                       |
| `npm run verify`       | Формат + линтер + типы + сборка               |
| `npm run astro -- ...` | Любая команда Astro CLI, например `astro add` |

Перед завершением задачи:

```bash
npm run verify
```

## Структура

```text
/
├── public/                     # favicon и статические файлы
├── src/
│   ├── assets/                 # ассеты, экспортированные из Figma
│   │   ├── card.png            # банковская карта
│   │   ├── mockup.png          # телефон + рука
│   │   ├── phone-screen.png    # UI экрана приложения
│   │   ├── hero-gradient.svg   # градиент фона
│   │   ├── bg-shadow-*.svg     # слои теней фона
│   │   ├── icon-*.svg          # иконки преимуществ
│   │   ├── store-*.svg         # иконки магазинов приложений
│   │   ├── google-pay.svg
│   │   ├── apple-pay.svg
│   │   └── visa-box.png        # логотип Visa вместе с плашкой
│   │   └── fonts/              # Euclid Circular A (self-hosted woff)
│   ├── components/
│   │   ├── Background.astro    # фон: градиент и тени
│   │   ├── Hero.astro          # заголовок, телефон, преимущества, кнопки
│   │   ├── PhoneMockup.astro   # телефон + экран
│   │   ├── FeatureItem.astro   # преимущество с иконкой
│   │   ├── StoreButton.astro   # кнопка магазина приложений
│   │   └── CardSection.astro   # блок «Получи карту»
│   ├── layouts/
│   │   └── Layout.astro        # HTML-каркас, метаданные, шрифт
│   ├── pages/
│   │   └── index.astro         # лендинг
│   └── styles/
│       └── global.css          # импорт Tailwind и шрифта, тема
├── astro.config.mjs
├── eslint.config.mjs
├── prettier.config.mjs
└── tsconfig.json
```

## Как собран макет

- **Фон hero** — точный SVG-градиент из Figma (`hero-gradient.svg`) и слои теней
  (`bg-shadow-large.svg`, `bg-shadow-small.svg`).
- **Телефон** — два слоя: `mockup.png` (рука и корпус) и `phone-screen.png`
  (интерфейс приложения). Позиция экрана задана процентами относительно корпуса,
  поэтому композиция масштабируется вместе с блоком.
- **Карта** — `card.png` с прозрачностью; тень — через Tailwind `drop-shadow`.
- **Свечение карточного блока** — радиальные градиенты и `blur` в разметке.
- **Иконки и логотипы** — SVG/PNG из Figma, без ручной перерисовки. Visa скачана
  сразу с плашкой (`visa-box.png`), как Google Pay и Apple Pay.
- **Шрифт** — Euclid Circular A, файлы `.woff` лежат в `src/assets/fonts/` и
  подключаются через `@font-face`; из интернета ничего не грузится.
- **Вёрстка** — pixel-perfect артборд 1920×2106 на чистых Tailwind-утилитах.
  Координаты и размеры из Figma умножаются на `var(--px)` (где `--px: 1px`); мобильной
  версии пока нет.

## Tailwind CSS 4

Tailwind подключён через `@tailwindcss/vite` в `astro.config.mjs` и импортируется
в `src/styles/global.css`:

```css
@import 'tailwindcss';

@theme {
  --font-sans: 'Euclid Circular A', ui-sans-serif, system-ui, sans-serif;
}
```

`tailwind.config.js` не нужен: тема настраивается через `@theme`, контент
определяется автоматически. Порядок классов сортирует
`prettier-plugin-tailwindcss` при `npm run format`.

## Изображения

Все растровые ассеты проходят через `astro:assets` (`<Image />`): Astro генерирует
WebP и `srcset` под нужные размеры. SVG импортируются как URL и отдаются как есть.

## Линтеры и форматирование

- ESLint 10 + `typescript-eslint`, `eslint-plugin-astro`, `@eslint-react`,
  `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y-x`;
- Prettier + `prettier-plugin-astro` + `prettier-plugin-tailwindcss`;
- `eslint-config-prettier` отключает конфликтующие правила.

## Полезные ссылки

- [Документация Astro](https://docs.astro.build)
- [Документация Tailwind CSS](https://tailwindcss.com/docs)
- [React в Astro](https://docs.astro.build/en/guides/integrations-guide/react/)
