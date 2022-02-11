import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
function TopcompNep() {
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
          <h2> भिमढुङ्गा वडाको संक्षिप्त परिचय</h2>
          <p>
            नागार्जुन नगरपालिका वडा नं. ८ साविकको भिमढुङ्गा गा.वि.स. सिङ्गो एउटै
            गा. वि. स मिले बनेको बडा हो । नागार्जुन नगरपालिकाको १० वटा वडा मध्ये
            ऐतिहासिक, धार्मिक, सांस्कृतिक साथ विविध जात जातिय परिचय बोकेको वडा
            नं. ८ भिमढुङ्गा प्राचिन काल देखि नै प्रख्यात छ।{" "}
            <Link href="/desc_nepali">
              <span>थप हेर्नुहोस्</span>
            </Link>
          </p>

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
          <h2>शुक्र बहादुर तामाङ</h2>
          <p>बडा अध्यक्ष</p>
          <span>९८४१५९०८८८</span>
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
          <h2>चन्दा श्रेष्ठ</h2>
          <p>वडा सदस्य</p>
          <span>९८४१८८९७७९</span>
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
          <h2>कान्छालाल तामाङ </h2>
          <p>वडा सदस्य</p>
          <span>९८०३९८६८२९</span>
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
          <h2>दिना नेपाली</h2>
          <p>वडा सदस्य</p>
          <span>९८१३७४७९८२</span>
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
          <h2>माहान बहादुर तामाङ </h2>
          <p>वडा सदस्य</p>
          <span>९८४१९१७७५६</span>
        </div>
      </div>
    </div>
  );
}
export default TopcompNep;
