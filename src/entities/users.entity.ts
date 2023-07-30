import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Contact } from "./contacts.entity"

@Entity("users")
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column()
    phone: string

    @CreateDateColumn({ type: 'date' })
    createdAt: string

    @OneToMany(() => Contact, contact => contact.user)
    contacts: Contact[]

}

export { User }