import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private anotherPlayer: Fighter;
  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this.anotherPlayer = player2;
  }

  override fight(): number {
    while (this.player.lifePoints > -1) {
      this.player.attack(this.anotherPlayer);
      if (this.anotherPlayer.lifePoints === -1) {
        return 1;
      }
      this.anotherPlayer.attack(this.player);
    }
    return -1;
  }
}