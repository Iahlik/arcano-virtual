import React, { useState, useEffect } from 'react';
import CardList from './components/CardList.jsx'; // Asegúrate de que sea CardList.js
import api from './Api.js'; // Asegúrate de que sea Api.js

function App() {
    const [arcanos, setArcanos] = useState([]);
    const [sentences, setSentences] = useState(Array(10).fill('')); // Array de sentencias por defecto

    useEffect(() => {
        const fetchArcanos = async () => {
            try {
                const response = await api.get('/api/arcanos');
                setArcanos(response.data);
            } catch (error) {
                console.error('Error al obtener los arcanos:', error);
            }
        };

        fetchArcanos();
    }, []);

    return (
        <div className="app-container">
            {/* Título */}
            <div className="header-container">
                <h1>Tirada de Tarot</h1>
            </div>

            <div className="main-content">
                {/* Componente CardList */}
                <CardList arcanos={arcanos} setSentences={setSentences} />

                {/* Área de las sentencias de los Sefirot */}
                <div className="sephirot-container">
                    <div className="sephirot-text"><strong>Keter:</strong> {sentences[0]}</div>
                    <div className="sephirot-text"><strong>Hokhmah:</strong> {sentences[1]}</div>
                    <div className="sephirot-text"><strong>Binah:</strong> {sentences[2]}</div>
                    <div className="sephirot-text"><strong>Chesed:</strong> {sentences[3]}</div>
                    <div className="sephirot-text"><strong>Gevurah:</strong> {sentences[4]}</div>
                    <div className="sephirot-text"><strong>Tiferet:</strong> {sentences[5]}</div>
                    <div className="sephirot-text"><strong>Netzah:</strong> {sentences[6]}</div>
                    <div className="sephirot-text"><strong>Hod:</strong> {sentences[7]}</div>
                    <div className="sephirot-text"><strong>Yesod:</strong> {sentences[8]}</div>
                    <div className="sephirot-text"><strong>Malkuth:</strong> {sentences[9]}</div>
                </div>
            </div>
        </div>
    );
}

export default App;
