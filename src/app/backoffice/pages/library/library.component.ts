import { Component, OnInit, } from '@angular/core';
import { faFilePdf, faFileWord } from '@fortawesome/free-solid-svg-icons';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { DeleteDocumentCommand, DocumentViewModel, ErrorResponse } from 'src/app/models/commands';
import { DocumentService } from 'src/app/services/document.service';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  
  public documents: DocumentViewModel[] = [];
  ColumnMode = ColumnMode;
  public selected: DocumentViewModel[] = [];
  SelectionType = SelectionType;
  faPDF = faFilePdf;
  faWord = faFileWord;
  public isLoading: boolean = false;
  
  errors = [];

  constructor(
    private documentService: DocumentService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getData();
  }
  onSelect(items: any) {
    this.selected.splice(0, this.selected.length);
    this.selected = items.selected;
  }

  onCheckboxChangeFn(event: any) {
    alert(event);
  }

  deleteDocument() {
    this.isLoading = true;
    this.selected.map((item : DocumentViewModel) => {
      const cmd: DeleteDocumentCommand = {
        id: item.id
      };
      this.documentService.deleteDocument(cmd).subscribe(() => {
        this.isLoading = false;
        this.toastr.showSuccess('El documento ha sido eliminado','Opps ):')
        this.getData();
      }, (err : ErrorResponse) => {
        if(err.code === 400){          
          this.toastr.showErrorHTML(err.errores, err.code)
        } else {
            this.toastr.showError(err.message, err.code)
        } 
        this.isLoading = false;
      });
    })
  }
  
  getData(): void {
    this.selected = [];
    this.documentService.list().subscribe((x: DocumentViewModel[]) => {
      this.documents = x;
    });
  }

}
