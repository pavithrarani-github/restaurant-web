import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor() { }
   // fooddetails 
  
   foodDetails = [
    {
      id:1,
      foodName:"Mutton Milagu Soup",
      foodDetails:"A spicy pepper-based soup loaded with shredded mutton",
      foodPrice:129,
      foodImg:"../../assets/peppersoup.jpg"
    },
    {
      id:2,
      foodName:"Paneer Manchurian",
      foodDetails:"Deep-fried paneer sauteed with onions and capsicums and tossed with soy and Chili sauce",
      foodPrice:229,
      foodImg:"../../assets/Paneer-Manchurian.jpg"
    },
    {
      id:3,
      foodName:"Moru Moru Stick Chicken",
      foodDetails:"Double breaded chicken breasts cooked and served on skewers - Served With Garlic-Mayo.",
      foodPrice:309,
      foodImg:"../../assets/moru moru stick chicken.jpg"
    },
    {
      id:4,
      foodName:"Aglio Olio E Pepperoncino",
      foodDetails:"Simple classic sauce of olive oil, garlic and chilli flakes",
      foodPrice:140,
      foodImg:"../../assets/aglio.jpg"
    },
    {
      id:5,
      foodName:"Nachos with Cheese Sauce ",
      foodDetails:"This nacho cheese sauce recipe makes a simple sauce that's delicious spread over tortilla chips.",
      foodPrice:350,
      foodImg:"../../assets/nachos.jpg"
    },
    {
      id:6,
      foodName:"Tiramisu Italiano",
      foodDetails:"Italian dessert with layers of mascarpone cheese, sponge cake soaked in rum and coffee",
      foodPrice:380,
      foodImg:"../../assets/tiramisu.jpg"
    }
  ]

}
