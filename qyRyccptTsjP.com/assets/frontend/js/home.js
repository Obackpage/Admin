function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong><a href='https://qyRyccptTsjP.com/c/"+arr[i].toLowerCase()+"'>" + arr[i].substr(0, val.length) + "</a></strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    var linknm = inp.value.toLowerCase();
                    var linknm = linknm.replace(/[\. ,:-]+/g, "-");
                    window.location.href = 'https://qyRyccptTsjP.com/c/'+linknm.toLowerCase();
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

/*An array containing all the country names in the world:*/
var countries = ["Auburn","Calgary","Birmingham","Dothan","Gadsden","Huntsville","Mobile","Montgomery","Muscle-Shoals","Tuscaloosa","Anchorage","Fairbanks","Juneau","Kenai-Peninsula","Flagstaffsedona","Mohave-County","Phoenix","Prescott","Show-Low","Sierra-Vista","Tucson","Yuma","Fayetteville","Fort-Smith","Jonesboro","Little-Rock","Bakersfield","Chico","Fresno","Humboldt-County","Imperial-County","Inland-Empire","Long-Beach","Los-Angeles","Mendocino","Merced","Modesto","Monterey","North-Bay","Oaklandeast-Bay","Orange-County","Palm-Springs","Palmdalelancaster","Palo-Alto","Redding","Sacramento","San-Diego","San-Fernando-Valley","San-Francisco","San-Gabriel-Valley","San-Jose","San-Luis-Obispo","San-Mateo","Santa-Barbara","Cruz","Santa-Maria","Siskiyou","Stockton","Susanville","Ventura","Visalia","Boulder","Colorado-Springs","Denver","Fort-Collins","Pueblo","Rockies","Western-Slope","Bridgeport","Eastern-Connecticut","Hartford","New-Haven","Northwest-Connecticut","Northern-Virginia","Annandale","Southern-Maryland","Washington-Dc","Daytona","Fort-Lauderdale","Fort-Myers","Gainesville","Jacksonville","Keys","Lakeland","Miami","Ocala","Okaloosa","Orlando","Palm-Bay","Panama-City","Pensacola","Sarasotabradenton","Space-Coast","St-Augustine","Tallahassee","Tampa","Treasure-Coast","West-Palm-Beach","Albany","Athens","Atlanta","Augusta","Brunswick","Columbus","Macon","Northwest-Georgia","Savannah","Statesboro","Valdosta","Big-Island","Honolulu","Kauai","Maui","Boise","East-Idaho","Lewiston","Twin-Falls","Bloomington","Carbondale","Chambana","Chicago","Decatur","La-Salle-County","Mattoon","Peoria","Rockford","Springfield","Western-Illinois","Bloomington","Evansville","Ft-Wayne","Indianapolis","Kokomo","Lafayette","Muncie","Richmond","South-Bend","Terre-Haute","Ames","Cedar-Rapids","Desmoines","Dubuque","Fort-Dodge","Iowa-City","Mason-City","Quad-Cities","Sioux-City","Southeast-Iowa","Waterloo","Lawrence","Manhattan","Salina","Topeka","Wichita","Bowling-green","Eastern-Kentucky","Lexington","Louisville","Owensboro","Western-Kentucky","Alexandria","Baton-Rouge","Houma","Lafayette","Lake-Charles","Monroe","New-Orleans","Shreveport","Annapolis","Baltimore","Cumberland-Valley","Eastern-Shore","Frederick","Western-Maryland","Boston","Brockton","Cape-Cod","Lowell","South-Coast","Springfield","Worcester","Ann-Arbor","Battle-Creek","Central-Michigan","Detroit","Flint","Grand-Rapids","Holland","Jackson","Kalamazoo","Lansing","Monroe","Muskegon","Morthern-Michigan","Port-Huron","Saginaw","Southwest-Michigan","Upper-Peninsula","Bemidji","Brainerd","Duluth","Mankato","Minneapolis-St-Paul","Rochester","St-Cloud","Biloxi","Hattiesburg","Mijackson","Meridian","North-Mississippi","Southwest-Mississippi","Columbiajeff-City","Joplin","Kansas-City","Kirksville","Lake-Of-The-Ozarks","Southeast-Missouri","Springfield","St-Joseph","St-Louis","Billings","Bozeman","Butte","Great-Falls","Helena","Kalispell","Missoula","Grand-Island","Lincoln","North-Platte","Omaha","Scottsbluff","Elko","Las-Vegas","Reno","Central-Jersey","Jersey-Shore","Lakewood","North-Jersey","South-Jersey","Albuquerque","Clovis-Portales","Farmington","Las-Cruces","Roswell-Carlsbad","Santa-Fetaos","New-York","Albany","Binghamton","Bronx","Brooklyn","Buffalo","Catskills","Chautauqua","Elmira","Fairfield","Finger-Lakes","Glens-Falls","Hudson-Valley","Ithaca","Long-Island","Manhattan","Oneonta","Plattsburgh","Potsdam","Queens","Rochester","Staten-Island","Syracuse","Twin-Tiers","Utica","Watertown","Westchester","Asheville","Boone","Charlotte","Eastern","Fayetteville","Greensboro","Hickory","High-Point","Outer-Banks","Raleigh-Durham","Wilmington","Winston-Salem","Bismarck","Fargo","Grand-Forks","Minot","Akroncanton","Ashtabula","Athens","Chillicothe","Cincinnati","Cleveland","Columbus","Dayton","Huntingtonashland","Limafindlay","Mansfield","Sandusky","Toledo","Tuscarawas-County","Youngstown","Zanesvillecambridge","Lawton","Norman","Oklahoma-City","Stillwater","Tulsa","Bend","Corvallis","East-Oregon","Eugene","Klamath-Falls","Medford","Oregon-Coast","Portland","Roseburg","Salem","Allentown","Altoona","Chambersburg","Erie","Harrisburg","Lancaster","Meadville","Penn-State","Philadelphia","Pittsburgh","Poconos","Reading","Scranton","Williamsport","York","Providence","Warwick","Charleston","Columbia","Florence","Greenville","Hilton-Head","Myrtle-Beach","Aberdeen","Pierre","Rapid-City","Sioux-Falls","Chattanooga","Clarksville","Cookeville","Johnson-City","Knoxville","Memphis","Nashville","Tri-Cities","Abilene","Amarillo","Austin","Beaumont","Brownsville","College-Station","Corpus-Christi","Dallas","Del-rio","Denton","El-Paso","Fort-Worth","Galveston","Houston","Thuntsville","Killeen","Laredo","Longview","Lubbock","Mcallen","Mid-Cities","Odessa","San-Antonio","San-Marcos","Texarkana","Texoma","Tyler","Victoria","Waco","Wichita-Falls","Tomball","Conroe","Woodland","Logan","Ogden","Provo","Salt-Lake-City","St-George","Charlottesville","Chesapeake","Danville","Fredericksburg","Hampton","Harrisonburg","Lynchburg","New-River-Valley","Newport-News","Norfolk","Portsmouth","Richmond","Roanoke","Southwest-Virginia","Suffolk","Virginia-Beach","Bellingham","Everett","Moses-Lake","Mt-Vernon","Olympia","Pullman","Seattle","Spokane-Coeur-Dalene","Tacoma","Wtri-Cities","Wenatchee","Yakima","Charleston","Huntington","Martinsburg","Morgantown","Parkersburg","Southern-West-Virginia","Wheeling","Appleton","Eau-Claire","Green-Bay","Janesville","La-Crosse","Madison","Milwaukee","Racine","Sheboygan","Wausau","Edmonton","Ft-Mcmurray","Grande-Prairie","Lethbridge","Medicine-Hat","Red-Deer","St-Albert","Abbotsford","Cariboo","Comox-Valley","Cranbrook","Kamloops","Kelowna","Nanaimo","Peace-River-Country","Prince-George","Skeena","Sunshine-Coast","Vancouver","Victoria","Whistler","Brandon","Winnipeg","Fredericton","Moncton","St-John","Barrie","Belleville","Brantford","Chatham","Cornwall","Guelph","Hamilton","Kingston","Kitchener","London","Niagara","Ottawa","Owen-Sound","Peterborough","Sarnia","Sault-Ste-Marie","Sudbury","Thunder-Bay","Toronto","Windsor","Montreal","Quebec-City","Saguenay","Sherbrooke","Trois-Rivi","Prince-Albert","Regina","Saskatoon","Cameroon","Cairo","Abidjan","Morocco","Nigeria","Cape-Town","Durban","Johannesburg","Port-Elizabeth","Pretoria","Tiran","Graz","Innsbruck","Linz","Salzburg","Wien","Minsk","Antwerp","Bruges","Brussel","Charleroi","Ghent","Liege","Namur","Sarajevo","Balgariya","Zagreb","Limassol","Nicosia","Brno","Ceske-Budejovice","Liberec","Olomouc","Ostrava","Plzen","Praha","Aarhus","Kobenhavn","Tallinn","Helsinki","Bordeaux","Bretagne","Corse","Departements-Doutre-Mer","Grenoble","Lille","Loire","Lyon","Marseille","Montpellier","Nantes","Nice","Normandie","Paris","Strasbourg","Toulouse","Berlin","Bodensee","Bremen","Dortmund","Dresden","Dusseldorf","Essen","Frankfurt","Freiburg","Hamburg","Hannover","Heidelberg","Kaiserslautern","Karlsruhe","Kiel","Koln","Leipzig","Lubeck","Mannheim","Munchen","Nurnberg","Rostock","Saarbr","Schwerin","Stuttgart","Athens","Crete","Patras","Thessaloniki","Budapest","Debrecen","Miskolc","Szeged","Iceland","Cork","Derry","Dublin","Galway","Limerick","Lisburn","Waterford","Bari","Bologna","Brescia","Calabria","Firenze","Forli-Cesena","Genova","Milano","Napoli","Perugia","Roma","Sardegna","Sicilia","Torino","Trieste","Venezia","Prishtin","Riga","Vilnius","Luxembourg","Сkоnје","Malta","Monaco","Podgorica","Amsterdam","Den-Haag","Eindhoven","Groningen","Rotterdam","Utrecht","Bergen","Oslo","Bialystok","Bydgoszcz","Gdansk","Katowice","Krakow","Lodz","Lublin","Poznan","Szczecin","Warszawa","Wroclaw","Braga","Coimbra","Faro-Algarve","Lisboa","Madeira","Porto","Brasov","Bucuresti","Cluj-napoca","Constanta","Craiova","Galati","Iasi","Timisoara","Moskva","Sankt-peterburg","Beograd","Bratislava","Kosice","Alicante","Barcelona","Bilbao","Cadiz","Canarias","Coru","Granada","Ibiza","Madrid","Malaga","Mallorca","Murcia","Oviedo","Salamanca","San-Sebasti","Sevilla","Valencia","Valladolid","Zaragoza","Goteborg","Helsingborg","Jonkoping","Malmo","Norrkoping","Orebro","Stockholm","Umea","Uppsala","Vasteras","Basel","Bern","Geneve","Lausanne","Lugano","Zurich","Dnipropetrovsk","Donetsk","Kharkiv","Kyiv","Lviv","Odessa","Zaporizhia","Aberdeen","Bath","Belfast","Birmingham","Brighton","Bristol","Cambridge","Devon","East-Anglia","East-Midlands","Edinburgh","Essex","Glasgow","Hampshire","Kent","Leeds","Liverpool","London","Manchester","Newcastle","Oxford","Sheffield","Wales","Delaware","Maine","New-Hampshire","Wyoming","Newfoundland-Labrador","Northwest-Territories","Halifax","Yukon","Vermont","Manama","Barisal","Bogra","Chittagong","Comilla","Dhaka","Khulna","Mymensingh","Rajshahi","Rangpur-City","Raozan-Upazila","Beijing","Chengdu","Chongqing","Dalian","Guangzhou","Hangzhou","Nanjing","Shanghai","Shenzhen","Wuhan","Xian","Hk","Kowloon","New-Territories","Bali","Bandung","Batam","Jakarta","Makassar","Medan","Surabaya","Agra","Ahmedabad","Amritsar","Aurangabad","Banglore","Bhopal","Bhubaneswar","Chandigarh","Chennai","Coimbatore","Dehradun","Faridabad","Ghaziabad","Gurugram","Guwahati","Hydrabad","Indore","Jaipur","Jamshedpur","Jodhpur","Kanpur","Kochi","Kolkata","Lucknow","Ludhiana","Madurai","Mangalore","Mumbai","Mysore","Nagpur","Nashik","New-Delhi","Noida","Patna","Prayagraj","Pune","Raipur","Ranchi","Srinagar","Surat","Trichy","Trivandrum","Udaipur","Vadodara","Varanasi","Vijayawada","Visakhapatnam","Haifa","Jerusalem","Rishon-Lezion","Telaviv","Westbank","Fukuoka","Hiroshima","Nagoya","Okinawa","Okinawa","Sapporo","Sendai","Tokyo","Amman","Busan","Changwon","Daegu","Daejeon","Gwangju","Incheon","Seoul","Suwon","Ulsan","Kuwait","Beirut","Sidon","Tripoli","Macau","Ipoh","Johor-Bahru","Kota-Baru","Kota-Kinabalu","Kuala-Lumpur","Kuching","Penang","Petaling-Jaya","Ulaanbaatar","Muscat","Faisalabad","Islamabad","Karachi","Lahore","Cebu","Davao","Manila","Pampanga","Doha","Singapore","Taipei","Bangkok","Ankara","Antalya","Istanbul","Abudhabi","Ajman","Al-Ain","Dubai","Sharjah","Vietnam","Adelaide","Brisbane","Cairns","Canberra","Darwin","Gold-Coast","Hobart","Launceston","Melbourne","Newcastle","Perth","Sydney","Toowoomba","Townsville","Wollongong","Guam","Auckland","Christchurch","Dunedin","Hamilton","Invercargill","Napier-Hastings","Nelson","Northland","Tauranga","Wellington","Buenos-Aires","Cordoba","Laplata","Mendoza","Rosario","Salta","South-Argentina","Tucuman","Belize","La-Paz","Bahia","Belem","Belo-Horizonte","Brasilia","Curitiba","Fortaleza","Goiania","Manaus","Porto-Alegre","Recife","Rio-De-Janeiro","Sao-Paulo","Bahamas","Dominican-Republic","Jamaica","Other-Caribbean","Puerto-Rico","Virgin-Islands","Antofagasta","Chill","Concepcion","Iquique","La-Serena","Montt","Rancagua","Santiago","Talca","Temuco","Valparaiso","Barranquilla","Bogota","Bucaramanga","Cali","Cartagena","Cucuta","Ibagu","Medellin","Neiva","Pasto","Pereira","Santa-Martal","Costa-Rica","Ambato","Cuenca","Esmeraldas","Guayaquil","Machala","Manta","Quito","Santo-Domingo","San-Miguel","San-Salvador","Santa-Ana","Guatemala","Georgetown","Tegucigalpa","Acapulco","Baja-California","Chihuahua","Ciudad-Ju","Df","Guadalajara","Guanajuato","Hermosillo","Hidalgo","Mazatl","Monterrey","Oaxaca","Puebla","Puerto-Vallarta","Quer","San-Luis-Potos","Tijuana","Toluca","Vera-Cruz","Yucat","Managua","Ciudad-De-Panam","Col","David","Asunci","Arequipa","Chiclayo","Chimbote","Cusco","Huancayo","Iquitos","Lima","Piura","Trujillo","Paramaribo","Montevideo","Caracas"]



/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), countries);

/*,"India","Agra","Ahmedabad","Amritsar","Aurangabad","Banglore","Bhopal","Bhubaneswar","Chandigarh","Chennai","Coimbatore","Dehradun","Faridabad","Ghaziabad","Gurugram","Guwahati","Hydrabad","Indore","Jaipur","Jamshedpur","Jodhpur","Kanpur","Kochi","Kolkata","Lucknow","Ludhiana","Madurai","Mangalore","Mumbai","Mysore","Nagpur","Nashik","Delhi","Noida","Patna","Prayagraj","Pune","Raipur","Ranchi","Srinagar","Surat","Trichy","Trivandrum","Udaipur","Vadodara","Varanasi","Vijayawada","Visakhapatnam"*/;
