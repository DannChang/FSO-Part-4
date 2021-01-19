const getLikes = (blog) => {
    const blogLikes = blog.map(blog => blog.likes);

    const sumOfLikes = 
        blogLikes.reduce((sum, current) => sum + current, 0);
    return sumOfLikes;
};

module.exports = {
    getLikes
};