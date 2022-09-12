import styled from "styled-components";

interface TitleTextProps {
    color?: "title" | "subtitle" | "text";
    size?: "xl" | "l" | "m" | "s" | "xs";
    weigth?: string | number;
}

interface RegularTextProps {
    color?: "label" | "subtitle" | "text";
    size?: "l" | "m" | "s" ;
    weigth?: string | number;
}

export const TitleText = styled.h1 <TitleTextProps>`
    color: ${({theme, color}) => theme.colors[`base-${color ?? 'title'}`]};
    font-size: ${({theme, size}) => theme.textSizes[`title-title-${size ?? "m"}`]};
    font-family: ${({theme}) => theme.fonts.title};
    line-height: 130%;
    font-weight: ${({weigth}) => weigth ?? 800};
`
export const RegularText = styled.p <RegularTextProps>`
    color: ${({theme, color}) => theme.colors[`base-${color ?? 'title'}`]};
    font-size: ${({theme, size}) => theme.textSizes[`text-regular-${size ?? "m"}`]};
    font-family: ${({theme}) => theme.fonts.regular};
    line-height: 130%;
    font-weight: ${({weigth}) => weigth ?? 400};
`