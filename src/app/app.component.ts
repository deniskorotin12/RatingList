import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DataSource } from "@angular/cdk/table";

export interface TablePersonElement {
  name: string;
  summ: number;
}


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  displayedColumns = ["Position", "Name", "Summ"];
  isVisibility = true;
  dataSource: TablePersonElement[] = [];

  marks = [
    { value: "1", viewValue: "1" },
    { value: "2", viewValue: "2" },
    { value: "3", viewValue: "3" },
    { value: "4", viewValue: "4" },
    { value: "5", viewValue: "5" },
    { value: "6", viewValue: "6" },
    { value: "7", viewValue: "7" },
    { value: "8", viewValue: "8" },
    { value: "9", viewValue: "9" },
    { value: "10", viewValue: "10" }
  ];

  form: FormGroup = new FormGroup({
    Name: new FormControl("", Validators.required),
    Mark_1: new FormControl("", Validators.required),
    Mark_2: new FormControl("", Validators.required),
    Mark_3: new FormControl("", Validators.required),
    Mark_4: new FormControl("", Validators.required),
    Mark_5: new FormControl("", Validators.required),
    Mark_6: new FormControl("", Validators.required)
  });
  
  

  addPerson() {
    this.dataSource.push({
      name: this.form.get('Name').value,
      summ: +this.form.get('Mark_1').value + 
            +this.form.get('Mark_2').value + 
            +this.form.get('Mark_3').value + 
            +this.form.get('Mark_4').value + 
            +this.form.get('Mark_5').value + 
            +this.form.get('Mark_6').value
    });
    this.dataSource.sort((n1, n2) => n2.summ - n1.summ);
    this.form.reset();
   }

   deletePerson(index : number){
      this.dataSource.splice(index, 1);
   }

   clearPersons(){
     this.dataSource.length = 0;
   }
}
