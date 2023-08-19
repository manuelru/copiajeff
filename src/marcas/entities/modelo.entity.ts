import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Modelo {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'int8', nullable: false })
  marca_id: number;

  @Column({ type: 'varchar', nullable: false })
  nombre: string;

  @Column({ type: 'int8', nullable: false })
  user_id: string;
}
