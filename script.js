//declaramos un JSON con formato tipo árbol binario que se mueve entre nodos dependiendo de si la respuesta es si o no.
let options = {
    'raiz': {
        'pregunta': '¿Es un deporte que utilice una pelota o similares?',
        'restantes': ['golf', 'badminton', 'baloncesto', 'beisbol', 'hockey', 'rugby', 'remo',
        'surf', 'judo', 'karate', 'taekwondo', 'tenis', 'triatlon', 'lucha',
            'esgrima', 'natacion', 'futbol', 'waterpolo', 'boxeo', 'gimnasia'],
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
                        'pregunta': '¿Crees que adivine?',
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
                "pregunta": '¿En este deporte se realizan muchos lanzamientos o es más común golpear la pelota con los puños?',
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
                    'restantes': ['futbol'],
                    }
                }
            },
        'no': { // Si responde "no" a "¿Es un deporte que utilice una pelota o similares?"
            "pregunta": '¿Es un deporte de combate?',
            'restantes': ['judo', 'taekwondo', 'lucha', 'esgrima', 'karate', 'boxeo'],
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
                        'restantes': ['taekwondo', 'karate', 'boxeo'],
                        'si': { // Si responde "sí"
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['taekwondo'],
                        },
                        'no': { // Si responde "no"
                            'pregunta': "¿Contiene cintas para demostrar el nivel del usuario?",
                            'restantes': ['karate', 'boxeo'],

                            'si': {
                                'pregunta': "¿Crees que adivine?",
                                'restantes': ['karate']
                            },
                            'no': {
                                'pregunta': "¿Crees que adivine?",
                                'restantes': ['boxeo']
                            }
                        }
                    }
                }
            },
            'no': { // Si no es deporte de combate
                "pregunta": '¿Se utiliza un tabla o un remo para moverse?',
                'restantes': ['remo', 'surf', 'triatlon', 'natacion', 'skateboarding'],
                'si': { // Si responde "sí"
                    'pregunta': '¿Es un deporte acuatico?',
                    'restantes': ['surf', 'remo'],
                    'si': { //Si responde "sí"
                        'pregunta': "¿Es un deporte donde se hace trucos en una ola?",
                        'restantes': ['surf', 'remo'],
                        'si': {
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['surf'],
                        },
                        'no':{
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['remo'],
                        }
                    },
                    'no': { // Si responde "no"
                        'pregunta': "¿Crees que adivine?",
                        'restantes': ['skateboarding'],
                    }
                },
                'no': { // No se utiliza tabla o remo para moverse
                    'pregunta': '¿Compite una persona a la vez?',
                    'restantes': ['triatlon', 'natacion', 'gimnasia', 'tiro pelota pesada', 'tiro con arco', 'halterofilia', 'jabalina'],
                    'si': { // SI responde "sí"
                        'pregunta': "¿Es un deporte donde se mueven cargas pesadas?",
                        'restantes': ['triatlon', 'gimnasia', 'tiro de bala', 'tiro con arco', 'halterofilia', 'jabalina', 'lanzamiento de martillo'],
                        'si': {
                            'pregunta': "¿Es un deporte donde lanzas una carga?",
                        'restantes': ['tiro de bala', 'halterofilia', 'lanzamiento de martillo'],
                            'si':{
                                'pregunta': "¿En este deporte, giras antes de lanzar la carga?",
                                'restantes': ['tiro de bala', 'lanzamiento martillo'],
                                'si': {
                                    'pregunta': "¿Crees que adivine?",
                                    'restantes': ['lanzamiento de martillo'],
                                },
                                'no': {
                                    'pregunta': "¿Crees que adivine?",
                                    'restantes': ['tiro de bala'],
                                },

                            },                            
                        },
                        'no':{
                                'pregunta': "¿En este deporte se usa un arco?",
                                'restantes': ['triatlon', 'tiro con arco', 'jabalina', 'gimnasia'],
                                'si': {
                                'pregunta': "¿Crees que adivine?",
                                'restantes': ['tiro con arco'],
                                },
                                'no': {
                                    'pregunta': "¿En este deporte tiras una jabalina?",
                                    'restantes': ['triatlon', 'jabalina', 'gimnasia'],
                                    'si': {
                                    'pregunta': "¿Crees que adivine?",
                                    'restantes': ['jabalina'],
                                    },
                                    'no': {
                                    'pregunta': "¿En este deporte se hace una carrera de obstaculos que combina varios terrenos?",
                                    'restantes': ['triatlon', 'gimnasia'],
                                    'si':{
                                        'pregunta': "¿Crees que adivine?",
                                        'restantes': ['triatlon'],
                                    },
                                    'no':{
                                        'pregunta': "¿Crees que adivine?",
                                        'restantes': ['gimnasia'],
                                    }
                                    },

                                },
                                

                            }
                        
                    },
                    'no': { // Si responde "no"
                        'pregunta': "¿Crees que adivine?",
                        'restantes': ['¿una broma?'],
                    }
                }
            }
        }
    }   
}
//Declaramos una variable para ir teniendo registro del nodo en el que estamos
let nodo = options.raiz;
//Declaramos una variable para ingresar al dato de la pregunta en el nodo actual 
let pregunta = nodo.pregunta;
//Función llamada al dar al boton si o no
function respuesta(YesNo) {
//Si solo queda un elemento en el arreglo de restantes significa que ya se sabe cual es el resultado por lo que se imprime
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
    //Si dieron que si al botón se actualiza el nodo pasando a su nodo hijo "si"
    else if(YesNo)
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