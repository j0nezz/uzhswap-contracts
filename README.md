# UZHSWAP Contracts (UniswapV3 Fork)

This Hardhat project can be used to deploy all necessary contracts to
the [UZH Ethereum network](http://uzheth.business.uzh.ch)

## Setup

In the root folder create a `.env` file with the following values:

    UZH_PRIVATE_KEY="<private key of a valid UZHETH account to deploy contracts>"  
    GANACHE_PRIVATE_KEY="<private key of a valid GANACHE account to deploy contracts>"  
    GANACHE_URL="http://127.0.0.1:7545"
    UZH_URL="http://130.60.244.246:8545"  

## Deployment

```  
hardhat run scripts/deploy.ts --network uzh  
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

### Deploy Tokens

```  
hardhat run scripts/deploy-erc20-tokens.ts --network uzh  
```  

The addresses of your deployed token will be stored locally in the `tokenAddresses.json` file for you to check later.