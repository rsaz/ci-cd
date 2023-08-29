import { Player } from "../models/player";

// Method to create player
function playerCreate({ id, name}: Player): Player {
    let player: Player = new Player();
    player.id = "1";
    player.name = name;
    
    return player;
}

export { playerCreate };
