# restaurantesapi-front

Aplicación web para la gestión de restaurantes, desarrollada con **React**, **TypeScript** y **Vite**. Permite autenticación, listado, creación, edición y eliminación de restaurantes mediante una API REST.

## Características

- Autenticación de usuario.
- Listado de restaurantes con paginación y edición.
- Añadir, modificar y eliminar restaurantes.
- Interfaz moderna con **TailwindCSS** y componentes de **MUI**.
- Notificaciones con **react-toastify**.
- Gestión de estado global con **React Context**.

## Estructura del proyecto

```
src/
  api/              # Utilidades para llamadas HTTP (APIUtils.ts)
  assets/           # Imágenes y recursos estáticos
  components/       # Componentes reutilizables (Header, Table, Modal, etc.)
  config/           # Configuración de Axios y constantes
  contexto/         # Contextos de React (LoadContext)
  hooks/            # Custom hooks (useLoad, useModal)
  pages/            # Páginas principales (Login, Home)
  types.d.ts        # Tipos TypeScript globales
  App.tsx           # Componente principal
  main.tsx          # Punto de entrada
```

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/restaurantesapi-front.git
   cd restaurantesapi-front
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Configura las variables de entorno en `.env`:
   ```
   VITE_API_URL=http://localhost/restaurantsapi-back/public/api
   ```

## Scripts

- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Compila la aplicación para producción.
- `npm run preview` — Previsualiza la build de producción.
- `npm run lint` — Ejecuta ESLint.

## Uso

1. Inicia el backend de la API en la URL configurada.
2. Ejecuta la app:
   ```sh
   npm run dev
   ```
3. Accede a [http://localhost:5173](http://localhost:5173) (o el puerto indicado por Vite).
4. Inicia sesión con las credenciales proporcionadas en el placeholder.

## Dependencias principales

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [MUI](https://mui.com/)
- [Axios](https://axios-http.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [React Modal](https://reactcommunity.org/react-modal/)
- [React Router DOM](https://reactrouter.com/)

## Autor

Donato Marino
