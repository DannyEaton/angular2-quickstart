/**
 * Created by Daniel Eaton on 11/7/2016.
 */
import {Component} from "@angular/core";

@Component({
	selector: 'quickstart-app',
	templateUrl: './templates/diceware-app.php'
})

export class AppComponent {
	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}
}