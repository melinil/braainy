import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class Utils {
    public static url: string = 'https://api.billysbilling.com/v21';
    public static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-Access-Token': '749f6c0f873eb98f16257eec9baa47c944617d34' })
    };
}