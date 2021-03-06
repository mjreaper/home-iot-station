"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var DeviceService = (function () {
    function DeviceService(http) {
        this.http = http;
        this.devicesUrl = 'api/devices';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    DeviceService.prototype.getDevices = function () {
        return this.http.get(this.devicesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DeviceService.prototype.getDevice = function (id) {
        var url = this.devicesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DeviceService.prototype.handleError = function (error) {
        console.log('An error occured', error);
        return Promise.reject(error.message || error);
    };
    DeviceService.prototype.update = function (device) {
        var url = this.devicesUrl + "/" + device.id;
        return this.http.put(url, JSON.stringify(device), { headers: this.headers })
            .toPromise()
            .then(function () { return device; })
            .catch(this.handleError);
    };
    DeviceService.prototype.create = function (name) {
        return this.http.post(this.devicesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DeviceService.prototype.delete = function (id) {
        var url = this.devicesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return DeviceService;
}());
DeviceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DeviceService);
exports.DeviceService = DeviceService;
//# sourceMappingURL=device.service.js.map