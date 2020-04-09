const uspSnippetObj = {
    'ranked-207-in-the-world-1': {
      iconSrc: 'https://files.outfit.io/media_library_items/179126/NB-_icons_Society-and-Culture_NEW-WHITE.png',
      heading: 'RANKED 207',
      text: 'In the world',
      disclaimerNumberSup: '1',
      disclaimer: 'QS World University Rankings 2020'
    },
    'top-10-university-in-australia-1': {
      iconSrc: 'https://files.outfit.io/media_library_items/179125/NB-_icons_CommunityServices_NEW-WHITE.png',
      heading: 'TOP 10 university',
      text: 'in Australia',
      disclaimerNumberSup: '1',
      disclaimer: 'QS World University Rankings 2020'
    },
    'top-50-university-in-the-asia-pacific-region-2': {
      iconSrc: 'https://files.outfit.io/media_library_items/179124/NB-_icons_Communication-and-Creative-Industries_NEW-WHITE.png',
      heading: 'Top 50 university',
      text: 'in the Asia-Pacific Region',
      disclaimerNumberSup: '2',
      disclaimer: 'Times Higher Education Golden Age University Ranking 2019'
    },
    'highest-ranked-regional-university-in-australia-1': {
      iconSrc: 'https://files.outfit.io/media_library_items/179123/NB-_icons_Law_NEW-WHITE.png',
      heading: 'HIGHEST RANKED',
      text: 'Regional University in Australia',
      disclaimerNumberSup: '1',
      disclaimer: 'QS World University Rankings 2020'
    },                
    '200-million-investment-in-the-future-of-stemm': {
      iconSrc: 'https://files.outfit.io/media_library_items/179122/NB-_icons_Computing-Maths-and-Technology_NEW-WHITE.png',
      heading: '$200 Million Investment',
      text: 'in the future of STEMM',
      disclaimerNumberSup: '',
      disclaimer: ''
    },
  }
  
  function uspController() {
    const container = document.querySelector('.js-usp-controller-container');
    const disclaimerContainer = document.querySelector('.js-usp-controller-disclaimer');
    const selectedArr = {{{usp-test}}} || [];
    let disclaimers = [];
  
    if ( selectedArr === [] ) return;
  
    const uspHTML = selectedArr.map(item => {
      const icon = uspSnippetObj[item].iconSrc;
      const heading = uspSnippetObj[item].heading;
      const text = uspSnippetObj[item].text;
      const disclaimerNumberSup = uspSnippetObj[item].disclaimerNumberSup;
      
      disclaimers.push(uspSnippetObj[item].disclaimer);
      
      return `
        <div class="col">
          <div class="col__inner">
            <img src="${icon}" alt="Icon" />
            <h1>${heading}</h1>
            <h2>${text}</h2>
          </div>
          </div>
      `;
    }).join('');
    
    // removing duplicates from disclaimers array
      disclaimers = [...new Set(disclaimers)];
  
    // injecting html into columns and disclaimer
    container.innerHTML = uspHTML;
    disclaimerContainer.innerHTML = disclaimers.join(', ');
  
    // adding warning popup if more than 3 items are selected
    if ( selectedArr.length > 3 ) {
      container.classList.add('invalid');
    } else {
      container.classList.remove('invalid');
    }
  }