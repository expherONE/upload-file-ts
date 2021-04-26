import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent  {

  selectedFile: File = null;


  constructor(
    private http: HttpClient
  ) { }


  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},

    {text: 'One', cols: 1, rows: 3, color: 'lightblue'},
  ];

  onFileSelected(event){
  
    //console.log(event);

 this.selectedFile = <File>event.target.files[0];
  }

  onClick(){
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('http://10.61.0.75:3100/upload', fd)
      .subscribe(res => {
        console.log(res);
      });

  }

}
