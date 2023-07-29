import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
	token: {
		colorPrimary: "#ffc500",
		fontSize: 16,
		fontFamily: 'Montserrat',
		colorLink: '#0066ff'
	},
	components: {
		Menu: {
			paddingContentHorizontal: 40
		},
		Button: {
			controlHeightLG: 56,
			paddingContentHorizontal: 40,
			colorTextLightSolid: 'rgba(0, 0, 0, 0.88)'
		},
		Input: {
			colorBgContainer: '#F9F9F9',
			controlHeightLG: 56,
			borderRadiusLG: 12
		}
	}
};

export default theme;