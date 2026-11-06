# Astro + Tailwind CSS + React

Стартовый проект для сайта на **Astro** с **Tailwind CSS 4** и **React 19**.

- Статическая генерация и минимум JavaScript по умолчанию.
- Tailwind CSS 4 через официальный Vite-плагин (без `tailwind.config.*`).
- React-компоненты подключаются как острова (`client:*`), когда нужна интерактивность.
- Строгий TypeScript, Prettier и автоматическая сортировка Tailwind-классов.

## Требования

- **Node.js** `>= 22.23.4` (рекомендуется актуальный LTS).
- **npm** `>= 9.6.5`.

## Установка и запуск

```bash
npm install
npm run dev
```

Dev-сервер: <http://localhost:4321>

## Команды

| Команда                | Что делает                                          |
| :--------------------- | :-------------------------------------------------- |
| `npm run dev`          | Запускает dev-сервер с горячей перезагрузкой        |
| `npm run build`        | Собирает production-версию в `dist/`                |
| `npm run preview`      | Локально предпросматривает собранный сайт           |
| `npm run check`        | Проверяет типы и `.astro`-файлы через `astro check` |
| `npm run format`       | Форматирует проект Prettier                         |
| `npm run format:check` | Проверяет форматирование без изменений              |
| `npm run verify`       | Полная проверка: формат + типы + production-сборка  |
| `npm run astro -- ...` | Любая команда Astro CLI, например `astro add`       |

Перед завершением задачи запускайте:

```bash
npm run verify
```

## Структура проекта

```text
/
├── public/                  # статические файлы (иконки, изображения)
├── src/
│   ├── components/          # Astro- и React-компоненты
│   │   ├── Counter.tsx      # пример React-острова
│   │   └── FeatureCard.astro
│   ├── layouts/
│   │   └── Layout.astro     # базовый HTML-каркас и метаданные
│   ├── pages/
│   │   └── index.astro      # маршрут "/"
│   └── styles/
│       └── global.css       # Tailwind и глобальные стили
├── astro.config.mjs
├── prettier.config.mjs
└── tsconfig.json
```

Файлы в `src/pages/` становятся маршрутами: `src/pages/about.astro` → `/about`.
Динамические маршруты — `src/pages/blog/[slug].astro`.

## Tailwind CSS 4

Tailwind подключён двумя файлами:

1. `astro.config.mjs` — плагин Vite:

   ```js
   import tailwindcss from '@tailwindcss/vite';

   export default defineConfig({
     vite: { plugins: [tailwindcss()] },
   });
   ```

2. `src/styles/global.css` — импорт Tailwind и дизайн-токены:

   ```css
   @import 'tailwindcss';

   @theme {
     --font-sans: ui-sans-serif, system-ui, sans-serif;
   }
   ```

Отдельный `tailwind.config.js` не нужен: тема настраивается через `@theme`,
а пути к контенту Tailwind 4 определяет автоматически.

### Соглашения по стилям

- Стилизуйте компоненты утилитами прямо в разметке.
- Повторяющиеся наборы классов выносите в Astro- или React-компонент, а не в `@apply`.
- `@apply` используйте только для глобальных базовых стилей.
- Порядок классов поддерживает `prettier-plugin-tailwindcss` — запускайте `npm run format`.
- Mobile-first: базовые классы для мобильных, затем `sm:`, `md:`, `lg:`.
- Тёмная тема работает через `prefers-color-scheme` и классы `dark:`.

## React-острова

React-компонент — обычный `.tsx`-файл. Чтобы он стал интерактивным, добавьте директиву
гидратации:

```astro
---
import Counter from '../components/Counter.tsx';
---

<Counter client:visible />
```

| Директива        | Когда загружается JavaScript                |
| :--------------- | :------------------------------------------ |
| `client:load`    | Сразу после загрузки страницы               |
| `client:idle`    | Когда браузер свободен                      |
| `client:visible` | Когда компонент появляется в зоне видимости |
| `client:only`    | Только на клиенте, без серверного HTML      |

Не добавляйте `client:*` без необходимости: статический HTML быстрее и проще.

## Полезные ссылки

- [Документация Astro](https://docs.astro.build)
- [Документация Tailwind CSS](https://tailwindcss.com/docs)
- [React в Astro](https://docs.astro.build/en/guides/integrations-guide/react/)
