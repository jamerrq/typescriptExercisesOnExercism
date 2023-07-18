export function commands(number: number): string[] {
    let actions: string[] = [];
    if (number & 1) actions.push('wink');
    if (number & 2) actions.push('double blink');
    if (number & 4) actions.push('close your eyes');
    if (number & 8) actions.push('jump');
    if (number & 16) actions.reverse();
    return actions;
};
