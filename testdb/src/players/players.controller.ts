import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async create(@Body() createPlayerDto: CreatePlayerDto) {
    const user = await this.playersService.create(createPlayerDto);
    return {
      HttpCode: HttpStatus.OK,
      message: 'User created successfully',
      user
    };
  }

  @Get()
  async findAll() {
    const users = await this.playersService.findAll();
    return {
      HttpCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      users
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.playersService.findOne(+id);
    return {
      HttpCode: HttpStatus.OK,
      message: 'User fetched successfully',
      user
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    const user = await this.playersService.update(+id, updatePlayerDto);
    return {
      HttpCode: HttpStatus.OK,
      message: 'User updated successfully',
      user
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.playersService.remove(+id);
    return {
      HttpCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
