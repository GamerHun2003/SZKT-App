import { Pipe, PipeTransform } from "@angular/core";
@Pipe({ name: "cardNumber" })
export class CardnumberPipe implements PipeTransform {
    transform(value: string): string{
        if(!value) return '';
        value=value.replace(/\D/g, '');
        if(value.startsWith('34') || value.startsWith('37')){
            return value.replace(/(\d{2})(\d{2})(\d{5})(\d{6})/, '$1$2-$3-$4');
        }else if(value.startsWith('4') ||value.startsWith('51') || value.startsWith('52') || value.startsWith('53') || value.startsWith('54') || value.startsWith('55') || value.startsWith('6')){
            return value.replace(/(\d{4})(?=\d)/g, '$1-').replace(/-$/, '')
        }else{
            return value.replace(/(\d{4})(?=\d)/g, '$1-').replace(/-$/, '')
        }
    }
}