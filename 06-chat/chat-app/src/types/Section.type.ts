import type { SectionKeys } from "./SectionKeys.types";

export type Section<T extends HTMLElement> = Record<SectionKeys, React.RefObject<T>>;