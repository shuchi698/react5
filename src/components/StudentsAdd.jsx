import React, { createContext, useState } from 'react';

export const ContextData = createContext();

const arr = [
    { name: 'John', age: 26, course: 'MERN', batch: 'October', id: "1" },
    { name: 'Doe', age: 25, course: 'MERN', batch: 'November', id: "2" },
    { name: 'Biden', age: 26, course: 'MERN', batch: 'September', id: "3" },
    { name: 'Barar', age: 22, course: 'MERN', batch: 'September', id: "4" },
    { name: 'Christ', age: 23, course: 'MERN', batch: 'October', id: "5" },
    { name: 'Elent', age: 24, course: 'MERN', batch: 'November', id: "6" },
];

export const StudentsAdd = (props) => {

    const [students, setStudents] = useState(arr);

    return (
        <ContextData.Provider value={[students, setStudents]}>
            {props.children}
        </ContextData.Provider>
    )
}