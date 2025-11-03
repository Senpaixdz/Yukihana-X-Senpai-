export const emoji = {
  "check": "<:emoji_12:1434902576599400519>",
  "info": "<:emoji_4:1434902095982493849>",
  "cross": "<:emoji_2:1434902031268581488>",
  "add": "<:emoji_1:1434901997739446404>",
  "reset": "<:emoji_10:1434902534115430520>",
  "folder": "<:emoji_3:1434902054236852376>",
  "openfolder": "<:emoji_8:1434902211237777539>",
  "music": "<a:emoji_7:1434902166232895609>",
  "right": "<:emoji_11:1434902550338994439>",
  "left": "<:emoji_5:1434902116983377921>",
  "loading": "<a:emoji_6:1434902136088694965>",
  get(name, fallback = '') {
    return this[name] || fallback;
  },
};

export default emoji;
