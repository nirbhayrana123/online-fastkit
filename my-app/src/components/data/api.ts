const products = [
  {
    id: "1",
    name: "Dettol Original Soap",
    keyword: "sabun Bar",
    weight: "125 G",
    oldPrice: 60,
    newPrice: 52,
    discount: "13% OFF",
    main_img: "/images/products/dettol1.webp",
    one_img: "/images/products/dettol2.webp",
    two_img: "/images/products/dettol3.webp",
    three_img: "/images/products/dettol4.webp",
    four_img: "/images/products/dettol5.webp"
  },

  {
    id: "2",
    name: "Dove Cream Beauty Bathing Bar",
    keyword: "sabun Bar",
    weight: "125 G",
    oldPrice: 85,
    newPrice: 72,
    discount: "15% OFF",
    main_img: "/images/products/dove1.webp",
    one_img: "/images/products/dove2.webp",
    two_img: "/images/products/dove3.webp",
    three_img: "/images/products/dove4.webp"
  },

  {
    id: "3",
    name: "Pears Pure & Gentle Soap",
    keyword: "sabun Bar",
    weight: "125 G",
    oldPrice: 80,
    newPrice: 68,
    discount: "15% OFF",
    main_img: "/images/products/pears1.webp",
    one_img: "/images/products/pears2.webp"
  },

  {
    id: "4",
    name: "Lux Soft Rose Soap",
    keyword: "sabun Bar Soap",
    weight: "100 G",
    oldPrice: 45,
    newPrice: 38,
    discount: "15% OFF",
    main_img: "/images/products/lux.jpg",
    one_img: "/images/products/lux1.webp",
    two_img: "/images/products/lux2.webp",
    three_img: "/images/products/lux3.webp"
  },

  {
    id: "5",
    name: "Santoor Sandal & Turmeric Soap",
    keyword: "Soap sabun",
    weight: "125 G",
    oldPrice: 50,
    newPrice: 42,
    discount: "16% OFF",
    main_img: "/images/products/santoor1.avif",
    one_img: "/images/products/santoor2.avif",
    two_img: "/images/products/santoor3.avif",
    three_img: "/images/products/santoor4.avif",
    four_img: "/images/products/santoor5.avif"
  },

  {
    id: "6",
    name: "Lifebuoy Total 10 Soap",
    keyword: "sabun Bar",
    weight: "125 G",
    oldPrice: 42,
    newPrice: 36,
    discount: "14% OFF",
    main_img: "/images/products/lifebuoy1.avif",
    one_img: "/images/products/lifebuoy2.avif",
    two_img: "/images/products/lifebuoy3.avif"
  },

  {
    id: "7",
    name: "Fiama Gel Bar Peach & Avocado",
    keyword: "sabun Bar",
    weight: "125 G",
    oldPrice: 90,
    newPrice: 75,
    discount: "16% OFF",
    main_img: "/images/products/fiama-gel-bar1.avif",
    one_img: "/images/products/fiama-gel-bar2.avif",
    two_img: "/images/products/fiama-gel-bar3.avif"
  },

  {
    id: "8",
    name: "Cinthol Original Soap",
    keyword: "sabun Bar",
    weight: "100 G",
    oldPrice: 48,
    newPrice: 40,
    discount: "16% OFF",
    main_img: "/images/products/cinthol-original-soap1.webp",
    one_img: "/images/products/cinthol-original-soap2.jfif"
  },

  {
    id: "9",
    name: "Medimix Ayurvedic Soap",
    keyword: "sabun Bar",
    weight: "125 G",
    oldPrice: 65,
    newPrice: 55,
    discount: "15% OFF",
    main_img: "/images/products/medimix-ayurvedic2.webp",
    one_img: "/images/products/medimix-ayurvedic1.webp",
    two_img: "/images/products/medimix-ayurvedic3.webp",
    three_img: "/images/products/medimix-ayurvedic4.webp"
  },

  {
    id: "10",
    name: "Godrej No.1 Lime & Aloe Vera Soap",
    keyword: "sabun Bar",
    weight: "100 G",
    oldPrice: 35,
    newPrice: 30,
    discount: "14% OFF",
    main_img: "/images/products/godrej-no1-lime2.avif",
    one_img: "/images/products/godrej-no1-lime1.webp",
    two_img: "/images/products/godrej-no1-lime3.avif"
  },

  {
    id: "11",
    name: "Surf Excel Easy Wash Detergent Powder",
    keyword: "Surf Powder",
    weight: "1 kG",
    oldPrice: 150,
    newPrice: 132,
    discount: "12% OFF",
    main_img: "/images/products/surf-exce1.webp",
    one_img: "/images/products/surf-exce2.webp",
    two_img: "/images/products/surf-exce3.webp"
  },

  {
    id: "12",
    name: "Ariel Complete Front & Top Load Powder",
    keyword: "Surf Powder",
    weight: "1 kG",
    oldPrice: 240,
    newPrice: 204,
    discount: "15% OFF",
    main_img: "/images/products/ariel1.avif",
    one_img: "/images/products/ariel2.avif",
    two_img: "/images/products/ariel3.avif"
  },

  {
    id: "13",
    name: "Tide Plus Extra Power Detergent",
    keyword: "Surf Powder",
    weight: "1 kG",
    oldPrice: 130,
    newPrice: 110,
    discount: "15% OFF",
    main_img: "/images/products/tide-plus1.jpg",
    one_img: "/images/products/tide-plus2.webp",
    two_img: "/images/products/tide-plus3.webp"
  },

  {
    id: "14",
    name: "Rin Advanced Detergent Powder",
    keyword: "Surf Powder",
    weight: "1 kG",
    oldPrice: 105,
    newPrice: 90,
    discount: "14% OFF",
    main_img: "/images/products/rin-advanced1.avif",
    one_img: "/images/products/rin-advanced2.avif",
    two_img: "/images/products/rin-advanced3.avif"
  },

  {
    id: "15",
    name: "Vim Dishwash Bar",
    keyword: "Bar",
    weight: "200 G",
    oldPrice: 25,
    newPrice: 20,
    discount: "20% OFF",
    main_img: "/images/products/vim1.avif",
    one_img: "/images/products/vim2.avif"
  },

  {
    id: "16",
    name: "Vim Dishwash Liquid Gel Lemon",
    keyword: "Bar",
    weight: "500 ml",
    oldPrice: 125,
    newPrice: 105,
    discount: "16% OFF",
    main_img: "/images/products/vim-big1.avif",
    one_img: "/images/products/vim-big1.webp",
    two_img: "/images/products/vim-big2.webp"
  },

  {
    id: "17",
    name: "Dettol Antiseptic Liquid",
    keyword: "Dettol",
    weight: "500 ml",
    oldPrice: 215,
    newPrice: 185,
    discount: "13% OFF",
    main_img: "/images/products/dettol1.jfif",
    one_img: "/images/products/dettol2.avif"
  },

  {
    id: "18",
    name: "Colgate Strong Teeth Toothpaste",
    keyword: "Colgate Strong Teeth Toothpaste Lifebuoy Total 10 Soap ",
    weight: "500 G",
    oldPrice: 270,
    newPrice: 225,
    discount: "16% OFF",
    main_img: "/images/products/colgate1.jfif",
    one_img: "/images/products/colgate2.webp"
  },


  {
    id: "19",
    name: "Clinic Plus Strong & Long Shampoo",
    keyword: "Clinic Plus Shampoo",
    weight: "340 ml",
    oldPrice: 220,
    newPrice: 185,
    discount: "15% OFF",
    main_img: "/images/products/clinic-plus1.avif",
    one_img: "/images/products/clinic-plus2.avif"
  },

  {
    id: "20",
    name: "Aashirvaad Shuddha Chakki Atta",
    keyword: "Chakki Atta",
    weight: "5 kG",
    oldPrice: 280,
    newPrice: 246,
    discount: "12% OFF",
    main_img: "/images/products/aashirvaad-atta1.jpg",
    one_img: "/images/products/aashirvaad-atta2.jpg"
  },


  {
    id: "21",
    name: "Madhur Pure & Hygiene Sugar",
    keyword: "chini ",
    weight: "1 kG",
    oldPrice: 60,
    newPrice: 47,
    discount: "13% OFF",
    main_img: "/images/products/Sugar1.jpg",
    one_img: "/images/products/Sugar2.jfif",
    two_img: "/images/products/Sugar3.webp",
    three_img: "/images/products/Sugar4.jfif"
  },

  {
    id: "22",
    name: "Tata Salt Vacuum Evaporated",
    keyword: "Tata Salt",
    weight: "1 kG",
    oldPrice: 30,
    newPrice: 27,
    discount: "10% OFF",
    main_img: "/images/products/tata-salt1.webp",
    one_img: "/images/products/tata-salt2.webp"
  },


  {
    id: "23",
    name: "Fortune Poha (Thick)",
    keyword: "Fortune ",
    weight: "500 G",
    oldPrice: 55,
    newPrice: 45,
    discount: "18% OFF",
    main_img: "/images/products/fortune-1.avif",
    one_img: "/images/products/fortune-2.avif",
    two_img: "/images/products/fortune-oil-2.avif",
    three_img: "/images/products/fortune-oil-5.avif",
    four_img: "/images/products/fortune-oil-4.avif",
    five_img: "/images/products/fortune-oil-3.avif",
    six_img: "/images/products/fortune-oil-6.avif"
  },


  {
    id: "24",
    name: "Fortune Everyday Basmati Rice",
    keyword: "Fortune ",
    weight: "1 kG",
    oldPrice: 115,
    newPrice: 95,
    discount: "17% OFF",
    main_img: "/images/products/fortune-rice1.avif",
    one_img: "/images/products/fortune-rice2.jfif"
  },

  {
    id: "25",
    name: "Tata Sampann Toor Dal",
    keyword: "Tata Dal",
    weight: "1 kG",
    oldPrice: 190,
    newPrice: 161,
    discount: "15% OFF",
    main_img: "/images/products/tata-dal1.webp",
    one_img: "/images/products/tata-dal2.webp"
  },

  {
    id: "26",
    name: "Rajdhani Moong Dal Chilka",
    keyword: "Dal",
    weight: "1 kG",
    oldPrice: 211,
    newPrice: 168,
    discount: "20% OFF",
    main_img: "/images/products/moong-dal1.avif",
    one_img: "/images/products/moong-dal2.avif",
    two_img: "/images/products/moong-dal3.avif",
    three_img: "/images/products/moong-dal4.avif"
  },


  {
    id: "27",
    name: "MDH Kitchen King Masala",
    keyword: "MDH Kitchen King Masala",
    weight: "100 G",
    oldPrice: 82,
    newPrice: 72,
    discount: "12% OFF",
    main_img: "/images/products/mdh-kitchen1.webp",
    one_img: "/images/products/mdh-kitchen2.webp"
  },


  {
    id: "28",
    name: "Catch Coriander Powder (Dhaniya)",
    keyword: "Powder Dhaniya",
    weight: "200 G",
    oldPrice: 68,
    newPrice: 58,
    discount: "14% OFF",
    main_img: "/images/products/catch-coriander-powder1.webp",
    one_img: "/images/products/catch-coriander-powder2.webp"
  },

  {
    id: "29",
    name: "Jeera (Cumin Seeds) Loose Pack",
    keyword: "Jeera",
    weight: "250 G",
    oldPrice: 120,
    newPrice: 98,
    discount: "18% OFF",
    main_img: "/images/products/jeera1.jfif",
    one_img: "/images/products/jeera2.webp"
  },

  {
    id: "30",
    name: "Catch Garam Masala Powder",
    keyword: "garam,masala",
    weight: "100 G",
    oldPrice: 95,
    newPrice: 87,
    discount: "8% OFF",
    main_img: "/images/products/catch-garam-masala1.jpg",
    one_img: "/images/products/catch-garam-masala2.png"
  },

  {
    id: "31",
    name: "Tata Tea Gold Premium Tea",
    keyword: "Tata ,leaves Tea",
    weight: "500 G",
    oldPrice: 330,
    newPrice: 306,
    discount: "7% OFF",
    main_img: "/images/products/taaza1.avif",
    one_img: "/images/products/taaza2.avif",
    two_img: "/images/products/taaza3.avif",
    three_img: "/images/products/taaza4.avif",
    four_img: "/images/products/taaza5.avif",
    five_img: "/images/products/taaza6.avif"
  },


  {
    id: "32",
    name: "Happilo Premium Raisins (Kishmish)",
    keyword: "Kishmish",
    weight: "250 G",
    oldPrice: 250,
    newPrice: 200,
    discount: "20% OFF",
    main_img: "/images/products/happilo-kishmish1.webp",
    one_img: "/images/products/happilo-kishmish2.webp",
    two_img: "/images/products/happilo-kishmish3.webp",
    three_img: "/images/products/happilo-kishmish4.webp"
  },


 

];

export default products;