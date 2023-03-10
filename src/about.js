import React from "react"
import { Text, View, TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { Paragraph, TitleText, HeaderText } from "./typography"

// how many years and months has it been since august 2017 using Date.now()?
// https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates
// https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates/2627491#2627491

const oneYear = 24 * 60 * 60 * 1000 * 365 // hours*minutes*seconds*milliseconds
const startedCodingForReal = new Date(2017, 8, 12)
const firstViralTweet = new Date(2013, 12, 12)
const firstViralVideo = new Date(2013, 5, 12)
const init = new Date(1997, 11, 12)
const today = new Date(Date.now())

const years = Math.round(Math.abs((init - today) / oneYear))
const codeDiff = Math.round(Math.abs((startedCodingForReal - today) / oneYear))
const lifePercent =
	(Math.round(Math.abs((startedCodingForReal - today) / oneYear)) / years) *
	100
const viralDiffDays = Math.round(Math.abs((firstViralTweet - today) / oneYear)) // / years * 100
const l = Math.round(Math.abs((firstViralTweet - today) / oneYear))
export const About = ({}) => {
	return (
		<AboutContainer>
			<TitleText>
				serial entrepreneur, app developer, terminally online ex-meme lord
			</TitleText>
			<TitleText>hi! i'm derek nelson.</TitleText>
			<HeaderText>there's a lot in a name. here are two i go by: derek.eth for anything software | prodigynelson for anything content</HeaderText>
			<Paragraph>
				for my technical resume/cv, check out https://read.cv/derek.eth
			</Paragraph>
			<Paragraph>
				for content, visit my twitter or youtube channel
			</Paragraph>
			<Paragraph>
				for a comprehensive understanding of what i do, you're gonna have to learn about both.
			</Paragraph>
			<Paragraph>
				i'm {years} years old. i've been making viral content since 2013
				and making apps that people use since 2017 and apps people pay
				for since 2019.
			</Paragraph>
		</AboutContainer>
	)
}

const AboutContainer = styled(View)`
	flex: 1;
	margin-horizontal: 20px;
`

const AboutColumns = styled(View)`
	flex-direction: column;
	
`

export default About
