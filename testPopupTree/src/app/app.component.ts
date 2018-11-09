import {Component, enableProdMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DxPopoverModule, DxTemplateModule} from 'devextreme-angular';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'PopUp';

    public target = 'link4';
    public array1deCheckbox: any[] = [
        {id: 'MexicoLoco1', texto: 'Chimichangas fritas con guacamole'},
        {id: 'MexicoLoco2', texto: 'Tacos'},
        {id: 'MexicoLoco3', texto: 'Burritos'},
        {id: 'MexicoLoco4', texto: 'Enchiladas'},
        {id: 'MexicoLoco5', texto: 'Chinchulin'},
        {id: 'MexicoLoco6', texto: '¡Ayayayayay!'}
    ];
    public array2deCheckbox = [
        {id: 'au1', texto: 'Austin Powers'},
        {id: 'au2', texto: 'Doctor Maligno'},
        {id: 'au3', texto: 'Gordo Cabrón'},
        {id: 'au4', texto: 'Mini Yo'},
        {id: 'au5', texto: 'Agente Kensinton'},
        {id: 'au6', texto: '¡Fembots!'},
        {id: 'au7', texto: 'Scot Maligno'},
    ];
    public array3deCheckbox = [
        {id: 'music1', texto: 'AC/DC'},
        {id: 'music2', texto: 'Queen'},
        {id: 'music3', texto: 'ZZTop'},
        {id: 'music4', texto: 'Kiss'},
        {id: 'music5', texto: 'Iron Maiden'},
    ];

    defaultVisible: boolean;
    withTitleVisible: boolean;
    withAnimationOptionsVisible: boolean;
    withShadingOptionsVisible: boolean;

    constructor() {
        this.defaultVisible = false;
        this.withTitleVisible = false;
        this.withAnimationOptionsVisible = false;
        this.withShadingOptionsVisible = false;
    }

    public toggleWithShadingOptions(input) {
        this.withShadingOptionsVisible = !this.withShadingOptionsVisible;
        // force focus out (blur)
        input.blur();
    }

    public completeInput(checkbox) {
        checkbox.selected = !checkbox.selected;
    }

    get checkvalues() {
        const selected = [];
        this.array1deCheckbox.map(checkbox =>  {
            if (checkbox.selected) {
                selected.push(checkbox.texto);
            }
        });
        return selected.join(',');
    }
}
