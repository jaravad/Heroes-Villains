import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  //private hero:any[]=
  private hero: Hero[] = [
    {
      nombre: 'Aquaman',
      bio:
        'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/aquaman.png',
      aparicion: '1941-11-01',
      casa: 'DC',
    },
    {
      nombre: 'Batman',
      bio:
        'Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.',
      img: 'assets/img/batman.png',
      aparicion: '1939-05-01',
      casa: 'DC',
    },
    {
      nombre: 'Daredevil',
      bio:
        'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede "ver" a través de un "sexto sentido" que le sirve como un radar similar al de los murciélagos.',
      img: 'assets/img/daredevil.png',
      aparicion: '1964-01-01',
      casa: 'Marvel',
    },
    {
      nombre: 'Hulk',
      bio:
        'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).',
      img: 'assets/img/hulk.png',
      aparicion: '1962-05-01',
      casa: 'Marvel',
    },
    {
      nombre: 'Linterna Verde',
      bio:
        'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
      img: 'assets/img/linterna-verde.png',
      aparicion: '1940-06-01',
      casa: 'DC',
    },
    {
      nombre: 'Spider-Man',
      bio:
        'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un "sentido arácnido", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
      img: 'assets/img/spiderman.png',
      aparicion: '1962-08-01',
      casa: 'Marvel',
    },
    {
      nombre: 'Wolverine',
      bio:
        'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.',
      img: 'assets/img/wolverine.png',
      aparicion: '1974-11-01',
      casa: 'Marvel',
    },
  ];

  private villains: Hero[] = [
    {
      nombre: 'Guason',
      bio:
        'Es uno de los criminales más notables de Gotham City, y es el enemigo principal de Batman. Aunque carece de habilidades sobrehumanas para llevar a cabo sus crímenes, suele recurrir a su ingenio para desarrollar armas y dispositivos letales entre los cuales se encuentran barajas con navajas, cajas sorpresas, explosivos en forma de cigarrillos y objetos rociadores de ácido.',
      img: 'assets/img/joker.png',
      aparicion: '1940-01',
      casa: 'DC',
    },
    {
      nombre: 'Bane',
      bio:
        'Bane es un convicto fugitivo de una isla prisión en América del Sur y un súper villano / asesino. Bane tiene una fuerza física anormal como resultado de haber participado en experimentos con un derivado del medicamento Venom.',
      img: 'assets/img/bane.png',
      aparicion: '1993-01',
      casa: 'DC',
    },
    {
      nombre: 'Loki',
      bio:
        'Es conocido como el Dios de las Mentiras o el Dios de las Travesuras, y es uno de los supercriminales más infames y temerosos del Universo Marvel. Es el hijo adoptivo de Odin y Nemesis, así como el hermano adoptivo de Thor.',
      img: 'assets/img/loki.png',
      aparicion: '1962-10',
      casa: 'Marvel',
    },
    {
      nombre: 'Thanos',
      bio:
        'Thanos fue un señor de la guerra y genocida de Titán, cuyo objetivo principal era traer estabilidad al universo, ya que creía que su enorme población inevitablemente agotaría todo el suministro de recursos disponibles y eso condenaría a las especies a morir.',
      img: 'assets/img/thanos.png',
      aparicion: '1973-02',
      casa: 'Marvel',
    },
    {
      nombre: 'Mysterio',
      bio:
        'Su nombre real es Quentin Beck, diseñador de efectos visuales que trabaja en Hollywood y que decide convertirse en criminal después de que no consiguiese labrarse una carrera en la industria del cine, ni como diseñador ni tampoco como actor.',
      img: 'assets/img/mysterio.png',
      aparicion: '1964-06',
      casa: 'Marvel',
    },
    {
      nombre: 'Espantapájaros',
      bio:
        'Dr. Jonathan Crane, también conocido como El Espantapájaros es un ex profesor de psicología demasiado obsesivo y trastornado que usa una variedad de drogas y tácticas psicológicas para aumentar los miedos y fobias de sus adversarios.',
      img: 'assets/img/espantapajaros.png',
      aparicion: '1941-09',
      casa: 'DC',
    },
  ];

  private everything = this.hero.concat(this.villains);

  constructor() {
    console.log('Servicio listo para usar!!');
  }

  //getHeros(){
  getHeros(): Hero[] {
    return this.hero;
  }

  getVillains(): Hero[] {
    return this.villains;
  }

  getCharacter(id: string) {
    let i: number = 0;
    this.everything.forEach((h, index) => {
      if (id === h.nombre) {
        i = index;
        console.log(typeof h);
        return h;
      }
    });
    return this.everything[i];
  }

  buscarHeroe(palabra: string): Hero[] {
    let heroArr: Hero[] = [];
    palabra = palabra.toLowerCase();
    for (let x of this.everything) {
      let nombre = x.nombre.toLowerCase();
      if (nombre.indexOf(palabra) >= 0) {
        heroArr.push(x);
      }
    }
    return heroArr;
  }
}

export interface Hero {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
