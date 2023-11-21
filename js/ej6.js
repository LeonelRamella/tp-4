class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this.ISBN = ISBN;
      this.titulo = titulo;
      this.autor = autor;
      this.numPaginas = numPaginas;
    }
  
    get getISBN() {
      return this.ISBN;
    }
  
    set setISBN(nuevoISBN) {
      this.ISBN = nuevoISBN;
    }
  
    get getTitulo() {
      return this.titulo;
    }
  
    set setTtitulo(nuevoTitulo) {
      this.titulo = nuevoTitulo;
    }
  
    get getAutor() {
      return this.autor;
    }
  
    set setAutor(nuevoAutor) {
      this.autor = nuevoAutor;
    }
  
    get getNumPaginas() {
      return this.numPaginas;
    }
  
    set setNumPaginas(nuevoNumPaginas) {
      this.numPaginas = nuevoNumPaginas;
    }
  
    mostrarLibro() {
      document.write(
        "<p>El libro " + this.getTitulo + " con ISBN " + this.getISBN + " creado por el autor " + this.getAutor + " y tiene " + this.getNumPaginas+ " páginas.</p>"
      );
    }
  }
  
  const libro1 = new Libro(
    9789500125444,
    "El Familiar",
    "Emilio Saad",
    parseInt("176 ")
  );
  
  const libro2 = new Libro(
    9788498381498,
    "El Principito",
    "Antoine de Saint-Exupéry",
    parseInt("96")
  );
  
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
  if (libro1.getNumPaginas > libro2.getNumPaginas) {
    document.write(
      "<p>El libro con mas páginas es " + libro1.getTitulo + " con ISBN " + libro1.ISBN + " que tiene " + libro1.numPaginas + " páginas.</p>"
    );
  } else if (libro1.getNumPaginas < libro2.getNumPaginas) {
    document.write(
      "<p>El libro con mas páginas es " + libro2.getTitulo + " con ISBN " + libro2.ISBN + " que tiene " + libro2.numPaginas + " páginas.</p>"
    );
  } else if (libro1.getNumPaginas === libro2.getNumPaginas) {
    document.write("<p>Ambos libros poseen la misma cantidad de páginas</p>");
  }