//declaramos un JSON con formato tipo árbol binario que se mueve entre nodos dependiendo de si la respuesta es si o no.
let options = {
    'raiz': {
        'pregunta': '¿Es un deporte que utilice una pelota o similares?',
        'restantes': ['golf', 'badminton', 'baloncesto', 'beisbol', 'boxeo', 'hockey', 'rugby', 'remo',
            , 'surf', 'judo', 'karate', 'taekwondo', 'tenis', 'tiro', 'triatlon', 'lucha',
            'esgrima', 'natacion', 'voleibol', 'futbol', 'waterpolo'],
        'si': { // Si responde "sí"
            "pregunta": '¿Golpeas la pelota(o similares) con alguna herramienta?',
            'restantes': ['Badminton', 'Baloncesto', 'golf', 'beisbol', 'hockey', 'rugby', 'tenis', 'voleibol', 'waterpolo', 'futbol'],
            'si': { // Si responde "sí"
                "pregunta": '¿Hay una red en medio del campo de juego?',
                'restantes': ['Badminton', 'golf', 'beisbol', 'hockey', 'tenis'],
                'si': { // Si responde "sí"
                    "pregunta": '¿La pelota es completamente esférica?',
                    'restantes': ['tenis', 'badminton'],
                    'si': { // Si responde "sí"
                        'pregunta': '¿Se juega con raqueta?',
                        'restantes': ['tenis'],
                    },
                    'no': { // Si responde "no"
                        'restantes': ['badminton'],
                    }
                },
                'no': { // Si responde "no"
                    "pregunta": '¿El deporte involucra más de un implemento (ej. bate, palo)?',
                    'restantes': ['golf', 'beisbol', 'hockey'],
                    'si': { // Si responde "sí"
                        'pregunta': '¿Se juega en un campo con hoyos?',
                        'restantes': ['golf'],
                    },
                    'no': { // Si responde "no"
                        'pregunta': '¿El deporte se juega sobre césped o hielo?',
                        'restantes': ['beisbol', 'hockey'],
                        'si': { // Si responde "sí"
                            'pregunta': '¿Se utilizan guantes y bates?',
                            'restantes': ['beisbol'],
                        },
                        'no': { // Si responde "no" 
                            'restantes': ['hockey'],
                        }
                    }
                }
            },
            'no': { // Si responde "no" a "¿Golpeas la pelota(o similares)?"
                "pregunta": '¿El deporte se juega principalmente con las manos?',
                'restantes': ['Baloncesto', 'rugby', 'voleibol', 'waterpolo', 'futbol'],
                'si': { // Si responde "sí"
                    'pregunta': '¿El deporte se juega en una cancha de agua?',
                    'restantes': ['waterpolo', 'baloncesto', 'rugby'],
                    'si': { // Si responde "sí"
                        'restantes': ['waterpolo'], // Solo waterpolo se juega en cancha de agua
                    },
                    'no': { // Si responde "no" 
                        'pregunta': '¿Es un deporte de contacto intenso?',
                        'restantes': ['baloncesto', 'rugby'],
                        'si': { // Si responde "sí"
                            'restantes': ['rugby'], // Rugby es más intenso que baloncesto
                        },
                        'no': { // Si responde "no" 
                            'restantes': ['baloncesto'], // Baloncesto es menos intenso que rugby
                        }
                    }
                },
                'no': { // Si no se juega con las manos
                    'pregunta': '¿Se permite el uso de los pies para golpear la pelota?',
                    'restantes': ['voleibol', 'futbol'],
                    'si': { // Si responde "sí"
                        'restantes': ['futbol'],
                    },
                    'no': { //Si responde "no"
                        'restantes': ['voleibol'],
                    }
                }
            }
        },
        'no': { // Si responde "no" a "¿Es un deporte que utilice una pelota o similares?"
            "pregunta": '¿Es un deporte de combate?',
            'restantes': ['judo', 'boxeo', 'taekwondo', 'lucha', 'esgrima', 'karate'],
            'si': { // Si responde "sí"
                "pregunta": '¿Involucra armas?',
                'restantes': ['esgrima', 'boxeo', 'judo', 'karate', 'taekwondo', 'lucha'],
                'si': {
                    'restantes': ['esgrima'], // Solo esgrima involucra armas
                },
                'no': { // Sin armas
                    "pregunta": '¿Es un deporte de contacto sin golpes directos?',
                    'restantes': ['judo', 'lucha', 'karate', 'taekwondo'],
                    'si': { // Si responde "sí"
                        'restantes': ['judo', 'lucha'],
                        'pregunta': '¿Se basa en agarres y lanzamientos?',
                        'si': { //Si responde "sí"
                            'restantes': ['judo'],
                        },
                        'no': { // Si responde "no"
                            'restantes': ['lucha'],
                        }
                    },
                    'no': { // Si hay golpes directos
                        'pregunta': '¿Involucra patadas como técnica principal?',
                        'restantes': ['karate', 'taekwondo'],
                        'si': { // Si responde "sí"
                            'restantes': ['taekwondo'],
                        },
                        'no': { // Si responde "no"
                            'restantes': ['karate'],
                        }
                    }
                }
            },
            'no': { // Si no es deporte de combate
                "pregunta": '¿Está relacionado a un deporte acuático?',
                'restantes': ['remo', 'surf', 'triatlon', 'natacion'],
                'si': { // Si responde "sí"
                    'pregunta': '¿Es un deporte de velocidad en el agua?',
                    'restantes': ['natacion', 'remo'],
                    'si': { //Si responde "sí"
                        'restantes': ['natacion'],
                    },
                    'no': { // Si responde "no"
                        'restantes': ['remo'],
                    }
                },
                'no': { // No es de velocidad
                    'pregunta': '¿Es un deporte que involucra una tabla?',
                    'restantes': ['surf', 'triatlon'],
                    'si': { // SI responde "sí"
                        'restantes': ['surf'],
                    },
                    'no': { // Si responde "no"
                        'restantes': ['triatlon'],
                    }
                }
            }
        }
    }
};
//Declaramos una variable para ir teniendo registro del nodo en el que estamos
let nodo = options.raiz;
//Declaramos una variable para ingresar al dato de la pregunta en el nodo actual 
let pregunta = nodo.pregunta;
//Función llamada al dar al boton si o no
function respuesta(YesNo) {
//Si solo queda un elemento en el arreglo de restantes significa que ya se sabe cual es el resultado por lo que se imprime
    if (nodo.restantes.length == 1) {
        document.getElementById('pregunta').innerHTML = 'El deporte es: ' + nodo.restantes[0];
        return;
    } 
    //Si dieron que si al botón se actualiza el nodo pasando a su nodo hijo "si"
    if(YesNo)
    {
        nodo=nodo.si;
    }
    //Si dieron que no al botón se actualiza el nodo pasando a su nodo hijo "no"
    else
    {
        nodo=nodo.no;
    }
    //la variable para la pregunta se iguala a la pregunta del nodo actual
    pregunta = nodo.pregunta;
    //Si existe la pregunta, actualizar el elemento html con id=pregunta para mostrar la siguiente pregunta
    if (pregunta) {
        document.getElementById('pregunta').innerHTML = pregunta;
    }
}