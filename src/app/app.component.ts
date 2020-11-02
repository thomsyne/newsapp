import { Component, OnInit } from '@angular/core';
import { NewsConstants, NewsSources } from './constants/app.constants';
import { Article } from './models/article.model';
import { NewsService } from './service/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'NewsApp';

   //domains: any = [];
   domains = 'techcrunch.com';
   query = null;
  headlines = null;
  newsOptions = NewsSources;
  apiKey = NewsConstants.apiKey;
  articlesList: Article[];
  regularDistribution = 100 / 3;

  constructor(
    private readonly newsService: NewsService,
  ) {}

  ngOnInit(){
    this.fetchNews();
  }

  fetchNews() {
    this.newsService.fetchNews(this.domains, this.query, this.headlines, this.apiKey).subscribe(
      (response) => {
        this.articlesList = response.articles;
        console.log(this.articlesList);
      },
      (error) => {

      }
    );
  }


}
