export class SimpleCipher {

    public key: string;
    private plain: string = 'abcdefghijklmnopqrstuvwxyz';

    // Generate a truly random key of at least 100 characters in length
    private generateKey() {
        let generatedKey: string = '';
        // Generate a random number between 100 and 200
        const keyLength = Math.floor(Math.random() * (200 - 100 + 1) + 100);
        for (let i = 0; i < keyLength; i++) {
            // Generate a random number between 0 and plain.length
            const index = Math.floor(Math.random() * (this.plain.length));
            generatedKey += this.plain[index];
        }
        return generatedKey;
    }

    constructor(key?: string) {
        if (key) {
            this.key = key;
        } else {
            this.key = this.generateKey();
        }
        console.log('Key: ' + this.key);
    }

    encode(message: string): string {
        let encodedMessage = '';
        for (let i = 0; i < message.length; i++) {
            const index = message.charCodeAt(i) - 97;
            const keyIndex = this.key.charCodeAt(i % this.key.length) - 97;
            const encodedIndex = (index + keyIndex) % 26;
            encodedMessage += String.fromCharCode(encodedIndex + 97);
        }
        return encodedMessage;
    }

    decode(message: string): string {
        let decodedMessage = '';
        for (let i = 0; i < message.length; i++) {
            const index = message.charCodeAt(i) - 97;
            const keyIndex = this.key.charCodeAt(i % this.key.length) - 97;
            const decodedIndex = (index - keyIndex);
            decodedMessage += String.fromCharCode(decodedIndex < 0 ? decodedIndex + 26 + 97 : decodedIndex + 97);
        }
        return decodedMessage;
    }

}
