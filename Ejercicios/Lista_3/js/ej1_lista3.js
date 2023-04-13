 var banda1 = {
    nombre: "Bring Me The Horizon",
    anoLanzamientoPrimerCD : 2006,
    mejoresMusicas: ["Chelsea Smile", "Wonderful Life"],
    informacionesIntegrantes: [
        {
            nombreCompleto: "Oliver Sykes",
            paisOrigen: "Ashford, Reino Unido",
            edad: 36
        },
        {
            nombreCompleto: "Jordan Fish",
            paisOrigen: "Reino Unido",
            edad: 36
        },
        {
            nombreCompleto: "Lee Malia",
            paisOrigen: "Sheffield, Reino Unido",
            edad: 35
        },
        {
            nombreCompleto: "Matt Nicholls",
            paisOrigen: "Maltby, Reino Unido",
            edad: 37
        }
    
    ],
    estilo: "Metal alternativo"
}
var banda2 = {
    nombre: "Twenty One Pilots",
    anoLanzamientoPrimerCD : 2011,
    mejoresMusicas: ["Car Radio", "Trees", "Chlorine"],
    informacionesIntegrantes: [
        {
            nombreCompleto: "Tyler Joseph",
            paisOrigen: "Columbus, EE.UU",
            edad: 34
        },
        {
            nombreCompleto: "Josh Dun",
            paisOrigen: "Columbus, EE.UU",
            edad: 34
        }
    ],
    estilo: ["rap alternativo", "rock alternativo"]
}
var banda3 = {
    nombre: "Daft Punk",
    anoLanzamientoPrimerCD : 1997,
    mejoresMusicas: ["Giorgio by Moroder", "Digital Love"],
    informacionesIntegrantes: [
        {
            nombreCompleto: "Thomas Bangalter",
            paisOrigen: "París, Francia",
            edad: 48
        },
        {
            nombreCompleto: "Guy-Manuel de Homem-Christo",
            paisOrigen: "Neuilly-sur-Seine, Isla de Francia",
            edad: 49
        }
    ],
    estilo: "French House"
}

var database = []

database.push(banda1)
database.push(banda2)
database.push(banda3)
console.log(database)

database.sort()
console.log(database)

database.pop()
console.log(database)

