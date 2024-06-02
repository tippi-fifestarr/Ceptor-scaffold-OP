// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract CharacterContract {
    struct Character {
        string name;
        string race;
        string background;
        string alignment;
        uint level;
    }

    // Mapping from wallet address to array of characters
    mapping(address => Character[]) public characters;

    // Event emitted when a new character is created
    event CharacterCreated(address indexed owner, string name);

    // Function to create a new character
    function createCharacter(
        string memory name,
        string memory race,
        string memory background,
        string memory alignment,
        uint level
    ) external {
        require(bytes(name).length > 0, "Name must not be empty");

        Character memory newCharacter = Character(name, race, background, alignment, level);
        characters[msg.sender].push(newCharacter);

        // Emit an event to notify that a new character is created
        emit CharacterCreated(msg.sender, name);
    }

    // Function to get the number of characters associated with the caller's wallet
    function getCharacterCount() external view returns (uint) {
        return characters[msg.sender].length;
    }

    // Function to update the name of a character
    function updateCharacterName(uint characterIndex, string memory newName) external {
        require(characterIndex < characters[msg.sender].length, "Character index out of bounds");
        require(bytes(newName).length > 0, "Name must not be empty");

        characters[msg.sender][characterIndex].name = newName;
    }

    // Add functions for updating and retrieving other character attributes
}
