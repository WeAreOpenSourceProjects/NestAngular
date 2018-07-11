import {
    Column,
    Entity,
    OneToMany,
    ManyToMany,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    ObjectIdColumn,
    ObjectID,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Moment } from 'moment';

@Entity()
export class Role {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @CreateDateColumn({ nullable: true })
  createdDate: Moment;

  @UpdateDateColumn({ nullable: true })
  updatedDate: Moment;

}
