// Import Article
const Article=require("./Article.js");

// Pass the values to the constructor method of Article
let article = new Article(
  {
    title: "This is the title!",
    author: "Kahn",
    content: "This is an example article!"
  });

// Shows its HTML on the console
console.log(article.render() );
