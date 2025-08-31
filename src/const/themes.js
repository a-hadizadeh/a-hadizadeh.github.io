export const themes = {
	home: {
		choice: 1,
		subtheme: [
			{// 0
				palette: [
					"#EEE2DE",
					"#EA906C",
					"#B31312",
					"#2B2A4C"
				],
			},
			{// 1
				palette: [
					"#EEE2DE",
					"#B58876",
					"#913535",
					"#283148"
				],
			},
			{// 2
				palette: [
					"#EEE2DE",
					"#EA906C",
					"#913535",
					"#2B2A4C"
				],
			},
		],
	},
	retro: {
		choice: 0,
		subtheme: [
			{// 0
				palette: [
					"#E9E3DF",
					"#FF7A30",
					"#465C88",
					"#000000"
				],
			},
		],
	},
	book: {
		choice: 0,
		subtheme: [
			{// 0
				palette: [
					"#E3CCAE",
					"#B8621B",
					"#262A56",
					"#000000"
				],
			},
		],
	},
	social: {
		choice: 0,
		subtheme: [
			{// 0
				palette: [
					"#DCD7C9",
					"#A27B5C",
					"#3F4F44",
					"#2C3930"
				],
			},
		],
	},
	dead: {
		choice: 0,
		subtheme: [
			{// 0
				palette: [
					"#DDE6ED",
					"#9DB2BF",
					"#526D82",
					"#27374D"
				],
			},
		],
	},
}

function css_propval(prop, val) {
	return prop + ': ' + val + ';';
}
export function palette_use(palette, use) {
	const color0 = palette[0];
	const color1 = palette[1];
	const color2 = palette[2];
	const color3 = palette[3];
	if (use === 0) {
		return	css_propval('border-color', color0) +
				css_propval('background-color', color0) + 
				css_propval('color', color3);
	}
	if (use === 1) {
		return	css_propval('border-color', color1) +
				css_propval('background-color', color1) + 
				css_propval('color', color3);
	}
	if (use === 2) {
		return	css_propval('border-color', color2) +
				css_propval('background-color', color2) + 
				css_propval('color', color0);
	}
	if (use === 3) {
		return	css_propval('border-color', color3) +
				css_propval('background-color', color3) + 
				css_propval('color', color0);
	}
}
