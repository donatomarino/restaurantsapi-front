# 🍽️ Restaurant API - Frontend

Aplicación web para la gestión de restaurantes, desarrollada con **React**, **TypeScript** y **Vite**. Permite autenticación JWT, listado, creación, edición y eliminación de restaurantes mediante una API REST.

## 🚀 Despliegue en Vercel.com
- **URL:** https://restaurantsapi-front.vercel.app/

## ✨ Características

- 🔐 **Autenticación JWT** con login seguro
- 📋 **Gestión completa de restaurantes** (CRUD)
- 📊 **Tabla interactiva** con Material-UI DataGrid
- 🎭 **Modal para añadir/editar** restaurantes
- ❌ **Modal de confirmación** para eliminación segura
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

```text
src/
├── api/
│   └── APIUtils.ts                  # Configuración de Axios y llamadas a la API
├── assets/
│   └── loading.gif                  # Recursos visuales estáticos
├── components/
│   ├── EditButtons.tsx              # Botones para editar y eliminar registros
│   ├── Footer.tsx                   # Pie de la aplicación
│   ├── Header.tsx                   # Cabecera global
│   ├── LoginForm.tsx                # Formulario de autenticación
│   ├── Modal/
│   │   └── RestaurantModal.tsx     # Modal de creación/edición de restaurantes
│   ├── PageLoader/
│   │   └── index.tsx                # Indicador de carga
│   ├── RestForm.tsx                 # Formulario de restaurante
│   └── Table.tsx                    # Tabla principal con DataGrid
├── config/
│   ├── axios.config.ts              # Configuración de Axios
│   └── constants/
│       └── constants.ts             # Constantes del proyecto
├── contexto/
│   └── LoadContext.tsx              # Contexto para estado de carga y recarga de datos
├── hooks/
│   ├── useErrors.ts                 # Manejo de errores y validaciones
│   └── useModal.ts                  # Control de modales reutilizables
├── pages/
│   ├── Home.tsx                     # Página principal con listado de restaurantes
│   ├── Login.tsx                    # Página de inicio de sesión
│   ├── Unauthorized.tsx             # Vista para acceso no autorizado
│   └── NotFound.tsx                 # Página 404
├── App.tsx                          # Componente principal con rutas
├── index.css                        # Estilos globales y TailwindCSS
├── main.tsx                         # Punto de entrada de la app
├── types.d.ts                       # Definiciones globales de TypeScript
├── vite-env.d.ts                    # Tipos de Vite
└── App.css                          # Estilos del componente principal
```

Esta estructura refleja la versión actual del frontend y mantiene una separación clara entre:
- servicios y configuración de API
- componentes reutilizables
- hooks personalizados
- contextos globales
- páginas de la aplicación
- estilos y tipos compartidos


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
   VITE_API_URL=http://127.0.0.1:8000/api
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
Email: donato@test.com
Password: test1234
```

### Flujo de autenticación
- **Login**: `POST /auth` con email y password
- **Token**: Se incluye automáticamente en las headers
- **Headers**: Se incluye Bearer token en todas las peticiones autenticadas
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
- Notificaciones toast** de confirmación

### 🗑️ Eliminar Restaurante
- Eliminación directa desde la tabla
- Eliminación segura con confirmación explícita
- Actualización automática

### 🔍 Búsqueda y Filtros
- Búsqueda global en tiempo real
- Filtros por columna individual
- Ordenación por cualquier campo
- Paginación configurable (5, 10 elementos)

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

## 🔮 Próximas Mejoras

- **Actualización parcial (PATCH)**: Implementar endpoint PATCH para modificar campos específicos del restaurante sin necesidad de enviar todos los datos

## 👨‍💻 Autor

**Donato Marino**
