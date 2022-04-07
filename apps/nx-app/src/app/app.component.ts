import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@nx-app-workspace/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-app-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hello$!: Observable<Message>;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.hello$ = this.http.get<Message>('api/hello');
  }
}
