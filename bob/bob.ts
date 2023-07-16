export function hey(message: string): string {
    function isSilence(message: string): boolean {
        return message.trim() === ''
    };
    function isShouting(message: string): boolean {
        return message.toUpperCase() === message && /[A-Z]/.test(message)
    };
    function isQuestion(message: string): boolean {
        return message.trim().endsWith('?')
    };
    if (isSilence(message)) {
        return 'Fine. Be that way!'
    };
    if (isShouting(message)) {
        if (isQuestion(message)) {
            return "Calm down, I know what I'm doing!";
        };
        return 'Whoa, chill out!';
    };
    if (isQuestion(message)) {
        return 'Sure.';
    };
    return 'Whatever.';
};
