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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayersController = void 0;
const common_1 = require("@nestjs/common");
const players_service_1 = require("./players.service");
const create_player_dto_1 = require("./dto/create-player.dto");
const update_player_dto_1 = require("./dto/update-player.dto");
let PlayersController = class PlayersController {
    constructor(playersService) {
        this.playersService = playersService;
    }
    async create(createPlayerDto) {
        const user = await this.playersService.create(createPlayerDto);
        return {
            HttpCode: common_1.HttpStatus.OK,
            message: 'User created successfully',
            user
        };
    }
    async findAll() {
        const users = await this.playersService.findAll();
        return {
            HttpCode: common_1.HttpStatus.OK,
            message: 'Users fetched successfully',
            users
        };
    }
    async findOne(id) {
        const user = await this.playersService.findOne(+id);
        return {
            HttpCode: common_1.HttpStatus.OK,
            message: 'User fetched successfully',
            user
        };
    }
    async update(id, updatePlayerDto) {
        const user = await this.playersService.update(+id, updatePlayerDto);
        return {
            HttpCode: common_1.HttpStatus.OK,
            message: 'User updated successfully',
            user
        };
    }
    async remove(id) {
        await this.playersService.remove(+id);
        return {
            HttpCode: common_1.HttpStatus.OK,
            message: 'User deleted successfully',
        };
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_player_dto_1.CreatePlayerDto]),
    __metadata("design:returntype", Promise)
], PlayersController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlayersController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlayersController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_player_dto_1.UpdatePlayerDto]),
    __metadata("design:returntype", Promise)
], PlayersController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlayersController.prototype, "remove", null);
PlayersController = __decorate([
    common_1.Controller('players'),
    __metadata("design:paramtypes", [players_service_1.PlayersService])
], PlayersController);
exports.PlayersController = PlayersController;
//# sourceMappingURL=players.controller.js.map