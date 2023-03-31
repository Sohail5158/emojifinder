 // Define an array of emoji objects
 var emojis = [
    { emoji: '😀', name: 'Grinning Face' },
    { emoji: '😃', name: 'Grinning Face with Big Eyes' },
    { emoji: '😄', name: 'Grinning Face with Smiling Eyes' },
    { emoji: '😁', name: 'Beaming Face with Smiling Eyes' },
    { emoji: '😆', name: 'Grinning Squinting Face' },
    { emoji: '😅', name: 'Grinning Face with Sweat' },
    { emoji: '🤣', name: 'Rolling on the Floor Laughing' },
    { emoji: '😂', name: 'Face with Tears of Joy' },
    { emoji: '🙂', name: 'Slightly Smiling Face' },
    { emoji: '🙃', name: 'Upside-Down Face' },
    {emoji:'😉'  ,name:'Wink' },
    {emoji:'😊'  ,name:'Blush' },
    {emoji:'😇'  ,name:'innocent' },
    {emoji:'😍'  ,name:'heart eyes' },
    {emoji:'😘'  ,name:'kissing heart' },
    {emoji:'😚' ,name:'kissing closed eye' },
    {emoji:'😙'  ,name:'kissing smiling eye' },
    {emoji:'😋'  ,name:'yum' },
    {emoji:'😛' ,name:'stuck out tongue' },
    {emoji:'😜' ,name:'Stuck out tongue winking eye' },
    {emoji:'😐️'  ,name:'neutral face' },
    {emoji: '😑' ,name:'expressionless'},
    {emoji:'🤔' ,name:'Thinking face' },
    {emoji:'🤫'  ,name:'shushing face' },
    {emoji: '🤗' ,name:'Hugging face' },
    {emoji:'🤐'  ,name:'Zipper mouth face' },
    {emoji: '🤑' ,name:'money mouth face'},
    {emoji: '😶' ,name:'no mouth' },
    {emoji: '😏' ,name:'smrink' },
    {emoji: '😒' ,name: 'unamused face'},
    {emoji: '🙄' ,name:'face with rolling eye' },
    {emoji: '😬' ,name: 'grimacing face'},
    {emoji: '🤥' ,name:'Lying face' },
    {emoji: '😌' ,name: 'Relieved face'},
    {emoji: '😔'  ,name:'Pensive face' },
    {emoji: '😴' ,name:'sleeping face' },
    {emoji: ' 😪 ' ,name:' Sleepy face '},
    {emoji: '  🤤' ,name:'Drooling face  '},
    {emoji: ' 😷 ' ,name:' Face with medical mask '},
    {emoji: ' 🤒 ' ,name:'  Face with thermometer'},
    {emoji: ' 🤕 ' ,name:' Face with head bandage '},
    {emoji: '🤢  ' ,name:' Nauseated Face '},
    {emoji: ' 🤮 ' ,name:' Face vomiting'},
    {emoji: '🤧 ' ,name:' Sneezing face '},
    {emoji: ' 🥵 ' ,name:'Hot face  '},
    {emoji: ' 🥶 ' ,name:' Cold face '},
    {emoji: '🥴 ' ,name:'  Woozy face'},
    {emoji: '  😵' ,name:' Face with crossed-out eyes '},
    {emoji: '  🤯' ,name:'  Exploding head'},
    {emoji:'  🤠',name:'   Cowboy hat face '},
    {emoji:' 🥳  ',name:'   Partying face '},
    {emoji:'  😎 ',name:' Smiling face with sunglasses   '},
    {emoji:' 🤓  ',name:'  Nerd face  '},
    {emoji:'   🧐',name:'  Face with Monocle  '},
    {emoji:' 😕  ',name:'  Confused face  '},
    {emoji:'  ☹️ ',name:' Frowning face   '},
    {emoji:' 😮  ',name:'	 Face with Open mouth    '},
    {emoji:' 😯  ',name:'  Hushed face  '},
    {emoji:'  😲',name:' Astonished face   '},
    {emoji:' 😳  ',name:'  Flushed face  '},
    {emoji:' 🥺  ',name:' Pleading face   '},
    {emoji:'  😧 ',name:' Anguished face   '},
    {emoji:' 😨  ',name:'  Fearful face  '},
    {emoji:'  😥 ',name:' Sad but relieved face   '},
    {emoji:' 😭  ',name:'  Loudly crying face  '},
    {emoji:'😱   ',name:'Face screaming in fear    '},
    {emoji:'  😖 ',name:' Confounded face   '},
    {emoji:'   😞',name:' Disappointed face   '},
    {emoji:' 😓  ',name:' Downcast face with sweat   '},
    {emoji:' 😫  ',name:' Tired face   '},
    {emoji:'🥱   ',name:'  Yawning face '},
    {emoji:' 😤  ',name:'Face with steam from nose    '},
    {emoji:'🤬   ',name:'  Face with symbols on the mouth  '},
    {emoji:' 👿  ',name:'	    Angry face with horns'},
    {emoji:' 😈  ',name:'  Smiling face with horns  '},
    {emoji:' 💀  ',name:' 	    Skull   '},
    {emoji:' 💩  ',name:'  Pile of poo  '},
    {emoji:' 🤡  ',name:'   Clown face '},
    {emoji:' 👹  ',name:'   Japanese ogre  '},
    {emoji:'  👺 ',name:' Goblin  '},
    {emoji:'   👻',name:'  Ghost  '},
    {emoji:'👽   ',name:'  Alien  '},
    {emoji:' 👾  ',name:' Alien monster   '},
    {emoji:' 🤖  ',name:' Robot face   '},
    {emoji:'  🐱 ',name:'	    Cat face    '},
    {emoji:'  🙈 ',name:'  See no evil monkey  '},
    {emoji:'   🙉',name:' Hear no evil monkey   '},
    {emoji:'🙊   ',name:'  Speak no evil monkey  '},
    {emoji:'👦   ',name:'   Boy face '},
    {emoji:' 👧  ',name:' Girl face   '},
    {emoji:' 👀  ',name:' Eyes   '},
    {emoji:' ✍️  ',name:'Writing hands    '},
    {emoji:' 👋  ',name:'  Waving hand  '},
    {emoji:'  🦾 ',name:' Mechanical arm   '},
    {emoji:' 🤳  ',name:'  	   Selfie  '},
  ];

  var searchInput = document.getElementById('search');
  var resultsDiv = document.getElementById('results');

  function searchEmojis() {
    var query = searchInput.value.toLowerCase();
    var matchingEmojis = emojis.filter(function(emoji) {
      return emoji.name.toLowerCase().indexOf(query) !== -1;
    });

    resultsDiv.innerHTML = '';
    matchingEmojis.forEach(function(emoji) {
      var emojiSpan = document.createElement('span');
      emojiSpan.textContent = emoji.emoji;
      emojiSpan.style.fontSize = '32px';
      resultsDiv.appendChild(emojiSpan);
    });
  }

  searchInput.addEventListener('input', searchEmojis);