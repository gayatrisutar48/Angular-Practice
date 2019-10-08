import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { cntyInfo } from '../cntyinfo';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  @Input()
  country: cntyInfo

  @Output()
  selected: EventEmitter<cntyInfo> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onclick(cntyName: string) {
    if (cntyName == "US") {
      console.log(cntyName)
      const country: cntyInfo = {
        title: 'US',
        imgUrl: 'assets/us.jpg',
        info: `The United States of America (USA), commonly known as the United States (U.S. or US) or America, is a country comprising 50 states, a federal district, five major self-governing territories, and various possessions.[i] At 3.8 million square miles (9.8 million km2), the United States is the world's third or fourth largest country by total area[d] and is slightly smaller than the entire continent of Europe. With a population of over 327 million people, the U.S. is the third most populous country. The capital is Washington, D.C., and the most populous city is New York City. Most of the country is located contiguously in North America between Canada and Mexico.

        Paleo-Indians migrated from Siberia to the North American mainland at least 12,000 years ago.[20] European colonization began in the 16th century. The United States emerged from the thirteen British colonies established along the East Coast. Numerous disputes between Great Britain and the colonies led to the American Revolutionary War lasting between 1775 and 1783, leading to independence.[21] The United States embarked on a vigorous expansion across North America throughout the 19th century, acquiring new territories,[22] displacing Native Americans, and gradually admitting new states until spanning the continent by 1848.[22] During the second half of the 19th century, the American Civil War led to the abolition of slavery in the United States.[23][24] The Spanish–American War and World War I confirmed the country's status as a global military power.
        
        The United States emerged from World War II as a global superpower, the first country to develop nuclear weapons, the only country to use them in warfare, and a permanent member of the United Nations Security Council. During the Cold War, the United States and the Soviet Union competed in the Space Race, culminating with the 1969 U.S. Moon landing. The end of the Cold War and collapse of the Soviet Union in 1991 left the United States as the world's sole superpower.[25]
        
        The United States is a federal republic and a representative democracy. It is a founding member of the United Nations, World Bank, International Monetary Fund, Organization of American States (OAS), and other international organizations. It is a highly developed country, with the world's largest economy by nominal GDP and second-largest economy by PPP, accounting for approximately a quarter of global GDP.[26] The United States is the world's largest importer and the second-largest exporter of goods, by value.[27][28] Its population is 4% of the world total,[29] but the U.S. holds 31% of the total wealth in the world, the largest share of global wealth concentrated in a single country.[30]
        
        Despite income and wealth disparities, the United States continues to rank very high in measures of socioeconomic performance, including average wage, median income, median wealth, human development, per capita GDP, and worker productivity.[31][32] It is the foremost military power in the world, making up a third of global military spending,[33] and is a leading political, cultural, and scientific force internationally.[34]`,
        mobile: 5214789655,
        address: 'chennai,US'
      }
      this.selected.emit(country)
    } else if (cntyName == "Canada") {
      console.log(cntyName)
      const country: cntyInfo = {

        title: 'Canada',
        imgUrl: 'assets/canada.jpg',
        info: `Canada is a country in the northern part of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres (3.85 million square miles), making it the world's second-largest country by total area. Its southern border with the United States, stretching some 8,891 kilometres (5,525 mi), is the world's longest bi-national land border. Canada's capital is Ottawa, and its three largest metropolitan areas are Toronto, Montreal, and Vancouver.

        As a whole, Canada is sparsely populated, the majority of its land area being dominated by forest and tundra. Its population is highly urbanized, with over 80 percent of its inhabitants concentrated in large and medium-sized cities, and 70 per cent residing within 100 kilometres (62 mi) of the southern border. Canada's climate varies widely across its vast area, ranging from arctic weather in the north, to hot summers in the southern regions, with four distinct seasons.
        
        Various Indigenous peoples have inhabited what is now Canada for thousands of years before European colonization. Beginning in the 16th century, British and French expeditions explored and later settled along the Atlantic coast. As a consequence of various armed conflicts, France ceded nearly all of its colonies in North America in 1763. In 1867, with the union of three British North American colonies through Confederation, Canada was formed as a federal dominion of four provinces. This began an accretion of provinces and territories and a process of increasing autonomy from the United Kingdom. This widening autonomy was highlighted by the Statute of Westminster of 1931 and culminated in the Canada Act of 1982, which severed the vestiges of legal dependence on the British parliament.
        
        Canada is a parliamentary democracy and a constitutional monarchy in the Westminster tradition, with a monarch and a prime minister who serves as the chair of the Cabinet and head of government. The country is a realm within the Commonwealth of Nations, a member of the Francophonie and officially bilingual at the federal level. It ranks among the highest in international measurements of government transparency, civil liberties, quality of life, economic freedom, and education. It is one of the world's most ethnically diverse and multicultural nations, the product of large-scale immigration from many other countries. Canada's long and complex relationship with the United States has had a significant impact on its economy and culture.
        
        A developed country, Canada has the sixteenth-highest nominal per capita income globally as well as the twelfth-highest ranking in the Human Development Index. Its advanced economy is the tenth-largest in the world, relying chiefly upon its abundant natural resources and well-developed international trade networks. Canada is part of several major international and intergovernmental institutions or groupings including the United Nations, NATO, the G7, the Group of Ten, the G20, the North American Free Trade Agreement and the Asia-Pacific Economic Cooperation forum.`,
        mobile: 5847124587,
        address: 'canada country addrress'
      }
      this.selected.emit(country)

    } else if (cntyName == "China") {
      console.log(cntyName)
      const country: cntyInfo = {
        title: 'China',
        imgUrl: 'assets/china.jpg',
        info: `China (Chinese: 中国; pinyin: Zhōngguó; literally: 'Central State'), officially the People's Republic of China (PRC or PR China), is a country in East Asia and the world's most populous country, with a population of around 1.404 billion in 2017.[13] Covering approximately 9,600,000 square kilometers (3,700,000 sq mi), it is the third or fourth largest country by total area.[k][19] Governed by the Communist Party of China, the state exercises jurisdiction over 22 provinces, five autonomous regions, four direct-controlled municipalities (Beijing, Tianjin, Shanghai, and Chongqing), and the special administrative regions of Hong Kong and Macau.

        China emerged as one of the world's first civilizations, in the fertile basin of the Yellow River in the North China Plain. For millennia, China's political system was based on hereditary monarchies, or dynasties, beginning with the semi-legendary Xia dynasty in 21st century BCE.[20] Since then, China has expanded, fractured, and re-unified numerous times. In the 3rd century BCE, the Qin reunited core China and established the first Chinese empire. The succeeding Han dynasty, which ruled from 206 BCE until 220 CE, saw some of the most advanced technology at that time, including papermaking and the compass,[21] along with agricultural and medical improvements. The invention of gunpowder and movable type in the Tang dynasty (618–907) and Northern Song (960–1127) completed the Four Great Inventions. Tang culture spread widely in Asia, as the new Silk Route brought traders to as far as Mesopotamia and the Horn of Africa.[22] Dynastic rule ended in 1912 with the Xinhai Revolution, when the Republic of China (ROC) replaced the Qing dynasty. China as a whole was ravaged by Japan during World War II. The subsequent Chinese Civil War resulted in a division of territory in 1949, when the Communist Party of China established the People's Republic of China, a unitary one-party sovereign state, on mainland China while the Kuomintang-led nationalist government retreated to the island of Taiwan. The political status of Taiwan remains disputed.
        
        Since the introduction of economic reforms in 1978, China's economy has been one of the world's fastest-growing with annual growth rates consistently above 6 percent.[23] According to the World Bank, China's GDP grew from $150 billion in 1978 to $12.24 trillion by 2017.[24] According to official data, China's GDP in 2018 was 90 trillion Yuan ($13.28 trillion).[25] Since 2010, China has been the world's second-largest economy by nominal GDP[26] and since 2014, the largest economy in the world by purchasing power parity (PPP).[27] China is also the world's largest exporter and second-largest importer of goods.[28] China is a recognized nuclear weapons state and has the world's largest standing army and second-largest defense budget.[29][30] The PRC is a permanent member of the United Nations Security Council as it replaced the ROC in 1971, as well as an active global partner of ASEAN Plus mechanism. China is also a leading member of numerous formal and informal multilateral organizations, including the Shanghai Cooperation Organization (SCO), WTO, APEC, BRICS, the BCIM, and the G20. China has been characterized as an emerging superpower, mainly because of its massive population, economy, and military.[31][32][33]`,
        mobile: 5214789632,
        address: 'china address here'
      }
      this.selected.emit(country)
    } else if (cntyName == "Japan") {
      console.log(cntyName)
      const country: cntyInfo = {
        title: 'Japan',
        imgUrl: 'assets/japan.jpg',
        info: `Japan (Japanese: 日本, Nippon [ɲippoꜜɴ] (About this soundlisten) or Nihon [ɲihoꜜɴ] (About this soundlisten); formally 日本国, About this soundNippon-koku or Nihon-koku, lit. 'State of Japan') is an island country in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian continent and stretches from the Sea of Okhotsk in the north to the East China Sea and the Philippine Sea in the south.

        The kanji that make up Japan's name mean 'sun origin', and it is often called the "Land of the Rising Sun". Japan is the world's 4th largest island country and encompasses about 6,852 islands. The stratovolcanic archipelago has five main islands: Honshu, Hokkaido, Kyushu, Shikoku and Okinawa which make up about 97% percent of Japan's land area.[15] The country is divided into 47 prefectures in eight regions, with Hokkaido being the northernmost prefecture and Okinawa being the southernmost one (albeit, in Japanese culture the country is considered to be divided east to west [16]). Japan is the 2nd most populous island country. The population of approximately 126 million is the world's eleventh largest, of which 98.5% are ethnic Japanese. 90.7% of people live in cities, while 9.3% live in the countryside.[17] About 13.8 million people live in Tokyo,[18] the capital of Japan. The Greater Tokyo Area is the most populous metropolitan area in the world with over 38 million people.[19]
        
        Archaeological research indicates that Japan was inhabited as early as the Upper Paleolithic period. The first written mention of Japan is in Chinese history texts from the 1st century AD. Influence from other regions, mainly China, followed by periods of isolation, particularly from Western Europe, has characterized Japan's history.
        
        From the 12th century until 1868, Japan was ruled in the name of the Emperor by successive feudal military shōguns. Japan entered into a long period of isolation in the early 17th century, which was ended in 1853 when a United States fleet pressured Japan to open to the West. After nearly two decades of internal conflict and insurrection, the Imperial Court regained its political power in 1868 through the help of several clans from Chōshū and Satsuma – and the Empire of Japan was established. In the late 19th and early 20th centuries, victories in the First Sino-Japanese War, the Russo-Japanese War and World War I allowed Japan to expand its empire during a period of increasing militarism. The Second Sino-Japanese War of 1937 expanded into part of World War II in 1941, which came to an end in 1945 following the Japanese surrender. Since adopting its revised constitution on May 3, 1947, during the occupation led by SCAP, the sovereign state of Japan has maintained a unitary parliamentary constitutional monarchy with an Emperor and an elected legislature called the National Diet.
        
        Japan is a member of the ASEAN Plus mechanism, UN, the OECD, the G7, the G8, and the G20, and is considered a great power.[20][21][22] Its economy is the world's third-largest by nominal GDP and the fourth-largest by purchasing power parity. It is also the world's fourth-largest exporter and fourth-largest importer.
        
        Japan benefits from a highly skilled and educated workforce; it has among the world's largest proportion of citizens holding a tertiary education degree.[23] Although it has officially renounced its right to declare war, Japan maintains a modern military with the world's eighth-largest military budget,[24] used for self-defense and peacekeeping roles; it ranked as the world's fourth-most powerful military in 2015.[25] Japan is a highly developed country with a very high standard of living and Human Development Index. Its population enjoys one of the highest life expectancy and the third lowest infant mortality rate in the world, but is experiencing issues due to an aging population and low birthrate. As of 2019, Japanese citizens had visa-free or visa-on-arrival access to 189 countries and territories, ranking the Japanese passport 1st in the world, tied with Singapore.[26] Japan is renowned for its striking art, historical and extensive cinema, influential music industry, manga, anime, video gaming, rich cuisine and its major contributions to science and modern technology.`,
        mobile: 54785963214,
        address: 'Japan address'
      }
      this.selected.emit(country)
    } else if (cntyName == "India") {
      console.log(cntyName)
      const country: cntyInfo = {
        title: 'India',
        imgUrl: 'assets/india.jpg',
        info: `India (official name: the Republic of India;[19] Hindi: Bhārat Gaṇarājya) is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[d] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.

        Modern humans arrived on the Indian subcontinent from Africa no later than 55,000 years ago.[20] Their long occupation, initially in varying forms of isolation as hunter-gatherers, has made the region highly diverse, second only to Africa in human genetic diversity.[21] Settled life emerged on the subcontinent in the western margins of the Indus river basin 9,000 years ago, evolving gradually into the Indus Valley Civilisation of the third millennium BCE.[22] By 1200 BCE, an archaic form of Sanskrit, an Indo-European language, had diffused into India from the northwest, unfolding as the language of the Rigveda, and recording the dawning of Hinduism in India.[23] The Dravidian languages of India were supplanted in the northern regions.[24] By 400 BCE, stratification and exclusion by caste had emerged within Hinduism,[25] and Buddhism and Jainism had arisen, proclaiming social orders unlinked to heredity.[26] Early political consolidations gave rise to the loose-knit Maurya and Gupta Empires based in the Ganges Basin.[27] Their collective era was suffused with wide-ranging creativity,[28] but also marked by the declining status of women,[29] and the incorporation of untouchability into an organized system of belief.[e][30] In south India, the Middle kingdoms exported Dravidian-languages scripts and religious cultures to the kingdoms of southeast Asia.[31]
        
        In the early medieval era, Christianity, Islam, Judaism and Zoroastrianism put down roots on India's southern and western coasts.[32] Armies from Central Asia intermittently overran India's plains,[33] eventually establishing the Delhi sultanate, and drawing northern India into the cosmopolitan networks of medieval Islam.[34] In the 15th century, the Vijayanagara Empire created a long-lasting composite Hindu culture in south India.[35] In the Punjab, Sikhism emerged, rejecting institutionalized religion.[36] The Mughal empire, in 1526, ushered in two centuries of relative peace,[37] leaving a legacy of luminous architecture.[f][38] Gradually expanding rule of the British East India Company followed, turning India into a colonial economy, but also consolidating its sovereignty.[39] British Crown rule began in 1858. The rights promised to Indians were granted slowly,[40] but technological changes were introduced, and ideas of education, modernity and the public life took root.[41] A pioneering and influential nationalist movement emerged,[42] which was noted for nonviolent resistance and led India to its independence in 1947.
        
        India is a secular federal republic governed in a democratic parliamentary system. It is a pluralistic, multilingual and multi-ethnic society. India's population grew from 361 million in 1951 to 1,211 million in 2011.[43] During the same time, its nominal per capita income increased from US$64 annually to US$2,041, and its literacy rate from 16.6% to 74%. From being a comparatively destitute country in 1951,[44] India has become a fast-growing major economy, a hub for information technology services, with an expanding middle class.[45] It has a space programme which includes several planned or completed lunar missions. Indian movies, music, and spiritual teachings play an increasing role in global culture.[46] India has substantially reduced its rate of poverty, though at the cost of increasing economic inequality.[47] India is a nuclear weapons state, which ranks high in military expenditure. It has disputes over Kashmir with its neighbours, Pakistan and China, unresolved since the mid-20th century.[48] Among the socio-economic challenges India faces are gender inequality, child malnutrition,[49] and rising levels of air pollution.[50] India's land is megadiverse, with four biodiversity hotspots.[51] Its forest cover comprises 21.4% of its area.[52] India's wildlife, which has traditionally been viewed with tolerance in India's culture,[53] is supported among these forests, and elsewhere, in protected habitats.`,
        mobile: 6321478963,
        address: 'India address'
      }
      this.selected.emit(country)
    }
  }
}
