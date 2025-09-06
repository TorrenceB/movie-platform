import { Sequelize } from 'sequelize';

const createConnection = () => {
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'db/movie.sqlite'
    });

    return sequelize;
};

export default createConnection;