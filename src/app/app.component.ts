import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from './http.service';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
  @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent; 

  constructor( private http: HttpService ) {
  }

  source: any =
  {
    datatype: 'json',
    url: '../assets/users.txt',
    totalrecords: 1000000
  }

	getWidth() : any {
		return 850;
	}

  dataAdapter: any = new jqx.dataAdapter(this.source);

  rendergridrows = (params: any): any => {
    console.log("...rendergridrows.params:", params);    
    return params.data;
  }

  columns: any[] =
  [
    { text: 'Id', datafield: 'id', width: 50 },
    { text: 'First Name', datafield: 'firstname', width: 120 },
    { text: 'Last Name', datafield: 'lastname', width: 120 },
    { text: 'Product', datafield: 'productname', width: 180 },
    { text: 'Unit Price', datafield: 'price', width: 100, cellsalign: 'right', cellsformat: 'c2' }
  ];

  refreshData() {
    this.myGrid.updatebounddata();
  }

}