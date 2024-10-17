# Arcano Virtual

**Arcano Virtual** es una aplicación web que simula una tirada de tarot utilizando los arcanos mayores. La aplicación está diseñada para generar de manera aleatoria cartas de tarot que se distribuyen visualmente en forma de Árbol de la Vida cabalístico. Cada carta seleccionada muestra un modal con su significado y se asocia a un sefirot específico, revelando su relación en la tirada.

## Características

- **Visualización del Árbol de la Vida cabalístico:** Las cartas se distribuyen de forma organizada en la estructura del Árbol de la Vida.
- **Generación aleatoria de cartas:** Las cartas se seleccionan aleatoriamente y no se repiten.
- **Revelación de cartas:** Las cartas inicialmente se muestran como una imagen de cardback y se revelan al hacer clic en ellas.
- **Asociación con los sefirot:** Cada carta está vinculada a uno de los diez sefirot, mostrando su significado de manera interactiva.
- **Exportación a PDF:** La tirada se puede exportar a PDF con la lista de cartas y sus significados, además de los detalles de contacto.
- **Footer Sticky:** El footer permanece en la parte inferior de la página sin importar la cantidad de contenido.
- **Responsive Design:** La aplicación es adaptable a diferentes tamaños de pantalla.

## Tecnologías Utilizadas

- **Frontend:**
  - **React.js:** Se utiliza para construir la interfaz interactiva y dinámica.
  - **Vite:** Como herramienta de desarrollo rápida y ligera para React.
  - **CSS:** Para el diseño visual y la disposición de las cartas y otros elementos en la página.
  - **jsPDF:** Para la funcionalidad de exportación de la tirada en formato PDF.
  - **AutoTable:** Extensión de jsPDF para la creación de tablas dentro del PDF.

- **Backend:**
  - **Express.js:** Framework de Node.js utilizado para manejar las rutas y la API.
  - **SQLite:** Base de datos local utilizada para almacenar los datos de los arcanos y sus significados.

## Instalación
bash
Copy code
# 1. Clona este repositorio
git clone https://github.com/Iahlik/arcano-virtual.git

# 2. Navega al directorio del proyecto
cd arcano-virtual

# 3. Instala las dependencias
npm install

# 4. Inicia la aplicación en modo desarrollo
npm run dev

La aplicación estará disponible en http://localhost:5173 y el servidor en http://localhost:3000.

## Uso
- Tirada de Tarot: Al iniciar, realiza una tirada haciendo clic en las cartas ubicadas en el Árbol de la Vida.

- Significados: Al hacer clic en una carta, aparece un modal con su significado según el sefirot al que corresponde.

- Exportar a PDF: Haz clic en "Imprimir Tirada" para exportar las cartas y significados en un archivo PDF, que incluirá información de contacto:

## Contribución
Si te gustaría contribuir, haz un fork de este repositorio y envía un pull request con tus cambios. ¡Se agradecen las mejoras y nuevas ideas!

## Autor
Este proyecto ha sido desarrollado por Ignacio Larraín. Si te interesa una tirada de tarot personalizada, no dudes en contactarme!

# Instagram: @tarotlaserena
# Teléfono: tel:+56942955496
# Sitio web: www.tarotlaserena.cl
