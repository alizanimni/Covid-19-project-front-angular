import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-header',
  templateUrl: './info-header.component.html',
  styleUrl: './info-header.component.scss'
})
export class InfoHeaderComponent {
  @Input() withDownloadShareButton:boolean = true
  @Input() title:string = "מס התחסנויות - יומי"
show:boolean=false
showDownloudShare:boolean=false
 @Input() info:string="פילוח של מספר החולים הפעילים וחולים קשה במחלת נגיף COVID-19, לפי קבוצות גיל באוכלוסייה ולפי מצבי התחסנות בכל קבוצת גיל.ל-100K תושבים - שכיחות החולים לכל 100,000 תושבים, עבור כל קבוצת מצב התחסנות. חולים פעילים - הם כל מי שנבדקו ונמצאו חיוביים לנגיף COVID-19, ללא קשר להופעת תסמינים, שלא קיבלו עדיין תוצאה שלילית לנגיף בבדיקות נוספות ושלא נפטרו. מחוסנים: - מי שקיבלו 2 מנות חיסון או יותר ועבר שבוע מאז קבלת המנה האחרונה (שבועיים בחיסוני מודרנה) אך עוד לא עבר מאז תוקף הזמן שנקבע למנה -מי שהחלימו וקיבלו לפחות מנת חיסון אחת אך עוד לא עבר תוקף הזמן שנקבע למנה מאז החיסון או ההחלמה - האחרון שביניהם מחוסנים ללא תוקף - מי שקיבלו 2 מנות חיסון או יותר ועבר תוקף הזמן שנקבע למנה מאז החיסון ולא קיבלו מנה נוספת. - מי שהחלימו וקיבלו לפחות מנת חיסון אחת ועבר תוקף הזמן שנקבע למנה מאז החיסון או ההחלמה - האחרון שביניהם, ולא קיבלו מנה נוספת. לא מחוסנים - מי שלא קיבלו מנת חיסון ראשונה."


clickOnDounloudIcon(){
  this.showDownloudShare=!this.showDownloudShare
}
}
