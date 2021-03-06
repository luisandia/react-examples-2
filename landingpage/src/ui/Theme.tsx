import { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

import {
  ColorPartial,
  CommonColors,
  Palette,
  PaletteOptions
} from '@material-ui/core/styles/createPalette';
import {
  Typography,
  TypographyOptions,
  TypographyStyle
} from '@material-ui/core/styles/createTypography';

interface CustomThemeColors extends ColorPartial {
  blue: string;
  orange: string;
}

export interface IPalette extends PaletteOptions {
  common?: Partial<CommonColors & CustomThemeColors>;
}
export interface ITypography extends TypographyOptions {
  tab: TypographyStyle;
  estimate: TypographyStyle;
  learnButton: TypographyStyle;
}

export interface ITheme extends Theme {
  palette: Palette & IPalette;
  typography: Typography & ITypography;
}

export interface IThemeOptions extends ThemeOptions {
  palette: IPalette;
  typography: ITypography;
}

export function createMyTheme(options: IThemeOptions) {
  return createMuiTheme({
    ...options,
  });
}

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGrey = '#868686';

const mainTheme = createMyTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      color: 'white',
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: arcBlue,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: arcBlue,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: 'Raleway',
      color: arcBlue,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: 'white',
      fontWeight: 300,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1.25rem',
      color: arcGrey,
      fontWeight: 300,
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
      color: arcGrey,
    },
    learnButton: {
      borderColor: arcBlue,
      borderWidth: 2,
      textTransform: 'none',
      color: arcBlue,
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: '1rem',
      },
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${arcBlue}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${arcBlue}`,
        },
      },
    },
  },
});

// export type mainThemeType = ReturnType<typeof mainTheme>;
export default mainTheme;
