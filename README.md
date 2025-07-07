# 🌤️ Aplicación del Clima - Node.js

Una aplicación web sencilla que demuestra cómo usar **Node.js**, **JSON** y **Axios** para crear una app del clima que obtiene datos de APIs externas.

![Demo de la aplicación](https://via.placeholder.com/600x300/74b9ff/ffffff?text=App+del+Clima)

## 🚀 Características

- ✅ Búsqueda del clima por ciudad
- ✅ Información detallada (temperatura, humedad, sensación térmica)
- ✅ Clima de múltiples ciudades simultáneamente
- ✅ Interfaz responsive y moderna
- ✅ Manejo de errores
- ✅ API REST con Express.js

## 🛠️ Tecnologías utilizadas

- **Node.js**: Motor del servidor backend
- **Express.js**: Framework web para Node.js
- **Axios**: Cliente HTTP para peticiones a APIs externas
- **JSON**: Formato de intercambio de datos
- **OpenWeatherMap API**: Fuente de datos meteorológicos

## 📋 Requisitos previos

- Node.js (versión 14 o superior)
- npm (normalmente viene con Node.js)
- Cuenta gratuita en [OpenWeatherMap](https://openweathermap.org/api)

## 🔧 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/aplicacion-clima-nodejs.git
   cd aplicacion-clima-nodejs
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   ```bash
   cp .env.example .env
   ```
   
   Edita el archivo `.env` y agrega tu API key de OpenWeatherMap:
   ```
   OPENWEATHER_API_KEY=tu-api-key-real-aqui
   ```

4. **Ejecuta la aplicación:**
   ```bash
   npm start
   ```

5. **Abre tu navegador:**
   ```
   http://localhost:3000
   ```

## 🎯 Cómo funciona

### El flujo completo:

1. **Usuario** ingresa el nombre de una ciudad
2. **Frontend** (HTML/JS) envía petición al servidor Node.js
3. **Node.js** recibe la petición y usa **Axios** para consultar OpenWeatherMap
4. **Axios** obtiene los datos del clima en formato **JSON**
5. **Node.js** procesa y simplifica los datos
6. **Servidor** envía la respuesta en **JSON** al frontend
7. **Frontend** muestra los datos al usuario

### Archivos principales:

```
📁 aplicacion-clima-nodejs/
├── 📄 app.js              # Servidor Node.js con Express
├── 📄 package.json        # Configuración y dependencias
├── 📁 public/
│   └── 📄 index.html      # Frontend de la aplicación
├── 📄 .env.example        # Variables de entorno (ejemplo)
└── 📄 README.md          # Este archivo
```

## 🌐 API Endpoints

### `GET /clima/:ciudad`
Obtiene el clima de una ciudad específica.

**Ejemplo:**
```bash
curl http://localhost:3000/clima/Madrid
```

**Respuesta:**
```json
{
  "ciudad": "Madrid",
  "pais": "ES",
  "temperatura": 22,
  "descripcion": "cielo claro",
  "humedad": 45,
  "sensacion": 24,
  "icono": "01d"
}
```

### `POST /clima-multiple`
Obtiene el clima de múltiples ciudades.

**Ejemplo:**
```bash
curl -X POST http://localhost:3000/clima-multiple \
  -H "Content-Type: application/json" \
  -d '{"ciudades": ["Madrid", "Barcelona", "Valencia"]}'
```

## 🎓 Conceptos demostrados

### Node.js
- Servidor HTTP asíncrono
- Manejo de rutas con Express
- Procesamiento de peticiones simultáneas
- Variables de entorno

### JSON
- Intercambio de datos estructurados
- Parsing automático con Express
- Serialización de objetos JavaScript
- Comunicación cliente-servidor

### Axios
- Peticiones HTTP a APIs externas
- Manejo de respuestas asíncronas
- Procesamiento paralelo de múltiples peticiones
- Manejo de errores de red

## 🚀 Despliegue

### Opción 1: Render (Recomendado)
1. Conecta tu repositorio de GitHub a [Render](https://render.com)
2. Configura las variables de entorno en el dashboard
3. ¡Listo! Tu app estará en línea

### Opción 2: Railway
1. Conecta tu repo a [Railway](https://railway.app)
2. Agrega tu `OPENWEATHER_API_KEY` en las variables
3. Deploy automático

### Opción 3: Heroku
1. Instala Heroku CLI
2. `heroku create tu-app-clima`
3. `heroku config:set OPENWEATHER_API_KEY=tu-key`
4. `git push heroku main`

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Créditos

- [OpenWeatherMap](https://openweathermap.org/) por la API del clima
- [Express.js](https://expressjs.com/) por el framework web
- [Axios](https://axios-http.com/) por el cliente HTTP

---

⭐ Si te ayudó este proyecto, ¡dale una estrella en GitHub!
