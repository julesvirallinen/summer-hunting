import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { ObjectType, ID, Field } from 'type-graphql'

@Entity()
@ObjectType()
export class LifePower {

  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  healthpoints: number

  @Field()
  @Column()
  mana: number
}
