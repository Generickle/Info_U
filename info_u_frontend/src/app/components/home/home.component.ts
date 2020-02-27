import { Component, OnInit, HostListener } from '@angular/core';
import { ItemI } from 'src/app/shared/models/item.interface';
import { Observable } from 'rxjs';
import { GetDataService } from 'src/app/shared/services/get-data.service';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "autoplay": true,
    "autoplaySpeed": 2000
  };

  public zoomEnabled: boolean;
  public carousel$: Observable<ItemI[]>;
  public title = 'Info U';
  public description = `Info U es el sitio ideal para informarte, motivarte y darte cuenta de que lo puedes lograr.
  \nAquí podrás encontrar todo tipo de información de interés para guíarte y darte cuenta que la eduación superior en Guatemala sí es posible.
  \nSolo se necesita dedicación.`
  public question = `¿Entonces cómo voy a la U?`;
  
  //images
  public down_arrow = 'https://firebasestorage.googleapis.com/v0/b/info-u-gt.appspot.com/o/general%2Farrow_down.png?alt=media&token=6b39f833-dcb8-4747-a744-2f37972809d1';

  constructor(private itemSvc: GetDataService) { }

  ngOnInit() {
    this.carousel$ = this.itemSvc.getCarousel();
    if(window.innerWidth <= 500){
      this.zoomEnabled = true;
    }else{
      this.zoomEnabled = false;
    }
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth <= 500){
      this.zoomEnabled = true;
    }else{
      this.zoomEnabled = false;
    }
  }

  lottie_options: AnimationOptions = {
    path: 'https://assets6.lottiefiles.com/packages/lf20_uzoyW6.json'
  };
}