import React from 'react';

export type ArrayTopCarsPropsType = {
    manufacturer: string;
    model: string;
};

export type TopCarsPropsType = {
    topCars: Array<ArrayTopCarsPropsType>;
};

export function TopCars(props: TopCarsPropsType) {
    return (
        <table>
            <thead>
            <tr>
                <th>Название</th>
                <th>Модель</th>
            </tr>
            </thead>
            <tbody>
            {props.topCars.map((car, index) => {
                const itemNumber = index + 1;
                return (
                    <tr key={index}>
                        <td>{car.manufacturer}</td>
                        <td>{car.model}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}