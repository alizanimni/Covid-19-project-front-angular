export class Table1Functions {
    column1ClickCounter: number = 0;
    column2ClickCounter: number = 0;
    column3ClickCounter: number = 0;



    column=[0,0,0]
    sortArr(data: any[],columnNumber:number): any {
        let click=this.column[columnNumber]

        console.log(columnNumber);
        console.log(click);
        console.log(data);
        
        
        
        if(click===2){
            data=[]
            this.column[columnNumber]=0
            return data
        }
        if(click===1){
           data.reverse()
           this.column[columnNumber]=2 
           return data
        }
        else{
            if(columnNumber===2){
                data.sort((a, b) => a.column3.localeCompare(b.column3, 'he'));
                 console.log(data) 
            }else{
                data.sort((a, b) => parseFloat(columnNumber===0?b.column1:b.column2) - parseFloat(columnNumber===0?a.column1:a.column2));
            }
            this.column[columnNumber]=1 
            return data
        }
}
}

