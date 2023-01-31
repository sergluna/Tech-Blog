const { Post } = require('../models');

const postData = [
  {
    title: 'Sequelize Data Types',
    post_text: 'Sequelize has several built in, handy data types that you can use when you define a model.  The most commonly used for simple databases are INTEGER and STRING.',
    user_id: 1,
  },
  {
    title: 'Handlebars Template Engine',
    post_text: 'Handlebars is a very useful npm package that allows you to use templates in your code, making things more modular, re-usable, and maintainable.  For instance, you can set up a layout used for several pages with templates for a home page and a user dashboard.',
    user_id: 2,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
