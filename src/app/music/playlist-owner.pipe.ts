import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'playListOwnerFilter'
})
export class PlaylistOwnerFilterPipe implements PipeTransform {
    transform(value: any, term: any) {
        if (!term) return value;
        return value.filter(item => item.owner.id.toLowerCase().indexOf(term) != -1);
    }
}