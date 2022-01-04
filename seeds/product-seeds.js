const { Product } = require('../models');

const productData = [
  {

    description: 'The iPhone 13 and iPhone 13 mini iterate upon the successful iPhone 12 with new cameras and longer battery life. The notch has been reduced in size, and the rear camera module now sits at a diagonal. In addition, the A15 processor brings more speed and efficiency to every task.', 
    product_img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000',  
    alt: 'iPhone 13',
    product_name: 'iPhone 13',
    price: 1200,
    stock: 14,
  },
  {

    description: 'The 11-inch and 12.9-inch iPad Pro models were updated in April 2021 with a faster M1 chip, a Liquid Retina XDR mini-LED display on the 12.9-inch model, 5G connectivity, and more. There is also a new Magic Keyboard white color option, and the new iPad Pro models continue to work with the Apple Pencil 2.',

    product_img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1617067383000',
    alt: 'Test alternative text',
    product_name: 'iPad Pro',
    price: 800,
    stock: 25,
  },
  {

    description: 'HP Spectre X360 is a Windows 10 Professional laptop with a 13.30-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i7 processor and it comes with 8GB of RAM. The HP Spectre X360 packs 256GB of SSD storage. Graphics are powered by Intel Integrated UHD Graphics 620.',

    product_img: 'https://cdn11.bigcommerce.com/s-je364a6h/images/stencil/608x608/products/215001/182569/85798759_6753257486__32868.1639776171.png?c=2',
    alt: 'Test alternative text',
    product_name: 'HP SPECTRE X360',
    price: 700,
    stock: 12,
  },
  {

    description: 'Umbrella is a portable, hand-held device that is used for protection against rain and sunlight. The modern umbrella consists of a circular fabric or plastic screen stretched over hinged ribs that radiate from a central pole.',

    product_img: 'https://www.scullyandscully.com/productimages/image.axd/f.82214/w.500/h.500/malacca+umbrella%2c+black.jpg',
    alt: 'Test alternative text',
    product_name: 'Umbrella',
    price: 50,
    stock: 8,
  },
  {
    description: 'An awning or overhang is a secondary covering attached to the exterior wall of a building',
    product_img: 'https://st.hzcdn.com/simgs/4a4127500ae9ce97_4-9685/home-design.jpg',
    alt: 'Test alternative text',
    product_name: 'Awning',
    price: 1250,
    stock: 3,
  },
  {
    description: 'Sunglasses are a form of protective eyewear designed primarily to prevent bright sunlight and high-energy visible light from damaging or discomforting the eyes',
    product_img: 'https://images.ray-ban.com/is/image/RayBan/8056597328111__STD__shad__qt.png?impolicy=RB_Product&width=Param&bgc=%23f2f2f2',
    alt: 'Test alternative text',
    product_name: 'Sunglasses',
    price: 100,
    stock: 13,
  },
  {
    description: 'Samsung Galaxy is Samsung Electronics flagship line of Android smartphones and tablets',
    product_img: 'https://image-us.samsung.com/SamsungUS/home/mobile/tablets/pdp/galaxy-tab-s-s-plus/09-01-2020/Galaxy_TabS7_Keyboard_Bronze-GalleryImage-1600x1200.jpg?$product-details-jpg$',
    alt: 'Test alternative text',
    product_name: 'Samsung Galaxy Tab S7',
    price: 850,
    stock: 12,
  },
  {
    description: 'AMD Ryzen 9 processor is blazing fast with a solid 60fps plus gaming across genres and an impressively configured 32GB of memory, 1TB SSD, and a 1440p screen',
    product_img: 'https://i5.walmartimages.com/asr/51177f9f-c54b-4806-bb02-4cd7845957e0.1d7d79a8d538c0c6dc8cfb1922139a57.jpeg',
    alt: 'Test alternative text',
    product_name: 'Asus Zephyrus G14',
    price: 2000,
    stock: 18,
  },
  {
    description: 'Google Pixel is a brand of consumer electronic devices developed by Google that run either Chrome OS or the Android operating system',
    product_img: 'https://lh3.googleusercontent.com/BeXHGJzbj3HEs7PlYRX1_ty4IaOl-nvV2yMY33-KXmx8divLtPER3jI22LYTXUcy0fIVFyf0l8YRRFXWz9fCAHgxvcLEgkfmMEY',
    alt: 'Test alternative text',
    product_name: 'Google Pixel 6',
    price: 1100,
    stock: 17,
  },
  {
    description: 'The GeForce RTX™ 3080 Ti and RTX 3080 graphics cards deliver the ultra performance that gamers crave, powered by Ampere—NVIDIAs 2nd gen RTX architecture.',
    product_img: 'https://images.stockx.com/images/NVIDIA-GeForce-RTX-3080-Graphics-Card-Founders-Edition.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1609438979',
    alt: 'Test alternative text',
    product_name: 'GTX 3080 Graphics Card',
    price: 799,
    stock: 1,
  },
  {
    description: 'The newest Dell XPS 13 is one of the first ultra-portable laptops to come with Intels latest 11th Generation "Tiger Lake" CPUs',
    product_img: 'https://www.delltechnologies.com/uploads/2021/10/xps-blog-image-4-v2.png',
    alt: 'Test alternative text',
    product_name: 'Dell XPS Business Desktop',
    price: 1500,
    stock: 7,
  },
  {
    description: 'The Samsung Galaxy Z Fold 3 delivers a more durable design, S Pen support and better multitasking',
    product_img: 'https://images.samsung.com/levant/smartphones/galaxy-z-fold3-5g/buy/zfold3_carousel_mainsinglekv_mo.jpg',
    alt: 'Test alternative text',
    product_name: 'Samsung ZFold3',
    price: 750,
    stock: 6,
  },
  {
    description: 'Pull up blinds or shades are any window blinds that are raised using a cord or pull',
    product_img: 'https://cdn.apartmenttherapy.info/image/upload/v1581614386/at/style/2020-02/Window%20Treatments/PCH%20shade.png',
    alt: 'Test alternative text',
    product_name: 'Pull Up Blinds',
    price: 450,
    stock: 27,
  },
  {
    description: 'The Radeon RX 500 series is a series of graphics cards made by AMD. These cards are based on the fourth iteration of the Graphics Core Next architecture, featuring GPUs based on Polaris 30',
    product_img: 'https://dlcdnwebimgs.asus.com/gain/7a6eab8e-99a2-487a-9ee1-8d61e8101add/',
    alt: 'Test alternative text',
    product_name: 'Radeon RX 6800',
    price: 1500,
    stock: 19,
  },
  {
    description: 'CORSAIR fans are engineered for superior cooling, performance and quiet operation, with PWM control and customizable RGB lighting.',
    product_img: 'https://m.media-amazon.com/images/I/81bwfORRqEL._AC_SL1500_.jpg',
    alt: 'Test alternative text',
    product_name: 'Corsair RGB Fan',
    price: 85,
    stock: 18,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
