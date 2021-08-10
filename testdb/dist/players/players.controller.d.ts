import { HttpStatus } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
export declare class PlayersController {
    private readonly playersService;
    constructor(playersService: PlayersService);
    create(createPlayerDto: CreatePlayerDto): Promise<{
        HttpCode: HttpStatus;
        message: string;
        user: import("./entities/player.entity").Player;
    }>;
    findAll(): Promise<{
        HttpCode: HttpStatus;
        message: string;
        users: import("./entities/player.entity").Player[];
    }>;
    findOne(id: string): Promise<{
        HttpCode: HttpStatus;
        message: string;
        user: import("./entities/player.entity").Player;
    }>;
    update(id: string, updatePlayerDto: UpdatePlayerDto): Promise<{
        HttpCode: HttpStatus;
        message: string;
        user: void;
    }>;
    remove(id: string): Promise<{
        HttpCode: HttpStatus;
        message: string;
    }>;
}
