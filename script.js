let All=['atletismo','gimnasia','golf','badminton','baloncesto','beisbol','boxeo','halterofilia','hockey','rugby','remo',
    ,'saltos','skateboarding','surf','judo','karate','taekwondo','ciclismo','tenis','tiro','tiroArco','triatlon','lucha','escalada',
'esgrima','natacion','voleibol','futbol','waterpolo','patinaje','esqui','tiroJabalina','tiroPelotaPesada']

let restantes=['Baloncesto','rugby','voleibol','waterpolo','futbol']
let options={
    'root':{
        'bool':null,
        'pregunta': '¿Es un deporte que utilice una pelota o similares?',
        'restantes':All,
        "hijoIzquiero":{
            "bool":null,
            "pregunta":'¿Golpeas la pelota(o similares) con alguna herramienta?',
            'restantes':['Badminton','Baloncesto','golf','beisbol','hockey','rugby','tenis','voleibol','waterpolo','futbol'],
            'hijoIzquierdo':{
                "bool":null,
                "pregunta":'¿Hay una red en medio del campo de juego?',
                'restantes': ['Badminton','golf','beisbol','hockey','tenis'],
                'hijoIzquierdo':{
                    "bool":null,
                    "pregunta":'¿La pelota es completamente esferica?',
                    'restantes': ['tenis','badminton'],
                    'hijoIzquierdo':{
                        'restantes': ['tenis'],
                    },
                    'hijoDerecho':{
                        'restantes': ['badminton'],
                    }
                },
                'hijoDerecho':{
                    "bool":null,
                    "pregunta":'¿Golpeas la pelota(o similares) con alguna herramienta?',
                    'restantes': ['golf','beisbol','hockey'],
                }
            },
            'hijoDerecho':{
                "bool":null,
                "pregunta":'¿Golpeas la pelota(o similares) con alguna herramienta?',
                'restantes': ['Baloncesto','rugby','voleibol','waterpolo','futbol'],
            }
        },
        "hijoDerecho":{
            
        }
    },
    'preguntas':[
        ['¿Es un deporte que utilice una pelota o similares?','¿Golpeas la pelota(o similares) con alguna herramienta?',''],
        ['¿Es un deporte de combate?','hola',''],
        ['¿Esta relacionado a un deporte acuatico?','hola',''],
        ['¿Utilizan algun equipaje u objeto en los pies para desplazarte?','hola',''],
        ['¿Involucra el lanzamiento de algun objeto/proyectil?','hola',''],
        ['¿Tiene una meta?','hola',''],
        ['¿Involucra levantamiento de peso?','hola',''],
        ['¿Se suele practicar en montañas al aire libre?','hola',''],
        ['¿Se realizan rutinas o secuencuas de movimiento usualmente artisticas?']
    ],
    'RespuestasRestantes':[
        ['Badminton','Baloncesto','golf','beisbol','hockey','rugby','tenis','voleibol','waterpolo','futbol'],
        ['judo','boxeo','taekwondo','lucha','esgrima','karate'],
        ['remo','surf','triatlon','natacion'],
        ['patinaje','ciclismo','skateboarding','esqui'],
        ['tiro','tiroJabalina','tiroPelotaPesada','TiroArco'],
        ['atletismo','saltos',''],
        ['halterofilia',''],
        ['escalada'],
        ['gimnasia']
]
}
let pregunta=options.preguntas[0][0];
let YesNo;
let i=0;
function respuesta(YesNo){
    if(YesNo){
        console.log(pregunta)
        document.getElementById('pregunta').innerHTML = pregunta;
    }else{
    }
}
