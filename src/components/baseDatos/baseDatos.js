import hombre from "../../assets/portadas/seeuh.jpg"
import ninos from "../../assets/portadas/eun.jpg"
import rayuela from "../../assets/portadas/r.jpg"
import critica from "../../assets/portadas/crp.jpg"
import parade from "../../assets/portadas/pd.jpg"
import tiempo from "../../assets/portadas/bht.jpg"
import homegoing from "../../assets/portadas/hg.jpg"
import metafisica from "../../assets/portadas/mt.jpg"
import habitacion from "../../assets/portadas/uhp.jpg"
import diario from "../../assets/portadas/af.jpg"
import vivir from "../../assets/portadas/vpc.jpg"
import principe from "../../assets/portadas/ep.jpg"
import matilda from "../../assets/portadas/m.jpg"
import peter from "../../assets/portadas/ppn.jpg"
import reino from "../../assets/portadas/rdr.jpg"
import principito from "../../assets/portadas/pp.jpg"


export const libros = [
    { id: 1, title: "Rayuela", author: "Julio Cortazar", imagen: rayuela, price: 30 , description: "Horacio Oliveira es el protagonista de esta novela que pone en juego la subjetividad del lector y brinda múltiples finales. Comúnmente conocida como antinovela, y señalada por el propio Cortázar como contranovela.",categoria: "ficcion", stock: 20 },
    { id: 2, title: "Parade", author: "Hiromi Kawakami", imagen: parade, price: 30 , description: "Unas misteriosas criaturas del folklore japonés acompañan a una niña durante una época difícil en esta dulce y original historia  de Kawakami." , categoria: "ficcion", stock: 20 },
    { id: 3, title: "Homegoing", author: "Yaa Gyasi", imagen: homegoing, price: 30 , description:"Homegoing nos cuenta, a manera de una compilación de historias cortas sobre distintos personajes, las vidas de varias generaciones descendientes de dos medio-hermanas de la tribu Asante, de lo que hoy en día es Ghana." ,categoria: "ficcion", stock: 20 },
    { id: 4, title: "Metafísica de los tubos", author: "Amelie Nothomb", price: 30 , imagen: metafisica, description:"Metafísica de los tubos cuenta los primeros tres años de vida de un ser obsesionado por el agua que, disconforme con su entorno, adopta la inerte forma de tubo como condición existencial." ,categoria: "ficcion", stock: 20 },
    { id: 5, title: "Eramos unos niños", author: "Patti Smith", imagen: ninos,  price: 30 , description: "El libro icónico de Patti Smith, en el que cuenta su relación con Robert Mapplethorpe: un homenaje a la amistad cuyas páginas cargadas de vitalidad y humor nos devuelven el sabor de un Nueva York donde casi todo era posible." , categoria: "noficcion", stock: 20 },
    { id: 6, title: "Si esto es un hombre", author: "Primo Levi", imagen: hombre,  price: 30 , description:"Si esto es un hombre es el relato de Primo Levi y sus compañeros deportados a un campo de concentración adjunto a Auschwitz. Se narran las vivencias desde su detención en 1943 hasta su liberación en 1944. Un testimonio literario de lo inenarrable, la necesidad de explicar lo inhumano sin ser cómplice de la violencia." , categoria: "noficcion", stock: 20 },
    { id: 7, title: "Diario de Anne Frank", author: "Anne Frank", imagen: diario, description: "El diario de Ana Frank es un diario escrito por la niña Ana Frank entre el 12 de junio de 1942 y el 4 de agosto de 1944. Oculta con su familia y otros judíos en una buhardilla de unos almacenes de Ámsterdam durante la ocupación nazi de Holanda, Ana Frank con trece años cuenta en su diario la vida del grupo." , categoria: "noficcion", stock: 20 },
    { id: 8, title: "Vivir para contarla", author: " Gabriel García Marquez", imagen: vivir,  price: 30 , description: "Garcia Marquez relata la memoria de sus años de infancia y juventud, aquellos en los que se fundaría el imaginario que, con el tiempo, daría lugar a algunos de los relatos y novelas fundamentales de la literatura en lengua española del siglo XX." , categoria: "noficcion", stock: 20 },
    { id: 9, title: "Una habitación propia", author: "Virginia Woolf", imagen: habitacion, price: 30 , description:"Una pregunta: ¿qué necesitan las mujeres para escribir buenas novelas? Una sola respuesta: independencia económica y personal, es decir, Una habitación propia." , categoria: "academico", stock: 20 },
    { id: 10, title: "Crítica de la razón pura", author: "Immanuel Kant", imagen: critica, price: 30 , description:"Se trata de una indagación trascendental (acerca de las condiciones epistémicas del conocer humano) cuyo objetivo central es lograr una respuesta definitiva sobre si la metafísica puede ser considerada una ciencia." , categoria: "academico", stock: 20 },
    { id: 11, title: "Historia del tiempo", author: "Stephen Hawking", imagen: tiempo, price: 30 , description: "El libro trata de explicar de la manera más sencilla posible la Historia del Universo, motivo por el cual se le conoció a Stephen Hawking como 'el historiador del tiempo' o 'el historiador del universo'." , categoria: "academico", stock: 20 },
    { id: 12, title: "El príncipe", author: "Nicolás Maquiavelo", imagen: principe, price: 30 , description: "Ambientada en el conflictivo barrio de Ceuta del mismo nombre, 'El Príncipe' narra una historia de amor y drama que se centra en la corrupción policiaca y en las bandas criminales y de narcotráfico." , categoria: "academico", stock: 20 },
    { id: 13, title: "Matilda", author: "Roald Dahl", imagen: matilda, price: 30 , description: "Matilda es una lectora empedernida con solo cinco años. Sensible e inteligente, todos la admiran menos sus mediocres padres, que la consideran una inútil. Además tiene poderes extraños y maravillosos." , categoria: "infantiles", stock: 20 },
    { id: 14, title: "Peter Pan", author: "James Matthew Barrie", imagen: peter, price: 30 , description: "Es la historia de tres niños ingleses que una noche, tras recibir la visita de un extraño ser que tiene poderes mágicos y se llama Peter Pan, salen volando con él hasta llegar al sorprendente país de donde procede: la isla de Nunca Jamás." , categoria: "infantiles", stock: 20 },
    { id: 15, title: "El Reino del Revés", author: "María Elena Walsh", imagen: reino, price: 30 , description: "En El Reino del Revés están las canciones más conocidas de Mª Elena Walsh y otros simpáticos poemas como Manuelita la tortuga, Marcha de Osías, Canción del Jardinero, Twist del Mono Loco." , categoria: "infantiles", stock: 20 },
    { id: 16, title: "El Principito", author: "Antoine de Saint-Exupéry", imagen: principito, price: 30 ,description: "El principito es una narración corta del escritor francés Antoine de Saint-Exupéry, que trata de la historia de un pequeño príncipe que parte de su asteroide a una travesía por el universo, en la cual descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad." , categoria: "infantiles", stock: 20 },
];