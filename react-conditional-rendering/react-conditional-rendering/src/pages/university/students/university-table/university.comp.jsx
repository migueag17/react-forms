import React from 'react';
import CoursesTable from '../courses-table/courses-table.comp';
import StudentsRow from '../students-row/students-row.comp';
import StudentsTable from '../students-table/students-table.comp';

import './university.style.css'

const UniversityTable = () => {
    return (
    <div className="university-table">
        <p className="titulo1">University</p>
        <CoursesTable courseName="Programming 1"/>
        <StudentsTable tipeDate={{
            name:"Name",
            grade:"Grade",
            gender:"Gender",
        }}/>
        <StudentsRow student={{
            name:"Luis Miguel Aguirre",
            grade:4.2,
            gender:"Male",
        }}/>
         <StudentsRow student={{
            name:"Juan Pablo Ortegon",
            grade:1.5,
            gender:"Male",
        }}/>
         <StudentsRow student={{
            name:"Maria Jose Mancera",
            grade:4.9,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Natalia Vallejo Moxe",
            grade:4.6,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Orlando Gomez Rey",
            grade:2.8,
            gender:"Male",
        }}/>
        <StudentsRow student={{
            name:"Valentina Hernandez",
            grade:1.9,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Cintia Fernandez Paz",
            grade:3.6,
            gender:"Female",
        }}/>
        <CoursesTable courseName="Programming 2"/>
        <StudentsTable tipeDate={{
            name:"Name",
            grade:"Grade",
            gender:"Gender",
        }}/>
        <StudentsRow student={{
            name:"Luis Fernando Lópezo",
            grade:3.7,
            gender:"Male",
        }}/>
         <StudentsRow student={{
            name:"Luisa Fernanda Perez",
            grade:1.9,
            gender:"Female",
        }}/>
         <StudentsRow student={{
            name:"Juan Esteban Sanchez",
            grade:1.3,
            gender:"Male",
        }}/>
        <StudentsRow student={{
            name:"Mauricio Ortega Marin",
            grade:3.7,
            gender:"Male",
        }}/>
        <StudentsRow student={{
            name:"Juan Fernando Gómez",
            grade:1.7,
            gender:"Male",
        }}/>
        <StudentsRow student={{
            name:"Laura Aguirre Ocampo",
            grade:4.8,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Liliana Cubillos Moreno",
            grade:1.4,
            gender:"Female",
        }}/>
        
        <CoursesTable courseName="Databases 1"/>
        <StudentsTable tipeDate={{
            name:"Name",
            grade:"Grade",
            gender:"Gender",
        }}/>
        <StudentsRow student={{
            name:"Daniel Garcian Arias",
            grade:2.1,
            gender:"Male",
        }}/>
         <StudentsRow student={{
            name:"Martha Lucía Gómez",
            grade:4.5,
            gender:"Female",
        }}/>
         <StudentsRow student={{
            name:"Caterine Cardona Rios",
            grade:5.0,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Carolina Salcedo Ruiz",
            grade:0.4,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Lorena Sanchez Diaz",
            grade:3.9,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Leandro Ceballos Toro",
            grade:2.8,
            gender:"Male",
        }}/>
     
    </div>
    )
}

export default UniversityTable;