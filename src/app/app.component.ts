import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  titulo = 'Generar PDF con Angular JS 5';
  imagen1 = 'assets/img/tc.jpg';
  imagen2 = 'assets/img/pm.jpg';
  imagen3 = 'assets/img/al.jpg';

  	generarPDF(){
	    html2canvas(document.getElementById('contenido'), {
        allowTaint: true,
        useCORS: false,
        scale: 1
      }).then(function(canvas) {
		    var img = canvas.toDataURL("image/png");
		    var doc = new jsPDF();
		    doc.addImage(img,'PNG',7, 20, 195, 105);
		    doc.save('postres.pdf');
	    });
  	}

}
