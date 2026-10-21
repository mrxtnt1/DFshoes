(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const dictionary = {
    ar: {
      introTitle:'مصممة لتتحرك',introScroll:'مرّر للدخول',skipIntro:'تجاوز المقدمة',
      product:'المنتج', gallery:'المعرض', language:'اللغة', collection:'مجموعة نعال DF SHOES', model:'الموديل', models:'الموديلات', sizeRange:'المقاسات', photoViews:'زوايا العرض', reachUs:'كيفية الوصول إلينا', hqAddress:'المقر الرئيسي: المدية، الجزائر', categoryNavigation:'التنقل حسب الفئة', allCategories:'كل الفئات', showCategories:'عرض الفئات', hideCategories:'إخفاء الفئات', categoryHomme:'الرجال', categoryFemme:'النساء', category3035:'30/35', category2629:'26/29',categoryCaddie:'كادي', emptyCategory:'لا توجد موديلات مرتبطة بهذه الفئة حالياً.',
      interior:'الداخل', side:'الجانب', outsole:'النعل الخارجي', profile:'المظهر الجانبي', color:'اللون',viewAngle:'زاوية العرض', productViews:'زوايا المنتج', materialStudy:'دراسة التصميم',
      swipe:'اسحب لتغيير زاوية العرض', previousModel:'الموديل السابق', nextModel:'الموديل التالي', previousView:'الزاوية السابقة', nextView:'الزاوية التالية', free3d:'عرض ثلاثي الأبعاد حر', rotate3d:'اسحب للتدوير', viewerLabel:'صور النعل. استخدم السهمين أو اسحب لتغيير زاوية العرض.', photoControls:'اختيار زاوية العرض',
      storyTitle0:'كل زاوية،\nتفصيل جديد.', storyTitle1:'الشكل يتبع\nالوظيفة.', storyTitle2:'التفاصيل تبدأ\nمن الأسفل.', scrollExplore:'مرّر لاكتشاف التفاصيل', backProduct:'العودة إلى المنتج', backTop:'العودة إلى الأعلى ↑', footer:'تصميم النعال من DF SHOES',
      captions:['بنية داخلية سداسية','حافة النعل','نقشة السطح الخارجي','الخط الجانبي'],
      malagaDescription:'اكتشف تفاصيل DF-Malaga: بنية داخلية سداسية، حافة منحوتة، وسطح خارجي دقيق النقشة. استعرض الصور الأصلية من كل جهة.',
      fsDescription:'تعرّف على FS-01 بلونه الأبيض، وبنيته الداخلية السداسية، ونقشة النعل الخارجية المميزة. متوفر بالمقاسات 39–44.',
      malagaStory:['اكتشف تجاويف DF-Malaga السداسية وحافته المستديرة من خلال الصور الأصلية للمنتج.','تُظهر النظرة القريبة اتصال الجدران السداسية بالحافة المحيطة وعلامات القالب داخل النعل.','نقشة دقيقة متكررة تمتد على السطح الخارجي، مع مساحة مركزية تحمل علامة المقاس.'],
      fsStory:['بنية داخلية بيضاء بخلايا سداسية وعلامات ظاهرة داخل القالب. هذه صور موديل FS-01 الفعلية.','تُظهر الصورة الجانبية ارتفاع الحافة ونقشتها الدقيقة، مع بروز البنية الداخلية فوق قاع النعل.','خلايا سداسية بارزة بتفاصيل منقّطة تملأ السطح الخارجي حول مساحة مركزية تحمل علامة المقاس.']
    },
    fr: {
      introTitle:'Pensée en mouvement',introScroll:'DÉFILEZ POUR ENTRER',skipIntro:'Passer l’intro',
      product:'Produit',gallery:'Galerie',language:'Langue',collection:'COLLECTION DE SEMELLES DF SHOES',model:'Modèle',models:'Modèles',sizeRange:'Pointures',photoViews:'Vues',reachUs:'Comment nous rejoindre',hqAddress:'Siège : Médéa, Algérie',categoryNavigation:'Navigation par catégorie',allCategories:'Toutes les catégories',showCategories:'Afficher les catégories',hideCategories:'Masquer les catégories',categoryHomme:"L'homme",categoryFemme:'La Femme',category3035:'30/35',category2629:'26/29',categoryCaddie:'Caddie',emptyCategory:'Aucun modèle n’est actuellement associé à cette catégorie.',interior:'Intérieur',side:'Côté',outsole:'Dessous',profile:'Profil',color:'COULEUR',viewAngle:'ANGLE DE VUE',productViews:'Vues du produit',materialStudy:'Étude du design',swipe:'GLISSEZ POUR CHANGER DE VUE',previousModel:'Modèle précédent',nextModel:'Modèle suivant',previousView:'Vue précédente',nextView:'Vue suivante',free3d:'Vue 3D libre',rotate3d:'Faites glisser pour tourner',viewerLabel:'Photos de la semelle. Glissez ou utilisez les flèches pour changer de vue.',photoControls:'Choisir une vue',
      storyTitle0:'Chaque angle,\nun nouveau détail.',storyTitle1:'La forme suit\nla fonction.',storyTitle2:'Le détail vient\nd’en dessous.',scrollExplore:'Défilez pour explorer',backProduct:'Retour au produit',backTop:'Retour en haut ↑',footer:'SEMELLES SIGNÉES DF SHOES',captions:['Structure alvéolaire','Bord de la semelle','Motif de la semelle','Silhouette latérale'],
      malagaDescription:'Explorez DF-Malaga : une structure alvéolaire, un bord sculpté et un dessous finement texturé. Découvrez les photographies originales sous chaque angle.',
      fsDescription:'Découvrez FS-01 : une finition blanche, une structure intérieure alvéolaire et un motif extérieur distinctif. Disponible en pointures 39–44.',
      malagaStory:['Découvrez les alvéoles hexagonales et le bord arrondi de DF-Malaga à travers les photographies originales.','Une vue rapprochée révèle la jonction des cloisons hexagonales avec le pourtour et les inscriptions du moule.','Un motif fin et répété couvre le dessous, autour d’une zone centrale marquée de la pointure.'],
      fsStory:['Une structure blanche à cellules hexagonales et des inscriptions moulées visibles : les photographies du modèle FS-01.','La vue latérale révèle la hauteur du bord, sa texture fine et les cloisons intérieures au-dessus de la base.','Des hexagones en relief aux centres pointillés recouvrent le dessous autour de la zone centrale indiquant la pointure.']
    },
    en: {
      introTitle:'Crafted in motion',introScroll:'SCROLL TO ENTER',skipIntro:'Skip intro',
      product:'Product',gallery:'Gallery',language:'Language',collection:'DF SHOES SOLE COLLECTION',model:'Model',models:'Models',sizeRange:'Size range',photoViews:'Photo views',reachUs:'How to reach us',hqAddress:'Factory HQ · Médéa, Algeria',categoryNavigation:'Browse by category',allCategories:'All categories',showCategories:'Show categories',hideCategories:'Hide categories',categoryHomme:'Men',categoryFemme:'Women',category3035:'30/35',category2629:'26/29',categoryCaddie:'Caddie',emptyCategory:'No models are currently assigned to this category.',interior:'Interior',side:'Side',outsole:'Outsole',profile:'Profile',color:'COLOR',viewAngle:'VIEW ANGLE',productViews:'Product Views',materialStudy:'Material Study',swipe:'SWIPE TO CHANGE VIEW',previousModel:'Previous model',nextModel:'Next model',previousView:'Previous view',nextView:'Next view',free3d:'Free 3D view',rotate3d:'Drag to rotate',viewerLabel:'Sole photographs. Swipe or use arrow keys to change view.',photoControls:'Choose product view',
      storyTitle0:'Every angle.\nAnother detail.',storyTitle1:'Form follows\nfunction.',storyTitle2:'Detail from\nthe ground up.',scrollExplore:'Scroll to explore',backProduct:'Back to product',backTop:'Back to top ↑',footer:'SOLE DESIGN BY DF SHOES',captions:['Honeycomb structure','Sole edge','Outsole pattern','Side silhouette'],
      malagaDescription:'Explore DF-Malaga: a honeycomb interior, sculpted edge and finely patterned outsole. Discover the original product photographs from every side.',
      fsDescription:'Meet FS-01: a white finish, honeycomb interior and distinctive outsole pattern. Available in sizes 39–44.',
      malagaStory:['Explore DF-Malaga’s hexagonal cavities and rounded rim through the original product photographs.','A close view reveals the hexagonal walls meeting the surrounding rim, with molded markings inside the sole.','A fine repeating pattern covers the outsole, framing a central panel with the molded size marking.'],
      fsStory:['A white interior with hexagonal cells and visible molded markings. These are the original photographs of FS-01.','The side view reveals the rim height and fine edge texture, with the internal structure rising above the sole base.','Raised hexagons with dotted centers cover the outsole around the central area carrying the size marking.']
    }
  };
  Object.assign(dictionary.ar, {
    navigation:'التنقل الرئيسي', modelNavigation:'التنقل بين الموديلات', allModels:'كل الموديلات', showModels:'عرض الموديلات', hideModels:'إخفاء الموديلات', finish:'تشطيب الحافة', stitched:'مع حبل جلدي مخيط', plain:'بدون حبل جلدي مخيط',
    plainNote:'صورة داخلية واحدة متاحة لهذه النسخة. الصور باللون الأسود الأصلي.', stitchedNote:'ثلاث زوايا للنسخة ذات الحبل الجلدي المخيط. الصور باللون الأسود الأصلي.',
    classicCaption:'بنية داخلية مقسّمة',
    df2636Description:'يتميز DF-2636 بمظهر أنثوي منحوت ونقشة زهرية وبنية مصبوبة بدقة.',
    classicDescription:'DF-Classic بنية داخلية مقسّمة ونقشة خارجية متعرجة، بنسختين: مع حبل جلدي مخيط وبدونه.',
    classicStory:['اكتشف البنية الداخلية المقسّمة وحبل الجلد المخيط حول حافة DF-Classic.','تُظهر النظرة الجانبية حبل الجلد والخياطة الفاتحة المحيطة بالحافة السوداء.','نقشة متعرجة تغطي مقدمة النعل والكعب، تفصل بينهما منطقة وسطى ملساء.'],
    soulier3035Description:'Soulier 30–35 Tout terrain بنعل برتقالي مقاوم، بنية خفيفة، ونقشة عميقة للطرق الوعرة.',
    dfPortoDescription:'DF-Porto بنعل داكن خفيف، بنية داخلية شبكية ونقشة خارجية عملية لمقاسات 30–35.',    soulier3035Story:['تُظهر الصورة الداخلية بنية Soulier 30–35 Tout terrain والعلامات المصبوبة للمقاسات 32 و33.','يكشف الملف الجانبي ارتفاع النعل البرتقالي وتقسيمه المرن للطرق الوعرة.','تمنح الكتل البرتقالية البارزة ونقشة السطح العميقة ثباتاً واضحاً في التضاريس المختلفة.'],
    dfPorto2629Description:'DF-Porto بنعل داكن خفيف، بنية داخلية شبكية ونقشة خارجية عملية لمقاسات 26–29.',
    dfPortoStory:['تُظهر الصورة الداخلية بنية DF-Porto الشبكية والعلامات المصبوبة للمقاسين 32 و33.','يكشف الملف الجانبي ارتفاع حافة DF-Porto وشكله المتين لمقاسات 30–35.','تمنح الكتل والخطوط العميقة على السطح الخارجي ثباتاً عملياً.'],    dfPorto2629Story:['تُظهر الصورة الداخلية بنية DF-Porto الشبكية والعلامات المصبوبة للمقاسين 26 و27.','يكشف الملف الجانبي ارتفاع حافة DF-Porto وشكله المتين لمقاسات 26–29.','تمنح الكتل والخطوط العميقة على السطح الخارجي ثباتاً عملياً.'],
    df31Description:'DF-31 بنعل عاجي خفيف، بنية داخلية سداسية وتصميم عملي للاستخدام اليومي.',
    df31Story:['تُظهر الصورة الداخلية بنية DF-31 السداسية والعلامة المصبوبة للمقاس 41.','يكشف الملف الجانبي الحافة العاجية وارتفاع النعل المتوازن.','تغطي الخطوط العرضية سطح DF-31 الخارجي حول علامة المقاس.'],
    df32Description:'DF-32 بنعل أسود متين، شبكة داخلية مربعة وتصميم عملي للاستخدام اليومي.',
    df32Story:['تُظهر الصورة الداخلية شبكة DF-32 المربعة والعلامة المصبوبة للمقاس 41.','يكشف الملف الجانبي الحافة السوداء وارتفاع النعل المتين.','تمنح الخطوط العميقة سطح DF-32 الخارجي ثباتاً عملياً.'],
    df2639Description:'DF-2639 بنعل داكن وحافة مخيطة بخيط فاتح، مع دعامات داخلية متموجة ونقشة خارجية دقيقة.',
    df2639Story:['تُظهر الصورة الداخلية دعامات DF-2639 المتموجة والعلامة المصبوبة للمقاس 39.','يكشف الملف الجانبي ارتفاع النعل والخياطة الفاتحة حول الحافة.','تغطي النقشة الدقيقة سطح DF-2639 الخارجي مع منطقة وسطى ملساء.'],
    df2642Description:'DF-2642 بنعل أسود، دعامات داخلية متموجة ونقشة خارجية مستوحاة من التروس.',
    df2642Story:['تُظهر الصورة الداخلية دعامات DF-2642 المتموجة والعلامة المصبوبة للمقاس 38.','تعرض صور الجانب ارتفاع الحافة وشكل النعل من جهتين.','تظهر النقشة الخارجية تفاصيل دائرية مستوحاة من التروس.'],
    df849Description:'DF84-9 Sabot بنعل بلون بني فاتح، وبنية داخلية متقاطعة ونقشة خارجية بخطوط مائلة. تظهر علامة المقاس 38.',
    df849Story:['تُظهر الصورة الداخلية البنية المتقاطعة والعلامات المصبوبة DF84-9 و38.','يكشف المنظر الجانبي الحافة السميكة والبنية الداخلية.','تغطي الخطوط المائلة سطح النعل الخارجي.'],
    df8611Description:'DF-8611 بنعل أخضر زيتوني محفور، وبنية داخلية مصبوبة ونقشة خارجية بارزة للمقاسات 37–40.',
    df8611Story:['تُظهر الصورة الداخلية البنية المصبوبة والعلامة DF 8611 مع المقاس 38.','يكشف المنظر الجانبي الحافة المنقوشة والارتفاع المتوازن للنعل.','تمنح النقشة الخضراء الزيتونية العميقة تماسكاً عملياً على الأسطح المختلفة.'],
    dfZalidjDescription:'DF - Zalidj بنعل عاجي بنقشة هندسية، بنية داخلية شبكية وحافة جانبية متينة للمقاسات 26–29.',
    dfZalidjStory:['تُظهر الصورة الداخلية شبكة DF - Zalidj المائلة والدعامات المصبوبة داخل النعل.','يكشف المنظر الجانبي الحافة العاجية ونقشة السطح الجانبي الممتدة على طول النعل.','تمنح النقشة الهندسية المتكررة على السطح الخارجي ثباتاً عملياً للمقاسات 26–29.'],
    plainDescription:'DF-Classic بدون حبل جلدي مخيط. تعرض الصورة الأصلية البنية الداخلية المقسّمة وحافة النسخة البسيطة.',
    plainStory:['نسخة DF-Classic بدون حبل جلدي مخيط حول الحافة. هذه الصورة الداخلية هي الصورة المتاحة لهذه النسخة.']
  });
  Object.assign(dictionary.fr, {
    navigation:'Navigation principale',modelNavigation:'Navigation des modèles',allModels:'Tous les modèles',showModels:'Afficher les modèles',hideModels:'Masquer les modèles',finish:'Finition du bord',stitched:'Avec cordon en cuir cousu',plain:'Sans cordon en cuir cousu',
    plainNote:'Une photo intérieure disponible pour cette variante. Finition noire d’origine.',stitchedNote:'Trois vues de la variante avec cordon en cuir cousu. Finition noire d’origine.',
    classicCaption:'Structure intérieure compartimentée',
    df2636Description:'DF-2636 présente un profil féminin sculpté, une semelle florale et une structure moulée avec précision.',
    classicDescription:'DF-Classic : une structure intérieure compartimentée et un dessous à chevrons. Deux finitions : avec ou sans cordon en cuir cousu.',
    classicStory:['Découvrez les compartiments intérieurs et le cordon en cuir cousu autour du bord de DF-Classic.','La vue latérale révèle le cordon et la couture claire le long du bord noir.','Le motif à chevrons couvre l’avant et le talon, séparés par une zone centrale lisse.'],
    soulier3035Description:'Soulier 30–35 Tout terrain associe une semelle orange résistante, une structure légère et une accroche profonde pour les terrains accidentés.',
    dfPortoDescription:'DF-Porto associe une semelle sombre légère, une structure intérieure quadrillée et un dessous pratique pour les pointures 30–35.',    soulier3035Story:['La vue intérieure révèle la structure de Soulier 30–35 Tout terrain et les repères moulés des pointures 32 et 33.','Le profil montre la hauteur de la semelle orange et sa construction flexible pour les terrains accidentés.','Les crampons orange et le relief profond offrent une accroche sûre sur différentes surfaces.'],
    dfPorto2629Description:'DF-Porto associe une semelle sombre légère, une structure intérieure quadrillée et un dessous pratique pour les pointures 26–29.',
    dfPortoStory:['La vue intérieure révèle la structure quadrillée de DF-Porto et les repères moulés des pointures 32 et 33.','Le profil montre la hauteur du bord de DF-Porto et sa construction robuste pour les pointures 30–35.','Les blocs et rainures profondes du dessous offrent une accroche pratique.'],    dfPorto2629Story:['La vue intérieure révèle la structure quadrillée de DF-Porto et les repères moulés des pointures 26 et 27.','Le profil montre la hauteur du bord de DF-Porto et sa construction robuste pour les pointures 26–29.','Les blocs et rainures profondes du dessous offrent une accroche pratique.'],
    df31Description:'DF-31 associe une semelle ivoire légère, une structure intérieure alvéolaire et un profil pratique au quotidien.',
    df31Story:['La vue intérieure révèle la structure alvéolaire de DF-31 et le repère moulé de la pointure 41.','Le profil montre le bord ivoire et la hauteur équilibrée de la semelle.','Des lignes transversales couvrent le dessous de DF-31 autour du repère de pointure.'],
    df32Description:'DF-32 associe une semelle noire résistante, une structure intérieure quadrillée et un profil pratique au quotidien.',
    df32Story:['La vue intérieure révèle la grille carrée de DF-32 et le repère moulé de la pointure 41.','Le profil montre le bord noir et la hauteur robuste de la semelle.','Des rainures profondes donnent au dessous de DF-32 une accroche pratique.'],
    df2639Description:'DF-2639 présente une semelle sombre bordée d’un fil clair cousu, des nervures intérieures ondulées et un dessous finement texturé.',
    df2639Story:['La vue intérieure révèle les nervures ondulées de DF-2639 et le repère moulé de la pointure 39.','Le profil montre la hauteur de la semelle et la couture claire autour du bord.','Une texture fine couvre le dessous de DF-2639 autour d’une zone centrale lisse.'],
    df2642Description:'DF-2642 présente une semelle noire, des nervures intérieures ondulées et un dessous aux détails inspirés d’engrenages.',
    df2642Story:['La vue intérieure révèle les nervures ondulées de DF-2642 et le repère moulé de la pointure 38.','Les deux profils montrent la hauteur du bord et la forme de la semelle sous deux angles.','Le dessous dévoile des détails circulaires inspirés d’engrenages.'],
    df849Description:'DF84-9 Sabot présente une semelle brun clair, une structure intérieure croisée et un dessous à rainures diagonales. Le marquage indique la pointure 38.',
    df849Story:['La vue intérieure montre la structure croisée et les marquages moulés DF84-9 et 38.','Le profil révèle le bord épais et la structure intérieure.','Des rainures diagonales couvrent le dessous de la semelle.'],
    df8611Description:'DF-8611 présente une semelle vert olive texturée, une structure moulée et un relief extérieur marqué pour les pointures 37–40.',
    df8611Story:['La vue intérieure révèle la structure moulée et le marquage DF 8611 avec la pointure 38.','Le profil montre le bord texturé et la hauteur équilibrée de la semelle.','Le relief olive profond offre une accroche pratique sur différentes surfaces.'],
    dfZalidjDescription:'DF - Zalidj présente une semelle ivoire à motif géométrique, une structure intérieure quadrillée et un bord latéral robuste pour les pointures 26–29.',
    dfZalidjStory:['La vue intérieure révèle la grille diagonale et les renforts moulés de DF - Zalidj.','Le profil montre le bord ivoire et son motif texturé qui s’étend sur toute la semelle.','Le motif géométrique répété du dessous offre une accroche pratique pour les pointures 26–29.'],
    plainDescription:'DF-Classic sans cordon en cuir cousu. La photographie originale montre les compartiments intérieurs et le bord de cette finition épurée.',
    plainStory:['La variante DF-Classic sans cordon en cuir cousu autour du bord. Cette vue intérieure est la photographie disponible pour cette finition.']
  });
  Object.assign(dictionary.en, {
    navigation:'Main navigation',modelNavigation:'Model navigation',allModels:'All models',showModels:'Show models',hideModels:'Hide models',finish:'Edge finish',stitched:'With stitched leather cord',plain:'Without stitched leather cord',
    plainNote:'One interior photograph available for this variant. Original black finish.',stitchedNote:'Three views of the stitched leather cord variant. Original black finish.',
    classicCaption:'Compartmented interior',
    df2636Description:'DF-2636 features a sculpted feminine profile, floral tread and precision molded structure.',
    classicDescription:'DF-Classic combines a compartmented interior with a chevron outsole. Choose an edge finish with or without stitched leather cord.',
    classicStory:['Explore the interior compartments and stitched leather cord around the edge of DF-Classic.','The side photograph reveals the leather cord and light stitching along the black edge.','A chevron pattern covers the forefoot and heel, separated by a smooth central area.'],
    soulier3035Description:'Soulier 30–35 Tout terrain combines a durable orange sole, a lightweight structure and deep tread for rugged ground.',
    dfPortoDescription:'DF-Porto combines a lightweight dark sole, a grid interior and a practical outsole for sizes 30–35.',    soulier3035Story:['The interior view reveals the Soulier 30–35 Tout terrain structure and molded size marks for 32 and 33.','The side profile shows the orange sole height and flexible construction for off-road movement.','Raised orange lugs and deep tread deliver confident grip across changing terrain.'],
    dfPorto2629Description:'DF-Porto combines a lightweight dark sole, a grid interior and a practical outsole for sizes 26–29.',
    dfPortoStory:['The interior view reveals DF-Porto’s grid structure and molded size marks for 32 and 33.','The side profile shows DF-Porto’s edge height and robust build for sizes 30–35.','Deep blocks and grooves across the outsole provide practical grip.'],    dfPorto2629Story:['The interior view reveals DF-Porto’s grid structure and molded size marks for 26 and 27.','The side profile shows DF-Porto’s edge height and robust build for sizes 26–29.','Deep blocks and grooves across the outsole provide practical grip.'],
    df31Description:'DF-31 combines a lightweight ivory sole, a honeycomb interior structure and a practical everyday profile.',
    df31Story:['The interior view reveals DF-31’s honeycomb structure and its molded size 41 marking.','The side profile shows the ivory edge and balanced sole height.','Transverse grooves cover the DF-31 outsole around the size marking.'],
    df32Description:'DF-32 combines a durable black sole, a square inner grid and a practical everyday profile.',
    df32Story:['The interior view reveals DF-32’s square grid and molded size 41 marking.','The side profile shows the black edge and robust sole height.','Deep grooves give the DF-32 outsole a practical grip.'],
    df2639Description:'DF-2639 pairs a dark sole with a light stitched edge, wavy interior ribs and a finely textured outsole.',
    df2639Story:['The interior view reveals DF-2639’s wavy ribs and molded size 39 marking.','The side profile shows the sole height and light stitching around the edge.','A fine texture covers the DF-2639 outsole around a smooth central panel.'],
    df2642Description:'DF-2642 pairs a black sole with wavy interior ribs and an outsole pattern inspired by gears.',
    df2642Story:['The interior view reveals DF-2642’s wavy ribs and molded size 38 marking.','The two side profiles show the edge height and sole shape from opposite sides.','Circular details inspired by gears appear across the outsole.'],
    df849Description:'DF84-9 Sabot has a light brown sole, a crossed interior structure, and diagonal outsole grooves. The molded marking shows size 38.',
    df849Story:['The interior view shows the crossed structure and molded DF84-9 and 38 markings.','The side view shows the thick edge and interior structure.','Diagonal grooves cover the outsole.'],
    df8611Description:'DF-8611 features a textured olive green sole, a molded inner structure and pronounced tread for sizes 37–40.',
    df8611Story:['The interior view reveals the molded structure and DF 8611 marking with size 38.','The side profile shows the textured edge and balanced sole height.','Deep olive tread provides practical grip across different surfaces.'],
    dfZalidjDescription:'DF - Zalidj features an ivory sole with a geometric tread, a diagonal inner grid and a durable side edge for sizes 26–29.',
    dfZalidjStory:['The interior view reveals DF - Zalidj’s diagonal grid and molded supports.','The side profile shows the ivory edge and textured pattern running along the sole.','A repeating geometric tread provides practical grip for sizes 26–29.'],
    plainDescription:'DF-Classic without stitched leather cord. The original photograph shows the interior compartments and simple edge finish.',
    plainStory:['DF-Classic without stitched leather cord around the edge. This interior view is the photograph available for this variant.']
  });
  dictionary.ar.malagaStory[1]='تُظهر الصورة الجانبية الحافة المنحوتة والخطوط المحيطة بالنعل وتفاصيل ارتفاعه.';
  dictionary.fr.malagaStory[1]='La vue latérale révèle le bord sculpté, les lignes du pourtour et le profil de la semelle.';
  dictionary.en.malagaStory[1]='The side view reveals the sculpted edge, the lines around the rim and the height of the sole.';
  dictionary.en.df2636Story=['DF-2636 has transverse interior ribs and molded model and size markings.','The raised heel and curved arch define the DF-2636 profile.','A floral motif meets horizontal grooves across the black outsole.'];
  dictionary.fr.df2636Story=['DF-2636 présente des nervures intérieures transversales et des repères moulés.','Le talon surélevé et la cambrure dessinent le profil de DF-2636.','Un motif floral rejoint les rainures horizontales de la semelle noire.'];
  dictionary.ar.df2636Story=['يتميز DF-2636 بدعامات داخلية عرضية وعلامات مصبوبة للموديل والمقاس.','يحدد الكعب المرتفع والقوس المنحني المظهر الجانبي لموديل DF-2636.','تلتقي الزخرفة الزهرية مع الخطوط الأفقية على النعل الأسود.'];
  const models = [
    {id:'malaga',name:'DF-Malaga',title:'DF-<span>Malaga</span>',size:'39–40',views:['interior','side','outsole','profile'],folder:'assets/',description:'malagaDescription',story:'malagaStory',detail:'assets/side.png',category:'homme'},
    {id:'fs',name:'FS-01',title:'FS-<span>01</span>',size:'39–44',views:['interior','side','outsole'],folder:'assets/fs-01/',description:'fsDescription',story:'fsStory',detail:'assets/fs-01/side.png',category:'homme'},
    {id:'2636',name:'DF-2636',title:'DF-<span>2636</span>',size:'37',views:['interior','side','outsole','profile'],folder:'assets/df-2636/',description:'df2636Description',story:'df2636Story',detail:'assets/df-2636/profile.png',category:'femme'},
    {id:'2639',name:'DF-2639',title:'DF-<span>2639</span>',size:'39',views:['interior','side','outsole'],folder:'assets/df-2639/',description:'df2639Description',story:'df2639Story',detail:'assets/df-2639/side.png',category:'femme'},
    {id:'2642',name:'DF-2642',title:'DF-<span>2642</span>',size:'38',views:['interior','side','outsole','profile'],folder:'assets/df-2642/',description:'df2642Description',story:'df2642Story',detail:'assets/df-2642/profile.png',category:'femme'},
    {id:'df849',name:'DF84-9 Sabot',title:'DF84-<span>9 Sabot</span>',size:'38',views:['interior','side','outsole'],folder:'assets/df84-9/',description:'df849Description',story:'df849Story',detail:'assets/df84-9/side.png',category:'femme'},
    {id:'df8611',name:'DF-8611',title:'DF-<span>8611</span>',size:'37–40',views:['interior','side','outsole'],folder:'assets/df-8611/',description:'df8611Description',story:'df8611Story',detail:'assets/df-8611/side.png',category:'femme'},
    {id:'soulier3035',name:'Soulier 30–35',title:'Soulier <span>30–35</span>',size:'30–35',views:['interior','side','outsole'],folder:'assets/soulier-3035/',description:'soulier3035Description',story:'soulier3035Story',detail:'assets/soulier-3035/side.png',category:'junior'},
    {id:'df31',name:'DF-31',title:'DF-<span>31</span>',size:'41',views:['interior','side','outsole'],folder:'assets/df-31/',description:'df31Description',story:'df31Story',detail:'assets/df-31/side.png',category:'homme'},
    {id:'dfPorto',name:'DF-Porto',title:'DF-<span>Porto</span>',size:'30–35',views:['interior','side','outsole'],folder:'assets/df-porto-3035/',description:'dfPortoDescription',story:'dfPortoStory',detail:'assets/df-porto-3035/side.png',category:'junior'},
    {id:'dfPorto2629',name:'DF-Porto (26/29)',title:'DF-<span>Porto</span>',size:'26–29',views:['interior','side','outsole'],folder:'assets/df-porto-2629/',description:'dfPorto2629Description',story:'dfPorto2629Story',detail:'assets/df-porto-2629/side.png',category:'2629'},
    {id:'dfZalidj',name:'DF - Zalidj',title:'DF <span>- Zalidj</span>',size:'26–29',views:['interior','side','outsole'],folder:'assets/df-zalidj/',description:'dfZalidjDescription',story:'dfZalidjStory',detail:'assets/df-zalidj/side.png',category:'2629'},
    {id:'df32',name:'DF-32',title:'DF-<span>32</span>',size:'41',views:['interior','side','outsole'],folder:'assets/df-32/',description:'df32Description',story:'df32Story',detail:'assets/df-32/side.png',category:'homme'},
    {id:'classic',name:'DF-Classic',title:'DF-<span>Classic</span>',size:'39–40',views:['interior','side','outsole'],folder:'assets/df-classic/stitched-',description:'classicDescription',story:'classicStory',detail:'assets/df-classic/stitched-side.png',category:'homme',variants:{
      stitched:{views:['interior','side','outsole'],folder:'assets/df-classic/stitched-',description:'classicDescription',story:'classicStory',detail:'assets/df-classic/stitched-side.png'},
      plain:{views:['interior'],folder:'assets/df-classic/plain-',description:'plainDescription',story:'plainStory',detail:null}
    }}
  ];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let language = 'ar';
  try { const saved = localStorage.getItem('dauphin-language'); if (dictionary[saved]) language = saved; } catch (_) {}
  let modelIndex = 0, viewIndex = 0, transition;
  let classicVariant = 'stitched', selectedCategory = 'all';
  const categories = [
    {id:'all', label:'allCategories'},
    {id:'homme', label:'categoryHomme'},
    {id:'femme', label:'categoryFemme'},
    {id:'junior', label:'category3035'},
    {id:'2629', label:'category2629'},
    {id:'caddie', label:'categoryCaddie'}
  ];
  const model = () => {
    const base = models[modelIndex];
    return base.variants ? {...base,...base.variants[classicVariant]} : base;
  };
  const t = key => dictionary[language][key];
  const source = view => model().folder + view + '.png';
  const categoryLabel = id => {
    const category = categories.find(item => item.id === id);
    return category ? t(category.label) : id;
  };
  const filteredModels = () => {
    const all = models.map((m,i)=>({m,i}));
    return selectedCategory === 'all' ? all : all.filter(({m}) => m.category === selectedCategory);
  };
  function renderCategoryNav() {
    const tabs = $('#category-tabs');
    if(!tabs) return;
    tabs.replaceChildren(...categories.map(({id,label:labelKey})=>{
      const label = t(labelKey);
      const count = id === 'all' ? models.length : models.filter(item => item.category === id).length;
      const button=document.createElement('button');
      button.type='button';
      button.dataset.category=id;
      button.setAttribute('role','tab');
      button.setAttribute('aria-label',`${label} · ${count}`);
      button.setAttribute('aria-pressed',String(id===selectedCategory));
      const text = document.createElement('span'); text.textContent=label;
      const badge = document.createElement('small'); badge.textContent=String(count).padStart(2,'0');
      button.append(text,badge);
      return button;
    }));
  }
  const preloadCache = new Set();
  function preloadView(item, view){
    const url = item.folder + view + '.png';
    if(preloadCache.has(url)) return;
    preloadCache.add(url);
    const image = new Image();
    image.decoding = 'async';
    image.src = url;
  }
  function preloadNearbyViews(item){
    item.views.slice(viewIndex, viewIndex + 2).forEach(view => preloadView(item, view));
  }

  function renderLocale() {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    $('#language').value = language;
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('[data-label]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.label) || el.dataset.label); });
    $('#language').setAttribute('aria-label', t('language'));
    $('nav').setAttribute('aria-label', t('navigation'));
    syncRailToggle($('.collection-selector').classList.contains('rail-open'));
    $('.model-switcher').setAttribute('aria-label',t('models'));
    $('#materials').setAttribute('aria-label',t('materialStudy'));
    $('#angle-slider').setAttribute('aria-label',t('viewAngle'));
    renderModel(false);
    renderSection();
  }
  function renderTitle(name) {
    // Both the gradient and swimming silhouette are clipped to the same letterforms.
    $('#model-title').innerHTML=`<span class="sr-only">${name}</span><span class="title-mobile" aria-hidden="true"></span><svg class="title-ocean" viewBox="0 0 800 160" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="title-sea"><stop stop-color="#f1fcff"/><stop offset=".48" stop-color="#61ddff"/><stop offset="1" stop-color="#397bef"/></linearGradient>
        <clipPath id="title-letters"><text x="8" y="126" textLength="780" lengthAdjust="spacingAndGlyphs">${name}</text></clipPath>
        <linearGradient id="dolphin-water"><stop stop-color="#0754c9"/><stop offset=".6" stop-color="#3be4ff"/><stop offset="1" stop-color="#eeffff"/></linearGradient>
      </defs>
      <text x="8" y="126" textLength="780" lengthAdjust="spacingAndGlyphs" fill="url(#title-sea)">${name}</text>
      <g clip-path="url(#title-letters)"><g class="surfing-dolphin">
        
        <path d="M0 87 C40 43 88 47 116 66 L145 70 L119 80 C104 105 77 109 52 98 L33 126 L38 94 C22 90 9 90 0 87 L-29 103 L-17 80 L-37 62 Z M57 59 L72 29 L83 57 Z" fill="url(#dolphin-water)"/>
        <circle cx="108" cy="70" r="3" fill="#062654"/>
      </g></g>
    </svg>`;
    // iPhone Safari does not consistently honor SVG textLength on long
    // product names. Keep a real text fallback available for the phone
    // layout so Soulier 30–35 never loses the end of its title.
    const mobileTitle=$('#model-title .title-mobile');
    if(mobileTitle) mobileTitle.textContent=name;
  }
  function renderModel(animate = true) {
    const available = filteredModels();
    if(!available.length) return;
    if(!available.some(x=>x.i===modelIndex)) { modelIndex=available[0].i; viewIndex=0; }
    const item = model();
    document.body.dataset.model = item.id;
    const switcher = $('.model-switcher');
    switcher.dataset.mode = item.freeCarousel ? 'free-3d' : 'standard';
    switcher.classList.toggle('free-carousel', Boolean(item.freeCarousel));
    switcher.setAttribute('aria-label', t(item.freeCarousel ? 'free3d' : 'models'));
    $('#variant-picker').hidden = !item.variants;
    $('#variant-buttons').replaceChildren();
    if(item.variants) {
      ['stitched','plain'].forEach(key => {
        const button = document.createElement('button'); button.type='button'; button.dataset.variant=key;
        button.textContent=t(key); button.setAttribute('aria-pressed',String(key===classicVariant));
        button.addEventListener('click',()=>{
          const previousView=model().views[viewIndex]; classicVariant=key;
          viewIndex=Math.max(0,model().views.indexOf(previousView)); renderModel();
        });
        $('#variant-buttons').append(button);
      });
      $('#variant-note').textContent=t(classicVariant+'Note');
    }
    $('#viewer').dataset.variant=item.variants ? classicVariant : '';
    renderTitle(item.name);
    $('#model-description').textContent = t(item.description);
    $('#size-range').textContent = item.size;
    $('#photo-count').textContent = String(item.views.length).padStart(2,'0');
    $('#model-counter').textContent = `${String(available.findIndex(x=>x.i===modelIndex)+1).padStart(2,'0')} / ${String(available.length).padStart(2,'0')}`;
    const modelSelect=$('#model-select');
    modelSelect.replaceChildren(...available.map(({m,i})=>{const option=document.createElement('option');option.value=i;option.textContent=m.name;option.selected=i===modelIndex;return option;}));
    modelSelect.disabled=false;
    modelSelect.setAttribute('aria-label',t('model'));
    $('#model-prev').disabled=available.length<2; $('#model-next').disabled=available.length<2;
    $('#model-count').textContent=String(available.length).padStart(2,'0');
    $('#gallery-counter').textContent = `01 — 0${item.views.length}`;
    $('#model-announcement').textContent = `${item.name} · ${t('sizeRange')} ${item.size}`;
    $('#viewer').dataset.model = item.id;
    $('#view-tabs').replaceChildren();
    $('#view-cards').replaceChildren();
    item.views.forEach((view, index) => {
      const tab = document.createElement('button'); tab.type = 'button'; tab.textContent = t(view);
      tab.addEventListener('click', () => selectView(index)); $('#view-tabs').append(tab);
      const card = document.createElement('button'); card.type = 'button'; card.className = 'card'; card.dataset.model = item.id; card.dataset.view = view;
      card.style.setProperty('--card-index', index);
      const img = document.createElement('img'); img.src = source(view); img.alt = `${item.name} — ${t(view)}`; img.loading = 'lazy';
      const title = document.createElement('b'); title.textContent = t(view);
      const caption = document.createElement('span'); caption.textContent = item.id==='classic' && view==='interior' ? t('classicCaption') : t('captions')[['interior','side','outsole','profile'].indexOf(view)];
      card.append(img,title,caption); card.addEventListener('click', () => selectView(index)); $('#view-cards').append(card);
    });
    $('#view-cards').style.setProperty('--view-count', item.views.length);
    const singleView=item.views.length===1;
    $('#angle-slider').max = (item.views.length - 1) * 90;
    $('#angle-slider').disabled=singleView;
    $('#prev').disabled=singleView; $('#next').disabled=singleView;
    $('#angle-ticks').replaceChildren(...item.views.map((_,i) => {const span=document.createElement('span');span.textContent=`${i*90}°`;return span;}));
    $$('.story-model').forEach(el => { el.textContent = item.name; });
    $('.story-size').textContent = item.size;
    const chapters=t(item.story);
    $('#materials').classList.toggle('single-story',chapters.length===1);
    $$('.story-chapter').forEach((chapter,i)=>{chapter.hidden=i>=chapters.length;});
    $$('.story-image').forEach((image,i)=>{image.hidden=i>=chapters.length;});
    $('.story-step').hidden=chapters.length===1;
    chapters.forEach((body,i) => { $(`#story-body-${i}`).textContent=body; });
    $('.story-chapter[data-chapter="0"] .story-link').hidden=chapters.length===1;
    $('#story-primary').src = source('interior');
    if(item.detail) $('#story-secondary').src = item.detail;
    else $('#story-secondary').removeAttribute('src');
    if(item.views.includes('outsole')) $('#story-tertiary').src = source('outsole');
    else $('#story-tertiary').removeAttribute('src');
    selectView(Math.min(viewIndex,item.views.length-1),animate);
    requestScroll();
  }
  function selectView(index, animate = true) {
    const item = model();
    viewIndex = (index + item.views.length) % item.views.length;
    const view = item.views[viewIndex], photo = $('#hero-product'), model3d = $('#hero-product-model');
    const variantLabel=item.variants ? ' · '+t(classicVariant) : '';
    const useModel3d = Boolean(item.model3d && view === 'side');
    transition?.cancel();
    photo.hidden = useModel3d;
    if(model3d){
      model3d.hidden = !useModel3d;
      if(useModel3d){
        if(model3d.getAttribute('src') !== item.model3d) model3d.setAttribute('src', item.model3d);
        model3d.alt = item.name + ' — ' + t(view);
      }
    }
    if(!useModel3d){ photo.src = source(view); photo.alt = item.name + ' — ' + t(view) + variantLabel; }
    $('#viewer').dataset.renderMode = useModel3d ? '3d' : 'photo';
    $('#viewer').dataset.view = view;
    preloadNearbyViews(item);
    const slider = $('#angle-slider'); slider.value = viewIndex*90;
    slider.setAttribute('aria-valuetext',`${viewIndex*90}° · ${t(view)}`);
    slider.style.setProperty('--progress',`${item.views.length>1 ? viewIndex/(item.views.length-1)*100 : 0}%`);
    $('#angle-value').value = `${viewIndex*90}° · ${t(view)}`;
    ['#view-tabs button','#view-cards button'].forEach(selector => $$(selector).forEach((el,i) => {
      el.classList.toggle('active',i===viewIndex);el.classList.toggle('active-card',i===viewIndex);el.setAttribute('aria-pressed',String(i===viewIndex));
    }));
    if (animate && !reducedMotion.matches && photo.animate) transition = photo.animate([{translate:'14px 0',scale:'.97'},{translate:'0 0',scale:'1'}],{duration:360,easing:'cubic-bezier(.2,.8,.2,1)'});
  }
  function renderSection() {
    const available=filteredModels();
    const populated=available.length>0;
    if(populated){
      if(!available.some(({i})=>i===modelIndex)) { modelIndex=available[0].i; viewIndex=0; }
      renderModel(false);
    }
    $('#model-count').textContent=String(available.length).padStart(2,'0');
    $('#product').hidden=!populated; $('#gallery').hidden=!populated;
    $('#empty-collection').hidden=populated;
    if(!populated){
      $('#empty-title').textContent=categoryLabel(selectedCategory);
      $('#empty-message').textContent=t('emptyCategory');
      $('#model-select').replaceChildren();
      $('#model-select').disabled=true;
      $('#model-counter').textContent='00 / 00';
      $('#model-prev').disabled=true;
      $('#model-next').disabled=true;
    }
    renderCategoryNav();
    $('.collection-selector').setAttribute('aria-label',t('categoryNavigation'));
    requestScroll();
  }
  const railToggle=$('.rail-toggle');
  function syncRailToggle(open){
    railToggle.setAttribute('aria-expanded',String(open));
    railToggle.setAttribute('aria-label',t(open?'hideCategories':'showCategories'));
    railToggle.querySelector('[aria-hidden="true"]').textContent=open?'×':'+';
  }
  railToggle.addEventListener('click',()=>{
    const open=$('.collection-selector').classList.toggle('rail-open');
    syncRailToggle(open);
  });
  $('#category-tabs').addEventListener('click',event=>{
    const button=event.target.closest('button[data-category]');
    if(!button) return;
    selectedCategory=button.dataset.category;
    renderSection();
  });
  function switchModel(direction) {
    const previousView = model().views[viewIndex];
    const available=filteredModels();
    if(!available.length) return;
    const current=available.findIndex(x=>x.i===modelIndex);
    modelIndex=available[(current+direction+available.length)%available.length].i;
    viewIndex = Math.max(0,model().views.indexOf(previousView)); renderModel();
  }
  $('#model-prev').addEventListener('click',()=>switchModel(-1));
  $('#model-next').addEventListener('click',()=>switchModel(1));
  $('.model-switcher').addEventListener('keydown',event=>{
    if(event.target.tagName==='SELECT') return;
    if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();switchModel(event.key==='ArrowRight'?1:-1);}
  });
  $('#model-select').addEventListener('change',event=>{const index=Number(event.target.value); if(!filteredModels().some(({i})=>i===index))return; modelIndex=index;viewIndex=0;renderModel();});
  $('#language').addEventListener('change',event=>{
    language=event.target.value;
    try{localStorage.setItem('dauphin-language',language);}catch(_){}
    renderLocale();
  });
  $('#prev').addEventListener('click',()=>selectView(viewIndex-1));
  $('#next').addEventListener('click',()=>selectView(viewIndex+1));
  $('#angle-slider').addEventListener('input',event=>selectView(Math.round(Number(event.target.value)/90)));
  const viewer=$('#viewer');
  viewer.addEventListener('keydown',event=>{
    if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();selectView(viewIndex+(event.key==='ArrowRight'?1:-1));}
  });
  let dragStart=null;
  viewer.addEventListener('pointerdown',event=>{if(event.button!==0)return;dragStart=event.clientX;viewer.setPointerCapture(event.pointerId);});
  viewer.addEventListener('pointerup',event=>{if(dragStart!==null && Math.abs(event.clientX-dragStart)>35) selectView(viewIndex+(event.clientX<dragStart?1:-1));dragStart=null;});
  viewer.addEventListener('pointercancel',()=>{dragStart=null;});

  // Concept.gif choreography: pinned split panel, rising foreground card,
  // expanding image, staggered text, then the next image enters from below.
  const story=$('#materials'), primary=$('.story-primary'), secondary=$('.story-secondary'), tertiary=$('.story-tertiary');
  const intro=$('.cinematic-intro'), introLogo=$('.intro-logo-3d'), introLogoModel=$('#intro-logo-model'), introCopy=$('.intro-copy'), introFoot=$('.intro-foot'), introSky=$('.intro-sky'), introFlare=$('.intro-flare'), introWormhole=$('.intro-wormhole');
  const SPIN_DURATION=2000;
  introLogo?.style.setProperty('--intro-float-duration',`${SPIN_DURATION}ms`);
  const syncIntroViewport=()=>{
    // Older mobile browsers do not keep 100vh aligned with the visible
    // viewport when the address bar expands or collapses. Pin the opening to
    // the measured viewport height and refresh it on orientation changes.
    const viewportHeight=Math.max(320,Math.round(window.visualViewport?.height||window.innerHeight));
    document.documentElement.style.setProperty('--intro-height',`${viewportHeight}px`);
  };
  syncIntroViewport();
  addEventListener('orientationchange',()=>setTimeout(syncIntroViewport,180),{passive:true});
  addEventListener('resize',syncIntroViewport,{passive:true});
  const loadFileLogoData=()=>{
    if(location.protocol!=='file:' || window.__DF_SHOES_LOGO_DATA__) return Promise.resolve();
    return new Promise(resolve=>{
      const script=document.createElement('script');
      script.src='assets/base-basic-shaded-opening.data.js?v=optimized-1';
      script.onload=()=>resolve();
      script.onerror=()=>resolve();
      document.head.appendChild(script);
    });
  };
  const loadLogoModel=()=>{
    if(!introLogoModel) return false;
    const source=location.protocol==='file:' && window.__DF_SHOES_LOGO_DATA__
      ? window.__DF_SHOES_LOGO_DATA__
      : introLogoModel.dataset.src;
    if(!source) return false;
    if(!introLogoModel.getAttribute('src')){
      introLogoModel.loading='eager';
      introLogoModel.src=source;
      introLogoModel.setAttribute('src',source);
    }
    return true;
  };
  const clamp=value=>Math.max(0,Math.min(1,value));
  const smooth=value=>{const x=clamp(value);return x*x*(3-2*x);};
  let scrollPending=false;
  let introDismissed=false;
  let introCollapseTimer=null;
  let logoReady=false;
  let beginLogoFloat=()=>{};
  const markLogoReady=(showGlb=true)=>{
    if(logoReady) return;
    logoReady=true;
    if(showGlb){
      introLogo.classList.add('glb-ready');
      try{introLogoModel?.dismissPoster?.();}catch(_){ }
    }
    queueMicrotask(()=>beginLogoFloat());
  };
  if(introLogoModel){
    introLogoModel.addEventListener('load',()=>{
      // Dismiss the model-viewer poster first, then wait for two paint frames
      // so the real canvas is visible before the spin timer starts.
      try{introLogoModel.dismissPoster?.();}catch(_){ }
      requestAnimationFrame(()=>requestAnimationFrame(()=>markLogoReady(true)));
    },{once:true});
    introLogoModel.addEventListener('error',()=>{
      // Keep waiting for the real model. The opening must not replace the
      // requested GLB with a raster logo after a decoder error.
      introLogo.classList.add('logo-load-error');
    },{once:true});
    // Attach the listeners before assigning src so a fast cached model cannot
    // finish before the opening sequence starts listening.
    // Let model-viewer finish registering before assigning src on mobile
    // browsers that load the module asynchronously.
    const startLogoModel=()=>loadFileLogoData().then(loadLogoModel);
    if(customElements.get('model-viewer')) startLogoModel();
    else customElements.whenDefined('model-viewer').then(startLogoModel);
    // A cached model may finish before the listener is attached. Check the
    // element once after setup so the first frame can still use the GLB.
    queueMicrotask(()=>{
      try{if(introLogoModel.loaded) markLogoReady(true);} catch(_){ }
    });
  }
  // Assigned when the opening lock is installed. Keeping a no-op here lets
  // the scroll choreography call it safely before the lock setup runs.
  let unlockOpening=()=>{};
  function dismissOpening(){
    if(introDismissed) return;
    introDismissed=true;
    document.body.classList.add('intro-dismissed');
    const introHeight=intro.offsetHeight;
    introCollapseTimer=setTimeout(()=>{
      if(!intro.isConnected){ unlockOpening(); return; }
      if(intro.offsetHeight===0){ unlockOpening(); return; }
      const nextScroll=Math.max(0,scrollY-introHeight);
      intro.style.height='0px';
      document.body.classList.add('intro-collapsed');
      document.documentElement.classList.add('wormhole-travel');
      window.scrollTo({top:nextScroll,left:0,behavior:'auto'});
      // Mobile scroll anchoring can move the document again when the intro
      // collapses. Settle the landing position on the next two frames.
      requestAnimationFrame(()=>{
        window.scrollTo({top:nextScroll,left:0,behavior:'auto'});
        requestAnimationFrame(()=>window.scrollTo({top:nextScroll,left:0,behavior:'auto'}));
      });
      requestAnimationFrame(()=>document.documentElement.classList.remove('wormhole-travel'));
      document.body.classList.remove('wormhole-active');
      unlockOpening();
      requestScroll();
    },1350);
  }
  function updateScroll(){
    scrollPending=false;
    if(document.body.classList.contains('opening-lock') && scrollY>2){
      // Browsers may restore the previous scroll position during a reload or
      // back navigation after the opening lock is installed. Reassert the
      // opening frame instead of treating that restoration as completion.
      window.scrollTo({top:0,left:0,behavior:'auto'});
      return;
    }
    document.body.classList.toggle('scrolling',scrollY>100);
    const introRect=intro.getBoundingClientRect();
    const introProgress=clamp(-introRect.top/Math.max(1,intro.offsetHeight-innerHeight));
    const introExit=smooth((introProgress-.3)/.7);
    if(!introDismissed && introProgress>=.985) dismissOpening();
    document.body.classList.toggle('opening-active',introProgress<1 && introRect.bottom>0);
    document.body.classList.toggle('intro-complete',introProgress>=1 || introRect.bottom<=0);
    if(reducedMotion.matches){
      introLogo.style.transform='';introLogo.style.opacity=String(1-introExit);
      introCopy.style.opacity=String(1-introProgress);introFoot.style.opacity=String(1-introProgress);
    }else{
      introLogo.style.transform=`translate3d(0,${-introProgress*4}vh,0) scale(${1+introProgress*.1})`;
      introLogo.style.opacity=String(1-introExit);
      introCopy.style.opacity=String(1-smooth(introProgress/.54));
      introCopy.style.transform=`translate3d(0,${-introProgress*34}px,0)`;
      introFoot.style.opacity=String(1-smooth(introProgress/.3));
      introSky.style.transform=`scale(${1+introProgress*.12}) translateY(${introProgress*3}%)`;
    }
    introFlare.style.opacity=String(smooth((introProgress-.53)/.28)*(1-smooth((introProgress-.9)/.1)));
    const wormholeProgress=smooth((introProgress-.22)/.56)*(1-smooth((introProgress-.82)/.18));
    introWormhole.style.opacity=String(wormholeProgress*.9);
    introWormhole.style.transform=`translate3d(0,${introProgress*10}%,0) scale(${.34+wormholeProgress*.9}) rotate(${introProgress*95}deg)`;
    introWormhole.classList.toggle('active',wormholeProgress>.02);
    const heroRect=$('#product').getBoundingClientRect();
    $('#product').classList.toggle('scroll-entered',heroRect.top<innerHeight*.9 && heroRect.bottom>0);
    const rect=story.getBoundingClientRect();
    const progress=story.classList.contains('single-story') ? 0 : clamp(-rect.top/Math.max(1,story.offsetHeight-innerHeight));
    const a=smooth(progress/.48), b=smooth((progress-.52)/.48);
    story.style.setProperty('--story-progress',progress);
    if(reducedMotion.matches){
      [primary,secondary,tertiary].forEach(el=>{el.style.transform='';el.classList.remove('mobile-revealed');});
      $$('.story-chapter,.story-image').forEach(el=>{el.style.opacity='';el.style.transform='';el.classList.remove('mobile-revealed');el.removeAttribute('aria-hidden');el.inert=false;});
    }else if(innerWidth<=700){
      [primary,secondary,tertiary].forEach(el=>{el.style.transform='';});
      $$('.story-chapter,.story-image').forEach(el=>{
        const itemRect=el.getBoundingClientRect();
        const visible=itemRect.top<innerHeight*.88 && itemRect.bottom>innerHeight*.12;
        el.style.opacity='';
        el.style.transform='';
        el.classList.toggle('mobile-revealed',visible);
        el.removeAttribute('aria-hidden');
        el.inert=false;
      });
    }else{
      primary.style.transform=`translate3d(0,${-a*120}%,0) scale(${1+a*.08})`;
      const side=language==='ar'?1:-1;
      secondary.style.transform=`translate3d(${side*27*(1-a)}%,${62*(1-a)-b*112}%,0) scale(${.62+.38*a})`;
      tertiary.style.transform=`translate3d(0,${110*(1-b)}%,0) scale(${.95+.05*b})`;
      const weights=[1-smooth(progress/.25),smooth((progress-.14)/.2)*(1-smooth((progress-.65)/.2)),smooth((progress-.70)/.22)];
      $$('.story-chapter').forEach((el,i)=>{el.style.opacity=weights[i];el.style.transform=`translateY(${(1-weights[i])*24}px)`;el.setAttribute('aria-hidden',String(weights[i]<.1));el.inert=weights[i]<.1;});
    }
    $('.story-step').textContent=`0${progress<.32?1:progress<.77?2:3} / 03`;
    $$('.card').forEach(card=>{
      const pos=card.getBoundingClientRect();
      const visible=pos.top<innerHeight*.96;
      card.classList.toggle('revealed',visible||reducedMotion.matches);
    });
    if(innerWidth<=700){
      $$('.section-head,.detail-grid').forEach(block=>{
        const blockRect=block.getBoundingClientRect();
        block.classList.toggle('mobile-revealed',blockRect.top<innerHeight*.9 && blockRect.bottom>innerHeight*.08);
      });
    }
  }
  function requestScroll(){if(!scrollPending){scrollPending=true;requestAnimationFrame(updateScroll);}}
  addEventListener('scroll',requestScroll,{passive:true});
  addEventListener('resize',requestScroll);
  reducedMotion.addEventListener('change',requestScroll);
  renderLocale();
  document.body.classList.add('motion-ready');
  requestScroll();

  // Hold the opening at the top of the page until the real GLB is ready and
  // its two-second spin has completed.
  let openingTransitionStarted=false;
  const openingGuardOptions={capture:true,passive:false};
  const scrollKeys=new Set(['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' ']);
  const blockOpeningInput=event=>{
    if(!document.body.classList.contains('opening-lock')) return;
    if(event.type==='keydown' && !scrollKeys.has(event.key)) return;
    event.preventDefault();
    event.stopPropagation();
  };
  const lockOpening=()=>{
    try{history.scrollRestoration='manual';}catch(_){ }
    document.documentElement.classList.add('opening-lock');
    document.body.classList.add('opening-lock');
    window.scrollTo({top:0,left:0,behavior:'auto'});
    requestAnimationFrame(()=>window.scrollTo({top:0,left:0,behavior:'auto'}));
    ['wheel','touchmove'].forEach(type=>addEventListener(type,blockOpeningInput,openingGuardOptions));
    addEventListener('keydown',blockOpeningInput,openingGuardOptions);
  };
  unlockOpening=()=>{
    ['wheel','touchmove'].forEach(type=>removeEventListener(type,blockOpeningInput,openingGuardOptions));
    removeEventListener('keydown',blockOpeningInput,openingGuardOptions);
    document.documentElement.classList.remove('opening-lock');
    document.body.classList.remove('opening-lock');
  };
  const startOpeningTransition=()=>{
    if(openingTransitionStarted || introDismissed) return;
    openingTransitionStarted=true;
    document.body.classList.add('wormhole-active');
    document.documentElement.classList.add('wormhole-travel');
    introWormhole.classList.add('active');
    setTimeout(()=>{
      document.documentElement.classList.remove('wormhole-travel');
      dismissOpening();
    },3200);
  };
  beginLogoFloat=()=>{
    if(reducedMotion.matches || introDismissed || openingTransitionStarted) return;
    introLogo.classList.add('logo-spin-ready');
    setTimeout(()=>{
      if(!introDismissed && !openingTransitionStarted) startOpeningTransition();
    },SPIN_DURATION);
  };
  $('.intro-skip').addEventListener('click',event=>{
    if(!document.body.classList.contains('opening-lock')) return;
    event.preventDefault();
    startOpeningTransition();
  });
  if(!reducedMotion.matches){
    lockOpening();
  }else{
    // Keep reduced-motion users from being trapped behind a static intro.
    setTimeout(()=>{ if(!introDismissed) dismissOpening(); },1600);
  }
})();






