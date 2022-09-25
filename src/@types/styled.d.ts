import "styled-components";
import { lightTheme } from "../styles/themes/light";

type ThemType = typeof lightTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemType {}
}