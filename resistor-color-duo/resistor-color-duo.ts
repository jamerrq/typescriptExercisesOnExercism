export function decodedValue(values: string[]) {

    const mapValues: { [key: string]: number } = {
        'black': 0,
        'brown': 1,
        'red': 2,
        'orange': 3,
        'yellow': 4,
        'green': 5,
        'blue': 6,
        'violet': 7,
        'grey': 8,
        'white': 9
    };

    let firstColor: string = values[0];
    let secondColor: string = values[1];

    return mapValues[firstColor] * 10 + mapValues[secondColor];

};
