// ==UserScript==
// @name            Pardus Squad Commander
// @version         0.1.0
// @description     Squad scripts
// @author          Tro (Artemis)
// @icon            https://static.pardus.at/img/stdhq/squadrons/fighter_squad_1.png
// @match           http*://*.pardus.at/squad_main.php*
// @match           http*://*.pardus.at/ship2opponent_combat.php*
// @match           http*://*.pardus.at/options.php
// @grant           GM_setValue
// @grant           GM_getValue
// @require         https://raw.githubusercontent.com/Tro95/Pardus-Options-Library/v2.6.0/dist/pardus-options-library.js
// @require         https://raw.githubusercontent.com/Tro95/Pardus-Flight-Computer/v0.1.0/pages/options.js
// @require         https://raw.githubusercontent.com/Tro95/Pardus-Flight-Computer/v0.1.0/pages/main.js
// @require         https://raw.githubusercontent.com/Tro95/Pardus-Flight-Computer/v0.1.0/pages/squad_combat.js
// @downloadURL     https://github.com/Tro95/Pardus-Squad-Commander/raw/main/pardus_squad_commander.user.js
// @updateURL       https://github.com/Tro95/Pardus-Squad-Commander/raw/main/pardus_squad_commander.meta.js
// ==/UserScript==

/* global OptionsPage, SquadMainPage, SquadCombat */

switch (document.location.pathname) {
    case '/options.php':
        new OptionsPage();
        break;
    case '/squad_main.php':
        new SquadMainPage();
        break;
    case '/squad2squad_combat.php':
        new SquadCombat();
        break;
}