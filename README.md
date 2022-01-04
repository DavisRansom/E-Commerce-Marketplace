# E-Commerce Site The Shady Marketplace

The Shady Marketplace is a complete front-end, back-end, and database for a working E-commerce site.

## Description

The Shady Marketplace is a complete, working E-commerce application. The application creates a E-shopping site through which users can purchase a variety of products. The site offers a number of possibilities. For a user who simply wants to purchase a product, he/she can shop through the online catalog of products and/or search for a product by category. When the user selects a product, it is added to their cart and stored there until he/she is ready to place an order. After signing in, the user simply clicks on the Place An Order button and he/she is taken to the Checkout page to finalize the order.

If the user wants to sell items on the site, that is possible too. A user just creates a Seller sign-in, and then he/she can add products to sell on the site. Sellers can add categories, too, so that their products can be found easily.

Orders are processed financially using the Stripe application, which is embedded on a testing basis (meaning that in its current form orders cannot be processed monetarily) in this application.

After the order is completed the user receives a message that the order has been a success and given the option to return to the homepage for more shopping.

## Getting Started

### Dependencies

This application is optimized for GoogleChrome but can run on any modern browser that has Javascript turned on.

### Installing

The files for this application can be found here:
* https://github.com/DavisRansom/Team6

### How To Execute the Program


After cloning the above files from Github, on your local computer navigate to the folder that contains the files and run the following commands:

1. npm install
2. npm run seed
3. node server

You should see a message explaining that the server is listening.
Then you can go to a web browser and navigate to the page and access the rest of the site via clicking on the various links.

After shopping for a bit, the first thing to do is Sign-up.
Click on the Sign-Up link in the upper right corner and fill out the information.
If you choose to be a seller, input your information and then click on the Seller checkbox to create an account.
If you choose just to buy products, simply enter your info to create an account.
Then either a user or a seller is free to interact with the site to buy, add, or sell products.

## Help

If there are issues using the application, often starting the server over and rerunning the application can address them.

## Authors 

Joseph Spann https://github.com/jpspann91 
Hekmatullah Salehi https://github.com/hekmatsalehi 
Edgar Fernandez https://github.com/HCTyler 
Casey Higginbotham https://github.com/CaseyHiggy 
Davis Ransom https://github.com/DavisRansom

## Version History
    * Initial Release 1/5/2022

## License

This project is licensed under the MIT License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2021
Davis Ransom, Joseph Spann, Hekmatullah Salehi, Casey Higginbotham, and Edgar Fernandez.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Acknowledgments

* [Stripe](https://stripe.com/) - was very useful in handling the payments
