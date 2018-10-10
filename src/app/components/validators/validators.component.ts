import { Component, OnInit } from '@angular/core';
import { ValidatorsService } from '../../shared/validators/validators.service';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent implements OnInit {
  selectedValidator = {
    id: "",
    name: "",
    password: "",
    subjectsAssigned: ""
  }
  constructor(private validatorsService: ValidatorsService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.validatorsService.postContributor(this.selectedValidator).subscribe((res) => {
      console.log(JSON.stringify(res, undefined, 2));
    })
  }

}
