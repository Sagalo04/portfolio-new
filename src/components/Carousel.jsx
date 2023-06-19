import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import { styled } from "@nextui-org/react";

const StyledCarousel = styled("div", {
  "@media (max-width: 767px)": {
    width: "35% !important",
  },
});

export default function Caroussel(props) {
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(true);
  const [goToSlide, setGoToSlide] = useState(0);
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });
  const [cards] = useState(table);
  const [pointer, setPointer] = useState({ xDown: null, yDown: null });
  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    );
  };

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    setPointer({
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY,
    });
  };

  const handleTouchMove = (evt) => {
    if (!pointer.xDown && !pointer.yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = pointer.xDown - xUp;
    let yDiff = pointer.yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        setGoToSlide(goToSlide + 1);
        setPointer({ xDown: null, yDown: null });
      } else {
        /* right swipe */
        setGoToSlide(goToSlide - 1);
        setPointer({ xDown: null, yDown: null });
      }
    }
  };

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <StyledCarousel
      style={{
        width: props.width,
        height: props.height,
        margin: props.margin,
        marginTop: props.marginTop,
      }}
      // className={Styles.Carousel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        enableSwipe={true}
        animationConfig={config.gentle}
      />
    </StyledCarousel>
  );
}
