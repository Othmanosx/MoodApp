// import { ReadVarExpr } from '@angular/compiler';
// ModuleWithComponentFactories
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myappA';
  // value = ""
  value : FormGroup
  file: File;
  imagePath: any;
  url: any;
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';


ngOnInit(): void {
  this.value = new FormGroup({
    url_data : new FormControl('', Validators.pattern(this.reg))
  })
  
  this.value.statusChanges.subscribe(val=>{
    console.log(val)
  })
  
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
    this.value.setValue({url_data:this.file.name})
  }
  valueReset() {
    this.url = ""
    this.value.reset()
  }
}


