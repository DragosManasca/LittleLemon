import GreekSaladImg from "../../assets/images/greek salad.jpg";
import BruschetteImg from "../../assets/images/bruschetta.jpg";
import LemonDessertImg from "../../assets/images/lemon dessert.jpg";
import Usr1Img from "../../assets/images/1.png";
import Usr2Img from "../../assets/images/2.png";
import Usr3Img from "../../assets/images/4.png";
import Usr4Img from "../../assets/images/5.png";

export const getWeeksSpecials = () => {
  const specials = [
    {
      image: GreekSaladImg,
      name: "Greek Salad",
      price: "$12.99",
      description: `The famous Greek salad of crispy lettuce, peppers, olives and our
    Chicago style feta cheese, garnished with crunchy garlic and
    rosemary croutons.`,
    },
    {
      image: BruschetteImg,
      name: "Bruschette",
      price: "$5.99",
      description: `Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
      image: LemonDessertImg,
      name: "Lemon Dessert",
      price: "$5.00",
      description: `This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.`,
    },
  ];

  return specials;
};

export const getReniews = () => {
  const reviews = [
    {
      rating: 5,
      reviewerImg: Usr1Img,
      reviewerName: "Zayden Burnett",
      review: "Excellent",
    },
    {
      rating: 5,
      reviewerImg: Usr2Img,
      reviewerName: "Daniela González",
      review: "Wonderfull Place",
    },
    {
      rating: 5,
      reviewerImg: Usr3Img,
      reviewerName: "Kendra Smith",
      review: "Delicious Food",
    },
    {
      rating: 5,
      reviewerImg: Usr4Img,
      reviewerName: "Lee Levine",
      review: "Best Mediterranean Restaurant",
    },
  ];

  return reviews;
};
