import { FunctionComponent } from "react";

declare module '\*.svg' {
  export const ReactComponent: FunctionComponent<React.SVGProps<SVGSVGElement>>;
}