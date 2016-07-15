import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'trackNameFilter'
})
export class TrackNameFilterPipe implements PipeTransform {
    transform(value: any, term: any) {
        if (!term) return value;
        return value.filter(item => item.track.name.toLowerCase().indexOf(term) != -1);
    }
}