import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PlayerDataDialog } from "./playerDataDialog/playerDataDialog";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import * as data from "../../assets/players-data.json";
import { PlayerData } from "../data/PlayerData";
import { DeleteConfirmationDialog } from "./deleteConfirmationDialog/deleteConfirmationDialog";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-players",
  templateUrl: "./players.component.html",
  styleUrls: ["./players.component.css"]
})
export class PlayersComponent implements OnInit {
  displayedColumns: string[] = [
    "team",
    "jersey_number",
    "name",
    "position",
    "action"
  ];
  dataSource: MatTableDataSource<PlayerData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  playersData: PlayerData[] = (data as any).default;

  constructor(public dialog: MatDialog, private toastr: ToastrService) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.playersData);
  }

  ngOnInit() {
    //set the paginator value
    this.dataSource.paginator = this.paginator;
  }

  //Add new player data
  addPlayer() {
    const dialogRef = this.dialog.open(PlayerDataDialog, {
      width: "500px",
      data: null
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.playersData.unshift(data);
        this.updateTableData(this.playersData);
        this.toastr.success(
          "A new player data has been added successfully!",
          "SUCCESS"
        );
      }
    });
  }

  //edit player data
  editPlayerData(data: PlayerData): void {
    const dialogRef = this.dialog.open(PlayerDataDialog, {
      width: "500px",
      data: Object.assign({}, data)
    });

    dialogRef.afterClosed().subscribe(newData => {
      if (newData && JSON.stringify(data) != JSON.stringify(newData)) {
        let index = this.playersData.indexOf(data);
        this.playersData[index] = newData;
        this.updateTableData(this.playersData);
        this.toastr.success(
          "Player data has been updated succesfully!",
          "SUCCESS"
        );
      }
    });
  }

  //delete player data
  deletePlayerData(player: PlayerData): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let index = this.playersData.indexOf(player);
        this.playersData.splice(index, 1);
        this.updateTableData(this.playersData);
        this.toastr.success(
          "Player data has been removed successfully",
          "SUCCESS"
        );
      }
    });
  }

  //update Table Data after add/edit or delete
  updateTableData(updatedData: PlayerData[]) {
    this.dataSource.data = updatedData;
  }
}
