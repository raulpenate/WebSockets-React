import type { FunctionComponent, SVGProps } from "react";

export interface IChatContent {
  title: string;
  text: string;
  imageSVG: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  style: React.CSSProperties;
  styleSVG?: React.CSSProperties;
}
