import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/services/toastr.service';
import { faFaucet, faGrinHearts, faInfoCircle, faWalking } from '@fortawesome/free-solid-svg-icons';

import {} from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faWhatsapp = faWhatsapp;
  faTelegram = faTelegram;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

  
}
