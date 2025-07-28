# 🍽️ Restaurant API - Frontend

Aplicación web para la gestión de restaurantes, desarrollada con **React**, **TypeScript** y **Vite**. Permite autenticación JWT, listado, creación, edición y eliminación de restaurantes mediante una API REST.

## ✨ Características

- 🔐 **Autenticación JWT** con login seguro
- 📋 **Gestión completa de restaurantes** (CRUD)
- 📊 **Tabla interactiva** con Material-UI DataGrid
- 🎭 **Modal para añadir/editar** restaurantes
- ⚠️ **Manejo de errores** con validación de formularios
- ⏳ **Loading states** y feedback visual
- 📱 **Diseño responsive** con TailwindCSS
- 🔔 **Notificaciones** con react-toastify

## 🛠️ Tecnologías

- **React 18** con TypeScript
- **Vite** como bundler
- **TailwindCSS** para estilos
- **Material-UI** para componentes de tabla
- **React Modal** para ventanas modales
- **Axios** para peticiones HTTP
- **React Router DOM** para navegación
- **React Toastify** para notificaciones
- **React Icons** para iconografía

## 📊 Diagrama de Secuencia - Proceso de Autenticación

![Diagrama de Login](./docs/diagrama_secuencia_login.png)

## 📁 Estructura del Proyecto

```
src/
├── api/
│   └── APIUtils.ts          # Configuración de Axios y métodos HTTP
├── assets/
│   └── loading.gif          # Recursos estáticos
├── components/
│   ├── EditButtons.tsx      # Botones de editar/eliminar en tabla
│   ├── Header.tsx           # Cabecera de la aplicación
│   ├── PageLoader/          # Componente de carga
│   ├── RestForm.tsx         # Formulario de restaurantes
│   ├── Table.tsx            # Tabla de restaurantes (DataGrid)
│   └── Modal/
│       └── RestaurantModal.tsx  # Modal para formularios
├── contexto/
│   ├── LoadContext.tsx      # Contexto para estados de carga
│   └── ReloadContext.tsx    # Contexto para recargar datos
├── hooks/
│   ├── useErrors.ts         # Hook para manejo de errores
│   ├── useLoad.ts           # Hook para estados de carga
│   └── useModal.ts          # Hook para control de modales
├── pages/
│   ├── Home.tsx             # Página principal con tabla
│   └── Login.tsx            # Página de login
├── types.d.ts               # Definiciones de TypeScript
├── App.tsx                  # Componente principal
└── main.tsx                 # Punto de entrada
```

## 🚀 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/donatomarino/restaurantsapi-front
   cd restaurantesapi-front
   ```

2. **Instala dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   ```env
   VITE_API_URL=http://localhost:800/api (CON BACK EN DOCKER)
   ```

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Accede a la aplicación**
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador

## 📋 Scripts Disponibles

- `npm run dev` — Inicia el servidor de desarrollo
- `npm run build` — Compila la aplicación para producción
- `npm run preview` — Previsualiza la build de producción
- `npm run lint` — Ejecuta ESLint

## 🔑 Autenticación

### Credenciales de prueba
```
Email: donato@wewelcome.com
Password: wewelcome2025
```

### Flujo de autenticación
- **Login**: `POST /auth` con email y password
- **Token**: Se incluye automáticamente en las headers
- **Logout**: Elimina el token del localStorage

## 📱 Funcionalidades

### 🏠 Página Principal
- Tabla interactiva con todos los restaurantes
- Búsqueda por campos (nombre, dirección, teléfono)
- Filtros por columnas con Material-UI DataGrid
- Paginación y ordenación
- Botones de acción (editar/eliminar)
- Botón para añadir nuevo restaurante

### ➕ Crear Restaurante
- Modal con formulario de creación
- Validación de campos obligatorios
- Feedback de éxito/error

### ✏️ Editar Restaurante
- Modal prellenado con datos existentes
- Validación de cambios
- Actualización en tiempo real

### 🗑️ Eliminar Restaurante
- Eliminación directa desde la tabla
- Actualización automática

### 🔍 Búsqueda y Filtros
- **Búsqueda global** en tiempo real
- **Filtros por columna** individual
- **Ordenación** por cualquier campo
- **Paginación** configurable (5, 10 elementos)

## 📦 Dependencias Principales

- [React](https://react.dev/) - Framework principal
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Vite](https://vitejs.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - Estilos utilitarios
- [Material-UI](https://mui.com/) - Componentes de tabla
- [Axios](https://axios-http.com/) - Cliente HTTP
- [React Router DOM](https://reactrouter.com/) - Navegación
- [React Toastify](https://fkhadra.github.io/react-toastify/) - Notificaciones
- [React Modal](https://reactcommunity.org/react-modal/) - Ventanas modales

## 👨‍💻 Autor

**Donato Marino**
