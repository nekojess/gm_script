// ==UserScript==
// @name           Google 2-Step Distrust
// @namespace      femtobit.org
// @author         Jessica Creighton
// @include        https://accounts.google.com/SecondFactor*
// @include        https://accounts.google.com/signin/challenge*
// @downloadURL    https://raw.githubusercontent.com/nekojess/gm_scripts/master/google_2step_distrust.user.js
// @description    Stop Google 2-Step login defaulting to trusting the computer
// @version        0.3.5
// ==/UserScript==
(function () {
	disableTrust = function() {
		var elm = document.getElementById('trustDevice');
		if (!elm) { 
			elm = document.getElementById('PersistentCookie');
		}
		if (elm) {
			elm.checked = false;
		} else {
			setTimeout(disableTrust, 50);
		}
	}
	disableTrust();
})();
