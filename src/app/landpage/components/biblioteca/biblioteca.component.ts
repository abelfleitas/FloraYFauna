import { Component, OnInit } from '@angular/core';
import { DocumentViewModel, DownloadDocumentCommand } from 'src/app/models/commands';
import { DocumentService } from 'src/app/services/document.service';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {

  public viewModel: DocumentViewModel[] = [];

  constructor(
    private toastr: ToastrService,
    private documentService: DocumentService
    ) {}

  ngOnInit(): void {
    this.documentService.list().subscribe((x: DocumentViewModel[]) => {
        this.viewModel = x;
    });
  }

  public downloadFile(model: DocumentViewModel): void {
    const cmd: DownloadDocumentCommand = {
      id: model.id
    }
    
    this.documentService.download(cmd).subscribe((response: any) =>{
      let dataType = response.type;
      let binaryData: any = [];
      binaryData.push(response);
      let downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
      if (model.fileName)
        downloadLink.setAttribute('download', model.fileName);
        document.body.appendChild(downloadLink);
        downloadLink.click();
  }, error => {
    this.toastr.showError(error.message, error.statusText);
  })
  }
}
