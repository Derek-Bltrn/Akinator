let options = {
    'raiz': {
        'pregunta': '¿Es un deporte que utilice una pelota o similares?',
        'restantes': ['atletismo', 'gimnasia', 'golf', 'badminton', 'baloncesto', 'beisbol', 'boxeo', 'halterofilia', 'hockey', 'rugby', 'remo',
            'saltos', 'skateboarding', 'surf', 'judo', 'karate', 'taekwondo', 'ciclismo', 'tenis', 'tiro', 'tiroArco', 'triatlon', 'lucha', 'escalada',
            'esgrima', 'natacion', 'voleibol', 'futbol', 'waterpolo', 'patinaje', 'esqui', 'tiroJabalina', 'tiroPelotaPesada','futbol americano'],
        'si': { // Si responde "sí"
            "pregunta": '¿Golpeas la pelota(o similares) con alguna herramienta?',
            'restantes': ['Badminton', 'Baloncesto', 'golf', 'beisbol', 'hockey', 'rugby', 'tenis', 'voleibol', 'waterpolo', 'futbol', 'futbol americano'],
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
                'restantes': ['Baloncesto', 'rugby', 'voleibol', 'waterpolo', 'futbol', 'futbol americano'],
                'si': { // Si responde "sí"
                    'pregunta': '¿El deporte se juega en una cancha de agua?',
                    'restantes': ['waterpolo', 'baloncesto', 'rugby'],
                    'si': { // Si responde "sí"
                        'restantes': ['waterpolo'], // Solo waterpolo se juega en cancha de agua
                    },
                    'no': { // Si responde "no" 
                        'pregunta': '¿Es un deporte de contacto intenso?',
                        'restantes': ['baloncesto', 'rugby', 'futbol americano'],
                        'si': { // Si responde "sí"
                            'pregunta': '¿Es un deporte estadounidense que se caracteriza por hacer touchdowns?',
                            'restantes': ['rugby', 'futbol americano'], 
                        
                            'si':{
                                'restantes': ['futbol americano'],
                            },
                            'no':{
                                'restantes': ['rugby'],
                            }
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
                        'restantes': ['karate', 'taekwondo', 'boxeo'],
                        'si': { // Si responde "sí"
                            'restantes': ['taekwondo'],
                        },
                        'no': { // Si responde "no"
                            'pregunta': '¿Contiene cintas para demostrar el nivel del usuario?',
                            'restantes': ['karate', 'boxeo'],
                            'si':{//Si responde "sí"
                                'restantes': ['karate'],
                            },
                            'no':{//Si responde "no"
                                'restantes': ['boxeo']
                            }

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

let nodo = options.raiz;
let pregunta = nodo.pregunta;

function respuesta(YesNo) {
    if (nodo.restantes.length == 1) {
      document.getElementById('pregunta').innerHTML = 'El deporte es: ' + nodo.restantes[0]
      //Creamos el boton de reset
      const botonReset = document.createElement('button')
      // Añadir texto al botón
      botonReset.innerText = 'Otro juego'
      // Estilos basicos del boton
      botonReset.style.backgroundColor = '#ee5838'
      botonReset.style.color = 'white'
      botonReset.style.border = 'none'
      botonReset.style.borderRadius = '5px'
      botonReset.style.cursor = 'pointer'
      // Añadir un evento de click que recargue la página
      botonReset.onclick = function() {
        location.reload(); // Esto recarga la página actual
    }
        // Insertar el botón en el DOM
      document.body.appendChild(botonReset)
      const boton1 = document.getElementById('boton_si')
      const boton2 = document.getElementById('boton_no')
      boton1.remove()
      boton2.remove()
      return;
    }
    pregunta = nodo.pregunta;
    if (pregunta) {
        document.getElementById('pregunta').innerHTML = pregunta;
    }
}