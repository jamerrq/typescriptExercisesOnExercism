const plain = 'abcdefghijklmnopqrstuvwxyz';
const cipher = 'zyxwvutsrqponmlkjihgfedcba';

function convert(from: string, to:string, text: string): string {
    return text.split('').map((char) => {
        const index = from.indexOf(char);
        return index === -1 ? char : to[index];
    }).join('');
}

export function encode(text: string): string {
    return convert(plain, cipher, text.toLowerCase().replace(/[^a-z0-9]/g, '')).replace(/(.{5})/g, '$1 ').trim();
}

export function decode(text: string): string {
    return convert(cipher, plain, text.toLowerCase().replace(/[^a-z0-9]/g, '').replace(/\s/g, ''));
}
