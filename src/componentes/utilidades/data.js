const productos = [
    {
        id: "1dfhrns",
        nombre: "Perfume",
        precio: 5000,
        descripcion: "Perfume con aroma colirio",
        imagen: "../img/spray.svg",
        categoria: "perfumes"
      },
      {
        id: "2zdvrb",
        nombre: "Aromatizante",
        precio: 2000,
        descripcion: "Aromatizador de ambientes con esencia de lavanda",
        imagen: "../img/aromatizante.svg",
        categoria: "perfumes"
      },
      {
        id: "3fhbn",
        nombre: "Desengrasante",
        precio: 5000,
        descripcion: "Remueve aceite impregnado eficientemente",
        imagen: "../img/desengrasante.svg",
        categoria: "jabones",
      },
    {
        id: "4hntrc",
        nombre: "Jabón",
        precio: 2000,
        descripcion: "Jabon neutro sin aditivos extras",
        imagen: "../img/jabon.svg",
        categoria: "jabones"
      },
      {
        id: "5agerg",
        nombre: "Limpiatapizados",
        precio: 5000,
        descripcion: "Producto para lavar sillones y butacas",
        imagen: "../img/limpiatapizados.svg",
        categoria: "jabones"
      },
      {
        id: "6srtyj",
        nombre: "Desinfectante",
        precio: 8000,
        descripcion: "Spray 300cc que elimina el 99,9% de bacterias",
        imagen: "../img/desinfectante.svg",
        categoria: "jabones"
      },
      {
        id: "7strh",
        nombre: "Cepillo",
        precio: 2000,
        descripcion: "Cepillo de mano muy resistente",
        imagen: "../img/cepillo.svg",
        categoria: "cepillos"
      },
      {
        id: "8tyj",
        nombre: "Aspiradora",
        precio: 15000,
        descripcion: "Aspiradora de polvo y agua para lavar tapizados",
        imagen: "../img/aspiradora.svg",
        categoria: "aspiradoras"
      },
      {
        id: "9ndgh",
        nombre: "Quitamanchas",
        precio: 5000,
        descripcion: "Remueve todo tipo de manchas en telas",
        imagen: "../img/quitamanchas.svg",
        categoria: "jabones"
      },

  ];
  
  const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
  
  export default obtenerProductos