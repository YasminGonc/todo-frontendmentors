import bannerMobile from '../../assets/bg-mobile-dark.jpg';
import bannerDesktop from '../../assets/bg-desktop-dark.jpg';
import sunIcon from '../../assets/icon-sun.svg';

export const darkTheme = {
    title: 'dark',

    colors: {
        'gray-100': 'hsl(234, 39%, 85%)', //Light Grayish Blue
        'gray-200': 'hsl(236, 33%, 92%)', //Light Grayish Blue (hover)
        'gray-300': 'hsl(234, 11%, 52%)', //Dark Grayish Blue
        'gray-400': 'hsl(233, 14%, 35%)', //Very Dark Grayish Blue
        'gray-500': 'hsl(237, 14%, 26%)', //Very Dark Grayish Blue
        'gray-600': 'hsl(235, 24%, 19%)', //Very Dark Desaturated Blue
        'gray-700': 'hsl(235, 21%, 11%)', //Very Dark Blue

        blue: 'hsl(220, 98%, 61%)',
        purple: 'hsl(280, 87%, 65%)',
        gradient: 'linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',

        background: 'hsl(235, 21%, 11%)',
        backgroundImageMobile: bannerMobile,
        backgroundImageDesktop: bannerDesktop,
        backgroundImageButton: sunIcon
    }

}