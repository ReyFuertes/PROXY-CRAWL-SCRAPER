import { ResponseModel } from './components/response-model';
import { environment } from './../environments/environment';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'client';
  public hasReponse: boolean = false;
  public response: ResponseModel;
  public isLoading: boolean = false;

  constructor(private http: HttpClient) { }

  public onClick(event: { url: string, token: string }): void {
    this.isLoading = true;
    this.http.get(`${environment.url}/twitter/parse?url=${event.url}&token=${event.token}`)
      .pipe(tap((res: { data: ResponseModel }) => {
        if (res) {
          this.hasReponse = true;
          this.response = res.data;
          this.isLoading = false;
        }
      })).subscribe();
  }
}
