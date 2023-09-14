import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class holidayApiService {
  apiKey = "IdeZzNXIMvFBKXLuhU60JNYPd5EnUoNP"
  baseUrl = "https://calendarific.com/api/v2/holidays"

  constructor(private http: HttpClient) {}

  getSource() {
    return this.http.get(`${this.baseUrl}?&api_key=${this.apiKey}&country=pe`);
  }


}
