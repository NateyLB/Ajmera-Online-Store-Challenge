# Ajmera Practical Assestment
    Online Store Challenge 
    https://github.com/NateyLB/Ajmera-Online-Store-Challenge

## Description of Project
    This project is a basic React client for an online eCommerce store. The home page is a master view that displays all the products fetched from https://fakestoreapi.com/products/ in cards
    with a basic overview of the product. A user can then click on one of these cards and open a detailed view. The "eCommerce" logo can be pressed to bring you home, the master view of all products. 

    I used React, Typescipt, and Material UI because they were required in the assignment description. Axios was used for the API requests becuase I am familiar with using Axios. I used React Router to route my pages and swtich between master and detailed view. A package called react-loading-icons was used for loading animations while wiating for dynamically loaded data from the fakestore API. I used React's built in React.lazy and Suspense to handle dynamic loading of components from API data. 

    I faced some challenges using Material UI.The most frsutrating problem I had was that I kept getting a horizontal scrollbar on every screen width. I tried to use Chrome's inspect to highlight the components that I thought was causing the svreen to overflow. I traced it all the way back to the root <div> but could not figure out why the screen kept overflowing horizontally. After an hour or so, I was finally able to see that the nav bar had padding that was causing it to become wider than the length of the screen and cause overflow. I applied padding:0 but still nothing changhed. WHen I selected and applied the padding in inspect, it fixed the problem. There was a style on the nav bar that was taking priority over my sx style. I added padding:0!important and fixed the problem.

    I only had part of Tuesday and Wednesday to work on this assignment so I did not get to implement bonus features that I wanted to implement. I would have really liked to use Redux to create a working shopping cart with a reducer to handle the state of the cart. I have implemented this feature in mock assigments before but just ran out of time. 

## Installation and Run
    Navigate to client folder
        cd react-client

    Install
        npm install

    Start
        npm start