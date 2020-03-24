import { Component } from "@angular/core";
import * as GC from "@grapecity/spread-sheets";
import { ImageRowHeaderCellType, sampleImgBase64 } from "./imageCellType";


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  hostStyle = {
  };

  constructor() {
    GC.Spread.Sheets.LicenseKey = 'mvitaliyd@gmail.com,E693698577245612#B0UeuV7dX9meB3SeEN4axAza9dFbTpGMP9GaqFjNyEmR6AXQE5WSYVTe63GU5V7LxETMExUQxhWTGFFZ4QGb6o7a4dnNTZ6UXtGZPlGbEZFMYZWdz96bFx4Q0NWUBhmVqhFV6QEeMRWR5YDVO3kUS9UQMVESjpnRXFVM7F5dyRUbOJTYzh5M544biljWTh5Y8gTcDRVNMVzK8k4Y826N9B7aqtUOoJUayx6RVdTdwYDNsxka5pnUGhlbHJmQCdUYUdTZvdXYsllQM3UbzVFV0JGdkpkMuhUcHdTOyg7TXFTV5hkd5AlaC56TOZDMxllcztmI0IyUiwiI7YzQ9IzMBRjI0ICSiwCMwkTO5EzMykTM0IicfJye#4Xfd5nIV34M6IiOiMkIsIyMx8idgMlSgQWYlJHcTJiOi8kI1tlOiQmcQJCLiITNzAjMwACOyIDMwIDMyIiOiQncDJCLikjMzADMyAjMiojIwhXRiwiIt36YuwWah56ZARWepxWY4lmdtJiOiEmTDJCLlVnc4pjIsZXRiwiIyEjN5QjM7cTN8kjNzkjNiojIklkIs4XZzxWYmpjIyNHZisnOiwmbBJye0ICRiwiI34TQiVTdLNUWX5GO7QketZlcPN5ZvhXZnd4UO5GZ6dHVzw4cTdWQhBjN53kSINTTZdjW0JkY7BVduFjTLhFaEdWSyV4cqtiTiBFeJF6Y9VGaHJVbBVFRhpVMvQEaJtSbQhGeQZZNL8';
  }


  workbookInit(args) {
    let spread: GC.Spread.Sheets.Workbook = args.spread;
    let sheet = spread.getActiveSheet();
    sheet
      .getCell(0, 0)
      .text("My SpreadJS Angular Project")
      .foreColor("blue");

    // add outlines
    sheet.suspendPaint();
    sheet.rowOutlines.group(1, 10);
    sheet.rowOutlines.group(1, 4);
    sheet.rowOutlines.group(6, 4);

    sheet.columnOutlines.group(1, 3);
    sheet.columnOutlines.group(1, 2);

    this.setImageInRowHeader(sheet);

    sheet.resumePaint();
  }

  setImageInRowHeader(sheet) {
    
    let imageCellType = new ImageRowHeaderCellType(sampleImgBase64);
    sheet.setCellType(0, 0, imageCellType, GC.Spread.Sheets.SheetArea.rowHeader);
  }
}
