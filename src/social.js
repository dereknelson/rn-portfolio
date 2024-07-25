import { TouchableOpacity } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faTwitter,
	faGithub,
	faMediumM,
	faInstagram,
} from "@fortawesome/fontawesome-free-brands"

export default function SocialIcons() {
	return (
		<View>
			<TouchableOpacity
				href="https://twitter.com/prodigynelson"
				style={{ color: "black" }}>
				<FontAwesomeIcon icon={faTwitter} />
			</TouchableOpacity>
			<TouchableOpacity
				href="https://instagram.com/prodigynelson"
				style={{ color: "black" }}>
				<FontAwesomeIcon icon={faInstagram} />
			</TouchableOpacity>
			<TouchableOpacity
				href="https://medium.com/@derek_nelson"
				style={{ color: "black" }}>
				<FontAwesomeIcon icon={faMediumM} />
			</TouchableOpacity>
			<TouchableOpacity
				href="https://github.com/dereknelson"
				style={{ color: "black" }}>
				<FontAwesomeIcon icon={faGithub} />
			</TouchableOpacity>
		</View>
	)
}
