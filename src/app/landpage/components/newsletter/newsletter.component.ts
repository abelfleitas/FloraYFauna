import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateNewsletterCommand, ErrorResponse } from 'src/app/models/commands';
import { NewsletterService } from 'src/app/services/newsletter.service';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit, OnDestroy {
  newsletterForm!: FormGroup;
  public isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private newsletterService: NewsletterService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.newsletterForm = this.fb.group({
      fullName: ["", Validators.required],
      email: ["", Validators.required],
    });
  }

  onSubmit() {
    this.isLoading = true;
    const cmd: CreateNewsletterCommand = {
      fullName: this.newsletterForm.value.fullName,
      email: this.newsletterForm.value.email,
    };
    this.newsletterService.create(cmd).subscribe((x)=> {
      //Notificar a los usuarios
    }, (err: ErrorResponse) => {
      if(err.code === 400) {
        this.toastr.showErrorHTML(err.errores, err.code);
      } else {
        this.toastr.showError(err.message, err.code);
      }
      this.isLoading = false;
    },
    () => {
      this.isLoading = false;
      this.clearForm();
      this.toastr.showSuccess('Gracias por suscribirse a nuestro boletin', '')
    });
  }

  ngOnDestroy(): void {
    this.toastr.clear();
  }

  clearForm(): void{
    this.newsletterForm.reset();
  }

  
}
