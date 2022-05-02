const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

 class VigenereCipheringMachine {
   constructor (value) {
     this.rev = value;
   }
   encrypt(message, key) {
     if (message === undefined || key === undefined) {
       throw new Error('Incorrect arguments!');
     }
     message = message.toUpperCase();
     key = key.toUpperCase();
     let str = '';
     for (let i = 0, j = 0; i < message.length; i++, j++) {
       if (!alphabet.includes(message[i])) {
         str += message[i];
         j--;
       } else {
       let pos = (alphabet.indexOf(key[j % key.length]) + alphabet.indexOf(message[i])) % alphabet.length;
       str += alphabet.slice(pos, pos + 1);
       }
     }
     if (this.rev === true || this.rev === undefined) {
       return str;
     } else if (this.rev === false) {
       return str.split('').reverse().join('');
     }
   }
   decrypt(encryptedMessage, key) {
     if (encryptedMessage === undefined || key === undefined) {
       throw new Error('Incorrect arguments!');
     }
     encryptedMessage = encryptedMessage.toUpperCase();
     key = key.toUpperCase();
     let str = '';
     for (let i = 0, j = 0; i < encryptedMessage.length; i++, j++) {
       if (!alphabet.includes(encryptedMessage[i])) {
         str += encryptedMessage[i];
         j--;
       } else {
       let pos = (alphabet.indexOf(encryptedMessage[i]) % alphabet.length) - (alphabet.indexOf(key[j % key.length]));
       if (pos === -1) {
        str += alphabet.slice(pos);
       }
       str += alphabet.slice(pos, pos + 1);
       }
     }
     if (this.rev === true || this.rev === undefined) {
       return str;
     } else if (this.rev === false) {
       return str.split('').reverse().join('');
     }
   }
 }

 debugger;

module.exports = {
  VigenereCipheringMachine
};
