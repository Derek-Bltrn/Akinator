let options = {
    'raiz': {
        'pregunta': '¿Es un deporte que utilice una pelota o similares?',
        'restantes': ['golf', 'badminton', 'baloncesto', 'beisbol', 'hockey', 'rugby', 'remo',
        'surf', 'judo', 'karate', 'taekwondo', 'tenis', 'triatlon', 'lucha',
            'esgrima', 'natacion', '', 'futbol', 'waterpolo'],
        'si': { // Si responde "sí"
            "pregunta": '¿Golpeas la pelota(o similares) con alguna herramienta?',
            'restantes': ['Badminton', 'Baloncesto', 'golf', 'beisbol', 'hockey', 'rugby', 'tenis', '', 'waterpolo', 'futbol'],
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
                        'pregunta': "¿Crees que adivine?",
                        'restantes': ['badminton'],
                    }
                },
                'no': { // Si responde "no"
                    "pregunta": '¿El deporte involucra una varilla larga y de cabeza grande?',
                    'restantes': ['golf', 'beisbol', 'hockey'],
                    'si': { // Si responde "sí"
                        'pregunta': '¿Se juega en un campo con hoyos?',
                        'restantes': ['golf'],
                    },
                    'no': { // Si responde "no"
                        'pregunta': '¿El deporte se juega sobre césped?',
                        'restantes': ['beisbol', 'hockey'],
                        'si': { // Si responde "sí"
                            'pregunta': '¿Se utilizan guantes y bates?',
                            'restantes': ['beisbol'],
                        },
                        'no': { // Si responde "no" 
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['hockey'],
                        }
                    }
                }
            },
            'no': { // Si responde "no" a "¿Golpeas la pelota(o similares)?"
                "pregunta": '¿En el deporte se hacen muchos lanzamientos o no se le pega usualmente con los puños a la pelota?',
                'restantes': ['Baloncesto', 'rugby', '', 'waterpolo', 'futbol'],
                'si': { // Si responde "sí"
                    'pregunta': '¿El deporte se juega en una cancha de agua?',
                    'restantes': ['waterpolo', 'baloncesto', 'rugby'],
                    'si': { // Si responde "sí"
                        'pregunta': "¿Crees que adivine?",
                        'restantes': ['waterpolo'], // Solo waterpolo se juega en cancha de agua
                    },
                    'no': { // Si responde "no" 
                        'pregunta': '¿Es un deporte de 5 miembros generalmente altos?',
                        'restantes': ['baloncesto', 'rugby'],
                        'si': { // Si responde "sí"
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['baloncesto'], // Baloncesto es menos intenso que rugby 
                        },
                        'no': { // Si responde "no" 
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['rugby'], //Rugby es más intenso que baloncesto
                        }
                    }
                },
                'no': { // Si no se hacen lanzamientos o se le pega usualmente con los puños a la pelota
                    'pregunta': '¿Se permite el uso de los pies para golpear la pelota?',
                    'restantes': ['futbol', ''],
                    'si': { // Si responde "sí"
                        'pregunta': "¿Crees que adivine?",
                        'restantes': ['futbol'],
                    },
                    'no': { //Si responde "no"
                        'pregunta': "¿Crees que adivine?",
                        'restantes': [''],
                    }
                }
            }
        },
        'no': { // Si responde "no" a "¿Es un deporte que utilice una pelota o similares?"
            "pregunta": '¿Es un deporte de combate?',
            'restantes': ['judo', 'taekwondo', 'lucha', 'esgrima', 'karate'],
            'si': { // Si responde "sí"
                "pregunta": '¿Involucra armas?',
                'restantes': ['esgrima', 'judo', 'karate', 'taekwondo', 'lucha'],
                'si': {
                    'pregunta': "¿Crees que adivine?",
                    'restantes': ['esgrima'], // Solo esgrima involucra armas
                },
                'no': { // Sin armas
                    "pregunta": '¿Es un deporte de contacto sin golpes directos?',
                    'restantes': ['judo', 'lucha', 'karate', 'taekwondo'],
                    'si': { // Si responde "sí"
                        'restantes': ['judo', 'lucha'],
                        'pregunta': '¿Se basa en agarres y lanzamientos?',
                        'si': { //Si responde "sí"
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['judo'],
                        },
                        'no': { // Si responde "no"
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['lucha'],
                        }
                    },
                    'no': { // Si hay golpes directos
                        'pregunta': '¿Involucra patadas como técnica principal?',
                        'restantes': ['taekwondo', 'karate'],
                        'si': { // Si responde "sí"
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['taekwondo'],
                        },
                        'no': { // Si responde "no"
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['karate'],
                        }
                    }
                }
            },
            'no': { // Si no es deporte de combate
                "pregunta": '¿Se utiliza un tabla o un remo para moverse?',
                'restantes': ['remo', 'surf', 'triatlon', 'natacion'],
                'si': { // Si responde "sí"
                    'pregunta': '¿Es un deporte donde se va parado en una tabla?',
                    'restantes': ['surf', 'remo'],
                    'si': { //Si responde "sí"
                        'pregunta': "¿Crees que adivine?",
                        'restantes': ['surf'],
                    },
                    'no': { // Si responde "no"
                        'pregunta': "¿Crees que adivine?",
                        'restantes': ['remo'],
                    }
                },
                'no': { // No se utiliza tabla o remo para moverse
                    'pregunta': '¿Es un deporte que es generalmente individual?',
                    'restantes': ['triatlon', 'natacion'],
                    'si': { // SI responde "sí"
                        'pregunta': "¿Crees que adivine?",
                        'restantes': ['triatlon'],
                    },
                    'no': { // Si responde "no"
                        'pregunta': "¿Crees que adivine?",
                        'restantes': ['natacion'],
                    }
                }
            }
        }
    }
};

let nodo = options.raiz;
let pregunta = nodo.pregunta;

function respuesta(YesNo) {

    if (nodo.restantes.length == 1) {
        document.getElementById('pregunta').innerHTML = 'El deporte es: ' + nodo.restantes[0];
        return;
    } 
    if(YesNo)
    {
        nodo=nodo.si;
    }
    else
    {
        nodo=nodo.no;
    }
    pregunta = nodo.pregunta;
    if (pregunta) {
        document.getElementById('pregunta').innerHTML = pregunta;
    }

}
