import {Component, OnInit} from '@angular/core';
import {peruvianHoliday} from "../../model/peruvianHoliday";
import {holidayApiService} from "../../services/holiday-api.service"

@Component({
  selector: 'app-main-content-table',
  templateUrl: './main-content-table.component.html',
  styleUrls: ['./main-content-table.component.css']
})
export class MainContentTableComponent implements OnInit{
  displayedColumns: string[] = ['name','description','date','type'];
  peruvianHolidays: Array<peruvianHoliday> = [];
  constructor(private holidayService: holidayApiService) {
  }

  ngOnInit() {
    this.holidayService.getSource().subscribe((data: any) => {
      this.peruvianHolidays = data["response"]["holidays"];
    })
  }
}
