import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskCpf'
})

export class MaskCpfPipe implements PipeTransform {
    transform(cpf: string): string {
        return cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(6, 3) + '-' + cpf.substr(9, 2);
    }
}
