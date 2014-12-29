Web Performance Optimization

-To test the website for optimization please click on this link http://aimanaijaz.github.io/Web-Performance/Optimization/   
 I have hosted the site on github pages. This site has been minified and compressed.    

-To access the development version click on the following link https://github.com/aimanaijaz/Web-Performance/tree/master/Optimization   

I have optimized the site in the following ways

1)Image optimization 
(a) Used gulp-image-optimization to optimize the images in the img folder.   
(b) Optimized the pizza.png image using kraken and pizzeria.jpg image by using picResize

2) Inline CSS 
(a) Inlined critical CSS by following Addy Osmani's video "Detecting Critical CSS For Above-The-Fold Content". ( https://www.youtube.com/watch?v=CfmUf1_M9lI - Detecting critical CSS ).   
(b) Used a script to call CSS at the end  

3) Added async attribute to my scripts so that it does not block DOM constrcution.

4) Added a media query so that it does not block rendering.

5) Used gulp to minify HTML, CSS and Javascript. Used it for image optimization as well. Also used gulp-uncss to remove unused CSS from bootstarp-grid.css

6) Made the following optimizations in main.js
(a) Removed some variables out of their loops to improve performance.   
(b) Used translateX instead of updating left property of each element.   
(c) The position of the pizzas was updated each time the scroll event listener detected a scroll. Modified code so that update is called only when necesssary.    
(d) Reduced the number of pizza images in the background as all were not visible to the user yet were taking up resources.  

