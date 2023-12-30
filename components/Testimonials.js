import styles from "../styles/Testimonial.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Testimonials = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={4000}
    >
      <div>
        <div className={styles.myCarousel}>
          <div className={styles.testimonial__head}>
            <div className={styles.testimonial__image}>
              <Image
                className={styles.image}
                src="/augusto.jpg"
                width={80}
                height={80}
                alt ="augusto"

              />
            </div>
            <div className={styles.testimonial__introduction}>
              <h3>Augusto Domingos</h3>
              <h4>Designer</h4>
            </div>
          </div>
          <p>
            I enjoy working with Parcidio, He is a responsible and hardworking
            person. He delivers a quality work and is clear and easily
            understood.
          </p>
        </div>
      </div>
      <div>
        <div className={styles.myCarousel}>
          <div className={styles.testimonial__head}>
            <div className={styles.testimonial__image}>
              <Image
                className={styles.image}
                src="/theron.jpg"
                width={80}
                height={80}
                alt ="theron"
              />
            </div>
            <div className={styles.testimonial__introduction}>
              <h3>Theron Kasita</h3>
              <h4>Developer</h4>
            </div>
          </div>
          <p>
            I enjoyed working with Andre, he is a great programmer, team
            player and motivator.
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default Testimonials;
