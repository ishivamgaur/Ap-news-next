import apiClient from "@/api";
import axios from "axios";

export const newsData = [
  {
    id: 1,
    title: {
      en: "New Industrial Policy Announced in Bihar, Excitement Among Investors",
      hi: "बिहार में नई औद्योगिक नीति की घोषणा, निवेशकों में उत्साह",
    },
    description: {
      en: "The Bihar government has announced a comprehensive industrial reform package to promote investment in the state, aiming to create millions of new jobs.",
      hi: "बिहार सरकार ने राज्य में निवेश को बढ़ावा देने के लिए एक व्यापक औद्योगिक सुधार पैकेज की घोषणा की है, जिसका लक्ष्य लाखों नए रोजगार पैदा करना है।",
    },
    fullDescription: {
      en: "In a landmark move, the Bihar government has unveiled a new industrial policy designed to attract significant investment and spur economic growth across the state. The policy includes a host of incentives for investors, such as tax breaks, subsidized land, and single-window clearance for projects. Chief Minister, while announcing the policy, stated that the goal is to transform Bihar into an industrial hub and create over a million jobs within the next five years. Key sectors of focus include food processing, textiles, IT, and renewable energy. The government has also committed to improving infrastructure, including roads and power supply, to support the new industries. Business leaders have lauded the move, expressing optimism that this will create a conducive environment for both domestic and foreign investment. The policy is expected to not only boost the state's GDP but also curb migration by providing local employment opportunities. The detailed framework outlines a clear roadmap for implementation, with dedicated task forces to oversee progress and address any challenges faced by investors. This proactive approach signals a new era of industrialization for Bihar, promising a brighter future for its youth and a more robust economy.",
      hi: "एक ऐतिहासिक कदम में, बिहार सरकार ने राज्य भर में महत्वपूर्ण निवेश आकर्षित करने और आर्थिक विकास को गति देने के लिए एक नई औद्योगिक नीति का अनावरण किया है। इस नीति में निवेशकों के लिए कई प्रोत्साहन शामिल हैं, जैसे कि कर छूट, रियायती भूमि, और परियोजनाओं के लिए सिंगल-विंडो क्लीयरेंस। मुख्यमंत्री ने नीति की घोषणा करते हुए कहा कि इसका लक्ष्य बिहार को एक औद्योगिक केंद्र में बदलना और अगले पांच वर्षों के भीतर दस लाख से अधिक नौकरियां पैदा करना है। फोकस के प्रमुख क्षेत्रों में खाद्य प्रसंस्करण, कपड़ा, आईटी और नवीकरणीय ऊर्जा शामिल हैं। सरकार ने नए उद्योगों का समर्थन करने के लिए सड़कों और बिजली की आपूर्ति सहित बुनियादी ढांचे में सुधार के लिए भी प्रतिबद्धता जताई है। व्यापार जगत के नेताओं ने इस कदम की सराहना की है, और यह आशा व्यक्त की है कि यह घरेलू और विदेशी दोनों तरह के निवेश के लिए एक अनुकूल वातावरण बनाएगा। इस नीति से न केवल राज्य की जीडीपी को बढ़ावा मिलने की उम्मीद है, बल्कि स्थानीय रोजगार के अवसर प्रदान करके पलायन को रोकने में भी मदद मिलेगी। विस्तृत ढांचे में कार्यान्वयन के लिए एक स्पष्ट रोडमैप की रूपरेखा दी गई है, जिसमें प्रगति की निगरानी और निवेशकों के सामने आने वाली किसी भी चुनौती का समाधान करने के लिए समर्पित टास्क फोर्स हैं। यह सक्रिय दृष्टिकोण बिहार के लिए औद्योगीकरण के एक नए युग का संकेत देता है, जो इसके युवाओं के लिए एक उज्जवल भविष्य और एक अधिक मजबूत अर्थव्यवस्था का वादा करता है।",
    },
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "NEWS",
    date: "Oct 17, 2025",
    youtubeVideoId: "6CgF4QGuDOU",
    // instagramPostId: "Cg-qY3qj4sY", // Example Instagram Post
    // facebookPostUrl: "https://www.facebook.com/react/posts/10160859658387142", // Example Facebook Post
  },
  {
    id: 2,
    title: {
      en: "New Software Technology Park Opens in Patna",
      hi: "पटना में खुला नया सॉफ्टवेयर टेक्नोलॉजी पार्क",
    },
    description: {
      en: "A new software technology park has been inaugurated in Patna, the capital of Bihar, which is expected to boost the IT sector in the state.",
      hi: "बिहार की राजधानी पटना में एक नए सॉफ्टवेयर टेक्नोलॉजी पार्क का उद्घाटन हुआ, जिससे राज्य में आईटी क्षेत्र को बढ़ावा मिलने की उम्मीद है।",
    },
    fullDescription: {
      en: "To bolster the burgeoning IT ecosystem in Bihar, a state-of-the-art Software Technology Park was inaugurated in Patna. The park, sprawling over 10 acres, is equipped with high-speed internet connectivity, uninterrupted power supply, and modern office spaces designed to host over 100 IT companies. This initiative is part of the government's broader vision to position Bihar as a leading IT destination in Eastern India. During the inauguration, the Minister for Information Technology highlighted that the park would not only attract major tech giants but also provide a fertile ground for local startups to innovate and scale. It is projected to generate over 20,000 direct and indirect jobs, providing a significant boost to the local economy. The park will also feature an incubation center to mentor and support early-stage startups, offering them access to resources, funding opportunities, and industry experts. Several multinational corporations have already expressed interest in setting up their operations in the new facility, citing the availability of a large talent pool and the government's pro-business policies. This development is a significant step towards creating a knowledge-based economy in Bihar.",
      hi: "बिहार में बढ़ते आईटी पारिस्थितिकी तंत्र को मजबूत करने के लिए, पटना में एक अत्याधुनिक सॉफ्टवेयर टेक्नोलॉजी पार्क का उद्घाटन किया गया। 10 एकड़ में फैला यह पार्क हाई-स्पीड इंटरनेट कनेक्टिविटी, निर्बाध बिजली आपूर्ति और 100 से अधिक आईटी कंपनियों की मेजबानी के लिए डिज़ाइन किए गए आधुनिक कार्यालय स्थानों से सुसज्जित है। यह पहल सरकार के बिहार को पूर्वी भारत में एक प्रमुख आईटी गंतव्य के रूप में स्थापित करने के व्यापक दृष्टिकोण का हिस्सा है। उद्घाटन के दौरान, सूचना प्रौद्योगिकी मंत्री ने इस बात पर प्रकाश डाला कि यह पार्क न केवल प्रमुख तकनीकी दिग्गजों को आकर्षित करेगा, बल्कि स्थानीय स्टार्टअप को नवाचार और विस्तार करने के लिए एक उपजाऊ जमीन भी प्रदान करेगा। इससे 20,000 से अधिक प्रत्यक्ष और अप्रत्यक्ष रोजगार पैदा होने का अनुमान है, जिससे स्थानीय अर्थव्यवस्था को महत्वपूर्ण बढ़ावा मिलेगा। पार्क में प्रारंभिक चरण के स्टार्टअप को सलाह देने और समर्थन करने के लिए एक ऊष्मायन केंद्र भी होगा, जो उन्हें संसाधनों, धन के अवसरों और उद्योग विशेषज्ञों तक पहुंच प्रदान करेगा। कई बहुराष्ट्रीय निगमों ने पहले ही एक बड़े प्रतिभा पूल की उपलब्धता और सरकार की समर्थक-व्यापार नीतियों का हवाला देते हुए नई सुविधा में अपना परिचालन स्थापित करने में रुचि व्यक्त की है। यह विकास बिहार में ज्ञान-आधारित अर्थव्यवस्था बनाने की दिशा में एक महत्वपूर्ण कदम है।",
    },
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "TECHNOLOGY",
    date: "Oct 17, 2025",
    // instagramPostId: "Csm9eG4yNyy",
  },
  {
    id: 3,
    title: {
      en: "Stock Market Surges, Shares of Bihar's Companies Rise",
      hi: "शेयर बाजार में उछाल, बिहार की कंपनियों के शेयरों में तेजी",
    },
    description: {
      en: "Global stock markets saw a surge amidst positive economic data, with Bihar-based companies performing particularly well.",
      hi: "सकारात्मक आर्थिक आंकड़ों के बीच वैश्विक शेयर बाजारों में तेजी देखी गई, जिसमें बिहार स्थित कंपनियों ने विशेष रूप से अच्छा प्रदर्शन किया।",
    },
    fullDescription: {
      en: "The stock market witnessed a significant rally today, with major indices closing at record highs. The surge was largely driven by strong corporate earnings reports and positive global economic indicators. Among the top performers were several companies based in Bihar, whose stocks soared following the announcement of the new industrial policy. Investors showed immense confidence in the state's manufacturing and infrastructure sectors, leading to a buying frenzy. Analysts believe that the government's focus on creating a business-friendly environment has started to pay dividends. Shares in the agro-processing, textile, and small-scale manufacturing industries saw double-digit gains. The bullish sentiment is expected to continue as foreign institutional investors increase their exposure to emerging opportunities in the region. This market performance is a testament to the growing economic strength of Bihar and reflects a broader trend of decentralization of economic powerhouses within the country. The local stock exchange reported its highest-ever trading volume, indicating widespread participation from retail investors who are optimistic about the state's future growth trajectory and its potential to deliver substantial returns.",
      hi: "आज शेयर बाजार में एक महत्वपूर्ण तेजी देखी गई, जिसमें प्रमुख सूचकांक रिकॉर्ड ऊंचाई पर बंद हुए। यह उछाल काफी हद तक मजबूत कॉर्पोरेट आय रिपोर्ट और सकारात्मक वैश्विक आर्थिक संकेतकों से प्रेरित था। शीर्ष प्रदर्शन करने वालों में बिहार स्थित कई कंपनियां थीं, जिनके शेयरों में नई औद्योगिक नीति की घोषणा के बाद उछाल आया। निवेशकों ने राज्य के विनिर्माण और बुनियादी ढांचा क्षेत्रों में अत्यधिक विश्वास दिखाया, जिससे खरीदारी की होड़ मच गई। विश्लेषकों का मानना ​​है कि सरकार का व्यवसाय-अनुकूल वातावरण बनाने पर ध्यान केंद्रित करने का लाभ मिलना शुरू हो गया है। कृषि-प्रसंस्करण, कपड़ा और लघु-स्तरीय विनिर्माण उद्योगों के शेयरों में दो अंकों की वृद्धि देखी गई। इस तेजी की भावना के जारी रहने की उम्मीद है क्योंकि विदेशी संस्थागत निवेशक इस क्षेत्र में उभरते अवसरों के प्रति अपना जोखिम बढ़ा रहे हैं। यह बाजार प्रदर्शन बिहार की बढ़ती आर्थिक ताकत का एक प्रमाण है और देश के भीतर आर्थिक शक्ति के विकेंद्रीकरण की एक व्यापक प्रवृत्ति को दर्शाता है। स्थानीय स्टॉक एक्सचेंज ने अपने अब तक के सबसे अधिक ट्रेडिंग वॉल्यूम की सूचना दी, जो खुदरा निवेशकों की व्यापक भागीदारी का संकेत देता है जो राज्य के भविष्य के विकास पथ और पर्याप्त रिटर्न देने की इसकी क्षमता के बारे में आशावादी हैं।",
    },
    image:
      "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "BUSINESS",
    date: "Oct 16, 2025",
    // facebookPostUrl: "https://www.facebook.com/meta/posts/10160859658387142",
  },
  {
    id: 4,
    title: {
      en: "Pawan Singh's New Bhojpuri Film Breaks All Records",
      hi: "पवन सिंह की नई भोजपुरी फिल्म ने तोड़े सारे रिकॉर्ड",
    },
    description: {
      en: "Bhojpuri superstar Pawan Singh's latest film has created a storm at the box office, with record-breaking earnings in its first week.",
      hi: "भोजपुरी सुपरस्टार पवन सिंह की नवीनतम फिल्म ने बॉक्स ऑफिस पर धूम मचा दी है, और पहले ही हफ्ते में रिकॉर्ड तोड़ कमाई की है।",
    },
    fullDescription: {
      en: "The Bhojpuri film industry is celebrating the phenomenal success of Pawan Singh's latest release, which has shattered all previous box office records. The action-packed entertainer, filled with high-octane drama and chart-topping music, has drawn massive crowds to theaters across Bihar, Jharkhand, and Uttar Pradesh. In its opening week alone, the film grossed over ₹15 crore, a new benchmark for the industry. Trade analysts are attributing the success to Pawan Singh's immense popularity, a strong storyline that resonates with the local audience, and a powerful marketing campaign. The film's music album has also gone viral, with several songs trending on social media platforms. Fans have been flocking to single-screen theaters and multiplexes alike, with many shows running house-full. The film's director expressed his gratitude to the audience, stating that their overwhelming love is a victory for regional cinema. This success is seen as a major boost for the Bhojpuri industry, encouraging producers to invest in bigger budgets and more ambitious projects that can compete on a national level.",
      hi: "भोजपुरी फिल्म उद्योग पवन सिंह की नवीनतम रिलीज की अभूतपूर्व सफलता का जश्न मना रहा है, जिसने पिछले सभी बॉक्स ऑफिस रिकॉर्ड तोड़ दिए हैं। हाई-ऑक्टेन ड्रामा और चार्ट-टॉपिंग संगीत से भरपूर इस एक्शन से भरपूर मनोरंजक फिल्म ने बिहार, झारखंड और उत्तर प्रदेश के सिनेमाघरों में भारी भीड़ खींची है। अकेले अपने शुरुआती सप्ताह में, फिल्म ने 15 करोड़ रुपये से अधिक की कमाई की, जो उद्योग के लिए एक नया मानदंड है। व्यापार विश्लेषक इस सफलता का श्रेय पवन सिंह की अपार लोकप्रियता, स्थानीय दर्शकों के साथ प्रतिध्वनित होने वाली एक मजबूत कहानी और एक शक्तिशाली विपणन अभियान को दे रहे हैं। फिल्म का संगीत एल्बम भी वायरल हो गया है, जिसके कई गाने सोशल मीडिया प्लेटफॉर्म पर ट्रेंड कर रहे हैं। प्रशंसक सिंगल-स्क्रीन थिएटर और मल्टीप्लेक्स दोनों में समान रूप से उमड़ रहे हैं, कई शो हाउस-फुल चल रहे हैं। फिल्म के निर्देशक ने दर्शकों के प्रति अपना आभार व्यक्त करते हुए कहा कि उनका अपार प्यार क्षेत्रीय सिनेमा की जीत है। इस सफलता को भोजपुरी उद्योग के लिए एक बड़े प्रोत्साहन के रूप में देखा जा रहा है, जो निर्माताओं को बड़े बजट और अधिक महत्वाकांक्षी परियोजनाओं में निवेश करने के लिए प्रोत्साहित कर रहा है जो राष्ट्रीय स्तर पर प्रतिस्पर्धा कर सकती हैं।",
    },
    image:
      "https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "BHOJPURI",
    date: "Oct 16, 2025",
    youtubeVideoId: "4Ng56o0EJZo", // Example Video ID
  },
  {
    id: 5,
    title: {
      en: "Bihar Cricket Team Registers a Stunning Victory in Ranji Trophy",
      hi: "बिहार क्रिकेट टीम ने रणजी ट्रॉफी में शानदार जीत दर्ज की",
    },
    description: {
      en: "After a thrilling final match, the Bihar cricket team clinched the championship title with a last-minute goal.",
      hi: "एक रोमांचक फाइनल मैच के बाद, बिहार की क्रिकेट टीम ने अंतिम क्षणों में गोल करके चैंपियनशिप का खिताब अपने नाम कर लिया।",
    },
    fullDescription: {
      en: "In a nail-biting final, the Bihar cricket team emerged victorious in the Ranji Trophy, ending a decades-long wait for the coveted title. The match, held at a packed stadium, went down to the wire, with Bihar needing a victory on the final day. The team's captain led from the front with a spectacular century, while the bowlers displayed immense grit and determination to defend a modest total. The final wicket, taken in the last over of the day, sparked wild celebrations among the players and the thousands of traveling fans. Coaches and former players hailed the victory as a turning point for cricket in the state, attributing the success to a revamped domestic structure and a focus on nurturing young talent. The state government has announced a cash prize for the winning squad and promised to further develop sporting infrastructure. This historic win is expected to inspire a new generation of cricketers from Bihar and put the state firmly on the national cricketing map. The victory parade, scheduled for next week, is anticipated to draw massive crowds.",
      hi: "एक रोमांचक फाइनल में, बिहार क्रिकेट टीम ने रणजी ट्रॉफी में विजय प्राप्त की, जिससे प्रतिष्ठित खिताब के लिए दशकों लंबा इंतजार समाप्त हो गया। एक खचाखच भरे स्टेडियम में आयोजित यह मैच अंतिम समय तक चला, जिसमें बिहार को अंतिम दिन जीत की आवश्यकता थी। टीम के कप्तान ने शानदार शतक के साथ सामने से नेतृत्व किया, जबकि गेंदबाजों ने एक मामूली कुल का बचाव करने के लिए अत्यधिक धैर्य और दृढ़ संकल्प का प्रदर्शन किया। दिन के अंतिम ओवर में लिया गया अंतिम विकेट, खिलाड़ियों और हजारों यात्रा करने वाले प्रशंसकों के बीच जबरदस्त जश्न का कारण बना। कोचों और पूर्व खिलाड़ियों ने इस जीत को राज्य में क्रिकेट के लिए एक महत्वपूर्ण मोड़ के रूप में सराहा, इस सफलता का श्रेय एक संशोधित घरेलू संरचना और युवा प्रतिभाओं को पोषित करने पर ध्यान केंद्रित करने को दिया। राज्य सरकार ने विजेता टीम के लिए नकद पुरस्कार की घोषणा की है और खेल के बुनियादी ढांचे को और विकसित करने का वादा किया है। इस ऐतिहासिक जीत से बिहार के क्रिकेटरों की एक नई पीढ़ी को प्रेरणा मिलने और राज्य को राष्ट्रीय क्रिकेट मानचित्र पर मजबूती से स्थापित करने की उम्मीद है। अगले सप्ताह के लिए निर्धारित विजय परेड में भारी भीड़ जुटने की उम्मीद है।",
    },
    image:
      "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "SPORTS",
    date: "Oct 16, 2025",
    youtubeVideoId: "crplFT-RSQo",
    // instagramPostId: "crplFT-RSQo",
  },
  {
    id: 6,
    title: {
      en: "Chhath Puja Preparations: Special Focus on Health and Lifestyle",
      hi: "छठ पूजा की तैयारी: स्वास्थ्य और जीवनशैली पर विशेष ध्यान",
    },
    description: {
      en: "On the occasion of Chhath Puja, people are adopting new ways of health and wellness that are transforming self-care and healthy living.",
      hi: "छठ पूजा के अवसर पर लोग स्वास्थ्य और कल्याण के नए तरीकों को अपना रहे हैं जो स्व-देखभाल और स्वस्थ जीवन को बदल रहे हैं।",
    },
    fullDescription: {
      en: "As Bihar gears up for its most significant festival, Chhath Puja, there is a noticeable shift towards integrating health and wellness into the traditional rituals. This year, communities are placing a special emphasis on eco-friendly practices and personal well-being. Many devotees are opting for organic and locally sourced ingredients for their offerings, avoiding artificial sweeteners and processed foods. Health experts have praised this trend, noting that the fasting and dietary discipline inherent in Chhath Puja align well with modern principles of intermittent fasting and detoxification. Yoga and meditation sessions are being organized on the riverbanks, helping devotees maintain their physical and mental strength during the rigorous 36-hour fast. Furthermore, several NGOs are running campaigns to ensure the cleanliness of the ghats and rivers, promoting a message of environmental consciousness. This fusion of tradition and modern lifestyle choices is not just about personal health; it's about fostering a deeper connection with nature and promoting a sustainable way of life that resonates with the core principles of the ancient festival.",
      hi: "जैसे ही बिहार अपने सबसे महत्वपूर्ण त्योहार, छठ पूजा की तैयारी कर रहा है, पारंपरिक अनुष्ठानों में स्वास्थ्य और कल्याण को एकीकृत करने की दिशा में एक उल्लेखनीय बदलाव आया है। इस वर्ष, समुदाय पर्यावरण-अनुकूल प्रथाओं और व्यक्तिगत कल्याण पर विशेष जोर दे रहे हैं। कई भक्त अपने प्रसाद के लिए जैविक और स्थानीय रूप से प्राप्त सामग्री का चयन कर रहे हैं, कृत्रिम मिठास और प्रसंस्कृत खाद्य पदार्थों से बच रहे हैं। स्वास्थ्य विशेषज्ञों ने इस प्रवृत्ति की प्रशंसा की है, यह देखते हुए कि छठ पूजा में निहित उपवास और आहार अनुशासन आंतरायिक उपवास और विषहरण के आधुनिक सिद्धांतों के साथ अच्छी तरह से मेल खाते हैं। नदी के किनारे योग और ध्यान सत्र आयोजित किए जा रहे हैं, जो भक्तों को कठोर 36 घंटे के उपवास के दौरान अपनी शारीरिक और मानसिक शक्ति बनाए रखने में मदद कर रहे हैं। इसके अलावा, कई गैर-सरकारी संगठन घाटों और नदियों की स्वच्छता सुनिश्चित करने के लिए अभियान चला रहे हैं, जो पर्यावरण चेतना का संदेश देते हैं। परंपरा और आधुनिक जीवन शैली के विकल्पों का यह संलयन केवल व्यक्तिगत स्वास्थ्य के बारे में नहीं है; यह प्रकृति के साथ गहरा संबंध बनाने और जीवन के एक स्थायी तरीके को बढ़ावा देने के बारे में है जो प्राचीन त्योहार के मूल सिद्धांतों के साथ प्रतिध्वनित होता है।",
    },
    image:
      "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "LIFESTYLE",
    date: "Oct 15, 2025",
    youtubeVideoId: "EESHifvA75E",
    // facebookPostUrl: "https://www.facebook.com/nasa/posts/10160859658387142",
  },
  {
    id: 7,
    title: {
      en: "Bihar Elections: Heated Debates in the Final Phase",
      hi: "बिहार चुनाव: अंतिम चरण में गरमागरम बहस",
    },
    description: {
      en: "As the election date approaches, political candidates are facing off in final debates, with polls showing a tight race.",
      hi: "चुनाव की तारीख नजदीक आते ही राजनीतिक उम्मीदवार अंतिम बहसों में आमने-सामने हैं, और सर्वेक्षणों में कड़ा मुकाबला दिख रहा है।",
    },
    fullDescription: {
      en: "With the Bihar assembly elections entering their final phase, the political atmosphere has reached a fever pitch. The leading candidates engaged in a series of heated debates last night, tackling critical issues such as unemployment, infrastructure development, and law and order. The debates, broadcast live across multiple channels, were marked by sharp exchanges and bold promises. Opinion polls indicate an extremely tight race, with no clear frontrunner emerging. Both major political alliances are leaving no stone unturned in their efforts to woo voters, organizing massive rallies and door-to-door campaigns. Election analysts suggest that the high voter turnout expected in the final phase could be a decisive factor. The Election Commission has deployed additional security forces to ensure a free and fair polling process, especially in sensitive constituencies. As the campaign rhetoric intensifies, the focus remains on the undecided voters who are likely to determine the final outcome of this closely watched electoral battle. The results are eagerly awaited, with the future of Bihar's governance hanging in the balance.",
      hi: "बिहार विधानसभा चुनाव के अंतिम चरण में प्रवेश करने के साथ ही राजनीतिक माहौल चरम पर पहुंच गया है। प्रमुख उम्मीदवारों ने कल रात कई गरमागरम बहसों में हिस्सा लिया, जिसमें बेरोजगारी, बुनियादी ढांचे के विकास और कानून-व्यवस्था जैसे महत्वपूर्ण मुद्दों पर चर्चा हुई। कई चैनलों पर सीधे प्रसारित होने वाली इन बहसों में तीखी नोकझोंक और बड़े-बड़े वादे किए गए। जनमत सर्वेक्षणों से एक अत्यंत कड़े मुकाबले का संकेत मिलता है, जिसमें कोई स्पष्ट अग्र-धावक नहीं उभर रहा है। दोनों प्रमुख राजनीतिक गठबंधन मतदाताओं को लुभाने के अपने प्रयासों में कोई कसर नहीं छोड़ रहे हैं, बड़ी रैलियों और घर-घर अभियानों का आयोजन कर रहे हैं। चुनाव विश्लेषकों का सुझाव है कि अंतिम चरण में अपेक्षित उच्च मतदाता मतदान एक निर्णायक कारक हो सकता है। चुनाव आयोग ने स्वतंत्र और निष्पक्ष मतदान प्रक्रिया सुनिश्चित करने के लिए अतिरिक्त सुरक्षा बल तैनात किए हैं, खासकर संवेदनशील निर्वाचन क्षेत्रों में। जैसे-जैसे अभियान की बयानबाजी तेज हो रही है, ध्यान अनिर्णीत मतदाताओं पर बना हुआ है जो इस करीबी से देखे जाने वाले चुनावी मुकाबले के अंतिम परिणाम को निर्धारित करने की संभावना रखते हैं। परिणामों का बेसब्री से इंतजार है, बिहार के शासन का भविष्य अधर में लटका हुआ है।",
    },
    image:
      "https://images.pexels.com/photos/8828424/pexels-photo-8828424.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "ELECTIONS",
    date: "Oct 15, 2025",
    // facebookPostUrl: "https://www.facebook.com/Google/posts/10160859658387142",
  },
  {
    id: 21,
    title: {
      en: "Khesari Lal Yadav's New Song Goes Viral",
      hi: "खेसारी लाल यादव का नया गाना हुआ वायरल",
    },
    description: {
      en: "Bhojpuri singer and actor Khesari Lal Yadav's new song is trending on YouTube as soon as it is released and has garnered millions of views.",
      hi: "भोजपुरी गायक और अभिनेता खेसारी लाल यादव का नया गाना रिलीज होते ही यूट्यूब पर ट्रेंड कर रहा है और लाखों व्यूज बटोर चुका है।",
    },
    fullDescription: {
      en: "Khesari Lal Yadav has once again proven his dominance in the Bhojpuri music scene with his latest track, which has gone viral within hours of its release. The song, a perfect blend of traditional folk music and modern beats, has captivated audiences and is currently trending at number one on YouTube in the region. The music video, featuring vibrant choreography and stunning visuals, has been widely shared across social media platforms like Instagram and Facebook, amassing over 10 million views in just two days. Fans have been praising Khesari's energetic performance and the song's catchy tune. This viral success highlights the growing influence of Bhojpuri music beyond its traditional boundaries, reaching a more diverse and global audience. Music critics are calling it a game-changer for the industry, setting a new standard for production quality and digital marketing. The song's success is also expected to boost the careers of the lyricist and music director, who have been lauded for their fresh and innovative approach to a classic genre.",
      hi: "खेसारी लाल यादव ने अपने नवीनतम ट्रैक के साथ भोजपुरी संगीत परिदृश्य में एक बार फिर अपना प्रभुत्व साबित कर दिया है, जो रिलीज होने के कुछ ही घंटों के भीतर वायरल हो गया है। पारंपरिक लोक संगीत और आधुनिक बीट्स का एक आदर्श मिश्रण यह गाना दर्शकों को मोहित कर चुका है और वर्तमान में इस क्षेत्र में यूट्यूब पर नंबर एक पर ट्रेंड कर रहा है। जीवंत कोरियोग्राफी और आश्चर्यजनक दृश्यों वाले इस संगीत वीडियो को इंस्टाग्राम और फेसबुक जैसे सोशल मीडिया प्लेटफॉर्म पर व्यापक रूप से साझा किया गया है, जिसने केवल दो दिनों में 10 मिलियन से अधिक बार देखा गया है। प्रशंसक खेसारी के ऊर्जावान प्रदर्शन और गाने की आकर्षक धुन की प्रशंसा कर रहे हैं। यह वायरल सफलता भोजपुरी संगीत के पारंपरिक सीमाओं से परे बढ़ते प्रभाव को उजागर करती है, जो अधिक विविध और वैश्विक दर्शकों तक पहुंच रही है। संगीत समीक्षक इसे उद्योग के लिए एक गेम-चेंजर कह रहे हैं, जो उत्पादन की गुणवत्ता और डिजिटल मार्केटिंग के लिए एक नया मानक स्थापित कर रहा है। गाने की सफलता से गीतकार और संगीत निर्देशक के करियर को भी बढ़ावा मिलने की उम्मीद है, जिनकी एक क्लासिक शैली के लिए उनके ताजा और अभिनव दृष्टिकोण के लिए प्रशंसा की गई है।",
    },
    image:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "BHOJPURI",
    date: "Oct 18, 2025",
    youtubeVideoId: "RVSR5PCv2LY", // Example Video ID
  },
  {
    id: 9,
    title: {
      en: "Bihar Startup Raises ₹50 Crore in Funding",
      hi: "बिहार के स्टार्टअप ने जुटाई 50 करोड़ की फंडिंग",
    },
    description: {
      en: "A Bihari tech startup has secured a massive funding of ₹50 crore in the latest investment round, valuing it at over ₹500 crore.",
      hi: "एक बिहारी टेक स्टार्टअप ने नवीनतम निवेश दौर में 50 करोड़ रुपये की भारी फंडिंग हासिल की है, जिसका मूल्यांकन 500 करोड़ रुपये से अधिक है।",
    },
    fullDescription: {
      en: "In a major boost to the startup ecosystem in Bihar, a Patna-based technology firm has successfully raised ₹50 crore in its Series A funding round. The investment was led by a consortium of prominent venture capital firms, who were impressed by the startup's innovative solution in the agricultural technology space. The company, which provides a data-driven platform for farmers to optimize crop yields, has seen rapid growth over the past two years. This new capital injection will be used to expand its operations across the country, enhance its technology platform, and hire new talent. The founders, both alumni of a local engineering college, expressed their commitment to solving real-world problems for Indian farmers. The funding round values the company at an impressive ₹500 crore, making it one of the most valuable startups to emerge from the state. This success story is expected to inspire more entrepreneurs in Bihar and attract further investment into the region's burgeoning tech scene, proving that innovation can thrive outside of the traditional metropolitan hubs.",
      hi: "बिहार में स्टार्टअप पारिस्थितिकी तंत्र को एक बड़े प्रोत्साहन में, पटना स्थित एक प्रौद्योगिकी फर्म ने अपने सीरीज ए फंडिंग दौर में सफलतापूर्वक 50 करोड़ रुपये जुटाए हैं। इस निवेश का नेतृत्व प्रमुख उद्यम पूंजी फर्मों के एक संघ द्वारा किया गया था, जो कृषि प्रौद्योगिकी क्षेत्र में स्टार्टअप के अभिनव समाधान से प्रभावित थे। कंपनी, जो किसानों को फसल की पैदावार को अनुकूलित करने के लिए एक डेटा-संचालित मंच प्रदान करती है, ने पिछले दो वर्षों में तेजी से विकास देखा है। इस नई पूंजी का उपयोग देश भर में अपने परिचालन का विस्तार करने, अपने प्रौद्योगिकी मंच को बढ़ाने और नई प्रतिभाओं को नियुक्त करने के लिए किया जाएगा। संस्थापक, दोनों एक स्थानीय इंजीनियरिंग कॉलेज के पूर्व छात्र, ने भारतीय किसानों के लिए वास्तविक दुनिया की समस्याओं को हल करने के लिए अपनी प्रतिबद्धता व्यक्त की। फंडिंग दौर कंपनी का मूल्यांकन प्रभावशाली 500 करोड़ रुपये है, जो इसे राज्य से उभरने वाले सबसे मूल्यवान स्टार्टअप में से एक बनाता है। इस सफलता की कहानी से बिहार में और अधिक उद्यमियों को प्रेरणा मिलने और इस क्षेत्र के उभरते तकनीकी परिदृश्य में और निवेश आकर्षित होने की उम्मीद है, यह साबित करते हुए कि नवाचार पारंपरिक महानगरीय केंद्रों के बाहर भी पनप सकता है।",
    },
    image:
      "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "BUSINESS",
    date: "Oct 14, 2025",
    youtubeVideoId: "J9n2A-uAw7Q",
  },
  {
    id: 10,
    title: {
      en: "Historic Agreement for Cleaning the Ganges River",
      hi: "गंगा नदी की सफाई के लिए ऐतिहासिक समझौता",
    },
    description: {
      en: "World leaders have agreed on an ambitious agreement to clean the Ganges River, committing to carbon neutrality.",
      hi: "विश्व नेताओं ने गंगा नदी की सफाई के लिए एक महत्वाकांक्षी समझौते पर सहमति व्यक्त की है, जो कार्बन तटस्थता के लिए प्रतिबद्ध है।",
    },
    fullDescription: {
      en: "In a significant step towards environmental conservation, international leaders have signed a historic accord aimed at the comprehensive cleanup of the Ganges River. The agreement, brokered after weeks of intense negotiations, outlines a multi-billion dollar plan to tackle pollution from industrial waste, sewage, and agricultural runoff. Participating nations have pledged financial support and technological assistance to implement advanced water treatment plants and waste management systems along the river's entire stretch. A key component of the agreement is the commitment to achieving carbon neutrality in all related projects, emphasizing the use of renewable energy and sustainable practices. Environmental groups have hailed the accord as a monumental achievement, but have also stressed the importance of strict monitoring and enforcement to ensure its success. The plan includes community participation programs to raise awareness and involve local populations in the conservation efforts. This collaborative international effort is seen as a model for addressing other major environmental challenges globally and represents a renewed global commitment to protecting our planet's vital water resources for future generations.",
      hi: "पर्यावरण संरक्षण की दिशा में एक महत्वपूर्ण कदम में, अंतरराष्ट्रीय नेताओं ने गंगा नदी की व्यापक सफाई के उद्देश्य से एक ऐतिहासिक समझौते पर हस्ताक्षर किए हैं। हफ्तों की गहन बातचीत के बाद हुए इस समझौते में औद्योगिक कचरे, सीवेज और कृषि अपवाह से होने वाले प्रदूषण से निपटने के लिए एक बहु-अरब डॉलर की योजना की रूपरेखा तैयार की गई है। भाग लेने वाले देशों ने नदी के पूरे हिस्से में उन्नत जल उपचार संयंत्रों और अपशिष्ट प्रबंधन प्रणालियों को लागू करने के लिए वित्तीय सहायता और तकनीकी सहायता का वादा किया है। समझौते का एक प्रमुख घटक सभी संबंधित परियोजनाओं में कार्बन तटस्थता प्राप्त करने की प्रतिबद्धता है, जिसमें नवीकरणीय ऊर्जा और टिकाऊ प्रथाओं के उपयोग पर जोर दिया गया है। पर्यावरण समूहों ने इस समझौते को एक स्मारकीय उपलब्धि के रूप में सराहा है, लेकिन इसकी सफलता सुनिश्चित करने के लिए सख्त निगरानी और प्रवर्तन के महत्व पर भी जोर दिया है। इस योजना में जागरूकता बढ़ाने और संरक्षण प्रयासों में स्थानीय आबादी को शामिल करने के लिए सामुदायिक भागीदारी कार्यक्रम शामिल हैं। इस सहयोगात्मक अंतरराष्ट्रीय प्रयास को विश्व स्तर पर अन्य प्रमुख पर्यावरणीय चुनौतियों का समाधान करने के लिए एक मॉडल के रूप में देखा जाता है और यह भविष्य की पीढ़ियों के लिए हमारे ग्रह के महत्वपूर्ण जल संसाधनों की रक्षा के लिए एक नए वैश्विक प्रतिबद्धता का प्रतिनिधित्व करता है।",
    },
    image:
      "https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "NEWS",
    date: "Oct 14, 2025",
    // instagramPostId: "C2A5Xo_yZ6q",
  },
  {
    id: 11,
    title: {
      en: "'Made in Bihar' Smartphone Creates a Buzz in the Market",
      hi: "'मेड इन बिहार' स्मार्टफोन ने बाजार में मचाई धूम",
    },
    description: {
      en: "The latest flagship device made in Bihar features revolutionary camera technology and extended battery life, setting an industry standard.",
      hi: "बिहार में बने नवीनतम फ्लैगशिप डिवाइस में क्रांतिकारी कैमरा तकनीक और विस्तारित बैटरी लाइफ है, जो उद्योग मानक स्थापित कर रहा है।",
    },
    fullDescription: {
      en: "A new smartphone, entirely designed and manufactured in Bihar, is making waves in the tech industry. The device, launched by a local electronics company, boasts a cutting-edge camera system with advanced AI-powered features, including superior low-light performance and professional-grade portrait modes. Another standout feature is its remarkable battery life, which promises up to two days of usage on a single charge, thanks to a custom-optimized power management system. The phone runs on the latest Android version with a clean, bloatware-free user interface. Priced competitively, it aims to challenge the dominance of established international brands in the mid-range segment. The 'Made in Bihar' tag is a source of immense pride and is being highlighted in the company's marketing campaigns to promote local manufacturing. The initial reviews have been overwhelmingly positive, with tech critics praising its premium build quality, vibrant display, and smooth performance. The company has also announced plans to export the device to neighboring countries, marking a new chapter for the electronics manufacturing sector in the state.",
      hi: "पूरी तरह से बिहार में डिजाइन और निर्मित एक नया स्मार्टफोन, तकनीकी उद्योग में धूम मचा रहा है। एक स्थानीय इलेक्ट्रॉनिक्स कंपनी द्वारा लॉन्च किए गए इस डिवाइस में उन्नत एआई-संचालित सुविधाओं के साथ एक अत्याधुनिक कैमरा सिस्टम है, जिसमें बेहतर कम-रोशनी प्रदर्शन और पेशेवर-ग्रेड पोर्ट्रेट मोड शामिल हैं। एक और असाधारण विशेषता इसकी उल्लेखनीय बैटरी लाइफ है, जो एक कस्टम-अनुकूलित पावर प्रबंधन प्रणाली के कारण एकल चार्ज पर दो दिन तक का उपयोग करने का वादा करती है। यह फोन नवीनतम एंड्रॉइड संस्करण पर चलता है जिसमें एक स्वच्छ, ब्लोटवेयर-मुक्त उपयोगकर्ता इंटरफ़ेस है। प्रतिस्पर्धी मूल्य पर, इसका उद्देश्य मध्य-श्रेणी के खंड में स्थापित अंतरराष्ट्रीय ब्रांडों के प्रभुत्व को चुनौती देना है। 'मेड इन बिहार' टैग immense गर्व का स्रोत है और स्थानीय विनिर्माण को बढ़ावा देने के लिए कंपनी के विपणन अभियानों में इसे उजागर किया जा रहा है। प्रारंभिक समीक्षाएं अत्यधिक सकारात्मक रही हैं, जिसमें तकनीकी आलोचकों ने इसकी प्रीमियम निर्माण गुणवत्ता, जीवंत प्रदर्शन और सहज प्रदर्शन की प्रशंसा की है। कंपनी ने पड़ोसी देशों में डिवाइस का निर्यात करने की योजना की भी घोषणा की है, जो राज्य में इलेक्ट्रॉनिक्स विनिर्माण क्षेत्र के लिए एक नया अध्याय है।",
    },
    image:
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "TECHNOLOGY",
    date: "Oct 14, 2025",
    youtubeVideoId: "FCg3if6OZM0",
    // instagramPostId: "C2F1Z_xyZ-a",
    // facebookPostUrl: "https://www.facebook.com/Apple/posts/10160859658387142",
  },
  {
    id: 13,
    title: {
      en: "Bihar Athlete Breaks 20-Year-Old National Record",
      hi: "बिहार के एथलीट ने तोड़ा 20 साल पुराना राष्ट्रीय रिकॉर्ड",
    },
    description: {
      en: "An athlete from Bihar has broken a long-standing national record in a dramatic fashion at an international championship.",
      hi: "बिहार के एक धावक ने अंतरराष्ट्रीय चैंपियनशिप में नाटकीय अंदाज में लंबे समय से चले आ रहे रिकॉर्ड को तोड़ दिया।",
    },
    fullDescription: {
      en: "In a stunning display of speed and endurance, a young athlete from a small village in Bihar has broken a 20-year-old national record in the 400-meter hurdles. Competing at the Asian Athletics Championships, he clocked an incredible time, shaving off milliseconds from the previous record set two decades ago. His journey to the top has been one of perseverance and hardship, training on makeshift tracks with limited resources. His coach, a former national-level athlete himself, expressed immense pride, stating that this victory is a result of years of relentless dedication. The athlete's performance has not only earned him a gold medal but also secured his qualification for the upcoming Olympic Games. The news has been met with widespread celebration back in his hometown, where he is being hailed as a local hero. This achievement is expected to draw much-needed attention and funding towards athletics in rural Bihar, potentially unearthing more hidden talents. The athlete is now focused on his Olympic preparations, aiming to bring home a medal for the country.",
      hi: "गति और सहनशक्ति के एक आश्चर्यजनक प्रदर्शन में, बिहार के एक छोटे से गाँव के एक युवा एथलीट ने 400 मीटर बाधा दौड़ में 20 साल पुराना राष्ट्रीय रिकॉर्ड तोड़ दिया है। एशियाई एथलेटिक्स चैंपियनशिप में प्रतिस्पर्धा करते हुए, उन्होंने एक अविश्वसनीय समय निकाला, दो दशक पहले स्थापित पिछले रिकॉर्ड से मिलीसेकंड कम कर दिया। शीर्ष पर उनकी यात्रा दृढ़ता और कठिनाई की रही है, सीमित संसाधनों के साथ अस्थायी पटरियों पर प्रशिक्षण। उनके कोच, जो खुद एक पूर्व राष्ट्रीय स्तर के एथलीट हैं, ने अत्यधिक गर्व व्यक्त करते हुए कहा कि यह जीत वर्षों के अथक समर्पण का परिणाम है। एथलीट के प्रदर्शन ने न केवल उन्हें स्वर्ण पदक दिलाया है, बल्कि आगामी ओलंपिक खेलों के लिए उनकी योग्यता भी सुनिश्चित की है। इस खबर का उनके गृहनगर में व्यापक जश्न मनाया गया है, जहाँ उन्हें एक स्थानीय नायक के रूप में सराहा जा रहा है। इस उपलब्धि से ग्रामीण बिहार में एथलेटिक्स की ओर बहुत आवश्यक ध्यान और धन आकर्षित होने की उम्मीद है, जिससे संभावित रूप से और अधिक छिपी हुई प्रतिभाएं सामने आएंगी। एथलीट अब अपनी ओलंपिक की तैयारी पर ध्यान केंद्रित कर रहा है, जिसका लक्ष्य देश के लिए एक पदक घर लाना है।",
    },
    image:
      "https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "SPORTS",
    date: "Oct 13, 2025",
    youtubeVideoId: "NnW9hJCp6YQ",
  },
  {
    id: 14,
    title: {
      en: "Top 10 Interior Design Trends for Your Home",
      hi: "आपके घर के लिए शीर्ष 10 इंटीरियर डिजाइन रुझान",
    },
    description: {
      en: "Transform your living space with these trending interior design ideas that combine style and functionality.",
      hi: "इन ट्रेंडिंग इंटीरियर डिज़ाइन आइडियाज़ के साथ अपने रहने की जगह को बदलें जो स्टाइल और कार्यक्षमता को जोड़ते हैं।",
    },
    fullDescription: {
      en: "This season's interior design trends are all about creating spaces that are both beautiful and highly functional. One of the top trends is 'biophilic design,' which involves incorporating natural elements like indoor plants, natural light, and materials like wood and stone to create a calming and restorative environment. Another popular concept is the 'Japandi' style, a hybrid of Japanese minimalism and Scandinavian functionality, characterized by clean lines, neutral color palettes, and a focus on craftsmanship. Smart home technology is also becoming seamlessly integrated into design, with hidden speakers, automated lighting, and voice-controlled assistants becoming standard features. In terms of color, earthy tones like terracotta, sage green, and warm beige are making a comeback, creating a sense of warmth and connection to nature. Additionally, multi-functional furniture is in high demand, especially for smaller living spaces. Think coffee tables that convert into dining tables, and modular sofas that can be reconfigured to suit different needs. These trends reflect a broader shift towards creating homes that are not just aesthetically pleasing, but also support a healthier, more organized, and more connected lifestyle.",
      hi: "इस मौसम के इंटीरियर डिज़ाइन रुझान ऐसे स्थान बनाने के बारे में हैं जो सुंदर और अत्यधिक कार्यात्मक दोनों हैं। शीर्ष रुझानों में से एक 'बायोफिलिक डिज़ाइन' है, जिसमें एक शांत और पुनर्स्थापनात्मक वातावरण बनाने के लिए इनडोर पौधों, प्राकृतिक प्रकाश और लकड़ी और पत्थर जैसी सामग्रियों जैसे प्राकृतिक तत्वों को शामिल करना शामिल है। एक और लोकप्रिय अवधारणा 'जपंडी' शैली है, जो जापानी अतिसूक्ष्मवाद और स्कैंडिनेवियाई कार्यक्षमता का एक संकर है, जो स्वच्छ रेखाओं, तटस्थ रंग पट्टियों और शिल्प कौशल पर ध्यान केंद्रित करने की विशेषता है। स्मार्ट होम तकनीक भी डिजाइन में सहज रूप से एकीकृत हो रही है, जिसमें छिपे हुए स्पीकर, स्वचालित प्रकाश व्यवस्था और आवाज-नियंत्रित सहायक मानक विशेषताएं बन रहे हैं। रंग के संदर्भ में, टेराकोटा, सेज ग्रीन और गर्म बेज जैसे मिट्टी के स्वर वापसी कर रहे हैं, जो गर्मी और प्रकृति से जुड़ाव की भावना पैदा कर रहे हैं। इसके अतिरिक्त, बहु-कार्यात्मक फर्नीचर की उच्च मांग है, खासकर छोटे रहने वाले स्थानों के लिए। कॉफी टेबल के बारे में सोचें जो डाइनिंग टेबल में परिवर्तित हो जाती हैं, और मॉड्यूलर सोफे जिन्हें विभिन्न आवश्यकताओं के अनुरूप पुन: कॉन्फ़िगर किया जा सकता है। ये रुझान ऐसे घर बनाने की दिशा में एक व्यापक बदलाव को दर्शाते हैं जो न केवल सौंदर्य की दृष्टि से मनभावन हैं, बल्कि एक स्वस्थ, अधिक संगठित और अधिक जुड़े हुए जीवन शैली का भी समर्थन करते हैं।",
    },
    image:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "LIFESTYLE",
    date: "Oct 13, 2025",
  },
  {
    id: 15,
    title: {
      en: "Voter Turnout Expected to Break Records",
      hi: "मतदाता मतदान रिकॉर्ड तोड़ने की उम्मीद है",
    },
    description: {
      en: "Early voting numbers suggest historic turnout for upcoming elections, officials report.",
      hi: "अधिकारियों की रिपोर्ट के अनुसार, शुरुआती मतदान संख्या आगामी चुनावों के लिए ऐतिहासिक मतदान का सुझाव देती है।",
    },
    fullDescription: {
      en: "Election officials are predicting a record-breaking voter turnout for the upcoming elections, based on unprecedented early voting numbers. In the first week of early voting alone, millions of citizens have already cast their ballots, far exceeding the figures from previous election cycles. This surge is being attributed to a number of factors, including heightened political awareness, extensive voter registration drives, and the convenience of mail-in and early in-person voting options. Political analysts are closely watching these trends, as a higher turnout could significantly impact the final results, potentially favoring candidates who have successfully mobilized new or infrequent voters. Both major parties have been aggressively campaigning to get their supporters to the polls early. The increased participation is seen as a positive sign for democratic engagement, reflecting a highly motivated electorate. However, it also presents logistical challenges for election authorities, who are working to ensure that all polling stations are adequately staffed and equipped to handle the large volume of voters while maintaining safety and security protocols. The final turnout will be a key factor in what is shaping up to be a historic election.",
      hi: "चुनाव अधिकारी अभूतपूर्व शुरुआती मतदान संख्या के आधार पर आगामी चुनावों के लिए रिकॉर्ड-तोड़ मतदाता मतदान की भविष्यवाणी कर रहे हैं। अकेले शुरुआती मतदान के पहले सप्ताह में, लाखों नागरिक पहले ही अपने मतपत्र डाल चुके हैं, जो पिछले चुनाव चक्रों के आंकड़ों से कहीं अधिक है। इस उछाल का श्रेय कई कारकों को दिया जा रहा है, जिनमें बढ़ी हुई राजनीतिक जागरूकता, व्यापक मतदाता पंजीकरण अभियान और मेल-इन और शुरुआती व्यक्तिगत मतदान विकल्पों की सुविधा शामिल है। राजनीतिक विश्लेषक इन प्रवृत्तियों पर करीब से नजर रख रहे हैं, क्योंकि उच्च मतदान अंतिम परिणामों को महत्वपूर्ण रूप से प्रभावित कर सकता है, संभावित रूप से उन उम्मीदवारों के पक्ष में जो नए या कभी-कभार मतदाताओं को सफलतापूर्वक जुटा चुके हैं। दोनों प्रमुख दल अपने समर्थकों को जल्दी मतदान केंद्रों तक पहुंचाने के लिए आक्रामक रूप से प्रचार कर रहे हैं। बढ़ी हुई भागीदारी को लोकतांत्रिक जुड़ाव के लिए एक सकारात्मक संकेत के रूप में देखा जाता है, जो एक अत्यधिक प्रेरित मतदाता को दर्शाता है। हालांकि, यह चुनाव अधिकारियों के लिए तार्किक चुनौतियां भी प्रस्तुत करता है, जो यह सुनिश्चित करने के लिए काम कर रहे हैं कि सभी मतदान केंद्र पर्याप्त रूप से कर्मचारी और बड़ी संख्या में मतदाताओं को संभालने के लिए सुसज्जित हैं, जबकि सुरक्षा और सुरक्षा प्रोटोकॉल बनाए रखते हैं। अंतिम मतदान एक ऐतिहासिक चुनाव के रूप में आकार ले रहा है, जिसमें यह एक महत्वपूर्ण कारक होगा।",
    },
    image:
      "https://images.pexels.com/photos/8828404/pexels-photo-8828404.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "ELECTIONS",
    date: "Oct 12, 2025",
  },
  {
    id: 16,
    title: {
      en: "Space Agency Announces Mars Mission Timeline",
      hi: "अंतरिक्ष एजेंसी ने मंगल मिशन की समय-सीमा की घोषणा की",
    },
    description: {
      en: "New details revealed about upcoming manned mission to Mars, scheduled for 2030.",
      hi: "2030 के लिए निर्धारित मंगल ग्रह पर आगामी मानवयुक्त मिशन के बारे में नए विवरण सामने आए।",
    },
    fullDescription: {
      en: "The national space agency has officially announced the timeline for its highly anticipated manned mission to Mars. The ambitious project, named 'Project Ares,' is scheduled for launch in 2030. The mission will involve a crew of four astronauts who will spend six months on the Martian surface, conducting a series of scientific experiments and exploring the planet's geology. The agency revealed that the development of the next-generation spacecraft and life-support systems is already in an advanced stage. A series of unmanned precursor missions are planned over the next few years to test key technologies and identify a suitable landing site. The mission's primary objectives include searching for signs of past or present life, studying the Martian climate and geology, and assessing the feasibility of future human colonization. This announcement has generated immense excitement and renewed interest in space exploration globally. The project represents a monumental leap in human spaceflight capabilities and is expected to yield invaluable scientific data that could reshape our understanding of the solar system and our place within it. The astronaut selection process will begin next year, seeking candidates with diverse expertise in science, engineering, and medicine.",
      hi: "राष्ट्रीय अंतरिक्ष एजेंसी ने मंगल ग्रह पर अपने बहुप्रतीक्षित मानवयुक्त मिशन की समय-सीमा की आधिकारिक घोषणा कर दी है। 'प्रोजेक्ट एरेस' नामक यह महत्वाकांक्षी परियोजना 2030 में लॉन्च के लिए निर्धारित है। इस मिशन में चार अंतरिक्ष यात्रियों का एक दल शामिल होगा जो मंगल की सतह पर छह महीने बिताएंगे, वैज्ञानिक प्रयोगों की एक श्रृंखला आयोजित करेंगे और ग्रह के भूविज्ञान का पता लगाएंगे। एजेंसी ने खुलासा किया कि अगली पीढ़ी के अंतरिक्ष यान और जीवन-समर्थन प्रणालियों का विकास पहले से ही एक उन्नत चरण में है। प्रमुख प्रौद्योगिकियों का परीक्षण करने और एक उपयुक्त लैंडिंग साइट की पहचान करने के लिए अगले कुछ वर्षों में मानव रहित अग्रदूत मिशनों की एक श्रृंखला की योजना बनाई गई है। मिशन के प्राथमिक उद्देश्यों में अतीत या वर्तमान जीवन के संकेतों की खोज करना, मंगल ग्रह की जलवायु और भूविज्ञान का अध्ययन करना और भविष्य के मानव उपनिवेशीकरण की व्यवहार्यता का आकलन करना शामिल है। इस घोषणा ने विश्व स्तर पर अंतरिक्ष अन्वेषण में अत्यधिक उत्साह और नई रुचि पैदा की है। यह परियोजना मानव अंतरिक्ष उड़ान क्षमताओं में एक स्मारकीय छलांग का प्रतिनिधित्व करती है और इससे अमूल्य वैज्ञानिक डेटा प्राप्त होने की उम्मीद है जो सौर मंडल और उसमें हमारे स्थान के बारे में हमारी समझ को फिर से आकार दे सकता है। अंतरिक्ष यात्री चयन प्रक्रिया अगले साल शुरू होगी, जिसमें विज्ञान, इंजीनियरिंग और चिकित्सा में विविध विशेषज्ञता वाले उम्मीदवारों की तलाश होगी।",
    },
    image:
      "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "TECHNOLOGY",
    date: "Oct 12, 2025",
  },
  {
    id: 17,
    title: {
      en: "Major Bank Reports Record Quarterly Profits",
      hi: "प्रमुख बैंक ने रिकॉर्ड तिमाही मुनाफे की रिपोर्ट दी",
    },
    description: {
      en: "Financial institution announces strong earnings driven by increased lending and investment activities.",
      hi: "वित्तीय संस्थान ने बढ़ी हुई उधार और निवेश गतिविधियों से प्रेरित मजबूत आय की घोषणा की।",
    },
    fullDescription: {
      en: "One of the nation's largest banks has reported record-breaking profits for the third quarter, exceeding all market expectations. The bank's net income surged by 25% year-over-year, driven by a robust increase in its lending portfolio and strong performance from its investment banking division. The CEO attributed the stellar results to a favorable economic climate, prudent risk management, and the successful rollout of new digital banking services that have attracted a younger demographic. The retail banking segment saw a significant rise in deposits and credit card spending, while the corporate lending division benefited from a resurgence in business expansion and capital investment. The bank's stock price jumped by 5% in early trading following the announcement. Analysts are optimistic about the bank's outlook, citing its strong capitalization and diversified revenue streams. The report also highlighted the bank's commitment to corporate social responsibility, with increased investment in community development projects and sustainable financing initiatives. This strong financial performance is seen as a positive indicator for the health of the broader economy.",
      hi: "देश के सबसे बड़े बैंकों में से एक ने तीसरी तिमाही के लिए रिकॉर्ड-तोड़ मुनाफे की सूचना दी है, जो सभी बाजार अपेक्षाओं को पार कर गया है। बैंक की शुद्ध आय में साल-दर-साल 25% की वृद्धि हुई, जो इसके उधार पोर्टफोलियो में एक मजबूत वृद्धि और इसके निवेश बैंकिंग डिवीजन से मजबूत प्रदर्शन से प्रेरित थी। सीईओ ने शानदार परिणामों का श्रेय एक अनुकूल आर्थिक माहौल, विवेकपूर्ण जोखिम प्रबंधन और नई डिजिटल बैंकिंग सेवाओं के सफल रोलआउट को दिया, जिसने एक युवा जनसांख्यिकीय को आकर्षित किया है। खुदरा बैंकिंग खंड में जमा और क्रेडिट कार्ड खर्च में उल्लेखनीय वृद्धि देखी गई, जबकि कॉर्पोरेट उधार डिवीजन को व्यापार विस्तार और पूंजी निवेश में पुनरुत्थान से लाभ हुआ। घोषणा के बाद शुरुआती कारोबार में बैंक के शेयर की कीमत 5% बढ़ गई। विश्लेषक बैंक के दृष्टिकोण के बारे में आशावादी हैं, इसकी मजबूत पूंजीकरण और विविध राजस्व धाराओं का हवाला देते हुए। रिपोर्ट में कॉर्पोरेट सामाजिक जिम्मेदारी के प्रति बैंक की प्रतिबद्धता पर भी प्रकाश डाला गया, जिसमें सामुदायिक विकास परियोजनाओं और टिकाऊ वित्तपोषण पहलों में निवेश में वृद्धि हुई है। इस मजबूत वित्तीय प्रदर्शन को व्यापक अर्थव्यवस्था के स्वास्थ्य के लिए एक सकारात्मक संकेतक के रूप में देखा जाता है।",
    },
    image:
      "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "BUSINESS",
    date: "Oct 12, 2025",
  },
  {
    id: 18,
    title: {
      en: "Blockbuster Film Breaks Box Office Records Worldwide",
      hi: "ब्लॉकबस्टर फिल्म ने दुनिया भर में बॉक्स ऑफिस रिकॉर्ड तोड़े",
    },
    description: {
      en: "The latest superhero movie smashes opening weekend records, earning over $500 million globally in just three days.",
      hi: "नवीनतम सुपरहीरो फिल्म ने शुरुआती सप्ताहांत के रिकॉर्ड तोड़ दिए, केवल तीन दिनों में विश्व स्तर पर $500 मिलियन से अधिक की कमाई की।",
    },
    fullDescription: {
      en: "The highly anticipated superhero sequel has taken the global box office by storm, obliterating previous records for an opening weekend. The film grossed an astounding $500 million worldwide in its first three days, with domestic and international markets contributing almost equally. Featuring a star-studded cast and breathtaking visual effects, the movie has received rave reviews from both critics and audiences. The compelling storyline, which delves deeper into the hero's personal struggles, has been praised for adding emotional depth to the action-packed spectacle. Cinemas reported sold-out shows and long queues, with fans eager to witness the latest chapter in the popular franchise. The film's director, known for his grand-scale filmmaking, has delivered a cinematic experience that many are calling the best superhero movie to date. The movie's success is also a major win for the studio, which invested heavily in its production and marketing. With such a strong start, the film is on track to become one of the highest-grossing movies of all time, further cementing the dominance of the superhero genre in contemporary cinema.",
      hi: "अत्यधिक प्रतीक्षित सुपरहीरो सीक्वल ने वैश्विक बॉक्स ऑफिस पर तूफान ला दिया है, जिसने शुरुआती सप्ताहांत के पिछले रिकॉर्ड को ध्वस्त कर दिया है। फिल्म ने अपने पहले तीन दिनों में दुनिया भर में आश्चर्यजनक रूप से $500 मिलियन की कमाई की, जिसमें घरेलू और अंतरराष्ट्रीय बाजारों ने लगभग समान रूप से योगदान दिया। एक स्टार-स्टडेड कास्ट और लुभावने दृश्य प्रभावों की विशेषता वाली इस फिल्म को आलोचकों और दर्शकों दोनों से शानदार समीक्षा मिली है। सम्मोहक कहानी, जो नायक के व्यक्तिगत संघर्षों में गहराई से उतरती है, को एक्शन से भरपूर तमाशे में भावनात्मक गहराई जोड़ने के लिए सराहा गया है। सिनेमाघरों ने बिक-आउट शो और लंबी कतारों की सूचना दी, प्रशंसक लोकप्रिय फ्रेंचाइजी में नवीनतम अध्याय देखने के लिए उत्सुक थे। अपने भव्य पैमाने पर फिल्म निर्माण के लिए जाने जाने वाले फिल्म के निर्देशक ने एक सिनेमाई अनुभव दिया है जिसे कई लोग अब तक की सर्वश्रेष्ठ सुपरहीरो फिल्म कह रहे हैं। फिल्म की सफलता स्टूडियो के लिए भी एक बड़ी जीत है, जिसने इसके निर्माण और विपणन में भारी निवेश किया था। इतनी मजबूत शुरुआत के साथ, यह फिल्म अब तक की सबसे ज्यादा कमाई करने वाली फिल्मों में से एक बनने की राह पर है, जो समकालीन सिनेमा में सुपरहीरो शैली के प्रभुत्व को और मजबूत करती है।",
    },
    image:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "ENTERTAINMENT",
    date: "Oct 11, 2025",
    youtubeVideoId: "eL8c1momSj0",
    // instagramPostId: "C2J3K_zyZ-c",
  },
  {
    id: 19,
    title: {
      en: "Tennis Star Wins Grand Slam Tournament",
      hi: "टेनिस स्टार ने ग्रैंड स्लैम टूर्नामेंट जीता",
    },
    description: {
      en: "Young player claims first major title in thrilling five-set final match.",
      hi: "युवा खिलाड़ी ने रोमांचक पांच-सेट के फाइनल मैच में पहला बड़ा खिताब जीता।",
    },
    fullDescription: {
      en: "In a display of sheer talent and resilience, a rising tennis star has clinched his first-ever Grand Slam title after a grueling five-set final. The epic match, which lasted over four hours, saw both players push each other to their limits with powerful serves and incredible rallies. The young champion, who was an underdog going into the tournament, showcased remarkable composure and strategic prowess to overcome his more experienced opponent. The final set was a tense affair, with the momentum swinging back and forth before our hero sealed the victory with a stunning cross-court winner. In his post-match speech, an emotional champion thanked his family, coaching staff, and the roaring crowd for their unwavering support. This victory marks a significant moment in the world of tennis, heralding the arrival of a new generation of talent ready to challenge the old guard. His journey from a junior player to a Grand Slam winner is an inspiration to many aspiring athletes and a testament to his hard work and dedication to the sport.",
      hi: "प्रतिभा और लचीलेपन के एक शानदार प्रदर्शन में, एक उभरते हुए टेनिस स्टार ने एक कठिन पांच-सेट के फाइनल के बाद अपना पहला ग्रैंड स्लैम खिताब जीता है। चार घंटे से अधिक चले इस महाकाव्य मैच में दोनों खिलाड़ियों ने शक्तिशाली सर्व और अविश्वसनीय रैलियों के साथ एक-दूसरे को अपनी सीमाओं तक धकेल दिया। युवा चैंपियन, जो टूर्नामेंट में एक अंडरडॉग था, ने अपने अधिक अनुभवी प्रतिद्वंद्वी को हराने के लिए उल्लेखनीय संयम और रणनीतिक कौशल का प्रदर्शन किया। अंतिम सेट एक तनावपूर्ण मामला था, जिसमें हमारे नायक द्वारा एक आश्चर्यजनक क्रॉस-कोर्ट विजेता के साथ जीत हासिल करने से पहले गति आगे-पीछे होती रही। अपने मैच के बाद के भाषण में, एक भावुक चैंपियन ने अपने परिवार, कोचिंग स्टाफ और गरजती भीड़ को उनके अटूट समर्थन के लिए धन्यवाद दिया। यह जीत टेनिस की दुनिया में एक महत्वपूर्ण क्षण है, जो पुरानी पीढ़ी को चुनौती देने के लिए तैयार प्रतिभा की एक नई पीढ़ी के आगमन की घोषणा करती है। एक जूनियर खिलाड़ी से ग्रैंड स्लैम विजेता तक की उनकी यात्रा कई महत्वाकांक्षी एथलीटों के लिए एक प्रेरणा है और खेल के प्रति उनकी कड़ी मेहनत और समर्पण का एक प्रमाण है।",
    },
    image:
      "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "SPORTS",
    date: "Oct 11, 2025",
  },
  {
    id: 20,
    title: {
      en: "Sustainable Fashion Movement Gains Momentum",
      hi: "सस्टेनेबल फैशन आंदोलन को गति मिली",
    },
    description: {
      en: "Eco-friendly clothing brands see surge in popularity as consumers prioritize sustainability.",
      hi: "पर्यावरण-अनुकूल कपड़ों के ब्रांडों की लोकप्रियता में वृद्धि देखी जा रही है क्योंकि उपभोक्ता स्थिरता को प्राथमिकता देते हैं।",
    },
    fullDescription: {
      en: "The fashion industry is undergoing a significant transformation as consumers increasingly prioritize sustainability and ethical production. A new wave of eco-friendly clothing brands is gaining momentum, challenging the fast-fashion model with their commitment to environmentally conscious practices. These brands are using innovative materials such as organic cotton, recycled polyester, and plant-based fabrics like Tencel and bamboo. They are also adopting transparent supply chains, ensuring fair wages and safe working conditions for their workers. The shift in consumer behavior is driven by a growing awareness of the fashion industry's environmental impact, from water pollution to textile waste. Social media influencers and celebrities are also playing a crucial role in promoting sustainable fashion, making it a mainstream trend. As a result, major fashion retailers are being forced to adapt, with many launching their own sustainable collections and setting ambitious environmental targets. This movement is not just about buying 'green' clothes; it's about fostering a more mindful approach to consumption, encouraging people to buy less, choose well, and make their clothes last longer. The rise of sustainable fashion represents a hopeful future for an industry in much need of change.",
      hi: "फैशन उद्योग एक महत्वपूर्ण परिवर्तन से गुजर रहा है क्योंकि उपभोक्ता तेजी से स्थिरता और नैतिक उत्पादन को प्राथमिकता दे रहे हैं। पर्यावरण-अनुकूल कपड़ों के ब्रांडों की एक नई लहर गति पकड़ रही है, जो पर्यावरण के प्रति जागरूक प्रथाओं के प्रति अपनी प्रतिबद्धता के साथ फास्ट-फैशन मॉडल को चुनौती दे रही है। ये ब्रांड जैविक कपास, पुनर्नवीनीकरण पॉलिएस्टर, और टेंसेल और बांस जैसे पौधे-आधारित कपड़ों जैसी नवीन सामग्रियों का उपयोग कर रहे हैं। वे पारदर्शी आपूर्ति श्रृंखला भी अपना रहे हैं, अपने श्रमिकों के लिए उचित मजदूरी और सुरक्षित काम करने की स्थिति सुनिश्चित कर रहे हैं। उपभोक्ता व्यवहार में बदलाव फैशन उद्योग के पर्यावरणीय प्रभाव, जल प्रदूषण से लेकर कपड़ा अपशिष्ट तक, के बारे में बढ़ती जागरूकता से प्रेरित है। सोशल मीडिया प्रभावित करने वाले और मशहूर हस्तियां भी टिकाऊ फैशन को बढ़ावा देने में महत्वपूर्ण भूमिका निभा रहे हैं, जिससे यह एक मुख्यधारा की प्रवृत्ति बन गई है। नतीजतन, प्रमुख फैशन खुदरा विक्रेताओं को अनुकूलित करने के लिए मजबूर किया जा रहा है, कई अपने स्वयं के टिकाऊ संग्रह लॉन्च कर रहे हैं और महत्वाकांक्षी पर्यावरणीय लक्ष्य निर्धारित कर रहे हैं। यह आंदोलन केवल 'हरे' कपड़े खरीदने के बारे में नहीं है; यह उपभोग के प्रति अधिक सचेत दृष्टिकोण को बढ़ावा देने, लोगों को कम खरीदने, अच्छी तरह से चुनने और अपने कपड़ों को लंबे समय तक चलाने के लिए प्रोत्साहित करने के बारे में है। टिकाऊ फैशन का उदय एक ऐसे उद्योग के लिए एक आशाजनक भविष्य का प्रतिनिधित्व करता है जिसे बदलाव की बहुत आवश्यकता है।",
    },
    image:
      "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "LIFESTYLE",
    date: "Oct 11, 2025",
  },
];

export const newsDataLive = async () => {
  return await apiClient.get("articles/all");
};


export const getBusinessArticles = async () => {
  return await apiClient.get("articles/category/Business");
};

export const getBhojpuriArticles = async () => {
  return await apiClient.get("articles/category/Bhojpuri");
};


export const getTechnologyArticles = async () => {
  return await apiClient.get("articles/category/Technology");
};

export const getElectionsArticles = async () => {
  return await apiClient.get("articles/category/Elections");
};


