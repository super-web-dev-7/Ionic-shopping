import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

type ReadingDirection = 'ltr' | 'rtl';

@Injectable({
    providedIn: 'root'
})

export class DocumentService {

    constructor(@Inject(DOCUMENT) private doc) {
    }

    public setReadingDirection(dir: ReadingDirection) {
        this.doc.dir = dir;
    }

    public getReadingDirection() {
        return this.doc.dir;
    }
}
