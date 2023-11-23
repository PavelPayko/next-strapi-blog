import React, { useEffect, useRef } from "react";
import style from "./Bg.module.scss";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

export default function Bg() {
  const { lg } = useBreakpoint();
  const r1 = useRef(null);
  const p1 = useRef(null);
  const p2 = useRef(null);
  const c1 = useRef(null);

  const r2 = useRef(null);
  const c2 = useRef(null);
  const c3 = useRef(null);

  useEffect(() => {
    const moveHandler = (e) => {
      const w = window.screen.availWidth / 100;
      const pos = e.screenX / w;
      const center = pos / 2;
      r1.current.style.transform = `translateX(${center - 30}px)`;
      p1.current.style.transform = `translateX(${-center + 30}px)`;
      p2.current.style.transform = `translateX(${center - 20}px)`;
      c1.current.style.transform = `translateX(${-center + 20}px)`;

      r2.current.style.transform = `translateX(${-center + 40}px)`;
      c2.current.style.transform = `translateX(${center - 10}px)`;
      c3.current.style.transform = `translateX(${-center + 20}px)`;
    };
    window.addEventListener("mousemove", moveHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={lg ? "0 0 1440 451" : "0 0 500 768"}
      style={{ opacity: "1" }}
      className={style.svg}
    >
      <g
        transform={"translate(-30, 0)"}
        stroke="#ffc500"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group-9" opacity="0.3">
          <g
            style={{ transform: "translate(0px, -14.588px)" }}
            className={style.g_1}
          >
            <g
              id="r-1"
              style={{ transform: "translateX(-10.4413px)" }}
              ref={r1}
            >
              <rect
                id="Rectangle-6"
                fill="#ffc500"
                transform="translate(41.000000, 169.000000) rotate(-27.000000) translate(-41.000000, -169.000000) "
                x="11"
                y="139"
                width="60"
                height="60"
                rx="2"
              ></rect>
            </g>
          </g>
          <g
            style={{ transform: "translate(0px, -1.20795px)" }}
            className={style.g_2}
          >
            <g id="p-1" style={{ transform: "translateX(10.4413px)" }} ref={p1}>
              <polygon
                id="Polygon"
                stroke="#container"
                strokeWidth="2"
                transform="translate(139.000000, 17.500000) rotate(45.000000) translate(-139.000000, -17.500000) "
                points="139 77 152 100 126 100"
              ></polygon>
            </g>
          </g>
          <g
            style={{ transform: "translate(0px, -3.3658px)" }}
            className={style.g_3}
          >
            <g id="p-2" style={{ transform: "translateX(-15.662px)" }} ref={p2}>
              <polygon
                id="Polygon"
                stroke="#container"
                transform="translate(180.000000, 446.000000) rotate(-67.000000) translate(-180.000000, -446.000000) "
                points="180 439 188 453 172 453"
              ></polygon>
            </g>
          </g>
          <g
            style={{ transform: "translate(0px, 0.304187px)" }}
            className={style.g_4}
          >
            <g id="c-1" style={{ transform: "translateX(15.662px)" }} ref={c1}>
              <circle
                id="Oval"
                stroke="#container"
                strokeWidth="3"
                fill="#ffc500"
                cx="256"
                cy="357"
                r="10"
              ></circle>
            </g>
          </g>
        </g>
        <g
          id="Group-8"
          transform="translate(1219.000000, 69.000000)"
          stroke="#container"
        >
          <g
            style={{ transform: "translate(0px, 2.69917px)" }}
            className={style.g_5}
          >
            <g id="r-2" style={{ transform: "translateX(5.22067px)" }} ref={r2}>
              <rect
                id="Rectangle-6"
                strokeWidth="2"
                opacity="0.3"
                transform="translate(47.000000, 343.000000) rotate(-45.000000) translate(-47.000000, -343.000000) "
                x="15"
                y="311"
                width="64"
                height="64"
                rx="2"
              ></rect>
            </g>
          </g>
          <g
            style={{ transform: "translate(0px, 11.3145px)" }}
            className={style.g_6}
          >
            <g
              id="c-2"
              style={{ transform: "translateX(-20.8827px)" }}
              ref={c2}
            >
              <circle
                id="Oval"
                strokeWidth="3"
                fill="#ffc500"
                opacity="0.4"
                cx="155"
                cy="13"
                r="13"
              ></circle>
            </g>
          </g>
          <g
            style={{ transform: "translate(0px, 0.129867px)" }}
            className={style.g_7}
          >
            <g id="c-3" style={{ transform: "translateX(15.662px)" }} ref={c3}>
              <circle
                id="Oval"
                strokeWidth="2"
                opacity="0.4"
                cx="211"
                cy="225"
                r="8"
              ></circle>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
