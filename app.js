const keyInfo = {
      j: { code: "KeyJ", output: "ক", letter: "J" },
      J: { code: "KeyJ", output: "খ", letter: "J", shift: true },
      o: { code: "KeyO", output: "গ", letter: "O" },
      O: { code: "KeyO", output: "ঘ", letter: "O", shift: true },
      q: { code: "KeyQ", output: "ঙ", letter: "Q" },
      Q: { code: "KeyQ", output: "ং", letter: "Q", shift: true },
      y: { code: "KeyY", output: "চ", letter: "Y" },
      Y: { code: "KeyY", output: "ছ", letter: "Y", shift: true },
      u: { code: "KeyU", output: "জ", letter: "U" },
      U: { code: "KeyU", output: "ঝ", letter: "U", shift: true },
      I: { code: "KeyI", output: "ঞ", letter: "I", shift: true },
      t: { code: "KeyT", output: "ট", letter: "T" },
      T: { code: "KeyT", output: "ঠ", letter: "T", shift: true },
      e: { code: "KeyE", output: "ড", letter: "E" },
      E: { code: "KeyE", output: "ঢ", letter: "E", shift: true },
      B: { code: "KeyB", output: "ণ", letter: "B", shift: true },
      p: { code: "KeyP", output: "ড়", letter: "P" },
      P: { code: "KeyP", output: "ঢ়", letter: "P", shift: true },
      k: { code: "KeyK", output: "ত", letter: "K" },
      K: { code: "KeyK", output: "থ", letter: "K", shift: true },
      l: { code: "KeyL", output: "দ", letter: "L" },
      L: { code: "KeyL", output: "ধ", letter: "L", shift: true },
      b: { code: "KeyB", output: "ন", letter: "B" },
      r: { code: "KeyR", output: "প", letter: "R" },
      R: { code: "KeyR", output: "ফ", letter: "R", shift: true },
      h: { code: "KeyH", output: "ব", letter: "H" },
      H: { code: "KeyH", output: "ভ", letter: "H", shift: true },
      m: { code: "KeyM", output: "ম", letter: "M" },
      w: { code: "KeyW", output: "য", letter: "W" },
      W: { code: "KeyW", output: "য়", letter: "W", shift: true },
      v: { code: "KeyV", output: "র", letter: "V" },
      V: { code: "KeyV", output: "ল", letter: "V", shift: true },
      M: { code: "KeyM", output: "শ", letter: "M", shift: true },
      N: { code: "KeyN", output: "ষ", letter: "N", shift: true },
      n: { code: "KeyN", output: "স", letter: "N" },
      i: { code: "KeyI", output: "হ", letter: "I" },
      F: { code: "KeyF", output: "অ", letter: "F", shift: true },
      A: { code: "KeyA", output: "র্", letter: "A", shift: true },
      a: { code: "KeyA", output: "ৃ", letter: "A" },
      g: { code: "KeyG", output: "্", letter: "G" },
      "।": { code: "KeyG", output: "।", letter: "G", shift: true },
      d: { code: "KeyD", output: "ি", letter: "D" },
      D: { code: "KeyD", output: "ী", letter: "D", shift: true },
      s: { code: "KeyS", output: "ু", letter: "S" },
      S: { code: "KeyS", output: "ূ", letter: "S", shift: true },
      c: { code: "KeyC", output: "ে", letter: "C" },
      C: { code: "KeyC", output: "ৈ", letter: "C", shift: true },
      f: { code: "KeyF", output: "া", letter: "F" },
      z: { code: "KeyZ", output: "্র", letter: "Z" },
      Z: { code: "KeyZ", output: "্য", letter: "Z", shift: true },
      ",": { code: "Comma", output: ",", letter: "," },
      ".": { code: "Period", output: ".", letter: "." },
      "/": { code: "Slash", output: "/", letter: "/" },
      "?": { code: "Slash", output: "?", letter: "/", shift: true },
      ";": { code: "Semicolon", output: ";", letter: ";" },
      ":": { code: "Semicolon", output: ":", letter: ";", shift: true },
      " ": { code: "Space", output: " ", letter: "Space" },
      x: { code: "KeyX", output: "ও", letter: "X" },
      X: { code: "KeyX", output: "ৗ", letter: "X", shift: true },
      "0": { code: "Digit0", output: "০", letter: "0" },
      "1": { code: "Digit1", output: "১", letter: "1" },
      "2": { code: "Digit2", output: "২", letter: "2" },
      "3": { code: "Digit3", output: "৩", letter: "3" },
      "4": { code: "Digit4", output: "৪", letter: "4" },
      "5": { code: "Digit5", output: "৫", letter: "5" },
      "6": { code: "Digit6", output: "৬", letter: "6" },
      "7": { code: "Digit7", output: "৭", letter: "7" },
      "&": { code: "Digit7", output: "ঁ", letter: "7", shift: true },
      "8": { code: "Digit8", output: "৮", letter: "8" },
      "9": { code: "Digit9", output: "৯", letter: "9" },
      "\\": { code: "Backslash", output: "ৎ", letter: "\\" },
      "|": { code: "Backslash", output: "ঃ", letter: "\\", shift: true }
    };

    const specialKeys = {
      ControlLeft: { code: "ControlLeft", label: "Ctrl" },
      ShiftLeft: { code: "ShiftLeft", label: "Shift" },
      Space: { code: "Space", label: "Space" },
      ShiftRight: { code: "ShiftRight", label: "Shift" },
      ControlRight: { code: "ControlRight", label: "Ctrl" },
      Enter: { code: "Enter", label: "Enter" },
      Backspace: { code: "Backspace", label: "⌫" }
    };

    const keyboardRows = [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "\\"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"],
      ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
      ["ControlLeft", "ShiftLeft", "Space", "ShiftRight", "ControlRight", "Enter", "Backspace"]
    ];

    const makeTarget = (keys, output) => ({ keys, output });
    const consonants = new Set(Array.from("কখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহড়ঢ়য়"));
    const independentVowelKeys = {
      অ: ["F"],
      আ: ["g", "f"],
      ই: ["g", "d"],
      ঈ: ["g", "D"],
      উ: ["g", "s"],
      ঊ: ["g", "S"],
      ঋ: ["g", "a"],
      এ: ["g", "c"],
      ঐ: ["g", "C"],
      ও: ["x"],
      ঔ: ["g", "X"]
    };

    function keyForOutput(output) {
      const keyId = Object.keys(keyInfo).find(candidate => keyInfo[candidate].output === output);
      if (!keyId) throw new Error("No Bijoy key mapping for " + output);
      return keyId;
    }

    function compileBengaliCluster(cluster) {
      const characters = Array.from(cluster);
      if (independentVowelKeys[characters[0]]) {
        return independentVowelKeys[characters[0]].concat(characters.slice(1).map(keyForOutput));
      }
      if (!consonants.has(characters[0])) return characters.map(keyForOutput);

      const clusterConsonants = [];
      const signs = [];
      let trailingVirama = false;
      characters.forEach((character, index) => {
        if (consonants.has(character)) clusterConsonants.push(character);
        else if (character === "্") {
          if (index === characters.length - 1) trailingVirama = true;
        } else {
          signs.push(character);
        }
      });

      const reph = clusterConsonants.length > 1 && clusterConsonants[0] === "র";
      if (reph) clusterConsonants.shift();
      const chain = [keyForOutput(clusterConsonants[0])];
      clusterConsonants.slice(1).forEach(character => {
        if (character === "র") chain.push("z");
        else if (character === "য") chain.push("Z");
        else chain.push("g", keyForOutput(character));
      });

      const preKar = { "ি": "ি", "ে": "ে", "ৈ": "ৈ", "ো": "ে", "ৌ": "ে" };
      const postAfterPreKar = { "ো": "া", "ৌ": "ৗ" };
      const pre = [];
      const post = [];
      signs.forEach(sign => {
        if (preKar[sign]) {
          pre.push(keyForOutput(preKar[sign]));
          if (postAfterPreKar[sign]) post.push(keyForOutput(postAfterPreKar[sign]));
        } else {
          post.push(keyForOutput(sign));
        }
      });

      return [
        ...pre,
        ...chain,
        ...post,
        ...(reph ? ["A"] : []),
        ...(trailingVirama ? ["g"] : [])
      ];
    }

    function makeTextRound(text) {
      const clusters = [];
      const combiningSigns = new Set(Array.from("ঁংঃ়ািীুূৃেৈোৌ্"));
      for (const character of Array.from(text)) {
        if (clusters.length && (combiningSigns.has(character) || clusters[clusters.length - 1].endsWith("্"))) {
          clusters[clusters.length - 1] += character;
        } else {
          clusters.push(character);
        }
      }
      return clusters.map(cluster => makeTarget(compileBengaliCluster(cluster), cluster));
    }

    function makeTextRounds(text) {
      return text.split(/(?<=[।.!?])\s+/u).filter(Boolean).map(makeTextRound);
    }

    const lessons = [
      {
        title: "স্বরবর্ণ: অ, আ, ই, ঈ, উ, ঊ",
        subtitle: "প্রথম ছয়টি স্বরবর্ণ",
        description: "প্রথম ছয়টি স্বরবর্ণের জন্য বিজয় বায়ান্নতে প্রয়োজনীয় কী-গুলো দেখানো ক্রমে চাপুন। কিছু স্বরবর্ণে আগে G, তারপর স্বরচিহ্নের কী চাপতে হয়।",
        keys: ["F", "g", "f", "d", "D", "s", "S"],
        rounds: [
          [makeTarget(["F"], "অ"), makeTarget(["g", "f"], "আ"), makeTarget(["g", "d"], "ই"), makeTarget(["g", "D"], "ঈ"), makeTarget(["g", "s"], "উ"), makeTarget(["g", "S"], "ঊ")],
          [makeTarget(["g", "S"], "ঊ"), makeTarget(["g", "s"], "উ"), makeTarget(["g", "D"], "ঈ"), makeTarget(["g", "d"], "ই"), makeTarget(["g", "f"], "আ"), makeTarget(["F"], "অ")]
        ],
        tip: "অ = Shift + F; আ, ই, ঈ, উ, ঊ-এর আগে G চাপুন"
      },
      {
        title: "স্বরবর্ণ: ঋ, এ, ঐ, ও, ঔ",
        subtitle: "বাকি পাঁচটি স্বরবর্ণ",
        description: "ঋ, এ, ঐ ও ঔ টাইপ করতে আগে G চাপুন, তারপর সংশ্লিষ্ট স্বরচিহ্নের কী। ও সরাসরি X দিয়ে টাইপ হয়।",
        keys: ["g", "a", "c", "C", "x", "X"],
        rounds: [
          [makeTarget(["g", "a"], "ঋ"), makeTarget(["g", "c"], "এ"), makeTarget(["g", "C"], "ঐ"), makeTarget(["x"], "ও"), makeTarget(["g", "X"], "ঔ")],
          [makeTarget(["g", "X"], "ঔ"), makeTarget(["x"], "ও"), makeTarget(["g", "C"], "ঐ"), makeTarget(["g", "c"], "এ"), makeTarget(["g", "a"], "ঋ")]
        ],
        tip: "ও = X; ঋ, এ, ঐ ও ঔ-এর আগে G চাপুন"
      },
      {
        title: "স্বরবর্ণের কার ও ব্যবহার",
        subtitle: "কারচিহ্ন ও শব্দে প্রয়োগ",
        description: "কারচিহ্নের কী শিখুন, তারপর ব্যঞ্জনবর্ণের সঙ্গে কী-গুলো মিলিয়ে কো ও মৌ অনুশীলন করুন।",
        keys: ["a", "f", "d", "D", "s", "S", "c", "C", "X"],
        rounds: [
          [makeTarget(["f"], "া"), makeTarget(["d"], "ি"), makeTarget(["D"], "ী"), makeTarget(["s"], "ু"), makeTarget(["S"], "ূ"), makeTarget(["a"], "ৃ"), makeTarget(["c"], "ে"), makeTarget(["C"], "ৈ"), makeTarget(["X"], "ৗ")],
          [makeTarget(["c", "j", "f"], "কো"), makeTarget(["c", "m", "X"], "মৌ")]
        ],
        tip: "ি/ী = D/Shift + D; ে/ৈ = C/Shift + C; ো ও ৌ ব্যঞ্জনের সঙ্গে গঠিত হয়"
      },
      {
        title: "প্রতিটি স্বরবর্ণের আলাদা অনুশীলন",
        subtitle: "১১টি স্বরবর্ণ আলাদা করে টাইপ করুন",
        description: "প্রতিটি স্বরবর্ণের অনুশীলন আলাদা রাউন্ডে সাজানো। একটি বর্ণ শেষ হলে পরের অনুশীলনে যান।",
        keys: ["F", "g", "f", "d", "D", "s", "S", "a", "c", "C", "x", "X"],
        rounds: [
          [makeTarget(["F"], "অ")],
          [makeTarget(["g", "f"], "আ")],
          [makeTarget(["g", "d"], "ই")],
          [makeTarget(["g", "D"], "ঈ")],
          [makeTarget(["g", "s"], "উ")],
          [makeTarget(["g", "S"], "ঊ")],
          [makeTarget(["g", "a"], "ঋ")],
          [makeTarget(["g", "c"], "এ")],
          [makeTarget(["g", "C"], "ঐ")],
          [makeTarget(["x"], "ও")],
          [makeTarget(["g", "X"], "ঔ")]
        ],
        tip: "পরের অনুশীলন বোতাম দিয়ে একটি করে বর্ণ অনুশীলন করুন"
      },
      {
        title: "ব্যঞ্জনবর্ণ: ক থেকে ণ",
        subtitle: "ক-বর্গ, চ-বর্গ ও ট-বর্গ",
        description: "ক থেকে ণ পর্যন্ত বর্ণগুলোর কী-অবস্থান শিখুন। Shift-সহ বর্ণের ক্ষেত্রে Shift ধরে সংশ্লিষ্ট কী চাপুন।",
        keys: ["j", "J", "o", "O", "q", "y", "Y", "u", "U", "I", "t", "T", "e", "E", "B"],
        rounds: [
          ["j", "J", "o", "O", "q", "y", "Y", "u", "U", "I", "t", "T", "e", "E", "B"],
          ["B", "E", "e", "T", "t", "I", "U", "u", "Y", "y", "q", "O", "o", "J", "j"]
        ],
        tip: "J = ক, Shift + J = খ; T = ট, Shift + T = ঠ"
      },
      {
        title: "ব্যঞ্জনবর্ণ: ত থেকে ন",
        subtitle: "ত-বর্গের অক্ষর",
        description: "ত থেকে ন পর্যন্ত বর্ণগুলোর কী-অবস্থান অনুশীলন করুন। Shift-সহ কী-তে Shift ধরে টাইপ করুন।",
        keys: ["k", "K", "l", "L", "b"],
        rounds: [["k", "K", "l", "L", "b"], ["b", "L", "l", "K", "k"]],
        tip: "K = ত, Shift + K = থ; L = দ, Shift + L = ধ"
      },
      {
        title: "ব্যঞ্জনবর্ণ: প থেকে ম",
        subtitle: "প-বর্গের অক্ষর",
        description: "প থেকে ম পর্যন্ত বর্ণগুলোর কী-অবস্থান শিখুন; ফ ও ভ টাইপ করতে Shift ব্যবহার করুন।",
        keys: ["r", "R", "h", "H", "m"],
        rounds: [["r", "R", "h", "H", "m"], ["m", "H", "h", "R", "r"]],
        tip: "R = প, Shift + R = ফ; H = ব, Shift + H = ভ"
      },
      {
        title: "ব্যঞ্জনবর্ণ: য, র, ল, শ, ষ, স, হ",
        subtitle: "অন্যান্য ব্যঞ্জনবর্ণ",
        description: "য, র, ল, শ, ষ, স ও হ-এর কী-অবস্থান অনুশীলন করুন। ল ও শিফট-সহ ষ-এর জন্য Shift ধরে সংশ্লিষ্ট কী চাপুন।",
        keys: ["w", "v", "V", "M", "N", "n", "i"],
        rounds: [["w", "v", "V", "M", "N", "n", "i"], ["i", "n", "N", "M", "V", "v", "w"]],
        tip: "W = য, V = র, Shift + V = ল; M = শ, Shift + N = ষ"
      },
      {
        title: "বিশেষ বর্ণ ও চিহ্ন: ড়, ঢ়, য়, ং, ঃ, ঁ",
        subtitle: "বিশেষ বর্ণের কী-অবস্থান",
        description: "প্রতিটি বিশেষ বর্ণ ও চিহ্ন আলাদা রাউন্ডে অনুশীলন করুন। প্রতিটি লক্ষ্যচিহ্নের ওপর প্রয়োজনীয় কী বা Shift-সহ কী দেখানো আছে।",
        keys: ["p", "P", "W", "Q", "|", "&"],
        rounds: [
          ["p"],
          ["P"],
          ["W"],
          ["Q"],
          ["|"],
          ["&"]
        ],
        tip: "P = ড়, Shift + P = ঢ়; Shift + W = য়, Shift + Q = ং"
      },
      {
        title: "কার: আ-কার, ই-কার, ঈ-কার",
        subtitle: "া, ি, ী",
        description: "আ-কার, ই-কার ও ঈ-কারের কী-অবস্থান অনুশীলন করুন। প্রতিটি কার আলাদা করে টাইপ করুন।",
        keys: ["f", "d", "D"],
        rounds: [
          [makeTarget(["f"], "া")],
          [makeTarget(["d"], "ি")],
          [makeTarget(["D"], "ী")]
        ],
        tip: "F = া, D = ি, Shift + D = ী"
      },
      {
        title: "কার: উ-কার, ঊ-কার, ঋ-কার",
        subtitle: "ু, ূ, ৃ",
        description: "উ-কার, ঊ-কার ও ঋ-কারের কী-গুলো দেখানো ক্রমে চাপুন।",
        keys: ["s", "S", "a"],
        rounds: [
          [makeTarget(["s"], "ু")],
          [makeTarget(["S"], "ূ")],
          [makeTarget(["a"], "ৃ")]
        ],
        tip: "S = ু, Shift + S = ূ, A = ৃ"
      },
      {
        title: "কার: এ-কার, ঐ-কার, ও-কার, ঔ-কার",
        subtitle: "ে, ৈ, ো, ৌ",
        description: "ে ও ৈ সরাসরি কী-তে আছে। ো ও ৌ লেখার সময় আগে এ-কার, তারপর ব্যঞ্জনবর্ণ এবং শেষে আ-কার বা ঔ-কারের কী চাপুন।",
        keys: ["c", "C", "j", "f", "X"],
        rounds: [
          [makeTarget(["c"], "ে")],
          [makeTarget(["C"], "ৈ")],
          [makeTarget(["c", "j", "f"], "কো")],
          [makeTarget(["c", "j", "X"], "কৌ")]
        ],
        tip: "কো = C → J → F; কৌ = C → J → Shift + X"
      },
      {
        title: "রেফ, র-ফলা ও য-ফলা",
        subtitle: "র্, ্র, ্য",
        description: "শিফট+A দিয়ে রেফ, Z দিয়ে র-ফলা এবং Shift+Z দিয়ে য-ফলা অনুশীলন করুন। প্রতিটি যুক্তরূপ গঠনের সম্পূর্ণ কী-ক্রম দেখানো আছে।",
        keys: ["j", "A", "z", "Z"],
        rounds: [
          [makeTarget(["j", "A"], "র্ক")],
          [makeTarget(["j", "z"], "ক্র")],
          [makeTarget(["j", "Z"], "ক্য")]
        ],
        tip: "র্ক = J → Shift + A; ক্র = J → Z; ক্য = J → Shift + Z"
      },
      {
        title: "ব-ফলা ও ম-ফলা",
        subtitle: "্ব, ্ম",
        description: "হসন্তসহ ব ও ম যোগ করে ব-ফলা এবং ম-ফলা অনুশীলন করুন।",
        keys: ["j", "g", "h", "m"],
        rounds: [
          [makeTarget(["j", "g", "h"], "ক্ব")],
          [makeTarget(["j", "g", "m"], "ক্ম")]
        ],
        tip: "ক্ব = J → G → H; ক্ম = J → G → M"
      },
      {
        title: "চিহ্ন: হসন্ত ও চন্দ্রবিন্দু",
        subtitle: "্ ও ঁ",
        description: "হসন্তের G কী এবং Shift+7-এ থাকা চন্দ্রবিন্দু আলাদাভাবে অনুশীলন করুন।",
        keys: ["g", "&"],
        rounds: [
          [makeTarget(["g"], "্")],
          [makeTarget(["&"], "ঁ")]
        ],
        tip: "G = ্; Shift + 7 = ঁ"
      },
      {
        title: "যুক্তবর্ণ: ক্ত, ক্ষ, জ্ঞ, ত্র, শ্র",
        subtitle: "পরিচিত যুক্তবর্ণ",
        description: "প্রতিটি যুক্তবর্ণের সম্পূর্ণ কী-ক্রম দেখানো আছে। হসন্তের G দিয়ে ব্যঞ্জনগুলো জুড়ে টাইপ করুন; র-ফলার জন্য Z ব্যবহার করুন।",
        keys: ["j", "g", "k", "N", "u", "I", "z", "M"],
        rounds: [
          [
            makeTarget(["j", "g", "k"], "ক্ত"),
            makeTarget(["j", "g", "N"], "ক্ষ"),
            makeTarget(["u", "g", "I"], "জ্ঞ"),
            makeTarget(["k", "z"], "ত্র"),
            makeTarget(["M", "z"], "শ্র")
          ],
          [
            makeTarget(["M", "z"], "শ্র"),
            makeTarget(["k", "z"], "ত্র"),
            makeTarget(["u", "g", "I"], "জ্ঞ"),
            makeTarget(["j", "g", "N"], "ক্ষ"),
            makeTarget(["j", "g", "k"], "ক্ত")
          ]
        ],
        tip: "ক্ত = J → G → K; ক্ষ = J → G → Shift + N; ত্র = K → Z"
      },
      {
        title: "যুক্তবর্ণ: ঙ্ক, ঙ্গ, ঞ্চ, ঞ্জ",
        subtitle: "ঙ ও ঞ-যুক্ত বর্ণ",
        description: "ঙ বা ঞ দিয়ে শুরু হওয়া যুক্তবর্ণগুলো অনুশীলন করুন। Shift-সহ ঞ-এর কী আগে, তারপর G ও পরের ব্যঞ্জন চাপুন।",
        keys: ["q", "g", "j", "o", "I", "y", "u"],
        rounds: [
          [
            makeTarget(["q", "g", "j"], "ঙ্ক"),
            makeTarget(["q", "g", "o"], "ঙ্গ"),
            makeTarget(["I", "g", "y"], "ঞ্চ"),
            makeTarget(["I", "g", "u"], "ঞ্জ")
          ],
          [
            makeTarget(["I", "g", "u"], "ঞ্জ"),
            makeTarget(["I", "g", "y"], "ঞ্চ"),
            makeTarget(["q", "g", "o"], "ঙ্গ"),
            makeTarget(["q", "g", "j"], "ঙ্ক")
          ]
        ],
        tip: "ঙ্ক = Q → G → J; ঞ্চ = Shift + I → G → Y"
      },
      {
        title: "যুক্তবর্ণ: ষ্ট, ষ্ঠ, দ্ধ, ন্ত",
        subtitle: "জটিল যুক্তবর্ণের অনুশীলন",
        description: "ষ, দ ও ন-এর সঙ্গে হসন্ত দিয়ে যুক্তবর্ণ তৈরি করুন। বাড়তি অনুশীলনে ন্দ, ন্ধ, স্ত, ম্প এবং কয়েকটি দীর্ঘ যুক্তক্রমও আছে।",
        keys: ["N", "g", "t", "T", "l", "L", "b", "k", "n", "m", "r", "z", "q", "j"],
        rounds: [
          [
            makeTarget(["N", "g", "t"], "ষ্ট"),
            makeTarget(["N", "g", "T"], "ষ্ঠ"),
            makeTarget(["l", "g", "L"], "দ্ধ"),
            makeTarget(["b", "g", "k"], "ন্ত")
          ],
          [
            makeTarget(["b", "g", "l"], "ন্দ"),
            makeTarget(["b", "g", "L"], "ন্ধ"),
            makeTarget(["n", "g", "k"], "স্ত"),
            makeTarget(["m", "g", "r"], "ম্প")
          ],
          [
            makeTarget(["j", "g", "k", "z"], "ক্ত্র"),
            makeTarget(["b", "g", "k", "z"], "ন্ত্র"),
            makeTarget(["q", "g", "j", "g", "N"], "ঙ্ক্ষ")
          ]
        ],
        tip: "ষ্ট = Shift + N → G → T; দ্ধ = L → G → Shift + L"
      },
      {
        title: "যুক্তবর্ণ দিয়ে ইসলামিক শব্দ",
        subtitle: "শব্দ গঠনে যুক্তবর্ণ",
        description: "আল্লাহ, মুহাম্মদ ও সুন্নাহর মতো ইসলামিক শব্দগুলো অংশ ধরে টাইপ করুন। প্রতিটি অংশের জন্য বিজয় কী-ক্রম দেখানো আছে।",
        keys: ["g", "f", "v", "V", "i", "m", "s", "n", "b", "j", "h", "l", "k", "d", "u", "x"],
        rounds: [
          [
            makeTarget(["g", "f"], "আ"),
            makeTarget(["V", "g", "V", "f"], "ল্লা"),
            makeTarget(["i"], "হ")
          ],
          [
            makeTarget(["m", "s"], "মু"),
            makeTarget(["i", "f"], "হা"),
            makeTarget(["m", "g", "m"], "ম্ম"),
            makeTarget(["l"], "দ")
          ],
          [
            makeTarget(["n", "s"], "সু"),
            makeTarget(["b", "g", "b", "f"], "ন্না"),
            makeTarget(["i"], "হ")
          ],
          [
            makeTarget(["g", "d"], "ই"),
            makeTarget(["h", "f"], "বা"),
            makeTarget(["l"], "দ"),
            makeTarget(["k"], "ত")
          ],
          [
            makeTarget(["j", "s"], "কু"),
            makeTarget(["v"], "র"),
            makeTarget(["g", "f"], "আ"),
            makeTarget(["b"], "ন")
          ],
          [
            makeTarget(["k", "f", "x"], "তাও"),
            makeTarget(["h", "f"], "বা")
          ],
          [
            makeTarget(["m"], "ম"),
            makeTarget(["n"], "স"),
            makeTarget(["d", "u"], "জি"),
            makeTarget(["l"], "দ")
          ],
          [
            makeTarget(["g", "d"], "ই"),
            makeTarget(["n"], "স"),
            makeTarget(["V", "f"], "লা"),
            makeTarget(["m"], "ম")
          ],
          [
            makeTarget(["n", "f"], "সা"),
            makeTarget(["V", "f"], "লা"),
            makeTarget(["m"], "ম")
          ]
        ],
        tip: "মুহাম্মদ = মু + হা + ম্ম + দ; সুন্নাহ = সু + ন্না + হ"
      },
      {
        title: "শব্দ ও বাক্য: ছোট-বড় শব্দ",
        subtitle: "এক ও একাধিক অক্ষরের শব্দ",
        description: "এক অক্ষরের স্বরবর্ণ থেকে শুরু করে ইসলামি ইতিহাস ও ঐতিহ্যের সঙ্গে সম্পর্কিত বড় শব্দ পর্যন্ত টাইপ করুন।",
        keys: ["F", "g", "f", "d", "m", "s", "b", "l", "v", "p", "y", "M", "N", "i"],
        rounds: [
          makeTextRound("ই"),
          makeTextRound("ও"),
          makeTextRound("ঈমান"),
          makeTextRound("বদর"),
          makeTextRound("মদিনা"),
          makeTextRound("ইতিহাস"),
          makeTextRound("ছাত্র"),
          makeTextRound("শিবির")
        ],
        tip: "প্রতিটি কার্ডে একটি বর্ণ বা যুক্তবর্ণের কী-ক্রম দেখানো আছে"
      },
      {
        title: "শব্দ ও বাক্য: পরিচিত শব্দ",
        subtitle: "পরিচিত শব্দ টাইপিং অনুশীলন",
        description: "ইসলামি ইতিহাস-ঐতিহ্য, শিক্ষার্থী ও ইসলামী ছাত্রশিবির-সম্পর্কিত পরিচিত শব্দগুলো আলাদা অনুশীলনে টাইপ করুন।",
        keys: ["F", "g", "f", "d", "S", "c", "C", "M", "N", "i", "j", "J", "p", "W"],
        rounds: [
          makeTextRound("ইসলামের ইতিহাস"),
          makeTextRound("মুসলিম ঐতিহ্য"),
          makeTextRound("জ্ঞানচর্চা"),
          makeTextRound("শিক্ষার্থী"),
          makeTextRound("ছাত্রসংগঠন"),
          makeTextRound("ইসলামী ছাত্রশিবির")
        ],
        tip: "স্পেসও একটি কী—শব্দের মাঝখানে Space চাপুন"
      },
      {
        title: "শব্দ ও বাক্য: ছোট বাক্য",
        subtitle: "ছোট বাক্য টাইপিং অনুশীলন",
        description: "ইসলামি ইতিহাস-ঐতিহ্য ও ছাত্রসংগঠন নিয়ে নিরপেক্ষ ছোট বাক্য টাইপ করুন। প্রতিটি বাক্য একটি আলাদা অনুশীলন।",
        keys: ["F", "g", "f", "d", "s", "S", "c", "C", "M", "N", "i", "j", "J", "p", "W"],
        rounds: makeTextRounds([
          "ইসলামের ইতিহাসে জ্ঞানচর্চার ঐতিহ্য আছে।",
          "মদিনা ইসলামী ইতিহাসের একটি নগরী।",
          "বাংলাদেশ ইসলামী ছাত্রশিবির একটি ছাত্রসংগঠন।",
          "শিক্ষার্থীরা বই পড়ে, আলোচনা করে।"
        ].join(" ")),
        tip: "বাক্যের শেষে দাঁড়ি, আর তালিকায় কমা ব্যবহার করুন"
      },
      {
        title: "শব্দ ও বাক্য: অনুচ্ছেদ",
        subtitle: "অনুচ্ছেদ টাইপিং অনুশীলন",
        description: "ইসলামি ইতিহাস, শিক্ষা এবং ইসলামী ছাত্রশিবির সম্পর্কে নিরপেক্ষ একটি অনুচ্ছেদ টাইপ করুন। অনুচ্ছেদটি বাক্য ধরে কয়েকটি রাউন্ডে ভাগ করা।",
        keys: ["F", "g", "f", "d", "s", "S", "c", "C", "M", "N", "i", "j", "J", "p", "W", "v"],
        rounds: makeTextRounds([
          "ইসলামের ইতিহাসে মক্কা ও মদিনার বিশেষ স্থান আছে।",
          "বাংলাদেশ ইসলামী ছাত্রশিবির একটি ছাত্রসংগঠন।",
          "ইতিহাস ও কার্যক্রম জানতে বিভিন্ন নির্ভরযোগ্য সূত্র পড়া যায়।"
        ].join(" ")),
        tip: "একটি বাক্য শেষ করে পরের অনুশীলনে যান; শব্দের মাঝে স্পেস দিন"
      },
      {
        title: "শব্দ ও বাক্য: বিরামচিহ্ন ও স্পেস",
        subtitle: "কমা, দাঁড়ি, কোলন ও প্রশ্নচিহ্ন",
        description: "বাংলা বাক্যে শব্দের মাঝে স্পেস, তালিকায় কমা, বাক্যের শেষে দাঁড়ি এবং প্রশ্নে কোলন ও প্রশ্নচিহ্ন ব্যবহার অনুশীলন করুন।",
        keys: ["F", "g", "f", "d", "s", "S", "c", "C", "M", "N", "i", "j", "J", "p", "W", ",", ".", ":", "?", " "],
        rounds: makeTextRounds([
          "ইতিহাস, ঐতিহ্য ও শিক্ষা।",
          "প্রশ্ন: ইসলামের ইতিহাস কোথায় পড়ব?",
          "ইসলামী ছাত্রশিবির একটি ছাত্রসংগঠন।",
          "শব্দের মাঝে স্পেস দিন, বাক্যের শেষে দাঁড়ি দিন।"
        ].join(" ")),
        tip: "কমা = ,; কোলন = Shift + ;; প্রশ্নচিহ্ন = Shift + /; দাঁড়ি = Shift + G"
      },
      {
        title: "বাংলা সংখ্যা: ০ থেকে ৯",
        subtitle: "সংখ্যার কী",
        description: "কিবোর্ডের ০–৯ সংখ্যার কী-গুলো চাপুন। প্রতিটি কী-র বাংলা সংখ্যা দেখে অনুশীলন সম্পন্ন করুন।",
        keys: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
        rounds: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], ["0", "9", "8", "7", "6", "5", "4", "3", "2", "1"]],
        tip: "1 = ১, 2 = ২, 3 = ৩ … 0 = ০"
      },
      {
        title: "চূড়ান্ত টাইপিং পরীক্ষা",
        subtitle: "সময়, গতি, নির্ভুলতা ও সার্টিফিকেট",
        description: "তিন মিনিটের পরীক্ষায় ইসলাম, ইসলামের ইতিহাস, স্থাপত্য, গ্রন্থাগার, নবীদের কাহিনি, মনীষীদের জীবনী, বাংলাদেশ অথবা ইসলামী ছাত্রশিবির বিষয়ে একটি অনুচ্ছেদ টাইপ করুন। প্রতিবার নতুন পরীক্ষা শুরু হলে বিষয় এলোমেলোভাবে বেছে নেওয়া হবে।",
        exam: true,
        rounds: [[]],
        tip: "সময় শুরু হবে “পরীক্ষা শুরু করুন” চাপার সঙ্গে"
      }
    ];

    const examDurationSeconds = 180;
    const examTopics = [
      {
        title: "ইসলাম ও জ্ঞানচর্চা",
        text: "ইসলামে জ্ঞান অর্জন, চিন্তা এবং ন্যায়বোধের গুরুত্বের কথা বলা হয়েছে। কুরআন পাঠ, শিক্ষা ও মানুষের কল্যাণ নিয়ে আলোচনা মুসলিম সমাজের নানা সময়ে জ্ঞানচর্চাকে এগিয়ে নিয়েছে। পরিবার, বিদ্যালয় ও গ্রন্থাগার শিক্ষার্থীদের পড়ার অভ্যাস গড়ে তুলতে সহায়তা করে। কোনো বিষয় বুঝতে একাধিক নির্ভরযোগ্য বই ও সূত্র দেখা ভালো।"
      },
      {
        title: "ইসলামের ইতিহাস",
        text: "ইসলামের ইতিহাসে হিজরত একটি গুরুত্বপূর্ণ অধ্যায়। মক্কা থেকে মদিনায় মুসলমানদের যাত্রার পর সেখানে নতুন সমাজ গড়ে ওঠে। মদিনার সনদ বিভিন্ন গোষ্ঠীর পারস্পরিক দায়িত্ব ও সহাবস্থানের কথা স্মরণ করায়। ইতিহাস পড়ার সময় ঘটনার সময়কাল, স্থান এবং প্রাথমিক সূত্র খেয়াল করা দরকার।"
      },
      {
        title: "ইসলামী স্থাপত্য",
        text: "ইসলামী স্থাপত্যে মসজিদ, বিদ্যালয়, উদ্যান ও জনসেবার ভবন দেখা যায়। গম্বুজ, খিলান, উঠান এবং জ্যামিতিক নকশা অনেক স্থাপনায় ব্যবহৃত হয়েছে। মক্কার মসজিদুল হারাম ও মদিনার মসজিদে নববী মুসলিমদের কাছে বিশেষ গুরুত্বপূর্ণ। বিভিন্ন অঞ্চলের নির্মাণশৈলী স্থানীয় উপকরণ ও সংস্কৃতির প্রভাবও বহন করে।"
      },
      {
        title: "ইসলামী গ্রন্থাগার",
        text: "বাগদাদের বাইতুল হিকমা জ্ঞানচর্চা ও অনুবাদের ইতিহাসে পরিচিত একটি প্রতিষ্ঠান। বিভিন্ন ভাষার বই অনুবাদ, সংরক্ষণ এবং অধ্যয়নের মাধ্যমে পণ্ডিতেরা জ্ঞানের আদানপ্রদান করেছেন। ফেজের কারাওইয়িন গ্রন্থাগারও বহু পুরোনো পাণ্ডুলিপি সংরক্ষণের জন্য পরিচিত। গ্রন্থাগার বই পড়ার পাশাপাশি গবেষণা ও প্রশ্ন করার সুযোগ তৈরি করে।"
      },
      {
        title: "নবীদের কাহিনি",
        text: "ধর্মীয় বর্ণনায় নবী নূহের কাহিনি ধৈর্য ও দায়িত্বের শিক্ষা দেয়। তিনি দীর্ঘদিন মানুষকে সৎ পথে আহ্বান করেছিলেন। বর্ণনা অনুযায়ী, মহাপ্লাবনের আগে তিনি নৌকা নির্মাণ করেন এবং বিশ্বাসীদের সঙ্গে সেখানে আশ্রয় নেন। নবীদের কাহিনি পড়ার সময় তার শিক্ষা, প্রেক্ষাপট এবং বিভিন্ন গ্রন্থের বর্ণনা মনোযোগ দিয়ে বুঝে নেওয়া যায়।"
      },
      {
        title: "মুসলিম মনীষীদের জীবনী",
        text: "মুসলিম মনীষী আল খাওয়ারিজমি গণিত ও জ্যোতির্বিদ্যায় অবদান রেখেছেন। ইবনে সিনা চিকিৎসাবিদ্যা ও দর্শনের জন্য পরিচিত। আল বিরুনি ইতিহাস, ভূগোল এবং বিভিন্ন সমাজের জ্ঞান নিয়ে কাজ করেছেন। তাঁদের জীবন থেকে অধ্যবসায়, পর্যবেক্ষণ এবং প্রশ্ন করার অভ্যাস সম্পর্কে জানা যায়। তাঁদের রচনার অনুবাদ বহু অঞ্চলের শিক্ষার্থীদের কাছে পৌঁছেছে।"
      },
      {
        title: "ইসলামী ছাত্রশিবির",
        text: "বাংলাদেশ ইসলামী ছাত্রশিবির বাংলাদেশের একটি ছাত্রসংগঠন। সংগঠন ও শিক্ষার্থী রাজনীতি নিয়ে লিখতে হলে প্রতিষ্ঠানের নিজস্ব প্রকাশনা, সংবাদমাধ্যম এবং গবেষণার সূত্র আলাদা করে দেখা প্রয়োজন। কোনো সংগঠনের কার্যক্রম, ইতিহাস ও মতামত নিরপেক্ষভাবে তুলে ধরতে যাচাই করা তথ্য এবং বিভিন্ন পক্ষের বক্তব্য ব্যবহার করা উচিত। পাঠকও সূত্র মিলিয়ে নিজের সিদ্ধান্ত নিতে পারেন।"
      },
      {
        title: "বাংলাদেশের ইতিহাস ও ঐতিহ্য",
        text: "বাংলাদেশ নদী, ভাষা ও সংস্কৃতির বৈচিত্র্যে সমৃদ্ধ একটি দেশ। ১৯৫২ সালের ভাষা আন্দোলন এবং ১৯৭১ সালের মুক্তিযুদ্ধ দেশের ইতিহাসে গুরুত্বপূর্ণ অধ্যায়। গ্রাম, নগর, পাহাড় ও উপকূলের মানুষের জীবনযাত্রায় নানা পার্থক্য আছে। জাদুঘর, গ্রন্থাগার এবং স্থানীয় প্রবীণদের স্মৃতিচারণ থেকে ইতিহাস ও ঐতিহ্য সম্পর্কে জানা যায়।"
      },
      {
        title: "ইসলামের ইতিহাসের পাঠাগার",
        text: "ইতিহাসের বই অতীতের ঘটনা, মানুষের জীবন এবং সমাজের পরিবর্তন বুঝতে সাহায্য করে। মুসলিম বিশ্বের বিভিন্ন নগরে বই সংগ্রহ ও পাঠের কেন্দ্র গড়ে উঠেছিল। পাণ্ডুলিপি অনুলিখন, অনুবাদ এবং সংরক্ষণে বহু লেখক ও পাঠকের শ্রম ছিল। আজকের শিক্ষার্থীরা মুদ্রিত বইয়ের পাশাপাশি ডিজিটাল সংগ্রহও ব্যবহার করতে পারে। তবে তথ্য উদ্ধৃতির আগে প্রকাশক ও সূত্র যাচাই করা জরুরি।"
      }
    ];
    const compiledExamTopics = examTopics.map(topic => ({ ...topic, targets: makeTextRound(topic.text) }));

    const bengaliDigits = "০১২৩৪৫৬৭৮৯";
    const storageKey = "bijoyTypingCompletedLessonsV8";
    const selectedLessonKey = "bijoyTypingSelectedLessonV8";
    const previousStorageKey = "bijoyTypingCompletedLessonsV7";
    const previousSelectedLessonKey = "bijoyTypingSelectedLessonV7";
    const older3StorageKey = "bijoyTypingCompletedLessonsV6";
    const older3SelectedLessonKey = "bijoyTypingSelectedLessonV6";
    const olderStorageKey = "bijoyTypingCompletedLessonsV5";
    const olderSelectedLessonKey = "bijoyTypingSelectedLessonV5";
    const older2StorageKey = "bijoyTypingCompletedLessonsV4";
    const older2SelectedLessonKey = "bijoyTypingSelectedLessonV4";
    const oldestStorageKey = "bijoyTypingCompletedLessonsV3";
    const oldestSelectedLessonKey = "bijoyTypingSelectedLessonV3";
    const lessonList = document.querySelector("#lesson-list");
    const lessonMenu = document.querySelector("#lesson-menu");
    const lessonMenuToggle = document.querySelector("#lesson-menu-toggle");
    const lessonTitle = document.querySelector("#lesson-title");
    const lessonDescription = document.querySelector("#lesson-description");
    const lessonStep = document.querySelector("#lesson-step");
    const lessonMeta = document.querySelector("#lesson-meta");
    const lessonPanel = document.querySelector(".lesson-panel");
    const targetKeys = document.querySelector("#target-keys");
    const feedback = document.querySelector("#feedback");
    const typedPreview = document.querySelector("#typed-preview");
    const roundIndicator = document.querySelector("#round-indicator");
    const roundTitle = document.querySelector("#round-title");
    const practiceCard = document.querySelector(".practice-card");
    const keyboard = document.querySelector("#keyboard");
    const completion = document.querySelector("#completion");
    const nextLessonButton = document.querySelector("#next-lesson");
    const previousRoundButton = document.querySelector("#previous-round");
    const nextRoundButton = document.querySelector("#next-round");
    const courseCount = document.querySelector("#course-count");
    const progressTrack = document.querySelector(".progress-track");
    const courseProgress = document.querySelector("#course-progress");
    const headerProgress = document.querySelector("#header-progress");
    const completionMessage = document.querySelector("#completion-message");
    const completionBanner = document.querySelector("#completion-banner-overlay");
    const completionBannerClose = document.querySelector("#completion-banner-close");
    const sessionTime = document.querySelector("#session-time");
    const sessionAccuracy = document.querySelector("#session-accuracy");
    const sessionSpeed = document.querySelector("#session-speed");
    const examPanel = document.querySelector("#exam-panel");
    const examIntro = document.querySelector("#exam-intro");
    const examActive = document.querySelector("#exam-active");
    const examResult = document.querySelector("#exam-result");
    const examStudentName = document.querySelector("#exam-student-name");
    const examPassage = document.querySelector("#exam-passage");
    const examTyped = document.querySelector("#exam-typed");
    const examTopicLabel = document.querySelector("#exam-topic");
    const examCountdown = document.querySelector("#exam-countdown");
    const examTimer = document.querySelector("#exam-timer");
    const examTimerProgress = document.querySelector("#exam-timer-progress");
    const examLiveWpm = document.querySelector("#exam-live-wpm");
    const examLiveAccuracy = document.querySelector("#exam-live-accuracy");
    const examLiveErrors = document.querySelector("#exam-live-errors");
    const examHint = document.querySelector("#exam-hint");
    const examResultTitle = document.querySelector("#exam-result-title");
    const examResultTopic = document.querySelector("#exam-result-topic");
    const examResultWpm = document.querySelector("#exam-result-wpm");
    const examResultAccuracy = document.querySelector("#exam-result-accuracy");
    const examResultErrors = document.querySelector("#exam-result-errors");
    const examResultScore = document.querySelector("#exam-result-score");
    const examCertificate = document.querySelector("#exam-certificate");
    const certificateName = document.querySelector("#certificate-name");
    const certificateTopic = document.querySelector("#certificate-topic");
    const certificateWpm = document.querySelector("#certificate-wpm");
    const certificateAccuracy = document.querySelector("#certificate-accuracy");
    const certificateErrors = document.querySelector("#certificate-errors");
    const certificateScore = document.querySelector("#certificate-score");
    const certificateDate = document.querySelector("#certificate-date");
    const courseNavButtons = [...document.querySelectorAll(".course-nav-button")];
    const courseSectionStarts = courseNavButtons.map(button => Number(button.dataset.lessonStart));

    let progressStorageAvailable = true;
    let activeLesson = loadSelectedLesson();
    let roundIndex = 0;
    let roundStates = lessons[activeLesson].rounds.map(createRoundState);
    let attempts = 0;
    let correctKeys = 0;
    let startedAt = null;
    let sessionInterval = null;
    let lessonAdvanceTimer = null;
    let completionBannerTimer = null;
    let completionBannerHideTimer = null;
    let completedLessons = loadCompletedLessons();
    let examState = null;
    let examInterval = null;
    let examAudioContext = null;
    let examAudioResumePromise = null;
    let lastExamTopicIndex = -1;

    function toBengaliDigits(value) {
      return String(value).replace(/\d/g, digit => bengaliDigits[digit]);
    }

    function createRoundState() {
      return { keyIndex: 0, stepIndex: 0, mistakes: 0, output: "", complete: false };
    }

    function hideCompletionBanner() {
      clearTimeout(completionBannerTimer);
      completionBannerTimer = null;
      if (completionBanner.hidden) return;
      completionBanner.classList.remove("is-visible");
      clearTimeout(completionBannerHideTimer);
      completionBannerHideTimer = setTimeout(() => {
        completionBanner.hidden = true;
        completionBanner.setAttribute("aria-hidden", "true");
        completionBannerHideTimer = null;
      }, 600);
    }

    function showCompletionBanner() {
      clearTimeout(completionBannerTimer);
      clearTimeout(completionBannerHideTimer);
      completionBannerTimer = null;
      completionBannerHideTimer = null;
      completionBanner.hidden = false;
      completionBanner.setAttribute("aria-hidden", "false");
      requestAnimationFrame(() => completionBanner.classList.add("is-visible"));
      completionBannerTimer = setTimeout(hideCompletionBanner, 2500);
    }

    function currentRoundState() {
      return roundStates[roundIndex];
    }

    function renderTypingOutput(element, output, pendingOutput) {
      element.replaceChildren();
      if (output) element.appendChild(document.createTextNode(output));
      else if (!pendingOutput) element.appendChild(document.createTextNode(" "));
      if (pendingOutput) {
        const pending = document.createElement("span");
        pending.className = "typing-pending";
        pending.textContent = pendingOutput;
        pending.setAttribute("aria-label", "এ পর্যন্ত চাপা কী-র মান");
        element.appendChild(pending);
      }
    }

    function getRoundTargets(round) {
      return round.map(target => typeof target === "string"
        ? makeTarget([target], keyInfo[target].output)
        : target
      );
    }

    function loadSelectedLesson() {
      try {
        const savedSelection = localStorage.getItem(selectedLessonKey);
        const previousSelectionKey = savedSelection === null
          ? [previousSelectedLessonKey, older3SelectedLessonKey, olderSelectedLessonKey, older2SelectedLessonKey, oldestSelectedLessonKey]
            .find(key => localStorage.getItem(key) !== null)
          : null;
        const previousSelection = previousSelectionKey ? localStorage.getItem(previousSelectionKey) : null;
        const previousIndex = Number(previousSelection);
        const previousLastIndex = previousSelectionKey === previousSelectedLessonKey ? 24
          : previousSelectionKey === older3SelectedLessonKey ? 19
            : previousSelectionKey === olderSelectedLessonKey ? 18
              : previousSelectionKey === older2SelectedLessonKey ? 15 : 9;
        const selected = Number(savedSelection === null && previousSelection !== null
          ? previousIndex === previousLastIndex ? lessons.length - 2 : previousIndex
          : savedSelection);
        if (savedSelection === null && previousSelection !== null && Number.isInteger(selected) && selected >= 0 && selected < lessons.length) {
          try {
            localStorage.setItem(selectedLessonKey, String(selected));
          } catch (error) {
            progressStorageAvailable = false;
            console.error("Could not migrate the selected lesson.", error);
          }
        }
        return Number.isInteger(selected) && selected >= 0 && selected < lessons.length ? selected : 0;
      } catch (error) {
        progressStorageAvailable = false;
        console.error("Could not read the selected lesson.", error);
        return 0;
      }
    }

    function saveSelectedLesson() {
      try {
        localStorage.setItem(selectedLessonKey, String(activeLesson));
      } catch (error) {
        progressStorageAvailable = false;
        console.error("Could not save the selected lesson.", error);
      }
    }

    function loadCompletedLessons() {
      try {
        const savedProgress = localStorage.getItem(storageKey);
        const previousProgressKey = savedProgress === null
          ? [previousStorageKey, older3StorageKey, olderStorageKey, older2StorageKey, oldestStorageKey]
            .find(key => localStorage.getItem(key) !== null)
          : null;
        const previousProgress = previousProgressKey ? localStorage.getItem(previousProgressKey) : null;
        const previousLastIndex = previousProgressKey === previousStorageKey ? 24
          : previousProgressKey === older3StorageKey ? 19
            : previousProgressKey === olderStorageKey ? 18
              : previousProgressKey === older2StorageKey ? 15 : 9;
        const saved = JSON.parse(savedProgress === null ? previousProgress || "[]" : savedProgress);
        const completed = Array.isArray(saved)
          ? [...new Set(saved.map(index => previousProgress !== null && index === previousLastIndex ? lessons.length - 2 : index)
            .filter(index => Number.isInteger(index) && index >= 0 && index < lessons.length && !lessons[index].exam))]
          : [];
        if (savedProgress === null && previousProgress !== null) {
          try {
            localStorage.setItem(storageKey, JSON.stringify(completed));
          } catch (error) {
            progressStorageAvailable = false;
            console.error("Could not migrate saved lesson progress.", error);
          }
        }
        return completed;
      } catch (error) {
        progressStorageAvailable = false;
        console.error("Could not read saved lesson progress.", error);
        return [];
      }
    }

    function saveCompletedLessons() {
      try {
        localStorage.setItem(storageKey, JSON.stringify(completedLessons));
      } catch (error) {
        progressStorageAvailable = false;
        console.error("Could not save lesson progress.", error);
        if (lessons[activeLesson].exam && examState?.finished) {
          examResultTopic.textContent += " · অগ্রগতি সংরক্ষণ করা যায়নি";
        } else {
          feedback.textContent = "এই ব্রাউজারে অগ্রগতি সংরক্ষণ করা যায়নি। তবে এখনকার পাঠ চালিয়ে যেতে পারবেন।";
          feedback.className = "feedback error";
        }
      }
    }

    function updateSessionStats() {
      const elapsedSeconds = startedAt ? Math.floor((Date.now() - startedAt) / 1000) : 0;
      const minutes = Math.floor(elapsedSeconds / 60);
      const seconds = elapsedSeconds % 60;
      sessionTime.textContent = toBengaliDigits(String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0"));
      sessionAccuracy.textContent = toBengaliDigits(attempts ? Math.round(correctKeys / attempts * 100) : 100) + "%";
      sessionSpeed.textContent = toBengaliDigits(elapsedSeconds ? Math.round(correctKeys * 60 / elapsedSeconds) : correctKeys ? correctKeys * 60 : 0);
    }

    function startSessionTimer() {
      prepareExamAudio();
      if (startedAt) return;
      startedAt = Date.now();
      sessionInterval = setInterval(updateSessionStats, 1000);
    }

    function resetSessionStats() {
      clearInterval(sessionInterval);
      sessionInterval = null;
      startedAt = null;
      attempts = 0;
      correctKeys = 0;
      updateSessionStats();
    }

    function renderExamPanel() {
      examIntro.hidden = Boolean(examState);
      examActive.hidden = !examState || examState.finished;
      examResult.hidden = !examState || !examState.finished;
      examCertificate.hidden = !examState || !examState.finished;
      if (!examState) {
        examTyped.textContent = "";
        examCountdown.textContent = "০৩:০০";
        keyboard.querySelectorAll(".visual-key").forEach(button => button.classList.remove("is-current"));
      }
    }

    function chooseExamTopic() {
      const available = compiledExamTopics.map((topic, index) => index).filter(index => index !== lastExamTopicIndex);
      const chosenIndex = available[Math.floor(Math.random() * available.length)];
      lastExamTopicIndex = chosenIndex;
      return compiledExamTopics[chosenIndex];
    }

    function prepareExamAudio() {
      const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextConstructor) {
        console.error("Web Audio is not supported in this browser.");
        if (lessons[activeLesson].exam) {
          examHint.textContent = "এই ব্রাউজারে সাউন্ড সমর্থিত নয়।";
        } else {
          feedback.textContent = "এই ব্রাউজারে সাউন্ড সমর্থিত নয়।";
          feedback.className = "feedback error";
        }
        return Promise.resolve(null);
      }
      try {
        if (!examAudioContext) examAudioContext = new AudioContextConstructor();
        if (examAudioContext.state === "running") return Promise.resolve(examAudioContext);
        if (examAudioResumePromise) return examAudioResumePromise;
        examAudioResumePromise = Promise.resolve(examAudioContext.resume())
          .then(() => {
            if (examAudioContext.state !== "running") {
              throw new Error("AudioContext did not enter the running state.");
            }
            return examAudioContext;
          })
          .catch(error => {
            console.error("Could not enable typing audio.", error);
            if (lessons[activeLesson].exam) {
              examHint.textContent = "সাউন্ড চালু হয়নি। ব্রাউজারের অডিও অনুমতি ও ভলিউম পরীক্ষা করুন।";
            } else {
              feedback.textContent = "সাউন্ড চালু হয়নি। ব্রাউজারের অডিও অনুমতি ও ভলিউম পরীক্ষা করুন।";
              feedback.className = "feedback error";
            }
            return null;
          })
          .then(context => {
            examAudioResumePromise = null;
            return context;
          });
        return examAudioResumePromise;
      } catch (error) {
        console.error("Could not initialize typing audio.", error);
        if (lessons[activeLesson].exam) {
          examHint.textContent = "সাউন্ড চালু করা যায়নি।";
        } else {
          feedback.textContent = "সাউন্ড চালু করা যায়নি।";
          feedback.className = "feedback error";
        }
        return Promise.resolve(null);
      }
    }

    function playExamTone(frequency, duration, delay = 0, type = "sine") {
      if (!examAudioContext) return;
      if (examAudioContext.state !== "running") {
        prepareExamAudio().then(context => {
          if (context) playExamTone(frequency, duration, delay, type);
        });
        return;
      }
      try {
        const startAt = examAudioContext.currentTime + delay;
        const oscillator = examAudioContext.createOscillator();
        const volume = examAudioContext.createGain();
        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, startAt);
        volume.gain.setValueAtTime(0.0001, startAt);
        volume.gain.linearRampToValueAtTime(0.18, startAt + 0.008);
        volume.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
        oscillator.connect(volume);
        volume.connect(examAudioContext.destination);
        oscillator.start(startAt);
        oscillator.stop(startAt + duration + 0.01);
      } catch (error) {
        console.error("Could not play an exam sound.", error);
      }
    }

    function playTypingKeyClick() {
      if (!examAudioContext) return;
      if (examAudioContext.state !== "running") {
        prepareExamAudio().then(context => {
          if (context) playTypingKeyClick();
        });
        return;
      }
      try {
        const startAt = examAudioContext.currentTime;
        const sampleCount = Math.ceil(examAudioContext.sampleRate * 0.035);
        const buffer = examAudioContext.createBuffer(1, sampleCount, examAudioContext.sampleRate);
        const samples = buffer.getChannelData(0);
        for (let index = 0; index < sampleCount; index += 1) {
          samples[index] = Math.random() * 2 - 1;
        }

        const click = examAudioContext.createBufferSource();
        const filter = examAudioContext.createBiquadFilter();
        const volume = examAudioContext.createGain();
        click.buffer = buffer;
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(1900, startAt);
        filter.Q.setValueAtTime(0.8, startAt);
        volume.gain.setValueAtTime(0.2, startAt);
        volume.gain.exponentialRampToValueAtTime(0.0001, startAt + 0.035);
        click.connect(filter);
        filter.connect(volume);
        volume.connect(examAudioContext.destination);
        click.start(startAt);
        click.stop(startAt + 0.04);
      } catch (error) {
        console.error("Could not play a typing key sound.", error);
      }
    }

    function playExamSound(kind) {
      if (kind === "correct") playTypingKeyClick();
      else if (kind === "wrong") playExamTone(190, 0.12, 0, "triangle");
      else if (kind === "minute") {
        playExamTone(560, 0.14);
        playExamTone(740, 0.14, 0.2);
      } else if (kind === "tick") playExamTone(880, 0.055);
      else if (kind === "finish") {
        playExamTone(740, 0.16);
        playExamTone(520, 0.18, 0.2);
        playExamTone(360, 0.32, 0.43);
      } else if (kind === "lessonComplete") {
        playExamTone(660, 0.12);
        playExamTone(830, 0.12, 0.13);
        playExamTone(990, 0.24, 0.26);
      }
    }

    function startExam() {
      clearInterval(examInterval);
      prepareExamAudio();
      const topic = chooseExamTopic();
      examState = {
        topic,
        targets: topic.targets,
        targetIndex: 0,
        stepIndex: 0,
        output: "",
        attempts: 0,
        correctKeys: 0,
        errors: 0,
        studentName: examStudentName.value.trim() || "শিক্ষার্থী",
        startedAt: Date.now(),
        lastAnnouncedRemaining: examDurationSeconds,
        finished: false
      };
      examTopicLabel.textContent = topic.title;
      renderExamPassage();
      examTyped.textContent = "";
      examHint.textContent = "ভুল কী গণনায় যোগ হবে। পরের সঠিক কী লিখে এগিয়ে যান; সময় চলতে থাকবে।";
      examCertificate.hidden = true;
      renderExamPanel();
      updateExamStats();
      examHint.textContent = "এখন " + expectedKeyLabelForExam() + " চাপুন।";
      examPassage.focus();
      examInterval = setInterval(() => {
        updateExamStats();
        if (examState && !examState.finished && Date.now() >= examState.startedAt + examDurationSeconds * 1000) {
          finishExam(false);
        }
      }, 250);
    }

    function renderExamPassage() {
      const fragments = examState.targets.map((target, index) => {
        const fragment = document.createElement("span");
        fragment.className = "exam-passage-target";
        fragment.textContent = target.output;
        if (index === examState.targetIndex) fragment.classList.add("is-current");
        return fragment;
      });
      examPassage.replaceChildren(...fragments);
    }

    function updateExamPassageProgress() {
      examPassage.querySelectorAll(".exam-passage-target").forEach((fragment, index) => {
        fragment.classList.toggle("is-complete", index < examState.targetIndex);
        fragment.classList.toggle("is-current", !examState.finished && index === examState.targetIndex);
      });
    }

    function getExamMetrics(state) {
      const elapsedSeconds = Math.max(1, Math.min(examDurationSeconds, (Date.now() - state.startedAt) / 1000));
      const words = state.output.trim().split(/\s+/u).filter(Boolean).length;
      const wpm = Math.round(words * 60 / elapsedSeconds);
      const accuracy = state.attempts ? Math.round(state.correctKeys / state.attempts * 100) : 100;
      const score = Math.round(wpm * accuracy / 100);
      return { elapsedSeconds, words, wpm, accuracy, score };
    }

    function updateExamStats() {
      if (!examState || examState.finished) return;
      const remaining = Math.max(0, Math.ceil(examDurationSeconds - (Date.now() - examState.startedAt) / 1000));
      const metrics = getExamMetrics(examState);
      const progress = remaining / examDurationSeconds;
      const previousRemaining = examState.lastAnnouncedRemaining;
      examTimerProgress.style.strokeDashoffset = String(276.46 * (1 - progress));
      examTimer.classList.toggle("is-low", remaining <= 60 && remaining > 15);
      examTimer.classList.toggle("is-critical", remaining <= 15);
      if (previousRemaining > 120 && remaining <= 120) playExamSound("minute");
      if (previousRemaining > 60 && remaining <= 60) playExamSound("minute");
      for (let second = Math.min(previousRemaining - 1, 15); second >= Math.max(remaining, 1); second -= 1) {
        playExamSound("tick");
      }
      examState.lastAnnouncedRemaining = remaining;
      examCountdown.textContent = toBengaliDigits(String(Math.floor(remaining / 60)).padStart(2, "0") + ":" + String(remaining % 60).padStart(2, "0"));
      examTimer.setAttribute("aria-label", "বাকি সময় " + examCountdown.textContent);
      examLiveWpm.textContent = toBengaliDigits(metrics.wpm);
      examLiveAccuracy.textContent = toBengaliDigits(metrics.accuracy) + "%";
      examLiveErrors.textContent = toBengaliDigits(examState.errors);
      const expectedKey = examState.targets[examState.targetIndex]?.keys[examState.stepIndex];
      const currentTarget = examState.targets[examState.targetIndex];
      const pendingOutput = currentTarget && currentTarget.keys.length > 1
        ? currentTarget.keys.slice(0, examState.stepIndex).map(keyId => keyInfo[keyId].output).join("")
        : "";
      renderTypingOutput(examTyped, examState.output, pendingOutput);
      keyboard.querySelectorAll(".visual-key").forEach(button => button.classList.remove("is-current"));
      if (expectedKey) markCurrentKeyboardKey(expectedKey);
    }

    function finishExam(completedPassage) {
      if (!examState || examState.finished) return;
      clearInterval(examInterval);
      examInterval = null;
      examState.finished = true;
      examState.finishedAt = Date.now();
      updateExamPassageProgress();
      playExamSound("finish");
      const metrics = getExamMetrics(examState);
      const displayValues = {
        wpm: toBengaliDigits(metrics.wpm),
        accuracy: toBengaliDigits(metrics.accuracy) + "%",
        errors: toBengaliDigits(examState.errors),
        score: toBengaliDigits(metrics.score)
      };
      examResultTitle.textContent = completedPassage ? "অনুচ্ছেদ সম্পন্ন — পরীক্ষা শেষ" : "সময় শেষ — পরীক্ষা শেষ";
      examResultTopic.textContent = "বিষয়: " + examState.topic.title + " · সময়: ৩ মিনিট";
      examResultWpm.textContent = displayValues.wpm;
      examResultAccuracy.textContent = displayValues.accuracy;
      examResultErrors.textContent = displayValues.errors;
      examResultScore.textContent = displayValues.score;
      certificateName.textContent = examState.studentName;
      certificateTopic.textContent = examState.topic.title;
      certificateWpm.textContent = displayValues.wpm;
      certificateAccuracy.textContent = displayValues.accuracy;
      certificateErrors.textContent = displayValues.errors;
      certificateScore.textContent = displayValues.score;
      certificateDate.textContent = new Date().toLocaleDateString("bn-BD", { year: "numeric", month: "long", day: "numeric" });
      renderExamPanel();
      showCompletionBanner();
    }

    function handleExamKey(keyId) {
      if (!examState || examState.finished) return;
      const target = examState.targets[examState.targetIndex];
      if (!target) return;
      examState.attempts += 1;
      if (keyId !== target.keys[examState.stepIndex]) {
        examState.errors += 1;
        playExamSound("wrong");
        flashKeyboardKey(keyInfo[keyId].code, "is-incorrect");
        const errorOutput = document.createElement("span");
        errorOutput.className = "exam-passage-error";
        errorOutput.textContent = keyInfo[keyId].output;
        examPassage.querySelectorAll(".exam-passage-target")[examState.targetIndex].appendChild(errorOutput);
        examHint.textContent = "ভুল কী চাপা হয়েছে। ভুল: " + toBengaliDigits(examState.errors) + "। নীল কী-টি চাপুন: " + expectedKeyLabelForExam() + "।";
        updateExamStats();
        return;
      }
      examState.correctKeys += 1;
      playExamSound("correct");
      flashKeyboardKey(keyInfo[keyId].code, "is-pressed");
      examState.stepIndex += 1;
      if (examState.stepIndex === target.keys.length) {
        examState.output += target.output;
        examState.targetIndex += 1;
        examState.stepIndex = 0;
        updateExamPassageProgress();
        if (examState.targetIndex === examState.targets.length) {
          examTyped.textContent = examState.output;
          finishExam(true);
          return;
        }
      }
      updateExamStats();
      examHint.textContent = "এখন " + expectedKeyLabelForExam() + " চাপুন।";
    }

    function expectedKeyLabelForExam() {
      const expectedKey = examState.targets[examState.targetIndex].keys[examState.stepIndex];
      const expected = keyInfo[expectedKey];
      return (expected.shift ? "Shift ধরে " : "") + expected.letter + " কী";
    }

    function updateCourseProgress() {
      const lessonCount = lessons.filter(lesson => !lesson.exam).length;
      const count = completedLessons.filter(index => lessons[index] && !lessons[index].exam).length;
      const percent = Math.round(count / lessonCount * 100);
      courseCount.textContent = toBengaliDigits(count) + " / " + toBengaliDigits(lessonCount) + " পাঠ";
      headerProgress.textContent = toBengaliDigits(count) + " / " + toBengaliDigits(lessonCount);
      courseProgress.style.width = percent + "%";
      progressTrack.setAttribute("aria-valuenow", String(percent));
      renderLessonList();
    }

    function updateCourseNavigation() {
      courseNavButtons.forEach((button, index) => {
        const sectionStart = courseSectionStarts[index];
        const nextSectionStart = courseSectionStarts[index + 1] ?? lessons.length;
        if (activeLesson >= sectionStart && activeLesson < nextSectionStart) {
          button.setAttribute("aria-current", "page");
        } else {
          button.removeAttribute("aria-current");
        }
      });
    }

    function renderLessonList() {
      lessonList.replaceChildren();
      lessons.forEach((lesson, index) => {
        if (lesson.exam) return;
        const button = document.createElement("button");
        button.type = "button";
        button.className = "lesson-link";
        if (completedLessons.includes(index)) button.classList.add("is-complete");
        if (index === activeLesson) button.setAttribute("aria-current", "step");
        button.setAttribute("aria-label", "পাঠ " + toBengaliDigits(index + 1) + ": " + lesson.title);

        const number = document.createElement("span");
        number.className = "lesson-number";
        number.textContent = completedLessons.includes(index) ? "✓" : toBengaliDigits(index + 1);
        const text = document.createElement("span");
        const title = document.createElement("span");
        title.className = "lesson-title";
        title.textContent = lesson.title;
        const subtitle = document.createElement("span");
        subtitle.className = "lesson-subtitle";
        subtitle.textContent = lesson.subtitle;
        text.append(title, subtitle);
        button.append(number, text);
        button.addEventListener("click", () => selectLesson(index));
        lessonList.append(button);
      });
    }

    function renderKeyboard() {
      keyboard.replaceChildren();
      keyboardRows.forEach(row => {
        const rowElement = document.createElement("div");
        rowElement.className = "key-row";
        row.forEach(keyId => {
          const info = keyInfo[keyId];
          const special = specialKeys[keyId];
          const button = document.createElement("div");
          button.className = "visual-key";
          if (!info && !special) {
            button.classList.add("is-unmapped");
          }
          const code = info ? info.code : special ? special.code
            : /^\d$/.test(keyId) ? "Digit" + keyId : "Key" + keyId.toUpperCase();
          button.dataset.code = code;
          button.setAttribute("aria-label", info
            ? info.letter + " কী: " + info.output
            : special ? special.label + " কী" : keyId.toUpperCase() + " কী"
          );
          const letter = document.createElement("span");
          letter.className = "key-letter";
          letter.textContent = info ? info.letter : special ? special.label : keyId.toUpperCase();
          const output = document.createElement("span");
          output.className = "key-output";
          const shiftedInfo = info && Object.values(keyInfo).find(item => item.code === info.code && item.shift);
          output.textContent = info ? shiftedInfo ? info.output + " · " + shiftedInfo.output : info.output : special ? "" : "·";
          button.append(letter, output);
          rowElement.append(button);
        });
        keyboard.append(rowElement);
      });
    }

    function selectLesson(index) {
      if (index < 0 || index >= lessons.length) return;
      clearTimeout(lessonAdvanceTimer);
      lessonAdvanceTimer = null;
      clearInterval(examInterval);
      examInterval = null;
      examState = null;
      closeLessonMenu();
      activeLesson = index;
      saveSelectedLesson();
      roundIndex = 0;
      roundStates = lessons[activeLesson].rounds.map(createRoundState);
      resetSessionStats();
      renderLesson();
    }

    function closeLessonMenu(restoreFocus = false) {
      lessonMenu.hidden = true;
      lessonMenuToggle.setAttribute("aria-expanded", "false");
      if (restoreFocus) lessonMenuToggle.focus();
    }

    function renderLesson() {
      const lesson = lessons[activeLesson];
      practiceCard.classList.toggle("is-exam", Boolean(lesson.exam));
      examPanel.hidden = !lesson.exam;
      if (!lesson.exam) examCertificate.hidden = true;
      const lessonOrdinal = lessons.slice(0, activeLesson).filter(item => !item.exam).length + 1;
      lessonStep.textContent = lesson.exam
        ? "চূড়ান্ত পরীক্ষা"
        : "পাঠ " + toBengaliDigits(lessonOrdinal) + " / " + toBengaliDigits(lessons.filter(item => !item.exam).length);
      lessonTitle.textContent = lesson.title;
      lessonDescription.textContent = lesson.description;
      lessonMeta.replaceChildren();
      [lesson.tip, "সঠিক কী চাপলে অক্ষরটি নিচে দেখা যাবে"].forEach(text => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = text;
        lessonMeta.append(tag);
      });
      completion.classList.remove("is-visible");
      renderLessonList();
      updateCourseNavigation();
      if (lesson.exam) renderExamPanel();
      updatePractice();
    }

    function updatePractice() {
      const lesson = lessons[activeLesson];
      if (lesson.exam) {
        roundTitle.textContent = "সময়সীমার মধ্যে অনুচ্ছেদটি টাইপ করুন";
        completion.classList.remove("is-visible");
        nextLessonButton.hidden = true;
        return;
      }
      const state = currentRoundState();
      const lessonComplete = roundStates.every(roundState => roundState.complete);
      practiceCard.classList.toggle("is-round-complete", state.complete);
      targetKeys.replaceChildren();

      if (lessonComplete) {
        clearInterval(sessionInterval);
        sessionInterval = null;
        updateSessionStats();
        roundTitle.textContent = "পাঠের সব অনুশীলন সম্পন্ন";
        if (activeLesson < lessons.length - 1) {
          completionMessage.textContent = progressStorageAvailable
            ? "২ সেকেন্ড পর পরের পাঠ শুরু হবে। এখনই যেতে “পরের পাঠে যান” চাপুন। আপনার অগ্রগতি এই ব্রাউজারে সংরক্ষিত থাকবে।"
            : "২ সেকেন্ড পর পরের পাঠ শুরু হবে। এখনই যেতে “পরের পাঠে যান” চাপুন। এই ব্রাউজারে অগ্রগতি সংরক্ষণ করা সম্ভব হয়নি।";
          if (lessonAdvanceTimer === null) {
            const completedLesson = activeLesson;
            lessonAdvanceTimer = setTimeout(() => {
              lessonAdvanceTimer = null;
              if (activeLesson === completedLesson && roundStates.every(roundState => roundState.complete)) {
                selectLesson(completedLesson + 1);
              }
            }, 2000);
          }
        } else {
          completionMessage.textContent = progressStorageAvailable
            ? "আপনি কোর্সের সব পাঠ শেষ করেছেন। আপনার অগ্রগতি এই ব্রাউজারে সংরক্ষিত থাকবে।"
            : "আপনি কোর্সের সব পাঠ শেষ করেছেন। তবে এই ব্রাউজারে অগ্রগতি সংরক্ষণ করা সম্ভব হয়নি।";
        }
        completion.classList.add("is-visible");
        nextLessonButton.hidden = activeLesson === lessons.length - 1;
      } else {
        roundTitle.textContent = state.complete ? "এই অনুশীলন সম্পন্ন" : "কী-গুলো এই ক্রমে চাপুন";
        completion.classList.remove("is-visible");
        nextLessonButton.hidden = true;
      }

      const round = getRoundTargets(lesson.rounds[roundIndex]);
      lessonPanel.classList.toggle("has-long-round", round.length > 12);
      roundIndicator.textContent = "অনুশীলন " + toBengaliDigits(roundIndex + 1) + " / " + toBengaliDigits(lesson.rounds.length);
      previousRoundButton.disabled = roundIndex === 0;
      nextRoundButton.disabled = !state.complete || roundIndex === lesson.rounds.length - 1;
      round.forEach((target, index) => {
        const tile = document.createElement("div");
        tile.className = "target-key";
        if (index < state.keyIndex || state.complete) tile.classList.add("is-done");
        if (index === state.keyIndex && !state.complete) tile.classList.add("is-current");
        const latin = document.createElement("span");
        latin.className = "latin";
        latin.textContent = target.keys.map(keyId => {
          const info = keyInfo[keyId];
          return (info.shift ? "Shift + " : "") + info.letter;
        }).join(" → ");
        const output = document.createElement("span");
        output.className = "output";
        output.textContent = target.output;
        tile.append(latin, output);
        targetKeys.append(tile);
      });
      if (!state.complete) {
        const currentTarget = targetKeys.querySelector(".is-current");
        if (currentTarget) {
          const targetRect = currentTarget.getBoundingClientRect();
          const containerRect = targetKeys.getBoundingClientRect();
          if (targetRect.bottom > containerRect.bottom) targetKeys.scrollTop += targetRect.bottom - containerRect.bottom;
          else if (targetRect.top < containerRect.top) targetKeys.scrollTop -= containerRect.top - targetRect.top;
        }
      }
      if (state.complete) {
        feedback.textContent = "এই অনুশীলন শেষ। আগের বা পরের অনুশীলনে যেতে দুই পাশের বোতাম ব্যবহার করুন।";
        feedback.className = "feedback success";
        typedPreview.textContent = state.output || "✓";
        keyboard.querySelectorAll(".visual-key").forEach(button => button.classList.remove("is-current"));
      } else {
        feedback.textContent = state.mistakes
          ? "ভুল কী: " + toBengaliDigits(state.mistakes) + " বার। নীল করে দেখানো কী-টি চাপুন—এখন " + expectedKeyLabel() + " চাপুন।"
          : "এখন " + expectedKeyLabel() + " চাপুন।";
        feedback.className = "feedback" + (state.mistakes ? " error" : "");
        const currentTarget = getRoundTargets(lessons[activeLesson].rounds[roundIndex])[state.keyIndex];
        const pendingOutput = currentTarget && currentTarget.keys.length > 1
          ? currentTarget.keys.slice(0, state.stepIndex).map(keyId => keyInfo[keyId].output).join("")
          : "";
        renderTypingOutput(typedPreview, state.output, pendingOutput);
        markCurrentKeyboardKey(round[state.keyIndex].keys[state.stepIndex]);
      }
      updateSessionStats();
    }

    function markCurrentKeyboardKey(keyId) {
      const currentCode = keyInfo[keyId].code;
      keyboard.querySelectorAll(".visual-key").forEach(button => {
        button.classList.toggle("is-current", button.dataset.code === currentCode);
      });
    }

    function expectedKeyLabel() {
      const state = currentRoundState();
      const target = getRoundTargets(lessons[activeLesson].rounds[roundIndex])[state.keyIndex];
      const expected = keyInfo[target.keys[state.stepIndex]];
      return (expected.shift ? "Shift ধরে " : "") + expected.letter + " কী";
    }

    function flashKeyboardKey(code, className) {
      const key = keyboard.querySelector('.visual-key[data-code="' + code + '"]');
      if (!key) return;
      key.classList.remove(className);
      void key.offsetWidth;
      key.classList.add(className);
      setTimeout(() => key.classList.remove(className), 650);
    }

    function registerWrongKey(code, keyLabel) {
      if (lessons[activeLesson].exam) {
        if (!examState || examState.finished) return;
        examState.attempts += 1;
        examState.errors += 1;
        playExamSound("wrong");
        flashKeyboardKey(code, "is-incorrect");
        examHint.textContent = "ভুল কী (" + keyLabel + ") চাপা হয়েছে। ভুল: " + toBengaliDigits(examState.errors) + "। পরের সঠিক কী লিখে এগিয়ে যান।";
        updateExamStats();
        return;
      }
      const state = currentRoundState();
      if (state.complete) return;
      startSessionTimer();
      playExamSound("wrong");
      attempts += 1;
      state.mistakes += 1;
      flashKeyboardKey(code, "is-incorrect");
      feedback.textContent = "ভুল কী (" + keyLabel + ") চাপা হয়েছে। এখন " + expectedKeyLabel() + " চাপুন।";
      feedback.className = "feedback error";
      const current = targetKeys.querySelector(".is-current");
      if (current) {
        current.classList.remove("is-error");
        void current.offsetWidth;
        current.classList.add("is-error");
      }
      updateSessionStats();
    }

    function pressKey(keyId) {
      if (lessons[activeLesson].exam) {
        handleExamKey(keyId);
        return;
      }
      const lesson = lessons[activeLesson];
      const state = currentRoundState();
      if (state.complete) return;
      startSessionTimer();
      attempts += 1;
      const target = getRoundTargets(lesson.rounds[roundIndex])[state.keyIndex];
      const expected = target.keys[state.stepIndex];
      if (keyId !== expected) {
        state.mistakes += 1;
        playExamSound("wrong");
        flashKeyboardKey(keyInfo[keyId].code, "is-incorrect");
        feedback.textContent = "ভুল কী চাপা হয়েছে। এখন " + expectedKeyLabel() + " চাপুন।";
        feedback.className = "feedback error";
        const current = targetKeys.querySelector(".is-current");
        if (current) {
          current.classList.remove("is-error");
          void current.offsetWidth;
          current.classList.add("is-error");
        }
        updateSessionStats();
        return;
      }

      correctKeys += 1;
      playExamSound("correct");
      flashKeyboardKey(keyInfo[keyId].code, "is-pressed");
      state.stepIndex += 1;
      if (state.stepIndex >= target.keys.length) {
        state.output += target.output;
        state.keyIndex += 1;
        state.stepIndex = 0;
      }
      if (state.keyIndex >= getRoundTargets(lesson.rounds[roundIndex]).length) {
        state.complete = true;
        if (roundStates.every(roundState => roundState.complete)) {
          playExamSound("lessonComplete");
          showCompletionBanner();
          if (!completedLessons.includes(activeLesson)) {
            completedLessons.push(activeLesson);
            saveCompletedLessons();
            updateCourseProgress();
          }
        }
      }
      updatePractice();
    }

    document.addEventListener("keydown", event => {
      if (event.repeat || event.altKey || event.metaKey) return;
      if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
        if (lessons[activeLesson].exam) {
          if (examState && !examState.finished) {
            const keyId = examState.targets[examState.targetIndex]?.keys[examState.stepIndex];
            if (keyId && keyInfo[keyId].shift) {
              keyboard.querySelectorAll('.visual-key[data-code="ShiftLeft"], .visual-key[data-code="ShiftRight"]')
                .forEach(key => key.classList.add("is-modifier-active"));
              examHint.textContent = "Shift ধরে রাখুন, তারপর " + keyInfo[keyId].letter + " কী চাপুন।";
            }
          }
          return;
        }
        const state = currentRoundState();
        if (!state.complete) {
          const target = getRoundTargets(lessons[activeLesson].rounds[roundIndex])[state.keyIndex];
          const keyId = target.keys[state.stepIndex];
          if (keyInfo[keyId].shift) {
            keyboard.querySelectorAll('.visual-key[data-code="ShiftLeft"], .visual-key[data-code="ShiftRight"]')
              .forEach(key => key.classList.add("is-modifier-active"));
            feedback.textContent = "Shift ধরে রাখুন, তারপর " + keyInfo[keyId].letter + " কী চাপুন।";
          }
        }
        return;
      }
      const matchingKey = Object.keys(keyInfo).find(keyId =>
        keyInfo[keyId].code === event.code && Boolean(keyInfo[keyId].shift) === event.shiftKey
      );
      if (matchingKey && !event.ctrlKey) {
        event.preventDefault();
        pressKey(matchingKey);
      } else if (event.key.length === 1 || ["Enter", "Backspace", "Control"].includes(event.key)) {
        event.preventDefault();
        if (event.ctrlKey && event.code !== "ControlLeft" && event.code !== "ControlRight") {
          registerWrongKey(event.code, "Ctrl + " + event.key);
        } else {
          registerWrongKey(event.code, specialKeys[event.code]?.label || event.key);
        }
      }
    });

    document.addEventListener("keyup", event => {
      if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
        keyboard.querySelectorAll(".visual-key.is-modifier-active").forEach(key => key.classList.remove("is-modifier-active"));
      }
    });

    document.querySelector("#restart").addEventListener("click", () => {
      clearTimeout(lessonAdvanceTimer);
      lessonAdvanceTimer = null;
      roundIndex = 0;
      roundStates = lessons[activeLesson].rounds.map(createRoundState);
      if (completedLessons.includes(activeLesson)) {
        completedLessons = completedLessons.filter(index => index !== activeLesson);
        saveCompletedLessons();
        updateCourseProgress();
      }
      resetSessionStats();
      updatePractice();
    });

    document.querySelector("#exam-start").addEventListener("click", startExam);
    document.querySelector("#exam-again").addEventListener("click", () => {
      clearInterval(examInterval);
      examInterval = null;
      examState = null;
      examCertificate.hidden = true;
      renderExamPanel();
      examStudentName.focus();
    });
    document.querySelector("#exam-print").addEventListener("click", () => window.print());
    completionBannerClose.addEventListener("click", hideCompletionBanner);
    completionBanner.addEventListener("click", event => {
      if (event.target === completionBanner) hideCompletionBanner();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !completionBanner.hidden) hideCompletionBanner();
    });
    courseNavButtons.forEach((button, index) => {
      button.addEventListener("click", () => selectLesson(courseSectionStarts[index]));
    });

    document.querySelector("#reset-progress").addEventListener("click", () => {
      if (!window.confirm("সব পাঠের অগ্রগতি মুছে প্রথম পাঠ থেকে শুরু করবেন?")) return;
      clearTimeout(lessonAdvanceTimer);
      lessonAdvanceTimer = null;
      clearInterval(examInterval);
      examInterval = null;
      examState = null;
      try {
        localStorage.removeItem(storageKey);
        localStorage.removeItem(selectedLessonKey);
        localStorage.removeItem(previousStorageKey);
        localStorage.removeItem(previousSelectedLessonKey);
        localStorage.removeItem(older3StorageKey);
        localStorage.removeItem(older3SelectedLessonKey);
        localStorage.removeItem(olderStorageKey);
        localStorage.removeItem(olderSelectedLessonKey);
        localStorage.removeItem(older2StorageKey);
        localStorage.removeItem(older2SelectedLessonKey);
        localStorage.removeItem(oldestStorageKey);
        localStorage.removeItem(oldestSelectedLessonKey);
      } catch (error) {
        progressStorageAvailable = false;
        console.error("Could not clear saved lesson progress.", error);
        feedback.textContent = "সংরক্ষিত অগ্রগতি মোছা যায়নি। ব্রাউজারের সাইট-ডেটা সেটিংস পরীক্ষা করুন।";
        feedback.className = "feedback error";
        return;
      }
      completedLessons = [];
      closeLessonMenu();
      activeLesson = 0;
      roundIndex = 0;
      roundStates = lessons[activeLesson].rounds.map(createRoundState);
      resetSessionStats();
      updateCourseProgress();
      renderLesson();
    });

    previousRoundButton.addEventListener("click", () => {
      if (roundIndex === 0) return;
      roundIndex -= 1;
      updatePractice();
    });

    nextRoundButton.addEventListener("click", () => {
      if (!currentRoundState().complete || roundIndex >= lessons[activeLesson].rounds.length - 1) return;
      roundIndex += 1;
      updatePractice();
    });

    nextLessonButton.addEventListener("click", () => {
      if (activeLesson < lessons.length - 1) selectLesson(activeLesson + 1);
    });

    lessonMenuToggle.addEventListener("click", () => {
      const isOpening = lessonMenu.hidden;
      lessonMenu.hidden = !isOpening;
      lessonMenuToggle.setAttribute("aria-expanded", String(isOpening));
      if (isOpening) lessonList.querySelector('[aria-current="step"]')?.focus();
    });

    document.addEventListener("pointerdown", event => {
      if (lessonMenu.hidden || lessonMenu.contains(event.target) || lessonMenuToggle.contains(event.target)) return;
      closeLessonMenu();
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !lessonMenu.hidden) closeLessonMenu(true);
    });

    renderKeyboard();
    updateCourseProgress();
    renderLesson();
