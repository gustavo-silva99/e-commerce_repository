import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SavePurchaseDto } from '../../shared/models/save-purchase';
 
@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  private readonly http = inject(HttpClient);
  // TODO: backend
  private readonly baseUrl = '';

  save(savePurchaseDto: SavePurchaseDto): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(this.baseUrl, savePurchaseDto);
  }
}
