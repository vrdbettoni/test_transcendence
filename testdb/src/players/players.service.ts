import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayersService {
  constructor (
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  async create(createPlayerDto: CreatePlayerDto) {
    const player = this.playerRepository.create(createPlayerDto);
    await this.playerRepository.save(createPlayerDto);
    return player;
  }

  async findAll() {
    return this.playerRepository.find();
  }

  async findOne(id: number) {
    return this.playerRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    await this.playerRepository.update( { id }, updatePlayerDto);
  }

  async remove(id: number) {
    await this.playerRepository.delete({ id });
    return { deleted: true }
  }
}
