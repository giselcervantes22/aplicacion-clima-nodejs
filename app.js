const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

// Node.js - Crear el servidor web
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar Express para servir archivos estáticos y parsear JSON
app.use(express.static('public'));
app.use(express.json());

// API Key para OpenWeatherMap desde variables de entorno
const API_KEY = process.env.OPENWEATHER_API_KEY || 'demo-key';

// Ruta principal - servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para obtener el clima
app.get('/clima/:ciudad', async (req, res) => {
    try {
        const ciudad = req.params.ciudad;
        
        // AXIOS - Hacer petición HTTP a la API externa
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`
        );
        
        // La respuesta viene en formato JSON automáticamente parseado por Axios
        const datosClima = response.data;
        
        // JSON - Crear un objeto con los datos que necesitamos
        const climaSimplificado = {
            ciudad: datosClima.name,
            pais: datosClima.sys.country,
            temperatura: Math.round(datosClima.main.temp),
            descripcion: datosClima.weather[0].description,
            humedad: datosClima.main.humidity,
            sensacion: Math.round(datosClima.main.feels_like),
            icono: datosClima.weather[0].icon
        };
        
        // Enviar la respuesta como JSON
        res.json(climaSimplificado);
        
    } catch (error) {
        // Manejo de errores
        if (error.response && error.response.status === 404) {
            res.status(404).json({ 
                error: 'Ciudad no encontrada' 
            });
        } else {
            res.status(500).json({ 
                error: 'Error al obtener datos del clima' 
            });
        }
    }
});

// Ruta para obtener clima de múltiples ciudades
app.post('/clima-multiple', async (req, res) => {
    try {
        // JSON - Recibir array de ciudades del cliente
        const { ciudades } = req.body;
        
        // AXIOS - Hacer múltiples peticiones en paralelo
        const peticiones = ciudades.map(ciudad => 
            axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`
            )
        );
        
        // Esperar a que todas las peticiones se completen
        const respuestas = await Promise.all(peticiones);
        
        // JSON - Procesar todas las respuestas
        const climaMultiple = respuestas.map(response => {
            const datos = response.data;
            return {
                ciudad: datos.name,
                temperatura: Math.round(datos.main.temp),
                descripcion: datos.weather[0].description
            };
        });
        
        res.json(climaMultiple);
        
    } catch (error) {
        res.status(500).json({ 
            error: 'Error al obtener datos del clima' 
        });
    }
});

// Node.js - Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🌤️  Servidor de clima ejecutándose en http://localhost:${PORT}`);
    console.log(`📡 Usando Node.js para manejar peticiones HTTP`);
    console.log(`🔄 Usando Axios para comunicarse con APIs externas`);
    console.log(`📋 Usando JSON para intercambiar datos`);
});

// Ejemplo de uso con datos mockeados (para pruebas sin API key)
app.get('/clima-demo/:ciudad', (req, res) => {
    const ciudad = req.params.ciudad;
    
    // JSON - Datos de ejemplo
    const climaDemo = {
        ciudad: ciudad,
        pais: 'MX',
        temperatura: 25,
        descripcion: 'soleado',
        humedad: 60,
        sensacion: 28,
        icono: '01d'
    };
    
    // Simular delay de API real
    setTimeout(() => {
        res.json(climaDemo);
    }, 1000);
});
