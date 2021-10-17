import { Injectable } from '@angular/core';
import * as signalR  from "@microsoft/signalr"; 
import { ContactViewModel } from '../models/commands';
import { ToastrService } from './toastr.service';


@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  public hubConnection!: signalR.HubConnection;
  public data!: ContactViewModel;

  constructor(private toastr: ToastrService) {  
  }

  public startConnection = () => {

    this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl('https://localhost:5001/contact').build();

    this.hubConnection.start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferChartDataListener = () => {
    this.hubConnection.on('notify', (data: any) => {
      this.data = JSON.parse(data);
      console.log(this.data);
    });
  }
}
