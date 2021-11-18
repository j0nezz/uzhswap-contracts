pragma solidity ^0.7.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Incoingnito is ERC20 {
    uint256 public INITIAL_SUPPLY = 10000*10**18;

    constructor() ERC20("Incoingnito", "ICG") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
