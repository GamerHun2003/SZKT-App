import { Pipe, PipeTransform } from "@angular/core";
@Pipe({ name: "cardNumber" })
export class CardnumberPipe implements PipeTransform {
    transform(value: string): string{
        if(!value) return '';
        if(value.startsWith('34') || value.startsWith('37')){
            return value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        }else if(value.startsWith('4') ||value.startsWith('5') || value.startsWith('6')){
            return value.replace(/(\d{4})(?=\d)/g, '$1-');
        }
        return value;
    }
}