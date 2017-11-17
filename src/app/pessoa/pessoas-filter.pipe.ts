import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'PessoasFilter',
})
export class PessoasFilter implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.nome.toLowerCase().indexOf(input) > -1;
            });
        }
        return value;
    }
}
