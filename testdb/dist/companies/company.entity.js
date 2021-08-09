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
exports.Company = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
let Company = class Company extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "domain", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', nullable: true, default: null }),
    __metadata("design:type", String)
], Company.prototype, "description", void 0);
Company = __decorate([
    typeorm_1.Entity('companies')
], Company);
exports.Company = Company;
//# sourceMappingURL=company.entity.js.map