# Proyecto2P

Desarrollo de una Página Web con Formulario Validado y Búsqueda mediante una API Simulada con Express.js.

## Estructura
- **frontend/**: Página web con formulario validado.
- **backend/**: API simulada con Express.js y datos en JSON.

## Ejecución
### Backend (API Express)

1. Instala las dependencias:
   ```bash
   cd backend
   npm install express
   ```

2. Ejecuta el servidor:
   ```bash
   node server.js
   ```
   El servidor estará disponible en http://localhost:3000

3. Prueba la API usando el archivo `api.http`:
   - Abre `api.http` en VS Code y haz clic en "Send Request" sobre cada petición para simular búsquedas.
   - Ejemplo de búsqueda: `GET http://localhost:3000/usuarios?nombre=Ana&edad=25&ciudad=Quito`

Si no tienes la extensión REST Client instalada, puedes usar herramientas como Postman o tu navegador para probar las rutas.
