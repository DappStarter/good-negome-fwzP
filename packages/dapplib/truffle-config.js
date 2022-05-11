require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'guess kiwi suit food town recipe sad protect coral light army gentle'; 
let testAccounts = [
"0x47a954595320bbd22d45443dec543649eec36db37e2acc30bad5c9cf5c036d3a",
"0xafbbb110abbfe0b81c102146f356a504f9de800918f5adb7285b2f24735f721a",
"0xb7b8667f12d9573f7b08c73b6ebeeb946f6405ee1d5bbc5210a659e0710cfde6",
"0xc4c22c9e3d098693ccb9bc41f7dcae692899dc393292bbe786856213ab1d8f9c",
"0x76c218108def10a9fb02eea1705f86639a328b7d1ccdbca23f36c07a7bd0a07c",
"0x897b7e06b4d937c60717cc61280e1aeb776a3f6ba2010e935948ff39ffe5efad",
"0x543bb97465ca17a598f5caae80942b19794efb3cf2f8cfa6666b8da273a3c8a3",
"0x9586add113c96a573e3720a70a50ae700c39844af68e55492084a788b71c6c39",
"0x07df1a5bd39c10d02ebf091a18a057722a6aeeedcf9f8643fd27470d1bfafb33",
"0x9b26c505d82869e668515e7418f29d56d9d4fd13d4229344424746d451c196be"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


