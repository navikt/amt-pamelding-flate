import type { Config } from 'tailwindcss'

import generated from '@navikt/ds-tailwind'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  presets: [generated],
  theme: {
    colors: {
      'bg-default': 'rgba(255, 255, 255, 1)',
      'bg-subtle': 'rgba(236, 238, 240, 1)',
      'border-subtle-hover': 'rgba(5, 23, 51, 0.34)',
      'border-default': 'rgba(2, 20, 49, 0.49)',
      'border-strong': 'rgba(1, 11, 24, 0.68)',
      'border-divider': 'rgba(7, 26, 54, 0.21)',
      'border-subtle': 'rgba(7, 26, 54, 0.21)',
      'border-action-selected': 'rgba(0, 69, 156, 1)',
      'border-action': 'rgba(0, 103, 197, 1)',
      'border-selected': 'rgba(0, 103, 197, 1)',
      'border-success': 'rgba(6, 137, 58, 1)',
      'border-danger': 'rgba(195, 0, 0, 1)',
      'border-warning': 'rgba(199, 115, 0, 1)',
      'border-info': 'rgba(54, 141, 168, 1)',
      'border-focus-on-inverted': 'rgba(153, 195, 255, 1)',
      'border-focus': 'rgba(0, 52, 125, 1)',
      'border-on-inverted': 'rgba(224, 227, 230, 1)',
      'border-on-inverted-subtle': 'rgba(82, 89, 98, 1)',
      'border-alt-1': 'rgba(130, 105, 162, 1)',
      'border-alt-2': 'rgba(127, 137, 0, 1)',
      'border-alt-3': 'rgba(0, 91, 130, 1)',
      'icon-default': 'rgba(35, 38, 42, 1)',
      'icon-subtle': 'rgba(1, 11, 24, 0.68)',
      'icon-action-selected': 'rgba(0, 69, 156, 1)',
      'icon-action-on-action-subtle': 'rgba(0, 86, 180, 1)',
      'icon-action': 'rgba(0, 103, 197, 1)',
      'icon-success': 'rgba(6, 137, 58, 1)',
      'icon-danger': 'rgba(195, 0, 0, 1)',
      'icon-warning': 'rgba(199, 115, 0, 1)',
      'icon-info': 'rgba(35, 107, 125, 1)',
      'icon-alt-1': 'rgba(99, 70, 137, 1)',
      'icon-alt-2': 'rgba(127, 137, 0, 1)',
      'icon-alt-3': 'rgba(0, 91, 130, 1)',
      'icon-on-neutral': 'rgba(255, 255, 255, 1)',
      'icon-on-inverted': 'rgba(255, 255, 255, 1)',
      'icon-on-action': 'rgba(255, 255, 255, 1)',
      'icon-on-success': 'rgba(255, 255, 255, 1)',
      'icon-on-danger': 'rgba(255, 255, 255, 1)',
      'icon-on-warning': 'rgba(35, 38, 42, 1)',
      'icon-on-info': 'rgba(35, 38, 42, 1)',
      'surface-hover': 'rgba(18, 43, 68, 0.08)',
      'surface-active': 'rgba(17, 41, 64, 0.13)',
      'surface-inverted-hover': 'rgba(66, 71, 79, 1)',
      'surface-inverted-active': 'rgba(82, 89, 98, 1)',
      'surface-action-subtle-hover': 'rgba(204, 225, 255, 1)',
      'surface-action-hover': 'rgba(0, 86, 180, 1)',
      'surface-action-active': 'rgba(0, 69, 156, 1)',
      'surface-action-selected-hover': 'rgba(0, 52, 125, 1)',
      'surface-neutral-subtle-hover': 'rgba(17, 41, 64, 0.13)',
      'surface-neutral-active': 'rgba(35, 38, 42, 1)',
      'surface-neutral-hover': 'rgba(66, 71, 79, 1)',
      'surface-success-subtle-hover': 'rgba(153, 222, 173, 1)',
      'surface-success-hover': 'rgba(0, 124, 46, 1)',
      'surface-danger-subtle-hover': 'rgba(246, 130, 130, 1)',
      'surface-danger-hover': 'rgba(173, 0, 0, 1)',
      'surface-danger-active': 'rgba(140, 0, 0, 1)',
      'surface-warning-subtle-hover': 'rgba(255, 215, 153, 1)',
      'surface-info-subtle-hover': 'rgba(181, 241, 255, 1)',
      'surface-default': 'rgba(255, 255, 255, 1)',
      'surface-selected': 'rgba(230, 240, 255, 1)',
      'surface-subtle': 'rgba(242, 243, 245, 1)',
      'surface-transparent': 'rgba(255, 255, 255, 0)',
      'surface-backdrop': 'rgba(2, 20, 49, 0.49)',
      'surface-inverted': 'rgba(35, 38, 42, 1)',
      'surface-action-subtle': 'rgba(230, 240, 255, 1)',
      'surface-action-selected': 'rgba(0, 69, 156, 1)',
      'surface-action': 'rgba(0, 103, 197, 1)',
      'surface-neutral-subtle': 'rgba(18, 43, 68, 0.08)',
      'surface-neutral-moderate': 'rgba(17, 41, 64, 0.13)',
      'surface-neutral-selected': 'rgba(35, 38, 42, 1)',
      'surface-neutral': 'rgba(82, 89, 98, 1)',
      'surface-success-subtle': 'rgba(204, 241, 214, 1)',
      'surface-success-moderate': 'rgba(153, 222, 173, 1)',
      'surface-success': 'rgba(6, 137, 58, 1)',
      'surface-danger-subtle': 'rgba(255, 194, 194, 1)',
      'surface-danger-moderate': 'rgba(246, 130, 130, 1)',
      'surface-danger': 'rgba(195, 0, 0, 1)',
      'surface-warning-subtle': 'rgba(255, 236, 204, 1)',
      'surface-warning-moderate': 'rgba(255, 215, 153, 1)',
      'surface-warning': 'rgba(255, 145, 0, 1)',
      'surface-info-subtle': 'rgba(216, 249, 255, 1)',
      'surface-info-moderate': 'rgba(181, 241, 255, 1)',
      'surface-info': 'rgba(102, 203, 236, 1)',
      'surface-alt-1-subtle': 'rgba(224, 216, 233, 1)',
      'surface-alt-1-moderate': 'rgba(192, 178, 210, 1)',
      'surface-alt-1': 'rgba(130, 105, 162, 1)',
      'surface-alt-2-subtle': 'rgba(249, 252, 204, 1)',
      'surface-alt-2-moderate': 'rgba(236, 243, 153, 1)',
      'surface-alt-2': 'rgba(193, 203, 51, 1)',
      'surface-alt-3-subtle': 'rgba(204, 226, 240, 1)',
      'surface-alt-3-moderate': 'rgba(153, 196, 221, 1)',
      'surface-alt-3-strong': 'rgba(0, 52, 83, 1)',
      'surface-alt-3': 'rgba(0, 91, 130, 1)',
      'text-default': 'rgba(35, 38, 42, 1)',
      'text-subtle': 'rgba(1, 11, 24, 0.68)',
      'text-visited': 'rgba(99, 70, 137, 1)',
      'text-danger': 'rgba(195, 0, 0, 1)',
      'text-action-selected': 'rgba(0, 69, 156, 1)',
      'text-action-on-action-subtle': 'rgba(0, 86, 180, 1)',
      'text-action': 'rgba(0, 103, 197, 1)',
      'text-on-inverted': 'rgba(255, 255, 255, 1)',
      'text-on-neutral': 'rgba(255, 255, 255, 1)',
      'text-on-action': 'rgba(255, 255, 255, 1)',
      'text-on-success': 'rgba(255, 255, 255, 1)',
      'text-on-danger': 'rgba(255, 255, 255, 1)',
      'text-on-warning': 'rgba(35, 38, 42, 1)',
      'text-on-info': 'rgba(35, 38, 42, 1)',
      'text-on-alt-1': 'rgba(255, 255, 255, 1)',
      'text-on-alt-2': 'rgba(35, 38, 42, 1)',
      'text-on-alt-3': 'rgba(255, 255, 255, 1)',
      'data-surface-1': 'rgba(51, 134, 224, 1)',
      'data-surface-1-subtle': 'rgba(204, 225, 255, 1)',
      'data-surface-2': 'rgba(0, 91, 130, 1)',
      'data-surface-2-subtle': 'rgba(153, 196, 221, 1)',
      'data-surface-3': 'rgba(199, 115, 0, 1)',
      'data-surface-3-subtle': 'rgba(255, 193, 102, 1)',
      'data-surface-4': 'rgba(54, 141, 168, 1)',
      'data-surface-4-subtle': 'rgba(102, 203, 236, 1)',
      'data-surface-5': 'rgba(51, 170, 95, 1)',
      'data-surface-5-subtle': 'rgba(153, 222, 173, 1)',
      'data-surface-6': 'rgba(130, 105, 162, 1)',
      'data-surface-6-subtle': 'rgba(192, 178, 210, 1)',
      'data-border-1': 'rgba(51, 134, 224, 1)',
      'data-border-2': 'rgba(0, 91, 130, 1)',
      'data-border-3': 'rgba(199, 115, 0, 1)',
      'data-border-4': 'rgba(54, 141, 168, 1)',
      'data-border-5': 'rgba(51, 170, 95, 1)',
      'data-border-6': 'rgba(130, 105, 162, 1)',
      transparent: 'rgba(255, 255, 255, 0)',
      white: 'rgba(255, 255, 255, 1)',
      'nav-red': 'rgba(195, 0, 0, 1)',
      'gray-50': 'rgba(242, 243, 245, 1)',
      'gray-100': 'rgba(236, 238, 240, 1)',
      'gray-200': 'rgba(224, 227, 230, 1)',
      'gray-300': 'rgba(203, 207, 213, 1)',
      'gray-400': 'rgba(170, 176, 186, 1)',
      'gray-500': 'rgba(131, 140, 154, 1)',
      'gray-600': 'rgba(103, 111, 123, 1)',
      'gray-700': 'rgba(82, 89, 98, 1)',
      'gray-800': 'rgba(66, 71, 79, 1)',
      'gray-900': 'rgba(35, 38, 42, 1)',
      'grayalpha-50': 'rgba(38, 55, 89, 0.06)',
      'grayalpha-100': 'rgba(18, 43, 68, 0.08)',
      'grayalpha-200': 'rgba(17, 41, 64, 0.13)',
      'grayalpha-300': 'rgba(7, 26, 54, 0.21)',
      'grayalpha-400': 'rgba(5, 23, 51, 0.34)',
      'grayalpha-500': 'rgba(2, 20, 49, 0.49)',
      'grayalpha-600': 'rgba(2, 15, 34, 0.6)',
      'grayalpha-700': 'rgba(1, 11, 24, 0.68)',
      'grayalpha-800': 'rgba(3, 11, 22, 0.75)',
      'grayalpha-900': 'rgba(2, 5, 9, 0.87)',
      'blue-50': 'rgba(230, 240, 255, 1)',
      'blue-100': 'rgba(204, 225, 255, 1)',
      'blue-200': 'rgba(153, 195, 255, 1)',
      'blue-300': 'rgba(102, 165, 244, 1)',
      'blue-400': 'rgba(51, 134, 224, 1)',
      'blue-500': 'rgba(0, 103, 197, 1)',
      'blue-600': 'rgba(0, 86, 180, 1)',
      'blue-700': 'rgba(0, 69, 156, 1)',
      'blue-800': 'rgba(0, 52, 125, 1)',
      'blue-900': 'rgba(0, 34, 82, 1)',
      'red-50': 'rgba(255, 230, 230, 1)',
      'red-100': 'rgba(255, 194, 194, 1)',
      'red-200': 'rgba(246, 130, 130, 1)',
      'red-300': 'rgba(242, 92, 92, 1)',
      'red-400': 'rgba(222, 46, 46, 1)',
      'red-500': 'rgba(195, 0, 0, 1)',
      'red-600': 'rgba(173, 0, 0, 1)',
      'red-700': 'rgba(140, 0, 0, 1)',
      'red-800': 'rgba(92, 0, 0, 1)',
      'red-900': 'rgba(38, 0, 0, 1)',
      'deepblue-50': 'rgba(230, 241, 248, 1)',
      'deepblue-100': 'rgba(204, 226, 240, 1)',
      'deepblue-200': 'rgba(153, 196, 221, 1)',
      'deepblue-300': 'rgba(102, 163, 196, 1)',
      'deepblue-400': 'rgba(51, 128, 165, 1)',
      'deepblue-500': 'rgba(0, 91, 130, 1)',
      'deepblue-600': 'rgba(0, 80, 119, 1)',
      'deepblue-700': 'rgba(0, 67, 103, 1)',
      'deepblue-800': 'rgba(0, 52, 83, 1)',
      'deepblue-900': 'rgba(0, 36, 58, 1)',
      'green-50': 'rgba(243, 252, 245, 1)',
      'green-100': 'rgba(204, 241, 214, 1)',
      'green-200': 'rgba(153, 222, 173, 1)',
      'green-300': 'rgba(102, 199, 134, 1)',
      'green-400': 'rgba(51, 170, 95, 1)',
      'green-500': 'rgba(6, 137, 58, 1)',
      'green-600': 'rgba(0, 124, 46, 1)',
      'green-700': 'rgba(0, 106, 35, 1)',
      'green-800': 'rgba(0, 85, 25, 1)',
      'green-900': 'rgba(0, 59, 15, 1)',
      'lightblue-50': 'rgba(235, 252, 255, 1)',
      'lightblue-100': 'rgba(216, 249, 255, 1)',
      'lightblue-200': 'rgba(181, 241, 255, 1)',
      'lightblue-300': 'rgba(151, 230, 255, 1)',
      'lightblue-400': 'rgba(124, 218, 248, 1)',
      'lightblue-500': 'rgba(102, 203, 236, 1)',
      'lightblue-600': 'rgba(76, 173, 205, 1)',
      'lightblue-700': 'rgba(54, 141, 168, 1)',
      'lightblue-800': 'rgba(35, 107, 125, 1)',
      'lightblue-900': 'rgba(19, 72, 82, 1)',
      'limegreen-50': 'rgba(253, 255, 230, 1)',
      'limegreen-100': 'rgba(249, 252, 204, 1)',
      'limegreen-200': 'rgba(236, 243, 153, 1)',
      'limegreen-300': 'rgba(217, 227, 102, 1)',
      'limegreen-400': 'rgba(193, 203, 51, 1)',
      'limegreen-500': 'rgba(162, 173, 0, 1)',
      'limegreen-600': 'rgba(147, 158, 0, 1)',
      'limegreen-700': 'rgba(127, 137, 0, 1)',
      'limegreen-800': 'rgba(102, 110, 0, 1)',
      'limegreen-900': 'rgba(71, 78, 0, 1)',
      'orange-50': 'rgba(255, 249, 240, 1)',
      'orange-100': 'rgba(255, 236, 204, 1)',
      'orange-200': 'rgba(255, 215, 153, 1)',
      'orange-300': 'rgba(255, 193, 102, 1)',
      'orange-400': 'rgba(255, 170, 51, 1)',
      'orange-500': 'rgba(255, 145, 0, 1)',
      'orange-600': 'rgba(199, 115, 0, 1)',
      'orange-700': 'rgba(168, 100, 0, 1)',
      'orange-800': 'rgba(125, 76, 0, 1)',
      'orange-900': 'rgba(82, 51, 0, 1)',
      'purple-50': 'rgba(239, 236, 244, 1)',
      'purple-100': 'rgba(224, 216, 233, 1)',
      'purple-200': 'rgba(192, 178, 210, 1)',
      'purple-300': 'rgba(161, 141, 187, 1)',
      'purple-400': 'rgba(130, 105, 162, 1)',
      'purple-500': 'rgba(99, 70, 137, 1)',
      'purple-600': 'rgba(82, 56, 116, 1)',
      'purple-700': 'rgba(65, 43, 93, 1)',
      'purple-800': 'rgba(48, 31, 70, 1)',
      'purple-900': 'rgba(31, 20, 47, 1)'
    },
    screen: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px'
    },
    extend: {
      spacing: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '18': '4.5rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '05': '0.125rem',
        '1-alt': '0.375rem'
      },
      zIndex: {
        modal: '2000',
        popover: '1000',
        focus: '10',
        tooltip: '3000'
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(0, 52, 125, 1)',
        'focus-inverted': '0 0 0 3px rgba(153, 195, 255, 1)',
        xsmall:
          '0px 1px 3px 0px rgba(0, 0, 0, 0.15), 0px 0px 1px 0px rgba(0, 0, 0, 0.20)',
        small:
          '0px 3px 8px 0px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.18)',
        medium:
          '0px 5px 12px 0px rgba(0, 0, 0, 0.13), 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.15)',
        large:
          '0px 2px 5px 0px rgba(0, 0, 0, 0.15), 0px 10px 16px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.12)',
        xlarge:
          '0px 2px 5px 0px rgba(0, 0, 0, 0.15), 0px 10px 24px 0px rgba(0, 0, 0, 0.18), 0px 0px 1px 0px rgba(0, 0, 0, 0.08)'
      },
      fontWeight: {
        bold: '600',
        regular: '400'
      },
      fontSize: {
        'heading-2xlarge': '2.5rem',
        'heading-xlarge': '2rem',
        'heading-large': '1.75rem',
        'heading-medium': '1.5rem',
        'heading-small': '1.25rem',
        'heading-xsmall': '1.125rem',
        xlarge: '1.25rem',
        large: '1.125rem',
        medium: '1rem',
        small: '0.875rem'
      },
      lineHeight: {
        'heading-2xlarge': '3.25rem',
        'heading-xlarge': '2.5rem',
        'heading-large': '2.25rem',
        'heading-medium': '2rem',
        'heading-small': '1.75rem',
        'heading-xsmall': '1.5rem',
        xlarge: '1.75rem',
        large: '1.5rem',
        medium: '1.25rem'
      },
      fontFamily: {
        'font-family': "'Source Sans Pro', Arial, sans-serif"
      },
      borderRadius: {
        small: '2px',
        medium: '4px',
        large: '8px',
        xlarge: '12px',
        full: '9999px'
      },
      screens: {
        xl: '1200px',
        xxl: '1700px'
        // => @media (min-width: 992px) { ... }
      }
    }
  },
  screens: {
    xs: '480px',
    ss: '620px',
    sm: '768px',
    md: '1024px',
    lg: '1280px',
    xl: '1700px'
  },
  plugins: []
}

export default config
