import { PrimaryGeneratedColumn, CreateDateColumn, Entity, Column } from 'typeorm';

@Entity('player')
export class Player {
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn({ nullable: false })
	createdAt: Date;

	@Column({nullable: false})
	name: string;

	@Column({nullable: false})
	password: string;
}
