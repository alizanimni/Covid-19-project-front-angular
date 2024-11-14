import { Component, EventEmitter, Input, OnChanges,  OnInit,  Output,  SimpleChanges  } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
@Component({
  selector: 'app-selection-button',
  templateUrl: './selection-button.component.html',
  styleUrl: './selection-button.component.scss',
  animations: [
    trigger('rotateIcon', [
      state(
        'true',
        style({
          transform: 'rotate(180deg)', // Rotate 180 degrees
        })
      ),
      state(
        'false',
        style({
          transform: 'rotate(0deg)', // No rotation
        })
      ),
      transition('false => true', animate('500ms ease-in')), // Animation duration and timing
      transition('true => false', animate('500ms ease-out')),
    ]),
  ],
})
export class SelectionButtonComponent implements OnInit{
 @Input() radioSelection2:string[]=[]
 @Input() radioSelection1:string[]=[]
 @Input() title1:string=''
 @Input() title2:string=''

 @Input() checkBox:boolean=false

 @Output() sendRadioSelection = new EventEmitter<string>()
 @Output() sendRadioSelections = new EventEmitter<string[]>()
 @Output() sendSelections = new EventEmitter<any[]>()
 checkedCheckbox = [true,true,true]
 rorate: string = 'errow-icon';
  selectRodio1:string = ''
  selectRodio2:string = ''
  isRotated: boolean = false;
  showSearch: boolean = false;
  select1: string = ''
  select2:string=''
  buttonText:string =''
  text2:string=''
ngOnInit(): void {
  if(this.radioSelection2.length>0){
  this.select2=this.radioSelection2[this.radioSelection2.length-1]    
  }
    if(this.checkBox){
      this.buttonText+="קשה,בינוני,קל"
    }
    else{
   this.select1=this.radioSelection1[0] 
  this.buttonText= this.select1        
    }

  console.log(this.select1);

  if(this.radioSelection2.length>0){
   this.buttonText+=' , '+this.select2          

  }

}

 toggleRotate(): void {
  this.isRotated = !this.isRotated;
  this.showSearch = !this.showSearch;
}

onRadio1Change(event: any) {
  this.selectRodio1 = event.target.value; // Update the selectedTime variable with the value of the selected radio button
  this.select1=event.target.value
  console.log('Selected time:', this.selectRodio1);
}
onRadio2Change(event: any) {
  this.selectRodio2 = event.target.value; // Update the selectedTime variable with the value of the selected radio button
  this.select2=event.target.value
    console.log(this.select2);
  console.log('Selected time:', this.selectRodio1);
}

 onClickOk(){
  this.toggleRotate()
  this.buttonText=''
  if(this.checkBox){
   this.checkedCheckbox.map((checkbox,i)=>{
     if(checkbox){
      this.buttonText+=this.radioSelection1[i]
      if(i!==2){
        this.buttonText+=','
      }
     }
   })
  }else{
  this.buttonText= this.select1    
  }

  if(this.radioSelection2.length>0)
  this.buttonText+=' , '+this.select2 
if(this.checkBox){
  this.sendSelections.emit([this.checkedCheckbox,this.select2])
}
else if(this.radioSelection2.length>0){
   this.sendRadioSelections.emit([this.select1,this.select2])
  }else{
   this.sendRadioSelection.emit(this.select1)   
  }

 }

 onCheckbox1Change(event: any,i:number){
   this.checkedCheckbox[i]=!this.checkedCheckbox[i]
 }
filter(){



  
}
}