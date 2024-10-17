import express from 'express'; 
import cors from 'cors'; 
import bodyParser from 'body-parser'; 
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, '../public'))); 

// Datos de los arcanos mayores del tarot
const arcanos = [
    { id: 0, nombre: "El Loco", significado: "Nuevos comienzos, inocencia, libertad.", imagen: "/img/a0tmt_h335.jpg" },
    { id: 1, nombre: "El Mago", significado: "Manifestación, habilidad, poder.", imagen: "/img/a1tmt_h335.jpg" },
    { id: 2, nombre: "La Sacerdotisa", significado: "Intuición, subconsciente, misterio.", imagen: "/img/a2tmt_h335.jpg" },
    { id: 3, nombre: "La Emperatriz", significado: "Fertilidad, abundancia, creatividad.", imagen: "/img/a3tmt_h335.jpg" },
    { id: 4, nombre: "El Emperador", significado: "Autoridad, estructura, control.", imagen: "/img/a4tmt_h335.jpg" },
    { id: 5, nombre: "El Hierofante", significado: "Tradición, espiritualidad, enseñanza.", imagen: "/img/a5tmt_h335.jpg" },
    { id: 6, nombre: "Los Enamorados", significado: "Relaciones, decisiones, amor.", imagen: "/img/a6tmt_h335.jpg" },
    { id: 7, nombre: "El Carro", significado: "Determinación, victoria, control.", imagen: "/img/a7tmt_h335.jpg" },
    { id: 8, nombre: "La Fuerza", significado: "Coraje, pasión, compasión.", imagen: "/img/a8tmt_h335.jpg" },
    { id: 9, nombre: "El Ermitaño", significado: "Búsqueda de la verdad, introspección.", imagen: "/img/a9tmt_h335.jpg" },
    { id: 10, nombre: "La Rueda de la Fortuna", significado: "Ciclos, destino, cambio.", imagen: "/img/a10tmt_h335.jpg" },
    { id: 11, nombre: "La Justicia", significado: "Equilibrio, verdad, ley.", imagen: "/img/a11tmt_h335.jpg" },
    { id: 12, nombre: "El Colgado", significado: "Sacrificio, nuevas perspectivas.", imagen: "/img/a12tmt_h335.jpg" },
    { id: 13, nombre: "La Muerte", significado: "Transformación, final, cambio.", imagen: "/img/a13tmt_h335.jpg" },
    { id: 14, nombre: "La Templanza", significado: "Moderación, balance, propósito.", imagen: "/img/a14tmt_h335.jpg" },
    { id: 15, nombre: "El Diablo", significado: "Apego, materialismo, tentación.", imagen: "/img/a15tmt_h335.jpg" },
    { id: 16, nombre: "La Torre", significado: "Caída, ruptura, revelación.", imagen: "/img/a16tmt_h335.jpg" },
    { id: 17, nombre: "La Estrella", significado: "Esperanza, inspiración, serenidad.", imagen: "/img/a17tmt_h335.jpg" },
    { id: 18, nombre: "La Luna", significado: "Ilusiones, intuición, el inconsciente.", imagen: "/img/a18tmt_h335.jpg" },
    { id: 19, nombre: "El Sol", significado: "Éxito, vitalidad, alegría.", imagen: "/img/a19tmt_h335.jpg" },
    { id: 20, nombre: "El Juicio", significado: "Renacimiento, llamado interno, revelación.", imagen: "/img/a20tmt_h335.jpg" },
    { id: 21, nombre: "El Mundo", significado: "Cumplimiento, celebración, realización.", imagen: "/img/a21tmt_h335.jpg" },
];


// Ruta raíz
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de los Arcanos Mayores del Tarot. Usa /api/arcanos para ver la lista de arcanos.');
});

// Rutas
app.get('/api/arcanos', (req, res) => {
    res.json(arcanos);
});

app.get('/api/arcanos/:id', (req, res) => {
    const arcano = arcanos.find(a => a.id === parseInt(req.params.id));
    if (!arcano) return res.status(404).send('Arcano no encontrado');
    res.json(arcano);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
