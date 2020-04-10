import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Data} from '../app.component';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-folder',
    templateUrl: './folder.page.html',
    styleUrls: ['./folder.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FolderPage implements OnInit {

    public product_lists = [
        {
            title: 'Product1',
            src: 'assets/product_image/1.webp',
        },
        {
            title: 'Product2',
            src: 'assets/product_image/1.webp',
        },
        {
            title: 'Product3',
            src: 'assets/product_image/1.webp',
        },
        {
            title: 'Product4',
            src: 'assets/product_image/1.webp',
        },
    ];
    public data: Data;
    public columns: any;
    public rows: any;

    constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
        this.columns = [
            {name: 'FirstName'},
            {name: 'LastName'},
            {name: 'Email'},
            {name: 'Profile'},
            {name: 'Status'},
            {name: ''}
        ];
        this.http.get<Data>('../../assets/movies.json')
            .subscribe((res) => {
                console.log(res);
                this.rows = res.movies;
            });
    }

    ngOnInit() {
    }

}
