import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { User } from './user.entity';
import { Product } from './product.entity';
import { InitEntity } from './base.entity';

@Entity()
export class Question extends InitEntity {
  @Column({ length: 100 })
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'text' })
  answer: string;

  @Column({ type: 'boolean' })
  secret: boolean;

  @Column({ length: 15 })
  category: string;

  @ManyToOne(() => User, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;
  @Column()
  user_id!: number;

  @ManyToOne(() => Product, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product!: Product;
  @Column()
  product_id!: number;
}
