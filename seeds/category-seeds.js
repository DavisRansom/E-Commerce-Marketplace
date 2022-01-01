const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Phone',
    category_img: 'https://www.gannett-cdn.com/media/2019/07/13/USATODAY/usatsports/247WallSt.com-247WS-559997-old-phones.jpg?crop=1365,768,x0,y0&width=1365&height=682&format=pjpg&auto=webp',
  },
  {
    category_name: 'Tablet',
    category_img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-tablets-1592809487.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
  },
  {
    category_name: 'Labtop',
    category_img: 'https://s.yimg.com/uu/api/res/1.2/Z7jFGzCKLpv3m2N5uRi12Q--~B/aD0xMzAwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-11/a179f550-3b11-11ec-86df-fa28310e5588.cf.jpg',
  },
  {
    category_name: 'Shade',
    category_img: 'https://golf.com/wp-content/uploads/2020/07/tree.jpg',
  },
  {
    category_name: 'PC',
    category_img: 'https://m.media-amazon.com/images/I/61mbfA9BipL._AC_SX466_.jpg',
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
