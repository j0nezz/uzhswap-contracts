// SPDX-License-Identifier: MIT
pragma solidity 0.7.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Faucet
{
    // For rate limiting
    mapping(address => uint256) nextRequestAt;
    //the owner of the generous token provider for this faucet
    address private _tokenOwner;
    //how much tokens we want to spend per claim
    uint256 private _tokensPerClaim;

    event Claim(address claimer, uint256 amount);

    constructor(address tokenOwner, uint256 tokensPerClaim) {
        _tokenOwner = tokenOwner;
        _tokensPerClaim = tokensPerClaim;
    }


    function claim(IERC20 tokenAddress) external {
        // rate limiting
        require(nextRequestAt[msg.sender] < block.timestamp, "Faucet Timeout Limit: Try again later");
        //send tokens to the one who called this contract
        IERC20(tokenAddress).transferFrom(_tokenOwner, msg.sender, _tokensPerClaim);
        // Next request from the address can be made only after 5 minutes
        nextRequestAt[msg.sender] = block.timestamp + (1 minutes);
        // emit event
        emit Claim(msg.sender, _tokensPerClaim);
    }
}