import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { ObjectType, ID, Field } from 'type-graphql'

@Entity()
@ObjectType()
export class Attributes {

  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  strength: number

  @Field()
  @Column()
  intelligence: number

  @Field()
  @Column()
  stamina: number

  @Field()
  @Column()
  agility: number

  @Field()
  @Column()
  speed: number
}
