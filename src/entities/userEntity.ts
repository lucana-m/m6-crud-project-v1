import { getRounds, hashSync } from "bcryptjs";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Contact } from "./contactsEntity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column({ type: "varchar" })
  phone: string;

  @Column({ length: 120 })
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPasssword() {
    const isEncripted = getRounds(this.password);

    if (!isEncripted) {
      this.password = hashSync(this.password, 10);
    }
  }

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;
}
