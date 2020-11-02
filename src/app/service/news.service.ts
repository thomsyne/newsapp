import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiModel } from '../models/api.model';
import { Article } from '../models/article.model';
import { httpOptions, NewsConstants } from '../constants/app.constants';

@Injectable({
  providedIn: 'root',
})

export class NewsService {
    constructor(private httpClient: HttpClient) {}

    fetchNews(
        domains?: string,
        query?: string,
        headline?: string,
        apiKey?: string,
    ): Observable<ApiModel<Article[]>> {
        let params = new HttpParams();

        if (domains) {
            params = params.append('domains', domains);
        }

        if (query) {
            params = params.append('q', query);
        }

        if (headline) {
            params = params.append('country', headline);
        }

        if (apiKey) {
            params = params.append('apiKey', apiKey);
        }
        return this.httpClient
        .get<ApiModel<Article[]>>(`${NewsConstants.everything}`, {params})
        .pipe();
    }
}
