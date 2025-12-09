import React, { useState } from "react";

const WordPressSites = () => {
  const [showAll, setShowAll] = useState(false);

  const sites = [
    { name: "A & M Flooring And Design", url: "https://aandmflooring.com/" },
    { name: "A & S Carpet Collection", url: "https://ascarpetcollection.com/" },
    { name: "A&R Floor Supplies", url: "https://arfloorsupplies.com/" },
    { name: "AC Carpet Plus", url: "https://accarpetplus.com/" },
    { name: "ACO Floors", url: "https://acofloors.com/" },
    {
      name: "Affinity Flooring Of The Desert",
      url: "https://affinityflooring.com/",
    },
    {
      name: "Affordable Flooring Warehouse",
      url: "https://affordableflooringwarehouse.com/",
    },
    { name: "AJ Rose Carpets", url: "https://ajrosecarpets.com/" },
    { name: "Alfieri Floor Experts", url: "https://alfierifloorexperts.ca/" },
    {
      name: "All American Flooring",
      url: "https://www.allamericanflooring.net/",
    },
    { name: "All Floors", url: "https://allfloors.ca/" },
    { name: "All Floors & More", url: "https://allfloorstore.com/" },
    {
      name: "Allied Flooring & Paint",
      url: "https://alliedflooringandpaint.com/",
    },
    { name: "Ambassador Flooring", url: "https://www.ambassadorfloor.com/" },
    {
      name: "Americas Flooring Store",
      url: "https://americasflooringstore.com/",
    },
    {
      name: "Anderson Custom Carpeting",
      url: "https://andersoncarpeting.com/",
    },
    { name: "Andrews Flooring LLC", url: "https://andrewsflooringllc.com/" },
    { name: "Baker Valley Floors", url: "https://bakervalleyfloors.com/" },
    { name: "Barrett Floors", url: "https://barrettfloorsaz.com/" },
    { name: "Basin Appliance", url: "https://basinflooring.com/" },
    {
      name: "Battle Creek Tile & Mosaic Co Inc",
      url: "https://battlecreektile.com/",
    },
    { name: "Bay Country Floors", url: "https://baycountryfloors.com/" },
    { name: "Beach Pro Flooring", url: "https://beachproflooring.com/" },
    { name: "Bell County Flooring", url: "https://bellcountyflooring.com/" },
    { name: "Bereman Carpets Inc", url: "https://beremancarpets.com/" },
    { name: "Best Buy Interior Finishes", url: "https://www.bbifinishes.com/" },
    { name: "BFC Flooring & Design Centre", url: "https://bfcflooring.com/" },
    { name: "Birons Flooring Inc", url: "https://bironsflooring.com/" },
    { name: "Bixby Knolls Carpet", url: "https://bixbyknollscarpet.com/" },
    { name: "Black Hills Flooring", url: "https://blackhillsflooring.com/" },
    {
      name: "Blackhurst Carpet & Furniture",
      url: "https://blackhurstcarpetandfurniture.com/",
    },
    { name: "Blair Mill Outlet", url: "https://blairmilloutlet.com/" },
    { name: "BMG Flooring & Tile Center", url: "https://bmgflooring.com/" },
    { name: "Bob & Pete's Floors", url: "https://bobandpetesfloors.com/" },
    {
      name: "Bobs Discount Carpet Inc",
      url: "https://bobsdiscountcarpetinc.com/",
    },
    { name: "Bodamer Brothers Flooring", url: "https://bodamerbrothers.com/" },
    { name: "Body Forge", url: "https://bodyforge.us/" },
    {
      name: "Bow Family Furniture & Flooring",
      url: "https://www.familyfurnitureandflooring.com/",
    },
    {
      name: "Bowlings Carpet",
      url: "https://cincinnaticarpetandflooring.com/",
    },
    { name: "Boyer's Floor Covering", url: "https://boyersfloorcovering.com/" },
    { name: "Boyles Flooring", url: "https://boylesflooringinc.com/" },
    { name: "Bram Flooring", url: "https://bramflooring.com/" },
    {
      name: "Brian's Flooring & Design",
      url: "https://shopbriansflooring.com/",
    },
    { name: "Broadway Carpet & Flooring", url: "https://broadwaycarpets.com/" },
    {
      name: "Brooks Flooring Services Inc",
      url: "https://brooks-flooring.com/",
    },
    { name: "Bryson Carpet", url: "https://brysoncarpetbrevard.com/" },
    { name: "Buckway Flooring", url: "https://buckwayflooringdesign.com/" },
    { name: "Bud Polley's Floor Center", url: "https://budpolley.com/" },
    { name: "Burris Carpet Plus, Inc.", url: "https://burriscarpetplus.com/" },
    { name: "Burton Flooring, Inc", url: "https://burtonflooringinc.com/" },
    { name: "C & C Tile & Carpet Co", url: "https://cctileandcarpet.com/" },
    {
      name: "California Cushion & Carpet",
      url: "https://californiacushionandcarpet.com/",
    },
    { name: "California Renovation", url: "https://californiarenovation.com/" },
    {
      name: "Calvetta Brothers Mentor",
      url: "https://calvettabrothersmentor.com/",
    },
    {
      name: "Calvetta Brothers Northfield",
      url: "https://calvettabrothersnorthfield.com/",
    },
    {
      name: "Campbell's Carpet of Nevada",
      url: "https://www.campbellscarpets.com/",
    },
    { name: "Canales Flooring", url: "https://canalesflooring.com/" },
    {
      name: "Carpet Advantage Company Inc",
      url: "https://carpetadvantage.net/",
    },
    { name: "Carpet City", url: "https://carpetcityhopkinstile.com/" },
    { name: "Carpet Collection", url: "https://carpetcollection.com/" },
    {
      name: "Carpet Direct Flooring",
      url: "https://carpetdirectflooring.com/",
    },
    { name: "Carpet Empire Plus", url: "https://carpetempireplus.com/" },
    { name: "Carpet Exchange", url: "https://carpetexchangetx.com/" },
    { name: "Carpet Exchange", url: "https://coretecexchange.com/" },
    { name: "Carpet Gallery", url: "https://carpetgalleryfloors.com/" },
    {
      name: "Carpet House Flooring Center",
      url: "https://carpethouseohio.com/",
    },
    { name: "Carpet Mart, INC", url: "https://mycarpetmart.com/" },
    { name: "Carpet Masters, LLC", url: "https://carpetmastersinc.com/" },
    { name: "Carpet Plus", url: "https://carpetplus.com/" },
    { name: "Carpet Selections, Inc.", url: "https://carpetselectionsky.com/" },
    { name: "Carpet Source", url: "https://carpetsourcekc.com/" },
    { name: "Carpet Specialists", url: "https://carpetspecialistsonline.com/" },
    { name: "Carpet To Go", url: "https://carpettogo.com/" },
    { name: "Carpet Town", url: "https://carpettownfloors.com/" },
    { name: "Carpet USA", url: "https://carpetusainc.com/" },
    { name: "Carpet Warehouse", url: "https://carpetwarehousein.com/" },
    { name: "Carpet World Of Alaska", url: "https://carpetworldalaska.com/" },
    { name: "Carpet Your World", url: "https://carpetyourworld.com/" },
    { name: "Carpeteria", url: "https://carpeteria.com/" },
    { name: "Carpetland USA", url: "https://carpetland-usa.com/" },
    { name: "Carpetland USA", url: "https://carpetlandgrandjunction.com/" },
    {
      name: "Carpetland USA Granite & Flooring",
      url: "https://carpetlandusaal.com/",
    },
    { name: "Carpetland USA of Virginia", url: "https://carpetlandusava.com/" },
    { name: "Carpetland USA Wisconsin", url: "https://carpetlandusawi.com/" },
    { name: "Carpets by Direct", url: "https://carpetsbydirect.com/" },
    { name: "Carpets Of Dalton", url: "https://carpetsofdalton.com/" },
    { name: "Carpets To Go", url: "https://carpetstogonj.com/" },
    { name: "CarpetsPlus COLORTILE", url: "https://hoosiercarpetsplus.com/" },
    { name: "CarpetsPlus COLORTILE", url: "https://colortilebend.com/" },
    {
      name: "CarpetsPlus COLORTILE & Wholesale Flooring",
      url: "https://wholesaleflooringonline.com/",
    },
    {
      name: "CarpetsPlus COLORTILE of Hutchinson",
      url: "https://mycolortile.com/",
    },
    { name: "CarpetsPlus Of Wisconsin", url: "https://carpetspluswi.com/" },
    {
      name: "Carrera's Flooring & Blinds",
      url: "https://carrerasflooringandblinds.com/",
    },
    {
      name: "Castle Carpets & Interiors",
      url: "https://castlecarpetsandinteriors.com/",
    },
    { name: "Central Alberta Flooring", url: "https://centralabflooring.com/" },
    { name: "Chacon Flooring", url: "https://chaconflooringstore.com/" },
    {
      name: "Cherry City Interiors And Design",
      url: "https://cherrycityinteriors.com/",
    },
    {
      name: "Chesapeake Family Flooring",
      url: "https://chesapeakefamilyflooring.com/",
    },
    {
      name: "Chill And Grill Outdoor Living",
      url: "https://chillandgrilloutdoorliving.com/",
    },
    { name: "Chillicothe Carpet", url: "https://chillicothecarpet.com/" },
    {
      name: "Christian Brothers Flooring And Interiors",
      url: "https://cbfloorsinc.com/",
    },
    { name: "City Flooring, LLC", url: "https://cityflooringllc.com/" },
    {
      name: "Clark Dunbar Flooring Superstore",
      url: "https://clark-dunbar.com/",
    },
    {
      name: "Classic Flooring Center",
      url: "https://classicflooringcenter.com/",
    },
    {
      name: "Cleveland Carpets and Floors",
      url: "https://clevelandcarpetsandfloors.com/",
    },
    {
      name: "Coleman's Flooring & Blinds",
      url: "https://colemansflooring.com/",
    },
    { name: "Colonial Interiors", url: "https://colonialinteriors.net/" },
    { name: "Color Interiors", url: "https://colorinteriors.com/" },
    { name: "COLORTILE of Salem", url: "https://colortilesalem.com/" },
    { name: "Columbus Carpet", url: "https://columbuscarpetinc.com/" },
    { name: "Corvin's Floors & Cabinets", url: "https://corvins.com/" },
    {
      name: "Corvins Furniture & Flooring",
      url: "https://corvinsflooring.com/",
    },
    {
      name: "Country Carpet & Furniture",
      url: "https://countrycarpetfurniture.com/",
    },
    {
      name: "Country Manor Decorating",
      url: "https://countrymanordecorating.com/",
    },
    { name: "CR Carpet", url: "https://crflooring.com/" },
    {
      name: "Creative Home Enhanements, Inc",
      url: "https://creativehomeaz.net/",
    },
    { name: "Crest Flooring", url: "https://crestflooring.com/" },
    { name: "Custom Carpet Centers", url: "https://customcarpetcenters.com/" },
    { name: "Custom Floors", url: "https://customfloors.com/" },
    { name: "Custom Floors", url: "https://customfloorstn.com/" },
    { name: "D&D Carpets Inc", url: "https://danddcarpet.net/" },
    { name: "Dalton Direct Carpet", url: "https://daltondirectcarpet.com/" },
    {
      name: "Dalton Flooring Outlet",
      url: "https://daltonflooringoutlet.com/",
    },
    { name: "Dary Carpet & Floors", url: "https://darycarpet.com/" },
    { name: "De/Mar Design Studio", url: "https://demarfloor.com/" },
    { name: "Degraaf Interiors", url: "https://www.degraafinteriors.com/" },
    {
      name: "DeHaan Tile & Floor Covering",
      url: "https://dehaanfloorcovering.com/",
    },
    { name: "Dehart Tile", url: "https://deharttile.com/" },
    {
      name: "Derailed Commodity Flooring & Furniture",
      url: "https://derailedcommodity.com/",
    },
    { name: "Design Waterville", url: "https://designwaterville.com/" },
    {
      name: "Direct Carpet Unlimited",
      url: "https://directcarpetunlimited.com/",
    },
    {
      name: "Direct Flooring Center",
      url: "https://directflooringcenter.com/",
    },
    {
      name: "Discount Carpet Warehouse",
      url: "https://discountcarpetwarehouseinc.com/",
    },
    {
      name: "Distinctive Flooring",
      url: "https://distinctiveflooringshop.com/",
    },
    { name: "Dolphin Carpet", url: "https://www.dolphincarpet.com/" },
    {
      name: "Dolphin Carpet Campaigns",
      url: "https://campaigns.dolphincarpet.com/",
    },
    { name: "Donald E. McNabb Flooring", url: "https://demcnabb.com/" },
    {
      name: "Dudley Moore Awning & Floor Covering Inc",
      url: "https://dudleymoorefloors.com/",
    },
    { name: "Echo Flooring Gallery", url: "https://echoflooring.com/" },
    {
      name: "Elite Builder Services",
      url: "https://elitebuilderservices.com/",
    },
    { name: "Emo Flooring Company Inc", url: "https://emoflooring.com/" },
    { name: "Endwell Rug & Floor", url: "https://endwellrug.com/" },
    { name: "Enfield Carpet Center Inc", url: "https://enfieldcarpet.com/" },
    {
      name: "Enterprise Wholesale Flooring and Lighting",
      url: "https://enterprisewholesaleflooring.com/",
    },
    { name: "Everlast Floors", url: "https://everlastfloorsinc.com/" },
    { name: "F & A Flooring", url: "https://faflooringks.com/" },
    { name: "Fairmont Flooring", url: "https://fairmont-flooring.com/" },
    { name: "Family Flooring", url: "https://familyflooringidaho.com/" },
    {
      name: "Family Turf Wholesalers",
      url: "https://familyturfwholesalers.com/",
    },
    { name: "Fantastic Floors", url: "https://fanfloors.com/" },
    { name: "Faris Carpet & Tile", url: "https://fariscarpetandtile.com/" },
    {
      name: "Flemington Department Store",
      url: "https://flemingtonfloors.com/",
    },
    { name: "Floor Concepts", url: "https://floorconceptsinc.com/" },
    { name: "Floor Coverings of Winona", url: "https://winonafloors.com/" },
    { name: "Floor Max", url: "https://floormaxpro.com/" },
    { name: "FloorCo.", url: "https://floorcopremium.com/" },
    { name: "Flooring & Carpets For Less", url: "https://carpetsforless.ca/" },
    { name: "Flooring 101", url: "https://flooring101.com/" },
    { name: "Flooring and More", url: "https://flooringandmorekc.com/" },
    { name: "Flooring By Design", url: "https://flooringbydesign.com/" },
    { name: "Flooring By Design NC", url: "https://flooringbydesignnc.com/" },
    {
      name: "Flooring by Wilson's Carpet Plus",
      url: "https://flooringbywilsons.com/",
    },
    { name: "Flooring Concepts", url: "https://flooringconcepts.us/" },
    {
      name: "Flooring Depot of Panama City",
      url: "https://flooringdepotofpanama.com/",
    },
    {
      name: "Flooring Expo by Carpet King",
      url: "https://www.flooringexpo.com/",
    },
    { name: "Flooring Express", url: "https://flooringexp.com/" },
    {
      name: "Flooring Expressions",
      url: "https://flooringexpressionsindy.com/",
    },
    {
      name: "Flooring Liquidators Franchise",
      url: "https://franchise.flooringliquidators.net/",
    },
    { name: "Flooring You Well", url: "https://flooringyouwell.com/" },
    { name: "Floors And More Inc.", url: "https://floorsandmorede.com/" },
    { name: "Floors By Roberts", url: "https://floorsbyroberts.com/" },
    { name: "Floors In Motion", url: "https://floorsinmotion.com/" },
    { name: "Floors Plus, Inc", url: "https://floorsplusmodesto.com/" },
    {
      name: "Floors Unlimited Of Nc LLC",
      url: "https://floorsunlimitedllc.com/",
    },
    { name: "Floortrends", url: "https://www.floortrends.ca/" },
    { name: "Frazee Carpet", url: "https://gofrazee.com/" },
    {
      name: "Fredericks Floorcovering",
      url: "https://fredericksfloorcovering.com/",
    },
    {
      name: "Gainesville CarpetsPlus COLORTILE",
      url: "https://gainesvillecarpetsplus.com/",
    },
    {
      name: "Garrett & Sons Flooring",
      url: "https://garrettandsonscarpet.com/",
    },
    { name: "Gateway Floors", url: "https://gateway1inc.com/" },
    { name: "Georgia Flooring", url: "https://georgiaflooring.net/" },
    { name: "Giant Commercial Flooring", url: "https://gcflooring.ca/" },
    { name: "Gil's Carpets", url: "https://gilscarpets.com/" },
    { name: "Gillenwater", url: "https://gillenwaterflooring.com/" },
    { name: "Gilman Floors, LLC", url: "https://gilmanfloors.com/" },
    { name: "GMD Surfaces", url: "https://www.gmdsurfaces.com/" },
    {
      name: "Goetze Bros. Carpet & Furniture",
      url: "https://www.goetzebroscarpet.com/",
    },
    { name: "GraniteLand", url: "https://granitelandfl.com/" },
    {
      name: "Graniteland USA Kitchen & Bath",
      url: "https://granitelandusa.com/",
    },
    { name: "Great Floors", url: "https://greatfloors.com/" },
    { name: "Great Lakes Carpet & Tile", url: "https://greatlakescarpet.com/" },
    { name: "Green's Floors & More", url: "https://www.greensflooringkc.com/" },
    { name: "Gunn Flooring Company", url: "https://gunnflooring.com/" },
    { name: "H&R Carpets & Flooring", url: "https://hrcarpets.com/" },
    { name: "Hadinger Flooring", url: "https://www.hadingers.com/" },
    { name: "Hadinger Flooring", url: "https://hadingerflooring.com/" },
    { name: "Haight Carpet & Interiors", url: "https://haightcarpet.com/" },
    { name: "Harbins Floor Covering", url: "https://harbinsfloors.com/" },
    {
      name: "Hauptman Floor Covering Co Inc",
      url: "https://hauptmanfloors.com/",
    },
    { name: "Hedges Carpet Barn", url: "https://hedgescarpetbarn.com/" },
    { name: "Herman's Carpets", url: "https://hermanscarpets.ca/" },
    {
      name: "Hernandez Wholesale Flooring",
      url: "https://www.hernandezwholesaleflooring.net/",
    },
    { name: "Homespun Furniture", url: "https://homespunfurniture.com/" },
    { name: "Hopkins Floor Co", url: "https://hopkinsfloorco.com/" },
    { name: "House of Carpets", url: "https://hocflooring.com/" },
    { name: "House of Carpets & Lighting", url: "https://houseofcarpets.net/" },
    {
      name: "Howard-Carpenter Floor Covering",
      url: "https://howard-carpenter.com/",
    },
    { name: "Howmar Carpet Inc", url: "https://howmarcarpet.com/" },
    {
      name: "Hubbard Flooring Studio",
      url: "https://hubbardflooringstudio.com/",
    },
    {
      name: "Hurricane Floor Covering & Design",
      url: "https://hurricanefloorcoverings.com/",
    },
    { name: "I & J Carpets, Inc.", url: "https://iandjcarpets.com/" },
    { name: "In and Out Flooring", url: "https://inandoutflooring.com/" },
    { name: "Ivey Carpet & Flooring", url: "https://iveycarpet.com/" },
    {
      name: "J Lane Flooring & Design,Inc.",
      url: "https://jlaneflooring.com/",
    },
    { name: "J/K Carpet Center, Inc", url: "https://jkcarpetdealers.com/" },
    { name: "Jabara's", url: "https://jabaras.com/" },
    { name: "JCB Interiors", url: "https://jcbinteriors.com/" },
    {
      name: "Jimmie Lyles Flooring Gallery",
      url: "https://jimmielylesflooringgallery.com/",
    },
    { name: "JLG Floors & More", url: "https://jlgfloors.com/" },
    { name: "Joe's Floor Store", url: "https://joesfloorstore.com/" },
    { name: "Johnson Floor & Home", url: "https://johnsonfloorandhome.com/" },
    { name: "Johnston Paint & Decorating", url: "https://johnstonpaint.com/" },
    { name: "Jordans Flooring", url: "https://jordansflooring.ca/" },
    { name: "Joseph's Flooring", url: "https://josephsflooring.com/" },
    {
      name: "Jubilee Flooring & Decorating",
      url: "https://jubilee-flooring.com/",
    },
    { name: "Karen's Advance Floors", url: "https://karensadvancefloors.com/" },
    { name: "Kastran Karpets", url: "https://kastrankarpets.com/" },
    { name: "Kay Riley Flooring and Design", url: "https://kayriley.com/" },
    {
      name: "Kellum's Floors and More",
      url: "https://kellumsfloorsandmore.com/",
    },
    { name: "Kelly's Carpet & Furniture", url: "https://kellyscarpet.com/" },
    { name: "Kemper Flooring", url: "https://kemperflooring.com/" },
    {
      name: "Key Carpet Corporation",
      url: "https://www.keycarpetcorporation.com/",
    },
    {
      name: "Keystone Carpets & Interiors",
      url: "https://keystonecarpetsandinteriors.com/",
    },
    { name: "Kirkland's Flooring", url: "https://kirklandsflooring.com/" },
    { name: "Knova's Carpets", url: "https://knovascarpets.com/" },
    {
      name: "Kopps Carpet and Decorating",
      url: "https://koppsdecorating.com/",
    },
    { name: "LA Carpet Warehouse", url: "https://lacarpetwarehouse.com/" },
    { name: "Lake Forest Flooring", url: "https://lakeforestflooring.com/" },
    { name: "Lake Interiors Chelan", url: "https://lakeinteriorschelan.com/" },
    { name: "Lancaster Flooring Inc", url: "https://lancasterflooring.com/" },
    { name: "Larry Lint Flooring", url: "https://larrylint.com/" },
    { name: "Leader Flooring", url: "https://leaderflooring.com/" },
    { name: "Leaf Floor Covering", url: "https://leaffloorcovering.com/" },
    { name: "LeClaire Flooring", url: "https://www.leclaireflooring.com/" },
    { name: "Legend Flooring", url: "https://legendflooringaz.com/" },
    {
      name: "Leicester Flooring",
      url: "https://leicesterflooringandcarpet.com/",
    },
    { name: "Lions Floor", url: "https://lionsfloor.com/" },
    { name: "LMK Floors", url: "https://lmkfloors.com/" },
    {
      name: "Location Carpet And Flooring",
      url: "https://location-flooring.com/",
    },
    { name: "Location Carpet Co", url: "https://locationcarpet.com/" },
    {
      name: "Lowell Carpet & Coverings",
      url: "https://lowellcarpetandcoverings.com/",
    },
    { name: "Luna Flooring Gallery", url: "https://luna-stores.com/" },
    { name: "Lynch Carpet & Flooring", url: "https://lynchcarpet.com/" },
    {
      name: "Macco's Floor Covering Center",
      url: "https://www.maccosflooring.com/",
    },
    { name: "MAGIC CARPETS LINOLEUM", url: "https://magiccarpets.biz/" },
    { name: "Markville Flooring", url: "https://markvilleflooring.ca/" },
    { name: "Mayfair Floors", url: "https://mayfairhd.com/" },
    { name: "McSwains Carpet & Floors", url: "https://mcswaincarpets.com/" },
    { name: "Messina's Flooring", url: "https://messinasflooring.com/" },
    {
      name: "Mid-Michigan Floor Coverings",
      url: "https://midmichiganfloorcovering.com/",
    },
    {
      name: "Mill Direct Floor Coverings",
      url: "https://milldirectfloorcoverings.com/",
    },
    { name: "Mills Floor Covering", url: "https://millsfloorcovering.com/" },
    {
      name: "Montgomery's CarpetsPlus COLORTILE",
      url: "https://mcpcolortile.com/",
    },
    { name: "My Floor Hub", url: "https://myfloorhub.com/" },
    {
      name: "Myers Flooring of Atlanta",
      url: "https://myerscarpetatlanta.com/",
    },
    {
      name: "Myers Flooring of Nashville",
      url: "https://myersflooringofnashville.com/",
    },
    { name: "Nampa Floors & Interiors, Inc.", url: "https://nampafloors.com/" },
    { name: "National Design Mart", url: "https://nationaldesignmart.com/" },
    { name: "National Flooring & Supply", url: "https://nfsbrentwood.com/" },
    { name: "Neils Floor Covering", url: "https://neilsfloorcovering.com/" },
    { name: "Nemeth Family Interiors", url: "https://nemethinteriors.com/" },
    { name: "New York Carpets & Flooring", url: "https://newyorkcarpets.com/" },
    {
      name: "Niemann's American Flooring",
      url: "https://niemannsamericanflooring.com/",
    },
    {
      name: "Northwest Flooring Gallery",
      url: "https://northwestflooringgallery.com/",
    },
    { name: "O'Krent Floors", url: "https://www.okrentfloors.com/" },
    { name: "Off-Price Carpet Outlet", url: "https://offpricecarpets.com/" },
    { name: "Payne's Carpet Outlet", url: "https://paynescarpetoutlet.com/" },
    { name: "PDJ FLooring", url: "https://pdjflooring.com/" },
    {
      name: "Petersen's Carpet & Flooring",
      url: "https://petersenscarpet.com/",
    },
    {
      name: "Philadelphia Flooring Solutions",
      url: "https://philadelphiaflooringsolutions.com/",
    },
    {
      name: "Pilot Floor Covering, Inc.",
      url: "https://pilotfloorcovering.com/",
    },
    { name: "Planet Flooring", url: "https://planet-flooring.com/" },
    {
      name: "Premiere Floor Covering",
      url: "https://premierefloorcovering.com/",
    },
    { name: "Price Flooring", url: "https://priceflooring.com/" },
    { name: "PriceCo Floors", url: "https://marylandflooringwholesaler.com/" },
    { name: "Puckett's Flooring", url: "https://puckettsflooring.com/" },
    { name: "Raby Home Solutions", url: "https://rabyhome.com/" },
    { name: "Randy's Flooring", url: "https://randysflooring.com/" },
    { name: "Rayo Wholesale", url: "https://rayowholesale.com/" },
    {
      name: "Redd Flooring & Design Center",
      url: "https://www.reddflooring.com/",
    },
    { name: "Reinhold Flooring", url: "https://reinholdflooring.com/" },
    { name: "Rich's Modern Flooring", url: "https://richsflooring.com/" },
    {
      name: "Rigdon Floor Coverings Inc",
      url: "https://rigdonfloorcoverings.com/",
    },
    {
      name: "Right Carpet & Interiors",
      url: "https://rightcarpetandinteriors.com/",
    },
    { name: "Roberts Carpet", url: "https://www.robertscarpet.com/" },
    {
      name: "Rockford Floor Covering",
      url: "https://rockfordfloorcoveringmi.com/",
    },
    {
      name: "Rockwall Floor and Paint",
      url: "https://rockwallfloorandpaint.com/",
    },
    {
      name: "Rodgers Floor Covering",
      url: "https://www.rodgersfloorcovering.com/",
    },
    { name: "Roger's Flooring", url: "https://rogersflooring.com/" },
    { name: "Ron's Carpet & Design", url: "https://ronscarpetanddesign.com/" },
    { name: "Ronnie's Carpets & Flooring", url: "https://ronniescarpets.com/" },
    { name: "Rugs Rolls and More", url: "https://rugsrollsandmore.com/" },
    { name: "Rugworks", url: "https://rugworks.com/" },
    {
      name: "Sackett's Flooring Solutions",
      url: "https://www.sackettsflooring.com/",
    },
    { name: "SCI Floor Covering", url: "https://sciflooring.com/" },
    {
      name: "Select Flooring Design & Interiors",
      url: "https://select-flooring.com/",
    },
    { name: "Select Floors", url: "https://selectfloors.info/" },
    { name: "Seven Day Stone", url: "https://sevendaystone.com/" },
    {
      name: "SHANS CARPETS AND FINE FLOORING INC",
      url: "https://flooringstorehouston.com/",
    },
    { name: "Shelley Carpets", url: "https://shelleycarpets.com/" },
    { name: "Shoreline Flooring", url: "https://shorelineflooring.com/" },
    { name: "Signature Flooring", url: "https://signatureflooringinc.com/" },
    {
      name: "Simple Flooring Solutions",
      url: "https://simpleflooringsolutionsjackson.com/",
    },
    { name: "SP Floors & Design Center", url: "https://spfloors.net/" },
    { name: "Specialty Flooring", url: "https://specialtyflooringsc.com/" },
    {
      name: "Speers Road Broadloom Flooring Design Center",
      url: "https://speersroadbroadloom.com/",
    },
    { name: "Sports Turf Warehouse", url: "https://sportsturfwarehouse.com/" },
    { name: "Square Yard Carpet", url: "https://squareyardcarpet.com/" },
    { name: "St. Francis Flooring", url: "https://stfrancisflooring.com/" },
    { name: "Staff Carpet", url: "https://www.staffcarpet.com/" },
    { name: "Star Flooring & Design", url: "https://boulderstarflooring.com/" },
    { name: "Stearns Flooring", url: "https://stearnsflooring.com/" },
    {
      name: "Sterling Carpet & Flooring",
      url: "https://sterlingflooring.com/",
    },
    {
      name: "Sterling Carpet Shops, Inc",
      url: "https://sterlingcarpetshops.com/",
    },
    {
      name: "Stevens Floor Coverings",
      url: "https://stevensfloorcoverings.com/",
    },
    { name: "Super Floors Of Alaska", url: "https://superfloorsalaska.com/" },
    {
      name: "Tazewell Floors & Design",
      url: "https://tazewellfloorsdesign.com/",
    },
    {
      name: "Technique Flooring And Restoration",
      url: "https://techniqueflooring.com/",
    },
    { name: "Terrace Floorcovering", url: "https://terracecarpet.com/" },
    { name: "Terry's Floor Fashions", url: "https://terrysfloorfashions.com/" },
    {
      name: "The Carpet Factory Super Store",
      url: "https://carpetfactorysuperstore.com/",
    },
    { name: "The Carpet Gallery", url: "https://seymourcarpetgallery.com/" },
    { name: "The Carpet Guy", url: "https://thecarpetguy.com/" },
    { name: "The Carpet Stop", url: "https://carpetstop.com/" },
    { name: "The Floor Store", url: "https://thefloorstorenm.com/" },
    { name: "The Floor Store", url: "https://www.floorstores.com/" },
    { name: "The Floor Store VA", url: "https://thefloorstorerva.com/" },
    { name: "The Flooring Center", url: "https://myfloorcenter.com/" },
    { name: "The FloorWorks", url: "https://thefloorworks.com/" },
    { name: "The FloorWorks Group", url: "https://thefloorworksgroup.com/" },
    {
      name: "The Home Place by Lindsay",
      url: "https://thehomeplaceonline.com/",
    },
    { name: "The L&L Company", url: "https://www.thelandlcompany.com/" },
    { name: "thefloorshoppe.com", url: "https://thefloorshoppe.com/" },
    { name: "Thornton Flooring", url: "https://thorntonflooring.com/" },
    { name: "Titan Flooring", url: "https://titanflooring.com/" },
    { name: "Tom January Floors", url: "https://tomjanuaryfloors.com/" },
    {
      name: "Tom's Carpet & Flooring Outlet",
      url: "https://tomscarpetoutlet.com/",
    },
    { name: "Total Floors", url: "https://totalfloors.biz/" },
    { name: "Towne Flooring Center", url: "https://townecarpet.com/" },
    { name: "Tri-City Carpet", url: "https://tricitycarpet.com/" },
    {
      name: "Triangle Flooring Center",
      url: "https://triangleflooringcenter.com/",
    },
    { name: "TUF FLOORING LLC", url: "https://tufflooring.com/" },
    {
      name: "Ultimate Flooring Design Center",
      url: "https://ultimateflooringdesigncenter.com/",
    },
    { name: "Valley Carpet, Inc.", url: "https://valleycarpetinc.com/" },
    { name: "Valley Floor Covering Inc.", url: "https://vfcri.com/" },
    { name: "Vallow Floor Coverings, Inc.", url: "https://vallowfloor.com/" },
    { name: "Vics Carpet", url: "https://vicscarpet.com/" },
    { name: "VRR Flooring", url: "https://vrrflooring.com/" },
    { name: "Wacky's Flooring", url: "https://wackysflooring.com/" },
    { name: "Wade's Interiors", url: "https://wadesinteriors.com/" },
    { name: "Wall 2 Wall Flooring", url: "https://wall2wallflooring.com/" },
    { name: "Warnike", url: "https://warnike.com/" },
    { name: "Webb Carpet Company", url: "https://webbcarpet.net/" },
    { name: "West River Carpets", url: "https://westrivercarpets.com/" },
    {
      name: "Western States Flooring",
      url: "https://westernstatesflooring.com/",
    },
    {
      name: "Westport Flooring and Interiors",
      url: "https://westportflooringandinteriors.com/",
    },
    {
      name: "William Ryan Flooring & Supplies",
      url: "https://williamryanflooring.com/",
    },
    {
      name: "Winton Flooring & Design",
      url: "https://wintondesigncenter.com/",
    },
    { name: "Xray Flooring", url: "https://xray-flooring.com/" },
    { name: "Xtreme Carpet Care", url: "https://xtremeflooring.net/" },
    { name: "Yates Flooring", url: "https://yatesflooring.com/" },
    { name: "Yetzer Different By Design", url: "https://yetzers.com/" },
    { name: "York Carpetland USA", url: "https://carpetlandusaflint.com/" },
    { name: "YUMA CARPETS & TILE INC", url: "https://yumacarpets.com/" },
  ];

  return (
    <section id="wordpress-sites" className="section-container bg-white">
      <h2 className="section-title text-gray-900">
        WordPress <span className="text-blue-500">Portfolio</span>
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="card bg-gradient-to-br from-blue-50 to-purple-50 text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <svg
              className="w-16 h-16 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.607-3.582.607M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            400+ WordPress Websites Managed
          </h3>
          <p className="text-gray-600 mb-6">
            Successfully managing and maintaining enterprise-level WordPress
            multisite installations with 100,000+ products per site
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-3xl font-bold text-blue-500">400+</p>
              <p className="text-sm text-gray-600">Active Websites</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-3xl font-bold text-blue-500">100K+</p>
              <p className="text-sm text-gray-600">Products Per Site</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-3xl font-bold text-blue-500">6 Years</p>
              <p className="text-sm text-gray-600">WordPress Experience</p>
            </div>
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {showAll ? "Hide Website List" : "View All WordPress Websites"}
            <svg
              className={`inline-block w-5 h-5 ml-2 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {showAll && (
          <div className="animate-slide-up">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Complete WordPress Portfolio
                </h3>
                <span className="px-4 py-2 bg-blue-50 text-blue-500 rounded-full text-sm font-medium">
                  {sites.length} Websites
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto pr-2">
                {sites.map((site, index) => (
                  <a
                    key={index}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-gray-50 hover:bg-blue-50 rounded-lg transition-all duration-300 group">
                    <div className="flex-1 min-w-0 mr-3">
                      <p className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600">
                        {site.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {site.url.replace("https://", "")}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> All websites are actively managed with
                  custom WordPress plugins, multisite configurations, and
                  high-performance product management systems handling 100,000+
                  products per site.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WordPressSites;
