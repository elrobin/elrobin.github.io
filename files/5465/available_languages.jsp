










AUI.add(
	'portal-available-languages',
	function(A) {
		var available = {};

		var direction = {};

		

			available['bg_BG'] = 'Bulgarian (Bulgaria)';
			direction['bg_BG'] = 'ltr';

		

			available['es_ES'] = 'Spanish (Spain)';
			direction['es_ES'] = 'ltr';

		

			available['cs_CZ'] = 'Czech (Czech Republic)';
			direction['cs_CZ'] = 'ltr';

		

			available['da_DK'] = 'Danish (Denmark)';
			direction['da_DK'] = 'ltr';

		

			available['de_DE'] = 'German (Germany)';
			direction['de_DE'] = 'ltr';

		

			available['et_EE'] = 'Estonian (Estonia)';
			direction['et_EE'] = 'ltr';

		

			available['el_GR'] = 'Greek (Greece)';
			direction['el_GR'] = 'ltr';

		

			available['en_GB'] = 'English (United Kingdom)';
			direction['en_GB'] = 'ltr';

		

			available['fr_FR'] = 'French (France)';
			direction['fr_FR'] = 'ltr';

		

			available['ga_IE'] = 'Irish (Ireland)';
			direction['ga_IE'] = 'ltr';

		

			available['hr_HR'] = 'Croatian (Croatia)';
			direction['hr_HR'] = 'ltr';

		

			available['it_IT'] = 'Italian (Italy)';
			direction['it_IT'] = 'ltr';

		

			available['lv_LV'] = 'Latvian (Latvia)';
			direction['lv_LV'] = 'ltr';

		

			available['lt_LT'] = 'Lithuanian (Lithuania)';
			direction['lt_LT'] = 'ltr';

		

			available['hu_HU'] = 'Hungarian (Hungary)';
			direction['hu_HU'] = 'ltr';

		

			available['mt_MT'] = 'Maltese (Malta)';
			direction['mt_MT'] = 'ltr';

		

			available['nl_NL'] = 'Dutch (Netherlands)';
			direction['nl_NL'] = 'ltr';

		

			available['pl_PL'] = 'Polish (Poland)';
			direction['pl_PL'] = 'ltr';

		

			available['pt_PT'] = 'Portuguese (Portugal)';
			direction['pt_PT'] = 'ltr';

		

			available['ro_RO'] = 'Romanian (Romania)';
			direction['ro_RO'] = 'ltr';

		

			available['sk_SK'] = 'Slovak (Slovakia)';
			direction['sk_SK'] = 'ltr';

		

			available['sl_SI'] = 'Slovenian (Slovenia)';
			direction['sl_SI'] = 'ltr';

		

			available['fi_FI'] = 'Finnish (Finland)';
			direction['fi_FI'] = 'ltr';

		

			available['sv_SE'] = 'Swedish (Sweden)';
			direction['sv_SE'] = 'ltr';

		

		Liferay.Language.available = available;
		Liferay.Language.direction = direction;
	},
	'',
	{
		requires: ['liferay-language']
	}
);