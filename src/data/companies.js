const companies = [
  {
    id: 1,
    name: 'WORLDTECH INFORMATION TECHNOLOGY, INC.',
    details: 'Worldtech Information Solutions, Inc. is a Philippine-based IT consultancy and training company with offices in Cebu, Manila, and international presence in Australia and Singapore. ' +
      'The company specializes in IT consulting, cybersecurity solutions, and professional training, including authorized certification programs in Microsoft, Cisco, and VMware technologies. ' +
      'It serves a diverse client base, including banks, government agencies, schools, and large enterprises, offering both strategic IT guidance and skills development. ' +
      'With a team of experienced consultants and certified trainers, Worldtech emphasizes cybersecurity, operational technology protection, and capacity building for organizations seeking to enhance their IT infrastructure and workforce competencies.',
    thumbnail: 'WORLDTECH LOGO.png',
    images: [
      'worldtech 1.jpg',
      'worldtech 2.jpg'
    ],
    address: '3rd Gate Vailoces Bldg. Rahmann St. Gorordo Avenue, Cebu City, Philippines',
    facilitator: 'Mrs. Elizabeth Arquiza',
    socialMedia: [
      { name: 'Facebook', url: 'https://www.facebook.com/worldtechinformationsolutions' },
      { name: 'Website', url: 'https://www.wisphil.com' }
    ],
    observations: [
      'The senior team, or their entire team, is excellent—highly experienced, knowledgeable, and always ready to teach and assist their clients.'
    ],
    learnings: [
      'Strong Expertise in IT & Cybersecurity – Worldtech provides advanced IT consulting and cybersecurity solutions, highlighting the growing need for organizations to protect their digital and operational systems.',
      'Commitment to Client Support – Worldtech’s experienced team is dedicated to guiding, teaching, and assisting clients, ensuring they receive reliable support throughout their IT and cybersecurity needs.',
      'They utilize advanced and highly effective tools that are informative, impressive, and genuinely helpful to clients—including tools capable of detecting whether a portal or application is being sold on the black market or has been breached.'
    ]
  },
  {
    id: 2,
    name: 'RIVAN IT CEBU',
    details: 'Rivan IT Cebu is a training center. ' +
      'Established under the network of Rivan School of Technology, Inc. (founded 1999), it specializes in IT and networking certification courses such as Cisco CCNA/CCNP, Linux security, and VoIP. ' +
      'For someone in Electronics Engineering, it can be a useful complement if you\'re looking to build skills in networking infrastructure and IT hardware integration, but it may not provide the full breadth of electronics engineering topics (like analog/digital circuit design, embedded systems, power electronics, etc.). ' +
      'In student forums, its networking courses are noted as "good for getting your foot in the door" for IT roles. In short, good for the IT/network side of engineering. ' +
      'If your goal is full electronics design engineering, you need to check whether they have any dedicated electronics hardware/embedded systems course track.',
    thumbnail: 'RIVANIT LOGO.jpg',
    images: [
      'rivan 1.jpg',
      'rivan 2.jpg',
      'rivan 3.jpg',
      'rivan 4.jpg',
      'rivan 5.jpg'
    ],
    address: 'Rivan IT Building, Englis St., V. Rama Ave., Cebu City, Philippines',
    facilitator: 'Vincent Victor',
    socialMedia: [
      { name: 'Facebook', url: 'https://www.facebook.com/rivanitcebu' },
      { name: 'Website', url: 'https://www.rivanit.com/' }
    ],
    observations: [
      'They have excellent instructors who effectively guide and teach their clients.',
      'They provide hardware that greatly enhances hands-on learning experiences.'
    ],
    learnings: [
      'Practical Skills Boost Your Resume – Hands-on labs and certification-oriented training give you practical experience that many employers look for in fresh graduates.',
      'Your Degree Doesn’t Limit You – Electronics Engineering students can enter IT roles by adding the right certifications and skills.',
      'Continuous Learning Is Expected in Tech – Technology evolves fast; taking extra courses beyond college shows initiative and keeps you competitive in the job market.',
      'Networking Knowledge Is Valuable Across Fields – Skills in network infrastructure, routers, switches, and security are useful regardless of your engineering specialization.',
      
    ]
  },
  {
    id: 3,
    name: 'CodeChum',
    details: 'CodeChum is an educational technology platform based in Cebu, Philippines, designed to make learning programming accessible and engaging for students and teachers. ' +
      'It supports various programming languages such as C, C++, Java, Python, and JavaScript, offering tools for automatic code checking, student performance monitoring, and cheating prevention. ' +
      'Widely used in over 100 schools across the Philippines, CodeChum provides a mobile-friendly interface, a self-study area with AI assistance, and certification opportunities. ' +
      'Founded by Jemar Jude Maranga, the platform aims to empower students and educators by simplifying coding education, enhancing teaching efficiency, and preparing Filipino youth for careers in technology.',
    thumbnail: 'codechum logo.png',
    images: [
      'codechum 1.jpg',
      'codechum 2.jpg',
      'codechum 3.jpg',
      'codechum 4.jpg',
      'codechum 5.jpg',
      'codechum 6.jpg'
    ],
    address: '753 Katipunan St, Cebu City, 6000 Cebu',
    facilitator: 'Xavier David Maranga',
    socialMedia: [
      { name: 'Facebook', url: 'https://www.facebook.com/codechum' },
      { name: 'Website', url: 'https://codechum.com/' }
    ],
    observations: [
      'Even though their team is small, they manage to improve and maintain their application very well.',
      'They Utilized AI So much'
    ],
    learnings: [
      'Accessible Programming Education – Platforms like CodeChum make learning programming easier and more engaging, lowering barriers for students and teachers.',
      'Self-Paced Learning with AI Assistance – AI guidance in the self-study area helps you learn independently without always needing a teacher.'
    ]
  },
  {
    id: 4,
    name: 'Mata Technologies Inc.',
    details: 'Mata Technologies, Inc. is a Filipino company that provides virtual reality maps for tourism and real estate, offering 360° previews of properties and destinations. ' +
      'Their mission in tourism is to create virtual maps showcasing well-known attractions and hidden gems across the Philippines, while their real estate mission focuses on delivering interactive, user-friendly virtual tours of properties. ' +
      'Their vision is to positively impact both industries by using VR technology to promote sustainable tourism and improve real estate experiences in the new normal.',
    thumbnail: 'mata logo.png',
    images: [
      'mata 1.jpg',
      'mata 2.jpg',
      'mata 3.jpg',
      'mata 5.jpg'
    ],
    address: '203, Cardoc Building, General Maxilom Ave, Cebu City, 6000 Cebu',
    facilitator: 'Suzzette Caminero',
    socialMedia: [
      { name: 'Facebook', url: 'https://www.facebook.com/matatechnologies' },
      { name: 'Website', url: 'https://mata.tours/' }
    ],
    observations: [
      'I Observed that their team is very kind and knowledgeable.',
      'They really know their stuff and they are very passionate about their work.'
    ],
    learnings: [
      'Innovative Use of Technology – Mata Technologies shows how VR can be applied to practical industries like tourism and real estate.',
      'Career Inspiration in Tech and Design – Students interested in VR, UI/UX, or digital content creation can learn from how VR is used commercially.',
      'Digital Tools Enhance Accessibility – VR makes real estate and tourism information available to wider audiences, emphasizing the societal impact of technology.'
    ]
  },
  {
    id: 5,
    name: 'Tagbilaran City DRRM Office ',
    details: 'The Tagbilaran City DRRM Office, or City Disaster Risk Reduction and Management Office (CDRRMO), is the local government unit responsible for managing disaster risks and response in Tagbilaran City, Bohol, Philippines, focusing on prevention, preparedness, and recovery. ' +
      'They acquire modern equipment like vibrascopes for search and rescue, and are led by an appointed Local DRRM Officer (LDRRMO) like Gerard M. Lavadia, as per the national DRRM Act of 2010.',
    thumbnail: 'tagbilaran logo.jpg',
    images: [
      'tagbilaran911 1.png',
      'tagbilaran911 2.png'
    ],
    address: 'MV3F+HFM, Tagbilaran City, Bohol',
    facilitator: 'AJ Lacea',
    socialMedia: [
      { name: 'Facebook', url: 'https://www.facebook.com/TagbCityDRRMO/' }
    ],
    observations: [
      'The office is equipped with modern disaster response equipment, such as vibrascopes for search and rescue.',
      'It is part of the local government unit, linking community needs with national DRRM policies.'
    ],
    learnings: [
      'Preparedness Is Key – Effective disaster management requires planning before a disaster occurs.',
      'Modern Tools Enhance Efficiency – Using equipment like vibrascopes improves search and rescue operations.',
      'Disaster Management Is Multifaceted – It includes prevention, preparedness, response, and recovery, not just emergency response.',
      'Proactive Risk Assessment Saves Lives – Identifying and mitigating risks before disasters occur reduces damage and casualties.'
    ]
  }
]

export default companies

