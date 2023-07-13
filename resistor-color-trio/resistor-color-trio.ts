const colors: string[] = [
    'black', 'brown', 'red', 'orange', 'yellow',
    'green', 'blue', 'violet', 'grey', 'white'
];

type Color = typeof colors[number];


export function decodedResistorValue(values: Color[]): string {
    const [first, second, third]: Color[] = values;
    const value: number = (colors.indexOf(first) * 10 + colors.indexOf(second)) * Math.pow(10, colors.indexOf(third));
    const unit: string = value < 1000 ? 'ohms' : value < 1000000 ? 'kiloohms' : value < 1000000000 ? 'megaohms' : 'gigaohms';
    return `${value / (unit === 'ohms' ? 1 : unit === 'kiloohms' ? 1000 : unit === 'megaohms' ? 1000000 : 1000000000)} ${unit}`;
};
