const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

// populate seeds json 
const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });

        const users = await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });

        const post = await Post.bulkCreate(postData, {
            individualHooks: true,
            returning: true,
        });

        const comments = await Comment.bulkCreate(commentData, {
            individualHooks: true,
            returning: true,
        });
        process.exit(0);
    } catch (err) {
        console.log(err)
    }
};

seedDatabase();