import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


    constructor(
        private activeRoute: ActivatedRoute,
        private navegador: Router
    ) {
        // Recuperando parâmetro via rota
        // http://localhost:4200/portfolio/{1}
        this.activeRoute.params.subscribe(
            res => console.log(res)
        )

        // Recupera o id mesmo quando passamos um parametro de token
        this.activeRoute.firstChild?.params.subscribe(
            res => console.log(res)
        )

        // http://localhost:4200/portfolio/1?{name=gustavo&token=123}
        this.activeRoute.queryParams.subscribe(
            res => console.log(res)
        )
    }

    ngOnInit(): void {
        // Após um intervalo de tempo ele volta para a página definida
        // setInterval(() =>{
        //     this.navegador.navigate(['/'])
        // }, 5000)
    }

}
