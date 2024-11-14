import { Component } from '@angular/core';

@Component({
  selector: 'app-view-above',
  templateUrl: './view-above.component.html',
  styleUrl: './view-above.component.scss'
})
export class ViewAboveComponent {
  with:boolean=false
  title1:string='אחוז נבדקים חיוביים אתמול'
  info1:string = 'אחוז הנבדקים שנמצאו חיוביים לנגיף COVID-19 מתוך מספר נבדקים לגילוי הנגיף אתמול. נבדקים לגילוי הנגיף אתמול - מספר הנבדקים לאיתור ראשוני של הנגיף (ללא בדיקות נלוות לקביעת החלמה) בבדיקות PCR או אנטיגן מפוקחות, שהתבצעו ותוצאותיהן התקבלו משעה 00:00 עד שעה 23:59 של יום אתמול.  כלל הבדיקות אתמול – מספר כל תוצאות הבדיקות לגילוי קורונה שבוצעו מסוג PCR או אנטיגן ,הן לבדיקה ראשונית לאיתור הנגיף והן לבדיקות נלוות לקביעת החלמה, שהתקבלו החל מחצות 00:00 עד שעה 23:59 של יום אתמול.'

  title2:string='נפטרים מצטבר'
  info2:string='מספר הנפטרים המצטבר ממחלת הנגיף COVID-19 החל מפרוץ המגפה. נתוני הנפטרים מתעדכנים לאחר שנבדקו תעודות הפטירה לוידוא סיבת המוות ולכן ייתכנו עדכונים מאוחרים של מספר הנפטרים.'

  title3:string='מתחסנים'
  info3:string='מספר מקבלי החיסון מפני נגיף COVID-19 מתחילת מבצע החיסונים.  החלוקה למנות אינה כוללת אומיקרון'
  
  title4:string='חולים קשה'
  info4:string='מספר החולים במצב קשה וקריטי המאושפזים בבתי החולים. חולה קשה - מי שחולה במחלת נגיף COVID-19 ושהוגדר במצב קשה או קריטי על ידי מערכת הבריאות.'
  
  title5:string='חולים פעילים'
  info5:string='מספר החולים הפעילים במחלת הנגיף COVID-19, נכון למועד העדכון האחרון. חולים פעילים - מי שנבדקו ונמצאו חיוביים לנגיף בבדיקת PCR או בבדיקת אנטיגן מפוקחת (החל מה 5.1.2022) COVID-19, ללא קשר להופעת תסמינים, שעוד לא הוגדרו כמחלימים ושלא נפטרו.'
  
  title6:string='מאומתים אתמול'
  info6:string='מספר המאומתים לנגיף COVID-19 שאותרו משעה 00:00 עד שעה 23:59 של יום אתמול. סה"כ: מספר המאומתים מפרוץ המגיפה, כולל מי שהתגלו כמאומתים לנגיף שוב. מאומתים - מי שנבדקו ונמצאו חיוביים לנגיף COVID-19 בבדיקת PCR או בבדיקת אנטיגן מפוקחת (החל מה 5.1.2022) , בין אם הופיעו אצלם תסמינים ובין אם לא, בין אם הם חולים, החלימו או נפטרו.'

  title7:string = 'מספר נבדקים'
  info7:string = 'מספר הנבדקים בבדיקות לגילוי נגיף COVID-19 מסוג PCR או אנטיגן ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים. הנתון אינו כולל נבדקים בבדיקות נלוות לקביעת החלמה. נבדקים חיוביים - אחוז הנבדקים שנמצאו חיוביים לנגיף COVID-19 מתוך מספר הנבדקים לגילוי הנגיף ב 7 הימים האחרונים.'

  title8:string = 'מספר נפטרים'
  info8:string = 'מספר הנפטרים מנגיף COVID-19 ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.'
  
  title9:string = 'מספר חולים קשה'
  info9:string = 'מספר החולים החדשים במצב קשה וקריטי במחלת נגיף COVID-19 ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.'
  
  title10:string = 'מספר המאומתים'
  info10:string = 'מספר המאומתים לנגיף COVID-19 שאותרו ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.'

}