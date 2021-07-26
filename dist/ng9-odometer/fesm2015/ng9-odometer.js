import { isUndefined, defaults, includes } from 'lodash';
import { ɵɵdefineComponent, ɵɵviewQuery, ElementRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵɵelement, ɵsetClassMetadata, Component, ViewEncapsulation, ViewChild, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class Ng9OdometerConfig {
    constructor() {
        this.animation = 'slide';
        this.format = '(,ddd)';
        this.theme = 'default';
        this.value = 0;
        this.duration = 2000;
        this.auto = true;
    }
}

///<reference path="odometer.d.ts" />
const _c0 = ["container"];
// HubSpot's Oodometer
// https://github.com/HubSpot/odometer
const Odometer = require('odometer');
class Ng9OdometerComponent {
    constructor() {
        this.config = {};
        this.observable = undefined;
        // Individual configuration attributes
        this.animation = undefined;
        this.format = undefined;
        this.theme = undefined;
        this.value = undefined;
        this.duration = undefined;
        this.auto = undefined;
        // Available themes
        this.themes = [
            'car',
            'default',
            'digital',
            'minimal',
            'plaza',
            'slot-machine',
            'train-station'
        ];
    }
    // Start Odometer
    initOdometer() {
        if (!isUndefined(this.container)
            && typeof Odometer !== 'undefined') {
            this.odometer = new Odometer({
                el: this.container.nativeElement,
                animation: this.config.animation,
                value: this.config.value,
                duration: this.config.duration,
                format: this.config.format,
                theme: this.config.theme,
            });
            if (!isUndefined(this.number) && this.config.auto) {
                this.odometer.update(this.number);
            }
        }
    }
    initConfig() {
        this.config = defaults(this.config, new Ng9OdometerConfig());
        // Animation
        if (!isUndefined(this.animation)) {
            this.config.animation = this.animation;
        }
        // Format
        if (!isUndefined(this.format)) {
            this.config.format = this.format;
        }
        // Theme
        if (!isUndefined(this.theme)) {
            this.config.theme = !includes(this.themes, this.theme) ? 'default' : this.theme;
        }
        // Value
        if (!isUndefined(this.value)) {
            this.config.value = this.value;
        }
        // Duration
        if (!isUndefined(this.duration)) {
            this.config.duration = this.duration;
        }
        // Auto
        if (!isUndefined(this.auto)) {
            this.config.auto = this.auto;
        }
        // Validate theme. If not part of the
        // available themes array, use the default
        if (!includes(this.themes, this.config.theme)) {
            this.config.theme = 'default';
        }
    }
    // ***************************************
    //  LIFECYCLES
    // ***************************************
    ngOnInit() {
        // Bind Observable
        if (!isUndefined(this.observable) && !this.config.auto) {
            this.subscription = this.observable.subscribe((trigger) => {
                if (!isUndefined(trigger) && trigger) {
                    this.odometer.update(this.number);
                }
            });
        }
        // Apply defaults and
        // individual configurations
        this.initConfig();
    }
    ngOnDestroy() {
        if (!isUndefined(this.subscription)) {
            this.subscription.unsubscribe();
        }
    }
    ngOnChanges() {
        if (!isUndefined(this.number) && !isUndefined(this.odometer) && this.config.auto) {
            this.odometer.update(this.number);
        }
    }
    ngAfterViewInit() {
        this.initOdometer();
    }
}
Ng9OdometerComponent.ɵfac = function Ng9OdometerComponent_Factory(t) { return new (t || Ng9OdometerComponent)(); };
Ng9OdometerComponent.ɵcmp = ɵɵdefineComponent({ type: Ng9OdometerComponent, selectors: [["ng9-odometer"]], viewQuery: function Ng9OdometerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
    } }, inputs: { number: "number", config: "config", observable: "observable", animation: "animation", format: "format", theme: "theme", value: "value", duration: "duration", auto: "auto" }, features: [ɵɵNgOnChangesFeature()], decls: 2, vars: 0, consts: [["container", ""]], template: function Ng9OdometerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", null, 0);
    } }, styles: ["@import url(//fonts.googleapis.com/css?family=Arimo);.odometer.odometer-auto-theme,.odometer.odometer-auto-theme .odometer-digit,.odometer.odometer-theme-car,.odometer.odometer-theme-car .odometer-digit{display:inline-block;vertical-align:middle;position:relative}.odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,.odometer.odometer-theme-car .odometer-digit .odometer-digit-spacer{display:inline-block;vertical-align:middle;visibility:hidden}.odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,.odometer.odometer-theme-car .odometer-digit .odometer-digit-inner{text-align:left;display:block;position:absolute;top:0;right:0;bottom:0;overflow:hidden;left:.15em}.odometer.odometer-auto-theme .odometer-digit .odometer-ribbon,.odometer.odometer-theme-car .odometer-digit .odometer-ribbon{display:block}.odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,.odometer.odometer-theme-car .odometer-digit .odometer-ribbon-inner{display:block;-webkit-backface-visibility:hidden}.odometer.odometer-auto-theme .odometer-digit .odometer-value,.odometer.odometer-theme-car .odometer-digit .odometer-value{display:block;-webkit-transform:translateZ(0)}.odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value,.odometer.odometer-theme-car .odometer-digit .odometer-value.odometer-last-value{position:absolute}.odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,.odometer.odometer-theme-car.odometer-animating-up .odometer-ribbon-inner{-webkit-transition:-webkit-transform 2s;transition:transform 2s,-webkit-transform 2s}.odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,.odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner,.odometer.odometer-theme-car.odometer-animating-down .odometer-ribbon-inner,.odometer.odometer-theme-car.odometer-animating-up.odometer-animating .odometer-ribbon-inner{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner,.odometer.odometer-theme-car.odometer-animating-down.odometer-animating .odometer-ribbon-inner{-webkit-transition:-webkit-transform 2s;transition:transform 2s,-webkit-transform 2s;-webkit-transform:translateY(0);transform:translateY(0)}.odometer.odometer-auto-theme,.odometer.odometer-theme-car{border-radius:.34em;font-family:Arimo,monospace;padding:.15em;background:#a7a6ab;color:#a7a6ab}.odometer.odometer-auto-theme .odometer-digit,.odometer.odometer-theme-car .odometer-digit{box-shadow:inset 0 0 0 #000;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMzMzMzMyIvPjxzdG9wIG9mZnNldD0iNDAlIiBzdG9wLWNvbG9yPSIjMzMzMzMzIi8+PHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiMxMDEwMTAiLz48c3RvcCBvZmZzZXQ9IjgwJSIgc3RvcC1jb2xvcj0iIzMzMzMzMyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzMzMzMzMyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==);background-size:100%;background-image:-webkit-gradient(linear,left top,left bottom,from(#333),color-stop(40%,#333),color-stop(60%,#101010),color-stop(80%,#333),to(#333));background-image:linear-gradient(to bottom,#333 0,#333 40%,#101010 60%,#333 80%,#333 100%);padding:0 .15em}.odometer.odometer-auto-theme .odometer-digit:first-child,.odometer.odometer-theme-car .odometer-digit:first-child{border-radius:.2em 0 0 .2em}.odometer.odometer-auto-theme .odometer-digit:last-child,.odometer.odometer-theme-car .odometer-digit:last-child{border-radius:0 .2em .2em 0;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2VlZTBkMyIvPjxzdG9wIG9mZnNldD0iNDAlIiBzdG9wLWNvbG9yPSIjZWVlMGQzIi8+PHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiNiYmFhOWEiLz48c3RvcCBvZmZzZXQ9IjgwJSIgc3RvcC1jb2xvcj0iI2VlZTBkMyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2VlZTBkMyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==);background-size:100%;background-image:-webkit-gradient(linear,left top,left bottom,from(#eee0d3),color-stop(40%,#eee0d3),color-stop(60%,#bbaa9a),color-stop(80%,#eee0d3),to(#eee0d3));background-image:linear-gradient(to bottom,#eee0d3 0,#eee0d3 40%,#bbaa9a 60%,#eee0d3 80%,#eee0d3 100%);background-color:#eee0d3;color:#000}.odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner,.odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,.odometer.odometer-theme-car.odometer-animating-down.odometer-animating .odometer-ribbon-inner,.odometer.odometer-theme-car.odometer-animating-up .odometer-ribbon-inner{-webkit-transition-timing-function:linear;transition-timing-function:linear}", ".odometer.odometer-auto-theme,.odometer.odometer-auto-theme .odometer-digit,.odometer.odometer-theme-default,.odometer.odometer-theme-default .odometer-digit{display:inline-block;vertical-align:middle;position:relative}.odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,.odometer.odometer-theme-default .odometer-digit .odometer-digit-spacer{display:inline-block;vertical-align:middle;visibility:hidden}.odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,.odometer.odometer-theme-default .odometer-digit .odometer-digit-inner{text-align:left;display:block;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.odometer.odometer-auto-theme .odometer-digit .odometer-ribbon,.odometer.odometer-theme-default .odometer-digit .odometer-ribbon{display:block}.odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,.odometer.odometer-theme-default .odometer-digit .odometer-ribbon-inner{display:block;-webkit-backface-visibility:hidden}.odometer.odometer-auto-theme .odometer-digit .odometer-value,.odometer.odometer-theme-default .odometer-digit .odometer-value{display:block;-webkit-transform:translateZ(0)}.odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value,.odometer.odometer-theme-default .odometer-digit .odometer-value.odometer-last-value{position:absolute}.odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,.odometer.odometer-theme-default.odometer-animating-up .odometer-ribbon-inner{-webkit-transition:-webkit-transform 2s!important;transition:transform 2s;transition:transform 2s,-webkit-transform 2s}.odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,.odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner,.odometer.odometer-theme-default.odometer-animating-down .odometer-ribbon-inner,.odometer.odometer-theme-default.odometer-animating-up.odometer-animating .odometer-ribbon-inner{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner,.odometer.odometer-theme-default.odometer-animating-down.odometer-animating .odometer-ribbon-inner{-webkit-transition:-webkit-transform 2s;transition:transform 2s;transition:transform 2s,-webkit-transform 2s;-webkit-transform:translateY(0);transform:translateY(0)}.odometer.odometer-auto-theme,.odometer.odometer-theme-default{font-family:\"Helvetica Neue\",sans-serif;line-height:1.1em}.odometer.odometer-auto-theme .odometer-value,.odometer.odometer-theme-default .odometer-value{text-align:center}", "@import url(//fonts.googleapis.com/css?family=Wallpoet);.odometer.odometer-auto-theme,.odometer.odometer-auto-theme .odometer-digit,.odometer.odometer-theme-digital,.odometer.odometer-theme-digital .odometer-digit{display:inline-block;vertical-align:middle;position:relative}.odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,.odometer.odometer-theme-digital .odometer-digit .odometer-digit-spacer{display:inline-block;vertical-align:middle;visibility:hidden}.odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,.odometer.odometer-theme-digital .odometer-digit .odometer-digit-inner{text-align:left;display:block;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.odometer.odometer-auto-theme .odometer-digit .odometer-ribbon,.odometer.odometer-theme-digital .odometer-digit .odometer-ribbon{display:block}.odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,.odometer.odometer-theme-digital .odometer-digit .odometer-ribbon-inner{display:block;-webkit-backface-visibility:hidden}.odometer.odometer-auto-theme .odometer-digit .odometer-value,.odometer.odometer-theme-digital .odometer-digit .odometer-value{display:block;-webkit-transform:translateZ(0)}.odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value,.odometer.odometer-theme-digital .odometer-digit .odometer-value.odometer-last-value{position:absolute}.odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,.odometer.odometer-theme-digital.odometer-animating-up .odometer-ribbon-inner{-webkit-transition:-webkit-transform 2s;transition:transform 2s;transition:transform 2s,-webkit-transform 2s}.odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,.odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner,.odometer.odometer-theme-digital.odometer-animating-down .odometer-ribbon-inner,.odometer.odometer-theme-digital.odometer-animating-up.odometer-animating .odometer-ribbon-inner{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner,.odometer.odometer-theme-digital.odometer-animating-down.odometer-animating .odometer-ribbon-inner{-webkit-transition:-webkit-transform 2s;transition:transform 2s;transition:transform 2s,-webkit-transform 2s;-webkit-transform:translateY(0);transform:translateY(0)}.odometer.odometer-auto-theme,.odometer.odometer-theme-digital{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhiZjVhNSIgc3RvcC1vcGFjaXR5PSIwLjQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=);background-size:100%;background-image:radial-gradient(rgba(139,245,165,.4),#000);background-color:#000;font-family:Wallpoet,monospace;padding:0 .2em;line-height:1.1em;color:#8bf5a5}.odometer.odometer-auto-theme .odometer-digit+.odometer-digit,.odometer.odometer-theme-digital .odometer-digit+.odometer-digit{margin-left:.1em}", ".odometer.odometer-auto-theme,.odometer.odometer-auto-theme .odometer-digit,.odometer.odometer-theme-minimal,.odometer.odometer-theme-minimal .odometer-digit{display:inline-block;vertical-align:middle;position:relative}.odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,.odometer.odometer-theme-minimal .odometer-digit .odometer-digit-spacer{display:inline-block;vertical-align:middle;visibility:hidden}.odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,.odometer.odometer-theme-minimal .odometer-digit .odometer-digit-inner{text-align:left;display:block;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.odometer.odometer-auto-theme .odometer-digit .odometer-ribbon,.odometer.odometer-theme-minimal .odometer-digit .odometer-ribbon{display:block}.odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,.odometer.odometer-theme-minimal .odometer-digit .odometer-ribbon-inner{display:block;-webkit-backface-visibility:hidden}.odometer.odometer-auto-theme .odometer-digit .odometer-value,.odometer.odometer-theme-minimal .odometer-digit .odometer-value{display:block;-webkit-transform:translateZ(0)}.odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value,.odometer.odometer-theme-minimal .odometer-digit .odometer-value.odometer-last-value{position:absolute}.odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,.odometer.odometer-theme-minimal.odometer-animating-up .odometer-ribbon-inner{-webkit-transition:-webkit-transform 2s;transition:transform 2s;transition:transform 2s,-webkit-transform 2s}.odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,.odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner,.odometer.odometer-theme-minimal.odometer-animating-down .odometer-ribbon-inner,.odometer.odometer-theme-minimal.odometer-animating-up.odometer-animating .odometer-ribbon-inner{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner,.odometer.odometer-theme-minimal.odometer-animating-down.odometer-animating .odometer-ribbon-inner{-webkit-transition:-webkit-transform 2s;transition:transform 2s;transition:transform 2s,-webkit-transform 2s;-webkit-transform:translateY(0);transform:translateY(0)}", ".odometer.odometer-auto-theme,.odometer.odometer-auto-theme .odometer-digit,.odometer.odometer-theme-plaza,.odometer.odometer-theme-plaza .odometer-digit{display:inline-block;vertical-align:middle;position:relative}.odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,.odometer.odometer-theme-plaza .odometer-digit .odometer-digit-spacer{display:inline-block;vertical-align:middle;visibility:hidden}.odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,.odometer.odometer-theme-plaza .odometer-digit .odometer-digit-inner{text-align:left;display:block;position:absolute;top:0;right:0;bottom:0;overflow:hidden;left:.03em}.odometer.odometer-auto-theme .odometer-digit .odometer-ribbon,.odometer.odometer-theme-plaza .odometer-digit .odometer-ribbon{display:block}.odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,.odometer.odometer-theme-plaza .odometer-digit .odometer-ribbon-inner{display:block;-webkit-backface-visibility:hidden}.odometer.odometer-auto-theme .odometer-digit .odometer-value,.odometer.odometer-theme-plaza .odometer-digit .odometer-value{display:block;-webkit-transform:translateZ(0)}.odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value,.odometer.odometer-theme-plaza .odometer-digit .odometer-value.odometer-last-value{position:absolute}.odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,.odometer.odometer-theme-plaza.odometer-animating-up .odometer-ribbon-inner{-webkit-transition:-webkit-transform 2s;transition:transform 2s;transition:transform 2s,-webkit-transform 2s}.odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,.odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner,.odometer.odometer-theme-plaza.odometer-animating-down .odometer-ribbon-inner,.odometer.odometer-theme-plaza.odometer-animating-up.odometer-animating .odometer-ribbon-inner{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner,.odometer.odometer-theme-plaza.odometer-animating-down.odometer-animating .odometer-ribbon-inner{-webkit-transition:-webkit-transform 2s;transition:transform 2s;transition:transform 2s,-webkit-transform 2s;-webkit-transform:translateY(0);transform:translateY(0)}.odometer.odometer-auto-theme,.odometer.odometer-theme-plaza{border-radius:.15em;background-color:#f0f8ff;font-family:\"Helvetica Neue\",sans-serif;font-weight:100;padding:0 .12em;line-height:1.2em;font-size:1.2em;background-size:16px 16px}.odometer.odometer-auto-theme .odometer-digit,.odometer.odometer-theme-plaza .odometer-digit{border-radius:.1em;padding:0 .03em;color:#648baf}", "@import url(//fonts.googleapis.com/css?family=Rye);.odometer.odometer-auto-theme,.odometer.odometer-auto-theme .odometer-digit,.odometer.odometer-theme-slot-machine,.odometer.odometer-theme-slot-machine .odometer-digit{display:inline-block;vertical-align:middle;position:relative}.odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,.odometer.odometer-theme-slot-machine .odometer-digit .odometer-digit-spacer{display:inline-block;vertical-align:middle;visibility:hidden}.odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,.odometer.odometer-theme-slot-machine .odometer-digit .odometer-digit-inner{display:block;position:absolute;top:0;bottom:0;overflow:hidden;padding-top:.08em}.odometer.odometer-auto-theme .odometer-digit .odometer-ribbon,.odometer.odometer-theme-slot-machine .odometer-digit .odometer-ribbon{display:block}.odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,.odometer.odometer-theme-slot-machine .odometer-digit .odometer-ribbon-inner{display:block;-webkit-backface-visibility:hidden}.odometer.odometer-auto-theme .odometer-digit .odometer-value,.odometer.odometer-theme-slot-machine .odometer-digit .odometer-value{display:block;-webkit-transform:translateZ(0)}.odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value,.odometer.odometer-theme-slot-machine .odometer-digit .odometer-value.odometer-last-value{position:absolute}.odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,.odometer.odometer-theme-slot-machine.odometer-animating-up .odometer-ribbon-inner{-webkit-transition:-webkit-transform 2s;transition:transform 2s;transition:transform 2s,-webkit-transform 2s}.odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,.odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner,.odometer.odometer-theme-slot-machine.odometer-animating-down .odometer-ribbon-inner,.odometer.odometer-theme-slot-machine.odometer-animating-up.odometer-animating .odometer-ribbon-inner{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner,.odometer.odometer-theme-slot-machine.odometer-animating-down.odometer-animating .odometer-ribbon-inner{-webkit-transition:-webkit-transform 2s;transition:transform 2s;transition:transform 2s,-webkit-transform 2s;-webkit-transform:translateY(0);transform:translateY(0)}.odometer.odometer-auto-theme,.odometer.odometer-theme-slot-machine{border-radius:.34em;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmYwMCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmYTUwMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==);background-size:100%;background-image:-webkit-gradient(linear,left top,left bottom,from(#ff0),to(orange));background-image:linear-gradient(#ff0,orange);background-color:#fc0;font-family:Rye,monospace;padding:.15em;color:#f80000;line-height:1.35em;border:.03em solid #000;-webkit-text-stroke:.05em #000}.odometer.odometer-auto-theme .odometer-digit,.odometer.odometer-theme-slot-machine .odometer-digit{box-shadow:inset 0 0 .1em rgba(0,0,0,.5),0 0 0 .03em #fff,0 0 0 .05em rgba(0,0,0,.2);border-radius:.2em;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2NjY2NjYyIvPjxzdG9wIG9mZnNldD0iMjAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIi8+PHN0b3Agb2Zmc2V0PSI4MCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNjY2NjY2MiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=);background-size:100%;background-image:-webkit-gradient(linear,left top,left bottom,from(#ccc),color-stop(20%,#fff),color-stop(80%,#fff),to(#ccc));background-image:linear-gradient(to bottom,#ccc 0,#fff 20%,#fff 80%,#ccc 100%);border:.03em solid #444;padding:.1em .15em 0}.odometer.odometer-auto-theme .odometer-digit:first-child,.odometer.odometer-theme-slot-machine .odometer-digit:first-child{box-shadow:inset .05em 0 .1em rgba(0,0,0,.5),0 0 0 .03em #fff,0 0 0 .05em rgba(0,0,0,.2)}.odometer.odometer-auto-theme .odometer-digit:last-child,.odometer.odometer-theme-slot-machine .odometer-digit:last-child{box-shadow:inset -.05em 0 .1em rgba(0,0,0,.5),0 0 0 .03em #fff,0 0 0 .05em rgba(0,0,0,.2)}.odometer.odometer-auto-theme .odometer-digit+.odometer-digit,.odometer.odometer-theme-slot-machine .odometer-digit+.odometer-digit{margin-left:.15em}.odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,.odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value,.odometer.odometer-theme-slot-machine .odometer-digit .odometer-digit-inner,.odometer.odometer-theme-slot-machine .odometer-digit .odometer-value.odometer-last-value{left:0;right:0;text-align:center}", "@import url(//fonts.googleapis.com/css?family=Economica);.odometer.odometer-auto-theme,.odometer.odometer-auto-theme .odometer-digit,.odometer.odometer-theme-train-station,.odometer.odometer-theme-train-station .odometer-digit{display:inline-block;vertical-align:middle;position:relative}.odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,.odometer.odometer-theme-train-station .odometer-digit .odometer-digit-spacer{display:inline-block;vertical-align:middle;visibility:hidden}.odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,.odometer.odometer-theme-train-station .odometer-digit .odometer-digit-inner{text-align:left;display:block;position:absolute;top:0;right:0;bottom:0;overflow:hidden;left:.15em}.odometer.odometer-auto-theme .odometer-digit .odometer-ribbon,.odometer.odometer-theme-train-station .odometer-digit .odometer-ribbon{display:block}.odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,.odometer.odometer-theme-train-station .odometer-digit .odometer-ribbon-inner{display:block;-webkit-backface-visibility:hidden}.odometer.odometer-auto-theme .odometer-digit .odometer-value,.odometer.odometer-theme-train-station .odometer-digit .odometer-value{display:block;-webkit-transform:translateZ(0)}.odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value,.odometer.odometer-theme-train-station .odometer-digit .odometer-value.odometer-last-value{position:absolute}.odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,.odometer.odometer-theme-train-station.odometer-animating-up .odometer-ribbon-inner{-webkit-transition:-webkit-transform 2s;transition:transform 2s;transition:transform 2s,-webkit-transform 2s}.odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,.odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner,.odometer.odometer-theme-train-station.odometer-animating-down .odometer-ribbon-inner,.odometer.odometer-theme-train-station.odometer-animating-up.odometer-animating .odometer-ribbon-inner{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner,.odometer.odometer-theme-train-station.odometer-animating-down.odometer-animating .odometer-ribbon-inner{-webkit-transition:-webkit-transform 2s;transition:transform 2s;transition:transform 2s,-webkit-transform 2s;-webkit-transform:translateY(0);transform:translateY(0)}.odometer.odometer-auto-theme,.odometer.odometer-theme-train-station{font-family:Economica,sans-serif}.odometer.odometer-auto-theme .odometer-digit,.odometer.odometer-theme-train-station .odometer-digit{display:inline-block;vertical-align:middle;border-radius:.1em;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzExMTExMSIvPjxzdG9wIG9mZnNldD0iMzUlIiBzdG9wLWNvbG9yPSIjMTExMTExIi8+PHN0b3Agb2Zmc2V0PSI1NSUiIHN0b3AtY29sb3I9IiMzMzMzMzMiLz48c3RvcCBvZmZzZXQ9IjU1JSIgc3RvcC1jb2xvcj0iIzExMTExMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzExMTExMSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==);background-size:100%;background-image:-webkit-gradient(linear,left top,left bottom,from(#111),color-stop(35%,#111),color-stop(55%,#333),color-stop(55%,#111),to(#111));background-image:linear-gradient(to bottom,#111 0,#111 35%,#333 55%,#111 55%,#111 100%);background-color:#222;padding:0 .15em;color:#fff}.odometer.odometer-auto-theme .odometer-digit+.odometer-digit,.odometer.odometer-theme-train-station .odometer-digit+.odometer-digit{margin-left:.1em}", ".npm-digit,.odometer,.odometer-digit-inner,.odometer-digit-spacer,.odometer-formatting-mark,.odometer-inside,.odometer-ribbon,.odometer-ribbon-inner,.odometer-value{color:inherit;font-size:inherit;font-family:inherit}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(Ng9OdometerComponent, [{
        type: Component,
        args: [{
                selector: 'ng9-odometer',
                encapsulation: ViewEncapsulation.None,
                styleUrls: [
                    'themes/CAR_THEME.css',
                    'themes/DEFAULT_THEME.css',
                    'themes/DIGITAL_THEME.css',
                    'themes/MINIMAL_THEME.css',
                    'themes/PLAZA_THEME.css',
                    'themes/SLOT_MACHINE_THEME.css',
                    'themes/TRAIN_STATION_THEME.css',
                    'ng9-odometer.component.css'
                ],
                template: `<div #container></div>`
            }]
    }], null, { container: [{
            type: ViewChild,
            args: ['container', { read: ElementRef }]
        }], number: [{
            type: Input
        }], config: [{
            type: Input
        }], observable: [{
            type: Input
        }], animation: [{
            type: Input
        }], format: [{
            type: Input
        }], theme: [{
            type: Input
        }], value: [{
            type: Input
        }], duration: [{
            type: Input
        }], auto: [{
            type: Input
        }] }); })();

/**
 * Created by Jose Andres on 02.23.17
 */
class Ng9OdometerModule {
    static forRoot() {
        return {
            ngModule: Ng9OdometerModule
        };
    }
}
Ng9OdometerModule.ɵmod = ɵɵdefineNgModule({ type: Ng9OdometerModule });
Ng9OdometerModule.ɵinj = ɵɵdefineInjector({ factory: function Ng9OdometerModule_Factory(t) { return new (t || Ng9OdometerModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(Ng9OdometerModule, { declarations: [Ng9OdometerComponent], imports: [CommonModule], exports: [Ng9OdometerComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(Ng9OdometerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [Ng9OdometerComponent],
                exports: [Ng9OdometerComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng9-odometer
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Ng9OdometerComponent, Ng9OdometerModule };
//# sourceMappingURL=ng9-odometer.js.map
