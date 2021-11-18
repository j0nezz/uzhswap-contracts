// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract UZHUni is ERC20 {
    uint256 public INITIAL_SUPPLY = 100 * 10 ** 18;

    constructor() ERC20("UZHUni", "UZHUni") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}

contract UZHSushi is ERC20 {
    uint256 public INITIAL_SUPPLY = 1000 * 10 ** 18;

    constructor() ERC20("UZHSushi", "UZHSUS") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}

contract UZHCro is ERC20 {
    uint256 public INITIAL_SUPPLY = 1000 * 10 ** 18;

    constructor() ERC20("UZHCro", "UZHCro") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
