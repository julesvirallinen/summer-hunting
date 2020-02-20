import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToOne, JoinColumn } from "typeorm"
import { ObjectType, ID, Field } from 'type-graphql'
import { Lazy } from '../helpers'
import { Skill } from '../entities/skill'
import { TElement } from '../types/element'
import { Attributes } from '../entities/attributes'
import { LifePower } from "./lifepower"

@Entity()
@ObjectType()
export class Hero {

  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  imgUrl: string

  @Field()
  @Column()
  description: string

  @Field()
  @Column()
  backStory: string

  @Field(type => [Skill])
  @ManyToMany(type => Skill, { lazy: true, cascade: ['insert'] })
  @JoinTable()
  skills: Lazy<Skill[]>

  @OneToOne(type => Attributes, {cascade: ['insert']})
  @JoinColumn()
  attributes: Attributes

  @OneToOne(type => LifePower, {cascade: ['insert']})
  @JoinColumn()
  lifePower: LifePower

  @Field()
  @Column()
  resistance: TElement

  @Field()
  @Column()
  weakness: TElement



}
