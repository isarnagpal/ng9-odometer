/// <reference path="odometer.d.ts" />
import { OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Ng9OdometerConfigModel } from './odometer.config';
import * as i0 from "@angular/core";
export declare class Ng9OdometerComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    private subscription;
    private odometer;
    container: ElementRef;
    number: number;
    config: Ng9OdometerConfigModel;
    observable: Observable<boolean>;
    animation: string;
    format: string;
    theme: string;
    value: number;
    duration: number;
    auto: boolean;
    private themes;
    private initOdometer;
    private initConfig;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<Ng9OdometerComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<Ng9OdometerComponent, "ng9-odometer", never, { "number": "number"; "config": "config"; "observable": "observable"; "animation": "animation"; "format": "format"; "theme": "theme"; "value": "value"; "duration": "duration"; "auto": "auto"; }, {}, never>;
}
