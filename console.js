//Denne koden tilhører Dalai Solutions AS, og er på leie til Kongeparken AS. Bruk uten tillatelse er ikke tillatt.    
let widgetDescription = " ";
let inputPlaceholder = " ";
let widgetStylesheet = " ";
let browser_url = window.location.href;

 if (browser_url.includes('/en-gb')) {
widgetDescription = "I'm a clever bear, but I need a couple of seconds to think it through🍯 I'm still in training and may make some minor mistakes.";
inputPlaceholder = "Message...";
widgetStylesheet = "https://kristoman-rikardo.github.io/buttonlabels/en.css";
} else {
widgetDescription = "Jeg er en lur bjørn, men trenger et par sekunder for å tenke meg om🍯 Jeg er fortsatt under opplæring, og kan derfor gjøre små feil.";
inputPlaceholder = "Skriv melding...";
widgetStylesheet = "https://kristoman-rikardo.github.io/buttonlabels/no.css";
}

// Last inn Chat-widget
let script = document.createElement("script");
(function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '67e1d5a5eb295306cbdbca4d' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        assistant: {
            banner: { description: widgetDescription },
            inputPlaceholder: inputPlaceholder,
            stylesheet: widgetStylesheet
        },
        launch: {
            event: { type: "launch", payload: { browser_url: window.location.href } }
        }
      });
    }
    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
})(document, 'script');
