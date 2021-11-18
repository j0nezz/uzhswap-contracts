pragma solidity ^0.7.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Cryptofficialcoin is ERC20 {
    uint256 public INITIAL_SUPPLY = 10000*10**18;

    constructor() ERC20("CryptofficialCoin", "COC") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}