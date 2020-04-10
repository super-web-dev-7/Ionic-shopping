import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {TranslateService} from '@ngx-translate/core';
import {DocumentService} from './service/document.service';
import {Router} from '@angular/router';

export interface Data {
    movies: string;
}

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],

})

export class AppComponent implements OnInit {
    public selectedIndex = 0;
    public appPages = [
        {
            title: 'English',
            value: 'en',
            url: '/folder/Inbox',
        },
        {
            title: 'Hebrew',
            value: 'he',
            url: '/folder/Outbox',
        },
    ];




    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private translate: TranslateService,
        private documentService: DocumentService,
        private router: Router,

    ) {
        this.initializeApp();
        translate.setDefaultLang('en');

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    onSideMenuListClick(value) {
        this.translate.use(value);
        if (value == 'en') {
            this.documentService.setReadingDirection('ltr');
            localStorage.setItem('lang', 'en');
        }
        if (value == 'he') {
            this.documentService.setReadingDirection('rtl');
            localStorage.setItem('lang', 'he');
        }
    }

    ngOnInit() {
        const path = window.location.pathname.split('/')[1];
        if (path !== undefined) {
        }
        const language = localStorage.getItem('lang');
        if (language) {
            this.translate.use(language);
            if (language == 'en') {
                this.documentService.setReadingDirection('ltr')
                this.selectedIndex = 0;
            } else if (language == 'he') {
                this.documentService.setReadingDirection('rtl')
                this.selectedIndex = 1;
            }
        }
    }
}
