# UZHSWAP Contracts (UniswapV3 Fork)

This Hardhat project can be used to deploy all necessary contracts to
the [UZH Ethereum network](http://uzheth.business.uzh.ch)

## Setup

In the root folder create a `.env` file with the following values:

    UZH_PRIVATE_KEY="<private key of a valid UZHETH account to deploy contracts>"  
    GANACHE_PRIVATE_KEY="<private key of a valid GANACHE account to deploy contracts>"  
  
## Deployment  Uniswap Contracts

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

## Deployment Tokens

```  
hardhat run scripts/deploy-erc20-tokens.ts --network uzh  
```  

The addresses of your deployed token will be stored locally in the `tokenAddresses.json` file for you to check later.

### Token Addresses

| Contract        | Address     |  
| ------------- |:-------------:| 
| UzhUniToken (UZHUNI):  | 0xE771E7A06abDC5176C9D20365c844680dC75b173|
| UZHSushi (UZHSUS) | 0x8182965A5dC302e6b25b2b177c7CCa42C5099795 |
| UZHCro (UZHCro) | 0x90aF2F7f19A93fc80D4F983218C56Bc2f8544989 |
| Deployed Incoingnito (ICG)| 0xEe9E427945A073c9C8801dC5da44a276aF339333|
|Deployed Intellicoin (ITC)| 0x2A35E060849Fa56Ba648C93a50E23359b5d14515 |
| Deployed Privatepedia (PVT) | 0x5e1bcb66D6CbFA4F98bB63BaF4357a543232BFbc | 
| Deployed Coinicious (CNS) |  0xC486C817bE36F9ccf257BfF86CC33ff71a69D651 |
| Deployed Cryptofficialcoin (COC) | 0xd0b00725255C35514A8d702b4B4F78C141E8B5eF |
