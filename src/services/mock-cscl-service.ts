import { CsclResult } from "@/data-objects/cscl-result";
import { ICsclService, ProcessOptions } from "./cscl-service.interface";

export class MockCsclService implements ICsclService {

  private readonly result = {
    "graph": {
      "participants": [
        "Animateur",
        "Mireille",
        "Fanny",
        "Monique",
        "Annie",
        "Clémence"
      ],
      "edges": [
        {
          "source": "Animateur",
          "target": "Annie",
          "weight": 144.9168997610545
        },
        {
          "source": "Animateur",
          "target": "Mireille",
          "weight": 206.47565611899086
        },
        {
          "source": "Animateur",
          "target": "Fanny",
          "weight": 160.12497302865887
        },
        {
          "source": "Animateur",
          "target": "Clémence",
          "weight": 158.0550771860665
        },
        {
          "source": "Animateur",
          "target": "Monique",
          "weight": 47.69826612618266
        },
        {
          "source": "Mireille",
          "target": "Annie",
          "weight": 170.7889076609434
        },
        {
          "source": "Mireille",
          "target": "Fanny",
          "weight": 193.40466070483117
        },
        {
          "source": "Mireille",
          "target": "Monique",
          "weight": 57.05214253693502
        },
        {
          "source": "Mireille",
          "target": "Clémence",
          "weight": 206.64481545202352
        },
        {
          "source": "Mireille",
          "target": "Animateur",
          "weight": 113.93121113795912
        },
        {
          "source": "Fanny",
          "target": "Animateur",
          "weight": 115.24028835543315
        },
        
        {
          "source": "Fanny",
          "target": "Mireille",
          "weight": 277.19621450238964
        },
        {
          "source": "Fanny",
          "target": "Clémence",
          "weight": 225.2359904296097
        },
        {
          "source": "Fanny",
          "target": "Monique",
          "weight": 61.72643747061494
        },
        {
          "source": "Monique",
          "target": "Fanny",
          "weight": 51.225982625437446
        },
        {
          "source": "Monique",
          "target": "Clémence",
          "weight": 47.54721969352419
        },
        {
          "source": "Monique",
          "target": "Mireille",
          "weight": 58.73594481784908
        },
        {
          "source": "Monique",
          "target": "Annie",
          "weight": 41.31261050298284
        },
        {
          "source": "Monique",
          "target": "Animateur",
          "weight": 20.09591984594289
        },
        {
          "source": "Annie",
          "target": "Animateur",
          "weight": 97.15074408080571
        },
        {
          "source": "Annie",
          "target": "Mireille",
          "weight": 235.06728453045275
        },
        {
          "source": "Annie",
          "target": "Fanny",
          "weight": 177.0946837653243
        },
        {
          "source": "Fanny",
          "target": "Annie",
          "weight": 202.76119656021868
        },
        {
          "source": "Annie",
          "target": "Clémence",
          "weight": 176.6283413877745
        },
        {
          "source": "Annie",
          "target": "Monique",
          "weight": 59.44440281183671
        },
        {
          "source": "Clémence",
          "target": "Annie",
          "weight": 172.43535784086092
        },
        {
          "source": "Clémence",
          "target": "Animateur",
          "weight": 101.128344740872
        },
        {
          "source": "Clémence",
          "target": "Fanny",
          "weight": 178.65470028274598
        },
        {
          "source": "Clémence",
          "target": "Monique",
          "weight": 50.674338258982374
        },
        {
          "source": "Clémence",
          "target": "Mireille",
          "weight": 230.21510055382373
        }
      ]
    },
    "participants": {
      "Animateur": {
        "CNAIndices.CONTRIBUTIONS_SCORE": 59.18230413630877,
        "CNAIndices.SOCIAL_KB": 467.8067993063584,
        "CNAIndices.OUTDEGREE": 717.2708722209534,
        "CNAIndices.INDEGREE": 447.5465081610128,
        "CNAIndices.BETWEENNESS": 0.0,
        "CNAIndices.CLOSENESS": 1.0,
        "CNAIndices.EIGENVECTOR": 0.4082482904638631
      },
      "Mireille": {
        "CNAIndices.CONTRIBUTIONS_SCORE": 91.25006545420362,
        "CNAIndices.SOCIAL_KB": 1031.7742701228221,
        "CNAIndices.OUTDEGREE": 741.8217374926923,
        "CNAIndices.INDEGREE": 1007.6902005235061,
        "CNAIndices.BETWEENNESS": 0.0,
        "CNAIndices.CLOSENESS": 1.0,
        "CNAIndices.EIGENVECTOR": 0.4082482904638631
      },
      "Fanny": {
        "CNAIndices.CONTRIBUTIONS_SCORE": 92.19543960786068,
        "CNAIndices.SOCIAL_KB": 792.122973295025,
        "CNAIndices.OUTDEGREE": 882.1601273182662,
        "CNAIndices.INDEGREE": 760.5050004069979,
        "CNAIndices.BETWEENNESS": 0.0,
        "CNAIndices.CLOSENESS": 1.0,
        "CNAIndices.EIGENVECTOR": 0.4082482904638631
      },
      "Monique": {
        "CNAIndices.CONTRIBUTIONS_SCORE": 30.53434376571156,
        "CNAIndices.SOCIAL_KB": 290.0450675140671,
        "CNAIndices.OUTDEGREE": 218.91767748573645,
        "CNAIndices.INDEGREE": 276.59558720455175,
        "CNAIndices.BETWEENNESS": 0.0,
        "CNAIndices.CLOSENESS": 1.0,
        "CNAIndices.EIGENVECTOR": 0.4082482904638631
      },
      "Annie": {
        "CNAIndices.CONTRIBUTIONS_SCORE": 70.35940525239813,
        "CNAIndices.SOCIAL_KB": 757.3752981847828,
        "CNAIndices.OUTDEGREE": 745.385456576194,
        "CNAIndices.INDEGREE": 732.2149723260603,
        "CNAIndices.BETWEENNESS": 0.0,
        "CNAIndices.CLOSENESS": 1.0,
        "CNAIndices.EIGENVECTOR": 0.4082482904638631
      },
      "Clémence": {
        "CNAIndices.CONTRIBUTIONS_SCORE": 87.28116845341373,
        "CNAIndices.SOCIAL_KB": 841.0951303789059,
        "CNAIndices.OUTDEGREE": 733.107841677285,
        "CNAIndices.INDEGREE": 814.1114441489984,
        "CNAIndices.BETWEENNESS": 0.0,
        "CNAIndices.CLOSENESS": 1.0,
        "CNAIndices.EIGENVECTOR": 0.4082482904638631
      }
    },
    "contributions": [
      {
        "id": 0,
        "text": "C’est Mireille qui commence.",
        "importance": 0.45785873332598237
      },
      {
        "id": 1,
        "text": "Grâce à la technologie, on a un dé numérique.",
        "importance": 0.5560352811359575
      },
      {
        "id": 2,
        "text": "Et qu’est-ce que je dois faire ?",
        "importance": 0.7332775406312985
      },
      {
        "id": 3,
        "text": "Tu lances le dé.",
        "importance": 0.5719870851799683
      },
      {
        "id": 4,
        "text": "Tu obtiens un 6. Si vous faites 1,2,3,4,ou 5, ça vous indique le numéro de la carte à piocher, si vous obtenez un 6 et ben vous avez le choix. Et puis il y a quelqu’un qui va se voir attribuer une mission. Ça va être toi. Que tu vas devoir remplir dans le tour de jeu, c’est-à-dire, d’ici à ce que le dé soit revenu à Mireille.",
        "importance": 2.7283706299143184
      },
      {
        "id": 5,
        "text": "Je dis rien ? ou il faut que, enfin je dis quelle est ma mission ou pas du tout ?",
        "importance": 2.3708306036378257
      },
      {
        "id": 6,
        "text": "Non tu la gardes pour toi.",
        "importance": 0.6401263666326934
      },
      {
        "id": 7,
        "text": "Tu peux me remontrer exactement quel est l’intitulé s’il te plaît ? [de la mission, sur la feuille d’animation], pour que je ne me trompe pas.",
        "importance": 2.4160812215018623
      },
      {
        "id": 8,
        "text": "Donc là tu la lis à tout le monde.",
        "importance": 1.5718912354703125
      },
      {
        "id": 9,
        "text": "Panoc 2016 interpréter.",
        "importance": 1.4954980081390596
      },
      {
        "id": 10,
        "text": "Pardon, je n’ai pas compris.",
        "importance": 0.5696046325394626
      },
      {
        "id": 11,
        "text": "Non ça ça y est sur toutes les cartes, c’est le nom du jeu.",
        "importance": 1.4720247248907834
      },
      {
        "id": 12,
        "text": "Donc c’est ?",
        "importance": 2.7699629180205716
      },
      {
        "id": 13,
        "text": "Interpréter.",
        "importance": 0.38704295968352254
      },
      {
        "id": 14,
        "text": "La question c’est toi, te dire, comment est-ce que je peux relier ce concept d’interpréter à.",
        "importance": 3.12889096273247
      },
      {
        "id": 15,
        "text": "À n’importe laquelle des questions ?",
        "importance": 0.5359542261312936
      },
      {
        "id": 16,
        "text": "Non à la tienne, là c’est ton tour, profites-en.",
        "importance": 0.5890116135079378
      },
      {
        "id": 17,
        "text": "Est-ce qu’on note que ce qui concerne notre question ou on note ce qu’on veut ?",
        "importance": 2.421377068708135
      },
      {
        "id": 18,
        "text": "Sur ton plateau a priori c’est ce qui augmente ta question, mais c’est des choses qui peuvent venir d’ailleurs. Et là chacun pourrait se demander comment on peut aider Mireille à l’intégrer dans son questionnement. Comment il pourrait trouver sa place. Si toi t’as une idée tu peux déjà la formuler et les autres enchaîneront.",
        "importance": 3.556916046687549
      },
      {
        "id": 19,
        "text": "Je n’ai pas du tout d’idée en fait.",
        "importance": 0.42928387559473846
      },
      {
        "id": 20,
        "text": "Donc c’est ton mot.",
        "importance": 1.6056939304487268
      },
      {
        "id": 21,
        "text": "C’est le mot que j’ai récolté donc je suis censée interpréter enfin glisser ce terme à l’intérieur de ma question.",
        "importance": 2.592008051721956
      },
      {
        "id": 22,
        "text": "Ou en quoi est-ce que l’action d’interpréter peut servir de levier ou poser une difficulté par rapport à la question que tu te poses peut-être.",
        "importance": 2.1727226305226472
      },
      {
        "id": 23,
        "text": "Ça me fait penser, je rejoins ce verbe-là aux outils parce que quand on a des outils en tant qu’enseignant, on va toujours les interpréter pour les utiliser ensuite à notre manière, on va rarement prendre les choses et les utiliser telles quelles, on va toujours les interpréter d’une certaine façon, voilà ça me fait penser à ça.",
        "importance": 2.2226608172015134
      },
      {
        "id": 24,
        "text": "Après c’est vrai que moi la question c’était, j’imagine le remplaçant qu’on appelle le matin et paf tu arrives et que ce soit rentrer en action assez rapidement sans se perdre.",
        "importance": 3.1599061414410046
      },
      {
        "id": 25,
        "text": "Du coup ne pas avoir à interpréter.",
        "importance": 0.3932034619710651
      },
      {
        "id": 26,
        "text": "Si c’est sur une journée réussir à être efficace rapidement sans se perdre.",
        "importance": 1.320608135354225
      },
      {
        "id": 27,
        "text": "Ça peut être une bonne réponse ?",
        "importance": 0.6008485763346842
      },
      {
        "id": 28,
        "text": "Y a pas de bonne réponse, y’- a éventuellement des réponses qui te conviennent ou qui ne te conviennent pas, qui te font avancer ou pas mais y a pas de bonne ou de mauvaise réponse.",
        "importance": 1.6472728225012054
      },
      {
        "id": 29,
        "text": "Ok donc je prends cette réponse ?",
        "importance": 2.36331573619031
      },
      {
        "id": 30,
        "text": "Tu en fais ce que tu veux et après tout le long du jeu vous pouvez faire évoluer vos plateaux.",
        "importance": 1.776187415439487
      },
      {
        "id": 31,
        "text": "Est-ce qu’il y a d’autres ? par rapport à la ? c’est bon pour cette carte interpréter ?",
        "importance": 3.711060686950372
      },
      {
        "id": 32,
        "text": "Mon rôle il est sur la.",
        "importance": 2.802208028780575
      },
      {
        "id": 33,
        "text": "D’ici à ce que le dé revienne à Mireille.",
        "importance": 0.6050748731452937
      },
      {
        "id": 34,
        "text": "Nous façonnons nos outils et ensuite nos outils nous façonnent (pensée).",
        "importance": 0.5578601095416897
      },
      {
        "id": 35,
        "text": "Ça me fait penser à une prise en main de quelque chose, d’une nouvelle notion par exemple.",
        "importance": 0.7028493055100896
      },
      {
        "id": 36,
        "text": "On reste enfermé.",
        "importance": 1.2014008438457044
      },
      {
        "id": 37,
        "text": "Ou alors le contraire.",
        "importance": 0.48821584901481085
      },
      {
        "id": 38,
        "text": "Pour l’évaluation.",
        "importance": 1.1359876351481064
      },
      {
        "id": 39,
        "text": "Sans parler des évaluations formatives, il faut leur montrer peut-être comment prendre en main, en utilisant un modèle.",
        "importance": 2.3429726446428565
      },
      {
        "id": 40,
        "text": "Un formatage.",
        "importance": 2.3736133046855064
      },
      {
        "id": 41,
        "text": "Oui il faudrait peut-être élargir un peu.",
        "importance": 0.3864888413902341
      },
      {
        "id": 42,
        "text": "Mais la question est de savoir si des évaluations formatives peuvent être conçues par des élèves, si tu leur demandes de façonner un outil.",
        "importance": 2.761669286650289
      },
      {
        "id": 43,
        "text": "Pour qu’ils aient des modèles en quelque sorte.",
        "importance": 0.4518276388253883
      },
      {
        "id": 44,
        "text": "Oui.",
        "importance": 1.3033735947885015
      },
      {
        "id": 45,
        "text": "Je trouve ça un petit peu particulier quand-même, ça résonne bien avec ta question, l’outil que tu as tiré.",
        "importance": 2.4801927199232963
      },
      {
        "id": 46,
        "text": "Mhh mhh.",
        "importance": 0.5326572985248675
      },
      {
        "id": 47,
        "text": "Est-ce qu’on fabrique des outils pour se façonner ?",
        "importance": 1.0290566437903745
      },
      {
        "id": 48,
        "text": "Des automatismes.",
        "importance": 1.1264764245527377
      },
      {
        "id": 49,
        "text": "Là on a par exemple, la carte qu’a tirée Monique, on réfléchit avec elle mais ça peut avoir un écho pour nous et à ce moment-là du coup.",
        "importance": 2.947508640096672
      },
      {
        "id": 50,
        "text": "Tu l’intègres dans ton plateau. Tu peux utiliser un post-it de couleur pour remplacer la carte sur ton plateau.",
        "importance": 0.9100103138989709
      },
      {
        "id": 51,
        "text": "2. Outil. Carte.",
        "importance": 1.8202932375263763
      },
      {
        "id": 52,
        "text": "Carte ?",
        "importance": 0.9722642054359352
      },
      {
        "id": 53,
        "text": "Carte.",
        "importance": 1.3932224407051128
      },
      {
        "id": 54,
        "text": "Par rapport à ma question ce serait peut-être une façon d’illustrer pour les autres et du coup de transmettre.",
        "importance": 2.940156746873699
      },
      {
        "id": 55,
        "text": "Une espèce de carte de procédure.",
        "importance": 0.4861053492621354
      },
      {
        "id": 56,
        "text": "Une carte de procédure.",
        "importance": 2.1098921538667548
      },
      {
        "id": 57,
        "text": "Moi ce que j’ai du mal à saisir c’est la notion de manipulation. Qu’est-ce que tu entends par man..., est-ce qu’on peut transmettre des manipulations ?",
        "importance": 2.94695839741292
      },
      {
        "id": 58,
        "text": "Ben justement c’est comment réussir à transmettre un savoir qu’on a acquis par la manipulation. Alors la manipulation ça peut être tout ça peut être des cubes, mais ça peut être aussi une histoire parce que manipulation d’un livre, c’est très vaste hein. Comment ne pas rester seul autour de sa manipulation et réussir à intégrer l’autre à la fois pour échanger, pour évoluer mais aussi pour lui transmettre des réflexions qu’on a pu avoir sur un thème.",
        "importance": 2.8268250869902123
      },
      {
        "id": 59,
        "text": "Alors excuse-moi je ne sais pas si j’avais bien compris, quand tu parles des pairs tu parles des pairs entre élèves ou moi je pensais que c’était l’enseignant qui va transmettre à d’autres enseignants stagiaires.",
        "importance": 2.210337188761104
      },
      {
        "id": 60,
        "text": "Non entre élèves mais ça pourrait être le cas aussi, je n’y ai pas pensé, là c’est pairs entre élèves.",
        "importance": 3.3615254714268152
      },
      {
        "id": 61,
        "text": "Juste une petite réflexion par rapport à la formulation que tu viens d’avoir là, sur quoi porte, tu as reformulé ta question en disant « comment transmettre les savoirs issus de la manipulation. Quel est l’objet de la transmission en fait ? Les savoirs issus de la manipulation ou les savoirs de manipulation ? Quel est l’enjeu ?",
        "importance": 3.272775779330856
      },
      {
        "id": 62,
        "text": "Les savoirs issus de la manipulation.",
        "importance": 0.4419687579020769
      },
      {
        "id": 63,
        "text": "Peut-être que tu as plusieurs niveaux de question dans ta question.",
        "importance": 0.6922863861748694
      },
      {
        "id": 64,
        "text": "4.",
        "importance": 0.7774607835578823
      },
      {
        "id": 65,
        "text": "Il a l’air partial ton dé là on tombe toujours sur le 4. [rires].",
        "importance": 1.8393363781521987
      },
      {
        "id": 66,
        "text": "Un cours de qualité n’est pas seulement enseigné, il est aussi préparé.",
        "importance": 0.47600363923383443
      },
      {
        "id": 67,
        "text": "rires.",
        "importance": 1.1277654404860198
      },
      {
        "id": 68,
        "text": "Bis.",
        "importance": 1.668537758137378
      },
      {
        "id": 69,
        "text": "Moi ça me fait penser sur le numérique, au fait de manipuler avant les outils numériques, pour pouvoir après les mettre en œuvre dans la classe.",
        "importance": 2.463871283109143
      },
      {
        "id": 70,
        "text": "Préparer tes outils mais préparer aussi ce que tu veux transmettre à travers tes outils.",
        "importance": 1.2431981343787033
      },
      {
        "id": 71,
        "text": "Mhhh mhhh.",
        "importance": 0.4935260020536031
      },
      {
        "id": 72,
        "text": "En préparant. Tu n’as pas peur de quelque chose que tu connais, que tu maîtrises, donc la préparation a un poids, un impact important.",
        "importance": 2.478931741204051
      },
      {
        "id": 73,
        "text": "Pour gagner en assurance et pour clarifier les objectifs.",
        "importance": 0.45661855112507094
      },
      {
        "id": 74,
        "text": "voilà.",
        "importance": 2.420831803487001
      },
      {
        "id": 75,
        "text": "Mais pourquoi les enseignants auraient-ils peur du numérique ?",
        "importance": 0.40346084570561286
      },
      {
        "id": 76,
        "text": "Pourquoi je ne sais pas mais en tous cas c’est un fait mais sinon.",
        "importance": 0.6242656969059662
      },
      {
        "id": 77,
        "text": "Une réponse ce serait qu’il y a beaucoup d’objectifs quand tu manipules du numérique et du coup tu es un peu perdue.",
        "importance": 3.27446265447731
      },
      {
        "id": 78,
        "text": "Moi je pense que ce n’est pas différent d’une autre situation pédagogique où il peut toujours y avoir des objectifs infinis en fait.",
        "importance": 3.1687409637475956
      },
      {
        "id": 79,
        "text": "Oui mais du coup tu maîtrises plus.",
        "importance": 0.5615632647273044
      },
      {
        "id": 80,
        "text": "Je pense que c’est plus ça, c’est la non-maîtrise de l’outil numérique qui fait que tu ne le mets pas en œuvre tout de suite parce qu’il y a déjà tellement de choses qui sont peu rassurantes, donc si on s’en rajoute encore une autre.",
        "importance": 2.200062546203972
      },
      {
        "id": 81,
        "text": "On peut dire aussi qu’on est pauvrement, enfin peut-être pas dans les lycées ou dans les collèges, mais en primaire, très pauvrement dotés et après quand on est doté avec du matériel de récupération qui ne fonctionne pas une fois sur deux.",
        "importance": 2.617970978767729
      },
      {
        "id": 82,
        "text": "On est tributaire du bon fonctionnement de l’outil.",
        "importance": 0.38561055949653933
      },
      {
        "id": 83,
        "text": "Si ça ne fonctionne pas t’es vraiment coincée. Il faut anticiper, prévoir, deux chemins.",
        "importance": 2.607599321340741
      },
      {
        "id": 84,
        "text": "Prévoir une solution de rechange.",
        "importance": 0.3836281371697461
      },
      {
        "id": 85,
        "text": "Et du coup tu n’y es pas contraint quand tu n’utilises pas le numérique, quand tu utilises le numérique il faut prévoir la roue de secours.",
        "importance": 2.5080857249051447
      },
      {
        "id": 86,
        "text": "C’est du travail en plus.",
        "importance": 0.5364017973792419
      },
      {
        "id": 87,
        "text": "C’est l’impression que ça donne.",
        "importance": 0.38507045043860066
      },
      {
        "id": 88,
        "text": "Mais si ça ne marche pas trois fois, tu prends ton plan B trois fois après tu prends ton plan A quoi.",
        "importance": 2.160278748194303
      },
      {
        "id": 89,
        "text": "C’est dissuasif tout à fait.",
        "importance": 0.38281211375130236
      },
      {
        "id": 90,
        "text": "Je suis un peu mal placée pour en parler vu qu’on a tout à disposition, c’est un peu difficile de se mettre à votre place.",
        "importance": 2.203964591278911
      },
      {
        "id": 91,
        "text": "Je voulais juste rajouter qu’au-delà de la peur c’est peut-être l’impression d’avoir passé énormément de temps à préparer son déroulement et du coup c’est très frustrant de tout devoir abandonner, c’est peut-être ça aussi.",
        "importance": 1.4980408722506355
      },
      {
        "id": 92,
        "text": "Mais avec le numérique t’abandonnes jamais parce que tu t’en resserviras.",
        "importance": 0.6265787315522745
      },
      {
        "id": 93,
        "text": "Non mais sur la séquence du jour.",
        "importance": 0.9191022039995643
      },
      {
        "id": 94,
        "text": "Je comprends nous ça nous arrive régulièrement d’avoir le réseau qui ne fonctionne pas, mais c’est jamais perdu, ça fait toujours des ressources que tu as à ta disposition.",
        "importance": 2.7757470350825377
      },
      {
        "id": 95,
        "text": "Alors c’est vrai qu’à l’école élémentaire et en maternelle des fois tu n’as qu’un seul poste et il faut que les enfants soient autonomes du coup ça rajoute tout un tas de contraintes.",
        "importance": 2.323003423991725
      },
      {
        "id": 96,
        "text": "C’est sûr que la question des moyens est importante là, c’est clair.",
        "importance": 0.6981250843149581
      },
      {
        "id": 97,
        "text": "J’y vais ?",
        "importance": 0.6573029074411937
      },
      {
        "id": 98,
        "text": "Vas-y.",
        "importance": 0.6773496625738574
      },
      {
        "id": 99,
        "text": "Outil.",
        "importance": 1.6357835460046621
      },
      {
        "id": 100,
        "text": "Outil. Dictionnaire.",
        "importance": 1.4027008739405715
      },
      {
        "id": 101,
        "text": "Euh, moi je dirai portfolio, enfin si on prend le dictionnaire comme hiérarchisation des informations je dirais portfolio et moi ça me parle bien c’est vrai qu’on essaye de rentrer en classe par les pratiques. Le portfolio c’est un espace d’auto-mutualisation mais euh ce qui est derrière la question c’est plutôt comment les productions des élèves peuvent amener au développement des compétences des autres élèves, voilà, comment est-ce que cette mutualisation-là va permettre de gagner en compétences.",
        "importance": 2.589384310919152
      },
      {
        "id": 102,
        "text": "Le fait d’utiliser le portfolio pour expliquer, rendre compte d’un travail, ce qui permet de réinvestir les notions ?",
        "importance": 2.542153434545885
      },
      {
        "id": 103,
        "text": "Oui et puis si tu veux, ils ont une progression dans l’acquisition de compétences donc le portfolio ça leur sert aussi à graduer, à démontrer la progressivité.",
        "importance": 2.8569356708630855
      },
      {
        "id": 104,
        "text": "À prendre conscience finalement de leur progression.",
        "importance": 0.3833073256784332
      },
      {
        "id": 105,
        "text": "Oui ils sont partis d’un point ils arrivent à un autre et ça nous permet nous aussi de les évaluer à travers ça.",
        "importance": 2.428888465422524
      },
      {
        "id": 106,
        "text": "C’est l’évaluation par les pairs auto-évaluation évaluation.",
        "importance": 0.38274582216264114
      },
      {
        "id": 107,
        "text": "Alors nous on ne leur demande pas de s’auto-évaluer, on leur fait faire des entretiens d’explicitation dans le cadre desquels ils vont pouvoir se servir de leur portfolio et puis démontrer qu’ils vont pouvoir se resservir de ce qu’ils ont fait dans un autre contexte, c’est surtout ça qui est important.",
        "importance": 2.09874007538803
      },
      {
        "id": 108,
        "text": "Juste avant d’entamer le tour suivant je vous propose de vous laisser une minute, tout le monde n’en aura pas forcément besoin, mais juste une minute pour vous dire « tiens je me pose sur mon plateau, est-ce qu’il y a des choses que je n’ai pas eu le temps de noter et que je voudrais ajouter ? des liens que je voudrais tisser », enfin une minute pour vous ou pour boire un coup.",
        "importance": 2.5979806521768922
      },
      {
        "id": 109,
        "text": "2. musée.",
        "importance": 3.814184349027975
      },
      {
        "id": 110,
        "text": "Bon donc déjà je sais qu’en tant que remplaçante, je n’emmènerais pas ma classe au musée dès le premier jour.",
        "importance": 2.5923515548011014
      },
      {
        "id": 111,
        "text": "Sauf si effectivement tu y es contrainte.",
        "importance": 0.3804725063169583
      },
      {
        "id": 112,
        "text": "Moi ça me fait penser aux traces, toutes les traces qu’on laisse dans la classe pour montrer ce qui a déjà été appris en général quand tu rentres dans une classe tu vois à peu près ce qui a déjà été fait, où on en est.",
        "importance": 2.145348397281124
      },
      {
        "id": 113,
        "text": "C’est vrai que ça peut être une bonne entrée en tant que remplaçante de valoriser finalement le travail qui a été fait, de partir sur ça, demander d’expliquer, réactiver tout ça et de démarrer des petits trucs ; ça peut être une idée effectivement.",
        "importance": 2.835689327480889
      },
      {
        "id": 114,
        "text": "Je pense à des sites de musée justement qui proposent des visites virtuelles.",
        "importance": 1.0799275669831727
      },
      {
        "id": 115,
        "text": "Par exemple tu as le Louvre où tu peux faire une visite virtuelle.",
        "importance": 1.9197938580975333
      },
      {
        "id": 116,
        "text": "Préparer une séance sur des œuvres précises.",
        "importance": 0.4376924703055831
      },
      {
        "id": 117,
        "text": "Le musée ça peut être la mémoire aussi, ça peut être la façon de conserver les traces de ce qui s’est fait pour que la personne qui arrive puisse quand elle arrive, savoir exactement ce qui a été fait.",
        "importance": 2.0719500341105253
      },
      {
        "id": 118,
        "text": "Tu veux dire la remplaçante ou le titulaire quand il revient ?",
        "importance": 2.1644264401199447
      },
      {
        "id": 119,
        "text": "Ben les deux.",
        "importance": 1.5185408861374106
      },
      {
        "id": 120,
        "text": "C’est vrai que dans les musées, il y a plein de choses exploitables à n’importe quel niveau, tu peux en faire une séance qui s’adaptera de la petite section au CM2.",
        "importance": 2.8308443324552437
      },
      {
        "id": 121,
        "text": "Je pensais à tout ce qui a des formes géométriques, tu peux à la fois travailler sur les couleurs, sur les angles, sur le tracé parallèle, enfin voilà, tu peux déployer de l’observation à la construction en géométrie.",
        "importance": 2.3411640206406252
      },
      {
        "id": 122,
        "text": "Pour les CM2.",
        "importance": 0.5627212382378474
      },
      {
        "id": 123,
        "text": "Mais je trouve que ce qui est intéressant pour les remplaçants c’est de faire des grosses séquences qui soient pluridisciplinaires parce qu’en plus ça peut te tenir la journée forcément un tableau avec des formes géométriques.",
        "importance": 3.1634570632947066
      },
      {
        "id": 124,
        "text": "Tu fais la géométrie le matin.",
        "importance": 0.38958988368166536
      },
      {
        "id": 125,
        "text": "L’après-midi construction, tu essaies de reproduire à l’identique, de changer, de travailler sur les couleurs.",
        "importance": 0.9839963747587062
      },
      {
        "id": 126,
        "text": "Tu as le vocabulaire, le dictionnaire sur l’ordinateur.",
        "importance": 0.549914189088197
      },
      {
        "id": 127,
        "text": "Il me semble que c’est pertinent de travailler comme ça quand on est remplaçant plutôt que de faire des petites séances.",
        "importance": 2.8737458139146588
      },
      {
        "id": 128,
        "text": "Eviter de morceler.",
        "importance": 0.3830518170039875
      },
      {
        "id": 129,
        "text": "En littérature tu peux aussi avoir la lecture ou comment est construite une autobiographie à partir de l’auteur, du coup tu as le français, la géométrie, les arts visuels.",
        "importance": 2.717297005088183
      },
      {
        "id": 130,
        "text": "C’est vrai moi quand j’étais remplaçante, j’avais l’habitude de faire un projet d’écriture sur une journée, mais le projet arts plastiques ça peut être sympa de changer un peu.",
        "importance": 2.329967719402984
      },
      {
        "id": 131,
        "text": "Après je suis sûre que tu peux le décliner sur une journée ou deux journées ou une semaine.",
        "importance": 1.055609118656504
      },
      {
        "id": 132,
        "text": "C’est bien.",
        "importance": 1.5510813591187447
      },
      {
        "id": 133,
        "text": "Et pour avoir été remplaçante , je finissais, quand j’avais une journée, pas une semaine, mais quand j’avais une journée je finissais par l’art visuel parce que ça permettait de partir sur une bonne note, une bonne impression à la fois pour moi et à la fois pour eux parce qu’il y avait une production artistique.",
        "importance": 2.230842755583545
      },
      {
        "id": 134,
        "text": "5 c’est action. Observation.",
        "importance": 3.1574420410607393
      },
      {
        "id": 135,
        "text": "Moi ça me fait penser au rôle de l’enseignant si on considère que les élèves conçoivent eux-mêmes les évaluations formatives, le rôle de l’enseignant ça va plus être de l’observation de ce qu’ils font comment ils le font par quelles procédures ils passent pour après essayer de remédier, d’assister.",
        "importance": 2.482838836405688
      },
      {
        "id": 136,
        "text": "Et justement ça peut être pour la construction d’évaluation formative par les élèves, il va forcément y avoir de l’observation de l’élève par un pair pour construire son évaluation formative.",
        "importance": 3.149636727517358
      },
      {
        "id": 137,
        "text": "La mutualisation, la co-construction.",
        "importance": 0.5478013361110291
      },
      {
        "id": 138,
        "text": "À partir d’une observation, d’une réflexion.",
        "importance": 0.42250694058821975
      },
      {
        "id": 139,
        "text": "mhh.",
        "importance": 1.1822304293446586
      },
      {
        "id": 140,
        "text": "Que ce soit dans ce que proposait l’enseignant auparavant ou ce que peuvent proposer les pairs.",
        "importance": 0.959382023475395
      },
      {
        "id": 141,
        "text": "Est-ce que par rapport à l’observation du processus de construction pourrait être intéressante ?",
        "importance": 2.3773079247031297
      },
      {
        "id": 142,
        "text": "Mhhh.",
        "importance": 1.4411069658430513
      },
      {
        "id": 143,
        "text": "Ah oui.",
        "importance": 1.0637503071125523
      },
      {
        "id": 144,
        "text": "Comment eux ils vont restituer la notion de concept qu’ils vont mettre en œuvre dans cette restitution-là. l’observation de ça est intéressante.",
        "importance": 3.184039336750661
      },
      {
        "id": 145,
        "text": "ouais.",
        "importance": 2.0121920615217634
      },
      {
        "id": 146,
        "text": "Peut-être aussi l’observation des stratégies mises en œuvre, être capables de les repérer, savoir ce qu’il faut utiliser.",
        "importance": 1.1696765984987387
      },
      {
        "id": 147,
        "text": "Tu veux dire faire émerger du travail les notions importantes ?",
        "importance": 1.8406274068375608
      },
      {
        "id": 148,
        "text": "Pas seulement les notions mais les stratégies, comment je sais que j’y arrive, sur quoi je peux m’aider, des choses comme ça.",
        "importance": 2.449188899197377
      },
      {
        "id": 149,
        "text": "C’était notion. Situation.",
        "importance": 1.6090077548936454
      },
      {
        "id": 150,
        "text": "Situation-problème.",
        "importance": 0.5679586970650572
      },
      {
        "id": 151,
        "text": "Ben oui parce que la manipulation ça peut aider à résoudre une situation-problème, enfin tout au moins être un tremplin pour donner du sens et pour suivre sur une notion difficile en fonction des âges.",
        "importance": 1.6870686172128548
      },
      {
        "id": 152,
        "text": "Ta situation va permettre finalement de libérer un peu la mémoire de travail en se libérant de tout ce qui est abstrait c’est comme cela qu’il faut la.",
        "importance": 2.760068170615771
      },
      {
        "id": 153,
        "text": "concevoir.",
        "importance": 2.3161675679540834
      },
      {
        "id": 154,
        "text": "S’appuyer sur la situation.",
        "importance": 0.3824115938127454
      },
      {
        "id": 155,
        "text": "Juste par rapport à ta question initiale, j’ai l’impression qu’on est sur l’activité d’un élève et dans ta question il y avait la transmission aux pairs où est-ce qu’elle peut retrouver sa place ?",
        "importance": 2.9030139850099075
      },
      {
        "id": 156,
        "text": "Ben justement peut-être que la situation telle qu’elle peut être proposée aux pairs permettrait de présenter la notion ou l’apprentissage qu’on veut transmettre.",
        "importance": 3.0325282237677116
      },
      {
        "id": 157,
        "text": "Dans des situations de tutorat un petit peu ?",
        "importance": 0.8147238970713809
      },
      {
        "id": 158,
        "text": "Un petit peu ouais.",
        "importance": 0.4280394432574591
      },
      {
        "id": 159,
        "text": "Pour moi situation ça veut dire concret, ça se relie au concret.",
        "importance": 0.874885554067412
      },
      {
        "id": 160,
        "text": "La manipulation, ce serait peut-être le concret que tu attends dans ton questionnement par rapport à une notion plus abstraite.",
        "importance": 2.0044492865654155
      },
      {
        "id": 161,
        "text": "transposition.",
        "importance": 1.0378473310897025
      },
      {
        "id": 162,
        "text": "ouais.",
        "importance": 2.159970815464219
      },
      {
        "id": 163,
        "text": "5. Action. Concevoir un scénario.",
        "importance": 0.6307896514989152
      },
      {
        "id": 164,
        "text": "Là encore ça s’applique bien à ta question.",
        "importance": 0.9045339759563638
      },
      {
        "id": 165,
        "text": "Peut-être.",
        "importance": 0.7062967554851616
      },
      {
        "id": 166,
        "text": "Concevoir un scénario.",
        "importance": 0.6196134095268402
      },
      {
        "id": 167,
        "text": "Ça veut dire penser les outils que tu vas utiliser.",
        "importance": 1.9244940355412474
      },
      {
        "id": 168,
        "text": "Ça rejoint l’anticipation.",
        "importance": 0.38899456897351076
      },
      {
        "id": 169,
        "text": "Une situation qui aurait du sens, comment on utiliserait le numérique pour résoudre une situation-problème.",
        "importance": 1.7704744313160554
      },
      {
        "id": 170,
        "text": "Est-ce qu’on pourrait pas parler d’articulation derrière l’idée de scénario peut-être ?",
        "importance": 0.9686584093539871
      },
      {
        "id": 171,
        "text": "D’articuler quoi et quoi ?",
        "importance": 0.6645557494381195
      },
      {
        "id": 172,
        "text": "Des temporalités ou des situations différentes, le scénario étant là pour les relier.",
        "importance": 0.744983793992648
      },
      {
        "id": 173,
        "text": "Temps différents, des situations différentes.",
        "importance": 0.41674541809725585
      },
      {
        "id": 174,
        "text": "4. L’exemple n’est pas une manière d’enseigner, c’est la seule. Albert Einstein. Donc la seule façon d’enseigner, c’est l’exemple.",
        "importance": 0.6739962740371757
      },
      {
        "id": 175,
        "text": "Ça va super bien avec ta question parce que des productions d’élèves c’est des exemples de ce qu’ils ont pu faire.",
        "importance": 2.6880082946207895
      },
      {
        "id": 176,
        "text": "Absolument.",
        "importance": 1.8893279605293123
      },
      {
        "id": 177,
        "text": "C’est ça c’est l’apprentissage par l’exemple.",
        "importance": 0.6072488468899999
      },
      {
        "id": 178,
        "text": "C’est exactement ça.",
        "importance": 0.5042660438305001
      },
      {
        "id": 179,
        "text": "Tu vois tu fais du Einstein sans le savoir.",
        "importance": 0.5645894599328262
      },
      {
        "id": 180,
        "text": "Ou dans l’autre sens.",
        "importance": 0.38275552698608983
      },
      {
        "id": 181,
        "text": "Et est-ce que par la mutualisation, tu ne déléguerais pas aux élèves une part de la mission d’enseignant ?",
        "importance": 2.288184620705221
      },
      {
        "id": 182,
        "text": "Euh, ben c’est ça en fait c’est ça mais c’est arriver à construire cet espace de mutualisation et la démonstration de la progression justement de ce qu’ils font.",
        "importance": 3.0225346087520326
      },
      {
        "id": 183,
        "text": "Ça ça veut dire que l’exemple vient de l’enseignant.",
        "importance": 0.963259159852379
      },
      {
        "id": 184,
        "text": "Non à des élèves.",
        "importance": 0.3840642786065064
      },
      {
        "id": 185,
        "text": "Mais quand il te demande si tu ne transposes pas une partie de ta mission à toi, ça sous-entend que ta mission à toi.",
        "importance": 3.092627488651878
      },
      {
        "id": 186,
        "text": "Ah c’était de ma mission à moi ? Pardon je n’avais pas entendu ça.",
        "importance": 0.9312945362971711
      },
      {
        "id": 187,
        "text": "Non, non, de l’enseignement. Je n’ai pas dit que l’enseignement était la propriété de qui que ce soit.",
        "importance": 0.6640835162116813
      },
      {
        "id": 188,
        "text": "Mais je pense qu’il faut se méfier de cette idée là parce que c’est l’idée de plus d’enseignants que l’on pense, l’idée que ça doit venir que de l’enseignant et là dans cette idée là on est dans complètement autre chose et c’est bien.",
        "importance": 2.2809802586712493
      },
      {
        "id": 189,
        "text": "Ah oui complètement, nous on essaie toujours de partir de la production des élèves.",
        "importance": 1.958810202692363
      },
      {
        "id": 190,
        "text": "Et ce d’autant plus qu’on est tous passés par la case professionnelle, on sait très bien que c’est sur ces acquisitions-là qu’ils sont les plus solides.",
        "importance": 2.247526577907046
      },
      {
        "id": 191,
        "text": "Et puis le fait de partir des exemples des élèves ça renforce un petit peu leur autonomie et puis après tout ce qui va avec la théorie de la motivation.",
        "importance": 2.0119664575903036
      },
      {
        "id": 192,
        "text": "La cohésion aussi.",
        "importance": 1.8948988151114656
      },
      {
        "id": 193,
        "text": "Du coup l’assurance.",
        "importance": 0.38332169959943957
      },
      {
        "id": 194,
        "text": "Est-ce qu’on pourrait faire une parallèle avec le mot mimétisme chez les plus jeunes au niveau des exemples ou c’est maladroit ?",
        "importance": 3.0609742609761743
      },
      {
        "id": 195,
        "text": "C’est l’apprentissage vicariant tu veux dire ? la reproduction.",
        "importance": 1.708467961053791
      },
      {
        "id": 196,
        "text": "Oui voilà.",
        "importance": 2.1085664349342554
      },
      {
        "id": 197,
        "text": "Entre eux tu veux dire.",
        "importance": 1.0831459214797716
      },
      {
        "id": 198,
        "text": "Oui bien-sûr.",
        "importance": 0.3805541954355785
      },
      {
        "id": 199,
        "text": "Ce qui est intéressant dans toutes les choses qui sont ressorties dans ce tour, c’est le fait de, ce qui est en commun, cette idée de transversalité de choses qui se retrouvent, qui servent aux uns et aux autres, ça ça apparaît, c’est inclus dans toutes nos réponses, possibilité de réponse, c’est une piste qui revient souvent.",
        "importance": 2.405800247219039
      },
      {
        "id": 200,
        "text": "Tu veux dire qu’on tire parti de toute proposition pour les amener à notre question ?",
        "importance": 3.250949148772835
      },
      {
        "id": 201,
        "text": "Ça veut dire que ce qu’on a pioché et ce qui est ressorti ça a toujours découlé sur une idée de transposition, de transversalité ou d’interdisciplinarité, pour mettre en évidence que les choses sont reliées entre elles, que c’est jamais un chemin mais plein de possibilités quoi.",
        "importance": 1.7780970370665639
      },
      {
        "id": 202,
        "text": "Complètement.",
        "importance": 0.49885201105334775
      },
      {
        "id": 203,
        "text": "Un troisième tour ? alors il sera un peu incomplet parce qu’il y a une troisième phase, que je n’ai pas évoquée tout à l’heure, à la fin on va terminer par un petit temps de debrief, vous aurez trois minutes pour faire le point avec vous-même et puis ce sera juste une nouvelle présentation aux autres de votre question et de son cheminement qu’est-ce qu’elle est devenue entre le début et la fin ? Donc on va peut-être encore tirer deux ou trois cartes et puis ensuite on passera à ce petit temps de débrief collectif.",
        "importance": 2.8405649956947174
      },
      {
        "id": 204,
        "text": "J’ai fait 6 donc je choisis ce que je veux. Donc Action : discussion.",
        "importance": 2.219678276731096
      },
      {
        "id": 205,
        "text": "Avec discussion, on sort un peu des outils mais je trouve que dans ta question avoir des outils pertinents ce serait bien parce que ça éviterait tout un temps de discussion avec les élèves sur où on en est, qu’est-ce qu’on a fait, qu’est-ce qu’on va faire, et puis toutes les discussions avec les collègues sur tout ce qui est fonctionnement, on perd un temps dans ces discussions-là et en effet, avoir des outils pourraient permettre d’éviter de vivre ça.",
        "importance": 2.293797231875925
      },
      {
        "id": 206,
        "text": "Mais du coup pour construire les outils il faut bien discuter.",
        "importance": 1.944177469818434
      },
      {
        "id": 207,
        "text": "Ouais enfin c’est assez vaste parce que moi dans discussion j’entends aussi le fait de pouvoir échanger avec les élèves et de revenir sur des choses qu’ils ont mal apprises mal comprises voilà je pense que c’est un temps précieux, y a pas que les outils numériques, y a aussi les échanges en face à face, la parole, tout ce qui ne passe pas par le numérique justement, tout le relationnel.",
        "importance": 2.719837828591207
      },
      {
        "id": 208,
        "text": "C’est vrai que quand tu arrives dans une classe en général tu n’es pas super bien accueilli, je sais pas ce qu’il se passe au niveau psychologique, j’avais entendu dire que certains élèves avaient l’impression que c’était par ta faute à toi que leur maîtresse ou leur maître n’était plus là, donc c’est vrai que t’es pas toujours bien accueilli et que les comportements sont un peu difficiles et qu’effectivement, peut-être cette discussion d’entrée en matière devrait être réfléchie voire scénarisée pour placer le cadre et qu’on ne se perde pas non plus dans des choses qui ne servent à rien.",
        "importance": 1.267126523716514
      },
      {
        "id": 209,
        "text": "Ça peut rassurer la parole elle rassure.",
        "importance": 1.311215785334463
      },
      {
        "id": 210,
        "text": "Mais alors que dire ? Qu’évoquer dans cette discussion quand tu arrives en tant que remplaçant ?",
        "importance": 2.8615563771114343
      },
      {
        "id": 211,
        "text": "Déjà dire que tu vas pas prendre la place.",
        "importance": 1.5790946854721932
      },
      {
        "id": 212,
        "text": "Te recentrer sur l’objet, le travail.",
        "importance": 0.3828096051851799
      },
      {
        "id": 213,
        "text": "Je pourrais me tromper, mais c’est plutôt une continuité dans le travail qu’un échange de personne, tu remplaces pas une enseignante mais tu la remplaces dans la continuité du travail donc du coup tu ramènes la discussion à un objet plutôt qu’à une personne, tu déshumanises un petit peu ce remplaçant.",
        "importance": 2.551764532985162
      },
      {
        "id": 214,
        "text": "Et puis l’outil numérique n’empêche pas que toi tu énonces ce que tu fais ou ce que tu veux faire, sachant que nous on utilise beaucoup l’outil numérique mais la première chose qu’on fait en arrivant c’est de parler, dire voilà aujourd’hui les objectifs c’est ça, c’est pas toujours affiché, ça permet un relationnel.",
        "importance": 2.726206197295012
      },
      {
        "id": 215,
        "text": "Mais c’est vrai qu’en tant que remplaçant quand tu arrives c’est une phase délicate cette entrée en matière.",
        "importance": 2.2686343989565665
      },
      {
        "id": 216,
        "text": "Chez les tout-petits ?",
        "importance": 0.5651216239486573
      },
      {
        "id": 217,
        "text": "Pas forcément, plutôt chez les CM2 qui sont là « ouais, y a un remplaçant » vraiment tu sais, alors qu’avec les plus petits ça va mieux à la limite.",
        "importance": 2.691262875168137
      },
      {
        "id": 218,
        "text": "C’est vrai je confirme.",
        "importance": 0.5003058039070633
      },
      {
        "id": 219,
        "text": "Par rapport à ce que tu dis, je dirais, peu importe l’outil que tu as prévu s’il n’y a pas cette discussion-là.",
        "importance": 3.1254142360377983
      },
      {
        "id": 220,
        "text": "Certainement et puis après tout dépend aussi si tu arrives en remplacement d’un remplaçant, et puis c’est l’explosion, mais c’est vrai cette discussion est importante.",
        "importance": 3.0515844213174166
      },
      {
        "id": 221,
        "text": "Et puis je crois qu’ils n’aiment pas être bousculés dans leurs habitudes, ils sont très procéduraux, ils ont des routines.",
        "importance": 0.4882641396405704
      },
      {
        "id": 222,
        "text": "Peut-être qu’il faudrait arriver avec un autre règlement, le règlement du remplaçant.",
        "importance": 1.5145238569097548
      },
      {
        "id": 223,
        "text": "Et puis dire pourquoi toi tu ne fais pas pareil.",
        "importance": 1.4352341909001627
      },
      {
        "id": 224,
        "text": "Ça peut mener à une discussion sur l’acceptation de la différence.",
        "importance": 0.5685485888704028
      },
      {
        "id": 225,
        "text": "Tout à fait.",
        "importance": 0.38579976232284036
      },
      {
        "id": 226,
        "text": "Donc de l’éducation civique, tu démarres la journée sur une autre entrée en matière quoi.",
        "importance": 2.2782994563944574
      },
      {
        "id": 227,
        "text": "Je vous propose qu’on passe à la phase de debriefing. Désolé pour Monique qui va être privée d’une carte supplémentaire.",
        "importance": 1.9973438874463851
      },
      {
        "id": 228,
        "text": "Moi ça m’arrange parce que je devais contredire.",
        "importance": 0.5192963617847797
      },
      {
        "id": 229,
        "text": "Donc du coup l’idée de ce petit temps de débriefing, vous prenez deux trois minutes pour faire un petit point, c’est juste pour verbaliser, faire émerger les points durs, ce qu’ont été vos questions de recherche et voir comment elles ont évolué et puis si vous pensez que ça peut être intéressant, rendre public le pourquoi de cette question de recherche au départ, est-ce qu’elle est liée à un questionnement professionnel ou quelque chose comme ça.",
        "importance": 2.3302181071042942
      },
      {
        "id": 230,
        "text": "Donc la question de départ c’était comment les productions d’élèves pourraient être mutualisées par les élèves pour faciliter les apprentissages ? et euh la question d’arrivée : comment faire en sorte que les productions d’élèves contribuent à l’approfondissement de leurs compétences d’apprentissage. C’est différent dans la mesure où en fait je me suis aperçue que j’avais déjà la réponse à ma question, la première et que ce qui m’importait pas c’était de savoir comment faire pour que les productions soient mutualisées puisqu’elles le sont déjà mais euh comment on peut faire en sorte que ça augmente leurs apprentissages et que ça approfondisse leurs compétences, et là je n’ai pas la réponse encore, voilà.",
        "importance": 1.950262965971042
      },
      {
        "id": 231,
        "text": "On est passé du comment au pourquoi en fait.",
        "importance": 0.38683399717244044
      },
      {
        "id": 232,
        "text": "Oui exactement enfin, c’est pas pourquoi parce que c’est pas, le pourquoi il est évident c’est pour leur faire acquérir des compétences c’est quel outil on peut développer pour mesurer ça, pour leur permettre de mesurer eux.",
        "importance": 3.0212669050388823
      },
      {
        "id": 233,
        "text": "La question était comment les enseignants peuvent-ils dépasser leur peur du numérique et du coup c’était intéressant parce que j’ai pu à chaque fois me resservir de vos petites cartes pour à chaque fois enrichir ma question et du coup euh en faisant un petit schéma je me rends compte qu’il y a beaucoup plus de choses dans les solutions pour dépasser la peur que dans la peur et ses causes. Ce côté-là il est très léger, le pourquoi les enseignants ont peur et par contre y a beaucoup de choses qu’on peut faire pour la dépasser pour peu qu’on s’en donne les moyens quoi. Voilà c’est ce qui ressort de ma réflexion. Tous les verbes, c’est visuel en fait, y a le pourquoi avec les raisons du pourquoi et puis dans les solutions, les actions, et ben tout ce qu’on a dit, anticiper des situations, préparer, s’adapter, mutualiser, articuler, laisser des traces voilà, après une autre question qui se rajoute un peu c’est la question des traces, parce que autant des séances ou des séquences ça laisse des traces concrètes, autant quand on est dans le numérique, on n’est pas dans le papier, dans les productions qu’on peut toucher, du coup ça pose la question de la forme de ces traces, de comment on les utilise après voilà mais c’est une autre question.",
        "importance": 2.364136881132122
      },
      {
        "id": 234,
        "text": "Moi c’était comment les manipulations peuvent être transmises aux pairs pour faciliter les apprentissages. J’ai un peu réduit ma question à quelles sont les manipulations à visée pédagogique qui sont transmissibles aux pairs ? Parce que toute manipulation au regard de tout ce que j’ai pu noter n’est pas facilement transmissible.",
        "importance": 2.7854275529459183
      },
      {
        "id": 235,
        "text": "Tu veux dire par imitation ?",
        "importance": 0.9626040598906469
      },
      {
        "id": 236,
        "text": "Par imitation elles le sont plus ou moins toutes, mais par intégration de la notion qui est travaillée par cette manipulation.",
        "importance": 1.4242738535722181
      },
      {
        "id": 237,
        "text": "La question aussi c’est justement est-ce que ça passe forcément par la manipulation ou est-ce que juste le fait de voir manipuler c’est suffisant pour acquérir la notion.",
        "importance": 2.7289998172755934
      },
      {
        "id": 238,
        "text": "Et du coup c’était l’idée de faire entrer le numérique là-dedans, c’est-à-dire qu’il n’y ait pas forcément une manipulation concrète mais une manipulation virtuelle, voilà c’était ça donc encore des points d’interrogation par rapport à ça. Est-ce que la manipulation numérique peut égaler ou même remplacer la manipulation matérielle, voilà. C’était la question sous-jacente.",
        "importance": 2.609997566675891
      },
      {
        "id": 239,
        "text": "Moi c’était comment les évaluations formatives peuvent être conçues par les élèves, je l’ai plus recentrée autour de deux choses : l’idée d’aider les élèves à les concevoir les évaluations : c’est l’idée que quand ils les conçoivent, ça leur apporte à eux-mêmes, c’est dans l’idée de faire le point sur les savoirs, les compétences et d’arriver à synthétiser, cibler l’essentiel des objectifs et intégrer ça dans une évaluation. Alors j’avais mis comment aider les élèves à construire des évaluations pertinentes pour eux-mêmes mais je n’arrive pas à trouver le mot, ce n’est pas que des outils ou des stratégies c’est tout un ensemble voilà à mettre en place.",
        "importance": 1.8398416271428086
      },
      {
        "id": 240,
        "text": "Y a un mot magique qui marche bien et qui veut tout dire c’est écosystème.",
        "importance": 1.5673464401815778
      },
      {
        "id": 241,
        "text": "Ecosystème ! c’est bien.",
        "importance": 1.2589602596670117
      },
      {
        "id": 242,
        "text": "rires.",
        "importance": 1.1378060314249312
      },
      {
        "id": 243,
        "text": "Comment n’y ai-je pas pensé.",
        "importance": 0.3815405225144
      },
      {
        "id": 244,
        "text": "Et qui te permet d’intégrer à la fois les outils, les stratégies, les situations de collaboration ou autre.",
        "importance": 1.6130372687769226
      },
      {
        "id": 245,
        "text": "Juste tu as parlé d’essentiel et c’est ça que va les aider à repérer les essentiels, ça c’est déjà une super bonne stratégie pour faire une évaluation.",
        "importance": 3.0947161303821376
      },
      {
        "id": 246,
        "text": "Moi ma question c’est quels outils peuvent être mis à profit pour que l’enseignant remplaçant puisse proposer des séances pertinentes sur une période d’une journée. Donc elle vient d’un vécu, où effectivement, la mission du remplaçant, je trouve que c’est une vraie mission et c’est pas vu comme ça dans notre système, moi une année où j’étais remplaçante, où je devais être visitée par mon inspecteur, il m’avait dit et ben il faudra que vous ayez un remplacement long, ben non pourquoi ? Venez me visiter en remplacement court, c’est un vrai travail d’arriver sur un remplacement court et je trouve que ce n’est pas considéré comme ça et au niveau de la formation des enseignants y a rien qui est mis en place pour aider le remplaçant sur une journée, c’est comme si on considérait que c’est de la garderie tout en disant que ça ne doit pas être de la garderie. Donc je trouve qu’il y a vraiment quelque chose à faire sur ça. On est remplaçant très longtemps, ça peut être dévalorisé, ça peut être super intéressant.",
        "importance": 2.7109540212484053
      },
      {
        "id": 247,
        "text": "Je pense que ça ne vient pas de la formation de l’institution parce que l’institution elle enseigne l’hétérogénéité, le fait d’être capable d’enseigner de la petite section au CM2, c’est après quand on est comme nous, installés, c’est une question de personne plus que d’institution.",
        "importance": 2.197513231616405
      },
      {
        "id": 248,
        "text": "Mais on t’apprend pas à faire face, y a quand même des particularités, à faire face à toutes ces nouveautés, propres aux remplaçants et je trouve que tu peux être très efficace en étant remplaçant, c’est vrai t’as pas été là toute l’année, juste une journée, mais eux n’ont pas perdu leur temps et toi non plus.",
        "importance": 2.7835039766666725
      },
      {
        "id": 249,
        "text": "C’est très formateur d’être remplaçant, moi je l’ai vécu comme ça.",
        "importance": 0.43059577851318326
      },
      {
        "id": 250,
        "text": "N’en profitez pas que ce soit la dernière pour relancer la conversation.je vous vois venir là. moi je vais être obligé de vous quitter donc je vais vous remercier parce que j’ai trouvé ça très riche et très intéressant après Carole en fera ce qu’elle veut dans le cadre de son mémoire, mais moi j’ai trouvé ça très intéressant, y a juste une dernière chose qu’on peut peut-être faire parce que je pense que ça peut aussi intéresser Carole d’avoir les réponses, juste refaire un tour de table en trois mots en disant pourquoi cette question a émergé et de quelle position vous vous l’êtes posée ? C’est-à-dire que c’est par rapport à une pratique professionnelle, personnelle, une réponse à une question de la classe on va dire, c’est par rapport à une fonction autre, complémentaire, autre que celle de la vie de la classe que vous exercez ou que vous envisager d’exercer, voilà, j’ai le sentiment diffus qu’il y a des façons d’amener les questions qui sont un peu diverses. Dans quelle posture vous vous êtes mises pour aborder la question.",
        "importance": 2.76886549815336
      },
      {
        "id": 251,
        "text": "Je vous laisse vous dépatouiller avec ça, je vous abandonne. Et ben bonne fin de journée.",
        "importance": 0.8013936812561594
      },
      {
        "id": 252,
        "text": "Je me suis lancée dans la certification de formatrice d’enseignants et comme j’ai été longtemps remplaçante, je trouve que c’est des choses qui nourrissent ma réflexion.",
        "importance": 2.2521431780736476
      },
      {
        "id": 253,
        "text": "Moi du coup c’est par rapport à un fonctionnement complètement différent entre les élèves et moi, ça m’a toujours intriguée, je suis synthétique dans ma manière d’aborder les choses et je trouve que les élèves se perdent tellement dans les détails, je ne comprends pas cette façon qu’ils ont de réviser en rajoutant toujours tout un tas de choses et de ne pas arriver à cibler l’essentiel. C’est pour ça que l’idée de leur apprendre à construire eux-mêmes une évaluation formative, j’espérerai que ça puisse les amener à cibler l’essentiel, à faire table rase de tout ce qui n’est pas utile.",
        "importance": 1.5207953243075198
      },
      {
        "id": 254,
        "text": "Et ben j’ai vu un outil : fiche de mémorisation active qui est à destination des élèves pour apprendre à se poser les bonnes questions, à avoir les bonnes réponses et à s’auto-réguler et si tu veux je t’enverrai le lien, c’est très bien, je l’ai testé sur ma fille, c’est un Mooc que j’ai fait sur les neurosciences et comment les utiliser dans les apprentissages, c’était assez simple mais des petits outils comme ça tu te dis, tiens, ça déblaye un petit peu et c’est très pratique.",
        "importance": 2.4510251520386634
      },
      {
        "id": 255,
        "text": "Moi j’ai cette question parce que je reste persuadée qu’il y a, en m’appuyant sur les neurosciences, des parties de notre cerveau qu’on n’utilise pas, qui restent sous-exploitées, qui du coup, le numérique permettrait d’activer pour obtenir des résultats différents avec une qualité différente et puis des chemins différents de la manipulation traditionnelle.",
        "importance": 2.516609584313198
      },
      {
        "id": 256,
        "text": "Alors moi je n’avais pas tellement de question avant de commencer en fait et puis comme on a travaillé sur un outil numérique toutes les deux et que c’est toi qui organises toute cela ça m’a fait penser à ce jeu qu’on avait testé, et ça m’a fait penser au fait qu’il y a beaucoup d’enseignants encore, pour toutes les raisons qu’on a évoquées, qui ont très peur de mettre en œuvre du numérique dans leur classe. Je trouve que ce n’est pas suffisant de se demander pourquoi mais comment on peut arriver à dépasser ça, ça peut être intéressant.",
        "importance": 1.9804840860943993
      },
      {
        "id": 257,
        "text": "Moi la question finalement, c’est comment l’outil numérique peut dépasser son statut d’outil pour devenir quelque chose qui permette l’approfondissement de l’apprentissage. C’est ça la question. Parce que pour le moment le numérique c’est un outil dont on se sert mais c’est pas un outil dont on se sert pour approfondir les connaissances et les apprentissages enfin en tous cas voilà.",
        "importance": 1.751827800229378
      },
      {
        "id": 258,
        "text": "Tu penses que ça pourrait être plus efficace avec un outil numérique ?",
        "importance": 1.6688129151651385
      },
      {
        "id": 259,
        "text": "Ouais, il faudrait qu’on le rende, voilà la question chez moi c’est exactement ça, comment est-ce qu’on peut le rendre plus efficace pour leur permettre d’aller plus loin.Et ça pour le moment je n’ai pas la réponse. voilà.",
        "importance": 3.5071490965938437
      }
    ]
  };

  public process(options: ProcessOptions): Promise<CsclResult> {
    return new Promise(resolve => setTimeout(() => resolve(this.result), 1000));
  }

}
