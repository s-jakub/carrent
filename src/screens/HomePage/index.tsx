import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

import Navbar from "../../components/Navbar";
import "./HomePage.styles.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import StarIcon from "@mui/icons-material/Star";

import {
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Button,
} from "@mui/material";
import { AddLocation } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CustomCarousel from "../../components/CustomCarousel";
import CustomModal from "../../components/CustomModal";

const pickUpLocation: Array<string> = [
  "Lublin",
  "Wrocław",
  "Kraków",
  "Rzeszów",
  "Warszawa",
];

const HomePage = () => {
  const isDesktop: boolean = useMediaQuery("(min-width: 768px)");

  const [pickUpValue, setPickUpValue] = useState<string>("Lublin");
  const [returnValue, setReturnValue] = useState<string>("Lublin");
  const [pickUpDateValue, setPickUpDateValue] = useState<Date | null>(null);
  const [returnDateValue, setReturnDateValue] = useState<Date | null>(null);

  const handlePickUpValue = (e: SelectChangeEvent) => {
    setPickUpValue(e.target.value);
  };

  const handleReturnValue = (e: SelectChangeEvent) => {
    setReturnValue(e.target.value);
  };

  // animation

  const carRef = useRef<any>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const whyWeSectionRef = useRef<HTMLElement | null>(null);
  const bookCarSectionRef = useRef<HTMLElement | null>(null);
  const partnersSectionRef = useRef<HTMLElement | null>(null);
  const reviewSectionRef = useRef<HTMLElement | null>(null);
  const newsletterSectionRef = useRef<HTMLElement | null>(null);
  const footerSectionRef = useRef<HTMLElement | null>(null);

  gsap.config({
    nullTargetWarn: false,
  });

  let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

  const threshold = (
    thresholdDesktop: number = 1,
    thresholdMobile: number = 0.9
  ) => (isDesktop ? thresholdDesktop : thresholdMobile);

  const rootMargin = (
    rootMarginDesktop: string = "0px",
    rootMarginMobile: string = "200px"
  ) => (isDesktop ? rootMarginDesktop : rootMarginMobile);

  const intersectionWhyWe = useIntersection(whyWeSectionRef, {
    root: null,
    rootMargin: rootMargin("100px", "150px"),
    threshold: threshold(1, 0.5),
  });

  const intersectionBookCar = useIntersection(bookCarSectionRef, {
    root: null,
    rootMargin: rootMargin(),
    threshold: threshold(),
  });

  const intersectionPartners = useIntersection(partnersSectionRef, {
    root: null,
    rootMargin: rootMargin("0px", "100px"),
    threshold: threshold(),
  });

  const intersectionReview = useIntersection(reviewSectionRef, {
    root: null,
    rootMargin: rootMargin("100px", "600px"),
    threshold: threshold(0.5, 0.5),
  });

  const intersectionNewsletter = useIntersection(newsletterSectionRef, {
    root: null,
    rootMargin: rootMargin("100px", "200px"),
    threshold: threshold(0.8, 0.6),
  });

  const intersectionFooter = useIntersection(footerSectionRef, {
    root: null,
    rootMargin: rootMargin("200px", "200px"),
    threshold: threshold(0.9, 0.9),
  });

  const fadeIn = (element: string) => {
    gsap.to(element, {
      opacity: 1,
      x: 0,
      ease: "power4.out",
      duration: 2,
    });
  };

  const fadeOut = (element: string, directionControl: number = 0) => {
    gsap.to(element, {
      opacity: 0,
      x: directionControl,
      ease: "power4.out",
      duration: 2,
    });
  };

  useEffect(() => {
    tl.to(carRef.current, { x: 0, opacity: 1, duration: 2.2 })
      .to(titleRef.current, { x: 0, opacity: 1 }, "-=1.8")
      .to(descRef.current, { x: 0, opacity: 1 }, "-=1.8")
      .to(buttonRef.current, { y: 0, opacity: 1 }, "-=1.8")
      .to(formRef.current, { opacity: 1 }, "-=1.5");
  }, [tl]);

  intersectionWhyWe && intersectionWhyWe.intersectionRatio < threshold(1, 0.5)
    ? fadeOut(".why-we", -100)
    : fadeIn(".why-we");

  intersectionBookCar && intersectionBookCar.intersectionRatio < threshold()
    ? fadeOut(".book-car")
    : fadeIn(".book-car");

  intersectionPartners && intersectionPartners.intersectionRatio < threshold()
    ? fadeOut(".partners-wrap", 100)
    : fadeIn(".partners-wrap");

  intersectionReview &&
  intersectionReview.intersectionRatio < threshold(0.5, 0.5)
    ? fadeOut(".review-container", -100)
    : fadeIn(".review-container");

  intersectionNewsletter &&
  intersectionNewsletter.intersectionRatio < threshold(0.8, 0.6)
    ? fadeOut(".newsletter", 100)
    : fadeIn(".newsletter");

  intersectionFooter &&
  intersectionFooter.intersectionRatio < threshold(0.9, 0.9)
    ? fadeOut(".footer", -100)
    : fadeIn(".footer");

  return (
    <>
      <Navbar />
      {isDesktop && (
        <>
          <div className="bg-right-side">
            <div className="bg-right-side__path"></div>
          </div>
          <div className="bg-left-side">
            <div className="bg-left-side__square square1"></div>
            <div className="bg-left-side__square square2"></div>
            <div className="bg-left-side__square square3"></div>
            <div className="bg-left-side__square mini square4"></div>
            <div className="bg-left-side__square mini square5"></div>
            <div className="bg-left-side__square mini square6"></div>
            <div className="bg-left-side__square mini square7"></div>
          </div>

          <section className="hero">
            <div className="hero__left-container">
              <h1 ref={titleRef} className="hero__left-container__title">
                Prosta i szybka droga do wypożyczenia auta
              </h1>
              <p ref={descRef} className="hero__left-container__description">
                Żyjemy w czasach, kiedy pokonywanie odległości pomiędzy
                poszczególnymi punktami jest coraz wygodniejsze, a także
                sprawniejsze. Dzięki ciągle rozwijanej sieci dróg i autostrad z
                łatwością jesteśmy w stanie pokonać dzielącą nas trasę.
                Przemieszczanie się stało się prostsze także dzięki rozwojowi
                motoryzacji. Nie zawsze jednak mamy możliwość, a także
                konieczność zakupu własnych czterech kółek. W takich sytuacjach
                doskonale sprawdzi się nasza wypożyczalnia samochodów.
              </p>
              <button ref={buttonRef} className="hero__left-container__btn">
                Zamów auto
              </button>
            </div>
            <div ref={carRef} className="hero__right-container">
              <img
                className="hero__right-container__image"
                src="https://purepng.com/public/uploads/large/purepng.com-chevrolet-camarocamarochevrolet-camaroamerican-automobilepony-carmuscle-car-17015274396434a7bk.png"
                alt="awsome yellow camaro"
              />
            </div>
          </section>
        </>
      )}
      {!isDesktop && (
        <div className="hero-mobile">
          <div className="hero-mobile__top-container">
            <h2 className="hero-mobile__top-container__description">
              Sprawdź nasze wspaniałe auta!
            </h2>
            <img
              ref={carRef}
              src="https://purepng.com/public/uploads/large/purepng.com-chevrolet-camarocamarochevrolet-camaroamerican-automobilepony-carmuscle-car-17015274396434a7bk.png"
              alt="awsome yellow camaro"
            />
          </div>
          <div className="hero-mobile__bottom-container">
            <h1
              ref={titleRef}
              className="hero-mobile__bottom-container__title_mobile"
            >
              Prosta i szybka droga do wypożyczenia auta
            </h1>
            <p ref={descRef} className="hero__left-container__description">
              Żyjemy w czasach, kiedy pokonywanie odległości pomiędzy
              poszczególnymi punktami jest coraz wygodniejsze, a także
              sprawniejsze. Dzięki ciągle rozwijanej sieci dróg i autostrad z
              łatwością jesteśmy w stanie pokonać dzielącą nas trasę.
              Przemieszczanie się stało się prostsze także dzięki rozwojowi
              motoryzacji. Nie zawsze jednak mamy możliwość, a także konieczność
              zakupu własnych czterech kółek. W takich sytuacjach doskonale
              sprawdzi się nasza wypożyczalnia samochodów.
            </p>
            <button ref={buttonRef} className="hero__left-container__btn">
              Zamów auto
            </button>
          </div>
        </div>
      )}

      <section ref={formRef} className="form-wrap">
        <form action="" className="form-rent-car">
          <div className="form-rent-car__item">
            <label
              htmlFor="pick-up-location"
              className="form-rent-car__item__label"
            >
              Wybierz miejsce odbioru
            </label>
            <Select
              id="pick-up-location"
              sx={{ width: "100%" }}
              value={pickUpValue}
              onChange={handlePickUpValue}
              startAdornment={
                <InputAdornment position="start">
                  <AddLocation />
                </InputAdornment>
              }
            >
              {pickUpLocation.map((place: string, idx: number) => (
                <MenuItem key={idx} value={place}>
                  {place}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className="form-rent-car__item">
            <label
              htmlFor="pick-up-location"
              className="form-rent-car__item__label"
            >
              Wybierz miejsce zwrotu
            </label>
            <Select
              id="return-location"
              sx={{ width: "100%" }}
              value={returnValue}
              onChange={handleReturnValue}
              startAdornment={
                <InputAdornment position="start">
                  <AddLocation />
                </InputAdornment>
              }
            >
              {pickUpLocation.map((place: string, idx: number) => (
                <MenuItem key={idx} value={place}>
                  {place}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className="form-rent-car__item">
            <label className="form-rent-car__item__label">
              Wybierz czas odbioru
            </label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={pickUpDateValue}
                onChange={(newValue) => setPickUpDateValue(newValue)}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </LocalizationProvider>
          </div>

          <div className="form-rent-car__item">
            <label className="form-rent-car__item__label">
              Wybierz czas zwrotu
            </label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={returnDateValue}
                onChange={(newValue) => setReturnDateValue(newValue)}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </LocalizationProvider>
          </div>

          <button type="submit" className="form-rent-car__submit-btn">
            Znajdź Auto
          </button>
        </form>
      </section>

      <section ref={whyWeSectionRef} className="why-we">
        <h2 className="why-we__title">Dlaczego akurat my?</h2>
        <div className="why-we__card-container">
          <div className="why-we__card-container__item">
            <div className="why-we__card-container__item__img-container">
              <RocketLaunchOutlinedIcon
                sx={{ color: "#FCD440", width: "100%", height: "100%" }}
              />
            </div>
            <h3 className="why-we__card-container__item__title">
              Szybkie i proste zamawianie
            </h3>
            <p className="why-we__card-container__item__description">
              Zamów swoje auto online lub offline. Wypełnij prosty formularz aby
              zamówić swoje auto online lub po prostu zadzwoń do nas o każdej
              porze!
            </p>
          </div>
          <div className="why-we__card-container__item shadow">
            <div className="why-we__card-container__item__img-container">
              <AddLocationAltOutlinedIcon
                sx={{ color: "#FCD440", width: "100%", height: "100%" }}
              />
            </div>
            <h3 className="why-we__card-container__item__title">
              Wiele miejsc odbioru
            </h3>
            <p className="why-we__card-container__item__description">
              Mamy obszerną liczbę aut które możesz odebradź z każdej
              lokalizacji na terenie naszego kraju!
            </p>
          </div>
          <div className="why-we__card-container__item">
            <div className="why-we__card-container__item__img-container">
              <PeopleAltOutlinedIcon
                sx={{ color: "#FCD440", width: "100%", height: "100%" }}
              />
            </div>
            <h3 className="why-we__card-container__item__title">
              Zadowoleni klienci
            </h3>
            <p className="why-we__card-container__item__description">
              Mamy już ponad 75.000 zadowolonych klientów! I ta liczba ciągle
              wzrasta. Zobacz naszą sekcję recenzji aby zobaczyć opinie o naszym
              serwisie!
            </p>
          </div>
        </div>
      </section>

      <section ref={bookCarSectionRef} className="book-car">
        <h2 className="book-car__title">Zamów odpowiednie dla siebie auto</h2>
        <CustomCarousel />
      </section>
      <CustomModal />

      <section ref={partnersSectionRef} className="partners-container">
        <div className="partners-wrap">
          <div className="partners-wrap__partner">
            <img
              src="https://258511-1804591-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/03/mattressfirm-promo-code.png"
              alt="logo"
            />
          </div>
          <div className="partners-wrap__partner">
            <img
              src="https://258511-1804591-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/03/mattressfirm-promo-code.png"
              alt="logo"
            />
          </div>
          <div className="partners-wrap__partner">
            <img
              src="https://258511-1804591-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/03/mattressfirm-promo-code.png"
              alt="logo"
            />
          </div>
          <div className="partners-wrap__partner">
            <img
              src="https://258511-1804591-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/03/mattressfirm-promo-code.png"
              alt="logo"
            />
          </div>
          <div className="partners-wrap__partner">
            <img
              src="https://258511-1804591-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/03/mattressfirm-promo-code.png"
              alt="logo"
            />
          </div>
          <div className="partners-wrap__partner">
            <img
              src="https://258511-1804591-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/03/mattressfirm-promo-code.png"
              alt="logo"
            />
          </div>
        </div>
      </section>

      <div style={{ overflowX: "hidden" }}>
        <section ref={reviewSectionRef} className="review-container">
          <h2 className="title">Co mówią nasi klienci</h2>
          <div className="review-card-container">
            <div className="review">
              <div className="review__stars-wrap">
                <StarIcon sx={{ color: "#FCD440" }} />
                <StarIcon sx={{ color: "#FCD440" }} />
                <StarIcon sx={{ color: "#FCD440" }} />
                <StarIcon sx={{ color: "#FCD440" }} />
                <StarIcon sx={{ color: "#FCD440" }} />
              </div>
              <p className="review__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit, sit. Consequatur illum enim reprehenderit voluptatem
                ducimus iste dolores quos obcaecati dolorum nemo accusantium
                consectetur sequi temporibus vitae, possimus optio veritatis.
              </p>
              <div className="review__user">
                <div className="review__user__image">
                  <img
                    src="https://i.pinimg.com/originals/ec/a2/83/eca28396a548d5650cb098390e262610.jpg"
                    alt="user"
                  />
                </div>
                <div className="review__user__description">
                  <p className="review__user__description__username">
                    Andrzej Stołeczny
                  </p>
                  <p className="review__user__description__carname">
                    Mercedes-Benz C
                  </p>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="review__stars-wrap">
                <StarIcon sx={{ color: "#FCD440" }} />
                <StarIcon sx={{ color: "#FCD440" }} />
                <StarIcon sx={{ color: "#FCD440" }} />
                <StarIcon sx={{ color: "#FCD440" }} />
                <StarIcon sx={{ color: "#FCD440" }} />
              </div>
              <p className="review__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit, sit. Consequatur illum enim reprehenderit voluptatem
                ducimus iste dolores quos
              </p>
              <div className="review__user">
                <div className="review__user__image">
                  <img
                    src="https://i.pinimg.com/originals/ec/a2/83/eca28396a548d5650cb098390e262610.jpg"
                    alt="user"
                  />
                </div>
                <div className="review__user__description">
                  <p className="review__user__description__username">
                    Andrzej Stołeczny
                  </p>
                  <p className="review__user__description__carname">
                    Mercedes-Benz C
                  </p>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="review__stars-wrap">
                <StarIcon sx={{ color: "#FCD440" }} />
                <StarIcon sx={{ color: "#FCD440" }} />
                <StarIcon sx={{ color: "#FCD440" }} />
                <StarIcon sx={{ color: "#FCD440" }} />
                <StarIcon sx={{ color: "#FCD440" }} />
              </div>
              <p className="review__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit, sit. Consequatur illum enim reprehenderit voluptatem
                ducimus iste dolores quos obcaecati dolorum nemo accusantium
                consectetur sequi temporibus vitae, possimus optio veritatis.
                Dolores quos obcaecati dolorum nemo accusantium consectetur
                sequi temporibus vitae, possimus optio veritatis.
              </p>
              <div className="review__user">
                <div className="review__user__image">
                  <img
                    src="https://i.pinimg.com/originals/ec/a2/83/eca28396a548d5650cb098390e262610.jpg"
                    alt="user"
                  />
                </div>
                <div className="review__user__description">
                  <p className="review__user__description__username">
                    Andrzej Stołeczny
                  </p>
                  <p className="review__user__description__carname">
                    Mercedes-Benz C
                  </p>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="review__stars-wrap">
                <StarIcon sx={{ color: "#FCD440" }} />
                <StarIcon sx={{ color: "#FCD440" }} />
                <StarIcon sx={{ color: "#FCD440" }} />
                <StarIcon sx={{ color: "#FCD440" }} />
                <StarIcon sx={{ color: "#FCD440" }} />
              </div>
              <p className="review__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit, sit. Consequatur illum enim reprehenderit voluptatem
                ducimus iste dolores quos obcaecati dolorum nemo accusantium
                consectetur sequi temporibus vitae, possimus optio veritatis.
              </p>
              <div className="review__user">
                <div className="review__user__image">
                  <img
                    src="https://i.pinimg.com/originals/ec/a2/83/eca28396a548d5650cb098390e262610.jpg"
                    alt="user"
                  />
                </div>
                <div className="review__user__description">
                  <p className="review__user__description__username">
                    Andrzej Stołeczny
                  </p>
                  <p className="review__user__description__carname">
                    Mercedes-Benz C
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div style={{ overflowX: "hidden" }}>
        <section ref={newsletterSectionRef} className="newsletter">
          <h2 className="newsletter__title">Zapisz się do newslettera!</h2>
          <p className="newsletter__desc">
            Zapisz się do newslettera aby otrzymywać powiadomienia o najnowszych
            promocjach i nie tylko!
          </p>
          <form action="#" className="newsletter__form">
            <TextField
              required
              defaultValue="przykład@gmail.com"
              variant="standard"
              sx={{
                backgroundColor: "#fff",
                maxWidth: "450px",
                width: "100%",
                padding: "10px",
              }}
            />

            <Button
              variant="contained"
              size="large"
              sx={{ whiteSpace: "nowrap" }}
            >
              Zapisz się
            </Button>
          </form>
        </section>
      </div>

      <footer ref={footerSectionRef} className="footer">
        <div className="footer__logo">
          <div className="navbar__logo">CarRENT</div>
          <div className="footer__logo__desc">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            illum debitis molestias alias labore delectus aliquam eum, ullam a!
          </div>
        </div>
        <div className="footer__col">
          <h4 className="footer__col__title">Mapa odnośników</h4>
          <div className="footer__col__item-wrap">
            <a href="/" className="footer__col__item-wrap__item">
              Strona Główna
            </a>
            <a href="/" className="footer__col__item-wrap__item">
              Jak To Działa
            </a>
            <a href="/" className="footer__col__item-wrap__item">
              Samochody
            </a>
            <a href="/" className="footer__col__item-wrap__item">
              O Nas
            </a>
          </div>
        </div>
        <div className="footer__col">
          <h4 className="footer__col__title">Pomoc</h4>
          <div className="footer__col__item-wrap">
            <a href="/" className="footer__col__item-wrap__item">
              Zadzwoń do nas
            </a>
            <a href="/" className="footer__col__item-wrap__item">
              Pomoc
            </a>
            <a href="/" className="footer__col__item-wrap__item">
              Zasady & Warunki
            </a>
            <a href="/" className="footer__col__item-wrap__item">
              Polityka prywatonści
            </a>
          </div>
        </div>
        <div className="footer__col">
          <h4 className="footer__col__title">Social Media</h4>
          <div className="footer__col__item-wrap">
            <a href="/" className="footer__col__item-wrap__item">
              Instagram
            </a>
            <a href="/" className="footer__col__item-wrap__item">
              Facebook
            </a>
            <a href="/" className="footer__col__item-wrap__item">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
