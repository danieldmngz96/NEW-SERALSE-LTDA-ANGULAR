import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Armenia', abbreviation: 'AR'},
    {name: 'Barrancabermeja', abbreviation: 'BR'},
    {name: 'Barranquilla', abbreviation: 'BRQ'},
    {name: 'Bogotá', abbreviation: 'BG'},
    {name: 'Bucaramanga', abbreviation: 'BCR'},
    {name: 'California', abbreviation: 'CA'},
    {name: 'Colorado', abbreviation: 'CO'},
    {name: 'Buga', abbreviation: 'BG'},
    {name: 'Cali', abbreviation: 'CL'},
    {name: 'Cartagena', abbreviation: 'CR'},
    {name: 'Chía', abbreviation: 'CH'},
    {name: 'Cúcuta', abbreviation: 'CC'},
    {name: 'Duitama', abbreviation: 'DT'},
    {name: 'Florencia', abbreviation: 'FL'},
    {name: 'Fusagasugá', abbreviation: 'FS'},
    {name: 'Girardot', abbreviation: 'GR'},
    {name: 'Honda', abbreviation: 'HD'},
    {name: 'Indiana', abbreviation: 'IN'},
    {name: 'Ibagué', abbreviation: 'IA'},
    {name: 'Ipiales', abbreviation: 'IP'},
    {name: 'Jamundí', abbreviation: 'JM'},
    {name: 'Leticia', abbreviation: 'LT'},
    {name: 'Manizales', abbreviation: 'MN'},
    {name: 'Mariquita', abbreviation: 'MR'},
    {name: 'Medellín', abbreviation: 'MD'},
    {name: 'Massachusetts', abbreviation: 'MA'},
    {name: 'Mompox', abbreviation: 'MP'},
    {name: 'Montería', abbreviation: 'MN'},
    {name: 'Murillo', abbreviation: 'MR'},
    {name: 'Missouri', abbreviation: 'MO'},
    {name: 'Neiva', abbreviation: 'NV'},
    {name: 'Pamplona', abbreviation: 'PM'},
    {name: 'Nevada', abbreviation: 'NV'},
    {name: 'Pasto', abbreviation: 'PS'},
    {name: 'Pereira', abbreviation: 'PR'},
    {name: 'Popayán', abbreviation: 'PP'},
    {name: 'Riohacha', abbreviation: 'RH'},
    {name: 'North Carolina', abbreviation: 'NC'},
    {name: 'San Andrés y Providencia', abbreviation: 'SN'},
    {name: 'San Antero', abbreviation: 'ST'},
    {name: 'Santa Marta', abbreviation: 'SM'},
    {name: 'Santafé de Antioquia', abbreviation: 'SQ'},
    {name: 'Sevilla', abbreviation: 'SV'},
    {name: 'Sincelejo	', abbreviation: 'SC'},
    {name: 'Sogamoso', abbreviation: 'SG'},
    {name: 'Tabio', abbreviation: 'TB'},
    {name: 'Tocancipá', abbreviation: 'TC'},
    {name: 'Tolú', abbreviation: 'TL'},
    {name: 'Tuluá', abbreviation: 'TUU'},
    {name: 'Tumaco', abbreviation: 'TM'},
    {name: 'Tunja', abbreviation: 'TJ'},
    {name: 'Valledupar', abbreviation: 'VD'},
    {name: 'Villavicencio', abbreviation: 'VL'},
    {name: 'Yopal', abbreviation: 'YP'},
    {name: 'Zipaquirá', abbreviation: 'ZQ'}
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
