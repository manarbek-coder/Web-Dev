import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HousingService {
    getMessage() {
        return 'Angular project';
    }
}