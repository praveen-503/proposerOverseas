import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit {
  searchForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  title = 'Welcome word';
  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private modalService:NgbModal,
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      interestedIn: ['', Validators.required],
      search: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  popup() {
    console.log("popup");
  }

  get f() { return this.searchForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.searchForm.invalid) {
      return;
    }
    this.loading = true;
  }
}
