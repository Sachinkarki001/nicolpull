import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
function TopcompEng() {
  return (
    <div className="mainbody">
      <div className="top">
        <div className="carousel">
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            useKeyboardArrows={true}
            dynamicHeight={false}
            autoPlay={true}
            interval={4000}
            infiniteLoop
          >
            <Image
              src="/img1.jpg"
              height={500}
              width={500}
              layout="responsive"
            ></Image>
            <Image
              src="/img1.jpg"
              height={500}
              width={500}
              layout="responsive"
            ></Image>
            <Image
              src="/img1.jpg"
              height={500}
              width={500}
              layout="responsive"
            ></Image>
          </Carousel>
        </div>
        <div className="descriptionbox">
          <h2>Brief Introduction of Bhimdhunga Ward</h2>
          <p>
            <Link href="/desc_english">
              <span>view more</span>
            </Link>
          </p>
          <Link href="/desc_english">
            <span>view more</span>
          </Link>

          <iframe
            width="100%"
            height="40%"
            src="https://www.youtube.com/embed/faEq2ZinJ4A"
          ></iframe>
        </div>
      </div>
      <div className="bottom">
        <div className="itemcard">
          <div className="itemimage">
            <Image
              src="/Shukra.jpg"
              width={305}
              height={270}
              layout="intrinsic"
            ></Image>
          </div>
          <h2>Shukra Bdr. Tamang</h2>
          <p>Ward Secretary</p>
          <span>9841590888</span>
        </div>
        <div className="itemcard">
          <div className="itemimage">
            <Image
              src="/Chanda.jpg"
              width={305}
              height={270}
              layout="intrinsic"
            ></Image>
          </div>
          <h2>Chanda Shrestha</h2>
          <p>Ward Member</p>
          <span>9841889779</span>
        </div>
        <div className="itemcard">
          <div className="itemimage">
            <Image
              src="/Kanxha.jpg"
              width={305}
              height={270}
              layout="intrinsic"
            ></Image>
          </div>
          <h2>Kanchha Lal Tamang</h2>
          <p>Ward Member</p>
          <span>9803986829</span>
        </div>
      </div>
      <div className="bottom">
        <div className="itemcard">
          <div className="itemimage">
            <Image
              src="/Dina.jpg"
              width={305}
              height={270}
              layout="intrinsic"
            ></Image>
          </div>
          <h2>Dina Nepali</h2>
          <p>Ward Member</p>
          <span>9813747982</span>
        </div>
        <div className="itemcard">
          <div className="itemimage">
            <Image
              src="/Mahan.jpg"
              width={305}
              height={270}
              layout="intrinsic"
            ></Image>
          </div>
          <h2>Mahan Bdr. Tamang</h2>
          <p>Ward Member</p>
          <span>9841917756</span>
        </div>
      </div>
    </div>
  );
}
export default TopcompEng;
