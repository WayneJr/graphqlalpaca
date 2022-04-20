import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from '../constants';
import { User } from '../../users/entities/user.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize('sqlite::memory:');
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
