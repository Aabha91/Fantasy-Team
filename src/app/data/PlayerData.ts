export class PlayerData {
  team: string;
  jersey_number: number;
  name: string;
  position: string;

  constructor(
    team: string,
    jersey_number: number,
    name: string,
    position: string
  ) {
    this.team = team;
    this.jersey_number = jersey_number;
    this.name = name;
    this.position = position;
  }
}
