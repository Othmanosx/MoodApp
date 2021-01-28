import { ReadVarExpr } from '@angular/compiler';
import { Component, ModuleWithComponentFactories } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myappA';
  value = ""
  file: File;
  imagePath: any;
  url: any;




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


