import CarouselSize from "../../components/CarouselSize/CarouselSize";
import Category from "../../components/Category/Category";
import Companies from "../../components/Companies/Companies";
import Grid from "../../components/Grid/Grid";
import Hero from "../../components/Hero/Hero";

export default function Home() {
  return (
    <>
    <Hero/>
    <Companies/>
    <Category/>
    <CarouselSize />
    <Grid/>
    </>
  );
}
