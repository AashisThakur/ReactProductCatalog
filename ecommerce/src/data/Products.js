const products = [
  {
    name: 'Apple iPhone 12',
    image:
      'https://cdn.shopify.com/s/files/1/0615/1631/6729/products/iPhone-12-Now-Available_4d5111d8-bbbf-4969-9516-eb5129ab9792.jpg?v=1662015594',
    description:
      'The latest iPhone model with a sleek design and advanced features.',
    brand: 'Apple',
    category: 'Electronics',
    price: 999.99,
    countInStock: 10,
    rating: 4.0,
    numReviews: 20,
  },
  {
    name: 'Samsung Galaxy S21',
    image:
      'https://cdn.dxomark.com/wp-content/uploads/medias/post-74826/SamsungGalaxys215g.jpg',
    description:
      'A powerful Android smartphone with a stunning display and excellent camera.',
    brand: 'Samsung',
    category: 'Electronics',
    price: 899.99,
    countInStock: 8,
    rating: 3.5,
    numReviews: 15,
  },
  {
    name: 'Sony PlayStation 5',
    image:
      'https://www.yankodesign.com/images/design_news/2023/03/auto-draft/sony_playstation_5_pro_1.jpg',
    description:
      'Next-generation gaming console with ultra-fast SSD and immersive graphics.',
    brand: 'Sony',
    category: 'Electronics',
    price: 499.99,
    countInStock: 5,
    rating: 3.9,
    numReviews: 50,
  },
  {
    name: 'LG OLED TV',
    image:
      'https://www.lg.com/in/images/tvs/md07538272/gallery/OLED55C1XTZ-D-01-v2.jpg',
    description:
      'A high-end television with stunning picture quality and smart features.',
    brand: 'LG',
    category: 'Electronics',
    price: 1999.99,
    countInStock: 3,
    rating: 3.5,
    numReviews: 30,
  },
  {
    name: 'Apple MacBook Pro',
    image:
      'https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg',
    description:
      'Powerful laptop with a brilliant Retina display and long battery life.',
    brand: 'Apple',
    category: 'Electronics',
    price: 1999.99,
    countInStock: 12,
    rating: 4.5,
    numReviews: 25,
  },
  {
    name: 'Bose QuietComfort 35 II',
    image:
      'https://media.wired.com/photos/5a2b38127ddf3c6b8cc41577/master/w_2560%2Cc_limit/bose-TAb.jpg',
    description:
      'Wireless noise-canceling headphones with excellent sound quality.',
    brand: 'Bose',
    category: 'Electronics',
    price: 299.99,
    countInStock: 20,
    rating: 4.0,
    numReviews: 40,
  },
  {
    name: 'Canon EOS Rebel T7i',
    image:
      'https://www.dpreview.com/files/p/articles/4986684422/canon_handson_37.jpeg',
    description: 'A versatile DSLR camera for photography enthusiasts.',
    brand: 'Canon',
    category: 'Electronics',
    price: 799.99,
    countInStock: 6,
    rating: 4.5,
    numReviews: 35,
  },
  {
    name: 'Amazon Kindle Paperwhite',
    image:
      'https://staticg.sportskeeda.com/editor/2023/01/486e9-16747477942569-1920.jpg',
    description:
      'A waterproof e-reader with a high-resolution display and built-in light.',
    brand: 'Amazon',
    category: 'Electronics',
    price: 129.99,
    countInStock: 15,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: 'Microsoft Xbox Series X',
    image:
      'https://m.economictimes.com/thumb/msid-79693128,width-1200,height-900,resizemode-4,imgsize-90086/the-xbox-series-x-is-powered-by-a-project-scarlett-7nm-chip-.jpg',
    description:
      'Next-generation gaming console with advanced graphics and fast loading times.',
    brand: 'Microsoft',
    category: 'Electronics',
    price: 499.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 45,
  },
  {
    name: 'Fitbit Versa 3',
    image:
      'https://m.media-amazon.com/images/I/71s-OXhQNDL._AC_UF1000,1000_QL80_.jpg',
    description:
      'A feature-packed smartwatch for fitness tracking and health monitoring.',
    brand: 'Fitbit',
    category: 'Electronics',
    price: 229.99,
    countInStock: 9,
    rating: 4.0,
    numReviews: 30,
  },
  {
    name: "Men's T-Shirt",
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ9Bvsq0vxtbfIiqszu6Aq8haJ-t_yLcC_2reWlWjafykDiCNkQotp2X6xx_BCl90ess3SJInBHkqWLbsj9nE85fZVgFTheRh5Gu_c1mKZp&usqp=CAE',
    description: 'A comfortable and stylish t-shirt for men.',
    brand: 'XYZ Brand',
    category: 'Clothing',
    price: 29.99,
    countInStock: 20,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: "Women's Dress",
    image:
      'https://cdn.shopify.com/s/files/1/1979/4335/products/RedColorTrendyGeorgetteFloralPrintWomen_sGown_1.jpg?v=1676299608',
    description: 'An elegant and fashionable dress for women.',
    brand: 'ABC Brand',
    category: 'Clothing',
    price: 49.99,
    countInStock: 15,
    rating: 4.2,
    numReviews: 8,
  },
  {
    name: "Men's Jeans",
    image:
      'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15771286/2022/9/26/ce7f73e1-685f-45ea-ac06-473768c9f5b81664184881708KETCHMenBlueTaperedFitSlashKneeHeavyFadeStretchableJeans1.jpg',
    description: 'Classic denim jeans for men with a comfortable fit.',
    brand: 'XYZ Brand',
    category: 'Clothing',
    price: 59.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Women's Blouse",
    image:
      'https://rukminim1.flixcart.com/image/832/832/l4ssfww0/blouse/h/t/k/free-fancy-purple-blouse-primeunity-original-imagfmermt6rnmqr.jpeg?q=70',
    description: 'A stylish blouse for women with intricate design patterns.',
    brand: 'ABC Brand',
    category: 'Clothing',
    price: 39.99,
    countInStock: 18,
    rating: 4.3,
    numReviews: 6,
  },
  {
    name: "Men's Polo Shirt",
    image:
      'https://src1.ilogo.in/images/products/683/custom-mens-premium-polo-shirt.webp',
    description: 'A classic polo shirt for men, perfect for casual occasions.',
    brand: 'XYZ Brand',
    category: 'Clothing',
    price: 34.59,
    countInStock: 25,
    rating: 4.0,
    numReviews: 15,
  },
  {
    name: "Women's Skirt",
    image: 'https://www.pluss.in/products-images/enlarge-image/11167.jpg',
    description: 'A trendy and comfortable skirt for women.',
    brand: 'ABC Brand',
    category: 'Clothing',
    price: 44.59,
    countInStock: 13,
    rating: 4.4,
    numReviews: 9,
  },
  {
    name: "Men's Hoodie",
    image:
      'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21203458/2023/1/2/06271946-be59-476d-bb62-0b4d81c961611672651142670-Roadster-Men-Sweatshirts-91672651142282-1.jpg',
    description: 'A warm and cozy hoodie for men, perfect for colder weather.',
    brand: 'XYZ Brand',
    category: 'Clothing',
    price: 69.99,
    countInStock: 8,
    rating: 3.5,
    numReviews: 20,
  },
  {
    name: "Women's Sweater",
    image:
      'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16334158/2021/12/16/36a5f8e6-4e82-4192-9579-b8f156921d0c1639630573965-STREET-9-Women-Sweaters-5301639630573552-1.jpg',
    description: 'A soft and stylish sweater for women, ideal for layering.',
    brand: 'ABC Brand',
    category: 'Clothing',
    price: 54.59,
    countInStock: 11,
    rating: 4.1,
    numReviews: 7,
  },
  {
    name: "Men's Shorts",
    image:
      'https://assets.ajio.com/medias/sys_master/root/20230330/wAPu/6425afb0711cf97ba7fce091/-473Wx593H-469430184-sagegreen-MODEL.jpg',
    description:
      'Comfortable and versatile shorts for men, suitable for outdoor activities.',
    brand: 'XYZ Brand',
    category: 'Clothing',
    price: 39.99,
    countInStock: 16,
    rating: 4.5,
    numReviews: 11,
  },
  {
    name: "Women's Jeans",
    image:
      'https://sslimages.shoppersstop.com/sys-master/images/h9d/hd3/27614554587166/INFLWD-28_INDIGO_alt1.jpg_2000Wx3000H',
    description: 'Stylish and trendy jeans for women with a flattering fit.',
    brand: 'ABC Brand',
    category: 'Clothing',
    price: 69.99,
    countInStock: 9,
    rating: 4.5,
    numReviews: 14,
  },
  {
    name: "Men's Running Shoes",
    image:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/518f6b4f-92d3-4dd0-8636-c652f642b45e/run-swift-3-road-running-shoes-BrHm16.png',
    description: 'Lightweight and comfortable running shoes for men.',
    brand: 'XYZ Brand',
    category: 'Shoes',
    price: 79.99,
    countInStock: 20,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: "Women's Sneakers",
    image:
      'https://rukminim1.flixcart.com/image/450/500/xif0q/shoe/i/r/c/5-girlshoe1415-5-kraasa-white-original-imagfh86jr5wdetn-bb.jpeg?q=90&crop=false',
    description: 'Stylish and versatile sneakers for women.',
    brand: 'ABC Brand',
    category: 'Shoes',
    price: 69.99,
    countInStock: 15,
    rating: 4.2,
    numReviews: 8,
  },
  {
    name: "Men's Dress Shoes",
    image:
      'https://rukminim1.flixcart.com/image/450/500/xif0q/shoe/q/h/z/7-mrj1852-7-aadi-black-original-imagdwgudezandfs-bb.jpeg?q=90&crop=false',
    description: 'Elegant and formal dress shoes for men.',
    brand: 'XYZ Brand',
    category: 'Shoes',
    price: 99.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Women's Sandals",
    image:
      'https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300932181PINK_1.jpg?v=1682514009',
    description: 'Comfortable and stylish sandals for women.',
    brand: 'ABC Brand',
    category: 'Shoes',
    price: 49.99,
    countInStock: 18,
    rating: 4.3,
    numReviews: 6,
  },
  {
    name: "Men's Casual Shoes",
    image:
      'https://rukminim1.flixcart.com/image/450/500/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=90&crop=false',
    description:
      'Versatile and casual shoes for men, perfect for everyday wear.',
    brand: 'XYZ Brand',
    category: 'Shoes',
    price: 59.99,
    countInStock: 25,
    rating: 4.0,
    numReviews: 15,
  },
  {
    name: "Women's Boots",
    image:
      'https://i.etsystatic.com/11657093/r/il/117093/3359789049/il_fullxfull.3359789049_4leu.jpg',
    description:
      'Stylish and fashionable boots for women, suitable for various occasions.',
    brand: 'ABC Brand',
    category: 'Shoes',
    price: 89.99,
    countInStock: 13,
    rating: 4.4,
    numReviews: 9,
  },
  {
    name: "Men's Sneakers",
    image:
      'https://www.apetogentleman.com/wp-content/uploads/2022/01/sneaker-types-men.jpg',
    description: 'Trendy and comfortable sneakers for men.',
    brand: 'XYZ Brand',
    category: 'Shoes',
    price: 79.99,
    countInStock: 8,
    rating: 3.5,
    numReviews: 20,
  },
  {
    name: "Women's High Heels",
    image: 'https://m.media-amazon.com/images/I/51XkcVUyCKL._AC_UY1000_.jpg',
    description:
      'Elegant and glamorous high heels for women, perfect for special occasions.',
    brand: 'ABC Brand',
    category: 'Shoes',
    price: 109.99,
    countInStock: 11,
    rating: 4.1,
    numReviews: 7,
  },
  {
    name: "Men's Boots",
    image:
      'https://www.realmenrealstyle.com/wp-content/uploads/2022/10/winter-boots-3.jpg',
    description:
      'Durable and rugged boots for men, ideal for outdoor adventures.',
    brand: 'XYZ Brand',
    category: 'Shoes',
    price: 129.99,
    countInStock: 16,
    rating: 4.5,
    numReviews: 11,
  },
  {
    name: "Women's Flats",
    image:
      'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/4378535/2018/5/9/25c24132-1fae-4e4b-80a3-558c908c4a951525869724388-20Dresses-Women-Beige-Solid-One-Toe-Flats-2751525869724149-1.jpg',
    description:
      'Comfortable and chic flats for women, suitable for everyday wear.',
    brand: 'ABC Brand',
    category: 'Shoes',
    price: 59.99,
    countInStock: 9,
    rating: 4.5,
    numReviews: 14,
  },
  {
    name: 'The Great Gatsby',
    image:
      'https://www.infobooks.org/wp-content/uploads/2022/08/The-Great-Gatsby-by-F-Scott-Fitzgerald.webp',
    description:
      'A classic novel by F. Scott Fitzgerald that explores themes of wealth, love, and the American Dream.',
    author: 'F. Scott Fitzgerald',
    category: 'Books',
    price: 12.99,
    countInStock: 20,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: 'To Kill a Mockingbird',
    image:
      'https://images.fathomevents.com/image/upload/w_360,dpr_1.5,f_auto,q_auto/fl_attachment/v1637693101/Events/2022/1606/To_Kill_a_Mockingbird_1000x1480_FEWebsite_Thumbnail.jpg.jpg',
    description:
      'A powerful novel by Harper Lee that addresses racial injustice and moral courage in the American South.',
    author: 'Harper Lee',
    category: 'Books',
    price: 9.99,
    countInStock: 15,
    rating: 3.5,
    numReviews: 8,
  },
  {
    name: '1984',
    image:
      'https://m.media-amazon.com/images/I/71NvkZxn-fL._AC_UF1000,1000_QL80_.jpg',
    description:
      'A dystopian novel by George Orwell that depicts a totalitarian society and explores themes of government control and surveillance.',
    author: 'George Orwell',
    category: 'Books',
    price: 10.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Pride and Prejudice',
    image:
      'https://m.media-amazon.com/images/I/819HSIKiWdS._AC_UF1000,1000_QL80_.jpg',
    description:
      'A beloved novel by Jane Austen that follows the lives of the Bennett sisters and explores themes of love, class, and societal expectations.',
    author: 'Jane Austen',
    category: 'Books',
    price: 8.99,
    countInStock: 18,
    rating: 4.3,
    numReviews: 6,
  },
  {
    name: 'The Lord of the Rings',
    image:
      'https://ashokbookcentre.com/wp-content/uploads/2021/12/81YyraOaX1L.jpg',
    description:
      'An epic fantasy trilogy by J.R.R. Tolkien that takes readers on a journey through Middle-earth and explores themes of heroism, friendship, and the battle between good and evil.',
    author: 'J.R.R. Tolkien',
    category: 'Books',
    price: 29.99,
    countInStock: 25,
    rating: 4.5,
    numReviews: 15,
  },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    image:
      'https://m.media-amazon.com/images/I/81f8E7vdheL._AC_UF1000,1000_QL80_.jpg',
    description:
      'The first book in the popular Harry Potter series by J.K. Rowling, which follows the magical adventures of a young wizard.',
    author: 'J.K. Rowling',
    category: 'Books',
    price: 14.59,
    countInStock: 13,
    rating: 4.0,
    numReviews: 9,
  },
  {
    name: 'The Catcher in the Rye',
    image:
      'https://m.media-amazon.com/images/M/MV5BODQwODUxODQ0MF5BMl5BanBnXkFtZTcwNDEyNTgyNw@@._V1_.jpg',
    description:
      'A coming-of-age novel by J.D. Salinger that explores the disillusionment of youth and the search for authenticity.',
    author: 'J.D. Salinger',
    category: 'Books',
    price: 11.99,
    countInStock: 8,
    rating: 4.4,
    numReviews: 20,
  },
  {
    name: 'The Alchemist',
    image: 'https://icrrd.com/media/15-05-2021-084546the-alchemist.jpg',
    description:
      'A philosophical novel by Paulo Coelho that follows the journey of a young Andalusian shepherd boy in search of his personal legend.',
    author: 'Paulo Coelho',
    category: 'Books',
    price: 13.99,
    countInStock: 11,
    rating: 4.2,
    numReviews: 7,
  },
  {
    name: 'Moby-Dick',
    image: 'https://www.winkart.in/wp-content/uploads/2021/06/ZDVSFG.jpg',
    description:
      "An epic novel by Herman Melville that tells the story of Captain Ahab's obsessive pursuit of the white whale.",
    author: 'Herman Melville',
    category: 'Books',
    price: 16.99,
    countInStock: 16,
    rating: 4.5,
    numReviews: 11,
  },
  {
    name: 'The Hobbit',
    image:
      'https://recommerce.com.ua/static/mousebook.reshop.com.ua/catalog/17592/118576273960616de902c46_original.jpg',
    description:
      'A fantasy novel by J.R.R. Tolkien that serves as a prequel to The Lord of the Rings and follows the adventures of Bilbo Baggins.',
    author: 'J.R.R. Tolkien',
    category: 'Books',
    price: 9.99,
    countInStock: 9,
    rating: 4.5,
    numReviews: 14,
  },
  {
    name: 'Modern Sofa',
    image:
      'https://5.imimg.com/data5/SELLER/Default/2021/10/FC/WR/KH/127126251/designer-u-shape-fabric-luxury-furniture-sofa-set.jpg',
    description:
      'A stylish and comfortable sofa with a modern design, perfect for any living room.',
    brand: 'XYZ Brand',
    category: 'Furniture',
    price: 799.99,
    countInStock: 5,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: 'Wooden Dining Table',
    image:
      'https://m.media-amazon.com/images/I/61sm5G3FMCL._AC_UF894,1000_QL80_DpWeblab_.jpg',
    description:
      'A beautiful wooden dining table that can comfortably seat six people.',
    brand: 'ABC Brand',
    category: 'Furniture',
    price: 499.99,
    countInStock: 8,
    rating: 4.2,
    numReviews: 6,
  },
  {
    name: 'Leather Recliner Chair',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPMBEW5KjWKRmtWT_1TVY8ij6gvd6DjQWOg&usqp=CAU',
    description:
      'A luxurious leather recliner chair that provides ultimate comfort and relaxation.',
    brand: 'XYZ Brand',
    category: 'Furniture',
    price: 899.99,
    countInStock: 3,
    rating: 3.5,
    numReviews: 15,
  },
  {
    name: 'Queen Size Bed',
    image:
      'https://images.woodenstreet.de/image/data/bed-with-storage-mdf/bartha-bed-with-box-storage/flowery-wenge/updated/1.jpg',
    description:
      'A spacious queen-size bed frame with a sturdy construction and elegant design.',
    brand: 'ABC Brand',
    category: 'Furniture',
    price: 699.99,
    countInStock: 6,
    rating: 4.4,
    numReviews: 8,
  },
  {
    name: 'Glass Coffee Table',
    image:
      'https://images-cdn.ubuy.co.in/633ab1852595eb4b42471eb8-clear-rectangle-modern-glass-coffee.jpg',
    description:
      'A sleek and modern glass coffee table that adds a touch of elegance to any living room.',
    brand: 'XYZ Brand',
    category: 'Furniture',
    price: 299.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Wardrobe Closet',
    image:
      'https://d35mbwdnoe7hvk.cloudfront.net/wp-content/uploads/2022/06/wardrobe-custom-dark-wood-grain-cool-avenue-california-closets-620x465.jpg',
    description:
      'A spacious wardrobe closet with ample storage space for clothes, shoes, and accessories.',
    brand: 'ABC Brand',
    category: 'Furniture',
    price: 599.99,
    countInStock: 4,
    rating: 4.0,
    numReviews: 9,
  },
  {
    name: 'Office Desk',
    image:
      'https://www.nepal.ubuy.com/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjNhMzIxOGQyODVjZjE1ZDdiMTIxYzk0LXRlY2huaS1tb2JpbGktbW9kZXJuLW9mZmljZS1kZXNrLXdpdGguanBn.jpg',
    description:
      'A functional and stylish office desk that provides a comfortable workspace.',
    brand: 'XYZ Brand',
    category: 'Furniture',
    price: 399.99,
    countInStock: 7,
    rating: 4.3,
    numReviews: 11,
  },
  {
    name: 'Bookshelf',
    image:
      'https://images.woodenstreet.de/image/data/bookshelves-mdf/astra-bookshelf-with-storage/revised/revised/exotic-teak/updated%20new/1.jpg',
    description:
      'A sturdy bookshelf with multiple shelves for storing books, decor items, and more.',
    brand: 'ABC Brand',
    category: 'Furniture',
    price: 249.99,
    countInStock: 9,
    rating: 4.5,
    numReviews: 14,
  },
  {
    name: 'TV Stand',
    image:
      'https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjNiZTAxNWRhZGFmZmIxZDNkMGU5MTk1LXdhbXBhdC1taWQtY2VudHVyeS1tb2Rlcm4tdHYtc3RhbmQtZm9yLmpwZw.jpg',
    description:
      'A stylish TV stand that accommodates large flat-screen TVs and provides storage space for media devices.',
    brand: 'XYZ Brand',
    category: 'Furniture',
    price: 349.99,
    countInStock: 6,
    rating: 4.1,
    numReviews: 7,
  },
  {
    name: 'Bar Stool',
    image:
      'https://m.media-amazon.com/images/I/71H2U9V8yrL._AC_UF894,1000_QL80_DpWeblab_.jpg',
    description:
      'A comfortable and adjustable bar stool with a modern design, suitable for kitchen counters or home bars.',
    brand: 'ABC Brand',
    category: 'Furniture',
    price: 149.99,
    countInStock: 12,
    rating: 4.5,
    numReviews: 11,
  },
  {
    name: 'Diamond Pendant Necklace',
    image:
      'https://cdn.shopify.com/s/files/1/0720/7757/products/13779_fancy-square-diamond-pendant-for-women-online_1024x1024.jpeg?v=1598419658',
    description:
      'A stunning diamond pendant necklace crafted in 14K white gold.',
    brand: 'XYZ Brand',
    category: 'Jewelry',
    price: 1999.99,
    countInStock: 5,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: 'Gold Hoop Earrings',
    image:
      'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw16f5bb16/images/hi-res/510166HLAABB00_1.jpg',
    description:
      'Classic and elegant gold hoop earrings suitable for any occasion.',
    brand: 'ABC Brand',
    category: 'Jewelry',
    price: 499.99,
    countInStock: 8,
    rating: 4.2,
    numReviews: 6,
  },
  {
    name: 'Silver Bracelet',
    image:
      'https://media.kohlsimg.com/is/image/kohls/4960879?wid=600&hei=600&op_sharpen=1',
    description:
      'A stylish sterling silver bracelet with intricate design patterns.',
    brand: 'XYZ Brand',
    category: 'Jewelry',
    price: 399.99,
    countInStock: 3,
    rating: 3.5,
    numReviews: 15,
  },
  {
    name: 'Pearl Stud Earrings',
    image:
      'https://cdn.shopify.com/s/files/1/0108/1530/7839/products/productreedit_0003_ColorBalance1.jpg?v=1632298868',
    description: 'Classic pearl stud earrings with lustrous freshwater pearls.',
    brand: 'ABC Brand',
    category: 'Jewelry',
    price: 199.99,
    countInStock: 6,
    rating: 4.4,
    numReviews: 8,
  },
  {
    name: 'Emerald Ring',
    image:
      'https://cdn.shopify.com/s/files/1/0259/0713/products/jewelove-designer-emerald-gold-ring-with-rose-cut-diamonds-for-women-jl-au-22rg0144-rma-women-s-band-only-36722971181297.jpg?v=1680650831',
    description:
      'A mesmerizing emerald ring set in 18K yellow gold, perfect for special occasions.',
    brand: 'XYZ Brand',
    category: 'Jewelry',
    price: 1499.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Diamond Tennis Bracelet',
    image:
      'https://www.sarvadajewels.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_8_28.jpg',
    description:
      'A luxurious diamond tennis bracelet featuring brilliant-cut diamonds in a prong setting.',
    brand: 'ABC Brand',
    category: 'Jewelry',
    price: 2999.99,
    countInStock: 4,
    rating: 4.0,
    numReviews: 9,
  },
  {
    name: 'Sapphire Necklace',
    image:
      'https://www.shraddhashreegems.com/wp-content/uploads/2022/07/blue-sapphire-necklace-4.jpg',
    description:
      'An exquisite sapphire necklace with a halo of diamonds, set in 18K white gold.',
    brand: 'XYZ Brand',
    category: 'Jewelry',
    price: 2499.99,
    countInStock: 7,
    rating: 4.3,
    numReviews: 11,
  },
  {
    name: 'Rose Gold Bangle',
    image:
      'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw14f362aa/images/hi-res/503822VWW1E00_1.jpg',
    description: 'A trendy rose gold bangle bracelet with a minimalist design.',
    brand: 'ABC Brand',
    category: 'Jewelry',
    price: 299.99,
    countInStock: 9,
    rating: 4.5,
    numReviews: 14,
  },
  {
    name: 'Diamond Engagement Ring',
    image:
      'https://i0.wp.com/gandaramjewellers.com/wp-content/uploads/SJ01619RG-1-min.jpg',
    description:
      'A breathtaking diamond engagement ring featuring a sparkling round-cut diamond in a platinum setting.',
    brand: 'XYZ Brand',
    category: 'Jewelry',
    price: 4999.99,
    countInStock: 6,
    rating: 4.1,
    numReviews: 7,
  },
  {
    name: 'Ruby Drop Earrings',
    image:
      'https://cdn11.bigcommerce.com/s-eddqlsb40g/images/stencil/500x659/products/1157/14912/ruby_birthstone_silver_earrings_1__58640.1634831899.jpg?c=1',
    description:
      'Elegant ruby drop earrings with dazzling diamonds, set in 18K yellow gold.',
    brand: 'ABC Brand',
    category: 'Jewelry',
    price: 899.99,
    countInStock: 12,
    rating: 4.5,
    numReviews: 11,
  },
  {
    name: 'Acoustic Guitar',
    image:
      'https://m.economictimes.com/thumb/msid-97701349,width-1500,height-1500,resizemode-4,imgsize-40290/5-best-acoustic-guitars-in-india-under-rs-3000.jpg',
    description:
      'A classic acoustic guitar with a rich and warm sound, perfect for beginners and professionals alike.',
    brand: 'XYZ Brand',
    category: 'Musical Instruments',
    price: 299.99,
    countInStock: 5,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: 'Electric Keyboard',
    image:
      'https://images-cdn.ubuy.co.in/6353d25b3f69ea1ec4279652-mustar-61-key-piano-keyboard-learning.jpg',
    description:
      'A versatile electric keyboard with a wide range of sounds and features, suitable for performers and music enthusiasts.',
    brand: 'ABC Brand',
    category: 'Musical Instruments',
    price: 499.99,
    countInStock: 8,
    rating: 4.2,
    numReviews: 6,
  },
  {
    name: 'Violin',
    image: 'https://kadence.in/wp-content/uploads/2021/05/violin.jpg',
    description:
      'A beautifully crafted violin with a warm and expressive tone, perfect for classical musicians and violin enthusiasts.',
    brand: 'XYZ Brand',
    category: 'Musical Instruments',
    price: 799.99,
    countInStock: 3,
    rating: 3.5,
    numReviews: 15,
  },
  {
    name: 'Digital Piano',
    image:
      'https://m.media-amazon.com/images/I/61an-BLc5DL._AC_UF1000,1000_QL80_DpWeblab_.jpg',
    description:
      'A high-quality digital piano that offers realistic piano sound and touch, suitable for practice and performance.',
    brand: 'ABC Brand',
    category: 'Musical Instruments',
    price: 999.99,
    countInStock: 6,
    rating: 4.4,
    numReviews: 8,
  },
  {
    name: 'Drum Set',
    image:
      'https://cdn.shopify.com/s/files/1/0657/6821/products/HAV-1045WR-1.jpg?v=1635270049',
    description:
      'A complete drum set with drums, cymbals, and hardware, perfect for drummers of all skill levels.',
    brand: 'XYZ Brand',
    category: 'Musical Instruments',
    price: 699.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Saxophone',
    image: 'https://m.media-amazon.com/images/I/51W+Y5Q9GGS.jpg',
    description:
      'A professional-grade saxophone with a rich and expressive sound, ideal for jazz and classical musicians.',
    brand: 'ABC Brand',
    category: 'Musical Instruments',
    price: 1499.99,
    countInStock: 4,
    rating: 4.0,
    numReviews: 9,
  },
  {
    name: 'Ukulele',
    image: 'https://m.media-amazon.com/images/I/71N3o2SHmIL.jpg',
    description:
      'A fun and portable ukulele with a bright and cheerful sound, perfect for beginners and casual players.',
    brand: 'XYZ Brand',
    category: 'Musical Instruments',
    price: 99.99,
    countInStock: 7,
    rating: 4.3,
    numReviews: 11,
  },
  {
    name: 'Electric Bass Guitar',
    image:
      'https://kadence.in/wp-content/uploads/2018/05/81MrT-CDi4L._SL1500_-min.jpg',
    description:
      'A powerful and versatile electric bass guitar, perfect for bass players in various music genres.',
    brand: 'ABC Brand',
    category: 'Musical Instruments',
    price: 599.99,
    countInStock: 9,
    rating: 4.5,
    numReviews: 14,
  },
  {
    name: 'Trumpet',
    image:
      'https://www.guitarlelo.com/product/wp-content/uploads/2021/09/HA2.jpg',
    description:
      'A well-crafted trumpet with excellent intonation and projection, suitable for beginners and advanced players.',
    brand: 'XYZ Brand',
    category: 'Musical Instruments',
    price: 399.99,
    countInStock: 6,
    rating: 4.1,
    numReviews: 7,
  },
  {
    name: 'Grand Piano',
    image:
      'https://collectionapi.metmuseum.org/api/collection/v1/iiif/503448/1023133/main-image',
    description:
      'A magnificent grand piano with a rich and powerful sound, perfect for concert halls and professional pianists.',
    brand: 'ABC Brand',
    category: 'Musical Instruments',
    price: 9999.99,
    countInStock: 12,
    rating: 4.5,
    numReviews: 11,
  },
];

export default products;
