import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'playListNameFilter'
})
export class PlaylistNameFilterPipe implements PipeTransform {
    transform(value: any, term: any) {
        if (!term) return value;
        return value.filter(item => item.name.toLowerCase().indexOf(term) != -1);
    }
}