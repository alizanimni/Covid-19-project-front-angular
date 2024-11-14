import { Component, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

   @Output() darkOrLight = new EventEmitter<boolean>()
 private _light=new BehaviorSubject<boolean>(true)
 light = this._light.asObservable()
 nowLight:boolean=true
  selectItem(event: Event): void {
    const selectedElement = event.currentTarget as HTMLElement;
    const listItems = document.querySelectorAll('.nav-bar-list li');
    listItems.forEach((item) => {
      item.classList.remove('selected');
    });
    selectedElement.classList.add('selected');
  }

  onClickLight(){
    this.nowLight=!this.nowLight
    console.log(this.nowLight);
     this.darkOrLight.emit(this.nowLight)
    this._light.next(this.nowLight)
  }
}
