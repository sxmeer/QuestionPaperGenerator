import { Component, OnInit } from '@angular/core';

import { ContributorsService } from '../../shared/contributors/contributors.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css'],
})

export class ContributorsComponent implements OnInit {
  selectedContributor = {
    id: "",
    name: "",
    password: "",
    subjectsAssigned: ""
  }
  constructor(private contributorsService: ContributorsService) {

  }
  ngOnInit() {

  }
  onSubmit() {
    this.contributorsService.postContributor(this.selectedContributor).subscribe((res) => {
      console.log(JSON.stringify(res, undefined, 2));
    })
  }
}

