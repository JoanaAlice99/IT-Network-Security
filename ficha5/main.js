//const vigenereCipher = require('./VigenereCipher.js');

const VigenereCipher = {

    encrypt : (plainText,key) => {
        
        let keyLen = key.length;
        let plainTextLen = plainText.length;
        
        let plainTextAsInt = [];
        for (let i=0;i<plainTextLen;i++) {
            plainTextAsInt.push(plainText.charCodeAt(i));
        }

        let keyAsInt = [];
        for (let i=0;i<keyLen;i++) {
            keyAsInt.push(key.charCodeAt(i));
        }

        let CYPHER = "";
        let VALUE = 0;
        for (let i=0;i<plainTextAsInt.length;i++) {
            VALUE = (plainTextAsInt[i]+keyAsInt[i])%26;
            CYPHER += String.fromCharCode(VALUE+65);
        }

        return CYPHER;

    },
    decrypt : (cypherText,key) => {
        
        let cypherTextAsInt = [];
        for (let i=0;i<cypherText.length;i++) {
            cypherTextAsInt.push(cypherText.charCodeAt(i));
        }

        let keyAsInt = [];
        for (let i=0;i<key.length;i++) {
            keyAsInt.push(key.charCodeAt(i));
        }

        let PLAINTEXT = "";
        let VALUE = 0;
        for (let i=0;i<cypherTextAsInt.length;i++) {
            VALUE = (cypherTextAsInt[i]-keyAsInt[i])%26;
            PLAINTEXT += String.fromCharCode(VALUE+65);
        }

        /*
        let CYPHER = "";
        let VALUE = 0;
        for (let i=0;i<plainTextAsInt.length;i++) {
            VALUE = (plainTextAsInt[i]+keyAsInt[i])%26;
            CYPHER += String.fromCharCode(VALUE+65);
        }
        */

        return PLAINTEXT;

    }

}

function main() {
    let cypher = VigenereCipher.encrypt("TESTE","TESTE");
    console.log("Cypher: "+cypher);
    let plainText = VigenereCipher.decrypt("MIKMI","TESTE");
    console.log("PlainText: "+plainText);
}

main();