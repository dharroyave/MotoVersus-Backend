// 1. Importamos las dependencias necesarias
import express from 'express';
import dotenv from 'dotenv';
import { conexionMongo } from './src/config/db.js'; 
import {commentRouter} from './src/routes/comments.routes.js';

// 2. Importamos la configuración de la base de datos
const app = express();
dotenv.config();
const PORT = process.env.PORT;
conexionMongo(); // Llamamos a la función para conectar a la base de datos

//3. funcionalidad para conectar a la base de datos
app.get('/', (req, res) => {
    res.send('Bienvenido a MotoVersus');
});

app.use(express.json());
app.use('/comments', commentRouter);

//4. Levantamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en el http://localhost:${PORT}`);
});
