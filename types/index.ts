import { MotionValue } from "framer-motion";
import { StaticImageData } from "next/image";

export type Tcardsprops = {
   i: number,
   title: string,
   description: string,
   src: StaticImageData,
   href: string,
   color: string,
   progress: MotionValue<number>,
   range?: any,
   targetScale?: number;
};