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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const company_entity_1 = require("./company.entity");
const companies_service_1 = require("./companies.service");
let CompaniesController = class CompaniesController {
    constructor(service) {
        this.service = service;
    }
};
CompaniesController = __decorate([
    crud_1.Crud({
        model: {
            type: company_entity_1.Company
        }
    }),
    common_1.Controller('companies'),
    __metadata("design:paramtypes", [companies_service_1.CompaniesService])
], CompaniesController);
exports.CompaniesController = CompaniesController;
//# sourceMappingURL=companies.controller.js.map