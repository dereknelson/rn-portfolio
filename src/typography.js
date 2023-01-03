import { Text } from 'react-native'
import styled from 'styled-components/native'

const BaseText = styled(Text)`
    color: ${({ color }) => (color ? color : 'black')};
    position: ${({ position }) => (position ? position : 'relative')};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
    padding-top: ${({ paddingTop }) => (paddingTop ? `${paddingTop}px` : '0px')};
    margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : '0px')};
    padding-bottom: ${({ paddingBottom }) => (paddingBottom ? `${paddingBottom}px` : '0px')};
    margin-bottom: ${({ marginBottom }) => (marginBottom ? `${marginBottom}px` : '0px')};
    padding-left: ${({ paddingLeft }) => (paddingLeft ? `${paddingLeft}px` : '0px')};
    margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}px` : '0px')};
    padding-right: ${({ paddingRight }) => (paddingRight ? `${paddingRight}px` : '0px')};
    margin-right: ${({ marginRight }) => (marginRight ? `${marginRight}px` : '0px')};
`

export const TitleText = styled(BaseText)`
	font-size: 36px;
`
export const HeaderText = styled(BaseText)`
	font-size: 24px;
`
export const Paragraph = styled(BaseText)`
	font-size: 16px;
`