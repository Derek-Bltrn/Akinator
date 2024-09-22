let All = ['atletismo', 'gimnasia', 'golf', 'badminton', 'baloncesto', 'beisbol', 'boxeo', 'halterofilia', 'hockey', 'rugby', 'remo',
    'saltos', 'skateboarding', 'surf', 'judo', 'karate', 'taekwondo', 'ciclismo', 'tenis', 'tiro', 'tiroArco', 'triatlon', 'lucha', 'escalada',
    'esgrima', 'natacion', 'voleibol', 'futbol', 'waterpolo', 'patinaje', 'esqui', 'tiroJabalina', 'tiroPelotaPesada'];

let options = {
    'root': {
        'pregunta': '¿Es un deporte que utilice una pelota o similares?',
        'restantes': All,
        'hijoIzquierdo': { // Si responde "sí"
            "pregunta": '¿Golpeas la pelota(o similares) con alguna herramienta?',
            'restantes': ['Badminton', 'Baloncesto', 'golf', 'beisbol', 'hockey', 'rugby', 'tenis', 'voleibol', 'waterpolo', 'futbol'],
            'hijoIzquierdo': { // Si responde "sí"
                "pregunta": '¿Hay una red en medio del campo de juego?',
                'restantes': ['Badminton', 'golf', 'beisbol', 'hockey', 'tenis'],
                'hijoIzquierdo': { // Si responde "sí"
                    "pregunta": '¿La pelota es completamente esférica?',
                    'restantes': ['tenis', 'badminton'],
                    'hijoIzquierdo': { // Si responde "sí"
                        'pregunta': '¿Se juega con raqueta?',
                        'restantes': ['tenis'],
                    },
                    'hijoDerecho': { // Si responde "no"
                        'restantes': ['badminton'],
                    }
                },
                'hijoDerecho': { // Si responde "no"
                    "pregunta": '¿El deporte involucra más de un implemento (ej. bate, palo)?',
                    'restantes': ['golf', 'beisbol', 'hockey'],
                    'hijoIzquierdo': { // Si responde "sí"
                        'pregunta': '¿Se juega en un campo con hoyos?',
                        'restantes': ['golf'],
                    },
                    'hijoDerecho': { // Si responde "no"
                        'pregunta': '¿El deporte se juega sobre césped o hielo?',
                        'restantes': ['beisbol', 'hockey'],
                        'hijoIzquierdo': { // Si responde "sí"
                            'pregunta': '¿Se utilizan guantes y bates?',
                            'restantes': ['beisbol'],
                        },
                        'hijoDerecho': { // Si responde "no" 
                            'restantes': ['hockey'],
                        }
                    }
                }
            },
            'hijoDerecho': { // Si responde "no" a "¿Golpeas la pelota(o similares)?"
                "pregunta": '¿El deporte se juega principalmente con las manos?',
                'restantes': ['Baloncesto', 'rugby', 'voleibol', 'waterpolo', 'futbol'],
                'hijoIzquierdo': { // Si responde "sí"
                    'pregunta': '¿El deporte se juega en una cancha de agua?',
                    'restantes': ['waterpolo', 'baloncesto', 'rugby'],
                    'hijoIzquierdo': { // Si responde "sí"
                        'restantes': ['waterpolo'], // Solo waterpolo se juega en cancha de agua
                    },
                    'hijoDerecho': { // Si responde "no" 
                        'pregunta': '¿Es un deporte de contacto intenso?',
                        'restantes': ['baloncesto', 'rugby'],
                        'hijoIzquierdo': { // Si responde "sí"
                            'restantes': ['rugby'], // Rugby es más intenso que baloncesto
                        },
                        'hijoDerecho': { // Si responde "no" 
                            'restantes': ['baloncesto'], // Baloncesto es menos intenso que rugby
                        }
                    }
                },
                'hijoDerecho': { // Si no se juega con las manos
                    'pregunta': '¿Se permite el uso de los pies para golpear la pelota?',
                    'restantes': ['voleibol', 'futbol'],
                    'hijoIzquierdo': { // Si responde "sí"
                        'restantes': ['futbol'],
                    },
                    'hijoDerecho': { //Si responde "no"
                        'restantes': ['voleibol'],
                    }
                }
            }
        },
        'hijoDerecho': { // Si responde "no" a "¿Es un deporte que utilice una pelota o similares?"
            "pregunta": '¿Es un deporte de combate?',
            'restantes': ['judo', 'boxeo', 'taekwondo', 'lucha', 'esgrima', 'karate'],
            'hijoIzquierdo': { // Si responde "sí"
                "pregunta": '¿Involucra armas?',
                'restantes': ['esgrima', 'boxeo', 'judo', 'karate', 'taekwondo', 'lucha'],
                'hijoIzquierdo': {
                    'restantes': ['esgrima'], // Solo esgrima involucra armas
                },
                'hijoDerecho': { // Sin armas
                    "pregunta": '¿Es un deporte de contacto sin golpes directos?',
                    'restantes': ['judo', 'lucha', 'karate', 'taekwondo'],
                    'hijoIzquierdo': { // Si responde "sí"
                        'restantes': ['judo', 'lucha'],
                        'pregunta': '¿Se basa en agarres y lanzamientos?',
                        'hijoIzquierdo': { //Si responde "sí"
                            'restantes': ['judo'],
                        },
                        'hijoDerecho': { // Si responde "no"
                            'restantes': ['lucha'],
                        }
                    },
                    'hijoDerecho': { // Si hay golpes directos
                        'pregunta': '¿Involucra patadas como técnica principal?',
                        'restantes': ['karate', 'taekwondo'],
                        'hijoIzquierdo': { // Si responde "sí"
                            'restantes': ['taekwondo'],
                        },
                        'hijoDerecho': { // Si responde "no"
                            'restantes': ['karate'],
                        }
                    }
                }
            },
            'hijoDerecho': { // Si no es deporte de combate
                "pregunta": '¿Está relacionado a un deporte acuático?',
                'restantes': ['remo', 'surf', 'triatlon', 'natacion'],
                'hijoIzquierdo': { // Si responde "sí"
                    'pregunta': '¿Es un deporte de velocidad en el agua?',
                    'restantes': ['natacion', 'remo'],
                    'hijoIzquierdo': { //Si responde "sí"
                        'restantes': ['natacion'],
                    },
                    'hijoDerecho': { // Si responde "no"
                        'restantes': ['remo'],
                    }
                },
                'hijoDerecho': { // No es de velocidad
                    'pregunta': '¿Es un deporte que involucra una tabla?',
                    'restantes': ['surf', 'triatlon'],
                    'hijoIzquierdo': { // SI responde "sí"
                        'restantes': ['surf'],
                    },
                    'hijoDerecho': { // Si responde "no"
                        'restantes': ['triatlon'],
                    }
                }
            }
        }
    }
};

let currentNode = options.root;
let pregunta = currentNode.pregunta;

function respuesta(YesNo) {
    if (YesNo && currentNode.hijoIzquierdo) {
        currentNode = currentNode.hijoIzquierdo;
    } else if (!YesNo && currentNode.hijoDerecho) {
        currentNode = currentNode.hijoDerecho;
    } else {
        // Si no hay más preguntas, se muestra el deporte final o un mensaje de error.
        if (currentNode.restantes.length === 1) {
            document.getElementById('pregunta').innerHTML = 'El deporte es: ' + currentNode.restantes[1];
        } else if (currentNode.restantes.length > 1) {
            document.getElementById('pregunta').innerHTML = 'Error: Se esperaba un solo deporte, pero quedan varias opciones.';
        } else {
            document.getElementById('pregunta').innerHTML = 'Error: No se pudo determinar un deporte.';
        }
        return;
    }
    
    pregunta = currentNode.pregunta;
    if (pregunta) {
        document.getElementById('pregunta').innerHTML = pregunta;
    }
}

document.getElementById('pregunta').innerHTML = pregunta;
