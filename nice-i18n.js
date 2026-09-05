(function () {
  var ES = {
  title: 'Una cafetería en Niza',
  'nav-sections': 'Secciones',
  'mast-date': 'Septiembre de 2026',
  'nav-opening': 'Apertura',
  'nav-city': 'La ciudad',
  'nav-room': 'El local',
  'nav-economics': 'Economía',
  'nav-customers': 'Clientes',
  'nav-found': 'Ser encontrados',
  'nav-welcome': 'La bienvenida',
  'nav-costs': 'Lo que cuesta',
  'nav-decision': 'Una decisión',
  'hero-kicker': 'Una cafetería en Niza',
  'hero-h1': 'Niza recibe doce millones de visitantes al año y aún no sabe hacer un café decente',
  'hero-opening': 'Una de las ciudades más activas de Europa, treinta mil estudiantes, un distrito de negocios que crece hacia el oeste, y una oferta de café y almuerzo que las guías describen con educada moderación. Doce millones de visitantes solo tienen que encontrarnos una vez. El barrio nos encontrará cada semana. Abrimos temprano con el café, nos ganamos el sustento al mediodía y mantenemos la terraza hasta las largas noches de verano.',
  'hero-byline': 'Preparado para Daniel Burgos, Kris Wallenta y Andre, Grupo Marea.<br>Septiembre de 2026. Nombre por acordar.',
  's01-h2': 'Lo que ya está ocupado, y lo que no',
  's01-lead': 'Niza cuida con celo sus favoritos, y la mayoría de las categorías que valen la pena ya pertenecen a alguien. Entender cuáles están genuinamente cerradas es lo primero útil que hay que saber, porque ahorra mucho esfuerzo desperdiciado más adelante.',
  's01-p1': 'La socca está resuelta desde antes de la guerra. Chez Pipo la hornea en hornos de leña desde 1923, Chez Theresa desde 1925 en un horno construido en 1867, y ningún recién llegado va a desplazar a ninguno de los dos. Fenocchio sirve helados en la Place Rossetti desde 1966 y hoy ofrece algo así como cien sabores. La Merenda sigue sin teléfono y no lo necesita. Son negocios familiares con un siglo de cariño detrás, y conviene dejarlos en paz.',
  's01-p2': 'Un segundo grupo es más reciente pero no menos ocupado. Las hamburguesas pertenecen a Bubu y Le Bavastro, el brunch a Café Marché y Popote d\'Ondine, que suele tener cola en la puerta. El vino natural pertenece a La Cave Du Cours y La Part des Anges. Todo esto podría desafiarse en teoría, pero hacerlo significaría pasar años construyendo afecto frente a quienes ya lo tienen, lo cual es un mal uso del tiempo y el dinero del grupo.',
  's01-p3': 'El café es distinto. La ciudad tiene un puñado de locales respetados —Cafés Indien, HUG, French Coffee Shop y Canopée entre ellos—, pero ninguna dirección que todos nombren. Una reseña publicada de un local que Google mismo etiqueta como especialidad lo describe como caro y poco notable, y sostiene que el café en Niza en general decepciona por lo que cuesta. Es una queja en público, en una categoría que la gente ya busca, sin que nadie la responda.',
  's01-quote': 'Una ciudad de este tamaño debería tener un café en el que todos estén de acuerdo, y no lo tiene.',
  's02-h2': 'Un solo local, que cambia de forma a lo largo del día',
  's02-lead': 'La idea no es un café con comida añadida como idea tardía, ni un restaurante que casualmente sirve café por la mañana. Es una sola cocina trabajando a un solo estándar, haciendo cosas más o menos elaboradas según la hora y el mes.',
  's02-p1': 'El mayor gasto viene de la calidad de lo que entra en la comida, nunca de poner un servicio distinto por la noche. Los mismos chefs, los mismos proveedores y la misma sensibilidad van desde el primer café hasta el último plato, de modo que quien almuerza allí un martes de febrero reconoce la cocina cuando vuelve a cenar en julio.',
  's02-when-summer': 'Junio a septiembre, 120 días',
  's02-summer-h3': 'A pleno rendimiento',
  's02-summer-p': 'Café y bollería desde temprano. Almuerzo con la terraza a capacidad. Aperitivo que se prolonga en cena, con la brigada completa y un segundo servicio. Aquí se hace la mayor parte de los ingresos del año, y el local está hecho para soportarlo.',
  's02-when-winter': 'Octubre a mayo, 210 días',
  's02-winter-h3': 'El ritmo central',
  's02-winter-p': 'Café y bollería desde temprano, servicio de almuerzo, y la puerta cierra después. Un equipo reducido, sin cubrir las noches, y un negocio que funciona con residentes, estudiantes y quienes trabajan cerca más que con visitantes.',
  's02-passage': 'Flexibilizar el día según la temporada, en lugar de abrir las mismas horas todo el año, es lo que hace funcionar la economía. Una brigada de noche solo entra en nómina en los meses en que hay gente que alimentar, y el almuerzo entre semana sostiene la parte más tranquila del año por sí solo. El resultado son unos 927.000 € de ingresos con alrededor del 16% de EBE, mejor que una operación solo de almuerzo todo el año o una de cena completa haciendo lo mismo.',
  's03-h2': 'La economía, medida contra cuentas reales de Niza',
  's03-lead': 'El modelo asume 120 días pico con unas 220 transacciones y ticket medio de 22 €, y 210 días tranquilos con 110 transacciones a 15 €. Está planteado para un local de unos 100 a 120 metros cuadrados, con unas 40 cubiertas dentro y 20 en la terraza.',
  's03-th-line': 'Partida',
  's03-th-share': 'Cuota',
  's03-th-euro': 'Euro',
  's03-r1': 'Ingresos, temporada alta',
  's03-r2': 'Ingresos, temporada baja',
  's03-r3': 'Alimentos y bebidas',
  's03-r4': 'Nómina, carga completa',
  's03-r5': 'Alquiler',
  's03-r6': 'Otros gastos',
  's03-fnote': 'Un restaurante en activo de 120 cubiertas en el Carré d\'Or opera actualmente con un 15% de EBE sobre unos 830.000 € de ingresos, así que el modelo queda un poco por encima de un comparable local probado, no muy lejos de él.',
  's03-h3-rent': 'La prueba del alquiler',
  's03-p-rent': 'La regla de Daniel es que un solo buen día de ventas debería cubrir el alquiler de un mes, y es una disciplina sensata porque impone en silencio una carga de alquiler de alrededor del cinco por ciento de los ingresos. En un local a 2.019 € al mes, un día pico con ticket de 22 € necesita 92 transacciones para cubrirlo, lo que una terraza concurrida logra antes del mediodía. A lo largo de una temporada, el local cubre su alquiler anual muchas veces.',
  's03-n1': 'Coste de alimentos y bebidas, en línea con el sector',
  's03-n2': 'Nómina, dentro de la banda saludable del 35 al 45%',
  's03-n3': 'Carga de alquiler, cómodamente por debajo del habitual 8 al 10%',
  's04-h2': 'De dónde vienen los clientes',
  's04-lead': 'Los mejores locales de Niza se apoyan en más de un tipo de cliente, lo que les permite operar en febrero tanto como en agosto. Los visitantes cargan con el verano, las oficinas y la universidad con los días entre semana, y quienes viven cerca construyen el hábito que sostiene el resto.',
  's04-visitors-h3': 'Visitantes',
  's04-visitors-count': '15,23 millones de pasajeros en el aeropuerto, más de 12 millones de turistas',
  's04-visitors-p': 'Más de la mitad llegan desde fuera de Francia, una proporción mayor que antes de la pandemia, y quienes llegan en avión gastan más de 110 € al día. La ocupación hotelera alcanza el 85% entre junio y septiembre.',
  's04-students-h3': 'Estudiantes',
  's04-students-count': 'Más de 30.000 estudiantes y 3.000 empleados',
  's04-students-p': 'Université Côte d\'Azur tiene cinco de sus seis campus principales en Niza. Valrose está entre los campus universitarios mejor situados de Francia, en el tranvía y a pocos minutos de Gare Nice-Ville.',
  's04-offices-h3': 'Oficinas',
  's04-offices-count': '22.000 empleos previstos en Grand Arénas, 100.000 metros cuadrados en Nice La Plaine',
  's04-offices-p': 'El mayor distrito de negocios de los Alpes-Maritimes está al oeste, y el centro mismo está lleno de bufetes, consultoras y consultorios médicos a pie de calle.',
  's04-residents-h3': 'Residentes',
  's04-residents-count': 'Libération 12.289, Gambetta 9.400, Jean-Médecin 6.536, Carré d\'Or 5.096',
  's04-residents-p': 'Libération está por encima de la media nacional en ingresos y por debajo en desempleo, mientras que en el Carré d\'Or más de la mitad de los residentes activos son directivos o profesionales.',
  's04-passage': 'La barrera es más baja de lo que parece. En los meses tranquilos el modelo necesita unas 150 transacciones al día, lo que con una tasa de captación de quince por mil significa diez mil personas pasando, una cifra ordinaria para una calle céntrica de Niza en horario comercial. Construir el hábito local requiere que aproximadamente el 3,4% de los residentes de Libération, o el 8,2% de los del Carré d\'Or, vengan una o dos veces por semana.',
  's05-h2': 'Ser encontrados',
  's05-lead': 'Casi todo el que visita Niza, y buena mitad de quienes viven allí, en algún momento escribirá una versión de la misma pregunta en un teléfono. La mayoría de operadores lo tratan como algo de lo que preocuparse cuando las puertas ya están abiertas. Parece más sensato elegir las preguntas que queremos responder antes de elegir la carta.',
  's05-cap1': 'Cerrado para siempre',
  's05-q1a': 'Mejor socca en Niza',
  's05-q1w': 'Chez Pipo desde 1923, Chez Theresa desde 1925',
  's05-q2a': 'Mejor helado en Niza',
  's05-q2w': 'Fenocchio, Place Rossetti, desde 1966',
  's05-q3a': 'Mejor cocina niçoise',
  's05-q3w': 'La Merenda, Le Safari',
  's05-q4a': 'Mejor brasserie de marisco',
  's05-q4w': 'Café du Turin',
  's05-cap2': 'Moderno, y ya ocupado',
  's05-q5a': 'Mejor hamburguesa en Niza',
  's05-q5w': 'Bubu, Le Bavastro',
  's05-q6a': 'Mejor brunch en Niza',
  's05-q6w': 'Café Marché, Popote d\'Ondine',
  's05-q7a': 'Mejor bar de vino natural',
  's05-q7w': 'La Cave Du Cours, La Part des Anges',
  's05-q8a': 'Mejor pizza en Niza',
  's05-q8w': 'Pizza Pili, Le Safari',
  's05-cap3': 'Genuinamente abierto',
  's05-q9a': 'Mejor café en Niza',
  's05-q9w': 'Sin respuesta consolidada',
  's05-q10a': 'Mejor desayuno en Niza',
  's05-q10w': 'Cada guía discrepa',
  's05-q11a': 'Mejor lugar para trabajar en Niza',
  's05-q11w': 'Apenas escrito',
  's05-q12a': 'Mejor café helado en Niza',
  's05-q12w': 'Nadie lo ha reclamado',
  's05-p1': 'El desayuno es el más interesante de los cuatro. Cada guía de la ciudad nombra un conjunto distinto de lugares, y una o dos recurren a inventar subcategorías porque ninguna dirección impone la respuesta. Conviene separarlo del brunch, que está completamente ocupado. El brunch es una ocasión de fin de semana; el desayuno es un hábito entre semana, y es el hábito lo que mantiene el local lleno en invierno.',
  's05-p2': 'Trabajar desde un café apenas existe en la escritura sobre Niza, mientras París sostiene varias guías dedicadas al tema, y Niza tiene treinta mil estudiantes y una población de oficinas en crecimiento que necesita dónde sentarse. El café helado no tiene respuesta en Niza, en una ciudad cálida cinco meses al año.',
  's05-quote': 'Nadie supera el legado de Niza, pero hay mucho margen para ser más modernos de lo que es ahora.',
  's05-p3': 'Las cuatro preguntas las responde el mismo local, en las mismas horas, con el mismo producto. El café es la puerta de entrada, el desayuno la razón para volver mañana, trabajar la razón para quedarse dos horas, y el café helado lo que sale del edificio en la mano de alguien. Cada una de ellas llena las mesas del almuerzo.',
  's05-h3': 'Cómo se ganan',
  's05-p4': 'El posicionamiento local depende de cuán reciente y consistentemente la gente ha escrito sobre un lugar, y de detalles verificables más que afirmados. Eso lo convierte en cuestión de gestionar bien el negocio más que de promocionarlo a fondo. Nombrar el tostador y el origen, y ser claros sobre quién hace el café, da a la gente algo concreto que repetir. Un programa deliberado de pedir reseñas en los primeros noventa días, integrado en cómo funciona el local y no añadido después, hace la mayor parte del resto. El reconocimiento hace más que cualquiera de los dos, porque quien es saludado por su nombre y recibe lo de siempre escribirá sobre ello, y un desconocido bien atendido normalmente no.',
  's05-passage': 'También hay ventaja en simplemente seguir abierto. Muchísimos locales independientes en Niza cierran o recortan fuerte en invierno, y su posición en la búsqueda local se debilita un poco cada año. Un negocio cuyo tráfico entre semana viene de residentes, estudiantes y oficinas cercanas puede seguir en los meses tranquilos con su propia demanda, y la brecha se ensancha ligeramente cada temporada.',
  's06-h2': 'El local y la bienvenida',
  's06-lead': 'La comida mexicana ya se sirve en Niza y no hace falta sumar más. Lo que a la ciudad le falta no es una cocina sino una manera de cuidar a la gente, y eso es lo que este grupo realmente tiene que aportar.',
  's06-p1': 'La queja publicada sobre el café en Niza es que es caro y poco notable, lo cual es tanto un juicio sobre cómo se trata a los clientes como sobre lo que hay en la taza. La hospitalidad latinoamericana es más cálida por costumbre que la convención del café francés, no puede copiarse en el local de al lado, y no cuesta tiempo de servicio. Todo lo demás que hace distintivo al local tiene que ir junto a la transacción más que dentro de ella, porque cualquier cosa que frene la barra va contra el formato.',
  's06-s1-h3': 'Una segunda barra para habituales',
  's06-s1-p': 'Un sitio para pedidos de pie y caras conocidas a las que se les entrega un café sin hacer cola detrás de un visitante que aún lee la carta. Atiende bien a los locales y tiene el efecto útil de mostrar a cada visitante que el lugar es genuinamente de alguien del barrio, no un local dispuesto para turistas.',
  's06-s2-h3': 'Algo para llevar',
  's06-s2-p': 'Cold brew en lata y filtro embotellado de una nevera junto a la puerta. Precio completo, sin tiempo en la máquina, el mejor margen del edificio, y el nombre viaja por la ciudad en la mano de alguien. Vendido en vidrio retornable, cada uno lleva una pequeña razón para volver.',
  's06-s3-h3': 'Una carta corta, bien hecha',
  's06-s3-p': 'La contención se lee como confianza, y es más rápida de cocinar, más fácil de pedir y menos derrochadora. En un mercado cuya queja es que las cosas son poco notables, seis platos hechos con esmero vencen a veinte hechos apenas bien.',
  's06-s4-h3': 'La terraza como sala principal',
  's06-s4-p': 'La mayoría trata la terraza como desbordamiento. Vale la pena tratarla como el punto central: sombra, sillas cómodas y una hora sentado sin que te muevan. La barra gana con la velocidad y la terraza con el tiempo que la gente está dispuesta a pasar allí.',
  's06-passage': 'Lo que se acumula con el tiempo es el reconocimiento. Saber el pedido de alguien, su nombre y qué le pasó la semana pasada no cuesta nada, no puede comprarlo un competidor y es la verdadera razón por la que una persona viene cuatro veces por semana en lugar de dos al mes. La dificultad es que suele vivir en la memoria de un barista y se va cuando él se va, así que hay que integrarlo en cómo funciona el local: cuentas con nombre, nota del pedido habitual y un relevo entre turnos que cubra a las personas, no solo el stock.',
  's07-h2': 'Lo que cuesta, y en qué se convierte',
  's07-lead': 'Todo abre por 180.000 €, asumiendo comprar un local con cocina y extracción ya instaladas en lugar de acondicionar un local vacío. La disciplina está sobre todo en lo que declinamos gastar de más.',
  's07-th-line': 'Partida',
  's07-th-euro': 'Euro',
  's07-th-lean': 'Cómo se mantiene ajustado',
  's07-r1': 'Droit au bail o fonds',
  's07-r1d': 'Cocina y extracción ya instaladas. Los locales del Carré d\'Or empiezan alrededor de 50.000 €.',
  's07-r2': 'Depósito',
  's07-r2d': 'Tres meses, reembolsable al final del arrendamiento.',
  's07-r3': 'Obras de refresco',
  's07-r3d': 'Un refresco en lugar de una reforma integral, gestionado directamente sin margen de contratista.',
  's07-r4': 'Equipamiento de café',
  's07-r4d': 'Arrendado o suministrado mediante relación con tostador en lugar de comprado de contado.',
  's07-r5': 'Legal y notaría',
  's07-r6': 'Licencia',
  's07-r6d': 'Licencia de restaurante al abrir. La Licence IV espera hasta que las noches lo justifiquen.',
  's07-r7': 'Marca, rotulación y lanzamiento',
  's07-r7d': 'Construido dentro del grupo en lugar de comprado a una agencia.',
  's07-r8': 'Capital de trabajo',
  's07-r8d': 'Tres meses. Abrir en primavera significa llegar a la temporada antes de que se agote el margen.',
  's07-total': 'Total',
  's07-n1': 'Todo incluido, para abrir las puertas',
  's07-n2v': '18 a 24 meses',
  's07-n2': 'Antes de que se asiente el ritmo comercial',
  's07-n3': 'Valor indicativo del fonds en madurez',
  's07-passage': 'Una partida no merece recortarse. Los presupuestos de restaurante rara vez se desmoronan en las cifras grandes; se desmoronan en las que nadie contó. Tres meses de capital de trabajo junto a una apertura en primavera es prudente. Dos meses no lo serían, y ningún ahorro encontrado en otro sitio valdría el riesgo.',
  's07-p1': 'Los fonds de comercio en Francia cambian de manos entre el 60 y el 150 por ciento de los ingresos anuales medios. Un negocio asentado en 900.000 € vale por tanto entre 540.000 € y 1,35 millones como algo vendible, y ese valor crece con cada año de historial comercial, cada reseña y cada terreno ganado en la búsqueda local.',
  's07-p2': 'Más allá del local único, esta sería la primera dirección del grupo en Europa. Un negocio en Niza que funcione se convierte en plantilla, un conjunto de relaciones con proveedores, una estructura operativa francesa y una credencial en un mercado que toma la hostelería en serio. Casa Kinta llevó a Grupo Marea de un restaurante a una cartera. Esto llevaría la cartera al otro lado del océano.',
  's07-p3': 'Los primeros años pagan en lo que vale el negocio más que en lo que distribuye, lo cual es normal en hostelería y es el intercambio correcto cuando el activo se aprecia junto a su reputación.',
  's08-h2': 'Qué convertiría esto en una decisión',
  's08-lead': 'Cuatro cosas, ninguna cara, y entre ellas cierran las incógnitas que quedan.',
  's08-s1-h3': 'Contar la calle',
  's08-s1-p': 'Una hora a las ocho, una a la una y una a las siete, un martes y otra vez un sábado, en tres zonas de la ciudad con carácter distinto. Dos días del tiempo de alguien, y la última incógnita real del modelo queda cerrada.',
  's08-s2-h3': 'Ticket y rendimiento desde la cocina',
  's08-s2-p': 'Cifras reales de Daniel y Rodrigo para el formato de café y almuerzo, sustituyendo promedios del sector por lo que los dos ya saben de gestionar locales.',
  's08-s3-h3': 'Una lista corta medida contra la regla del alquiler',
  's08-s3-p': 'Cocina en funcionamiento, extracción instalada, terraza, y un alquiler mensual que un solo buen día cubra. Lo que falle esa prueba sale de la lista sin importar cómo se vea el frente.',
  's08-s4-h3': 'Apertura en abril o mayo',
  's08-s4-p': 'Una apertura en primavera compra una primera temporada completa para construir caja, reputación y reseñas antes del primer invierno. Vale más que la diferencia entre dos buenos locales.',
  's08-quote': 'Niza tiene visitantes, estudiantes, oficinas y dinero. Lo que le falta es un sitio en el que todos estén de acuerdo para un café, un desayuno o sentarse a trabajar, y un solo local podría responder a los tres.',
  footer: 'Grupo Marea, septiembre de 2026. Las cifras son estimaciones de planificación basadas en datos del sector francés y en cuentas comerciales de Niza divulgadas.'
  };

  var lang = 'en';
  var toggle = document.getElementById('lang-toggle');
  var titleEn = document.title;

  function isHtml(el) {
    return el.hasAttribute('data-i18n-html');
  }

  function cacheEnglish() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (el.dataset.en === undefined) {
        el.dataset.en = isHtml(el) ? el.innerHTML : el.textContent;
      }
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      if (el.dataset.enAria === undefined) {
        el.dataset.enAria = el.getAttribute('aria-label') || '';
      }
    });
  }

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = next === 'es' ? 'es' : 'en';
    document.title = next === 'es' ? ES.title : titleEn;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (next === 'es' && ES[key]) {
        if (isHtml(el)) el.innerHTML = ES[key];
        else el.textContent = ES[key];
      } else if (el.dataset.en !== undefined) {
        if (isHtml(el)) el.innerHTML = el.dataset.en;
        else el.textContent = el.dataset.en;
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (next === 'es' && ES[key]) el.setAttribute('aria-label', ES[key]);
      else if (el.dataset.enAria !== undefined) el.setAttribute('aria-label', el.dataset.enAria);
    });

    if (toggle) {
      var isEs = next === 'es';
      toggle.textContent = isEs ? 'EN' : 'ESP';
      toggle.setAttribute('aria-pressed', isEs ? 'true' : 'false');
      toggle.setAttribute('aria-label', isEs ? 'Cambiar a inglés' : 'Switch to Spanish');
    }
  }

  cacheEnglish();

  if (toggle) {
    toggle.addEventListener('click', function () {
      applyLang(lang === 'en' ? 'es' : 'en');
    });
  }
})();
