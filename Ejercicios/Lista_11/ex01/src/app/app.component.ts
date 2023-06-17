import { Component } from '@angular/core';
import Producto from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex01';

  public productos: Producto[] = new Array<Producto>();

  constructor(){
    this.productos.push(new Producto("Torta Matilda", "La mejor torta de chocolate", "https://mui.kitchen/__export/1678825255747/sites/muikitchen/img/2023/03/14/17_c.jpg_557888218.jpg", 2200 ));
    this.productos.push(new Producto("Cheesecake Oreo", "La mejor torta helada para días de calor", "https://i.ytimg.com/vi/XS6BzxX2R0Y/maxresdefault.jpg", 3000));
    this.productos.push(new Producto("Torta de ricota", "Un clásico para deleitar al paladar", "https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/YCE6RIGIT5GWXE2UOTGDOZM4GI.jpg", 1350));
    this.productos.push(new Producto("Chocotorta", "Clásica torta Argentina que les encanta a todos/as", "https://cocinaabuenashoras.com/files/chocotorta-tarta-de-galletas-y-dulce-de-leche.jpg", 1600 ));

    console.log(this.productos)
  }
}
