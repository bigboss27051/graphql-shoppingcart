const Product =  require('../src/models/prodcut')
(() => {
  const rawProduct = [{
    name: 'Real whey 3lb',
    detail: 'Whey protein molecules are very light, fast absorption. It takes time to activate in less than 2 minutes and the body will absorb no more than 5 minutes. This type of whey protein is obtained by taking enzyme of whey protein isolate and break down the protein bonds apart, and to improve the absorption. Also, whey peptides can act as fuel to working muscles and create greater protein synthesis in the human body.',
    imageUrl: 'https://bucket.fitwhey.com/ProductType/3bcf4108f8ed82e464dd7544dd7972d1.png',
    price: 1200,
    quantity: 100,
  },
  {
    name: 'ISO whey 3lb',
    detail: 'https://bucket.fitwhey.com/ProductType/f77a829f602c2ee3a89a72217beb2fb7.png',
    imageUrl: 'https://bucket.fitwhey.com/ProductType/3bcf4108f8ed82e464dd7544dd7972d1.png',
    price: 1500,
    quantity: 100,
  },
  {
    name: 'BAAB!! whey 3lb',
    detail: 'https://bucket.fitwhey.com/ProductType/3c985cc708d71a5b4c7157e0dc9b8d00.png',
    imageUrl: 'https://bucket.fitwhey.com/ProductType/3bcf4108f8ed82e464dd7544dd7972d1.png',
    price: 1300,
    quantity: 100,
  },
  {
    name: 'GOLD whey 5lb',
    detail: 'Whey protein molecules are very light, fast absorption. It takes time to activate in less than 2 minutes and the body will absorb no more than 5 minutes. This type of whey protein is obtained by taking enzyme of whey protein isolate and break down the protein bonds apart, and to improve the absorption. Also, whey peptides can act as fuel to working muscles and create greater protein synthesis in the human body.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0211/3034/6596/products/ON-5lb-01_700x700.png?v=1569311208',
    price: 1900,
    quantity: 100,
  },
  {
    name: 'Pink whey 3lb',
    detail: 'Whey protein molecules are very light, fast absorption. It takes time to activate in less than 2 minutes and the body will absorb no more than 5 minutes. This type of whey protein is obtained by taking enzyme of whey protein isolate and break down the protein bonds apart, and to improve the absorption. Also, whey peptides can act as fuel to working muscles and create greater protein synthesis in the human body.',
    imageUrl: 'https://bucket.fitwhey.com/ProductType/49d7fde573b40c8fbe8f879eac7c154f.png',
    price: 1200,
    quantity: 100,
  },
  {
    name: 'ACTIVEWEAR',
    detail: 'FITWHEY X HYBRID SPORT',
    imageUrl: 'https://bucket.fitwhey.com/ProductType/2a64cc509dd9bfb9b68f0eea78f7a60e.png',
    price: 700,
    quantity: 100,
  },
  {
    name: 'NIKER Dri-FIT Boys Training T-Shirt (Free Size)',
    detail: 'Made of 100% polyester fabric, Dri-FIT Technology helps you stay dry, comfortable and focused',
    imageUrl: 'https://d1a2ggqmhsoom.cloudfront.net/dc3AyFeH72zjPQJtsa9m4uqsCdk=/fit-in/762x1100/filters:quality(90):fill(ffffff)/http://static-catalog.supersports.co.th/p/nike-6518-01535-2.jpg',
    price: 500,
    quantity: 100,
  },
  {
    name: 'ACTIVEWEAR LIMITED EDITION',
    detail: 'NEW LIMITED EDITION ACTIVEWEAR',
    imageUrl: 'https://bucket.fitwhey.com/ProductType/f1aa71ce0a644161f2838de4af5b7853.png',
    price: 900,
    quantity: 100,
  },
  {
    name: 'ACTIVEWEAR LIMITED EDITION',
    detail: 'NEW LIMITED EDITION ACTIVEWEAR',
    imageUrl: 'https://bucket.fitwhey.com/ProductType/f1aa71ce0a644161f2838de4af5b7853.png',
    price: 900,
    quantity: 100,
  },
  {
    name: 'FITWHEN SHAKER NEW',
    detail: 'FITWHEY SHAKER NEW DESIGN Size 500ml',
    imageUrl: 'https://bucket.fitwhey.com/ProductType/53457bf4de4da29cc8d10b15dca42ccb.png',
    price: 320,
    quantity: 100,
  },]
  await Product.insertMany(rawProduct)
})()