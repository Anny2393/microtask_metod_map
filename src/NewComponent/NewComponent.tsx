import React from 'react';

export type StudentsPropsType = {
    id: number
    name: string
    age: number
}

export type NewComponentPropsType = {
    title: string
    students: Array<StudentsPropsType>
}

export function NewComponent (props: NewComponentPropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <ul>{props.students.map((StudentsPropsType, index) => {
                    return(
                        <li key={StudentsPropsType.id}>
                            <span>{StudentsPropsType.name}</span>
                            <span> Age:{StudentsPropsType.age}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};