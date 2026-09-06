(function () {
  var ES = {
  title: 'Niza, tres fases',
  'nav-sections': 'Secciones',
  'nav-opening': 'Apertura',
  'nav-city': 'La ciudad',
  'nav-room': 'Dos negocios',
  'nav-economics': 'Economía',
  'nav-customers': 'Clientes',
  'nav-found': 'Ser encontrados',
  'nav-welcome': 'La bienvenida',
  'nav-costs': 'Lo que cuesta',
  'nav-decision': 'Una decisión',
  'nav-journey': 'El recorrido',
  'nav-decided': 'Lo que Niza ya decidió',
  'hero-kicker': 'Una cafetería en Niza',
  'hero-h1': '¡Di <strong>Koukou</strong> al mejor café de Niza!',
  'hero-opening': 'Una de las ciudades más activas de Europa, treinta mil estudiantes, un distrito de negocios que crece hacia el oeste, y una oferta de café y almuerzo que las guías describen con educada moderación. Doce millones de visitantes solo tienen que encontrarnos una vez. El barrio nos encontrará cada semana. Abrimos temprano con el café, nos ganamos el sustento al mediodía y mantenemos la terraza hasta las largas noches de verano.',
  'hero-byline': 'Preparado para Daniel Burgos, Kris Wallenta y Andre, Grupo Marea.<br>Septiembre de 2026. Nombre por acordar.',
  'sum-1': 'El café es la única categoría en Niza que nadie posee',
  'sum-2': 'Doce millones de visitantes al año, treinta mil estudiantes, una población de oficinas en crecimiento',
  'sum-3': '927.000 € de ingresos al 26% de EBE, claramente por encima de un comparable local probado',
  'sum-4': '40.000 € para empezar a operar, arrendando un negocio existente en lugar de comprarlo',
  'sum-5': 'El negocio compra su propio activo en el año tres, con lo que gana',
  's01-h2': 'Lo que Niza ya ha decidido',
  's01-lead': 'Niza cuida con celo sus favoritos, y la mayoría de las categorías que valen la pena ya pertenecen a alguien. Saber cuáles están genuinamente cerradas es lo primero útil que hay que establecer, porque ahorra mucho esfuerzo desperdiciado más adelante.',
  's01-p1': 'La socca está resuelta desde antes de la guerra. Chez Pipo la hornea en hornos de leña desde 1923, Chez Theresa desde 1925 en un horno construido en 1867, y ningún recién llegado va a desplazar a ninguno de los dos. Fenocchio sirve helados en la Place Rossetti desde 1966 y hoy ofrece algo así como cien sabores. La Merenda sigue sin teléfono y no lo necesita. Son negocios familiares con un siglo de cariño detrás, y conviene dejarlos en paz.',
  's01-p2': 'Un segundo grupo es más reciente pero no menos ocupado. Las hamburguesas pertenecen a Bubu y Le Bavastro, el brunch a Café Marché y Popote d\'Ondine, que suele tener cola en la puerta. El vino natural pertenece a La Cave Du Cours y La Part des Anges. Todo esto podría desafiarse en teoría, pero hacerlo significaría pasar años construyendo afecto frente a quienes ya lo tienen, lo cual es un mal uso del tiempo y el dinero del grupo.',
  's01-p3': 'El café es distinto. La ciudad tiene un puñado de locales respetados: Cafés Indien, HUG, French Coffee Shop y Canopée entre ellos—, pero ninguna dirección que todos nombren. Una reseña publicada de un local que Google mismo etiqueta como especialidad lo describe como caro y poco notable, y sostiene que el café en Niza en general decepciona por lo que cuesta. Es una queja en público, en una categoría que la gente ya busca, sin que nadie la responda.',
  's01-quote': 'Una ciudad de este tamaño debería tener un café en el que todos estén de acuerdo, y no lo tiene.',
  's02-h2': 'Dos negocios, una dirección',
  's02-lead': 'La operación de invierno y la de verano no son el mismo negocio a distintos volúmenes. Son operaciones distintas que comparten cocina, lista de proveedores y nombre, y separarlas bien es lo que hace funcionar la economía.',
  's02-p1': 'De octubre a mayo la carta es fría y ensamblada. Sándwiches en buen pan, bollería de una boulangerie que elegimos con cuidado, café que nos tomamos en serio. Nada de eso se cocina, así que nada necesita un chef. Tres personas llevan el local. De junio a septiembre la cocina se enciende, llegan un chef y un commis, los platos se vuelven más ambiciosos y la terraza funciona hasta tarde.',
  's02-when-summer': 'Junio a septiembre, 120 días',
  's02-summer-h3': 'La casa completa',
  's02-summer-p': 'Llegan un chef y un commis, con cuatro o cinco de sala de temporada. Se abre la cocina, se suman doce a quince platos cocinados a la carta, y la terraza llega hasta la noche. El chef no está haciendo sándwiches. El chef está haciendo la diferencia entre un ticket de quince euros y uno de veintidós.',
  's02-when-winter': 'Octubre a mayo, 210 días',
  's02-winter-h3': 'La casa fría',
  's02-winter-p': 'Un mostrador, una nevera, una prensa y un molinillo. Sándwiches construidos sobre calidad comprada más que sobre técnica, bollería de una boulangerie, y café que justifica el desplazamiento. Tres personas, sin chef, sin cocina en marcha. La calidad está en el aprovisionamiento, que es algo que se compra bien más que se cocina bien, y Niza tiene de quién comprar.',
  's02-passage': 'Arrastrar una cocina y un chef durante ocho meses tranquilos es lo que deja marginales a la mayoría de los negocios de jornada completa. No arrastrarlos vale alrededor de cien mil euros al año, y es la decisión más grande de este plan.',
  's03-h2': 'La economía, medida contra cuentas reales de Niza',
  's03-lead': 'El modelo supone 120 días punta a unas 220 transacciones con un ticket medio de 22 €, y 210 días más tranquilos a 110 transacciones a 15 €. Está pensado para un local de unos 100 a 120 metros cuadrados, con unas 40 plazas dentro y 20 en la terraza. La nómina se construye a partir de los dos estados de operación, no promediada a lo largo del año.',
  's03-th-line': 'Partida',
  's03-th-share': 'Cuota',
  's03-th-euro': 'Euro',
  's03-r1': 'Ingresos, temporada alta',
  's03-r2': 'Ingresos, temporada baja',
  's03-r3': 'Alimentos y bebidas',
  's03-r4': 'Nómina, carga completa',
  's03-r5': 'Redevance',
  's03-r6': 'Otros gastos',
  's03-redevance-note': 'La redevance sustituye al alquiler y se sitúa un poco por encima, porque compra el uso de un negocio en marcha y no de un conjunto vacío de paredes. Al cuatro y medio por ciento de los ingresos sigue estando bien dentro de la disciplina de abajo.',
  's03-fnote': 'Un restaurante en activo de 120 cubiertas en el Carré d\'Or opera actualmente con un 15% de EBE sobre unos 830.000 € de ingresos. Este modelo queda claramente por encima, y toda la diferencia es la cocina que no estamos dotando durante ocho meses del año.',
  's03-h3-rent': 'La prueba de la redevance',
  's03-p-rent': 'La regla de Daniel es que un solo buen día de ventas debería cubrir el coste de ocupación de un mes. Con una redevance de tres mil quinientos al mes, un día pico con ticket de veintidós euros necesita ciento sesenta transacciones para cubrirlo, lo que una terraza llena logra a media tarde. A lo largo de una temporada, el local cubre su redevance anual muchas veces, y la regla se sostiene bajo la nueva estructura exactamente igual que bajo la anterior.',
  's03-n1': 'Coste de alimentos y bebidas, ligeramente por encima del sector por un aprovisionamiento deliberadamente mejor',
  's03-n2': 'Nómina, construida a partir de dos estados de equipo en lugar de promediar',
  's03-n3': 'EBE, frente al 15% de un restaurante comparable del Carré d\'Or',
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
  's04-passage': 'La barrera es más baja de lo que parece. Unas ciento cincuenta transacciones al día en los meses tranquilos, lo que con una tasa de captación de quince por mil significa diez mil personas pasando, una cifra ordinaria para una calle céntrica de Niza en horario comercial. Construir el hábito local requiere que aproximadamente el 3,4% de los residentes de Libération, o el 8,2% de los del Carré d\'Or, vengan una o dos veces por semana.',
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
  's05-p0': 'Cuatro preguntas en Niza no tienen respuesta consolidada: mejor café, mejor desayuno, mejor lugar para trabajar y mejor café helado.',
  's05-p1': 'El desayuno es el más interesante de los cuatro. Cada guía de la ciudad nombra un conjunto distinto de sitios, y una o dos inventan subcategorías porque ninguna dirección comanda la respuesta. Conviene separarlo del brunch, que está muy ocupado. El brunch es una ocasión de fin de semana, mientras que el desayuno es un hábito entre semana, y es el hábito lo que mantiene las mesas llenas durante el invierno.',
  's05-p2': 'Trabajar desde un café apenas existe en la escritura sobre Niza, mientras París sostiene varias guías dedicadas al tema, y Niza tiene treinta mil estudiantes y una población de oficinas en crecimiento que necesita dónde sentarse. El café helado no tiene respuesta en Niza, en una ciudad cálida cinco meses al año.',
  's05-quote': 'Nadie supera el legado de Niza, pero hay mucho margen para ser más modernos de lo que es ahora.',
  's05-p3': 'Las cuatro preguntas las responde la misma casa, en las mismas horas, con el mismo producto. El café es la puerta de entrada, el desayuno la razón para volver mañana, el trabajo la razón para quedarse dos horas, y el café helado lo que sale del edificio en la mano de alguien. Cada uno de ellos llena las mesas del mediodía.',
  's05-h3': 'Cómo se ganan',
  's05-p4': 'El ranking local funciona según lo reciente y lo constante que la gente haya escrito sobre un sitio, y según detalles que se pueden comprobar en lugar de afirmar. Eso lo convierte en una cuestión de llevar bien el negocio más que de promocionarlo con fuerza. Nombrar al tostador y el origen, y ser directo sobre quién hace el café, da a la gente algo concreto que repetir. Un programa deliberado de pedir reseñas en los primeros noventa días, integrado en cómo se lleva la casa más que añadido después, hace la mayor parte del resto. El reconocimiento hace más que cualquiera de los dos, porque alguien a quien se saluda por su nombre y se le entrega lo de siempre escribirá sobre ello, y un desconocido bien atendido normalmente no.',
  's05-passage': 'También hay ventaja en simplemente seguir abierto. Muchísimos locales independientes en Niza cierran o recortan fuerte en invierno, y su posición en la búsqueda local se debilita un poco cada año. Un negocio cuyo tráfico entre semana viene de residentes, estudiantes y oficinas cercanas puede seguir en los meses tranquilos con su propia demanda, y la brecha se ensancha ligeramente cada temporada.',
  's06-h2': 'La bienvenida',
  's06-lead': 'Lo que a Niza le falta no es una cocina sino una manera de cuidar a la gente, y eso es lo que este grupo realmente aporta.',
  's06-p1': 'La queja publicada sobre el café en Niza es que es caro y poco notable, lo cual es tanto un juicio sobre cómo se trata a los clientes como sobre lo que hay en la taza. La hospitalidad latinoamericana es más cálida por hábito de lo que suele ser la convención del café francés, no la puede copiar el de dos puertas más allá, y no cuesta nada en tiempo de servicio. Todo lo demás que hace distintivo el sitio tiene que sentarse junto a la transacción y no dentro de ella, porque cualquier cosa que ralentice el mostrador trabaja en contra del formato.',
  's06-s1-h3': 'Una segunda barra para habituales',
  's06-s1-p': 'Un sitio para encargos de pie y caras conocidas que reciben un café sin hacer cola detrás de un visitante que aún lee la carta. Atiende bien a los locales, y tiene el efecto útil de mostrar a cada visitante que el lugar es de verdad el habitual de alguien y no algo montado para turistas.',
  's06-s2-h3': 'Comprado mejor, no cocinado más duro',
  's06-s2-p': 'Durante ocho meses del año la calidad se decide antes de que nada llegue al mostrador. El panadero, el carnicero, el tostador y la boulangerie son la cocina de octubre a mayo, lo que convierte esas relaciones en estratégicas más que transaccionales. Un jambon-beurre son tres ingredientes y cada uno es el oficio de otra persona. Elegir bien esos proveedores es la decisión operativa más importante del negocio de invierno.',
  's06-s3-h3': 'Algo para llevar',
  's06-s3-p': 'Cold brew en lata y filtro embotellado de una nevera junto a la puerta. Precio completo, sin tiempo en la máquina, el mejor margen del edificio, y el nombre viaja por la ciudad en la mano de alguien. Vendido en vidrio retornable, cada uno lleva una pequeña razón para volver.',
  's06-s4-h3': 'Una carta corta, bien hecha',
  's06-s4-p': 'La contención se lee como confianza, y es más rápida de cocinar, más fácil de pedir y menos derrochadora. En un mercado cuya queja es que las cosas son poco notables, seis platos hechos con esmero vencen a veinte hechos apenas bien.',
  's06-passage': 'Lo que se acumula con el tiempo es el reconocimiento. Saber el pedido de alguien, su nombre y qué le pasó la semana pasada no cuesta nada, no lo puede comprar un competidor y es la razón real por la que una persona viene cuatro veces por semana en lugar de dos al mes. La dificultad es que suele vivir en la memoria de un barista y se va cuando él se va, así que hay que construirlo en cómo se lleva la casa: cuentas con nombre, una nota del pedido habitual, y un traspaso entre turnos que cubra personas y no solo stock.',
  's07-h2': 'Tres fases, cuarenta mil euros',
  's07-lead': 'Francia tiene una estructura hecha exactamente para esto. Bajo la location-gérance se arrienda un fonds de commerce existente y se opera, pagando al propietario una redevance mensual en lugar de comprar el negocio de contado. El propietario conserva el activo, nosotros conservamos el comercio, y el coste de entrada baja de ciento ochenta mil euros a unos cuarenta. Cada fase de abajo la paga la anterior.',
  's07-ph1-h3': 'Fase uno. Probarlo. 8.000 €.',
  's07-ph1-p': 'La mayoría de los restaurantes de Niza abren para el almuerzo y la cena, lo que significa que su sala, su cocina y su licencia permanecen ociosas de siete a once cada mañana, sin ganar nada. Nosotros tomamos las mañanas. Aportamos el café, la relación con la bollería, la gente y el nombre. Ellos aportan la sala, a participación en ingresos o a una tarifa diaria fija. Cuatro a seis meses de esto establecen el ticket real de la mañana en Niza, el tráfico real de esa calle a las ocho, si el modelo de servicio encaja con los locales, y si podemos construir velocidad de reseñas frente a mejor café y mejor desayuno. Compra evidencia más que ingresos, y cuesta menos que un mes de capital de trabajo bajo el plan anterior.',
  's07-ph2-h3': 'Fase dos. Operarlo. 40.000 €.',
  's07-ph2-p': 'Un contrato de location-gérance en un local adecuado, con opción de compra escrita desde el principio. Operación completa, el equipo de dos estados, las cifras de la sección de arriba. El contrato se deposita en el greffe y se publica en un diario de anuncios legales, suele durar un año con renovación tácita, y lleva IVA al veinte por ciento sobre la redevance. La opción de compra importa más que la cifra mensual, porque la corta duración es la verdadera debilidad de la estructura.',
  's07-ph3-h3': 'Fase tres. Poseerlo. Lo paga el negocio.',
  's07-ph3-p': 'Dos años asentados producen lo suficiente para ejercer la opción y comprar el fonds de contado, en efectivo, sin una nueva llamada a los socios. Llegamos a la misma posición de activo que el plan original, aproximadamente un año más tarde, habiendo arriesgado cuarenta mil euros en lugar de ciento ochenta.',
  's07-th-line': 'Partida',
  's07-th-euro': 'Euro',
  's07-th-lean': 'Nota',
  's07-r1': 'Depósito, tres meses de redevance',
  's07-r1d': 'Reembolsable al final del contrato',
  's07-r2': 'Legal, contrato, depósito en el greffe y publicación',
  's07-r2d': 'La location-gérance tiene requisitos formales',
  's07-r3': 'Refresco, rotulación y marca',
  's07-r3d': 'Construido dentro del grupo en lugar de comprado a una agencia',
  's07-r4': 'Equipamiento de café',
  's07-r4d': 'Arrendado o suministrado mediante relación con tostador',
  's07-r5': 'Capital de trabajo, dos meses',
  's07-r5d': 'El local ya está operando, así que no hay rampa desde cero',
  's07-total': 'Total',
  's07-n1': 'Para empezar a operar',
  's07-n2v': '2 meses',
  's07-n2': 'De operación asentada cubren todo el coste de entrada',
  's07-n3': 'Exposición total de los socios a lo largo de ambas fases',
  's07-passage': 'El capital de trabajo es más bajo aquí de lo que sería en una adquisición, y eso es consecuencia de la estructura más que un ahorro que hayamos elegido. Tomar un negocio en marcha significa tomar sus clientes, así que no hay rampa desde cero ni meses muertos antes del primer euro. Si el local no está ya operando, la cifra sube de nuevo y el argumento a favor de esta vía se debilita considerablemente.',
  's07-p1': 'El retorno aquí no es un activo que poseamos el día uno. Es la velocidad a la que vuelve el capital. Cuarenta mil euros de entrada frente a unos doscientos cuarenta y cinco mil de EBE anual significa que el negocio recupera todo su coste inicial en dos meses de operación asentada. Todo lo que viene después es o distribución o el fondo que compra el fonds en el año tres, momento en el que el activo llega al balance habiendo sido pagado por el comercio y no por los socios.',
  's07-p2': 'Más allá de la casa única, esta sería la primera dirección del grupo en Europa. Un negocio en Niza que funciona se convierte en plantilla, en un conjunto de relaciones con proveedores, en una estructura operativa francesa y en una credencial en un mercado que se toma la hospitalidad en serio. Casa Kinta llevó a Grupo Marea de un restaurante a un portafolio. Esto llevaría el portafolio a través de un océano.',
  's07-p3': 'Los primeros años pagan en la velocidad a la que vuelve el dinero más que en el tamaño del activo, y el activo llega detrás. Para una primera aventura en un mercado desconocido, ese es el orden correcto.',
  's08-h2': 'Qué convertiría esto en una decisión',
  's08-lead': 'Seis cosas, ninguna cara, y entre ellas cierran las incógnitas que quedan.',
  's08-s0-h3': 'Encontrar las mañanas de alguien',
  's08-s0-p': 'Una conversación con un restaurante bien situado que abre a las once. Su sala no gana nada antes y la nuestra costaría ocho mil euros para probar. Es el único punto de la lista que produce ingresos comerciales en lugar de información, y puede empezar antes de que concluya la búsqueda de local.',
  's08-s1-h3': 'Contar la calle',
  's08-s1-p': 'Una hora a las ocho, una a la una y una a las siete, un martes y otra vez un sábado, en tres zonas de la ciudad con carácter distinto. Dos días del tiempo de alguien, y la última incógnita real del modelo queda cerrada.',
  's08-s2-h3': 'Ticket y rendimiento desde la cocina',
  's08-s2-p': 'Cifras reales de Daniel y Rodrigo para el formato de café y almuerzo, sustituyendo promedios del sector por lo que los dos ya saben de gestionar restaurantes.',
  's08-s3-h3': 'Una lista corta medida contra la regla del alquiler',
  's08-s3-p': 'Cocina en funcionamiento, extracción instalada, terraza, y un alquiler mensual que un solo buen día cubra. Lo que falle esa prueba sale de la lista sin importar cómo se vea el frente.',
  's08-s4-h3': 'Apertura en abril o mayo',
  's08-s4-p': 'Una apertura en primavera compra una primera temporada completa para construir caja, reputación y reseñas antes del primer invierno. Vale más que la diferencia entre dos buenos locales.',
  's08-quote': 'Niza tiene los visitantes, los estudiantes, las oficinas y el dinero. Lo que le falta es un sitio en el que todos coincidan para un café, para el desayuno, o para sentarse a trabajar, y un solo lugar podría responder a las tres cosas.',
  footer: 'Grupo Marea, septiembre de 2026. Las cifras son estimaciones de planificación basadas en datos del sector francés y en cuentas comerciales de Niza divulgadas.',
  's01-close': 'El café es distinto. La ciudad tiene lugares respetados, Cafés Indien, HUG, French Coffee Shop y Canopée entre ellos, pero ninguna dirección que todos nombren. Una reseña publicada de un local que Google mismo etiqueta como especialidad lo describe como caro y poco notable, y sostiene que el café en Niza en general decepciona por lo que cuesta. Es una queja en público, en una categoría que la gente ya busca, sin que nadie la responda.',
  's07-teaser': 'Un visitante en Niza se queda unas tres noches, lo que significa que puede volver tres o cuatro veces en un solo viaje. No intentamos ganárnoslo para siempre, intentamos convertirnos en su lugar para ese viaje. Hay doce puntos entre buscar en el teléfono la noche anterior y escribir una reseña en el tren de vuelta donde eso se gana o se pierde, y ninguno necesita capital.',
  's07-teaser-link': 'Recorrer las doce etapas',
  's05-risk-h3': 'Lo que estamos aceptando',
  's05-risk-p': 'Cinco cosas son genuinamente inciertas y conviene decirlas con claridad. Un propietario no puede conceder location-gérance a menos que haya llevado el fonds al menos dos años él mismo, lo cual descalifica más locales de lo esperado y hay que comprobarlo pronto en cada candidato. El contrato suele durar un año con renovación tácita, así que sin una opción de compra escrita desde el principio mejoramos un negocio que otro puede recuperar. El ticket de invierno se modela a quince euros frente a unos nueve en operaciones comparables de carta fría en otros sitios, y un mejor aprovisionamiento tiene que sostener esa diferencia. Contratar a un chef para cuatro meses en la Côte d\'Azur significa fichar las mismas semanas que todos los restaurantes entre Menton y Saint-Tropez. Y durante las fases uno y dos no retenemos activo alguno, que es el precio de la entrada más baja y debe entenderse como un intercambio deliberado y no como un descuido.',
  's02-p2': 'La capa fría no desaparece en verano. Sostiene el desayuno y la mitad rápida del almuerzo cuando pasan doscientas veinte personas al día, que es precisamente cuando quieres que la mitad de tus cubiertos salga del mostrador y no del pase.',
  's03-payroll-h3': 'Cómo se construye la nómina',
  's03-pth-team': 'Equipo',
  's03-pth-months': 'Meses',
  's03-pth-cost': 'Coste cargado',
  's03-pr1': 'Núcleo: responsable de sala, dos en mostrador, refuerzo de fin de semana a tiempo parcial',
  's03-pr2': 'De temporada: chef, commis, cinco de sala',
  's03-pr-total': 'Total',
  's03-payroll-p': 'Sobre 927.000 € de ingresos eso es un 24% de nómina. El modelo de abajo la lleva al 28% por prudencia, que sigue estando muy por debajo del 35 al 45% que corre una operación convencional de jornada completa, porque una operación convencional está pagando una cocina para que no haga nada de octubre a mayo.',
  's03-winter-h3': 'El invierno se sostiene solo',
  's03-winter-p': 'La temporada baja no es un periodo que haya que sobrevivir con el dinero del verano. Sobre trescientos cuarenta y seis mil euros de ingresos con tres personas y sin cocina, de octubre a mayo cubre su propia comida, nómina, redevance y gastos generales y aún contribuye unos cincuenta y siete mil euros. Eso es lo que permite permanecer abiertos todo el año mientras buena parte de la ciudad cierra o reduce, y permanecer abiertos es lo que sostiene la posición en la búsqueda.',
  's06-s5-h3': 'La terraza tratada como el acontecimiento principal',
  's06-s5-p': 'La mayoría trata la terraza como desbordamiento. Vale la pena tratarla como el punto central: sombra, sillas cómodas y una hora sentado sin que te muevan. La barra gana con la velocidad y la terraza con el tiempo que la gente está dispuesta a pasar allí.',
  's08-s5-h3': 'Definir qué es en realidad el rol de chef',
  's08-s5-p': 'Una cocina que funciona cuatro meses no necesita un chef a tiempo completo con salario de doce meses, pero el negocio sí necesita a alguien que lo lleve todo el año. Son dos trabajos distintos y el plan describe ahora mismo a una sola persona haciendo ambos. Resolver eso antes de ofrecerle nada concreto a nadie vale más que otro mes buscando local.',
  'journey-h1': 'Cómo lo vive realmente un visitante',
  'journey-back': 'Volver a la propuesta',
  'journey-response': 'Nuestra respuesta',
  'journey-toggle': 'Qué hacemos al respecto',
  'journey-close': 'Cerrar'
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
