import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { apis} from '../../environments/environment';
import { People } from '../components/core/people/interfaces/people';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private http: HttpClient
  ) { }

  getPeople(){
    return this.http.get<People[]>(apis.apiPeople)
  }
}
