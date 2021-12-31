const { Chain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


const myKey = ec.keyFromPrivate('a68fb7b6c6221a84fc58c9b7e4006e4466db2bc447de25d788b29ce27695ec5c');
const myWalletAddress = myKey.getPublic('hex');


const chain = new Chain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 20);

tx1.signTransaction(myKey);
chain.addTransaction(tx1);

chain.minePendingTransactions(myWalletAddress);

console.log(chain.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid ?', chain.isValid());

chain.minePendingTransactions(myWalletAddress);

console.log(chain.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid ?', chain.isValid());
