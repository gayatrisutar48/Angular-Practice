import { Component, OnInit } from '@angular/core';
import { cntyInfo } from '../cntyinfo';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  cntyObj: cntyInfo = {
    title: 'India',
    imgUrl: 'assets/india.jpg',
    info: `India (official name: the Republic of India;[19] Hindi: Bhārat Gaṇarājya) is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[d] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.

    Modern humans arrived on the Indian subcontinent from Africa no later than 55,000 years ago.[20] Their long occupation, initially in varying forms of isolation as hunter-gatherers, has made the region highly diverse, second only to Africa in human genetic diversity.[21] Settled life emerged on the subcontinent in the western margins of the Indus river basin 9,000 years ago, evolving gradually into the Indus Valley Civilisation of the third millennium BCE.[22] By 1200 BCE, an archaic form of Sanskrit, an Indo-European language, had diffused into India from the northwest, unfolding as the language of the Rigveda, and recording the dawning of Hinduism in India.[23] The Dravidian languages of India were supplanted in the northern regions.[24] By 400 BCE, stratification and exclusion by caste had emerged within Hinduism,[25] and Buddhism and Jainism had arisen, proclaiming social orders unlinked to heredity.[26] Early political consolidations gave rise to the loose-knit Maurya and Gupta Empires based in the Ganges Basin.[27] Their collective era was suffused with wide-ranging creativity,[28] but also marked by the declining status of women,[29] and the incorporation of untouchability into an organized system of belief.[e][30] In south India, the Middle kingdoms exported Dravidian-languages scripts and religious cultures to the kingdoms of southeast Asia.[31]
    
    In the early medieval era, Christianity, Islam, Judaism and Zoroastrianism put down roots on India's southern and western coasts.[32] Armies from Central Asia intermittently overran India's plains,[33] eventually establishing the Delhi sultanate, and drawing northern India into the cosmopolitan networks of medieval Islam.[34] In the 15th century, the Vijayanagara Empire created a long-lasting composite Hindu culture in south India.[35] In the Punjab, Sikhism emerged, rejecting institutionalized religion.[36] The Mughal empire, in 1526, ushered in two centuries of relative peace,[37] leaving a legacy of luminous architecture.[f][38] Gradually expanding rule of the British East India Company followed, turning India into a colonial economy, but also consolidating its sovereignty.[39] British Crown rule began in 1858. The rights promised to Indians were granted slowly,[40] but technological changes were introduced, and ideas of education, modernity and the public life took root.[41] A pioneering and influential nationalist movement emerged,[42] which was noted for nonviolent resistance and led India to its independence in 1947.
    
    India is a secular federal republic governed in a democratic parliamentary system. It is a pluralistic, multilingual and multi-ethnic society. India's population grew from 361 million in 1951 to 1,211 million in 2011.[43] During the same time, its nominal per capita income increased from US$64 annually to US$2,041, and its literacy rate from 16.6% to 74%. From being a comparatively destitute country in 1951,[44] India has become a fast-growing major economy, a hub for information technology services, with an expanding middle class.[45] It has a space programme which includes several planned or completed lunar missions. Indian movies, music, and spiritual teachings play an increasing role in global culture.[46] India has substantially reduced its rate of poverty, though at the cost of increasing economic inequality.[47] India is a nuclear weapons state, which ranks high in military expenditure. It has disputes over Kashmir with its neighbours, Pakistan and China, unresolved since the mid-20th century.[48] Among the socio-economic challenges India faces are gender inequality, child malnutrition,[49] and rising levels of air pollution.[50] India's land is megadiverse, with four biodiversity hotspots.[51] Its forest cover comprises 21.4% of its area.[52] India's wildlife, which has traditionally been viewed with tolerance in India's culture,[53] is supported among these forests, and elsewhere, in protected habitats.`,
    mobile:1324567895,
    address:'pune,Maharashtra'
  }

  constructor() { }

  ngOnInit() {
  }

  onSelect(eventData:cntyInfo){
    this.cntyObj=eventData
  }
}
