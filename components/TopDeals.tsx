import React from 'react'
import TopDealsCard from './TopDealsCard';


export default function TopDeals() {
  const deals = [
   {
    "id": 1,
    "title": "Strobe Cream",
    "price": "From ₹700",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "/images/cream.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Fashion",
    "price": "From ₹999",
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "/images/fashion.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Laptop",
    "price": "From ₹25000",
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "/images/laptop.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Airpod",
    "price": "From ₹3999",
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "/images/airpods.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
   {
    "id": 5,
    "title": "Shoes",
    "price": "From ₹599",
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "/images/shoes.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 6,
    "title": "Bags",
    "price": "From ₹200",
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "/images/bags.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 7,
    "title": "Accessories",
    "price": "From ₹505",
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "/images/access.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "Mobile Phone ",
    "price": "From ₹20000",
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "/images/mobile.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 9,
    "title": "Furniture ",
    "price": "From ₹15000",
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "Home Appliances",
    "image": "/images/furniture.jpg",
    "rating": {
      "rate": 4.2,
      "count": 765
    }
  },
  {
    "id": 10,
    "title": "Groceries ",
    "price": "From ₹100",
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "groceries",
    "image": "/images/grocery.jpg",
    "rating": {
      "rate": 4.8,
      "count": 5500
    }
  }
]
  
  return (
    <div>
        <div className='container-fluid'>
         <h3>Top Deals</h3>
         <div className='row'>
            <div className='col p-3 mx-2 mb-4 text-centerd d-flex flex-wrap gap-4 '>
                {
                    deals.map((p)=>{
                        return(
                        <TopDealsCard key={p.id} deal={p} ></TopDealsCard>
                        )
                    })
                }
            </div>
         </div>
        </div>
    </div>
  )
   
}

