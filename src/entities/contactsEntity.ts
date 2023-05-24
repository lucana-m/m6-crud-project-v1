import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./userEntity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column({ type: "integer" })
  phone: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @ManyToOne(() => User)
  user: User;
}
