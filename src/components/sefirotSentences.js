const sefirotSentences = {
    0: {
        0: "El Loco en Keter simboliza nuevos comienzos, inocencia y libertad espiritual.",
        1: "El Loco en Jojmá representa la chispa de la creatividad y el despertar de la sabiduría divina.",
        2: "El Loco en Biná refleja la intuición y la comprensión profunda de los misterios.",
        3: "El Loco en Jesed muestra una energía expansiva y generosa que fluye libremente.",
        4: "El Loco en Guevurá simboliza la ruptura de las limitaciones y la búsqueda de libertad.",
        5: "El Loco en Tiferet representa la armonización del espíritu con el corazón, una inocencia equilibrada.",
        6: "El Loco en Netzaj simboliza el impulso hacia la victoria a través de la libertad de espíritu.",
        7: "El Loco en Hod refleja la espontaneidad y la búsqueda de un entendimiento más profundo.",
        8: "El Loco en Yesod representa el inicio de nuevas conexiones y manifestaciones emocionales.",
        9: "El Loco en Maljut simboliza la liberación en el mundo físico y la apertura a nuevas posibilidades."
    },
    1: {
        0: "El Mago en Keter refleja el poder de manifestar ideas y la conexión con lo divino.",
        1: "El Mago en Jojmá simboliza el control consciente sobre la sabiduría divina y la creación.",
        2: "El Mago en Biná representa el uso del conocimiento para transformar la comprensión.",
        3: "El Mago en Jesed simboliza la manifestación de la abundancia a través de la voluntad divina.",
        4: "El Mago en Guevurá refleja el uso del poder de la disciplina para controlar y crear.",
        5: "El Mago en Tiferet representa la alineación perfecta entre mente, espíritu y corazón.",
        6: "El Mago en Netzaj simboliza la victoria a través del dominio sobre las fuerzas creativas.",
        7: "El Mago en Hod representa la habilidad de transformar la realidad mediante el intelecto.",
        8: "El Mago en Yesod refleja la manifestación de las ideas en el mundo emocional y subconsciente.",
        9: "El Mago en Maljut simboliza la capacidad de hacer realidad lo espiritual en lo físico."
    },
    2: {
        0: "La Sacerdotisa en Keter revela la intuición y la conexión espiritual con el inconsciente.",
        1: "La Sacerdotisa en Jojmá simboliza el acceso a la sabiduría profunda y esotérica.",
        2: "La Sacerdotisa en Biná refleja el entendimiento de los misterios ocultos a través de la reflexión.",
        3: "La Sacerdotisa en Jesed muestra una sabiduría generosa que fluye en la creación.",
        4: "La Sacerdotisa en Guevurá representa la introspección disciplinada y el control del conocimiento.",
        5: "La Sacerdotisa en Tiferet simboliza la intuición en perfecta armonía con el corazón.",
        6: "La Sacerdotisa en Netzaj refleja el uso de la intuición para vencer desafíos emocionales.",
        7: "La Sacerdotisa en Hod representa la estructura del conocimiento oculto y la reflexión intelectual.",
        8: "La Sacerdotisa en Yesod simboliza la conexión entre el inconsciente y el plano emocional.",
        9: "La Sacerdotisa en Maljut revela los secretos ocultos en la manifestación física."
    },
    3: {
        0: "La Emperatriz en Keter muestra la abundancia y la creación de nuevos mundos espirituales.",
        1: "La Emperatriz en Jojmá refleja la creatividad divina que brota de la sabiduría.",
        2: "La Emperatriz en Biná simboliza la gestación de nuevas ideas y la fertilidad mental.",
        3: "La Emperatriz en Jesed representa una abundancia generosa y amorosa que todo lo nutre.",
        4: "La Emperatriz en Guevurá simboliza el control fértil de las energías creativas.",
        5: "La Emperatriz en Tiferet refleja la belleza y la armonía en la creación y la fertilidad.",
        6: "La Emperatriz en Netzaj simboliza la victoria a través del crecimiento y la expansión creativa.",
        7: "La Emperatriz en Hod representa la organización y estructuración de la fertilidad creativa.",
        8: "La Emperatriz en Yesod simboliza la conexión emocional que nutre nuevas manifestaciones.",
        9: "La Emperatriz en Maljut refleja la abundancia y la prosperidad en el mundo físico."
    },
    4: {
        0: "El Emperador en Keter representa la autoridad divina y la estructura del universo.",
        1: "El Emperador en Jojmá simboliza el control y la estructura que emerge de la sabiduría divina.",
        2: "El Emperador en Biná refleja el poder del orden y la comprensión estructurada.",
        3: "El Emperador en Jesed simboliza la expansión y el crecimiento dentro de un orden establecido.",
        4: "El Emperador en Guevurá refleja el control y la disciplina firme dentro de los límites adecuados.",
        5: "El Emperador en Tiferet representa el equilibrio perfecto entre el poder y la belleza.",
        6: "El Emperador en Netzaj simboliza la victoria a través del control y la autoridad.",
        7: "El Emperador en Hod representa la estructuración lógica y el control intelectual.",
        8: "El Emperador en Yesod simboliza el establecimiento de una base emocional sólida.",
        9: "El Emperador en Maljut refleja la autoridad y el control sobre el mundo físico."
    },
    5: {
        0: "El Hierofante en Keter se vincula a la sabiduría espiritual y la enseñanza divina.",
        1: "El Hierofante en Jojmá representa la transmisión de la sabiduría divina a través de la enseñanza.",
        2: "El Hierofante en Biná simboliza la comprensión estructurada de la espiritualidad.",
        3: "El Hierofante en Jesed refleja la enseñanza generosa y expansiva del conocimiento espiritual.",
        4: "El Hierofante en Guevurá simboliza la disciplina en la enseñanza y el control de la sabiduría.",
        5: "El Hierofante en Tiferet representa la belleza y la verdad en la transmisión de la sabiduría espiritual.",
        6: "El Hierofante en Netzaj refleja la perseverancia en la enseñanza espiritual.",
        7: "El Hierofante en Hod simboliza la estructuración del conocimiento espiritual a través del intelecto.",
        8: "El Hierofante en Yesod representa la base emocional y subconsciente en la enseñanza espiritual.",
        9: "El Hierofante en Maljut refleja la manifestación del conocimiento espiritual en el mundo físico."
    },
    6: {
        0: "Los Enamorados en Keter revelan decisiones trascendentales en la conexión espiritual.",
        1: "Los Enamorados en Jojmá simbolizan la unión divina entre sabiduría y comprensión.",
        2: "Los Enamorados en Biná reflejan la armonización de las emociones y el intelecto.",
        3: "Los Enamorados en Jesed representan el amor generoso y expansivo que une las almas.",
        4: "Los Enamorados en Guevurá simbolizan decisiones difíciles en relaciones bajo disciplina y control.",
        5: "Los Enamorados en Tiferet reflejan el equilibrio perfecto entre corazón y mente.",
        6: "Los Enamorados en Netzaj simbolizan la victoria a través de la unión y el compromiso emocional.",
        7: "Los Enamorados en Hod representan el análisis intelectual de las relaciones y las emociones.",
        8: "Los Enamorados en Yesod simbolizan la base emocional de las relaciones y los lazos profundos.",
        9: "Los Enamorados en Maljut reflejan la manifestación del amor en el mundo físico y material."
    },
    7: {
        0: "El Carro en Keter refleja victoria espiritual y fuerza de voluntad.",
        1: "El Carro en Jojmá simboliza el impulso hacia la sabiduría y el control sobre el destino.",
        2: "El Carro en Biná refleja la dirección y el control hacia la comprensión profunda.",
        3: "El Carro en Jesed representa la expansión del control y la victoria a través del amor.",
        4: "El Carro en Guevurá simboliza la disciplina y la fuerza de voluntad para superar obstáculos.",
        5: "El Carro en Tiferet refleja la armonía y la victoria equilibrada a través del autocontrol.",
        6: "El Carro en Netzaj simboliza la persistencia y el triunfo emocional.",
        7: "El Carro en Hod representa la victoria a través de la planificación intelectual y el análisis.",
        8: "El Carro en Yesod simboliza la victoria emocional y la conexión con el inconsciente.",
        9: "El Carro en Maljut refleja la manifestación de la victoria en el mundo físico."
    },
    8: {
        0: "La Fuerza en Keter habla de coraje y energía espiritual positiva.",
        1: "La Fuerza en Jojmá simboliza el control sobre la sabiduría a través del coraje espiritual.",
        2: "La Fuerza en Biná refleja el entendimiento profundo y el autocontrol mental.",
        3: "La Fuerza en Jesed representa el poder de la generosidad y el amor incondicional.",
        4: "La Fuerza en Guevurá simboliza la disciplina y el autocontrol para superar desafíos.",
        5: "La Fuerza en Tiferet refleja la belleza del coraje equilibrado y el dominio personal.",
        6: "La Fuerza en Netzaj simboliza la victoria a través de la fortaleza emocional.",
        7: "La Fuerza en Hod representa la fuerza interior manifestada a través del intelecto.",
        8: "La Fuerza en Yesod simboliza el coraje emocional y la fortaleza en las relaciones.",
        9: "La Fuerza en Maljut refleja la manifestación de la fortaleza interior en el mundo físico."
    },
    9: {
        0: "El Ermitaño en Keter simboliza la introspección profunda y la búsqueda espiritual.",
        1: "El Ermitaño en Jojmá refleja la búsqueda de la sabiduría interior a través de la soledad.",
        2: "El Ermitaño en Biná simboliza la comprensión profunda que proviene de la reflexión.",
        3: "El Ermitaño en Jesed representa la generosidad del conocimiento adquirido en soledad.",
        4: "El Ermitaño en Guevurá simboliza el autocontrol y la disciplina en la búsqueda de la verdad.",
        5: "El Ermitaño en Tiferet refleja la belleza en la introspección y el equilibrio interior.",
        6: "El Ermitaño en Netzaj simboliza la victoria a través de la búsqueda solitaria de la verdad.",
        7: "El Ermitaño en Hod representa el análisis introspectivo y la sabiduría adquirida a través del intelecto.",
        8: "El Ermitaño en Yesod simboliza la conexión emocional con el subconsciente a través de la introspección.",
        9: "El Ermitaño en Maljut refleja la manifestación de la sabiduría adquirida en el plano físico."
    },
    10: {
        0: "La Rueda de la Fortuna en Keter simboliza los ciclos del destino y la conexión espiritual.",
        1: "La Rueda de la Fortuna en Jojmá refleja la sabiduría de los cambios cíclicos en la vida.",
        2: "La Rueda de la Fortuna en Biná simboliza la comprensión de los ciclos universales.",
        3: "La Rueda de la Fortuna en Jesed representa la expansión y el flujo generoso del destino.",
        4: "La Rueda de la Fortuna en Guevurá refleja el control y la disciplina sobre los cambios del destino.",
        5: "La Rueda de la Fortuna en Tiferet simboliza la armonía con los ciclos naturales y el destino.",
        6: "La Rueda de la Fortuna en Netzaj representa la victoria a través de la aceptación de los ciclos.",
        7: "La Rueda de la Fortuna en Hod simboliza el análisis y la reflexión sobre los cambios de la vida.",
        8: "La Rueda de la Fortuna en Yesod refleja la conexión emocional con los ciclos del destino.",
        9: "La Rueda de la Fortuna en Maljut simboliza la manifestación de los ciclos del destino en el mundo físico."
    },
    11: {
        0: "La Justicia en Keter simboliza el equilibrio divino y la verdad espiritual.",
        1: "La Justicia en Jojmá refleja la sabiduría del equilibrio y la verdad universal.",
        2: "La Justicia en Biná simboliza la comprensión estructurada de la verdad y la ley.",
        3: "La Justicia en Jesed representa la expansión de la justicia y la equidad en el amor.",
        4: "La Justicia en Guevurá refleja la disciplina y el control para mantener el equilibrio.",
        5: "La Justicia en Tiferet simboliza la belleza y el equilibrio en la justicia.",
        6: "La Justicia en Netzaj representa la victoria a través del equilibrio emocional.",
        7: "La Justicia en Hod refleja el análisis intelectual de la verdad y la equidad.",
        8: "La Justicia en Yesod simboliza la conexión emocional con la justicia y la verdad.",
        9: "La Justicia en Maljut refleja la manifestación de la justicia en el mundo físico."
    },
    12: {
        0: "El Colgado en Keter simboliza el sacrificio espiritual y la entrega a lo divino.",
        1: "El Colgado en Jojmá refleja la sabiduría adquirida a través de la rendición y el sacrificio.",
        2: "El Colgado en Biná simboliza la comprensión de nuevas perspectivas a través del sacrificio.",
        3: "El Colgado en Jesed representa el sacrificio por amor y la entrega generosa.",
        4: "El Colgado en Guevurá refleja la disciplina del sacrificio y la aceptación de las limitaciones.",
        5: "El Colgado en Tiferet simboliza el equilibrio en la entrega y la aceptación del sacrificio.",
        6: "El Colgado en Netzaj refleja la victoria a través de la rendición emocional.",
        7: "El Colgado en Hod simboliza el análisis y la reflexión sobre el sacrificio y el cambio de perspectiva.",
        8: "El Colgado en Yesod refleja el sacrificio emocional necesario para la transformación.",
        9: "El Colgado en Maljut simboliza la manifestación física del sacrificio y el cambio."
    },
    13: {
        0: "La Muerte en Keter simboliza la transformación espiritual y el renacimiento.",
        1: "La Muerte en Jojmá refleja la sabiduría adquirida a través de la transformación y el cambio.",
        2: "La Muerte en Biná simboliza la comprensión de la inevitabilidad del cambio y la transformación.",
        3: "La Muerte en Jesed representa el renacimiento y la regeneración a través del amor incondicional.",
        4: "La Muerte en Guevurá refleja la disciplina necesaria para aceptar y enfrentar el cambio.",
        5: "La Muerte en Tiferet simboliza la belleza en el proceso de transformación y renacimiento.",
        6: "La Muerte en Netzaj refleja la victoria emocional a través de la aceptación del cambio.",
        7: "La Muerte en Hod simboliza el análisis y la reflexión sobre la transformación personal.",
        8: "La Muerte en Yesod refleja la conexión emocional con el proceso de cambio y regeneración.",
        9: "La Muerte en Maljut simboliza la manifestación del cambio y la transformación en el mundo físico."
    },
    14: {
        0: "La Templanza en Keter simboliza la armonización de las fuerzas espirituales y el equilibrio.",
        1: "La Templanza en Jojmá refleja la sabiduría obtenida a través del equilibrio y la moderación.",
        2: "La Templanza en Biná simboliza la comprensión profunda del equilibrio entre opuestos.",
        3: "La Templanza en Jesed representa la generosidad y el amor equilibrado que nutre el espíritu.",
        4: "La Templanza en Guevurá habla de la disciplina necesaria para mantener la armonía interna.",
        5: "La Templanza en Tiferet refleja la belleza en la moderación y el balance espiritual.",
        6: "La Templanza en Netzaj simboliza la victoria emocional a través de la moderación.",
        7: "La Templanza en Hod revela la importancia de la reflexión para lograr equilibrio.",
        8: "La Templanza en Yesod conecta la energía emocional equilibrada con el mundo espiritual.",
        9: "La Templanza en Maljut simboliza el equilibrio manifestado en el mundo físico."
    },
    
    15: {
        0: "El Diablo en Keter simboliza los desafíos espirituales de la tentación y el apego material.",
        1: "El Diablo en Jojmá refleja la sabiduría obtenida al enfrentar las sombras interiores.",
        2: "El Diablo en Biná simboliza la comprensión profunda de las limitaciones y apegos.",
        3: "El Diablo en Jesed habla del amor incondicional a pesar de los errores y las caídas.",
        4: "El Diablo en Guevurá refleja la disciplina para liberar al espíritu de la esclavitud emocional.",
        5: "El Diablo en Tiferet simboliza la belleza y el poder del renacimiento tras la tentación.",
        6: "El Diablo en Netzaj muestra la lucha por la liberación emocional de la tentación material.",
        7: "El Diablo en Hod simboliza el análisis de las propias sombras y los apegos.",
        8: "El Diablo en Yesod refleja la lucha emocional para superar los deseos terrenales.",
        9: "El Diablo en Maljut simboliza la manifestación de las tentaciones en el mundo físico."
    },
    
    16: {
        0: "La Torre en Keter simboliza la destrucción de viejas estructuras para la renovación espiritual.",
        1: "La Torre en Jojmá refleja la sabiduría que surge al desmantelar las ilusiones.",
        2: "La Torre en Biná simboliza la comprensión profunda del caos y la reconstrucción.",
        3: "La Torre en Jesed representa el amor que surge tras la ruptura de estructuras antiguas.",
        4: "La Torre en Guevurá refleja la disciplina para aceptar la destrucción necesaria para el cambio.",
        5: "La Torre en Tiferet simboliza la belleza en el colapso de lo viejo para dar lugar a lo nuevo.",
        6: "La Torre en Netzaj refleja la victoria emocional a través de la aceptación del caos.",
        7: "La Torre en Hod simboliza la reflexión sobre los cambios bruscos y su significado.",
        8: "La Torre en Yesod refleja la conexión emocional con la destrucción y el renacimiento.",
        9: "La Torre en Maljut simboliza la manifestación del colapso y el cambio en el mundo físico."
    },
    
    17: {
        0: "La Estrella en Keter simboliza la inspiración divina y la esperanza espiritual.",
        1: "La Estrella en Jojmá refleja la sabiduría que proviene de la guía y la luz interior.",
        2: "La Estrella en Biná simboliza la comprensión de la esperanza y la fe renovada.",
        3: "La Estrella en Jesed representa la generosidad y el amor universal hacia los demás.",
        4: "La Estrella en Guevurá refleja la disciplina para mantener la fe en tiempos difíciles.",
        5: "La Estrella en Tiferet simboliza la belleza de la esperanza y la inspiración espiritual.",
        6: "La Estrella en Netzaj refleja la victoria emocional a través de la fe y la esperanza.",
        7: "La Estrella en Hod simboliza la reflexión sobre la inspiración y la luz interna.",
        8: "La Estrella en Yesod refleja la conexión emocional con la esperanza y la serenidad.",
        9: "La Estrella en Maljut simboliza la manifestación de la esperanza en el mundo físico."
    },
    
    18: {
        0: "La Luna en Keter simboliza las ilusiones espirituales y los misterios ocultos.",
        1: "La Luna en Jojmá refleja la sabiduría obtenida a través de la intuición y el inconsciente.",
        2: "La Luna en Biná simboliza la comprensión de los ciclos ocultos y el misterio de la vida.",
        3: "La Luna en Jesed representa el amor que surge a través de la conexión intuitiva.",
        4: "La Luna en Guevurá refleja la disciplina para enfrentar y superar las ilusiones.",
        5: "La Luna en Tiferet simboliza la belleza de los sueños y el subconsciente.",
        6: "La Luna en Netzaj refleja la victoria emocional sobre los miedos y las ilusiones.",
        7: "La Luna en Hod simboliza la reflexión sobre los misterios del inconsciente.",
        8: "La Luna en Yesod refleja la conexión emocional con los ciclos ocultos de la vida.",
        9: "La Luna en Maljut simboliza la manifestación de los sueños y las ilusiones en el mundo físico."
    },
    
    19: {
        0: "El Sol en Keter simboliza la iluminación espiritual y la claridad divina.",
        1: "El Sol en Jojmá refleja la sabiduría que surge de la claridad y la verdad.",
        2: "El Sol en Biná simboliza la comprensión de la verdad y la iluminación.",
        3: "El Sol en Jesed representa el amor y la calidez que irradian del espíritu iluminado.",
        4: "El Sol en Guevurá refleja la disciplina para mantener la claridad y la iluminación.",
        5: "El Sol en Tiferet simboliza la belleza de la luz y la verdad espiritual.",
        6: "El Sol en Netzaj refleja la victoria emocional a través de la iluminación.",
        7: "El Sol en Hod simboliza la reflexión sobre la claridad y la verdad interna.",
        8: "El Sol en Yesod refleja la conexión emocional con la luz y la claridad espiritual.",
        9: "El Sol en Maljut simboliza la manifestación de la iluminación y la verdad en el mundo físico."
    },
    
    20: {
        0: "El Juicio en Keter simboliza el llamado divino al renacimiento espiritual.",
        1: "El Juicio en Jojmá refleja la sabiduría adquirida al responder al llamado interno.",
        2: "El Juicio en Biná simboliza la comprensión del proceso de despertar y renacimiento.",
        3: "El Juicio en Jesed representa el amor que surge al responder al llamado espiritual.",
        4: "El Juicio en Guevurá refleja la disciplina para aceptar el cambio y el renacimiento.",
        5: "El Juicio en Tiferet simboliza la belleza del despertar espiritual y la revelación.",
        6: "El Juicio en Netzaj refleja la victoria emocional a través del renacimiento.",
        7: "El Juicio en Hod simboliza la reflexión sobre el llamado espiritual y el despertar.",
        8: "El Juicio en Yesod refleja la conexión emocional con el renacimiento y el despertar.",
        9: "El Juicio en Maljut simboliza la manifestación del renacimiento en el mundo físico."
    },
    
    21: {
        0: "El Mundo en Keter simboliza la realización espiritual y la unión con lo divino.",
        1: "El Mundo en Jojmá refleja la sabiduría obtenida al alcanzar la plenitud y la integración.",
        2: "El Mundo en Biná simboliza la comprensión de la totalidad y la realización espiritual.",
        3: "El Mundo en Jesed representa el amor universal que surge al alcanzar la plenitud.",
        4: "El Mundo en Guevurá refleja la disciplina para mantener la unidad y la realización.",
        5: "El Mundo en Tiferet simboliza la belleza de la realización y la armonía universal.",
        6: "El Mundo en Netzaj refleja la victoria emocional al alcanzar la plenitud espiritual.",
        7: "El Mundo en Hod simboliza la reflexión sobre la integración y la totalidad del ser.",
        8: "El Mundo en Yesod refleja la conexión emocional con la unidad y la realización espiritual.",
        9: "El Mundo en Maljut simboliza la manifestación de la plenitud y la realización en el mundo físico."
    }
};
export default sefirotSentences;
