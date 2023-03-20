/* global PardusOptions, PardusOptionsUtility, colours, mapper_urls_from_route */

class OptionsPage {

    constructor() {
        this.pardus_squad_commander_tab = PardusOptions.addTab({
            heading: 'Squad Commander',
            id: 'squad-commander',
        });

        this.generalOptions(this.pardus_squad_commander_tab);

        this.pardus_squad_commander_tab.refreshElement();
    }

    generalOptions(subtab) {
        const average_stats_on_nav = subtab.addBox({
            heading: 'Aggregate statistics',
            description: 'Settings for aggregated statistics about squads on various pages.'
        });

        average_stats_on_nav.addBooleanOption({
            variable: 'average_stats_on_nav',
            description: 'Enable average stats on nav',
            defaultValue: true
        });

        average_stats_on_combat.addBooleanOption({
            variable: 'average_stats_on_combat',
            description: 'Enable average stats on nav',
            defaultValue: true
        });

        total_stats_on_nav.addBooleanOption({
            variable: 'total_stats_on_nav',
            description: 'Enable average stats on nav',
            defaultValue: true
        });

        total_stats_on_combat.addBooleanOption({
            variable: 'total_stats_on_combat',
            description: 'Enable average stats on nav',
            defaultValue: true
        });
    }
}