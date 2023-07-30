import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./users.entity"


@Entity("contacts")
class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    phone: string

    @CreateDateColumn({ type: 'date' })
    createdAt: string

    @ManyToOne(() => User)
    user: User
}

export { Contact }