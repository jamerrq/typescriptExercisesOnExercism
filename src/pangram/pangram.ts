export function isPangram(sentence: string): boolean {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const sentenceLetters = sentence.toLowerCase().replace(/[^a-z]/g, '');
    return alphabet.split('').every(letter => sentenceLetters.includes(letter));
};
