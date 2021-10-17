import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsletterService } from './services/newsletter.service';
import { SignalrService } from './services/signalr.service';

const baseURL = environment.apiBaseUrl+"contact/";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Flora Y Fauna';

  constructor(
    private newsletterService: NewsletterService,
    private signalRService: SignalrService,
    private http: HttpClient) {}

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();   
    this.startHttpRequest();
  }

  private startHttpRequest = () => {
    this.http.get(baseURL).subscribe(res => {
        console.log(res);
    })
  }
}


