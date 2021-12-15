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
    constructor() ERC721("HERO", "HER") {}

    modifier duringMintTime() {
        require(block.timestamp >= startTime && block.timestamp <= startTime + duration, "It's not mint time");
        _;
    }

    function mintNFT ( uint _count ) external payable duringMintTime{
        require(address(this).balance > 0,"Not enough ETH");
        require(total_supply + _count <= 10000, "Can't mint anymore");
        require(msg.value == .1 ether * _count,"Not match balance");
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

    function setMintTimeTest( ) external onlyOwner {
        startTime = block.timestamp;
    }

    function getRestSupply() external view returns (uint256) {
        return total_supply;
    }

    function getMintTime() external view returns (uint256) {
        return startTime;
    }
  
    function withdraw() external onlyOwner {
        address  _owner = owner();
        payable(_owner).transfer( address(this).balance );
    }
}