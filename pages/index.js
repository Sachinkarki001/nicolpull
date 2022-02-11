import styles from "../styles/Home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TopcompEng from "./top_comp_english";

export default function Home() {
  return (
    <div>
      <TopcompEng />
    </div>
  );
}
