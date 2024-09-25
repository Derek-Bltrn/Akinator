//declaramos un JSON con formato tipo árbol binario que se mueve entre nodos dependiendo de si la respuesta es si o no.
let options = {
    'raiz': {
        'pregunta': '¿Es un deporte que utilice una pelota o similares?',
        'restantes': ['Golf', 'Badminton', 'Baloncesto', 'Beisbol', 'Hockey', 'Rugby', 'Remo','PatinajeHielo','Boxeo',
        'Surf', 'Judo', 'Karate', 'Taekwondo', 'Tenis', 'Triatlon', 'Lucha','Esgrima', 'Natacion', 'Futbol', 'Waterpolo',
        'TiroBala','LanzamientoMartillo','SaltoPertiga','SaltoAltura','Gimnasia','LanzamientoJabalina','Halterofilia',
        'Esqui','Ciclismo','TiroArco','Tiro','Voleibol','Clavado'],
        'si': { 
            "pregunta": '¿Golpeas la pelota(o similares) con alguna herramienta?',
            'restantes': ['Badminton', 'Baloncesto', 'Golf', 'Beisbol', 'Hockey', 'Rugby', 'Tenis', 'Waterpolo', 'Futbol','LanzamientoMartillo','TiroBala','Voleibol'],
            'si': {
                "pregunta": '¿Hay una red en medio del campo de juego?',
                'restantes': ['Badminton', 'Golf', 'Beisbol', 'Hockey', 'Tenis'],
                'si': { 
                    "pregunta": '¿La pelota es completamente esférica?',
                    'restantes': ['tenis', 'badminton'],
                    'si': { 
                        'pregunta': '¿Crees que adivine?',
                        'restantes': ['tenis'],
                    },
                    'no': { 
                        'pregunta': "¿Crees que adivine?",
                        'restantes': ['badminton'],
                    }
                },
                'no': { 
                    "pregunta": '¿Hay multiples hoyos en el suelo?',
                    'restantes': ['Golf','Hockey','Beisbol'],
                    'si': {
                        'pregunta': '¿Crees que adivine?',
                        'restantes': ['Golf'],
                    },
                    'no': {
                        'pregunta': '¿Se juega sobre hielo?',
                        'restantes': ['Beisbol', 'Hockey'],
                        'si': { 
                            'pregunta': '¿Crees que adivine?',
                            'restantes': ['Hockey'],
                        },
                        'no': {
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['Beisbol'],
                        }
                    }
                }
            },
            'no': { 
                "pregunta": '¿Se lanzan objetos pesados?',
                'restantes': ['Baloncesto', 'Rugby', 'Waterpolo', 'Futbol','LanzamientoMartillo','TiroBala','Voleibol'],
                'si': {
                    'pregunta': '¿Se dan vueltas antes de tirar el objeto?',
                    'restantes': ['LanzamientoMartillo','TiroBala'],
                    'si':{
                        'pregunta': "¿Crees que adivine?",
                        'restantes': ['LanzamientoMartillo']
                    },
                    'no':{
                        'pregunta': "¿Crees que adivine?",
                        'restantes': ['TiroBala']
                    }
                },
                'no': { 
                    'pregunta': '¿Tiene una porteria con red?',
                    'restantes': ['Baloncesto', 'Rugby', 'Waterpolo', 'Futbol','Voleibol'],
                    'si': { 
                        'pregunta': "¿Se juega principalmente con los pies?",
                        'restantes': ['Waterpolo','Futbol'], 
                        'si':{
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['Futbol'], 
                        },
                        'no':{
                            'pregunta': "¿Crees que divine?",
                            'restantes': ['Waterpolo'], 
                        }
                    },
                    'no': { 
                        'pregunta': '¿Se juega en equipos de 5?',
                        'restantes': ['Baloncesto', 'Rugby','Voleibol'],
                        'si': { 
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['Baloncesto'],
                        },
                        'no': {
                            'pregunta': "¿Hay mucho contacto fisico con el equipo contrario?",
                            'restantes': ['Rugby','Voleibol'], 
                            'si':{
                                'pregunta': "¿Crees que adivine?",
                                'restantes': ['Rugby']
                            },
                            'no':{
                                'pregunta': "¿Crees que adivine?",
                                'restantes': ['Voleibol'], 
                            }
                        }
                    },
                    }
                }
            },
        'no': {
            "pregunta": '¿Es un deporte de combate?',
            'restantes': ['Judo', 'Taekwondo', 'Lucha', 'Esgrima', 'Karate','SaltoPertiga','SaltoAltura','Gimnasia','LanzamientoJabalina','Halterofilia',
                'Esqui','Ciclismo','TiroArco','Tiro','Clavado','Natacion','Triatlon','Surf','Remo','PatinajeHielo','Boxeo'],
            'si': {
                "pregunta": '¿Se golpea al adversario con las manos/guantes?',
                'restantes': ['Judo', 'Karate', 'Taekwondo', 'Lucha','Esgrima','Boxeo'],
                'si': {
                    'pregunta': "¿Se usan cinturones para determinar el nivel del usuario?",
                    'restantes': ['Karate','Boxeo','Taekwondo'], 
                    'si': {
                    'pregunta': "¿Es de origen japones?",
                    'restantes': ['Karate','Taekwondo'], 
                        'si': {
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['Karate'],
                        },
                        'no':{
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['Taekwondo'],
                        }
                    },
                    'no':{
                    'pregunta': "¿Crees que adivine?",
                            'restantes': ['Boxeo'],
                    }
                },
                'no': { 
                    "pregunta": '¿Se usa un arma de estoque?',
                    'restantes': ['judo', 'lucha', 'Esgrima'],
                    'si': { 
                        'restantes': ['Esgrima'],
                        'pregunta': '¿Crees que adivine?',
                        
                    },
                    'no': { 
                        'pregunta': '¿El objetivo principal es proyectar al oponente al suelo?',
                        'restantes': ['Judo', 'Lucha'],
                        'si': { 
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['Judo'],
                        },
                        'no': {
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['Lucha'],
                        }
                    }
                }
            },
            'no': { 
                "pregunta": '¿Es deporte que involucre agua?',
                'restantes': ['SaltoPertiga','SaltoAltura','Gimnasia','LanzamientoJabalina','Halterofilia',
                'Esqui','Ciclismo','TiroArco','Tiro','Clavado','Natacion','Triatlon','Surf','Remo','PatinajeHielo'],
                'si': { 
                    'pregunta': '¿Se practican en una alberca olimpica?',
                    'restantes': ['surf', 'remo','Natacion','Triatlon','Clavado'],
                    'si': { 
                        'pregunta': "¿Es una carrera?",
                        'restantes': ['Natacion','Clavado'],
                        'si': { 
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['Natacion'],
                        },
                        'no': { 
                           'pregunta': "¿Crees que adivine?",
                            'restantes': ['Clavado'],
                        }
                    },
                    'no': { 
                        'pregunta': "¿Se utiliza un objeto para desplazarse?",
                        'restantes': ['Remo','Surf','Triatlon'],
                        'si':{
                            'pregunta':"¿Se practica parado en una tabla?",
                            'restantes':['Surf','Remo'],
                            'si':{
                                'pregunta': "¿Crees que adivine?",
                                'restantes': ['Surf'],
                            },
                            'no': { 
                           'pregunta': "¿Crees que adivine?",
                            'restantes': ['Remo'],
                            }
                        },
                        'no':{
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['Triatlon'],
                        }
                    }
                },
                'no': {
                    'pregunta': '¿Involucra saltos?',
                    'restantes': ['SaltoPertiga','SaltoAltura','Gimnasia','LanzamientoJabalina','Halterofilia',
                'Esqui','Ciclismo','TiroArco','Tiro','PatinajeHielo'],
                    'si': { 
                        'pregunta': "¿Se utiliza un objeto para elevarte?",
                        'restantes': ['SaltoPertiga','SaltoAltura'],
                        'si':{
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['SaltoPertiga'],
                        },
                        'no': { 
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['SaltoAltura'],
                        }
                    },
                    'no': { 
                        'pregunta': "¿Hay lanzamientos de algun proyectil?",
                        'restantes': ['Gimnasia','LanzamientoJabalina','Halterofilia',
                        'Esqui','Ciclismo','TiroArco','Tiro','PatinajeHielo'],
                        'si':{
                            'pregunta': "¿Se utiliza un artefacto para lanzar el proyectil?",
                            'restantes': ['Lanzamiento Jabalina','Tiro','TiroArco'],
                            'si':{
                                'pregunta': "¿Se usa una pistola?",
                                'restantes': ['Tiro','TiroArco'],
                                'si':{
                                    'pregunta': "¿Crees que adivine?",
                                    'restantes': ['Tiro'],
                                },
                                'no': { 
                                    'pregunta': "¿Crees que adivine?",
                                    'restantes': ['TiroArco'],
                                }
                            },
                            'no': { 
                            'pregunta': "¿Crees que adivine?",
                            'restantes': ['Lanzamiento jabalina'],
                        }
                        },
                        'no': {
                            'pregunta': "¿Se practican sobre hielo/nieve?",
                            'restantes': ['Gimnasia','Halterofilia','Esqui','Ciclismo','PatinajeHielo'],
                            'si':{
                                'pregunta': "¿Se usan patines?",
                                'restantes': ['PatinajeHielo','Esqui'],
                                'si':{
                                    'pregunta': "¿Crees que adivine?",
                                    'restantes': ['Patinaje sobre Hielo'],
                                },
                                'no': { 
                                    'pregunta': "¿Crees que adivine?",
                                    'restantes': ['Esqui'],
                                }
                            },
                            'no': { 
                                'pregunta': "¿Se utiliza una bicicleta?",
                                'restantes': ['Gimnasia','Halterofilia','Ciclismo'],
                                'si':{
                                    'pregunta': "¿Crees que adivine?",
                                    'restantes': ['Ciclismo'],
                                },
                                'no': { 
                                    'pregunta': "¿Se levanta una barra con peso?",
                                    'restantes': ['Halterofilia','Gimnasia'],
                                    'si':{
                                    'pregunta': "¿Crees que adivine?",
                                    'restantes': ['Halterofilia'],
                                    },
                                    'no': { 
                                    'pregunta': "¿Se realizan rutinas físicas consideradas artísticas?",
                                    'restantes': ['Gimnasia','No encontrado'],
                                    'si':{
                                        'pregunta': "¿Crees que adivine?",
                                        'restantes': ['Gimnasia'],
                                    },
                                    'no':{
                                        'restantes': ['No tengo el deporte que buscas'],
                                    }
                                    }
                                }
                            }
                        }
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