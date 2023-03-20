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
        const stats_box = subtab.addBox({
            heading: 'Aggregate statistics',
            description: 'Settings for aggregated statistics about squads on various pages.'
        });

        stats_box.addBooleanOption({
            variable: 'average_stats_on_nav',
            description: 'Enable average stats on nav',
            defaultValue: true
        });

        stats_box.addBooleanOption({
            variable: 'average_stats_on_combat',
            description: 'Enable average stats on nav',
            defaultValue: true
        });

        stats_box.addBooleanOption({
            variable: 'total_stats_on_nav',
            description: 'Enable average stats on nav',
            defaultValue: true
        });

        stats_box.addBooleanOption({
            variable: 'total_stats_on_combat',
            description: 'Enable average stats on nav',
            defaultValue: true
        });
    }
}