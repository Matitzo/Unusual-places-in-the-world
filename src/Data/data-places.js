import vaadhooIslands from "../images/vaadhoo-islands-min.png";
import mendenhallIce from "../images/mendenhall-ice-caves-min.png";
import salarDeUyuni from "../images/salar-de-uyuni-min.png";
import flyGejzers from "../images/fly-gejzers-min.png";
import zhangyeDanxia from "../images/zhangye-danxia-min.png";
import cañoCristales from "../images/caño-cristales-river-min.png";
import paintedDunesPark from "../images/painted-dunes-park-min.png";
import grandPrismaticSpring from "../images/grand-prismatic-spring-min.png";
import letbaLake from "../images/letba-lake-min.png";
import devilsPit from "../images/devils-pit-min.png";
import reynisfjara from "../images/reynisfjara-min.png";
import pamukkale from "../images/pamukkale-min.png";
import danakilDepression from "../images/danakil-depression-min.png";
import lapland from "../images/lapland-min.png";
import bajkalLake from "../images/bajkal-lake-min.png";

const dataPlaces = [
  {
    title: "Vaadhoo Island, Maldives",
    desc: "It might seem to be thousands of stars reflected in the water surface, but the truth is much more mundane. It's phytoplankton that have the ability of bioluminescence (the glow of living organisms). The blue, starry glow is the result of an underwater war between single-celled dinoflagellates, which use the glow as a defense system, and copepods (tiny crustaceans).",
    img: vaadhooIslands,
    coordinates: [5.8572963814416585, 72.99253647521952],
    id: "1",
  },
  {
    title: "Mendenhall Ice Caves, Alaska",
    desc: "In Alaska, the Mendenhall Valley is home to the unique Mendenhall Glacier. It owes much of its uniqueness to the magical caves it has formed. Even more unprecedented is the fact that they change their appearance every day! The caves are formed by the melting of a glacier. The water flowing off it erodes the ice from below. The interior climate, on the other hand, is due to the thickness of the ice (the thinner it is, the lighter the shade of blue).",
    img: mendenhallIce,
    coordinates: [56.981541484384366, -133.63274023207555],
    id: "2",
  },
  {
    title: "Salar de Uyuni - Andes Mountains, Bolivia",
    desc: "The Salar de Uyuni salt flat is definitely one of the most interesting and beautiful places in South America. During the rainy season, a small layer of water is formed in the desert, through which we experience a mirror effect.",
    img: salarDeUyuni,
    coordinates: [-20.105502970370985, -67.48232605294548],
    id: "3",
  },
  {
    title: "Geyser Fly - Nevada, USA",
    desc: "This amazing place was created by human activity in 1916. While searching for groundwater, a borehole was accidentally drilled into a thermal water reservoir. Water began to pour out of the borehole and the minerals dissolved in it began to precipitate, forming a rock almost 4 meters high.",
    img: flyGejzers,
    coordinates: [40.85953983752822, -119.33188183114952],
    id: "4",
  },
  {
    title: "Zhangye Danxia, China",
    desc: "These preternatural hills are located within China National Park. They are the result of 24 million years of erosion of sandstone and other rocks that make up the foothills. As a result, the landscape is made up of, cake-like, multicolored rock layers that have been shifted relative to the horizon as a result of mountain movements to form the picturesque hills.",
    img: zhangyeDanxia,
    coordinates: [38.942346368841584, 100.4505828706956],
    id: "5",
  },
  {
    title: "River Caño Cristales, Colombia",
    desc: "Also known as the river of 5 colors. Many consider it the most beautiful river in the world. During the short period between the rainy and dry seasons, a bloom of mosses and algae occurs, resulting in the appearance of amazing colors.",
    img: cañoCristales,
    coordinates: [2.26473842370186, -73.79430863097748],
    id: "6",
  },
  {
    title: "Painted Dunes, Lassen Volcano Park, USA",
    desc: "This strange landscape was created by volcanic activity. About 350,000 years ago, the Mount Tehama volcano collapsed in the southwestern part of today's park. Little remains of it, as the resulting caldera was destroyed by glaciers in subsequent glacial periods. Lava, however, continued to rise to the earth's surface, forming smaller cones in the north, such as Lassen Peak. This volcano erupted in May 1915, spewing out large amounts of pyroclastic material and ash, and the lava flooded a strip of forest 5 kilometers long.",
    img: paintedDunesPark,
    coordinates: [40.785325237085075, -121.30509455001253],
    id: "7",
  },
  {
    title: "Grand Prismatic Spring, Wyoming, USA",
    desc: "Grand Prismatic Spring was formed by the presence of a hot lava magma chamber beneath the park's surface. Along the shores of the lake, an ore belt of silica sediment precipitating from the caldera rocks is formed. This sediment sometimes turns brown, red or dark yellow due to the presence of cyanobacteria (cyanobacteria). Farther from the water after drying, the silica becomes white, slightly yellow or gray.",
    img: grandPrismaticSpring,
    coordinates: [44.525128678051004, -110.83824631172253],
    id: "8",
  },
  {
    title: "Lake Letba, Senegal",
    desc: "Called the Pink Lake. The lake's waters change their color depending on the intensity of the sun's rays. It is believed that micro organisms and the high concentration of minerals in the surrounding soils, mainly chlorine compounds and mineral salts, are responsible for the pink color.",
    img: letbaLake,
    coordinates: [14.839819382403359, -17.234191203203444],
    id: "9",
  },
  {
    title: "Gate to Hell, Derweze, Turkmenistan",
    desc: "The Derweze region is rich in natural gas. In 1971, during geological drilling, a shallow deposit, the so-called gas pocket, was drilled through. The area collapsed leaving a funnel about 20 meters deep and 70 meters in diameter. To prevent the gas from contaminating the atmosphere, Soviet scientists decided to set it on fire. It was expected to burn out after a few days, but the sinkhole, known as the 'gates of hell,' is still burning today.",
    img: devilsPit,
    coordinates: [40.19092717152576, 58.41628788011194],
    id: "10",
  },
  {
    title: "Reynisfjara - Vik, Iceland",
    desc: "Situated in the south of Iceland, Black Beach could very well be in contention for the title of the world's most picturesque beach. Black sand, volcanic cliffs, basalt columns and rock formations protruding high out of the water all combine to make this place unique.",
    img: reynisfjara,
    coordinates: [63.406432257032144, -19.071278738549683],
    id: "11",
  },
  {
    title: "Pamukkale - Denizli, Turkey",
    desc: "They are famous for the limestone deposits formed on the slope of Cökelez Mountain. The water flowing from the hot springs, rich in calcium compounds and carbon dioxide, as it cools at the surface, precipitates calcium carbonate, the deposits of which are arranged in stalactites and stalagmites. On the slope of the mountain, taking advantage of the unevenness of the terrain, thresholds are formed, semicircular and elliptical pools of thermal water, shaped in the form of terraces, separated from each other by dams, along which the water flows. This process has been going on continuously for about 14,000 years !!!",
    img: pamukkale,
    coordinates: [37.91384199123127, 29.1186087044268],
    id: "12",
  },
  {
    title: "Danakil Depression, Ethiopia",
    desc: "Although it is a hot and unfriendly place it is by all means worthy of a visit. The hot springs and brightly colored geological formations are simply stunningly beautiful. It is also interesting to note that it is considered one of the warmest places on earth.",
    img: danakilDepression,
    coordinates: [12.025673562292914, 40.95333935265798],
    id: "13",
  },
  {
    title: "Lapland, Finland",
    desc: "Contrary to appearances, these strange forms seen in the photo are just trees covered with snow and ice. The unusual phenomenon occurs in winter, when temperatures range from -40 to -15 degrees Celsius. Adding the fact that there are reindeer, the scenery can create an existing fairy-tale atmosphere.",
    img: lapland,
    coordinates: [67.93283015494109, 26.089190086356982],
    id: "14",
  },
  {
    title: "Lake Baikal, Russia",
    desc: "It is the oldest freshwater lake in the world. It freezes over in winter, but the water is so clear that visibility reaches up to 130 meters below the surface of the ice. In March, frost and sunshine cause cracks, which promotes the formation of turquoise ice.",
    img: bajkalLake,
    coordinates: [53.661002568799624, 108.21001878536876],
    id: "15",
  },
];

export default dataPlaces;
