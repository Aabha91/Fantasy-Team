import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PlayerData } from "../../data/PlayerData";

@Component({
  selector: "player-data",
  templateUrl: "./playerDataDialog.html"
})
export class PlayerDataDialog {
  buttonTxt: string = "Update";
  loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<PlayerDataDialog>,
    @Inject(MAT_DIALOG_DATA) public playerData: PlayerData
  ) {
    //  when you want to add a new player
    // create a new player object
    if (!this.playerData) {
      this.playerData = new PlayerData(null, null, null, null);
      this.buttonTxt = "Add";
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  // submit method with timeout to stimulat a scenario
  // where adding/updating info might take some time
  submit(): void {
    this.loading = true;
    setTimeout(() => {
      this.dialogRef.close(this.playerData);
      this.loading = false;
    }, 1000);
  }
}
