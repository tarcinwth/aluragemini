let dados = [
    {
        titulo: "Monkey D. Luffy",
        descricao: "Monkey D. Luffy, o protagonista de One Piece, é um jovem pirata alegre e aventureiro, conhecido por seu sorriso contagiante e seu sonho ambicioso de se tornar o Rei dos Piratas",
        link: "https://onepiece.fandom.com/pt/wiki/Monkey_D._Luffy",
        tags: "luffy borracha chapeu de palha",
    },
    {
        titulo: "Portgas D. Ace",
        descricao: "Portgas D. Ace era um pirata e o irmão mais velho de Luffy. Conhecido por sua habilidade com as chamas, ele era um comandante da divisão de piratas Barba Branca.",
        link: "https://onepiece.fandom.com/pt/wiki/Portgas_D._Ace",
        tags: "ace fogo pirata barba branca",
    },
    {
        titulo: "Marshall D. Teach (Barba Negra)",
        descricao: "Marshall D. Teach, mais conhecido como Barba Negra, é um pirata infame e um dos antagonistas principais de One Piece. Ele possui a habilidade de manipular a escuridão e é conhecido por sua ambição e crueldade.",
        link: "https://onepiece.fandom.com/pt/wiki/Marshall_D._Teach",
        tags: "barba negra escuridão pirata vilão",
    },

    {
        titulo: "Roronoa Zoro",
        descricao: "Roronoa Zoro é o espadachim dos Piratas do Chapéu de Palha e o primeiro a se juntar à tripulação de Luffy. Ele é conhecido por sua força e habilidade com as espadas.",
        link: "https://onepiece.fandom.com/pt/wiki/Roronoa_Zoro",
        tags: "zoro espadachim chapéu de palha",
    },
    {
        titulo: "Nami",
        descricao: "Nami é a navegadora dos Piratas do Chapéu de Palha. Ela é uma especialista em meteorologia e cartografia, além de ser uma excelente ladra.",
        link: "https://onepiece.fandom.com/pt/wiki/Nami",
        tags: "nami navegadora chapéu de palha",
    },
    {
        titulo: "Usopp",
        descricao: "Usopp é o atirador dos Piratas do Chapéu de Palha. Ele é conhecido por suas mentiras exageradas e por sua coragem crescente.",
        link: "https://onepiece.fandom.com/pt/wiki/Usopp",
        tags: "usopp atirador chapéu de palha",
    },
    {
        titulo: "Sanji",
        descricao: "Sanji é o cozinheiro dos Piratas do Chapéu de Palha. Ele é conhecido por sua paixão pela culinária e por seu cavalheirismo em relação às mulheres.",
        link: "https://onepiece.fandom.com/pt/wiki/Sanji",
        tags: "sanji cozinheiro chapéu de palha",
    },
    {
        titulo: "Tony Tony Chopper",
        descricao: "Tony Tony Chopper é o médico da tripulação e um rena que comeu a Fruta do Diabo Hito Hito, permitindo-lhe se transformar em humano e outras formas. Ele sonha em ser um grande médico que possa curar qualquer doença.",
        link: "https://onepiece.fandom.com/pt/wiki/Tony_Tony_Chopper",
        tags: "chopper médico rena fruta do diabo",
    },
    {
        titulo: "Nico Robin",
        descricao: "Nico Robin é a arqueóloga da tripulação e tem a habilidade de ler Poneglyphs. Ela é a única que pode decifrar os antigos escritos que revelam a história perdida do mundo.",
        link: "https://onepiece.fandom.com/pt/wiki/Nico_Robin",
        tags: "robin arqueóloga poniglyph",
    },
    {
        titulo: "Franky",
        descricao: "Franky é o carpinteiro da tripulação e um ciborgue com habilidades excepcionais em engenharia e construção. Ele sonha em construir um barco capaz de navegar até o fim do mundo.",
        link: "https://onepiece.fandom.com/pt/wiki/Franky",
        tags: "franky carpinteiro ciborgue",
    },
    {
        titulo: "Brook",
        descricao: "Brook é o músico da tripulação e um esqueleto vivo devido à Fruta do Diabo Yomi Yomi no Mi. Ele é conhecido por sua habilidade com a espada e seu talento musical.",
        link: "https://onepiece.fandom.com/pt/wiki/Brook",
        tags: "brook músico esqueleto espada",
    },

    {
        titulo: "Sengoku",
        descricao: "Sengoku, o Buda, é o ex-Almirante de Frota da Marinha. Conhecido por sua sabedoria e poder, ele desempenhou um papel crucial na Cúpula dos Piratas.",
        link: "https://onepiece.fandom.com/pt/wiki/Sengoku",
        tags: "sengoku buda marinha almirante",
    },
    {
        titulo: "Boa Hancock",
        descricao: "Boa Hancock, a Imperatriz Pirata, é a mulher mais bela do mundo e governante de Amazon Lily. Ela possui a Akuma no Mi Mero Mero no Mi, que permite que ela transforme pessoas em pedra.",
        link: "https://onepiece.fandom.com/pt/wiki/Boa_Hancock",
        tags: "boa hancock imperatriz pirata mero mero no mi",
    },

    {
        titulo: "Kaido",
        descricao: "Kaido, o capitão dos Piratas das Bestas, é um dos Yonko mais fortes. Ele é conhecido por sua força descomunal e por ser praticamente indestrutível.",
        link: "https://onepiece.fandom.com/pt/wiki/Kaido",
        tags: "kaido yonko piratas das bestas uou u no mi",
    },
    {
        titulo: "Monkey D. Luffy (Gear 5)",
        descricao: "A forma mais poderosa de Luffy, o Gear 5, permite que ele se transforme em borracha e utilize suas habilidades de forma ainda mais criativa.",
        link: "https://onepiece.fandom.com/pt/wiki/Gear_5",
        tags: "luffy gear 5 gomu gomu no mi",
    },
    {
        titulo: "Sabo",
        descricao: "Sabo é o irmão adotivo de Luffy e Ace, e um dos líderes da Revolução Mundial. Ele possui a habilidade da Mera Mera no Mi, que lhe confere poderes de fogo.",
        link: "https://onepiece.fandom.com/pt/wiki/Sabo",
        tags: "sabo fogo revolucionário",
    },
    {
        titulo: "Trafalgar D. Water Law",
        descricao: "Law é um pirata e capitão do Bando dos Coringas, conhecido por sua habilidade com a Fruta do Diabo Ope Ope no Mi, que lhe permite manipular o espaço ao seu redor.",
        link: "https://onepiece.fandom.com/pt/wiki/Trafalgar_D._Water_Law",
        tags: "law operação pirata fruta do diabo",
    },
    {
        titulo: "Jinbe",
        descricao: "Jinbe é um tritão e ex-Shichibukai que se junta à tripulação dos Chapéus de Palha como timoneiro. Ele é um mestre no uso do Haki e das artes marciais de tritão.",
        link: "https://onepiece.fandom.com/pt/wiki/Jinbe",
        tags: "jinbe tritão timoneiro",
    },
    {
        titulo: "Kyros",
        descricao: "Kyros é um ex-gladiador de Dressrosa e pai adotivo de Rebecca. Ele foi um dos lutadores mais poderosos da arena de coliseu e é conhecido por sua incrível força e coragem.",
        link: "https://onepiece.fandom.com/pt/wiki/Kyros",
        tags: "kyros gladiador dressrosa",
    },
    {
        titulo: "Crocodile",
        descricao: "Crocodile é um ex-Shichibukai e o principal antagonista da saga Alabasta. Ele possui a habilidade da Suna Suna no Mi, que lhe permite controlar a areia.",
        link: "https://onepiece.fandom.com/pt/wiki/Crocodile",
        tags: "crocodile areia ex-shichibukai",
    },
    {
        titulo: "Donquixote Doflamingo",
        descricao: "Doflamingo é um ex-Shichibukai e líder da família Donquixote. Ele possui a habilidade da Ito Ito no Mi, que lhe permite manipular fios e controlá-los como armas.",
        link: "https://onepiece.fandom.com/pt/wiki/Donquixote_Doflamingo",
        tags: "doflamingo fios shichibukai",
    },
    {
        titulo: "Kizaru (Borsalino)",
        descricao: "Kizaru é um almirante da Marinha conhecido por sua habilidade com a Pika Pika no Mi, que lhe permite se mover a velocidades de luz e criar feixes de luz.",
        link: "https://onepiece.fandom.com/pt/wiki/Borsalino",
        tags: "kizaru luz almirante",
    },
    {
        titulo: "Akainu (Sakazuki)",
        descricao: "Akainu é o atual almirante de frota da Marinha e possui a habilidade da Magu Magu no Mi, que lhe permite controlar e se transformar em magma.",
        link: "https://onepiece.fandom.com/pt/wiki/Sakazuki",
        tags: "akainu magma almirante de frota",
    },
    {
        titulo: "Enel",
        descricao: "Enel é o deus autoproclamado de Skypiea e possui a habilidade da Rumble Rumble no Mi, que lhe confere o poder de controlar e se transformar em eletricidade.",
        link: "https://onepiece.fandom.com/pt/wiki/Enel",
        tags: "enel eletricidade skypiea",
    },
    {
        titulo: "Dr. Vegapunk",
        descricao: "Dr. Vegapunk é um gênio cientista e chefe do Centro de Pesquisa da Marinha. Ele é responsável por muitas das inovações tecnológicas no mundo de One Piece, incluindo os Pacifistas.",
        link: "https://onepiece.fandom.com/pt/wiki/Vegapunk",
        tags: "vegapunk cientista tecnologia",
    },
    {
        titulo: "Shanks",
        descricao: "Shanks é um dos Quatro Imperadores do Mar e o capitão dos Piratas do Ruivo. Ele é conhecido por sua força formidável e seu papel crucial em várias partes da história.",
        link: "https://onepiece.fandom.com/pt/wiki/Shanks",
        tags: "shanks imperador ruivo",
    },
    {
        titulo: "Mihawk",
        descricao: "Dracule Mihawk é o espadachim mais forte do mundo e um dos Shichibukai. Ele é conhecido por sua habilidade incomparável com a espada e por ser um rival de Zoro.",
        link: "https://onepiece.fandom.com/pt/wiki/Dracule_Mihawk",
        tags: "mihawk espadachim shichibukai",
    },
    {
        titulo: "Akainu",
        descricao: "Akainu, cujo verdadeiro nome é Sakazuki, é um dos almirantes da Marinha e possui a habilidade da Magu Magu no Mi, que lhe permite controlar o magma.",
        link: "https://onepiece.fandom.com/pt/wiki/Sakazuki",
        tags: "akainu magma almirante",
    },
    {
        titulo: "Caimie",
        descricao: "Caimie é uma sereia e amiga dos Chapéus de Palha. Ela é conhecida por sua personalidade amigável e por ter sido uma prisioneira de Hody Jones.",
        link: "https://onepiece.fandom.com/pt/wiki/Caimie",
        tags: "caimie sereia amiga",
    },
    {
        titulo: "Rob Lucci",
        descricao: "Rob Lucci é um dos agentes mais poderosos da Organização CP9 e possui a habilidade da Fruta do Diabo Leão-Leão, que lhe permite se transformar em um leão e ter habilidades físicas aprimoradas.",
        link: "https://onepiece.fandom.com/pt/wiki/Rob_Lucci",
        tags: "rob lucci cp9 leão",
    },
    {
        titulo: "Bartholomew Kuma",
        descricao: "Kuma é um ex-Shichibukai e um dos Pacifistas, com a habilidade da Paw Paw no Mi, que lhe permite refletir qualquer ataque ou efeito que ele recebe.",
        link: "https://onepiece.fandom.com/pt/wiki/Bartholomew_Kuma",
        tags: "kuma pacifista shichibukai",
    },
    {
        titulo: "Oars",
        descricao: "Oars é um gigante que apareceu na saga Thriller Bark. Ele é conhecido por sua força imensa e por ser o antecessor de um dos mais poderosos gigantes.",
        link: "https://onepiece.fandom.com/pt/wiki/Oars",
        tags: "oars gigante thriller bark",
    },
    {
        titulo: "Edward Newgate (Barba Branca)",
        descricao: "Um dos Yonkou, conhecido como o homem mais forte do mundo. Era o capitão dos Piratas do Barba Branca.",
        link: "https://onepiece.fandom.com/pt/wiki/Edward_Newgate",
        tags: "barba branca yonkou marineford mais forte"
      },
      {
        titulo: "Gol D. Roger",
        descricao: "O Rei dos Piratas, que deixou o One Piece escondido em algum lugar. Sua morte marcou o início da Grande Era da Pirataria.",
        link: "https://onepiece.fandom.com/pt/wiki/Gol_D._Roger",
        tags: "roger rei dos piratas one piece grande era da pirataria"
      },
      {
        titulo: "Joy Boy",
        descricao: "Joy Boy foi um homem do Grande Reino que nasceu há 900 anos, no início do Século Perdido. Ele foi o primeiro pirata da história.[1] Uma figura extremamente relevante do Século Perdido, Joy Boy desempenhou um papel importante na história da Ilha dos Homens-Peixe, e deixou para trás um certo item de valor inimaginável na última ilha da Grand Line, tornando-se assim uma figura lendária e muito lembrada no Mundo.",
        link: "https://onepiece.fandom.com/pt/wiki/Joy_Boy",
        tags: "joyboy borracha nika"
      },
      {
        titulo:"Marco",
        descricao:"Marco, a Fênix[6][8] é o antigo comandante da 1ª divisão dos Piratas do Barba Branca.[2] Depois de começar como um aprendiz na tripulação,[9] ele eventualmente se tornou o confidente mais próximo e braço direito de Barba Branca.",
        link:"https://onepiece.fandom.com/pt/wiki/Marco",
        tags:"barba branca marco",
      }
    ]