import { OpinionModel } from "../interfaces/opinion-model";
import { VideojuegoModel } from "../interfaces/videojuego-model";

export const VIDEOJUEGOS: VideojuegoModel[] = [
    {
        id: 0,
        titulo: "Counter Strike",
        creador: "VALVE Software",
        descripcion: "Counter-Strike: Global Offensive (CS:GO) es un videojuego de disparos en primera persona desarrollado por Valve Corporation en cooperación con Hidden Path Entertainment, y es el cuarto juego de la saga Counter-Strike, sin contar Counter-Strike: Online.",
        ranking: 1,
        imagen: "../../assets/counter-strike.jpg"
    },
    {
        id: 1,
        titulo: "FIFA 2021",
        creador: "EA Sports",
        descripcion: "FIFA 21 ya fue lanzado como una versión separada para PS5, Xbox Series X y Google Stadia. Los jugadores disfrutarán de una experiencia de juego mejorada: tiempos de carga más rápidos, renderización más rápida, tecnologías de animación mejoradas y un diseño más intenso de los jugadores lejos de la acción.",
        ranking: 2,
        imagen: "../../assets/fifa-2021.jpg"
    },
    {
        id: 2,
        titulo: "Call Of Duty",
        creador: "Infinity Ward",
        descripcion: "La historia toma lugar en el año 2011, donde un líder radical ha ejecutado al presidente Al-Fulani que preside un país sin nombre con localización en Oriente Medio, y un movimiento «ultranacionalista» da inicio a una guerra civil en Rusia.",
        ranking: 3,
        imagen: "../../assets/call-of-duty.jpg"
    },
    {
        id: 3,
        titulo: "Days Gone",
        creador: "Sony Interactive Entertainment",
        descripcion: "Days Gone nos lleva a un futuro apocalíptico dominado por zombies, o más bien, seres aún más inteligentes y peligrosos llamados freakers o engendros en español, que no son sino humanos infectados por un virus que los ha convertido en criaturas salvajes y hambrientas.",
        ranking: 4,
        imagen: "../../assets/days-gone.jpg"
    },
    {
        id: 4,
        titulo: "Pro Evolution Soccer",
        creador: "Nipona Konami",
        descripcion: "ACTUALIZACIÓN DE TEMPORADA – PES 2021 es una versión actualizada del título del año pasado, eFootball PES 2020, proporcionando los últimos datos de jugadores y listas de clubes. ... EDICIONES PARTNER CLUB – Por primera vez, los fans podrán comprar Ediciones Club especiales de PES 2021 a través de plataformas digitales.",
        ranking: 5,
        imagen: "../../assets/pes-2021.jpg"
    },
    {
        id: 5,
        titulo: "Rachet & Clank",
        creador: "Sony Interactive",
        descripcion: "De la mano de Ratchet y Clank toca volver a plantar cara al doctor Nefarius, que se ha apoderado de una pistola que crea portales dimensionales y el universo ha empezado a resentirse por ello. Las dimensiones alternativas son la excusa para presentarnos a Rivet, una Lombax que, como en el caso de Ratchet en su dimensión, también es la última de su especie en su mundo.",
        ranking: 6,
        imagen: "../../assets/rachet.jpg"
    },
    {
        id: 6,
        titulo: "Grand Theft Auto V",
        creador: "Rockstar Games",
        descripcion: "GTA V e trata de una aventura de acción de mundo abierto con multitud de misiones en la que encarnamos a tres personajes distintos: Trevor, Michael y Franklin. Además, cuenta con GTA Online, el modo multijugador en lína de GTA 5. El juego sale a la venta el 17 de septiembre de 2013 para PS3 y Xbox 360, el 18 de noviembre de 2014 en PS4 y Xbox One y, por último, el 14 de abril de 2015 para PC.",
        ranking: 7,
        imagen: "../../assets/gta5.jpg"
    },
    {
        id: 7,
        titulo: "Fornite",
        creador: "Epic Games",
        descripcion: "Salvar al mundo es un mundo abierto que puede jugarse solo o online con amigos y es cooperativo. El juego consiste en pelear contra olas de enemigos, controlados por una inteligencia artificial, llamados Husks. El jugador puede estar en un equipo con otros tres jugadores, solo con un equipo de bots o puede incluso desactivar los bots para tener una experiencia completamente en solitario.",
        ranking: 8,
        imagen: "../../assets/fornite.jpg"
    },
    {
        id: 8,
        titulo: "Red Dead Redemption 2",
        creador: "Rockstar Studios",
        descripcion: "Aunque todos los usuarios teníamos altas las expectativas, todos quedamos impresionados ante la magnífica obra de arte que nos estaban presentando. El videojuego está ambientado en el Salvaje Oeste de América, en el año 1899. Se trata de una época convulsa donde las bandas de forajidos comenzaron a ser cruelmente perseguidas por parte de las fuerzas de seguridad.",
        ranking: 8,
        imagen: "../../assets/reddead.jpg"
    },
];

export const OPINIONES: OpinionModel[] = [
    {
        id: 0,
        idVideojuego: 0,
        titulo: 'HeadShot',
        nombreUser: 'Álvaro Esmoris',
        photoUser: '../../assets/Alvaro-Esmoris.jpg',
        descripcion: 'Me ha gustado mucho este juego, y está a muy buen precio'
    },
    {
        id: 1,
        idVideojuego: 1,
        titulo: 'Que saquen más actualizaciones por favor',
        nombreUser: 'Sergio Díaz',
        photoUser: '../../assets/Sergio-Diaz.jpg',
        descripcion: 'es que quieren que te compres el juego cada año pff'
    },
    {
        id: 2,
        idVideojuego: 2,
        titulo: 'Es muy corto, dura muy poco',
        nombreUser: 'Gerard Piqué',
        photoUser: '../../assets/Gerard-Pique.jpg',
        descripcion: 'No me ha gustado porque el modo historia es demasiado corto...',
    },
    {
        id: 3,
        idVideojuego: 3,
        titulo: 'Qué guapo está este juego no?',
        nombreUser: 'Jaime Sánchez',
        photoUser: '../../assets/Jaime-Sanchez.jpg',
        descripcion: 'me encanta matar oleadas de zombies, buen shooter!!'
    },
    {
        id: 4,
        idVideojuego: 4,
        titulo: 'He probado este juego, pero soy más del fifita',
        nombreUser: 'Don JoseMª García',
        photoUser: '../../assets/Polavieja.jpg',
        descripcion: 'Muy bien hecho Sergio, excelente trabajo, te pongo un 10!'
    },
    {
        id: 5,
        idVideojuego: 5,
        titulo: 'Me trae muy buenos recuerdos de la ps2',
        nombreUser: 'Don Alberto',
        photoUser: '../../assets/Don-Alberto.jpg',
        descripcion: 'Console.Write("Este juego podría hacerse con el framework Three.js");',
    },
    {
        id: 6,
        idVideojuego: 6,
        titulo: 'El mejor juego de la historia mundial',
        nombreUser: 'Emilio Pulido',
        photoUser: '../../assets/emilio.jpg',
        descripcion: 'En este juego puedo hacer todo lo que no podría en la vida real',
    },
    {
        id: 7,
        idVideojuego: 7,
        titulo: 'Más fornique y menos fornite',
        nombreUser: 'Andrés Pérez',
        photoUser: '../../assets/andres.jpg',
        descripcion: 'Este juego está ya muy pasado, de vd siguen comprando los pases??',
    },
    {
        id: 8,
        idVideojuego: 8,
        titulo: 'Me flipó este juego, es como vivir un western real',
        nombreUser: 'Alberto Borrero',
        photoUser: '../../assets/alberto.jpg',
        descripcion: 'Lo mejor que tiene es que es muy largo por lo que vicia mucho más',
    }
];