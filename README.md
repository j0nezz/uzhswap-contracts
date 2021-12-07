

# UZHSwap Contracts 

This repository is part of the UZHSwap project for the Seminar Blockchain Programming at the University of Zurich in the Fall semester of 2021. It contains several smart contracts as well as deployment scripts.
By using the [Hardhat](https://hardhat.org/) project setup, all necessary contracts can be deployed to    
the [UZH Ethereum chain](http://uzheth.business.uzh.ch). Hardhat is currently configured for deployment on two chains, either your local [Ganache](https://trufflesuite.com/ganache/) or the mentioned UZH Ethereum chain.

<p align="center">
  <img src="https://gateway.pinata.cloud/ipfs/QmQRBFLwwtnyyeYSTpe8UMRagyC6Zj6ia6wJS2R41Bfnkg" />
</p>

## Setup

In the root folder, create a `.env` file with the following values:

```  
UZH_PRIVATE_KEY="<private key of a valid UZHETH account to deploy contracts>"  
UZH_PRIVATE_KEY_2 ="<second and different private key of another valid UZHETH account to deploy contracts>"  
```  

```  
GANACHE_PRIVATE_KEY="<private key of a valid GANACHE account to deploy contracts>"  
GANACHE_PRIVATE_KEY_2="<second and different private key of another valid GANACHE account to deploy contracts>"  
```  

The first PK for the network is used in the scripts to deploy the tokens and faucet contract, whereas the secondary PK  or account is used to test and try the functionality of the deployed contracts.

After a successful setup, you start deploying the contracts yourself.

## Quickstart

- Install dependencies: `npm install.`
- Deploy all contracts and example tokens: `npm run deploy:[uzh|ganache]`

---
## Deployment  - Uniswap Contracts

To deploy all smart contracts related to Uniswap functionalities, you can run the following command:

``` 
hardhat run scripts/deploy-uniswap.ts --network uzh      
```   

### Contract Addresses

Following contracts have already been deployed on the UZH Ethereum network and are ready to use.

| Contract        | Address     |      
| ------------- |:-------------:|      
| WETH9         | 0xC6dcF22C1Cc62139a01cC2Fd0e1B78045f42b5C4 |      
| Factory       | 0x9e01d1286503b7a68bfCF47fD6e5428Ca8516f76 |       
| Router        | 0xCa6cf1f8A0b4f4C2044A69C48d77f5f351dD3029 |       
| Position Manager   | 0xD7409c33D27c744bb42301a73238c2D079a36649 |       
| Multicall   | 0x9F2a04D94C6EA38965A854c3859C88c1E2Eb0BA0 |       
| Quoter   | 0xffF309A1CA21cdC63d6E1782D8D362aA26BDe480 |    

## Deployment - Faucet and ERC20 Tokens

To deploy the faucet and all custom Tokens, you can run the following command:

```
hardhat run scripts/deploy-tokens.ts --network uzh      
```   

The script will deploy the `Faucet.sol` smart contract that serves as a faucet that can distribute coins to other  
addresses. This enables users in the front end to claim some of our distributed tokens on the UZH Ethereum network. Moreover, the script will deploy all the ERC20 tokens from `UZHETHTokens.sol`, and the `Faucet.sol` will be approved to spend the tokens.

### Faucet Address

| Contract        | Address     |      
| ------------- |:-------------:|     
| Faucet:   | 0x6305d44b42Ce1BD7173740F602cf1C0FDf67ab6f |   



### Token Addresses

| Contract        | Address     |      
| ------------- |:-------------:|     
| UzhUniToken (UZHUNI):  | 0x5c12cebf2722b71a3C85419fA5EE5939D5b06da7 |    
| UZHSushi (UZHSUS) | 0xb0a1c60eB1dCa3E99Ba232c331a4Ec6EEd31410A |    
| UZHCro (UZHCro) | 0x01209c5ec19DDd983D9e5Aa9bff2c741acB58A0D |    
| Incoingnito (ICG)| 0xD2Bf70a16f58A0cF712cF9a3A8C3A93a6cdf966e |    
| Intellicoin (ITC)| 0x1eb3ab261A2bf7dBA1B5dd14bD6FCF163786DaA2 |    
| Privatepedia (PVT) | 0xEA2A3cc2e42b4CcE1b879F58DEC102738F102065 |     
| Coinicious (CNS) |  0x68f3E281C9742448fdc6e2ea6e2fc817bEA47253 |    
| Cryptofficialcoin (COC) | 0x927116E9C17Ab018b4fEaEbc2CE8197eB61ea50A



## Logging

The addresses of the various deployed contracts will be locally logged and saved into `.json` files inside the `./logs`  directory on your machine in case you want to reinspect some of the details of your deployments later. 

To differentiate which network the contracts were deployed to, the file names are prefixed with the network  
chain ID. For instance, addresses for the UZHETH network (chainID = 702) can be found locally after script execution in `./logs/702_tokenAddresses.json`.  
  
