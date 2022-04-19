import { Sequelize } from "sequelize-typescript";
import { SEQUELIZE } from "../constants";


// const config:  = {
//     type: 'sqlite',
//     database: 'db',
//     entities: ['dist/src/**/*.entity.js'],
//     synchronize: false
// }

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        const sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: 'db'
        })
        sequelize.addModels([]);
        await sequelize.sync();
        return sequelize;
    }
}]