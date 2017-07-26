import { Pipe, PipeTransform } from '@angular/core';

//use additional attribute pure : false, if you want your pipe to be executed on each change,
//By default angular executes pipes only on reference change.
@Pipe({
    name: 'initials' 
})
export class InitialsPipe {
    transform(name: string) {
        let names = name.split(' ');
        return names.length > 1 ? names[0].charAt(0) + names[1].charAt(0) : name.charAt(0);
    }
}