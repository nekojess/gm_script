// ==UserScript==
// @name           Pastie Private Default
// @namespace      femtobit.org
// @author         Jessica Creighton
// @include        http://www.pastie.org/
// @include        http://pastie.org/
// @downloadURL    https://raw.githubusercontent.com/nekojess/gm_scripts/master/pastie_private_default.user.js
// @description    Make new pastes on Pastie be private by default
// @version        0.1.0
// ==/UserScript==
(
		function() {
				window.addEventListener(
						'load',
						function() {
								var elm = document.getElementById('paste_restricted');
								if (elm) { elm.click(); }
						},
						true
				);
		}
)();
