const Apostador = [
{
    idIApostador: 1,
    Nombre : 'Jean Carlos Mosquera',
    Identificacion: '1316764974',
},
{
    idIApostador: 2,
    Nombre : 'Carlos Moreira',
    Identificacion: '1323468790',
},
{
    idIApostador: 3,
    Nombre : 'Ivan Kaviedes',
    Identificacion: '0967329017',
},
{
    idIApostador: 4,
    Nombre : 'Maria Bermello',
    Identificacion: '1315678964',
},
{
    idIApostador: 5,
    Nombre : 'Damian Villegas',
    Identificacion: '0274513162'},
]
const Encuentro =[
{
    idEcuentro: 1,
    Equipo1: 'Valencia',
    Equipo2: 'Rayo Vallecano',
    Fecha: '03/04/2023',
    Hora: '14:00 pm'
},
{
    idEcuentro: 2,
    Equipo1: 'Empoli',
    Equipo2: 'Lecce',
    Fecha: '03/04/2023',
    Hora: '11:30 am'
},
{
    idEcuentro: 3,
    Equipo1: 'Bolivar',
    Equipo2: 'Palmeiras',
    Fecha: '05/04/2023',
    Hora: '19:30 pm'
},
{
    idEcuentro: 4,
    Equipo1: 'Emelec',
    Equipo2: 'Aucas',
    Fecha: '04/04/2023',
    Hora: '18:00 pm'
},
{
    idEcuentro: 5,
    Equipo1: 'FC Barcelona',
    Equipo2: 'Real Madrid',
    Fecha: '05/04/2023',
    Hora: '14:00 pm'
}]
const Pronostico=[
{
    id:1,
    idIApostador:1,
    idEcuentro:1,
    Resultado_Propuesto: 'Gana equipo 1 - Valencia',
    Valor_Apuesta:'$25'
},
{
    id:2,
    idIApostador:2,
    idEcuentro:2,
    Resultado_Propuesto: 'Gana equipo 1 - Empoli',
    Valor_Apuesta:'$60'
},
{
    id:3,
    idIApostador:3,
    idEcuentro:3,
    Resultado_Propuesto: 'Gana equipo 2 - Palmeiras',
    Valor_Apuesta:'$30'
},
{
    id:4,
    idIApostador:4,
    idEcuentro:4,
    Resultado_Propuesto: 'Gana equipo 1 - Emelec',
    Valor_Apuesta:'$90'
},
{
    id:5,
    idIApostador:5,
    idEcuentro:5,
    Resultado_Propuesto: 'Gana equipo 1 - FC Barcelona',
    Valor_Apuesta:'$150'
}]

console.log('    \n    APOSTADOR:\n')
for (const iterator of Apostador )
{
    Encuentroaux=Encuentro.find(ele=> ele.idEcuentro===iterator.idIApostador)
    console.log(`id Apostador: ${iterator.idIApostador}    Nombre: ${iterator.Nombre}      Identificación: ${iterator.Identificacion}`);
}

console.log(' \n   ENCUENTRO DEPORTIVO:       \n   ' )
Encuentro.forEach(Encuentro => {
    console.log(`i dEncuentro: ${Encuentro.idEcuentro}   Equipo1: ${Encuentro.Equipo1}    Equipo2: ${Encuentro.Equipo2}   Fecha: ${Encuentro.Fecha}   Hora: ${Encuentro.Hora}`);
    
});

console.log('    \n    PRONOSTICO: \n ')
for (elemento of Pronostico){
   
    console.log(`iD: ${elemento.id}   Id Apostador: ${elemento.idIApostador}  Id Ecuentro Deportivo: ${elemento.idEcuentro}   Resultado propuesto: ${elemento.Resultado_Propuesto}     Valor Apuesta: ${elemento.Valor_Apuesta}`);
    
    }

   