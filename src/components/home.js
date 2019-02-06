import React, {Component} from "react";
const queryString = require('query-string');
const axios = require('axios');


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      codeAPE:[],
      region:'',
      num_dept:'',
      tranche_CA_2017:'',
      tranche_CA_2016:'',
      response: false
    }
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log("this.props: ")
    // console.log(this.props)
    // console.log("this.state: ")
    // console.log(this.state)
 

    // if (typeof this.state.codeAPE === 'object') {
    //   console.log("go codeAPE")
    //   var codeAPE = []
    //   codeAPE.push(this.state.codeAPE);
    // } else {
    //   var codeAPE = this.state.codeAPE;
    // }
    // console.log("----CodeApe----");
    // console.log(codeAPE);
    
    // if (typeof this.state.region === 'array') {
    //   var region = []
    //   region.push(this.state.region)
    // } else {
    //   var region = this.state.region;
    // }
    // console.log("----Region----");
    // console.log(region);
    // if (typeof this.state.num_dept === 'object') {
    //   var num_dept = []
    //   num_dept.push(this.state.num_dept)
    // } else {
    //   var num_dept = this.state.num_dept;
    // }
    // if (typeof this.state.tranche_CA_2017 === 'string') {
    //   var tranche_CA_2017 = []
    //   tranche_CA_2017.push(this.state.tranche_CA_2017)
    // } else {
    //   var tranche_CA_2017 = this.state.tranche_CA_2017;
    // }
    // if (typeof this.state.tranche_CA_2016 === 'string') {
    //   var tranche_CA_2016 = []
    //   tranche_CA_2016.push(this.state.tranche_CA_2016)
    // } else {
    //   var tranche_CA_2016 = this.state.tranche_CA_2016;
    // }

    console.log("this.state.codeAPE: ")
    console.log(this.state.codeAPE)
    console.log("this.state.codeAPE[0]: ")
    console.log(this.state.codeAPE[0])
    console.log("this.state.region: ")
    console.log(this.state.region)
    console.log("this.state.num_dept: ")
    console.log(this.state.num_dept)
    console.log("this.state.tranche_CA_2017: ")
    console.log(this.state.tranche_CA_2017)
    console.log("this.state.tranche_CA_2016: ")
    console.log(this.state.tranche_CA_2016)

    let allRequests = [];
let allLabels = "";
(this.state.codeAPE || [null]).forEach(elt => {
  console.log('forEach1');
  console.log(elt);
  (this.state.region || [null]).forEach(elt1 => {
  console.log('forEach2');
  console.log(elt1);
    (this.state.num_dept || [null]).forEach(elt2 => {
    console.log('forEach3');
    console.log(elt2);
      (this.state.tranche_CA_2017 || [null]).forEach(elt3 => {
        console.log('forEach4');
        console.log(elt3);
        (this.state.tranche_CA_2016 || [null]).forEach(elt4 => {
          console.log('forEach5');
          console.log(elt4);
          if (!elt == '') {
            let codeAPE = queryString.stringify({"refine.code_ape": elt});
            allLabels += '&'
            allLabels += codeAPE
          } else {console.log('elt not working');
          }
          if (!elt1 == '') {
            let codeRegion = queryString.stringify({"refine.region": elt1});
            allLabels += '&'
            allLabels += codeRegion
          } else {console.log('elt1 not working');
          }
          if (!elt2 == '') {
            let codeDepartement = queryString.stringify({"refine.num_dept": elt2});
            allLabels += '&'
            allLabels += codeDepartement
          } else {console.log('elt2 not working');
          }
          if (!elt3 == '') {
            let codeTrancheCA2017 = queryString.stringify({"refine.tranche_ca_millesime_1": elt3});
            allLabels += '&'
            allLabels += codeTrancheCA2017
          } else {console.log('elt3 not working');
          }
          if (!elt4 == '') {
            let codeTrancheCA2016 = queryString.stringify({"refine.tranche_ca_millesime_2": elt4});
            allLabels += '&'
            allLabels += codeTrancheCA2016
          } else {console.log('elt4 not working');
          }
          console.log('-----allLabelsstringy-----');
          console.log(allLabels);
          allRequests.push(axios.get(`https://opendata.datainfogreffe.fr/api/records/1.0/search/?dataset=chiffres-cles-2017&rows=-1${allLabels}`));
          allLabels = "";
        })
      })
    })
  })
})



console.log("allRequests: ")
console.log(allRequests)

this.setState({
  response: true},function() {
    console.log("this.state.response: " + this.state.response)

    })

}

  
  handleCodeAPEChange = (event) => {
    // console.log("event: ")
    // console.log(event)
    // console.log("event.target: ")
    // console.log(event.target)
    // console.log("event.target.value: " + event.target.value)
    // console.log("event.target.options: " + event.target.options)
    // console.log("event.target.options[1]: ")
    // console.log(event.target.options[1])
    // console.log("event.target.options[1].selected: ")
    // console.log(event.target.options[1].selected)
    // console.log("event.target.options[2].selected: ")
    // console.log(event.target.options[2].selected)
    // console.log("event.target.options[3].selected: ")
    // console.log(event.target.options[3].selected)
    var listCodeAPE = []
    var options = event.target.options
    for (var i=0, l = options.length; i<l; i++) {
      if (options[i].selected) {
        listCodeAPE.push(options[i].value);
      }
    }
    // console.log("codeAPE: " + codeAPE)

    this.setState({
      codeAPE: listCodeAPE},
      function() {
        // console.log("this.state.codeAPE: " + this.state.codeAPE)    
      })
  }



  handleRegionChange = (event) => {

    var listRegion = []
    var options = event.target.options
    for (var i=0, l = options.length; i<l; i++) {
      if (options[i].selected) {
        listRegion.push(options[i].value);
      }
    }
    this.setState({
      region: listRegion},
      function() {
        // console.log("this.state.region: " + this.state.region)
      })
  }
  handleNum_deptChange = (event) => {
    
    var listNum_dept = []
    var options = event.target.options
    for (var i=0, l = options.length; i<l; i++) {
      if (options[i].selected) {
        listNum_dept.push(options[i].value);
      }
    }
    this.setState({
      num_dept: listNum_dept},
      function() {
        // console.log("this.state.num_dept: " + this.state.num_dept)
      })
    }

  handleTranche_CA_2017Change = (event) => {
    var listTrance_CA_2017 = []
    var options = event.target.options
    for (var i=0, l = options.length; i<l; i++) {
      if (options[i].selected) {
        listTrance_CA_2017.push(options[i].value);
      }
    }
    this.setState({
      tranche_CA_2017: listTrance_CA_2017},
      function() {
        // console.log("this.state.num_dept: " + this.state.num_dept)
      })

  }
  handleTranche_CA_2016Change = (event) => {
    var listTrance_CA_2016 = []
    var options = event.target.options
    for (var i=0, l = options.length; i<l; i++) {
      if (options[i].selected) {
        listTrance_CA_2016.push(options[i].value);
      }
    }
    this.setState({
      tranche_CA_2016: listTrance_CA_2016},
      function() {
        // console.log("this.state.num_dept: " + this.state.num_dept)
      })

  }
render() {
  return (
    <div className="container">
      <div className="criteria-search-img height-100vh">
        <div className="container d-flex flex-column justify-content-center">
          <div className="row">
            <div
              className="col-md-6 offset-md-3 mauve"
              style={{
                marginTop: "30px",
                borderRadius: "8px",
                boxShadow: "0 0 34px 0 #dbdada"
              }}
            >
              <form onSubmit={this.handleFormSubmit}>
                {/* <button className="btn-save btn btn-primary btn-sm">Save</button> */}
                <select
                  className="mdb-select md-form colorful-select dropdown-primary"
                  multiple
                  searchable="Search here.."
                  name="codeAPE"
                  value={this.state.codeAPE}
                  onChange={(e) => this.handleCodeAPEChange(e)}
                >
                  <option value="" disabled selected>
                    Sélectionner les codes APE
                  </option>
                  <option value="0000Z">
                    {" "}
                    0000Z - EN INSTANCE DE CHIFFREMENT
                  </option>
                  <option value="0111Z">
                    {" "}
                    0111Z - Culture de cereales (a l'exception du riz), de
                    legumineuses et de graines olea.
                  </option>
                  <option value="0113Z">
                    {" "}
                    0113Z - Culture de legumes, de melons, de racines et de
                    tubercules
                  </option>
                  <option value="0119Z">
                    {" "}
                    0119Z - Autres cultures non permanentes
                  </option>
                  <option value="0121Z"> 0121Z - Culture de la vigne</option>
                  <option value="0123Z"> 0123Z - Culture d'agrumes</option>
                  <option value="0124Z">
                    {" "}
                    0124Z - Culture de fruits a pepins et a noyau
                  </option>
                  <option value="0129Z">
                    {" "}
                    0129Z - Autres cultures permanentes
                  </option>
                  <option value="0130Z">
                    {" "}
                    0130Z - Reproduction de plantes
                  </option>
                  <option value="0141Z">
                    {" "}
                    0141Z - Elevage de vaches laitieres
                  </option>
                  <option value="0142Z">
                    {" "}
                    0142Z - Elevage d'autres bovins et de buffles
                  </option>
                  <option value="0143Z">
                    {" "}
                    0143Z - Elevage de chevaux et d'autres equides
                  </option>
                  <option value="0145Z">
                    {" "}
                    0145Z - Elevage d'ovins et de caprins
                  </option>
                  <option value="0146Z"> 0146Z - Elevage de porcins</option>
                  <option value="0147Z"> 0147Z - Elevage de volailles</option>
                  <option value="0149Z">
                    {" "}
                    0149Z - Elevage d'autres animaux
                  </option>
                  <option value="0150Z">
                    {" "}
                    0150Z - Culture et elevage associes
                  </option>
                  <option value="0161Z">
                    {" "}
                    0161Z - Activites de soutien aux cultures
                  </option>
                  <option value="0162Z">
                    {" "}
                    0162Z - Activites de soutien a la production animale
                  </option>
                  <option value="0163Z">
                    {" "}
                    0163Z - Traitement primaire des recoltes
                  </option>
                  <option value="0210Z">
                    {" "}
                    0210Z - Sylviculture et autres activites forestieres
                  </option>
                  <option value="0220Z">
                    {" "}
                    0220Z - Exploitation forestiere
                  </option>
                  <option value="0240Z">
                    {" "}
                    0240Z - Services de soutien a l'exploitation forestiere
                  </option>
                  <option value="0311Z"> 0311Z - Peche en mer</option>
                  <option value="0321Z"> 0321Z - Aquaculture en mer</option>
                  <option value="0322Z">
                    {" "}
                    0322Z - Aquaculture en eau douce
                  </option>
                  <option value="0811Z">
                    {" "}
                    0811Z - Extra. de pierres ornementales, constr., calcaire
                    indus., gypse, craie, ardoise
                  </option>
                  <option value="0812Z">
                    {" "}
                    0812Z - Exploitation de gravieres et sablieres, extraction
                    d'argiles et de kaolin
                  </option>
                  <option value="0892Z"> 0892Z - Extraction de tourbe</option>
                  <option value="1011Z">
                    {" "}
                    1011Z - Transformation et conservation de la viande de
                    boucherie
                  </option>
                  <option value="1012Z">
                    {" "}
                    1012Z - Transformation et conservation de la viande de
                    volaille
                  </option>
                  <option value="1013A">
                    {" "}
                    1013A - Preparation industrielle de produits a base de
                    viande
                  </option>
                  <option value="1013B"> 1013B - Charcuterie</option>
                  <option value="1020Z">
                    {" "}
                    1020Z - Transformation et conservation de poisson, de
                    crustaces et de mollusques
                  </option>
                  <option value="1039B">
                    {" "}
                    1039B - Transformation et conservation de fruits
                  </option>
                  <option value="1041B">
                    {" "}
                    1041B - Fabrication d'huiles et graisses raffinees
                  </option>
                  <option value="1051A">
                    {" "}
                    1051A - Fabrication de lait liquide et de produits frais
                  </option>
                  <option value="1051C"> 1051C - Fabrication de fromage</option>
                  <option value="1051D">
                    {" "}
                    1051D - Fabrication d'autres produits laitiers
                  </option>
                  <option value="1061A"> 1061A - Meunerie</option>
                  <option value="1061B">
                    {" "}
                    1061B - Autres activites du travail des grains
                  </option>
                  <option value="1071A">
                    {" "}
                    1071A - Fabrication industrielle de pain et de patisserie
                    fraiche
                  </option>
                  <option value="1071B">
                    {" "}
                    1071B - Cuisson de produits de boulangerie
                  </option>
                  <option value="1071C">
                    {" "}
                    1071C - Boulangerie et boulangerie-patisserie
                  </option>
                  <option value="1071D"> 1071D - Patisserie</option>
                  <option value="1072Z">
                    {" "}
                    1072Z - Fabrication de biscuits, biscottes et patisseries de
                    conservation
                  </option>
                  <option value="1073Z">
                    {" "}
                    1073Z - Fabrication de pates alimentaires
                  </option>
                  <option value="1081Z"> 1081Z - Fabrication de sucre</option>
                  <option value="1082Z">
                    {" "}
                    1082Z - Fabrication de cacao, chocolat et de produits de
                    confiserie
                  </option>
                  <option value="1083Z">
                    {" "}
                    1083Z - Transformation du the et du cafe
                  </option>
                  <option value="1084Z">
                    {" "}
                    1084Z - Fabrication de condiments et assaisonnements
                  </option>
                  <option value="1085Z">
                    {" "}
                    1085Z - Fabrication de plats prepares
                  </option>
                  <option value="1089Z">
                    {" "}
                    1089Z - Fabrication d'autres produits alimentaires n.c.a.
                  </option>
                  <option value="1091Z">
                    {" "}
                    1091Z - Fabrication d'aliments pour animaux de ferme
                  </option>
                  <option value="1092Z">
                    {" "}
                    1092Z - Fabrication d'aliments pour animaux de compagnie
                  </option>
                  <option value="1101Z">
                    {" "}
                    1101Z - Production de boissons alcooliques distillees
                  </option>
                  <option value="1102A">
                    {" "}
                    1102A - Fabrication de vins effervescents
                  </option>
                  <option value="1102B"> 1102B - Vinification</option>
                  <option value="1105Z"> 1105Z - Fabrication de biere</option>
                  <option value="1310Z">
                    {" "}
                    1310Z - Preparation de fibres textiles et filature
                  </option>
                  <option value="1330Z"> 1330Z - Ennoblissement textile</option>
                  <option value="1392Z">
                    {" "}
                    1392Z - Fabrication d'articles textiles, sauf habillement
                  </option>
                  <option value="1396Z">
                    {" "}
                    1396Z - Fabrication d'autres textiles techniques et
                    industriels
                  </option>
                  <option value="1399Z">
                    {" "}
                    1399Z - Fabrication d'autres textiles n.c.a.
                  </option>
                  <option value="1413Z">
                    {" "}
                    1413Z - Fabrication de vetements de dessus
                  </option>
                  <option value="1414Z">
                    {" "}
                    1414Z - Fabrication de vetements de dessous
                  </option>
                  <option value="1419Z">
                    {" "}
                    1419Z - Fabrication d'autres vetements et accessoires
                  </option>
                  <option value="1512Z">
                    {" "}
                    1512Z - Fabrication d'articles de voyage, de maroquinerie et
                    de sellerie
                  </option>
                  <option value="1520Z">
                    {" "}
                    1520Z - Fabrication de chaussures
                  </option>
                  <option value="1610A">
                    {" "}
                    1610A - Sciage et rabotage du bois, hors impregnation
                  </option>
                  <option value="1610B"> 1610B - Impregnation du bois</option>
                  <option value="1623Z">
                    {" "}
                    1623Z - Fabrication de charpentes et d'autres menuiseries
                  </option>
                  <option value="1624Z">
                    {" "}
                    1624Z - Fabrication d'emballages en bois
                  </option>
                  <option value="1629Z">
                    {" "}
                    1629Z - Fab. d'objets divers en bois, fab. d'objets en
                    liege, vannerie, sparterie
                  </option>
                  <option value="1721B">
                    {" "}
                    1721B - Fabrication de cartonnages
                  </option>
                  <option value="1723Z">
                    {" "}
                    1723Z - Fabrication d'articles de papeterie
                  </option>
                  <option value="1729Z">
                    {" "}
                    1729Z - Fabrication d'autres articles en papier ou en carton
                  </option>
                  <option value="1812Z">
                    {" "}
                    1812Z - Autre imprimerie (labeur)
                  </option>
                  <option value="1813Z">
                    {" "}
                    1813Z - Activites de pre-presse
                  </option>
                  <option value="2013A">
                    {" "}
                    2013A - Enrichissement et retraitement de matieres
                    nucleaires
                  </option>
                  <option value="2015Z">
                    {" "}
                    2015Z - Fabrication de produits azotes et d'engrais
                  </option>
                  <option value="2041Z">
                    {" "}
                    2041Z - Fabrication de savons, detergents et produits
                    d'entretien
                  </option>
                  <option value="2042Z">
                    {" "}
                    2042Z - Fabrication de parfums et de produits pour la
                    toilette
                  </option>
                  <option value="2053Z">
                    {" "}
                    2053Z - Fabrication d'huiles essentielles
                  </option>
                  <option value="2059Z">
                    {" "}
                    2059Z - Fabrication d'autres produits chimiques n.c.a.
                  </option>
                  <option value="2120Z">
                    {" "}
                    2120Z - Fabrication de preparations pharmaceutiques
                  </option>
                  <option value="2219Z">
                    {" "}
                    2219Z - Fabrication d'autres articles en caoutchouc
                  </option>
                  <option value="2221Z">
                    {" "}
                    2221Z - Fabrication de plaques, feuilles, tubes et profiles
                    en matieres plastiques
                  </option>
                  <option value="2222Z">
                    {" "}
                    2222Z - Fabrication d'emballages en matieres plastiques
                  </option>
                  <option value="2223Z">
                    {" "}
                    2223Z - Fabrication d'elements en matieres plastiques pour
                    la construction
                  </option>
                  <option value="2229A">
                    {" "}
                    2229A - Fabrication de pieces techniques a base de matieres
                    plastiques
                  </option>
                  <option value="2229B">
                    {" "}
                    2229B - Fabrication de produits de consommation courante en
                    matieres plastiques
                  </option>
                  <option value="2312Z">
                    {" "}
                    2312Z - Faconnage et transformation du verre plat
                  </option>
                  <option value="2319Z">
                    {" "}
                    2319Z - Fabrication et faconnage d'autres articles en verre,
                    y compris verre technique
                  </option>
                  <option value="2341Z">
                    {" "}
                    2341Z - Fabrication d'articles ceramiques a usage domestique
                    ou ornemental
                  </option>
                  <option value="2344Z">
                    {" "}
                    2344Z - Fabrication d'autres produits ceramiques a usage
                    technique
                  </option>
                  <option value="2349Z">
                    {" "}
                    2349Z - Fabrication d'autres produits ceramiques
                  </option>
                  <option value="2363Z">
                    {" "}
                    2363Z - Fabrication de beton pret a l'emploi
                  </option>
                  <option value="2369Z">
                    {" "}
                    2369Z - Fabrication d'autres ouvrages en beton, en ciment ou
                    en platre
                  </option>
                  <option value="2370Z">
                    {" "}
                    2370Z - Taille, faconnage et finissage de pierres
                  </option>
                  <option value="2433Z">
                    {" "}
                    2433Z - Profilage a froid par formage ou pliage
                  </option>
                  <option value="2442Z">
                    {" "}
                    2442Z - Metallurgie de l'aluminium
                  </option>
                  <option value="2445Z">
                    {" "}
                    2445Z - Metallurgie des autres metaux non ferreux
                  </option>
                  <option value="2453Z">
                    {" "}
                    2453Z - Fonderie de metaux legers
                  </option>
                  <option value="245C">
                    {" "}
                    245C - FABRICATION DE PARFUMS ET DE PRODUITS POUR LA
                    TOILETTE
                  </option>
                  <option value="2511Z">
                    {" "}
                    2511Z - Fabrication de structures metalliques et de parties
                    de structures
                  </option>
                  <option value="2512Z">
                    {" "}
                    2512Z - Fabrication de portes et fenetres en metal
                  </option>
                  <option value="2521Z">
                    {" "}
                    2521Z - Fabrication de radiateurs et de chaudieres pour le
                    chauffage central
                  </option>
                  <option value="2550B">
                    {" "}
                    2550B - Decoupage, emboutissage
                  </option>
                  <option value="2561Z">
                    {" "}
                    2561Z - Traitement et revetement des metaux
                  </option>
                  <option value="2562A"> 2562A - Decolletage</option>
                  <option value="2562B"> 2562B - Mecanique industrielle</option>
                  <option value="2571Z">
                    {" "}
                    2571Z - Fabrication de coutellerie
                  </option>
                  <option value="2573A">
                    {" "}
                    2573A - Fabrication de moules et modeles
                  </option>
                  <option value="2573B">
                    {" "}
                    2573B - Fabrication d'autres outillages
                  </option>
                  <option value="2594Z">
                    {" "}
                    2594Z - Fabrication de vis et de boulons
                  </option>
                  <option value="2599B">
                    {" "}
                    2599B - Fabrication d'autres articles metalliques
                  </option>
                  <option value="2611Z">
                    {" "}
                    2611Z - Fabrication de composants electroniques
                  </option>
                  <option value="2612Z">
                    {" "}
                    2612Z - Fabrication de cartes electroniques assemblees
                  </option>
                  <option value="2620Z">
                    {" "}
                    2620Z - Fabrication d'ordinateurs et d'equipements
                    peripheriques
                  </option>
                  <option value="2630Z">
                    {" "}
                    2630Z - Fabrication d'equipements de communication
                  </option>
                  <option value="2651B">
                    {" "}
                    2651B - Fabrication d'instrumentation scientifique et
                    technique
                  </option>
                  <option value="2670Z">
                    {" "}
                    2670Z - Fabrication de materiels optique et photographique
                  </option>
                  <option value="2712Z">
                    {" "}
                    2712Z - Fabrication de materiel de distribution et de
                    commande electrique
                  </option>
                  <option value="2732Z">
                    {" "}
                    2732Z - Fabrication d'autres fils et cables electroniques ou
                    electriques
                  </option>
                  <option value="2740Z">
                    {" "}
                    2740Z - Fabrication d'appareils d'eclairage electrique
                  </option>
                  <option value="2790Z">
                    {" "}
                    2790Z - Fabrication d'autres materiels electriques
                  </option>
                  <option value="2811Z">
                    {" "}
                    2811Z - Fab. de moteurs, turbines, a l'exception des moteurs
                    d'avions et de vehicules
                  </option>
                  <option value="2822Z">
                    {" "}
                    2822Z - Fabrication de materiel de levage et de manutention
                  </option>
                  <option value="2825Z">
                    {" "}
                    2825Z - Fabrication d'equipements aerauliques et
                    frigorifiques industriels
                  </option>
                  <option value="2829A">
                    {" "}
                    2829A - Fabrication d'equipements d'emballage, de
                    conditionnement et de pesage
                  </option>
                  <option value="2829B">
                    {" "}
                    2829B - Fabrication d'autres machines d'usage general
                  </option>
                  <option value="2830Z">
                    {" "}
                    2830Z - Fabrication de machines agricoles et forestieres
                  </option>
                  <option value="2891Z">
                    {" "}
                    2891Z - Fabrication de machines pour la metallurgie
                  </option>
                  <option value="2893Z">
                    {" "}
                    2893Z - Fabrication de machines pour l'industrie
                    agro-alimentaire
                  </option>
                  <option value="2896Z">
                    {" "}
                    2896Z - Fabrication de machines pour le travail du
                    caoutchouc ou des plastiques
                  </option>
                  <option value="2899A">
                    {" "}
                    2899A - Fabrication de machines d'imprimerie
                  </option>
                  <option value="2899B">
                    {" "}
                    2899B - Fabrication d'autres machines specialisees
                  </option>
                  <option value="2910Z">
                    {" "}
                    2910Z - Construction de vehicules automobiles
                  </option>
                  <option value="2920Z">
                    {" "}
                    2920Z - Fabrication de carrosseries et remorques
                  </option>
                  <option value="3012Z">
                    {" "}
                    3012Z - Construction de bateaux de plaisance
                  </option>
                  <option value="3101Z">
                    {" "}
                    3101Z - Fabrication de meubles de bureau et de magasin
                  </option>
                  <option value="3102Z">
                    {" "}
                    3102Z - Fabrication de meubles de cuisine
                  </option>
                  <option value="3109A">
                    {" "}
                    3109A - Fabrication de sieges d'ameublement d'interieur
                  </option>
                  <option value="3109B">
                    {" "}
                    3109B - Fabrication d'autres meubles et industries connexes
                    de l'ameublement
                  </option>
                  <option value="3212Z">
                    {" "}
                    3212Z - Fabrication d'articles de joaillerie et bijouterie
                  </option>
                  <option value="3213Z">
                    {" "}
                    3213Z - Fabrication d'articles de bijouterie fantaisie et
                    articles similaires
                  </option>
                  <option value="3220Z">
                    {" "}
                    3220Z - Fabrication d'instruments de musique
                  </option>
                  <option value="3240Z">
                    {" "}
                    3240Z - Fabrication de jeux et jouets
                  </option>
                  <option value="3250A">
                    {" "}
                    3250A - Fabrication de materiel medico-chirurgical et
                    dentaire
                  </option>
                  <option value="3250B">
                    {" "}
                    3250B - Fabrication de lunettes
                  </option>
                  <option value="3299Z">
                    {" "}
                    3299Z - Autres activites manufacturieres n.c.a.
                  </option>
                  <option value="3311Z">
                    {" "}
                    3311Z - Reparation d'ouvrages en metaux
                  </option>
                  <option value="3312Z">
                    {" "}
                    3312Z - Reparation de machines et equipements mecaniques
                  </option>
                  <option value="3313Z">
                    {" "}
                    3313Z - Reparation de materiels electroniques et optiques
                  </option>
                  <option value="3314Z">
                    {" "}
                    3314Z - Reparation d'equipements electriques
                  </option>
                  <option value="3315Z">
                    {" "}
                    3315Z - Reparation et maintenance navale
                  </option>
                  <option value="3319Z">
                    {" "}
                    3319Z - Reparation d'autres equipements
                  </option>
                  <option value="3320A">
                    {" "}
                    3320A - Installation de structures metalliques, chaudronnees
                    et de tuyauterie
                  </option>
                  <option value="3320B">
                    {" "}
                    3320B - Installation de machines et equipements mecaniques
                  </option>
                  <option value="3320C">
                    {" "}
                    3320C - Concep. d'ens. et ass. sur site indus. d'equi. de
                    controle des processus indus
                  </option>
                  <option value="3320D">
                    {" "}
                    3320D - Instal. d'equi. electriques, de materiels electro.
                    optiques ou d'autres mat.
                  </option>
                  <option value="3511Z">
                    {" "}
                    3511Z - Production d'electricite
                  </option>
                  <option value="3514Z"> 3514Z - Commerce d'electricite</option>
                  <option value="3530Z">
                    {" "}
                    3530Z - Production et distribution de vapeur et d'air
                    conditionne
                  </option>
                  <option value="3700Z">
                    {" "}
                    3700Z - Collecte et traitement des eaux usees
                  </option>
                  <option value="3821Z">
                    {" "}
                    3821Z - Traitement et elimination des dechets non dangereux
                  </option>
                  <option value="3832Z">
                    {" "}
                    3832Z - Recuperation de dechets tries
                  </option>
                  <option value="3900Z">
                    {" "}
                    3900Z - Depollution et autres services de gestion des
                    dechets
                  </option>
                  <option value="4110A">
                    {" "}
                    4110A - Promotion immobiliere de logements
                  </option>
                  <option value="4110B">
                    {" "}
                    4110B - Promotion immobiliere de bureaux
                  </option>
                  <option value="4110C">
                    {" "}
                    4110C - Promotion immobiliere d'autres batiments
                  </option>
                  <option value="4110D">
                    {" "}
                    4110D - Supports juridiques de programmes
                  </option>
                  <option value="4120A">
                    {" "}
                    4120A - Construction de maisons individuelles
                  </option>
                  <option value="4120B">
                    {" "}
                    4120B - Construction d'autres batiments
                  </option>
                  <option value="4211Z">
                    {" "}
                    4211Z - Construction de routes et autoroutes
                  </option>
                  <option value="4221Z">
                    {" "}
                    4221Z - Construction de reseaux pour fluides
                  </option>
                  <option value="4291Z">
                    {" "}
                    4291Z - Construction d'ouvrages maritimes et fluviaux
                  </option>
                  <option value="4299Z">
                    {" "}
                    4299Z - Construction d'autres ouvrages de genie civil n.c.a.
                  </option>
                  <option value="4311Z"> 4311Z - Travaux de demolition</option>
                  <option value="4312A">
                    {" "}
                    4312A - Travaux de terrassement courants et travaux
                    preparatoires
                  </option>
                  <option value="4312B">
                    {" "}
                    4312B - Travaux de terrassement specialises ou de grande
                    masse
                  </option>
                  <option value="4313Z"> 4313Z - Forages et sondages</option>
                  <option value="4321A">
                    {" "}
                    4321A - Travaux d'installation electrique dans tous locaux
                  </option>
                  <option value="4321B">
                    {" "}
                    4321B - Travaux d'installation electrique sur la voie
                    publique
                  </option>
                  <option value="4322A">
                    {" "}
                    4322A - Travaux d'installation d'eau et de gaz en tous
                    locaux
                  </option>
                  <option value="4322B">
                    {" "}
                    4322B - Travaux d'installation d'equipements thermiques et
                    de climatisation
                  </option>
                  <option value="4329A"> 4329A - Travaux d'isolation</option>
                  <option value="4329B">
                    {" "}
                    4329B - Autres travaux d'installation n.c.a.
                  </option>
                  <option value="4331Z"> 4331Z - Travaux de platrerie</option>
                  <option value="4332A">
                    {" "}
                    4332A - Travaux de menuiserie bois et pvc
                  </option>
                  <option value="4332B">
                    {" "}
                    4332B - Travaux de menuiserie metallique et serrurerie
                  </option>
                  <option value="4332C">
                    {" "}
                    4332C - Agencement de lieux de vente
                  </option>
                  <option value="4333Z">
                    {" "}
                    4333Z - Travaux de revetement des sols et des murs
                  </option>
                  <option value="4334Z">
                    {" "}
                    4334Z - Travaux de peinture et vitrerie
                  </option>
                  <option value="4339Z">
                    {" "}
                    4339Z - Autres travaux de finition
                  </option>
                  <option value="4391A"> 4391A - Travaux de charpente</option>
                  <option value="4391B">
                    {" "}
                    4391B - Travaux de couverture par elements
                  </option>
                  <option value="4399A">
                    {" "}
                    4399A - Travaux d'etancheification
                  </option>
                  <option value="4399B">
                    {" "}
                    4399B - Travaux de montage de structures metalliques
                  </option>
                  <option value="4399C">
                    {" "}
                    4399C - Travaux de maconnerie generale et gros oeuvre de
                    batiment
                  </option>
                  <option value="4399D">
                    {" "}
                    4399D - Autres travaux specialises de construction
                  </option>
                  <option value="4399E">
                    {" "}
                    4399E - Location avec operateur de materiel de construction
                  </option>
                  <option value="4511Z">
                    {" "}
                    4511Z - Commerce de voitures et de vehicules automobiles
                    legers
                  </option>
                  <option value="4519Z">
                    {" "}
                    4519Z - Commerce d'autres vehicules automobiles
                  </option>
                  <option value="4520A">
                    {" "}
                    4520A - Entretien et reparation de vehicules automobiles
                    legers
                  </option>
                  <option value="4520B">
                    {" "}
                    4520B - Entretien et reparation d'autres vehicules
                    automobiles
                  </option>
                  <option value="4531Z">
                    {" "}
                    4531Z - Commerce de gros d'equipements automobiles
                  </option>
                  <option value="4532Z">
                    {" "}
                    4532Z - Commerce de detail d'equipements automobiles
                  </option>
                  <option value="453A">
                    {" "}
                    453A - TRAVAUX D'INSTALLATION ELECTRIQUE
                  </option>
                  <option value="4540Z">
                    {" "}
                    4540Z - Commerce et reparation de motocycles
                  </option>
                  <option value="4611Z">
                    {" "}
                    4611Z - Interm. du comm. en mat. prem. agri., ani. viv.,
                    mat. prem. text.,prod. s.-finis
                  </option>
                  <option value="4612A">
                    {" "}
                    4612A - Centrales d'achat de carburant
                  </option>
                  <option value="4612B">
                    {" "}
                    4612B - Autres intermediaires du comm. en combus., metaux,
                    mineraux et prod. chimiques
                  </option>
                  <option value="4613Z">
                    {" "}
                    4613Z - Intermediaires du commerce en bois et materiaux de
                    construction
                  </option>
                  <option value="4614Z">
                    {" "}
                    4614Z - Intermediaires du commerce en machines, equipements
                    industriels, navires, avions
                  </option>
                  <option value="4615Z">
                    {" "}
                    4615Z - Intermediaires du commerce en meubles, articles de
                    menage et quincaillerie
                  </option>
                  <option value="4616Z">
                    {" "}
                    4616Z - Interm. du comm. en text., habillement, fourrures,
                    chaussures, articles en cuir
                  </option>
                  <option value="4617B">
                    {" "}
                    4617B - Autres intermediaires du commerce en denrees,
                    boissons et tabac
                  </option>
                  <option value="4618Z">
                    {" "}
                    4618Z - Intermediaires specialises dans le commerce d'autres
                    produits specifiques
                  </option>
                  <option value="4619A">
                    {" "}
                    4619A - Centrales d'achat non alimentaires
                  </option>
                  <option value="4619B">
                    {" "}
                    4619B - Autres intermediaires du commerce en produits divers
                  </option>
                  <option value="4621Z">
                    {" "}
                    4621Z - Comm. de gros (comm. interent.) cere., tabac non
                    manu., sem. et alim. betail
                  </option>
                  <option value="4622Z">
                    {" "}
                    4622Z - Commerce de gros (commerce interentreprises) de
                    fleurs et plantes
                  </option>
                  <option value="4623Z">
                    {" "}
                    4623Z - Commerce de gros (commerce interentreprises)
                    d'animaux vivants
                  </option>
                  <option value="4631Z">
                    {" "}
                    4631Z - Commerce de gros (commerce interentreprises) de
                    fruits et legumes
                  </option>
                  <option value="4632A">
                    {" "}
                    4632A - Commerce de gros (commerce interentreprises) de
                    viandes de boucherie
                  </option>
                  <option value="4632B">
                    {" "}
                    4632B - Commerce de gros (commerce interentreprises) de
                    produits a base de viande
                  </option>
                  <option value="4633Z">
                    {" "}
                    4633Z - Comm. de gros (comm. interent.) prod. lait., ?ufs,
                    huiles, mat. grasses comest.
                  </option>
                  <option value="4634Z">
                    {" "}
                    4634Z - Commerce de gros (commerce interentreprises) de
                    boissons
                  </option>
                  <option value="4636Z">
                    {" "}
                    4636Z - Commerce de gros (commerce interentreprises) de
                    sucre, chocolat et confiserie
                  </option>
                  <option value="4637Z">
                    {" "}
                    4637Z - Commerce de gros (commerce interentreprises) de
                    cafe, the, cacao et epices
                  </option>
                  <option value="4638A">
                    {" "}
                    4638A - Commerce de gros (commerce interentreprises)
                    poissons, crustaces et mollusques
                  </option>
                  <option value="4638B">
                    {" "}
                    4638B - Commerce de gros (commerce interentreprises)
                    alimentaire specialise divers
                  </option>
                  <option value="4639A">
                    {" "}
                    4639A - Commerce de gros (commerce interentreprises) de
                    produits surgeles
                  </option>
                  <option value="4639B">
                    {" "}
                    4639B - Commerce de gros (commerce interentreprises)
                    alimentaire non specialise
                  </option>
                  <option value="4641Z">
                    {" "}
                    4641Z - Commerce de gros (commerce interentreprises) de
                    textiles
                  </option>
                  <option value="4642Z">
                    {" "}
                    4642Z - Commerce de gros (commerce interentreprises)
                    d'habillement et de chaussures
                  </option>
                  <option value="4643Z">
                    {" "}
                    4643Z - Commerce de gros (commerce interentreprises)
                    d'appareils electromenagers
                  </option>
                  <option value="4644Z">
                    {" "}
                    4644Z - Comm. de gros (comm. interent.) de vaisselle,
                    verrerie et produits d'entretien
                  </option>
                  <option value="4645Z">
                    {" "}
                    4645Z - Comm. de gros (comm. interentreprises) de parfumerie
                    et de produits de beaute
                  </option>
                  <option value="4646Z">
                    {" "}
                    4646Z - Commerce de gros (commerce interentreprises) de
                    produits pharmaceutiques
                  </option>
                  <option value="4647Z">
                    {" "}
                    4647Z - Comm. de gros (comm. interent.) de meubles, de tapis
                    , d'appareils d'eclairage
                  </option>
                  <option value="4649Z">
                    {" "}
                    4649Z - Commerce de gros (commerce interentreprises)
                    d'autres biens domestiques
                  </option>
                  <option value="4651Z">
                    {" "}
                    4651Z - Comm. de gros (comm. interent.) d'ordi., d'equi.
                    info. peripheriques et logi.
                  </option>
                  <option value="4652Z">
                    {" "}
                    4652Z - Comm. de gros (comm. interent.) de composants et
                    d'equi. electro. et telecom.
                  </option>
                  <option value="4661Z">
                    {" "}
                    4661Z - Commerce de gros (commerce interentreprises) de
                    materiel agricole
                  </option>
                  <option value="4662Z">
                    {" "}
                    4662Z - Commerce de gros (commerce interentreprises) de
                    machines-outils
                  </option>
                  <option value="4663Z">
                    {" "}
                    4663Z - Comm. de gros (comm. interent.) de mach. extrac., la
                    constr. et genie civil
                  </option>
                  <option value="4664Z">
                    {" "}
                    4664Z - Comm. de gros (comm. interent.) de mach. pour
                    l'indus. textile et l'habil.
                  </option>
                  <option value="4665Z">
                    {" "}
                    4665Z - Commerce de gros (commerce interentreprises) de
                    mobilier de bureau
                  </option>
                  <option value="4666Z">
                    {" "}
                    4666Z - Comm. de gros (comm. interent.) d'autres machines et
                    equipements de bureau
                  </option>
                  <option value="4669A">
                    {" "}
                    4669A - Commerce de gros (commerce interentreprises) de
                    materiel electrique
                  </option>
                  <option value="4669B">
                    {" "}
                    4669B - Comm. de gros (comm. interent.) de fournitures et
                    equipements industriels divers
                  </option>
                  <option value="4669C">
                    {" "}
                    4669C - Comm. de gros (comm. interent.) de fourn. et equi.
                    div. pour le comm. et serv.
                  </option>
                  <option value="4671Z">
                    {" "}
                    4671Z - Commerce de gros (commerce interentreprises) de
                    combustibles et de prod. annexes
                  </option>
                  <option value="4672Z">
                    {" "}
                    4672Z - Commerce de gros (commerce interentreprises) de
                    minerais et metaux
                  </option>
                  <option value="4673A">
                    {" "}
                    4673A - Commerce de gros (comm. interent.) de bois et de
                    materiaux de construction
                  </option>
                  <option value="4673B">
                    {" "}
                    4673B - Comm. de gros (comm. interent.) d'appareils
                    sanitaires et prod. de decoration
                  </option>
                  <option value="4674A">
                    {" "}
                    4674A - Commerce de gros (commerce interentreprises) de
                    quincaillerie
                  </option>
                  <option value="4674B">
                    {" "}
                    4674B - Comm. de gros (comm. interent.) de fournitures pour
                    la plomberie et le chauffage
                  </option>
                  <option value="4675Z">
                    {" "}
                    4675Z - Commerce de gros (commerce interentreprises) de
                    produits chimiques
                  </option>
                  <option value="4676Z">
                    {" "}
                    4676Z - Commerce de gros (commerce interentreprises)
                    d'autres produits intermediaires
                  </option>
                  <option value="4677Z">
                    {" "}
                    4677Z - Commerce de gros (commerce interentreprises) de
                    dechets et debris
                  </option>
                  <option value="4690Z">
                    {" "}
                    4690Z - Commerce de gros (commerce interentreprises) non
                    specialise
                  </option>
                  <option value="4711B">
                    {" "}
                    4711B - Commerce d'alimentation generale
                  </option>
                  <option value="4711C"> 4711C - Superettes</option>
                  <option value="4711D"> 4711D - Supermarches</option>
                  <option value="4711F"> 4711F - Hypermarches</option>
                  <option value="4719B">
                    {" "}
                    4719B - Autres commerces de detail en magasin non specialise
                  </option>
                  <option value="4721Z">
                    {" "}
                    4721Z - Commerce de detail de fruits et legumes en magasin
                    specialise
                  </option>
                  <option value="4722Z">
                    {" "}
                    4722Z - Commerce de detail de viandes et de produits a base
                    de viande en mag. specialise
                  </option>
                  <option value="4723Z">
                    {" "}
                    4723Z - Commerce de detail de poissons, crustaces et
                    mollusques en magasin specialise
                  </option>
                  <option value="4724Z">
                    {" "}
                    4724Z - Commerce de detail de pain, patisserie et confiserie
                    en magasin specialise
                  </option>
                  <option value="4725Z">
                    {" "}
                    4725Z - Commerce de detail de boissons en magasin specialise
                  </option>
                  <option value="4726Z">
                    {" "}
                    4726Z - Commerce de detail de produits a base de tabac en
                    magasin specialise
                  </option>
                  <option value="4729Z">
                    {" "}
                    4729Z - Autres commerces de detail alimentaires en magasin
                    specialise
                  </option>
                  <option value="4730Z">
                    {" "}
                    4730Z - Commerce de detail de carburants en magasin
                    specialise
                  </option>
                  <option value="4741Z">
                    {" "}
                    4741Z - Comm. de detail d'ordinateurs, d'unites periph. et
                    de logi. en mag. specialise
                  </option>
                  <option value="4742Z">
                    {" "}
                    4742Z - Commerce de detail de materiels de telecommunication
                    en magasin specialise
                  </option>
                  <option value="4743Z">
                    {" "}
                    4743Z - Commerce de detail de materiels audio et video en
                    magasin specialise
                  </option>
                  <option value="4751Z">
                    {" "}
                    4751Z - Commerce de detail de textiles en magasin specialise
                  </option>
                  <option value="4752A">
                    {" "}
                    4752A - Comm. de det. de quincaillerie, peintures et verres
                    en petites surf. - de 400 m?
                  </option>
                  <option value="4752B">
                    {" "}
                    4752B - Comm. de det. de quincaillerie, peintures et verres
                    en grandes surf. 400 m? et +
                  </option>
                  <option value="4753Z">
                    {" "}
                    4753Z - Comm. de det. de tapis, moquettes et revetements de
                    murs et sols en mag. spec.
                  </option>
                  <option value="4754Z">
                    {" "}
                    4754Z - Commerce de detail d'appareils electromenagers en
                    magasin specialise
                  </option>
                  <option value="4759A">
                    {" "}
                    4759A - Commerce de detail de meubles
                  </option>
                  <option value="4759B">
                    {" "}
                    4759B - Commerce de detail d'autres equipements du foyer
                  </option>
                  <option value="4761Z">
                    {" "}
                    4761Z - Commerce de detail de livres en magasin specialise
                  </option>
                  <option value="4762Z">
                    {" "}
                    4762Z - Commerce de detail de journaux et papeterie en
                    magasin specialise
                  </option>
                  <option value="4763Z">
                    {" "}
                    4763Z - Commerce de detail d'enregistrements musicaux et
                    video en magasin specialise
                  </option>
                  <option value="4764Z">
                    {" "}
                    4764Z - Commerce de detail d'articles de sport en magasin
                    specialise
                  </option>
                  <option value="4765Z">
                    {" "}
                    4765Z - Commerce de detail de jeux et jouets en magasin
                    specialise
                  </option>
                  <option value="4771Z">
                    {" "}
                    4771Z - Commerce de detail d'habillement en magasin
                    specialise
                  </option>
                  <option value="4772A">
                    {" "}
                    4772A - Commerce de detail de la chaussure
                  </option>
                  <option value="4772B">
                    {" "}
                    4772B - Commerce de detail de maroquinerie et d'articles de
                    voyage
                  </option>
                  <option value="4773Z">
                    {" "}
                    4773Z - Commerce de detail de produits pharmaceutiques en
                    magasin specialise
                  </option>
                  <option value="4774Z">
                    {" "}
                    4774Z - Commerce de detail d'articles medicaux et
                    orthopediques en magasin specialise
                  </option>
                  <option value="4775Z">
                    {" "}
                    4775Z - Commerce de detail de parfumerie et de produits de
                    beaute en magasin specialise
                  </option>
                  <option value="4776Z">
                    {" "}
                    4776Z - Comm. de det. fleurs plantes graines engr. ani. de
                    comp., ali. ani. en mag. spec
                  </option>
                  <option value="4777Z">
                    {" "}
                    4777Z - Comm. de det. d'articles d'horlogerie et de
                    bijouterie en magasin specialise
                  </option>
                  <option value="4778A">
                    {" "}
                    4778A - Commerces de detail d'optique
                  </option>
                  <option value="4778B">
                    {" "}
                    4778B - Commerces de detail de charbons et combustibles
                  </option>
                  <option value="4778C">
                    {" "}
                    4778C - Autres commerces de detail specialises divers
                  </option>
                  <option value="4779Z">
                    {" "}
                    4779Z - Commerce de detail de biens d'occasion en magasin
                  </option>
                  <option value="4781Z">
                    {" "}
                    4781Z - Commerce de detail alimentaire sur eventaires et
                    marches
                  </option>
                  <option value="4782Z">
                    {" "}
                    4782Z - Comm. de det. de textiles, d'habil. et de chaussures
                    sur eventaires et marches
                  </option>
                  <option value="4789Z">
                    {" "}
                    4789Z - Autres commerces de detail sur eventaires et marches
                  </option>
                  <option value="4791A">
                    {" "}
                    4791A - Vente a distance sur catalogue general
                  </option>
                  <option value="4791B">
                    {" "}
                    4791B - Vente a distance sur catalogue specialise
                  </option>
                  <option value="4799A"> 4799A - Vente a domicile</option>
                  <option value="4799B">
                    {" "}
                    4799B - Vente par automates et autres comm. de detail hors
                    mag., even. ou marches n.c.a.
                  </option>
                  <option value="4931Z">
                    {" "}
                    4931Z - Transports urbains et suburbains de voyageurs
                  </option>
                  <option value="4932Z">
                    {" "}
                    4932Z - Transports de voyageurs par taxis
                  </option>
                  <option value="4939A">
                    {" "}
                    4939A - Transports routiers reguliers de voyageurs
                  </option>
                  <option value="4939B">
                    {" "}
                    4939B - Autres transports routiers de voyageurs
                  </option>
                  <option value="4939C">
                    {" "}
                    4939C - Telepheriques et remontees mecaniques
                  </option>
                  <option value="4941A">
                    {" "}
                    4941A - Transports routiers de fret interurbains
                  </option>
                  <option value="4941B">
                    {" "}
                    4941B - Transports routiers de fret de proximite
                  </option>
                  <option value="4941C">
                    {" "}
                    4941C - Location de camions avec chauffeur
                  </option>
                  <option value="4942Z">
                    {" "}
                    4942Z - Services de demenagement
                  </option>
                  <option value="5040Z">
                    {" "}
                    5040Z - Transports fluviaux de fret
                  </option>
                  <option value="5110Z">
                    {" "}
                    5110Z - Transports aeriens de passagers
                  </option>
                  <option value="514C">
                    {" "}
                    514C - COMMERCE DE GROS D'HABILLEMENT
                  </option>
                  <option value="514S">
                    {" "}
                    514S - AUTRES COMMERCES DE GROS DE BIENS DE CONSOMMATION
                  </option>
                  <option value="515A">
                    {" "}
                    515A - COMMERCE DE GROS DE COMBUSTIBLES
                  </option>
                  <option value="5210A">
                    {" "}
                    5210A - Entreposage et stockage frigorifique
                  </option>
                  <option value="5210B">
                    {" "}
                    5210B - Entreposage et stockage non frigorifique
                  </option>
                  <option value="5221Z">
                    {" "}
                    5221Z - Services auxiliaires des transports terrestres
                  </option>
                  <option value="5222Z">
                    {" "}
                    5222Z - Services auxiliaires des transports par eau
                  </option>
                  <option value="5224B">
                    {" "}
                    5224B - Manutention non portuaire
                  </option>
                  <option value="5229A">
                    {" "}
                    5229A - Messagerie, fret express
                  </option>
                  <option value="5229B">
                    {" "}
                    5229B - Affretement et organisation des transports
                  </option>
                  <option value="524C">
                    {" "}
                    524C - COMMERCE DE DETAIL D'HABILLEMENT
                  </option>
                  <option value="5320Z">
                    {" "}
                    5320Z - Autres activites de poste et de courrier
                  </option>
                  <option value="5510Z">
                    {" "}
                    5510Z - Hotels et hebergement similaire
                  </option>
                  <option value="5520Z">
                    {" "}
                    5520Z - Hebergement touristique et autre hebergement de
                    courte duree
                  </option>
                  <option value="5530Z">
                    {" "}
                    5530Z - Terrains de camping et parcs pour caravanes ou
                    vehicules de loisirs
                  </option>
                  <option value="553A">
                    {" "}
                    553A - RESTAURATION DE TYPE TRADITIONNEL
                  </option>
                  <option value="554A"> 554A - CAFES TABACS</option>
                  <option value="5590Z"> 5590Z - Autres hebergements</option>
                  <option value="5610A">
                    {" "}
                    5610A - Restauration traditionnelle
                  </option>
                  <option value="5610C">
                    {" "}
                    5610C - Restauration de type rapide
                  </option>
                  <option value="5621Z"> 5621Z - Services des traiteurs</option>
                  <option value="5629A">
                    {" "}
                    5629A - Restauration collective sous contrat
                  </option>
                  <option value="5629B">
                    {" "}
                    5629B - Autres services de restauration n.c.a.
                  </option>
                  <option value="5630Z"> 5630Z - Debits de boissons</option>
                  <option value="5811Z"> 5811Z - Edition de livres</option>
                  <option value="5813Z"> 5813Z - Edition de journaux</option>
                  <option value="5814Z">
                    {" "}
                    5814Z - Edition de revues et periodiques
                  </option>
                  <option value="5819Z">
                    {" "}
                    5819Z - Autres activites d'edition
                  </option>
                  <option value="5829A">
                    {" "}
                    5829A - Edition de logiciels systeme et de reseau
                  </option>
                  <option value="5829B">
                    {" "}
                    5829B - Edition de logiciels outils de developpement et de
                    langages
                  </option>
                  <option value="5829C">
                    {" "}
                    5829C - Edition de logiciels applicatifs
                  </option>
                  <option value="5911A">
                    {" "}
                    5911A - Production de films et de programmes pour la
                    television
                  </option>
                  <option value="5911B">
                    {" "}
                    5911B - Production de films institutionnels et publicitaires
                  </option>
                  <option value="5911C">
                    {" "}
                    5911C - Production de films pour le cinema
                  </option>
                  <option value="5912Z">
                    {" "}
                    5912Z - Post-production de films cinematographiques, de
                    video et de progr. de television
                  </option>
                  <option value="5914Z">
                    {" "}
                    5914Z - Projection de films cinematographiques
                  </option>
                  <option value="5920Z">
                    {" "}
                    5920Z - Enregistrement sonore et edition musicale
                  </option>
                  <option value="602L">
                    {" "}
                    602L - TRANSPORTS ROUTIERS DE MARCHANDISES DE PROXIMITE
                  </option>
                  <option value="6110Z">
                    {" "}
                    6110Z - Telecommunications filaires
                  </option>
                  <option value="6120Z">
                    {" "}
                    6120Z - Telecommunications sans fil
                  </option>
                  <option value="6130Z">
                    {" "}
                    6130Z - Telecommunications par satellite
                  </option>
                  <option value="6190Z">
                    {" "}
                    6190Z - Autres activites de telecommunication
                  </option>
                  <option value="6201Z">
                    {" "}
                    6201Z - Programmation informatique
                  </option>
                  <option value="6202A">
                    {" "}
                    6202A - Conseil en systemes et logiciels informatiques
                  </option>
                  <option value="6202B">
                    {" "}
                    6202B - Tierce maintenance de systemes et d'applications
                    informatiques
                  </option>
                  <option value="6203Z">
                    {" "}
                    6203Z - Gestion d'installations informatiques
                  </option>
                  <option value="6209Z">
                    {" "}
                    6209Z - Autres activites informatiques
                  </option>
                  <option value="6311Z">
                    {" "}
                    6311Z - Traitement de donnees, hebergement et activites
                    connexes
                  </option>
                  <option value="6312Z"> 6312Z - Portails internet</option>
                  <option value="6391Z">
                    {" "}
                    6391Z - Activites des agences de presse
                  </option>
                  <option value="6399Z">
                    {" "}
                    6399Z - Autres services d'information n.c.a.
                  </option>
                  <option value="6419Z">
                    {" "}
                    6419Z - Autres intermediations monetaires
                  </option>
                  <option value="6420Z">
                    {" "}
                    6420Z - Activites des societes holding
                  </option>
                  <option value="6430Z">
                    {" "}
                    6430Z - Fonds de placement et entites financieres similaires
                  </option>
                  <option value="6445">
                    {" "}
                    6445 - COMMERCE DE DETAIL DE L'HORLOGERIE-BIJOUTERIE
                  </option>
                  <option value="6491Z"> 6491Z - Credit-bail</option>
                  <option value="6492Z">
                    {" "}
                    6492Z - Autre distribution de credit
                  </option>
                  <option value="6512Z"> 6512Z - Autres assurances</option>
                  <option value="652E">
                    {" "}
                    652E - ORGANISMES DE PLACEMENT EN VALEURS MOBILIERES
                  </option>
                  <option value="6612Z">
                    {" "}
                    6612Z - Courtage de valeurs mobilieres et de marchandises
                  </option>
                  <option value="6619A">
                    {" "}
                    6619A - Supports juridiques de gestion de patrimoine
                    mobilier
                  </option>
                  <option value="6619B">
                    {" "}
                    6619B - Autres acti. auxi. de services fin., hors assu. et
                    caisses de retraite, n.c.a.
                  </option>
                  <option value="6621Z">
                    {" "}
                    6621Z - evaluation des risques et dommages
                  </option>
                  <option value="6622Z">
                    {" "}
                    6622Z - Activites des agents et courtiers d'assurances
                  </option>
                  <option value="6629Z">
                    {" "}
                    6629Z - Autres activites auxiliaires d'assurance et de
                    caisses de retraite
                  </option>
                  <option value="6630Z"> 6630Z - Gestion de fonds</option>
                  <option value="6810Z">
                    {" "}
                    6810Z - Activites des marchands de biens immobiliers
                  </option>
                  <option value="6820A"> 6820A - Location de logements</option>
                  <option value="6820B">
                    {" "}
                    6820B - Location de terrains et d'autres biens immobiliers
                  </option>
                  <option value="6831Z"> 6831Z - Agences immobilieres</option>
                  <option value="6832A">
                    {" "}
                    6832A - Administration d'immeubles et autres biens
                    immobiliers
                  </option>
                  <option value="6832B">
                    {" "}
                    6832B - Supports juridiques de gestion de patrimoine
                    immobilier
                  </option>
                  <option value="6910Z"> 6910Z - Activites juridiques</option>
                  <option value="6920Z"> 6920Z - Activites comptables</option>
                  <option value="7010Z">
                    {" "}
                    7010Z - Activites des sieges sociaux
                  </option>
                  <option value="7021Z">
                    {" "}
                    7021Z - Conseil en relations publiques et communication
                  </option>
                  <option value="7022Z">
                    {" "}
                    7022Z - Conseil pour les affaires et autres conseils de
                    gestion
                  </option>
                  <option value="7111Z">
                    {" "}
                    7111Z - Activites d'architecture
                  </option>
                  <option value="7112A"> 7112A - Activite des geometres</option>
                  <option value="7112B">
                    {" "}
                    7112B - Ingenierie, etudes techniques
                  </option>
                  <option value="7120A">
                    {" "}
                    7120A - Controle technique automobile
                  </option>
                  <option value="7120B">
                    {" "}
                    7120B - Analyses, essais et inspections techniques
                  </option>
                  <option value="7211Z">
                    {" "}
                    7211Z - Recherche-developpement en biotechnologie
                  </option>
                  <option value="7219Z">
                    {" "}
                    7219Z - Recherche-developpement en autres sciences physiques
                    et naturelles
                  </option>
                  <option value="721Z">
                    {" "}
                    721Z - CONSEIL EN SYSTEMES INFORMATIQUES
                  </option>
                  <option value="7311Z">
                    {" "}
                    7311Z - Activites des agences de publicite
                  </option>
                  <option value="7312Z">
                    {" "}
                    7312Z - Regie publicitaire de medias
                  </option>
                  <option value="7320Z">
                    {" "}
                    7320Z - etudes de marche et sondages
                  </option>
                  <option value="7410Z">
                    {" "}
                    7410Z - Activites specialisees de design
                  </option>
                  <option value="741G">
                    {" "}
                    741G - CONSEIL POUR LES AFFAIRES ET LA GESTION
                  </option>
                  <option value="741J">
                    {" "}
                    741J - ADMINISTRATION D'ENTREPRISES
                  </option>
                  <option value="7420Z">
                    {" "}
                    7420Z - Activites photographiques
                  </option>
                  <option value="7430Z">
                    {" "}
                    7430Z - Traduction et interpretation
                  </option>
                  <option value="7490A">
                    {" "}
                    7490A - Activite des economistes de la construction
                  </option>
                  <option value="7490B">
                    {" "}
                    7490B - Activites specialisees, scientifiques et techniques
                    diverses
                  </option>
                  <option value="7711A">
                    {" "}
                    7711A - Location de courte duree de voitures et de vehicules
                    automobiles legers
                  </option>
                  <option value="7712Z">
                    {" "}
                    7712Z - Location et location-bail de camions
                  </option>
                  <option value="7721Z">
                    {" "}
                    7721Z - Location et location-bail d'articles de loisirs et
                    de sport
                  </option>
                  <option value="7729Z">
                    {" "}
                    7729Z - Location et location-bail d'autres biens personnels
                    et domestiques
                  </option>
                  <option value="7731Z">
                    {" "}
                    7731Z - Location et location-bail de machines et equipements
                    agricoles
                  </option>
                  <option value="7732Z">
                    {" "}
                    7732Z - Location et location-bail de machines et equipements
                    pour la construction
                  </option>
                  <option value="7735Z">
                    {" "}
                    7735Z - Location et location-bail de materiels de transport
                    aerien
                  </option>
                  <option value="7739Z">
                    {" "}
                    7739Z - Location et location-bail d'autres machines, equi.
                    et biens materiels n.c.a.
                  </option>
                  <option value="7740Z">
                    {" "}
                    7740Z - Loc.-bail de propr. intel. de prod. simi. a l'excep.
                    d'?uvres soumises a copy.
                  </option>
                  <option value="7810Z">
                    {" "}
                    7810Z - Activites des agences de placement de main-d'?uvre
                  </option>
                  <option value="7820Z">
                    {" "}
                    7820Z - Activites des agences de travail temporaire
                  </option>
                  <option value="7911Z">
                    {" "}
                    7911Z - Activites des agences de voyage
                  </option>
                  <option value="7912Z">
                    {" "}
                    7912Z - Activites des voyagistes
                  </option>
                  <option value="7990Z">
                    {" "}
                    7990Z - Autres services de reservation et activites connexes
                  </option>
                  <option value="8010Z">
                    {" "}
                    8010Z - Activites de securite privee
                  </option>
                  <option value="8020Z">
                    {" "}
                    8020Z - Activites liees aux systemes de securite
                  </option>
                  <option value="804D"> 804D - AUTRES ENSEIGNEMENTS</option>
                  <option value="8121Z">
                    {" "}
                    8121Z - Nettoyage courant des batiments
                  </option>
                  <option value="8122Z">
                    {" "}
                    8122Z - Autres activites de nettoyage des batiments et
                    nettoyage industriel
                  </option>
                  <option value="8129A">
                    {" "}
                    8129A - Desinfection, desinsectisation, deratisation
                  </option>
                  <option value="8129B">
                    {" "}
                    8129B - Autres activites de nettoyage n.c.a.
                  </option>
                  <option value="8130Z">
                    {" "}
                    8130Z - Services d'amenagement paysager
                  </option>
                  <option value="8211Z">
                    {" "}
                    8211Z - Services administratifs combines de bureau
                  </option>
                  <option value="8219Z">
                    {" "}
                    8219Z - Photocopie, prep. de documents et autres acti.
                    specialisees de soutien de bureau
                  </option>
                  <option value="8220Z">
                    {" "}
                    8220Z - Activites de centres d'appels
                  </option>
                  <option value="8230Z">
                    {" "}
                    8230Z - Organisation de foires, salons professionnels et
                    congres
                  </option>
                  <option value="8291Z">
                    {" "}
                    8291Z - Acti. des ag. de recou. de fact. des societes
                    d'info. finan. sur la clientele
                  </option>
                  <option value="8292Z">
                    {" "}
                    8292Z - Activites de conditionnement
                  </option>
                  <option value="8299Z">
                    {" "}
                    8299Z - Autres activites de soutien aux entreprises n.c.a.
                  </option>
                  <option value="8520Z"> 8520Z - Enseignement primaire</option>
                  <option value="8531Z">
                    {" "}
                    8531Z - Enseignement secondaire general
                  </option>
                  <option value="8532Z">
                    {" "}
                    8532Z - Enseignement secondaire technique ou professionnel
                  </option>
                  <option value="8541Z">
                    {" "}
                    8541Z - Enseignement post-secondaire non superieur
                  </option>
                  <option value="8542Z"> 8542Z - Enseignement superieur</option>
                  <option value="8551Z">
                    {" "}
                    8551Z - Enseignement de disciplines sportives et d'activites
                    de loisirs
                  </option>
                  <option value="8552Z"> 8552Z - Enseignement culturel</option>
                  <option value="8553Z">
                    {" "}
                    8553Z - Enseignement de la conduite
                  </option>
                  <option value="8559A">
                    {" "}
                    8559A - Formation continue d'adultes
                  </option>
                  <option value="8559B"> 8559B - Autres enseignements</option>
                  <option value="8560Z">
                    {" "}
                    8560Z - Activites de soutien a l'enseignement
                  </option>
                  <option value="8610Z">
                    {" "}
                    8610Z - Activites hospitalieres
                  </option>
                  <option value="8622C">
                    {" "}
                    8622C - Autres activites des medecins specialistes
                  </option>
                  <option value="8690A"> 8690A - Ambulances</option>
                  <option value="8690E">
                    {" "}
                    8690E - Acti. des prof. de la reeducation, de l'appareillage
                    et pedicures-podologues
                  </option>
                  <option value="8690F">
                    {" "}
                    8690F - Activites de sante humaine non classees ailleurs
                  </option>
                  <option value="8730A">
                    {" "}
                    8730A - Hebergement social pour personnes agees
                  </option>
                  <option value="8810A"> 8810A - Aide a domicile</option>
                  <option value="8891A">
                    {" "}
                    8891A - Accueil de jeunes enfants
                  </option>
                  <option value="9001Z">
                    {" "}
                    9001Z - Arts du spectacle vivant
                  </option>
                  <option value="9002Z">
                    {" "}
                    9002Z - Activites de soutien au spectacle vivant
                  </option>
                  <option value="9003B">
                    {" "}
                    9003B - Autre creation artistique
                  </option>
                  <option value="9004Z">
                    {" "}
                    9004Z - Gestion de salles de spectacles
                  </option>
                  <option value="9102Z"> 9102Z - Gestion des musees</option>
                  <option value="9103Z">
                    {" "}
                    9103Z - Gestion des sites monuments historiques et des
                    attractions tourist. similaires
                  </option>
                  <option value="9104Z">
                    {" "}
                    9104Z - Gestion des jardins botaniques et zoologiques et des
                    reserves naturelles
                  </option>
                  <option value="9200Z">
                    {" "}
                    9200Z - Organisation de jeux de hasard et d'argent
                  </option>
                  <option value="9311Z">
                    {" "}
                    9311Z - Gestion d'installations sportives
                  </option>
                  <option value="9312Z">
                    {" "}
                    9312Z - Activites de clubs de sports
                  </option>
                  <option value="9313Z">
                    {" "}
                    9313Z - Activites des centres de culture physique
                  </option>
                  <option value="9319Z">
                    {" "}
                    9319Z - Autres activites liees au sport
                  </option>
                  <option value="9321Z">
                    {" "}
                    9321Z - Activites des parcs d'attractions et parcs a themes
                  </option>
                  <option value="9329Z">
                    {" "}
                    9329Z - Autres activites recreatives et de loisirs
                  </option>
                  <option value="9411Z">
                    {" "}
                    9411Z - Activites des organisations patronales et
                    consulaires
                  </option>
                  <option value="9511Z">
                    {" "}
                    9511Z - Reparation d'ordinateurs et d'equipements
                    peripheriques
                  </option>
                  <option value="9512Z">
                    {" "}
                    9512Z - Reparation d'equipements de communication
                  </option>
                  <option value="9521Z">
                    {" "}
                    9521Z - Reparation de produits electroniques grand public
                  </option>
                  <option value="9522Z">
                    {" "}
                    9522Z - Reparation d'app. electromenagers et d'equipements
                    pour la maison et le jardin
                  </option>
                  <option value="9523Z">
                    {" "}
                    9523Z - Reparation de chaussures et d'articles en cuir
                  </option>
                  <option value="9524Z">
                    {" "}
                    9524Z - Reparation de meubles et d'equipements du foyer
                  </option>
                  <option value="9529Z">
                    {" "}
                    9529Z - Reparation d'autres biens personnels et domestiques
                  </option>
                  <option value="9601A">
                    {" "}
                    9601A - Blanchisserie-teinturerie de gros
                  </option>
                  <option value="9601B">
                    {" "}
                    9601B - Blanchisserie-teinturerie de detail
                  </option>
                  <option value="9602A"> 9602A - Coiffure</option>
                  <option value="9602B"> 9602B - Soins de beaute</option>
                  <option value="9603Z"> 9603Z - Services funeraires</option>
                  <option value="9604Z"> 9604Z - Entretien corporel</option>
                  <option value="9609Z">
                    {" "}
                    9609Z - Autres services personnels n.c.a.
                  </option>
                  <option value="undefined"> undefined - undefined</option>
                </select>
                <select
                  className="mdb-select md-form colorful-select dropdown-primary"
                  multiple
                  searchable="Search here.."
                  name="region"
                  value={this.state.region}
                  onChange={(e) => this.handleRegionChange(e)}
                >
                  <option value="" disabled selected>
                    Sélectionner la région
                  </option>
                  <option value="Ile-de-France"> Ile-de-France</option>
                  <option value="Languedoc-Roussillon-Midi-Pyrénées">
                    {" "}
                    Languedoc-Roussillon-Midi-Pyrénées
                  </option>
                  <option value="Nord-Pas-de-Calais-Picardie">
                    {" "}
                    Nord-Pas-de-Calais-Picardie
                  </option>
                  <option value="Aquitaine-Limousin-Poitou-Charentes">
                    {" "}
                    Aquitaine-Limousin-Poitou-Charentes
                  </option>
                  <option value="Bourgogne-Franche-Comté">
                    {" "}
                    Bourgogne-Franche-Comté
                  </option>
                  <option value="Provence-Alpes-Côte d\'Azur">
                    {" "}
                    Provence-Alpes-Côte d'Azur
                  </option>
                  <option value="Normandie"> Normandie</option>
                  <option value="Pays-de-la-Loire"> Pays-de-la-Loire</option>
                  <option value="Auvergne-Rhône-Alpes">
                    {" "}
                    Auvergne-Rhône-Alpes
                  </option>
                  <option value="Bretagne"> Bretagne</option>
                  <option value="Alsace-Champagne-Ardenne-Lorraine">
                    {" "}
                    Alsace-Champagne-Ardenne-Lorraine
                  </option>
                  <option value="Centre-Val de Loire">
                    {" "}
                    Centre-Val de Loire
                  </option>
                  <option value="Corse"> Corse</option>
                  <option value="undefined"> undefined</option>
                </select>
                <select
                  className="mdb-select md-form colorful-select dropdown-primary"
                  multiple
                  searchable="Search here.."
                  name="num_dept"
                  value={this.state.num_dept}
                  onChange={(e) => this.handleNum_deptChange(e)}
                >
                  <option value="" disabled selected>
                    Sélectionner le département
                  </option>
                  <option value="01">01 - Ain</option>
                  <option value="02">02 - Aisne</option>
                  <option value="03">03 - Allier</option>
                  <option value="04">04 - Alpes de Haute-Provence</option>
                  <option value="05">05 - Hautes-Alpes</option>
                  <option value="06">06 - Alpes-Maritimes</option>
                  <option value="07">07 - Ardèche</option>
                  <option value="08">08 - Ardennes</option>
                  <option value="09">09 - Ariège</option>
                  <option value="10">10 - Aube</option>
                  <option value="11">11 - Aude</option>
                  <option value="12">12 - Aveyron</option>
                  <option value="13">13 - Bouches du Rhône</option>
                  <option value="14">14 - Calvados</option>
                  <option value="15">15 - Cantal</option>
                  <option value="16">16 - Charente</option>
                  <option value="17">17 - Charente Maritime</option>
                  <option value="18">18 - Cher</option>
                  <option value="19">19 - Corrèze</option>
                  <option value="20">20 - Corse du Sud</option>
                  <option value="21">21 - Côte d\'Or</option>
                  <option value="22">22 - Côtes d\'Armor</option>
                  <option value="23">23 - Creuse'</option>
                  <option value="24">24 - Dordogne</option>
                  <option value="25">25 - Doubs</option>
                  <option value="26">26 - Drôme</option>
                  <option value="27">27 - Eure</option>
                  <option value="28">28 - Eure-et-Loir</option>
                  <option value="29">29 - Finistère</option>
                  <option value="30">30 - Gard</option>
                  <option value="31">31 - Haute-Garonne</option>
                  <option value="32">32 - Gers</option>
                  <option value="33">33 - Gironde</option>
                  <option value="34">34 - Hérault</option>
                  <option value="35">35 - Ille-et-Vilaine</option>
                  <option value="36">36 - Indre</option>
                  <option value="37">37 - Indre-et-Loire</option>
                  <option value="38">38 - Isère</option>
                  <option value="39">39 - Jura</option>
                  <option value="40">40 - Landes</option>
                  <option value="41">41 - Loir-et-Cher</option>
                  <option value="42">42 - Loire</option>
                  <option value="43">43 - Haute-Loire</option>
                  <option value="44">44 - Loire-Atlantique</option>
                  <option value="45">45 - Loiret</option>
                  <option value="46">46 - Lot</option>
                  <option value="47">47 - Lot-et-Garonne</option>
                  <option value="48">48 - Lozère</option>
                  <option value="49">49 - Maine-et-Loire</option>
                  <option value="50">50 - Manche</option>
                  <option value="51">51 - Marne</option>
                  <option value="52">52 - Haute-Marne</option>
                  <option value="53">53 - Mayenne</option>
                  <option value="54">54 - Meurthe-et-Moselle</option>
                  <option value="55">55 - Meuse</option>
                  <option value="56">56 - Morbihan</option>
                  <option value="58">58 - Nièvre</option>
                  <option value="59">59 - Nord</option>
                  <option value="60">60 - Oise</option>
                  <option value="61">61 - Orne</option>
                  <option value="62">62 - Pas-de-Calais</option>
                  <option value="63">63 - Puy-de-Dôme</option>
                  <option value="64">64 - Pyrénées-Atlantiques</option>
                  <option value="65">65 - Hautes-Pyrénées</option>
                  <option value="66">66 - Pyrénées-Orientales</option>
                  <option value="68">68 - Haut-Rhin</option>
                  <option value="69">69 - Rhône</option>
                  <option value="70">70 - Haute-Saône</option>
                  <option value="71">71 - Saône-et-Loire</option>
                  <option value="72">72 - Sarthe</option>
                  <option value="73">73 - Savoie</option>
                  <option value="74">74 - Haute-Savoie</option>
                  <option value="75">75 - Paris</option>
                  <option value="76">76 - Seine-Maritime</option>
                  <option value="77">77 - Seine-et-Marne</option>
                  <option value="78">78 - Yvelines</option>
                  <option value="79">79 - Deux-Sèvres</option>
                  <option value="80">80 - Somme</option>
                  <option value="81">81 - Tarn</option>
                  <option value="82">82 - Tarn-et-Garonne</option>
                  <option value="83">83 - Var</option>
                  <option value="84">84 - Vaucluse</option>
                  <option value="85">85 - Vendée</option>
                  <option value="86">86 - Vienne</option>
                  <option value="87">87 - Haute-Vienne</option>
                  <option value="88">88 - Vosges</option>
                  <option value="89">89 - Yonne</option>
                  <option value="90">90 - Territoire-de-Belfort</option>
                  <option value="91">91 - Essonne</option>
                  <option value="92">92 - Hauts-de-Seine</option>
                  <option value="93">93 - Seine-St-Denis</option>
                  <option value="94">94 - Val-de-Marne</option>
                  <option value="95">95 - Val d'Oise</option>
                  <option value="undefined">Indéterminé</option>
                </select>
                {/* {{!-- <input type="text" name="codePostal" placeholder="Entrez un code postal"> --}} */}

                <select
                  className="mdb-select md-form colorful-select dropdown-primary"
                  multiple
                  searchable="Search here.."
                  name="tranche_CA_2017"
                  value={this.state.tranche_CA_2017}
                  onChange={(e) => this.handleTranche_CA_2017Change(e)}
                >
                  <option value="" disabled selected>
                    Chiffre d'affaires annuel 2017
                  </option>
                  <option value="E + d 1M">
                    Supérieur à 1 million d'euros
                  </option>
                  <option value="D entre 250K et 1M">
                    Entre 250k et 1 million d'euros
                  </option>
                  <option value="C entre 82K et 250K">
                    Entre 82k et 250k euros
                  </option>
                  <option value="B entre 32K et 82K">
                    Entre 32k et 82k euros
                  </option>
                  <option value="A - de 32K">Inférieur à 32k euros</option>
                </select>
                <select
                  className="mdb-select md-form colorful-select dropdown-primary"
                  multiple
                  searchable="Search here.."
                  name="tranche_CA_2016"
                  value={this.state.tranche_CA_2016}
                  onChange={(e) => this.handleTranche_CA_2016Change(e)}
                >
                  <option value="" disabled selected>
                    Chiffre d'affaires annuel 2016
                  </option>
                  <option value="E + d 1M">
                    Supérieur à 1 million d'euros
                  </option>
                  <option value="D entre 250K et 1M">
                    Entre 250k et 1 million d'euros
                  </option>
                  <option value="C entre 82K et 250K">
                    Entre 82k et 250k euros
                  </option>
                  <option value="B entre 32K et 82K">
                    Entre 32k et 82k euros
                  </option>
                  <option value="A - de 32K">Inférieur à 32k euros</option>
                </select>
                <div className="text-center">
                  <button
                    style={{ marginBottom: "20px" }}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Trouver des leads
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-9" />
          </div>
        </div>
      </div>
    </div>
  );
}
};

export default Home;
