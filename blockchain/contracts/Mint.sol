// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title Mint NFT Contract
 */

contract MintContract is ERC721, Ownable {
    uint256 total_supply = 0;
    mapping (address => uint) ownwallet;
    uint256 startTime;
    uint256 duration = 4 hours;

    modifier duringMintTime() {
        require( block.timestamp >= startTime && block.timestamp <= startTime + duration,"It's not mint time");
        _;
    }

    function mintElon (uint _count) external payable duringMintTime{
        require(total_supply + _count <= 6969, "Can't mint anymore");
        require(msg.value == .069 ether * _count,"Not match balance");
        require(ownwallet[msg.sender] + _count <= 6,"Maxium is 6");

        for( uint i = 0; i < _count; i++ ) {
            _mint(msg.sender, total_supply);
            total_supply++;
            ownwallet[msg.sender]++;
        }
    }

    function setMintTime( uint256 _startTime ) external onlyOwner {
        startTime = _startTime;
    }
}