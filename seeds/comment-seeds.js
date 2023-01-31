const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Wow! Thanks!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "So cool!",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "You are cding great!",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Great. Good job!",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "So cool!",
    post_id: 5,
    user_id: 5
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
