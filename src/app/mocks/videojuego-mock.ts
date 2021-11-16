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
];

export const OPINIONES: OpinionModel[] = [
    {
        id: 0,
        idVideojuego: 0,
        titulo: 'Pedazo de juego',
        nombreUser: 'Álvaro Esmoris',
        photoUser: '../../assets/Alvaro-Esmoris.jpg',
        descripcion: 'Me ha gustado mucho este juego, y está a muy buen precio'
    },
    {
        id: 1,
        idVideojuego: 1,
        titulo: 'Videojuego preferido',
        nombreUser: 'Sergio Díaz',
        photoUser: '../../assets/Sergio-Diaz.jpg',
        descripcion: 'Una buena chutada como los de antes jajaj'
    },
    {
        id: 2,
        idVideojuego: 2,
        titulo: 'Es muy corto',
        nombreUser: 'Gerard Piqué',
        photoUser: '../../assets/Gerard-Pique.jpg',
        descripcion: 'No me ha gustado porque el modo historia es demasiado corto... ESTAFADORES!',
    },
    {
        id: 3,
        idVideojuego: 3,
        titulo: 'Que guapo está este juegaso no?',
        nombreUser: 'Jaime Sánchez',
        photoUser: '../../assets/Jaime-Sanchez.jpg',
        descripcion: 'Me ha gustado mucho este juego, y está a muy buen precio'
    },
    {
        id: 4,
        idVideojuego: 4,
        titulo: 'Me gusta mucho esta web, pero los juegos son malísimos',
        nombreUser: 'Don JoseMª García Polavieja',
        photoUser: '../../assets/Polavieja.jpg',
        descripcion: 'Muy bien hecho Sergio, excelente trabajo!'
    },
    {
        id: 5,
        idVideojuego: 5,
        titulo: 'Yo es que soy más del antiguo snake en el móvil',
        nombreUser: 'Don Alberto Arjona',
        photoUser: '../../assets/Don-Alberto.jpg',
        descripcion: 'Aunque me dan buenos recuerdos de cuando me echaba sus carreras en el NeedForSpeed de la ps2',
    }
];