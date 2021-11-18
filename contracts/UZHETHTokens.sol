// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract UzhUniToken is ERC20 {
    uint256 public INITIAL_SUPPLY = 1000 * 10 ** 18;

    constructor() ERC20("UzhUniToken", "UZHUNI") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}

contract Intellicoin is ERC20 {
    uint256 public INITIAL_SUPPLY = 100000 * 10 ** 18;

    constructor() ERC20("Intellicoin", "ITC") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}

contract Privatepedia is ERC20 {
    uint256 public INITIAL_SUPPLY = 10 * 10 ** 18;

    constructor() ERC20("Privatepedia", "PVT") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}

contract Incoingnito is ERC20 {
    uint256 public INITIAL_SUPPLY = 250000 * 10 ** 18;

    constructor() ERC20("Incoingnito", "ICG") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}

contract Coinicious is ERC20 {
    uint256 public INITIAL_SUPPLY = 15000 * 10 ** 18;

    constructor() ERC20("Coinicious", "CNS") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}

contract Cryptofficialcoin is ERC20 {
    uint256 public INITIAL_SUPPLY = 1000000 * 10 ** 18;

    constructor() ERC20("CryptofficialCoin", "COC") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}

contract UZHSushi is ERC20 {
    uint256 public INITIAL_SUPPLY = 5000 * 10 ** 18;

    constructor() ERC20("UZHSushi", "UZHSUS") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}

contract UZHCro is ERC20 {
    uint256 public INITIAL_SUPPLY = 1000000000 * 10 ** 18;

    constructor() ERC20("UZHCro", "UZHCro") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
