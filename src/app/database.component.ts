import { Component, OnInit } from '@angular/core';
import { PocketBaseService } from './pocketbase.service';

@Component({
  selector: 'app-database',
  templateUrl: 'database.component.html',
})
export class DatabaseComponent implements OnInit {
  datiDalDatabase: any;

  constructor(private pocketBaseService: PocketBaseService) { }

  ngOnInit() {
    this.pocketBaseService.getDatiDalDatabase().subscribe((response: any) => {
      this.datiDalDatabase = response;
    });
  }
}
