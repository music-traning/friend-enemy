// ==========================================
// data.js
// 潜在フレネミー診断 -The Hidden Karma-
// ==========================================
const frenemyData = {
  "app_config": {
    "title": {
      "ja": "潜在フレネミー診断",
      "en": "Hidden Frenemy Assessment"
    },
    "description": {
      "ja": "あなたの中に眠る対人関係の『業』を可視化する16タイプ診断",
      "en": "Visualizing your hidden interpersonal karma."
    },
    "scale": [
      { "value": 1, "label": { "ja": "全く当てはまらない", "en": "Strongly Disagree" } },
      { "value": 2, "label": { "ja": "あまり当てはまらない", "en": "Disagree" } },
      { "value": 3, "label": { "ja": "どちらともいえない", "en": "Neutral" } },
      { "value": 4, "label": { "ja": "やや当てはまる", "en": "Agree" } },
      { "value": 5, "label": { "ja": "非常に当てはまる", "en": "Strongly Agree" } }
    ]
  },
  "questions": [
    // --- Axis1: Style (O:直接的 / C:間接的) ---
    { "id": "q01", "category": "Axis1", "tier": 1, "is_reversed": false, "text": { "ja": "相手に不満がある時、裏で動くよりも真正面からぶつかりたい。", "en": "I prefer direct confrontation over moving behind the scenes." } },
    { "id": "q02", "category": "Axis1", "tier": 1, "is_reversed": true, "text": { "ja": "争いを避けるため、周囲にそれとなく共感を求めて外堀から埋めることが多い。", "en": "I gather subtle sympathy from others to corner my target indirectly." } },
    { "id": "q03", "category": "Axis1", "tier": 1, "is_reversed": false, "text": { "ja": "相手のミスや弱点は、隠さずに直接指摘する方が誠実だと思う。", "en": "Pointing out flaws directly is more sincere." } },
    { "id": "q04", "category": "Axis1", "tier": 1, "is_reversed": true, "text": { "ja": "自分の手を汚さずに、他人の言葉を利用して目的を達成する事がある。", "en": "I sometimes use others' words to achieve my goals without dirtying my hands." } },
    { "id": "q05", "category": "Axis1", "tier": 1, "is_reversed": false, "text": { "ja": "マウントを取るなら、誰の目にも明らかな形で圧倒したい。", "en": "If I dominate, I want it to be overwhelmingly obvious to everyone." } },

    // --- Axis2: Territory (I:過干渉 / D:ドライ) ---
    { "id": "q06", "category": "Axis2", "tier": 1, "is_reversed": false, "text": { "ja": "仲の良い相手のプライベートや交友関係は、すべて把握しておきたい。", "en": "I want to know everything about my close friends' private lives." } },
    { "id": "q07", "category": "Axis2", "tier": 1, "is_reversed": true, "text": { "ja": "他人が何をしていようと、自分に実害がなければ全く興味がない。", "en": "I have zero interest in what others do unless it affects me." } },
    { "id": "q08", "category": "Axis2", "tier": 1, "is_reversed": false, "text": { "ja": "相手が自分のアドバイス通りに行動しないと、裏切られたような怒りを感じる。", "en": "I feel betrayed when people don't follow my advice." } },
    { "id": "q09", "category": "Axis2", "tier": 1, "is_reversed": true, "text": { "ja": "用件がないのに他人に連絡を取るのは、互いの時間の無駄だと感じる。", "en": "Contacting someone without a clear purpose is a waste of time." } },
    { "id": "q10", "category": "Axis2", "tier": 1, "is_reversed": false, "text": { "ja": "相手を自分の理想通りに「プロデュース」してあげたいという欲求がある。", "en": "I have a desire to 'produce' or mold others into my ideal image." } },

    // --- Axis3: Core (J:嫉妬心 / V:虚栄心) ---
    { "id": "q11", "category": "Axis3", "tier": 1, "is_reversed": false, "text": { "ja": "身近な人間が自分より高く評価されると、純粋に喜べず強い焦りを感じる。", "en": "I feel intense anxiety, not joy, when peers are evaluated higher than me." } },
    { "id": "q12", "category": "Axis3", "tier": 1, "is_reversed": true, "text": { "ja": "優秀な人と一緒にいることで、自分のステータスも引き上げられると感じる。", "en": "Being around excellent people elevates my own status." } },
    { "id": "q13", "category": "Axis3", "tier": 1, "is_reversed": false, "text": { "ja": "相手が失敗したと聞くと、残酷だが心のどこかで安堵する自分がいる。", "en": "Cruel as it is, a part of me feels relieved when I hear of someone's failure." } },
    { "id": "q14", "category": "Axis3", "tier": 1, "is_reversed": true, "text": { "ja": "他人は、自分を魅力的に見せるための「舞台装置」や「パーツ」の一部だ。", "en": "Others are partly stage props to make me look more attractive." } },
    { "id": "q15", "category": "Axis3", "tier": 1, "is_reversed": false, "text": { "ja": "誰かが不当に称賛されているのを見ると、「なぜ自分ではないのか」と不条理を呪う。", "en": "Seeing someone praised unfairly makes me curse the absurdity of why it isn't me." } },

    // --- Axis4: Persona (P:称賛型 / T:毒舌型) ---
    { "id": "q16", "category": "Axis4", "tier": 1, "is_reversed": false, "text": { "ja": "相手をコントロールするために、まずは過剰に褒めて警戒心を解く。", "en": "I overly praise others first to lower their guard and control them." } },
    { "id": "q17", "category": "Axis4", "tier": 1, "is_reversed": true, "text": { "ja": "「あなたのためを思って」という大義名分で、鋭いダメ出しをしてしまう。", "en": "I give harsh criticism under the guise of 'doing it for your own good'." } },
    { "id": "q18", "category": "Axis4", "tier": 1, "is_reversed": false, "text": { "ja": "表面上は「すごいね！」と笑顔を作りながら、心中で見下している事がある。", "en": "I sometimes smile and say 'Amazing!' while secretly looking down on them." } },
    { "id": "q19", "category": "Axis4", "tier": 1, "is_reversed": true, "text": { "ja": "親しい相手ほど、つい皮肉やマウンティングを含んだイジり方をしてしまう。", "en": "The closer I am to someone, the more I tease them with sarcasm and mounting." } },
    { "id": "q20", "category": "Axis4", "tier": 1, "is_reversed": false, "text": { "ja": "敵対心を見せるより、味方のふりをして傍にいる方が圧倒的に有利だと思う。", "en": "It's overwhelmingly advantageous to pretend to be an ally rather than show hostility." } }
  ],
  "types": {
    "OIJP": {
      "title": { "ja": "笑顔の処刑人", "en": "The Smiling Executioner" },
      "profile": { "ja": "直接的かつ過干渉に相手へ介入し、笑顔で絶賛しながらも、内なる嫉妬の業火によって最終的に相手の梯子を外すタイプ。熱狂的な信者にして最悪のアンチという矛盾を抱えています。", "en": "Overtly invasive, praising you with a smile while secretly burning with jealousy, ready to kick the ladder away." },
      "action_plan": { 
          "ja": "他者の光が眩しいほど、自身の影が濃くなる不条理を受け入れましょう。相手を過剰に褒める行動は、自己防衛の裏返しです。", 
          "en": "Accept the absurdity that the brighter others shine, the darker your shadow becomes. Overpraising is a reflection of self-defense." 
      }
    },
    "OIJT": {
      "title": { "ja": "支配を企む狂った演出家", "en": "The Mad Director" },
      "profile": { "ja": "「あなたのため」という免罪符を掲げ、相手のテリトリーを土足で踏み荒らす毒舌家。相手が自分より優位に立つことを決して許さず、精神的に依存させることで絶対的な優位性を保とうとします。", "en": "Invades your territory with toxic criticism disguised as advice, ensuring you remain psychologically dependent." },
      "action_plan": { 
          "ja": "相手を自身のシナリオに強制参加させるのをやめましょう。他人の人生はあなたの舞台ではありません。",
          "en": "Stop forcing others into your scripts. Someone else's life is not your stage." 
      }
    },
    "OIVP": {
      "title": { "ja": "輝きを奪う寄生植物", "en": "The Parasitic Plant" },
      "profile": { "ja": "相手の能力や人脈を「自分のステータス」として吸収するためにべったりと張り付くタイプ。相手を褒めちぎることで自身の価値も連動して上がると信じる、無自覚なエネルギー・ヴァンパイアです。", "en": "Clings to successful people, overly praising them to absorb their status and connections as their own." },
      "action_plan": { 
          "ja": "宿主がいなければ枯れる生き方に限界があります。他者の因果に乗るのではなく、自らの力で根を張る覚悟が必要です。",
          "en": "A life dependent on a host has its limits. You must root yourself instead of riding on others' karma." 
      }
    },
    "OIVT": {
      "title": { "ja": "踏み台を嘲笑う暴君", "en": "The Sneering Tyrant" },
      "profile": { "ja": "相手を露骨に見下し、イジりや毒舌を駆使して自己の優位性を誇示します。他者はすべて自分を引き立てるためのモブキャラであり、彼らの感情など一顧だにしない圧倒的な虚栄心の持ち主です。", "en": "Overtly toxic and invasive, treating others purely as stepping stones to inflate their own massive vanity." },
      "action_plan": { 
          "ja": "他者を引きずり下ろすことで得た高みは、砂上の楼閣です。実体のない優越感に依存する自己の脆さに気づきましょう。",
          "en": "The heights gained by dragging others down are a house of cards. Realize the fragility of depending on hollow superiority." 
      }
    },
    "ODJP": {
      "title": { "ja": "遠隔から毒を盛る信奉者", "en": "The Remote Poisoner" },
      "profile": { "ja": "普段は距離を置きながらも、ターゲットの動向をじっと観察しています。称賛の言葉を遠くから投げかけますが、その奥にはドロドロとした嫉妬が渦巻いており、隙あらばその足首を掴みます。", "en": "Keeps a distance but watches closely, offering remote praise laced with deep, simmering jealousy." },
      "action_plan": { 
          "ja": "遠くから他者の成功を呪う時間は、自身の人生の浪費です。冷めた視線を自分自身の研鑽に向け直してください。",
          "en": "Time spent cursing others' success from afar is a waste of your own life. Redirect your cold gaze towards self-improvement." 
      }
    },
    "ODJT": {
      "title": { "ja": "標的を定める冷徹なスナイパー", "en": "The Cold Sniper" },
      "profile": { "ja": "ドライな関係性を保ちながらも、ターゲットが調子に乗った瞬間に的確な毒舌で致命傷を与えます。嫉妬心を冷徹な攻撃性に変換し、安全圏から相手の自尊心を撃ち抜くことに快感を覚えます。", "en": "Strikes from a safe distance with precise, toxic remarks whenever the target appears too successful." },
      "action_plan": { 
          "ja": "他者の失墜によって得られる安心感は一時的な麻酔に過ぎません。自身の渇きは、他者の血では癒えないと知るべきです。",
          "en": "The relief gained from another's downfall is merely temporary anesthesia. Your thirst cannot be quenched by others' blood." 
      }
    },
    "ODVP": {
      "title": { "ja": "虚飾をまとう通り魔", "en": "The Phantom Assailant" },
      "profile": { "ja": "自分を良く見せてくれる相手にだけ一瞬近づき、過剰に称賛してメリットだけを奪い去ります。用が済めば即座に関心を失う、極めてドライで利己的な「人間関係の消費トラフィック」を形成します。", "en": "Temporarily approaches to praise and extract status, then immediately detaches once their vanity is satisfied." },
      "action_plan": { 
          "ja": "人間関係をファストフードのように消費する態度は、最終的に完璧な孤独を招きます。持続可能な繋がりを模索してください。",
          "en": "Consuming relationships like fast food will ultimately lead to perfect isolation. Seek sustainable connections." 
      }
    },
    "ODVT": {
      "title": { "ja": "観測する絶対零度", "en": "The Absolute Zero Observer" },
      "profile": { "ja": "すべてにおいて冷めきっており、他者を「自分の有能さを再確認するための実験動物」としか見ていません。無関心な態度から放たれる毒舌は、相手の存在意義を根底から凍りつかせます。", "en": "Completely detached. Views others only as lab rats to confirm their own superiority with freezing toxic remarks." },
      "action_plan": { 
          "ja": "絶対的な高みから世界を見下ろす虚無感。その凍てついた心を溶かすのは、論理ではなく泥臭い情熱かもしれません。",
          "en": "The nihility of looking down from absolute heights. What melts that frozen heart might not be logic, but gritty passion." 
      }
    },
    "CIJP": {
      "title": { "ja": "裏切りのマリオネット", "en": "The Betraying Marionette" },
      "profile": { "ja": "べったりと依存し、笑顔で媚びへつらう裏で、静かに相手を破滅へ導く糸を引いています。直接手は下さず、周囲の環境や人間関係を操作してターゲットを孤立させる陰湿な業の持ち主です。", "en": "Invasively dependent and praising, but secretly pulls strings behind the scenes to isolate and destroy the target." },
      "action_plan": { 
          "ja": "影絵芝居で他者を操ることに執着するあまり、自身の人生の主役の座を放棄していることに気づくべきです。",
          "en": "By obsessing over manipulating others in your shadow play, you have abandoned the starring role in your own life." 
      }
    },
    "CIJT": {
      "title": { "ja": "水面下の煽動者", "en": "The Underwater Agitator" },
      "profile": { "ja": "ターゲットには直接言わず、周囲の人間に対してターゲットの悪評や毒舌を吹き込みます。過干渉ゆえに情報網を張り巡らせ、じわじわと相手の居場所を奪っていく静かなる狂気です。", "en": "Invasively gathers information to spread toxic rumors behind the target's back, slowly destroying their reputation." },
      "action_plan": { 
          "ja": "暗闇でナイフを研ぐような生き方は、自身の精神をも蝕みます。光の当たる場所で正々堂々と意見を戦わせる勇気を持ちましょう。",
          "en": "Sharpening knives in the dark erodes your own spirit. Have the courage to debate openly in the light." 
      }
    },
    "CIVP": {
      "title": { "ja": "蜜を吸う見えざる手", "en": "The Invisible Leech" },
      "profile": { "ja": "相手に過剰に尽くし、称賛を浴びせることで「この人がいないとダメだ」と思わせ、水面下で実権を握ります。相手の栄光を裏から操り、自己の虚栄心を満たす黒幕タイプです。", "en": "Overly praises and serves the target to secretly seize control, satisfying their vanity from the shadows." },
      "action_plan": { 
          "ja": "他者の王冠の影に隠れて生きることをやめましょう。あなた自身の名で勝負する時が来ています。",
          "en": "Stop living hidden in the shadow of another's crown. The time has come to compete under your own name." 
      }
    },
    "CIVT": {
      "title": { "ja": "暗躍する虚栄の王", "en": "The Shadow Monarch" },
      "profile": { "ja": "ターゲットのプライベートに深く入り込みながら、陰でその弱点を嘲笑います。自分が裏で相手をコントロールしているという優越感に浸るためだけに、複雑な人間関係のゲームを構築します。", "en": "Infiltrates private lives to secretly mock vulnerabilities, building complex games to satisfy their vanity as the hidden master." },
      "action_plan": { 
          "ja": "複雑に絡み合った人間関係の糸は、いつかあなた自身の首を絞めます。不条理なゲームから降りる決断を。",
          "en": "The tangled threads of manipulation will one day choke you. Decide to step down from this absurd game." 
      }
    },
    "CDJP": {
      "title": { "ja": "嫉妬に狂う傍観者", "en": "The Jealous Bystander" },
      "profile": { "ja": "遠巻きに笑顔で拍手を送りながら、内心では相手の失敗を熱烈に祈っています。直接関わる勇気も、干渉する気力もないため、ひたすら受動的に相手の不幸という因果を待ち続けます。", "en": "Claps from a distance with a smile, while passively and fiercely praying for the target's downfall out of jealousy." },
      "action_plan": { 
          "ja": "他者の不幸を待つだけの人生は、完全な停滞です。呪いのエネルギーを、自己の成長エンジンに変換してください。",
          "en": "A life spent waiting for another's misery is pure stagnation. Convert the energy of your curses into fuel for growth." 
      }
    },
    "CDJT": {
      "title": { "ja": "噂を操る暗殺者", "en": "The Rumor Assassin" },
      "profile": { "ja": "ターゲットとは一切の関わりを持たないまま、もっともらしい毒のある噂を水面下で流布します。自分は完全に安全な場所にいながら、相手が自滅していく様を冷酷に観察します。", "en": "Spreads toxic rumors from complete detachment. Watches coldly from a safe zone as the target self-destructs." },
      "action_plan": { 
          "ja": "石を投げて隠れる行為は、自身の臆病さの証明です。その冷徹な分析力をもっと建設的な目的に使用してください。",
          "en": "Throwing stones and hiding only proves your cowardice. Use that cold analytical power for constructive purposes." 
      }
    },
    "CDVP": {
      "title": { "ja": "無関心な賞賛者", "en": "The Apathetic Praiser" },
      "profile": { "ja": "自分に利益がある時だけ、裏からそっと相手を持ち上げます。そこに感情や執着は一切なく、ただシステム的に「称賛という通貨」を支払って相手を利用する、極めて機械的な関係構築を行います。", "en": "Mechanically pays the 'currency of praise' from the shadows only when it benefits their vanity, with zero emotional attachment." },
      "action_plan": { 
          "ja": "感情を排した機械的なネットワーク構築は効率的ですが、不測の事態に誰もあなたを助けないというバグを孕んでいます。",
          "en": "Mechanized networking is efficient, but harbors a critical bug: no one will help you in times of unforeseen crisis." 
      }
    },
    "CDVT": {
      "title": { "ja": "孤高の軽蔑者", "en": "The Solitary Scorner" },
      "profile": { "ja": "世界そのものを見下しており、誰とも深く関わらず、ただ陰で冷笑を浮かべています。他者の必死な生き様を不条理な喜劇として消費し、自身の孤独な虚栄心を満たし続ける隠遁者です。", "en": "Looks down on the world from the shadows, detached and toxic, consuming others' struggles as absurd comedies to feed their vanity." },
      "action_plan": { 
          "ja": "他者を嘲笑うことで保たれる孤高は、ただの牢獄です。泥にまみれても何かに執着する美しさを知るべきです。",
          "en": "The solitude maintained by mocking others is merely a prison. Discover the beauty of grasping at something, even covered in mud." 
      }
    }
  }
};

window.heroData = frenemyData;