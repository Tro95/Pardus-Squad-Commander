/* global PardusOptions, PardusOptionsUtility */

class OptionsPage {

    constructor() {
        this.pardus_squad_commander_tab = PardusOptions.addTab({
            heading: 'Squad Commander',
            id: 'squad-commander',
            defaultLabel: 'Aggregate statistics'
        });

        this.generalOptions(this.pardus_squad_commander_tab);

        this.pardus_squad_commander_tab.refreshElement();
    }

    generalOptions(subtab) {
        subtab.addBoxTop({
            heading: 'Aggregate statistics',
            description: 'Settings for aggregated statistics about squads on various pages.'
        });

        const nav_box = subtab.addBox({
            heading: 'Nav page',
            description: 'Nav page-specific options.'
        });

        nav_box.addBooleanOption({
            variable: 'average_stats_on_nav',
            description: 'Enable average stats',
            defaultValue: true
        });

        nav_box.addBooleanOption({
            variable: 'total_stats_on_nav',
            description: 'Enable total stats',
            defaultValue: true
        });

        const combat_box = subtab.addBox({
            heading: 'Combat page',
            description: 'Combat page-specific options.'
        });

        combat_box.addBooleanOption({
            variable: 'average_stats_on_combat',
            description: 'Enable average stats',
            defaultValue: true
        });

        combat_box.addBooleanOption({
            variable: 'total_stats_on_combat',
            description: 'Enable average stats on nav',
            defaultValue: true
        });

        const total_box = subtab.addBox({
            heading: 'Total stats',
            description: 'Settings to control statistics shown for the total squads'
        });

        combat_box.addBooleanOption({
            variable: 'total_distinct_stats',
            description: 'Enable distinct totals',
            defaultValue: true
        });

        combat_box.addBooleanOption({
            variable: 'total_combined_stats',
            description: 'Enable combined totals',
            defaultValue: true
        });
    }
}