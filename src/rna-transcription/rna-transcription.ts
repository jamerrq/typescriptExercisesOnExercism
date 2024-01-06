export function toRna(sequence: string) {
    return sequence.split('').map(nucleotide => {
        switch (nucleotide) {
            case 'C':
                return 'G';
            case 'G':
                return 'C';
            case 'A':
                return 'U';
            case 'T':
                return 'A';
            default:
                throw new Error('Invalid input DNA.');
        }
    }).join('');
}
