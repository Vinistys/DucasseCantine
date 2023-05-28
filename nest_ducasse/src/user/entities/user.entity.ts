import { RangEntity } from 'src/rang/entities/rang.entity';
import { RestaurantEntity } from 'src/restaurant/entities/restaurant.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  //Décrit la table user dans la base de donnée
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nom: string;

  @Column({ length: 255 })
  prenom: string;

  @Column({ length: 255 })
  email: string;

  @Column('text')
  password: string;

  //Le ManyToOne ci dessous est fait de la même manière que sur la doc typeOrm officiel et revient au même que celle vu en cours avec Joan comme pour le rang en dessous.
  //Décrit la relation entre la table user et la table restaurant
  @ManyToOne(() => RestaurantEntity, (restaurant) => restaurant.users, {
    nullable: false,
  })
  restaurant: RestaurantEntity;

  // @ManyToOne(restaurant => RestaurantEntity, restaurant => restaurant.id)
  // @JoinColumn({name : 'restaurant'})
  // restaurant : RestaurantEntity;

  //Décrit la relation entre la table user et la table rang
  @ManyToOne((rang) => RangEntity, (rang) => rang.id, { nullable: false })
  @JoinColumn({ name: 'rang' })
  rang: RangEntity;

  @Column({ nullable: true })
  refreshToken: string;

  @Column({ nullable: true })
  refreshTokenExpires: string;
}
