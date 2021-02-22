import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {

  title = 'myappA';
  value = ""
  file: File;
  imagePath: any;
  url: any;
  
  constructor() { }

  ngOnInit(): void {
  }


  fileChange(event) {
    this.file = event.target.files[0];
    this.imagePath = this.file;
    let reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.url = reader.result;
    }
    console.log(this.file);
    this.value = this.file.name
  }
  valueReset() {
    this.url = ""
    this.value = ""
  }

}
