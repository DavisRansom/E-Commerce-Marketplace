const { Product } = require('../models');

const productData = [
  {
    product_img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000',  
    product_name: 'iPhone 13',
    price: 1200,
    stock: 14,
    category_id: 1,
  },
  {
    product_img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1617067383000',
    product_name: 'iPad Pro',
    price: 800,
    stock: 25,
    category_id: 2,
  },
  {
    product_img: 'https://cdn11.bigcommerce.com/s-je364a6h/images/stencil/608x608/products/215001/182569/85798759_6753257486__32868.1639776171.png?c=2',
    product_name: 'HP SPECTRE X360',
    price: 700,
    stock: 12,
    category_id: 3,
  },
  {
    product_img: 'https://www.scullyandscully.com/productimages/image.axd/f.82214/w.500/h.500/malacca+umbrella%2c+black.jpg',
    product_name: 'Umbrella',
    price: 50,
    stock: 8,
    category_id: 4,
  },
  {
    product_img: 'https://st.hzcdn.com/simgs/4a4127500ae9ce97_4-9685/home-design.jpg',
    product_name: 'Awning',
    price: 1250,
    stock: 3,
    category_id: 4,
  },
  {
    product_img: 'https://images.ray-ban.com/is/image/RayBan/8056597328111__STD__shad__qt.png?impolicy=RB_Product&width=Param&bgc=%23f2f2f2',
    product_name: 'Sunglasses',
    price: 100,
    stock: 13,
    category_id: 4,
  },
  {
    product_img: 'https://image-us.samsung.com/SamsungUS/home/mobile/tablets/pdp/galaxy-tab-s-s-plus/09-01-2020/Galaxy_TabS7_Keyboard_Bronze-GalleryImage-1600x1200.jpg?$product-details-jpg$',
    product_name: 'Samsung Galaxy Tab S7',
    price: 850,
    stock: 12,
    category_id: 2,
  },
  {
    product_img: 'https://i5.walmartimages.com/asr/51177f9f-c54b-4806-bb02-4cd7845957e0.1d7d79a8d538c0c6dc8cfb1922139a57.jpeg',
    product_name: 'Asus Zephyrus G14',
    price: 2000,
    stock: 18,
    category_id: 3,
  },
  {
    product_img: 'https://lh3.googleusercontent.com/BeXHGJzbj3HEs7PlYRX1_ty4IaOl-nvV2yMY33-KXmx8divLtPER3jI22LYTXUcy0fIVFyf0l8YRRFXWz9fCAHgxvcLEgkfmMEY',
    product_name: 'Google Pixel 6',
    price: 1100,
    stock: 17,
    category_id: 1,
  },
  {
    product_img: 'https://images.stockx.com/images/NVIDIA-GeForce-RTX-3080-Graphics-Card-Founders-Edition.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1609438979',
    product_name: 'GTX 3080 Graphics Card',
    price: 799,
    stock: 1,
    category_id: 5,
  },
  {
    product_img: 'https://www.delltechnologies.com/uploads/2021/10/xps-blog-image-4-v2.png',
    product_name: 'Dell XPS Business Desktop',
    price: 1500,
    stock: 7,
    category_id: 5,
  },
  {
    product_img: 'https://images.samsung.com/levant/smartphones/galaxy-z-fold3-5g/buy/zfold3_carousel_mainsinglekv_mo.jpg',
    product_name: 'Samsung ZFold3',
    price: 750,
    stock: 6,
    category_id: 1,
  },
  {
    product_img: 'https://cdn.apartmenttherapy.info/image/upload/v1581614386/at/style/2020-02/Window%20Treatments/PCH%20shade.png',
    product_name: 'Pull Up Blinds',
    price: 450,
    stock: 27,
    category_id: 4,
  },
  {
    product_img: 'https://dlcdnwebimgs.asus.com/gain/7a6eab8e-99a2-487a-9ee1-8d61e8101add/',
    product_name: 'Radeon RX 6800',
    price: 1500,
    stock: 19,
    category_id: 5,
  },
  {
    product_img: 'https://m.media-amazon.com/images/I/81bwfORRqEL._AC_SL1500_.jpg',
    product_name: 'Corsair RGB Fan',
    price: 85,
    stock: 18,
    category_id: 5,
  },

];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
