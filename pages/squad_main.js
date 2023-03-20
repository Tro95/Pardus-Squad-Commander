/* global PardusOptions, PardusOptionsUtility */

class SquadMainPage {

    constructor() {
        this.run()
    }

    run() {
        const squad_table = document.querySelector('#yourship table');

        this._addAggregateShipStats(squad_table);
    }

    _getColour(quantity, max) {
        const proportion = quantity / max;

        if (proportion >= 0.75) {
            return 'color:green';
        }

        if (proportion < 0.25) {
            return 'color:red';
        }

        return 'color:yellow';
    }

    _getArmourStrength(max_armour) {
        if (max_armour === 225) {
            return 3;
        }

        if (max_armour === 660) {
            return 4;
        }

        return 0;
    }

    _addAggregateShipStats(table) {

        const data = [];
        const max_hull = parseInt(table.rows[1].cells[1].innerText);
        const max_armour = parseInt(table.rows[1].cells[2].innerText);
        const max_shield = parseInt(table.rows[1].cells[3].innerText);
        let total_ships = 0;
        let total_hull = 0;
        let total_armour = 0;
        let total_shields = 0;

        for (const row of Array.from(table.rows).splice(4)) {

            const ship_number = parseInt(row.cells[0].innerText);
            const hull = parseInt(row.cells[1].innerText);
            const armour = parseInt(row.cells[2].innerText);
            const shield = parseInt(row.cells[3].innerText);

            data.push({
                ship: ship_number,
                hull,
                armour,
                shield
            });

            total_ships++;
            total_hull += hull;
            total_armour += armour;
            total_shields += shield;
        }

        let row_inserts = 0;

        if (PardusOptionsUtility.getVariableValue('total_stats_on_nav', true)) {
            const total_header_row = table.insertRow(row_inserts++);
            total_header_row.innerHTML = '<th colspan="4">TOTAL</th>';

            if (PardusOptionsUtility.getVariableValue('total_combined_stats', true)) {
                const total_combined_stats_row = table.insertRow(row_inserts++);
                const total_health_description_cell = total_combined_stats_row.insertCell();
                total_health_description_cell.innerText = 'Total health:'
                total_health_description_cell.setAttribute('colspan', '2');
                const total_combined_stats_cell = total_combined_stats_row.insertCell();
                total_combined_stats_cell.innerHTML = '<b>' + (total_hull + (total_armour * this._getArmourStrength(max_armour)) + total_shields) + '</b>';
                total_combined_stats_cell.setAttribute('align', 'center');
                total_combined_stats_cell.setAttribute('colspan', '2');
                total_combined_stats_cell.setAttribute('style', this._getColour((total_hull + (total_armour * this._getArmourStrength(max_armour)) + total_shields), (max_hull + (max_armour * this._getArmourStrength(max_armour)) + max_shield) * 100));               
            }

            if (PardusOptionsUtility.getVariableValue('total_distinct_stats', true)) {
                const total_distinct_stats_row = table.insertRow(row_inserts++);
                total_distinct_stats_row.insertCell();

                const total_hull_cell = total_distinct_stats_row.insertCell();
                total_hull_cell.innerText = total_hull;
                total_hull_cell.setAttribute('align', 'right');
                total_hull_cell.setAttribute('style', this._getColour(total_hull, max_hull * 100));

                const total_armour_cell = total_distinct_stats_row.insertCell();
                total_armour_cell.innerText = total_armour;
                total_armour_cell.setAttribute('align', 'right');
                total_armour_cell.setAttribute('style', this._getColour(total_armour, max_armour * 100));

                const total_shields_cell = total_distinct_stats_row.insertCell();
                total_shields_cell.innerText = total_shields;
                total_shields_cell.setAttribute('align', 'right');
                total_shields_cell.setAttribute('style', this._getColour(total_shields, max_shield * 100));
            }
        }

        if (PardusOptionsUtility.getVariableValue('average_stats_on_nav', true)) {
            const average_header_row = table.insertRow(row_inserts++);
            const average_stats_row = table.insertRow(row_inserts++);

            average_header_row.innerHTML = '<th colspan="4">AVERAGE</th>';
            average_stats_row.insertCell();

            const average_hull_cell = average_stats_row.insertCell();
            average_hull_cell.innerText = Math.round(total_hull / total_ships);
            average_hull_cell.setAttribute('align', 'right');
            average_hull_cell.setAttribute('style', this._getColour(Math.round(total_hull / total_ships), max_hull));

            const average_armour_cell = average_stats_row.insertCell();
            average_armour_cell.innerText = Math.round(total_armour / total_ships);
            average_armour_cell.setAttribute('align', 'right');
            average_armour_cell.setAttribute('style', this._getColour(Math.round(total_armour / total_ships), max_armour));

            const average_shields_cell = average_stats_row.insertCell();
            average_shields_cell.innerText = Math.round(total_shields / total_ships);
            average_shields_cell.setAttribute('align', 'right');
            average_shields_cell.setAttribute('style', this._getColour(Math.round(total_shields / total_ships), max_shield));
        }
    }

}