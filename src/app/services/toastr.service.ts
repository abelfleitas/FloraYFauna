import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { ToastrService as Ts} from 'ngx-toastr';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class ToastrService {


  private render: Renderer2;

  constructor(private toastr: Ts,
    private rendererFactory: RendererFactory2) 
    {
      this.render = rendererFactory.createRenderer(null, null);
    }

  showSuccess(message: string, title: string): void{
    this.toastr.success(message, title)
  }

  showError(message: string, title: number): void{
    Swal.fire({  
      icon: 'error',  
      title: 'Error ' +title,  
      text: message, 
      confirmButtonColor: '#d33', 
    })  
  }

  showWarning(message: string, title: string): void{
    this.toastr.warning(message, title)
  }

  showErrorHTML(messages: any, title: number): void {
    Swal.fire({  
      icon: 'error',  
      title: 'Error ' +title,  
      html: this.makeUL(this.convertObjectToArray(messages)), 
      confirmButtonColor: '#d33', 
    });  
  }
  
  clear() {
    this.toastr.clear();
  }

  makeUL(array: string[]): string {
    let list = this.render.createElement('ul');
    this.render.setStyle(list,'list-style','none')
    for (var i = 0; i < array.length; i++) {
        var item = this.render.createElement('li');
        this.render.setStyle(item,'text-align','center')
        item.appendChild(this.render.createText(array[i]));
        list.appendChild(item);
    }
    return list;
  }

  convertObjectToArray(obj: Object): string[] {
    const list: string[] = [];
    Object.keys(obj).map((key) => {
      list.push((<any>obj)[key][0])
    });
    return list;
  }
}


