import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { defaultPalette } from "./customPalettes";
import { defaultTheme } from "./defultTheme";

type CustomThemeProviderProps = { children: React.ReactNode };

const palette = {
	default: defaultPalette,
};

const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
	let theme = createTheme({
		palette: palette.default,
		...defaultTheme,
		components: {
			...defaultTheme.components,
		},
	});

	theme = responsiveFontSizes(theme);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</LocalizationProvider>
	);
};

export default CustomThemeProvider;
