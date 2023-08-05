import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class Module1Entity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  username: string;

  @Column({
    type: 'mediumblob',
  })
  avatar: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  role: string;
}
