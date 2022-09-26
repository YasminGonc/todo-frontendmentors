import bannerMobile from '../../assets/bg-mobile-light.jpg';
import bannerDesktop from '../../assets/bg-desktop-light.jpg';

export const lightTheme = {
    title: 'light',

    colors: {
        'gray-100': 'hsl(0, 0%, 98%)',
        'gray-200': 'hsl(236, 33%, 92%)',
        'gray-300': 'hsl(233, 11%, 84%)',
        'gray-400': 'hsl(236, 9%, 61%)',
        'gray-500': 'hsl(235, 19%, 35%)',
        'gray-600': 'hsl(235, 19%, 35%)',
        'gray-700': 'hsl(235, 19%, 35%)',

        blue: 'hsl(220, 98%, 61%)',
        purple: 'hsl(280, 87%, 65%)',
        gradient: 'linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',

        background: 'hsl(236, 33%, 92%)',
        backgroundImageMobile: bannerMobile,
        backgroundImageDesktop: bannerDesktop
    }
}