export const answer = (question: string): number => {
    const validOperations = /plus|minus|multiplied by|divided by/g;
    const simpleQuestion = /What is( \d+)?\?/;
    if (!validOperations.test(question) && !simpleQuestion.test(question)) {
        throw new Error('Unknown operation');
    }
    const repeatedOperations = new RegExp(`(${validOperations.source}) (${validOperations.source})`, 'g');
    const repeatedNumbers = /(\d+) (\d+)/g;
    if (repeatedOperations.test(question) || repeatedNumbers.test(question)) {
        throw new Error('Syntax error');
    }
    const words = question.replace('?', '').replace(/ by/g, 'by').split(' ').filter((word, index) => index !== 0 && index !== 1);
    const numbers = words.filter(word => !isNaN(Number(word))).map(word => Number(word));
    const operations = words.filter(word => isNaN(Number(word)));
    if (numbers.length !== operations.length + 1) throw new Error('Syntax error');
    let result = numbers[0];
    for (let i = 0; i < Math.max(operations.length, numbers.length - 1); i++) {
        try {
            let number = Number(numbers[i + 1]);
            if (!number) throw new Error('Syntax error');
            switch (operations[i]) {
                case 'plus':
                    result += number;
                    break;
                case 'minus':
                    result -= number;
                    break;
                case 'multipliedby':
                    result *= number;
                    break;
                case 'dividedby':
                    result /= number;
                    break;
                default:
                    throw new Error('Syntax error');
            }
        } catch (error) {
            throw new Error('Syntax error');
        }
    }
    return result;
}
