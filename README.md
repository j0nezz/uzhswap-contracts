# UZHSWAP Contracts (UniswapV3 Fork)

This Hardhat project can be used to deploy all necessary contracts to  
the [UZH Ethereum network](http://uzheth.business.uzh.ch)

## Setup

In the root folder create a `.env` file with the following values:

```
UZH_PRIVATE_KEY="<private key of a valid UZHETH account to deploy contracts>"
UZH_PRIVATE_KEY_2 ="<second and different private key of another valid UZHETH account to deploy contracts>"
```

```
GANACHE_PRIVATE_KEY="<private key of a valid GANACHE account to deploy contracts>"
GANACHE_PRIVATE_KEY_2="<second and different private key of another valid GANACHE account to deploy contracts>"
```

The first PK for the network is used in the scripts to deploy the tokens and faucet contract, whereas the secondary PK
or account is used to test and try the functionality of the deployed contracts.

## Deployment  Uniswap Contracts

``` 
hardhat run scripts/deploy-uniswap.ts --network uzh    
```   

### Contract Addresses

Following contracts have been deployed on the UZHETH and are ready to use.

| Contract        | Address     |    
| ------------- |:-------------:|    
| WETH9         | 0xC6dcF22C1Cc62139a01cC2Fd0e1B78045f42b5C4    |    
| Factory       | 0x9e01d1286503b7a68bfCF47fD6e5428Ca8516f76    |     
| Router        | 0xCa6cf1f8A0b4f4C2044A69C48d77f5f351dD3029    |     
| Position Manager   | 0xD7409c33D27c744bb42301a73238c2D079a36649 |     
| Multicall   | 0x9F2a04D94C6EA38965A854c3859C88c1E2Eb0BA0 |     
| Quoter   | 0xffF309A1CA21cdC63d6E1782D8D362aA26BDe480 |  

## Deployment Faucet && ERC20 Tokens

``` 
hardhat run scripts/deploy-tokens.ts --network uzh    
```   

This script will deploy the `Faucet.sol` smart contract that serves as a faucet that can distribute coins to other
addresses. This enables users in the frontend to claim some of our distributed tokens on the UZHETH network.

### Faucet Address

| Contract        | Address     |    
| ------------- |:-------------:|   
| Faucet:   | 0x94a2BAf44642989E785FbF58b54F3CBB0CfFba2C|

Moreover, all the ERC20 tokens from `UZHETHTokens.sol` will be deployed and the `Faucet.sol` will be approved to spend
the tokens.

### Token Addresses

| Contract        | Address     |    
| ------------- |:-------------:|   
| UzhUniToken (UZHUNI):  | 0xd0948BF75F37679ae6F10589a05E014A8Bd70630|  
| UZHSushi (UZHSUS) | 0x2FBD50A221E7fD24270ef3EbA9357f4ef01b6C85|  
| UZHCro (UZHCro) | 0xbc03c6fB1fCe0027C21126a51c6175890971A2F9|  
| Incoingnito (ICG)| 0x82299e7E86353B248aeAe9Eb453953edAef7385d|  
| Intellicoin (ITC)| 0x856E6FB873282A59aA6fE32e013e3e1f4438c6A8|  
| Privatepedia (PVT) | 0xE93f4F6ff8E841649C762D8f50f3a9acb1B67758|   
| Coinicious (CNS) |  0x388EE3B1843254A0D266392bD3bD0Ad95E86C8CF|  
| Cryptofficialcoin (COC) | 0xbA2AFd13C87011AaA12B6370c29590c3e29B59C8|

## Logging

The addresses of the various deployed contracts will be logged and save into `.json` files inside the `./logs`
directory. To differentiate to which network the contracts were deployed, the file names are prefixed with the network
chain ID. For instance, addresses for the UZHETH network (chainID = 702) can be found locally after script execution
in `./logs/702_tokenAddresses.json`.

# V2 - Deployment Faucet && ERC20 Tokens

### V2 Faucet Address

| Contract        | Address     |    
| ------------- |:-------------:|   
| Faucet:   | 0x6305d44b42Ce1BD7173740F602cf1C0FDf67ab6f |

### V2 Token Addresses

| Contract        | Address     |    
| ------------- |:-------------:|   
| UzhUniToken (UZHUNI):  | 0x5c12cebf2722b71a3C85419fA5EE5939D5b06da7 |  
| UZHSushi (UZHSUS) | 0xb0a1c60eB1dCa3E99Ba232c331a4Ec6EEd31410A |  
| UZHCro (UZHCro) | 0x01209c5ec19DDd983D9e5Aa9bff2c741acB58A0D |  
| Incoingnito (ICG)| 0xD2Bf70a16f58A0cF712cF9a3A8C3A93a6cdf966e |  
| Intellicoin (ITC)| 0x1eb3ab261A2bf7dBA1B5dd14bD6FCF163786DaA2 |  
| Privatepedia (PVT) | 0xEA2A3cc2e42b4CcE1b879F58DEC102738F102065 |   
| Coinicious (CNS) |  0x68f3E281C9742448fdc6e2ea6e2fc817bEA47253 |  
| Cryptofficialcoin (COC) | 0x927116E9C17Ab018b4fEaEbc2CE8197eB61ea50A |