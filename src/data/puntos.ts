export interface Item {
  letra: string;
  texto: string;
}

export interface Pista {
  intro: string;
  pasos: string[];
  /** Si existe, se dibuja el componente de diagrama correspondiente. */
  diagrama?: 'thompson-1';
}

export interface Punto {
  titulo: string;
  intro: string;
  /** Se muestra en negrita al final de la intro. */
  expresion?: string;
  listaTitulo?: string;
  items?: Item[];
  nota?: string;
  pista: Pista;
}

export const puntos: Punto[] = [
  {
    titulo: '1 - Construcción con Thompson',
    intro: 'Construye el AFND-ε de Thompson para la expresión regular:',
    expresion: 'S = (a|b)c*',
    listaTitulo: 'Indica en una tabla:',
    items: [
      { letra: 'a', texto: '¿Cuántos estados tiene el autómata?' },
      { letra: 'b', texto: '¿Cuántas transiciones vacías tiene?' },
      { letra: 'c', texto: '¿Cuáles son el estado inicial y el final?' },
      { letra: 'd', texto: '¿Acepta las cadenas a, bcc, ca?' },
    ],
    nota: 'Se debe mostrar cómo se construye el AFND-ε progresivamente y su resultado final.',
    pista: {
      intro: 'Construye el autómata por partes y no todo de una vez.',
      pasos: [
        'Dibuja primero un solo salto q0 → q1 que lleve toda la expresión (a|b)c*.',
        'Agrega λ entre las expresiones: q0 –λ→ q2 –(a|b)→ q3 –λ→ q4 –c*→ q5 –λ→ q1.',
        'Simplifica primero c* y por último (a|b).',
      ],
      diagrama: 'thompson-1',
    },
  },

  {
    titulo: '2 - De ER a NFA usando JFLAP',
    intro: 'Abre JFLAP y haz lo siguiente con la ER: ',
    expresion: 'S = (a|b)*ab',
    listaTitulo: 'Sigue los pasos',
    items: [
      { letra: 'a', texto: 'Conviértela en NFA con Do All' },
      {
        letra: 'b',
        texto: 'Con Input → Multiple Run, prueba estas cadenas y predice el resultado antes de ejecutar: ab, bab, aab, abb, ba, abab.',
      },
      {
        letra: 'c',
        texto: 'Describe qué lenguaje reconoce (ej. Lenguaje: Todas las cadenas { Σ }, que terminan en { algún patrón })',
      },
    ],
    pista: {
      intro: 'Solo tienes que seguir los pasos',
      pasos: ['a', 'b', 'c'],
    },
  },

  {
    titulo: '3 - Diseña la ER desde un problema real',
    intro: 'Un sistema de parqueadero valida códigos de reserva con este formato: 2 letras seguidas de 3 dígitos, opcionalmente una letra al final.',
    listaTitulo: 'Marca como Válidos (V) o Inválidos (X):',
    items: [
      { letra: 'a', texto: 'LLDDD' },
      { letra: 'b', texto: 'LLDDDL' },
      { letra: 'c', texto: 'LDDD' },
      { letra: 'd', texto: 'LLDD' },
      { letra: 'e', texto: 'LLDDDLL' },
    ],
    nota: 'Usa L para representar una letra y D para representar un dígito. El formato debe tener exactamente 2 letras, luego 3 dígitos y, de manera opcional, una letra al final.',
    pista: {
      intro: 'Primero identifica las partes obligatorias y luego la parte opcional del formato.',
      pasos: [
        'Escribe el patrón base: dos letras seguidas de tres dígitos.',
        'Agrega la letra final como una parte opcional usando la notación de JFLAP.',
        'En JFLAP, escribe la expresión regular usando los símbolos reales del alfabeto que hayas definido para letras y dígitos.',
        'Convierte la ER a NFA y luego usa Convert → Convert to DFA.',
        'Con Input → Multiple Run, prueba las cinco cadenas indicadas y compara el resultado con tus predicciones.',
        'Para explicar la diferencia entre NFA y DFA, observa que en el DFA cada estado tiene como máximo una transición posible para cada símbolo de entrada.',
      ],
    },
  },
];