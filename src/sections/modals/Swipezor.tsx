import React, { useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

function findLeft(element: any) {
  var rec = element.getBoundingClientRect();
  return rec.left + window.scrollX;
}

function Swipezor({
  mainText,
  overlayText,
  onSwipeDone,
  classList = '',
  overlayClassList = '',
  caretClassList = '',
  delta = 10,
  minSwipeWidth = 0.6,
  minSwipeVelocity = 0.6,
  caret = null,
  arrowVisible,
}: any) {
  const [overlayWidth, setOverlayWidth] = useState(40);
  const [swipeComplete, setSwipeComplete] = useState(false);
  const buttonRef = useRef<any>();

  const handlers = useSwipeable({
    onSwipedRight: (data) => {
      if (swipeComplete || !buttonRef.current) return;

      const event: any = data.event;
      const butWidth = buttonRef.current.offsetWidth;
      if (data.velocity > minSwipeVelocity) {
        setOverlayWidth(butWidth);
        setSwipeComplete(true);
        setTimeout(() => onSwipeDone(), 100);
      } else {
        const offsetLeft = findLeft(buttonRef.current);
        const startPos = Math.abs(data.initial[0] - offsetLeft);
        if (
          startPos <= 100 &&
          (data.event.type === 'touchend'
            ? event.changedTouches[0].clientX - offsetLeft
            : event.offsetX) >
            minSwipeWidth * butWidth
        ) {
          setOverlayWidth(butWidth);
          setSwipeComplete(true);
          setTimeout(() => onSwipeDone(), 100);
        } else setOverlayWidth(40);
      }
    },
    onSwiping: (data) => {
      if (swipeComplete) return;
      
      const event: any = data.event;
      const offsetLeft = findLeft(buttonRef.current);
      const startPos = Math.abs(data.initial[0] - offsetLeft);
      if (startPos <= 100) {
        if (data.event.type && data.event.type === 'touchmove')
          setOverlayWidth(event.touches[0].clientX - offsetLeft);
        else setOverlayWidth(event.offsetX);
      }
    },
    delta,
    trackMouse: true,
  });

  return (
    <div
      className={`swipezor-but ${classList}`}
      {...handlers}
      ref={(t) => {
        handlers.ref(t);
        buttonRef.current = t;
      }}
    >
      <div className={`swipezor-overlay ${overlayClassList}`} style={{ width: overlayWidth }}>
        <div className="swipezor-overlay-wrapper">
          <div className={`swipezor-caret-wrapper ${caretClassList}${arrowVisible}`}>
            {caret || arrowVisible == 'hidden' ? (
              caret
            ) : (
              <img src={'/assets/icons/arrow.png'} alt="caret" style={{ maxWidth: '100%' }} />
            )}
          </div>
          <div className="swipezor-overlay-txt" style={{ backgroundColor: 'green' }}>
            {overlayText}
          </div>
        </div>
      </div>
      {mainText}
    </div>
  );
}

export default Swipezor;
