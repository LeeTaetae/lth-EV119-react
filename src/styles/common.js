// 공통적인 css를 변수에 담아 사용할 수 있도록 제공하는 파일
import { css } from "styled-components";

// Flex 레이아웃
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const flexCenterColumn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const flexBetweenRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

// Heading
export const heading6 = css`
  font-size: ${({theme}) => theme.FONT_SIZE["h6"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["regular"]};
`

// Accent
export const accent = css`
  font-size: ${({theme}) => theme.FONT_SIZE["accent"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["regular"]};
`

// Small Text
export const smallText3Regular = css`
  font-size: ${({theme}) => theme.FONT_SIZE["smallText3"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["regular"]};
`

export const smallText3Light = css`
  font-size: ${({theme}) => theme.FONT_SIZE["smallText3"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["light"]};
`

export const smallText2Light = css`
  font-size: ${({theme}) => theme.FONT_SIZE["smallText2"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["light"]};
`

// Color
export const basic = css`
  color: ${({theme}) => theme.PALLETE.basic};
`

export const primary = css`
  color: ${({theme}) => theme.PALLETE.primary.main};
`

export const white = css`
  color: ${({theme}) => theme.PALLETE.white};
`

export const fontGreyScale3 = css`
  color: ${({theme}) => theme.PALLETE.grey.greyScale3};
`