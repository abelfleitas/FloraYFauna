import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';
import { CreateContactCommand, ErrorResponse } from 'src/app/models/commands';
import { ContactService } from 'src/app/services/contact.service';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit,OnDestroy {
  faMap = faMapMarked;
  faPhone = faPhone;
  faEmail = faEnvelope;
  contactForm!: FormGroup;
  public isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private toastr: ToastrService) { 
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      subject: ["", Validators.required],
      message: ["", Validators.required]
    });
  }

  onSubmit() {
    this.isLoading = true;
    const cmd: CreateContactCommand = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message
    };
    this.contactService.create(cmd).subscribe((x)=> {
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
      this.toastr.showSuccess('Gracias por contactar', '')
    });
  }

  ngOnDestroy(): void {
    this.toastr.clear()
  }

  clearForm(): void{
    this.contactForm.reset();
  }
}
