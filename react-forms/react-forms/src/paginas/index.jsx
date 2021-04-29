import React, { useState } from 'react';
import './index.style.css'
import aeropuertoimage from '././img/aeropuerto.jpg'
//import aeropuertoimagetwo from '././img/aeropuerto-internacional.jpg'

import TablaVuelos from './vuelos/paises/tabla-vuelos/vuelos-table.comp';

const VuelosPag = () => {
    const [nombreContinente, setNombreContinente] = useState('c1');
    const [nombrePais, setNombrePais] = useState('');
    const [nombreCiudad, setNombreCiudad] = useState('');
    const [precio, setPrecio] = useState(0);
    const [fecha, setFecha] = useState('20/04/21');

    const agregarVuelo = (event) =>{
        event.preventDefault();
        console.log('nombreContinente: ' + nombreContinente);
        console.log('nombrePais: ' + nombrePais);
        console.log('nombreCiudad: ' + nombreCiudad);
        console.log('precio: ' + precio);
    }


    let vuelosList = [
            {
                id:"v1",
                name:'Vuelos LatinoAmérica',
                paises:[
                    { 
                        id:"v1p1",
                      paisNombre:"Colombia" ,
                      ciudades:[
                        {   
                            id:"v1p1c1",
                           nombreCiudad:'Medellin',
                           precio: '$540000',
                           fecha:'11 Mayo',
                        },
                        {   
                            id:"v1p1c2",
                            nombreCiudad:'Manizales',
                            precio: '$790000',
                            fecha:'19 Mayo',
                         },
                         {   
                            id:"v1p1c3",
                            nombreCiudad:'Bogota',
                            precio: '$800000',
                            fecha:'09 Mayo',
                         },
                         {   
                            id:"v1p1c4",
                            nombreCiudad:'Cartagena',
                            precio: '$1200000',
                            fecha:'22 Mayo',
                         },
                         {   
                            id:"v1p1c5",
                            nombreCiudad:'Santa Marta',
                            precio: '$1200000',
                            fecha:'29 Mayo',
                         },
                         {   
                            id:"v1p1c6",
                            nombreCiudad:'Armenia',
                            precio: '$1200000',
                            fecha:'27 Mayo',
                         },
                         {   
                            id:"v1p1c7",
                            nombreCiudad:'Cali',
                            precio: '$1200000',
                            fecha:'02 Mayo',
                         },
                         {   
                            id:"v1p1c8",
                            nombreCiudad:'Ibague',
                            precio: '$1200000',
                            fecha:'02 Mayo',
                         },
                        ]  
                    }   
                ]
            },
            {   
                id:"",
                name:'Vuelos Europa',
                paises:[
                    {
                    id:"v2p2",
                    paisNombre:"España" ,
                    ciudades:[
                      {  
                        id:"v2p2c1",
                         nombreCiudad:'Madrid',
                         precio: '$5400000',
                         fecha:'11 Mayo',
                      },
                      {
                        id:"v2p2c2",
                          nombreCiudad:'Barcelona',
                          precio: '$3500000',
                          fecha:'16 Mayo',
                       },
                       {  
                        id:"v2p2c3",
                         nombreCiudad:'Sevilla',
                         precio: '$7800000',
                         fecha:'31 Octubre',
                      },
                      {
                        id:"v2p2c4",
                          nombreCiudad:'Bilbao',
                          precio: '$4300000',
                          fecha:'16 Octubre',
                       },
                       {
                        id:"v2p2c5",
                          nombreCiudad:'Alicante',
                          precio: '$2700000',
                          fecha:'30 Diciembre',
                       },
                       {
                        id:"v2p2c6",
                          nombreCiudad:'Zaragoza',
                          precio: '$1900000',
                          fecha:'13 Julio',
                       },
                       {
                        id:"v2p2c7",
                          nombreCiudad:'Valencia',
                          precio: '$2150000',
                          fecha:'12 Junio',
                       },
                       {
                        id:"v2p2c8",
                          nombreCiudad:'Toledo',
                          precio: '$6700000',
                          fecha:'19 Agosto',
                       },
                    ]
                }
            ]
        }
    ];
        




    return(
    <div>
        
        <header>
            <h1 className="titulo">Aeropuerto Manizales </h1>
        </header>

        <div className="nav-color">
            <nav className="navegacion-principal contenedor">
                <a> Inicio</a>
                <a>Ofertas De Vuelos</a>
                <a>Crear Vuelo</a>
            </nav>
        </div> 

        <img className="imagen" src={aeropuertoimage} />

        <TablaVuelos vuelosList={vuelosList}/>
    
         
        <main className="contenedor2 sombra">
            <section>
                <h2>Crear Vuelo</h2>
                <form className="formulario">
                    <fieldset>
                        <legend>Llena todos los campos</legend>
                        <div className="contenedor-campos">
                        <div className="campo">
                        <label> Continente </label>
                        </div>
                        <div className="campo">
                            <select value={nombreContinente}
                            onChange={(event)=>{
                                console.log(event.target.value);
                                setNombreContinente(event.target.value);
                            }}
                            className="input-text">
                           <option value="c1">LatinoAmerica</option>
                           <option value="c2">Europa</option>
                           </select></div>
                            
                        <div className="campo">
                            <label > Nombre Pais</label>
                            <input className="input-text" 
                            type="text" 
                            value={nombrePais}
                            onChange={(event)=>{
                                setNombrePais(event.target.value);
                            }}
                            placeholder="Nombre país"/>
                            </div>

                        <div className="campo">
                            <label > Nombre ciudad</label>
                            <input value={nombreCiudad}
                            onChange={(event)=>{
                                setNombreCiudad(event.target.value);
                            }}
                            className="input-text" type="text" placeholder="Nombre ciudad"/>
                        </div>
                
                        <div className="campo">
                             <label>Precio</label>
                            <input value={precio}
                            onChange={(event)=>{
                                setPrecio(event.target.value);
                            }}
                            className="input-text" type="number" placeholder="Precio vuelo"/>
                        </div>
                
                        <div className="campo">
                            <label>Fecha</label>
                            <input className="input-text" type="date" placeholder="Fecha vuelo"/>
                        </div>
                
                    </div>

            <div className="alinear-derecha flex">
                <input onClick={agregarVuelo}
                 className="boton w-100" type="submit" value="Crear"/>
            </div>

                    </fieldset>

                </form>
            </section>
        </main>
    </div> 
    )   

    
}

export default VuelosPag;
