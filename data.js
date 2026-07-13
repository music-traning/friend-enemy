// ==========================================
// data.js
// 潜在フレネミー診断 -The Hidden Karma-
// ==========================================
const frenemyData = {
  "app_config": {
    "title": { "ja": "潜在フレネミー診断", "en": "Hidden Frenemy Assessment" },
    "description": { "ja": "あなたの中に眠る対人関係の『業』を可視化する16タイプ診断", "en": "Visualizing your hidden interpersonal karma." },
    "scale": [
      { "value": 1, "label": { "ja": "全く当てはまらない", "en": "Strongly Disagree" } },
      { "value": 2, "label": { "ja": "あまり当てはまらない", "en": "Disagree" } },
      { "value": 3, "label": { "ja": "どちらともいえない", "en": "Neutral" } },
      { "value": 4, "label": { "ja": "やや当てはまる", "en": "Agree" } },
      { "value": 5, "label": { "ja": "非常に当てはまる", "en": "Strongly Agree" } }
    ]
  },
  "questions": [
    { "id": "q01", "category": "Axis1", "tier": 1, "is_reversed": false, "text": { "ja": "相手に不満がある時、裏で動くよりも真正面からぶつかりたい。", "en": "I prefer direct confrontation over moving behind the scenes." } },
    { "id": "q02", "category": "Axis1", "tier": 1, "is_reversed": true, "text": { "ja": "争いを避けるため、周囲にそれとなく共感を求めて外堀から埋めることが多い。", "en": "I gather subtle sympathy from others to corner my target indirectly." } },
    { "id": "q03", "category": "Axis1", "tier": 1, "is_reversed": false, "text": { "ja": "相手のミスや弱点は、隠さずに直接指摘する方が誠実だと思う。", "en": "Pointing out flaws directly is more sincere." } },
    { "id": "q04", "category": "Axis1", "tier": 1, "is_reversed": true, "text": { "ja": "自分の手を汚さずに、他人の言葉を利用して目的を達成する事がある。", "en": "I sometimes use others' words to achieve my goals without dirtying my hands." } },
    { "id": "q05", "category": "Axis1", "tier": 1, "is_reversed": false, "text": { "ja": "マウントを取るなら、誰の目にも明らかな形で圧倒したい。", "en": "If I dominate, I want it to be overwhelmingly obvious to everyone." } },
    { "id": "q06", "category": "Axis2", "tier": 1, "is_reversed": false, "text": { "ja": "仲の良い相手のプライベートや交友関係は、すべて把握しておきたい。", "en": "I want to know everything about my close friends' private lives." } },
    { "id": "q07", "category": "Axis2", "tier": 1, "is_reversed": true, "text": { "ja": "他人が何をしていようと、自分に実害がなければ全く興味がない。", "en": "I have zero interest in what others do unless it affects me." } },
    { "id": "q08", "category": "Axis2", "tier": 1, "is_reversed": false, "text": { "ja": "相手が自分のアドバイス通りに行動しないと、裏切られたような怒りを感じる。", "en": "I feel betrayed when people don't follow my advice." } },
    { "id": "q09", "category": "Axis2", "tier": 1, "is_reversed": true, "text": { "ja": "用件がないのに他人に連絡を取るのは、互いの時間の無駄だと感じる。", "en": "Contacting someone without a clear purpose is a waste of time." } },
    { "id": "q10", "category": "Axis2", "tier": 1, "is_reversed": false, "text": { "ja": "相手を自分の理想通りに「プロデュース」してあげたいという欲求がある。", "en": "I have a desire to 'produce' or mold others into my ideal image." } },
    { "id": "q11", "category": "Axis3", "tier": 1, "is_reversed": false, "text": { "ja": "身近な人間が自分より高く評価されると、純粋に喜べず強い焦りを感じる。", "en": "I feel intense anxiety, not joy, when peers are evaluated higher than me." } },
    { "id": "q12", "category": "Axis3", "tier": 1, "is_reversed": true, "text": { "ja": "優秀な人と一緒にいることで、自分のステータスも引き上げられると感じる。", "en": "Being around excellent people elevates my own status." } },
    { "id": "q13", "category": "Axis3", "tier": 1, "is_reversed": false, "text": { "ja": "相手が失敗したと聞くと、残酷だが心のどこかで安堵する自分がいる。", "en": "Cruel as it is, a part of me feels relieved when I hear of someone's failure." } },
    { "id": "q14", "category": "Axis3", "tier": 1, "is_reversed": true, "text": { "ja": "他人は、自分を魅力的に見せるための「舞台装置」や「パーツ」の一部だ。", "en": "Others are partly stage props to make me look more attractive." } },
    { "id": "q15", "category": "Axis3", "tier": 1, "is_reversed": false, "text": { "ja": "誰かが不当に称賛されているのを見ると、「なぜ自分ではないのか」と不条理を呪う。", "en": "Seeing someone praised unfairly makes me curse the absurdity of why it isn't me." } },
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
      "action_plan": { "ja": "他者の光が眩しいほど、自身の影が濃くなる不条理を受け入れましょう。相手を過剰に褒める行動は、自己防衛の裏返しです。", "en": "Accept the absurdity that the brighter others shine, the darker your shadow becomes. Overpraising is a reflection of self-defense." },
      "betrayal_prob": 90, "darkness_level": 85, "danger_tier": { "ja": "極 (Fatal)", "en": "Extreme" },
      "worst_partner": "CDVT",
      "partner_reason": {
          "ja": "相手にべったり張り付きたいあなたと、他者を完全に拒絶し見下す相手。永遠に満たされない渇望と冷笑の無限ループに陥り、精神を激しく消耗します。",
          "en": "Your desire to cling aggressively clashes with their complete rejection. You will fall into an endless loop of unfulfilled thirst and cynical disdain."
      },
      "defense": {
          "ja": "彼らの過剰な称賛は罠です。「ありがとう、でも自分でやるよ」と物理的・精神的な距離を強制的に空け、執着を断ち切ってください。",
          "en": "Their excessive praise is a trap. Forcefully create distance by saying, 'Thanks, but I'll handle it,' to sever their attachment."
      },
      "salvation": {
          "ja": "嫉妬を隠して褒めるのをやめましょう。他者の成功に対する悔しさを自ら認め、素直に「悔しい」と口に出すことが、最初の解脱です。",
          "en": "Stop hiding jealousy behind praise. Admitting your frustration over others' success and honestly saying 'I'm jealous' is the first step to liberation."
      }
    },
    "OIJT": {
      "title": { "ja": "支配を企む狂った演出家", "en": "The Mad Director" },
      "profile": { "ja": "「あなたのため」という免罪符を掲げ、相手のテリトリーを土足で踏み荒らす毒舌家。相手が自分より優位に立つことを決して許さず、精神的に依存させることで絶対的な優位性を保とうとします。", "en": "Invades your territory with toxic criticism disguised as advice, ensuring you remain psychologically dependent." },
      "action_plan": { "ja": "相手を自身のシナリオに強制参加させるのをやめましょう。他人の人生はあなたの舞台ではありません。", "en": "Stop forcing others into your scripts. Someone else's life is not your stage." },
      "betrayal_prob": 55, "darkness_level": 75, "danger_tier": { "ja": "高 (High)", "en": "High" },
      "worst_partner": "CIJP",
      "partner_reason": {
          "ja": "表から強引に支配しようとするあなたに対し、相手は依存するふりをして裏から操ろうとします。気づけば相手の用意した地獄の舞台で踊らされることになります。",
          "en": "While you try to dominate overtly, they pretend to depend on you to manipulate you covertly. You'll eventually find yourself dancing on their hellish stage."
      },
      "defense": {
          "ja": "反論せず「あなたの意見は分かりました。でも決めるのは私です」と、彼らの支配（演出）から明確に降りる宣言が有効です。",
          "en": "Do not argue. Simply state, 'I understand your opinion, but I make the decisions,' clearly stepping off their stage."
      },
      "salvation": {
          "ja": "他人の人生の脚本を書くのをやめること。相手が失敗する権利を尊重し、ただ見守る忍耐を身につければ、あなたの孤独は癒え始めます。",
          "en": "Stop writing scripts for other people's lives. Respect their right to fail and learn the patience to just watch; your loneliness will begin to heal."
      }
    },
    "OIVP": {
      "title": { "ja": "輝きを奪う寄生植物", "en": "The Parasitic Plant" },
      "profile": { "ja": "相手の能力や人脈を「自分のステータス」として吸収するためにべったりと張り付くタイプ。相手を褒めちぎることで自身の価値も連動して上がると信じる、無自覚なエネルギー・ヴァンパイアです。", "en": "Clings to successful people, overly praising them to absorb their status and connections as their own." },
      "action_plan": { "ja": "宿主がいなければ枯れる生き方に限界があります。他者の因果に乗るのではなく、自らの力で根を張る覚悟が必要です。", "en": "A life dependent on a host has its limits. You must root yourself instead of riding on others' karma." },
      "betrayal_prob": 80, "darkness_level": 60, "danger_tier": { "ja": "中 (Moderate)", "en": "Medium" },
      "worst_partner": "CIVT",
      "partner_reason": {
          "ja": "相手のステータスに寄生したいあなたを、相手は「都合の良い手駒」として裏で嘲笑いながら利用し尽くします。最後まで搾取されていることに気づけません。",
          "en": "You want to parasitize their status, but they will use you up as a pawn while mocking you in the shadows. You won't realize you're being exploited until the end."
      },
      "defense": {
          "ja": "彼らは「すごいですね！」と近づいてきます。謙遜せず、かつ彼らに役割を与えず、完全にビジネスライクに接して養分を絶ちましょう。",
          "en": "They approach with excessive praise. Do not be humble, give them no roles, and maintain a strictly business-like attitude to cut off their nutrients."
      },
      "salvation": {
          "ja": "「誰を知っているか」で自分を語るのをやめ、泥臭くても「自分が何を成し遂げたか」だけを誇るようにすれば、本当の自信が育ちます。",
          "en": "Stop defining yourself by 'who you know'. If you only take pride in 'what you have accomplished', however gritty, true confidence will grow."
      }
    },
    "OIVT": {
      "title": { "ja": "踏み台を嘲笑う暴君", "en": "The Sneering Tyrant" },
      "profile": { "ja": "相手を露骨に見下し、イジりや毒舌を駆使して自己の優位性を誇示します。他者はすべて自分を引き立てるためのモブキャラであり、彼らの感情など一顧だにしない圧倒的な虚栄心の持ち主です。", "en": "Overtly toxic and invasive, treating others purely as stepping stones to inflate their own massive vanity." },
      "action_plan": { "ja": "他者を引きずり下ろすことで得た高みは、砂上の楼閣です。実体のない優越感に依存する自己の脆さに気づきましょう。", "en": "The heights gained by dragging others down are a house of cards. Realize the fragility of depending on hollow superiority." },
      "betrayal_prob": 40, "darkness_level": 80, "danger_tier": { "ja": "高 (High)", "en": "High" },
      "worst_partner": "CIJT",
      "partner_reason": {
          "ja": "正面から相手を見下したいあなたに対し、相手は絶対に姿を見せず、水面下であなたの悪評をバラ撒きます。戦う相手がいないまま、社会的地位だけが崩壊します。",
          "en": "You want to mock them overtly, but they never show themselves, spreading your bad reputation covertly. Your social standing will collapse without an enemy to fight."
      },
      "defense": {
          "ja": "彼らの毒舌に感情的に反応したら負けです。「そういう意見もあるのですね」と暖簾に腕押しの対応を徹底し、観客にならないこと。",
          "en": "Reacting emotionally to their toxicity is a loss. Consistently respond with indifference like, 'That's one way to look at it,' and refuse to be their audience."
      },
      "salvation": {
          "ja": "まずは自分の弱さや失敗を、一つだけ他人に開示してみてください。無防備なあなたを嗤わずに受け入れてくれる人が、本当の味方です。",
          "en": "Try revealing just one of your weaknesses or failures to others. The people who accept your vulnerability without mocking you are your true allies."
      }
    },
    "ODJP": {
      "title": { "ja": "遠隔から毒を盛る信奉者", "en": "The Remote Poisoner" },
      "profile": { "ja": "普段は距離を置きながらも、ターゲットの動向をじっと観察しています。称賛の言葉を遠くから投げかけますが、その奥にはドロドロとした嫉妬が渦巻いており、隙あらばその足首を掴みます。", "en": "Keeps a distance but watches closely, offering remote praise laced with deep, simmering jealousy." },
      "action_plan": { "ja": "遠くから他者の成功を呪う時間は、自身の人生の浪費です。冷めた視線を自分自身の研鑽に向け直してください。", "en": "Time spent cursing others' success from afar is a waste of your own life. Redirect your cold gaze towards self-improvement." },
      "betrayal_prob": 75, "darkness_level": 90, "danger_tier": { "ja": "高 (High)", "en": "High" },
      "worst_partner": "CIVP",
      "partner_reason": {
          "ja": "安全圏から妬みを抱くあなたと、内部に入り込み実権を握る相手。あなたが指をくわえて見ている間に、相手はあなたの欲しいものを全て裏から奪い去ります。",
          "en": "You harbor jealousy from a safe zone, while they infiltrate and seize real power. While you watch enviously, they will covertly steal everything you desire."
      },
      "defense": {
          "ja": "遠くから見ているだけなので直接の害は少ないですが、一度でも隙を見せると噛みつかれます。公私の境界線を絶対に越えさせないように。",
          "en": "Since they only watch from afar, actual harm is low, but they will bite if you show weakness. Never let them cross the boundary between public and private."
      },
      "salvation": {
          "ja": "他人の動向を監視するSNSアカウントからログアウトしてください。物理的に他者の光を遮断し、自分の手元だけを見る時間が必要です。",
          "en": "Log out of the SNS accounts you use to monitor others. You need time to physically block out others' light and look only at what's in your own hands."
      }
    },
    "ODJT": {
      "title": { "ja": "標的を定める冷徹なスナイパー", "en": "The Cold Sniper" },
      "profile": { "ja": "ドライな関係性を保ちながらも、ターゲットが調子に乗った瞬間に的確な毒舌で致命傷を与えます。嫉妬心を冷徹な攻撃性に変換し、安全圏から相手の自尊心を撃ち抜くことに快感を覚えます。", "en": "Strikes from a safe distance with precise, toxic remarks whenever the target appears too successful." },
      "action_plan": { "ja": "他者の失墜によって得られる安心感は一時的な麻酔に過ぎません。自身の渇きは、他者の血では癒えないと知るべきです。", "en": "The relief gained from another's downfall is merely temporary anesthesia. Your thirst cannot be quenched by others' blood." },
      "betrayal_prob": 85, "darkness_level": 85, "danger_tier": { "ja": "極 (Fatal)", "en": "Extreme" },
      "worst_partner": "CDVP",
      "partner_reason": {
          "ja": "相手が調子に乗る瞬間を待つあなたですが、相手は感情を持たずに機械的な称賛を繰り返すだけで隙を見せません。あなたの毒舌は虚空に向かって放たれ続けます。",
          "en": "You wait for the moment they get carried away, but they only repeat mechanical praise without emotion, never showing an opening. Your toxic remarks will fire into the void endlessly."
      },
      "defense": {
          "ja": "こちらが調子に乗った瞬間を狙っています。彼らの前では自慢話や成功体験を意図的に伏せ、スコープから外れるのが最善です。",
          "en": "They aim for the moment you get carried away. Hide your success stories in front of them to stay completely out of their sniper scope."
      },
      "salvation": {
          "ja": "他人の隙を突く冷徹な分析力を、自分自身の課題解決に向けてください。誰かを撃ち落とすのではなく、自分が這い上がるために頭脳を使うのです。",
          "en": "Direct your cold analytical power to solve your own problems. Use your brain to climb up yourself, rather than shooting someone else down."
      }
    },
    "ODVP": {
      "title": { "ja": "虚飾をまとう通り魔", "en": "The Phantom Assailant" },
      "profile": { "ja": "自分を良く見せてくれる相手にだけ一瞬近づき、過剰に称賛してメリットだけを奪い去ります。用が済めば即座に関心を失う、極めてドライで利己的な「人間関係の消費トラフィック」を形成します。", "en": "Temporarily approaches to praise and extract status, then immediately detaches once their vanity is satisfied." },
      "action_plan": { "ja": "人間関係をファストフードのように消費する態度は、最終的に完璧な孤独を招きます。持続可能な繋がりを模索してください。", "en": "Consuming relationships like fast food will ultimately lead to perfect isolation. Seek sustainable connections." },
      "betrayal_prob": 95, "darkness_level": 50, "danger_tier": { "ja": "中 (Moderate)", "en": "Medium" },
      "worst_partner": "CDJP",
      "partner_reason": {
          "ja": "メリットだけを奪って立ち去りたいあなたに、相手は遠くから重くドロドロとした嫉妬の念を向け続けます。軽快に生きたいあなたの足に巻きつく呪いの鎖です。",
          "en": "You want to hit-and-run for benefits, but they project heavy, muddy jealousy from afar. They are chains of curses wrapping around your desire to live lightly."
      },
      "defense": {
          "ja": "メリットがないと分かれば勝手に去っていきます。彼らが近づいてきたら、あえて「面倒な頼み事」をすると瞬時に消滅します。",
          "en": "They will leave on their own if they see no benefit. When they approach, purposely make a 'troublesome request' and they will vanish instantly."
      },
      "salvation": {
          "ja": "何のメリットもない、ただ無駄話をするだけの相手を一人見つけてください。利害関係のない繋がりが、あなたの人間らしさを取り戻させます。",
          "en": "Find just one person to have pointless conversations with, where there is no benefit. A connection without self-interest will restore your humanity."
      }
    },
    "ODVT": {
      "title": { "ja": "観測する絶対零度", "en": "The Absolute Zero Observer" },
      "profile": { "ja": "すべてにおいて冷めきっており、他者を「自分の有能さを再確認するための実験動物」としか見ていません。無関心な態度から放たれる毒舌は、相手の存在意義を根底から凍りつかせます。", "en": "Completely detached. Views others only as lab rats to confirm their own superiority with freezing toxic remarks." },
      "action_plan": { "ja": "絶対的な高みから世界を見下ろす虚無感。その凍てついた心を溶かすのは、論理ではなく泥臭い情熱かもしれません。", "en": "The nihility of looking down from absolute heights. What melts that frozen heart might not be logic, but gritty passion." },
      "betrayal_prob": 20, "darkness_level": 95, "danger_tier": { "ja": "低 (Low)", "en": "Low" },
      "worst_partner": "OIJT",
      "partner_reason": {
          "ja": "高みから世界を冷笑したいあなたに対し、相手はあなたの領域に土足で踏み入り強引に支配しようとします。あなたの「孤高の美学」が強制的に汚されます。",
          "en": "You want to sneer at the world from on high, but they rudely invade your territory to forcibly dominate you. Your 'solitary aesthetic' is forcefully polluted."
      },
      "defense": {
          "ja": "彼らはあなたをモルモットとして見ています。彼らの冷笑的な分析には一切同意せず、ただ沈黙で返すのが最も効果的な防御です。",
          "en": "They view you as a lab rat. Never agree with their cynical analysis; responding with pure silence is the most effective defense."
      },
      "salvation": {
          "ja": "冷笑をやめ、一度だけ全力で何かに挑んで「ダサく敗北」してみてください。汗と泥にまみれた感情を知った時、世界は少しだけ温かく見えます。",
          "en": "Stop sneering, give your all to something just once, and experience an 'uncool defeat'. When you know the feeling of sweat and mud, the world will look a bit warmer."
      }
    },
    "CIJP": {
      "title": { "ja": "裏切りのマリオネット", "en": "The Betraying Marionette" },
      "profile": { "ja": "べったりと依存し、笑顔で媚びへつらう裏で、静かに相手を破滅へ導く糸を引いています。直接手は下さず、周囲の環境や人間関係を操作してターゲットを孤立させる陰湿な業の持ち主です。", "en": "Invasively dependent and praising, but secretly pulls strings behind the scenes to isolate and destroy the target." },
      "action_plan": { "ja": "影絵芝居で他者を操ることに執着するあまり、自身の人生の主役の座を放棄していることに気づくべきです。", "en": "By obsessing over manipulating others in your shadow play, you have abandoned the starring role in your own life." },
      "betrayal_prob": 100, "darkness_level": 90, "danger_tier": { "ja": "極 (Fatal)", "en": "Extreme" },
      "worst_partner": "OIJT",
      "partner_reason": {
          "ja": "裏から操りたいあなたにとって、公然と支配を迫ってくる相手は天敵です。表面上の服従を強いられ続けるうち、あなたの陰湿な計画は力技で全て握り潰されます。",
          "en": "For you who wants to manipulate covertly, an overt dominator is a natural enemy. Forced into superficial submission, your sneaky plans will be crushed by sheer force."
      },
      "defense": {
          "ja": "あなたに依存するふりをして操ろうとします。「あなたはどうしたいの？」と常に主語を相手に返し、責任を負わせてください。",
          "en": "They pretend to depend on you to manipulate you. Always turn the subject back by asking, 'What do YOU want to do?' and force them to take responsibility."
      },
      "salvation": {
          "ja": "自分の意見を言う時、「あなたのために」という前置きを捨てること。「私はこうしたい」と主語を自分に戻す勇気が、糸を断ち切る剣となります。",
          "en": "When voicing an opinion, drop the 'for your sake' preface. The courage to use 'I want' as the subject is the sword that cuts the strings."
      }
    },
    "CIJT": {
      "title": { "ja": "水面下の煽動者", "en": "The Underwater Agitator" },
      "profile": { "ja": "ターゲットには直接言わず、周囲の人間に対してターゲットの悪評や毒舌を吹き込みます。過干渉ゆえに情報網を張り巡らせ、じわじわと相手の居場所を奪っていく静かなる狂気です。", "en": "Invasively gathers information to spread toxic rumors behind the target's back, slowly destroying their reputation." },
      "action_plan": { "ja": "暗闇でナイフを研ぐような生き方は、自身の精神をも蝕みます。光の当たる場所で正々堂々と意見を戦わせる勇気を持ちましょう。", "en": "Sharpening knives in the dark erodes your own spirit. Have the courage to debate openly in the light." },
      "betrayal_prob": 80, "darkness_level": 85, "danger_tier": { "ja": "極 (Fatal)", "en": "Extreme" },
      "worst_partner": "OIVT",
      "partner_reason": {
          "ja": "水面下で暗躍したいあなたを、相手は公衆の面前で力任せに踏みにじります。あなたの緻密な扇動工作も、圧倒的な暴力と毒舌の前では意味を成さず屈辱を味わいます。",
          "en": "You want to maneuver covertly, but they will trample you openly with sheer force. Your precise agitation is meaningless against their overwhelming toxicity."
      },
      "defense": {
          "ja": "裏で噂を流すのが得意です。情報源を特定し、公の場で「あの件、あなたが言っていたと聞いたけど？」と光を当てて無効化しましょう。",
          "en": "They excel at spreading rumors. Identify the source and confront them publicly with, 'I heard you were saying this,' exposing them to the light."
      },
      "salvation": {
          "ja": "水面下で集めた不満を、一度だけ相手の目を見て直接伝えてみてください。陰口ではなく「対話」をすることでしか、現状は変えられません。",
          "en": "Look them in the eye just once and express the grievances you've gathered covertly. Only through 'dialogue', not gossip, can you change your reality."
      }
    },
    "CIVP": {
      "title": { "ja": "蜜を吸う見えざる手", "en": "The Invisible Leech" },
      "profile": { "ja": "相手に過剰に尽くし、称賛を浴びせることで「この人がいないとダメだ」と思わせ、水面下で実権を握ります。相手の栄光を裏から操り、自己の虚栄心を満たす黒幕タイプです。", "en": "Overly praises and serves the target to secretly seize control, satisfying their vanity from the shadows." },
      "action_plan": { "ja": "他者の王冠の影に隠れて生きることをやめましょう。あなた自身の名で勝負する時が来ています。", "en": "Stop living hidden in the shadow of another's crown. The time has come to compete under your own name." },
      "betrayal_prob": 90, "darkness_level": 80, "danger_tier": { "ja": "高 (High)", "en": "High" },
      "worst_partner": "ODJP",
      "partner_reason": {
          "ja": "内部で巧みに実権を握るあなたの行動を、相手は遠くから観察し、妬みという猛毒を持った視線を送り続けます。虚栄心を根本から不快にさせる消えないシミです。",
          "en": "You masterfully seize control internally, but they watch from afar, sending a highly toxic gaze of jealousy. They are an indelible stain that disgusts your vanity."
      },
      "defense": {
          "ja": "あなたに尽くすことで実権を握ろうとします。彼らの「善意」を安易に受け取らず、貸し借りを作らない関係を徹底してください。",
          "en": "They try to seize control by serving you. Never easily accept their 'goodwill,' and maintain a relationship with absolutely no owed favors."
      },
      "salvation": {
          "ja": "誰かの役に立つことで自分の価値を証明しようとするのをやめること。あなたが何も提供しなくても、そばにいてくれる人を探してください。",
          "en": "Stop trying to prove your worth by being useful to someone. Find people who will stay by your side even if you provide absolutely nothing."
      }
    },
    "CIVT": {
      "title": { "ja": "暗躍する虚栄の王", "en": "The Shadow Monarch" },
      "profile": { "ja": "ターゲットのプライベートに深く入り込みながら、陰でその弱点を嘲笑います。自分が裏で相手をコントロールしているという優越感に浸るためだけに、複雑な人間関係のゲームを構築します。", "en": "Infiltrates private lives to secretly mock vulnerabilities, building complex games to satisfy their vanity as the hidden master." },
      "action_plan": { "ja": "複雑に絡み合った人間関係の糸は、いつかあなた自身の首を絞めます。不条理なゲームから降りる決断を。", "en": "The tangled threads of manipulation will one day choke you. Decide to step down from this absurd game." },
      "betrayal_prob": 85, "darkness_level": 95, "danger_tier": { "ja": "極 (Fatal)", "en": "Extreme" },
      "worst_partner": "OIVP",
      "partner_reason": {
          "ja": "裏でコントロールして優越感に浸りたいあなたに、相手は無自覚に張り付き、あなたの成果やステータスを吸い尽くします。秘密の王国は寄生虫によって食い破られます。",
          "en": "You want to feel superior by controlling covertly, but they will unconsciously cling to you and suck away your achievements. Your secret kingdom will be eaten by this parasite."
      },
      "defense": {
          "ja": "プライベートを探りながら陰で嘲笑います。個人的な悩みや弱点は絶対に彼らに開示せず、表面的な話題のみでやり過ごすこと。",
          "en": "They probe your private life while mocking you in the shadows. Never disclose personal vulnerabilities; survive by discussing only superficial topics."
      },
      "salvation": {
          "ja": "裏で人を操作して得た結果は、あなたに虚無しか残しません。コントロールできない不確実な出来事に身を委ねる恐怖を受け入れてください。",
          "en": "Results gained by manipulating people covertly leave you with nothing but emptiness. Accept the fear of surrendering to uncontrollable uncertainties."
      }
    },
    "CDJP": {
      "title": { "ja": "嫉妬に狂う傍観者", "en": "The Jealous Bystander" },
      "profile": { "ja": "遠巻きに笑顔で拍手を送りながら、内心では相手の失敗を熱烈に祈っています。直接関わる勇気も、干渉する気力もないため、ひたすら受動的に相手の不幸という因果を待ち続けます。", "en": "Claps from a distance with a smile, while passively and fiercely praying for the target's downfall out of jealousy." },
      "action_plan": { "ja": "他者の不幸を待つだけの人生は、完全な停滞です。呪いのエネルギーを、自己の成長エンジンに変換してください。", "en": "A life spent waiting for another's misery is pure stagnation. Convert the energy of your curses into fuel for growth." },
      "betrayal_prob": 30, "darkness_level": 75, "danger_tier": { "ja": "低 (Low)", "en": "Low" },
      "worst_partner": "ODVP",
      "partner_reason": {
          "ja": "何もせず相手の不幸を待つあなたに対し、相手は一瞬で近づき、欲しいものだけを奪って去っていきます。あなたの受動的な呪いが届く前に全てをかすめ取っていきます。",
          "en": "You passively wait for misfortune, but they approach instantly, take what they want, and leave. They snatch everything before your passive curse can even reach them."
      },
      "defense": {
          "ja": "直接的な攻撃力はありません。彼らの妬みの視線を感じても、完全に「背景のノイズ」として無視し、自分の道を進むだけで自滅します。",
          "en": "They have no direct attack power. Even if you feel their jealous gaze, completely ignore it as 'background noise'; they will self-destruct as you move forward."
      },
      "salvation": {
          "ja": "受動的な呪いを解くには、能動的な行動しかありません。どんなに小さなことでも良いので、今日から「自分が主役になれる趣味」を始めてください。",
          "en": "The only way to break a passive curse is active behavior. Starting today, pick up a hobby—no matter how small—where you can be the protagonist."
      }
    },
    "CDJT": {
      "title": { "ja": "噂を操る暗殺者", "en": "The Rumor Assassin" },
      "profile": { "ja": "ターゲットとは一切の関わりを持たないまま、もっともらしい毒のある噂を水面下で流布します。自分は完全に安全な場所にいながら、相手が自滅していく様を冷酷に観察します。", "en": "Spreads toxic rumors from complete detachment. Watches coldly from a safe zone as the target self-destructs." },
      "action_plan": { "ja": "石を投げて隠れる行為は、自身の臆病さの証明です。その冷徹な分析力をもっと建設的な目的に使用してください。", "en": "Throwing stones and hiding only proves your cowardice. Use that cold analytical power for constructive purposes." },
      "betrayal_prob": 70, "darkness_level": 80, "danger_tier": { "ja": "高 (High)", "en": "High" },
      "worst_partner": "ODVT",
      "partner_reason": {
          "ja": "噂を流して追い詰めたいあなたですが、相手は世界そのものに無関心であり、社会的ダメージが一切効きません。最大の武器である「噂」が通用しない絶対的な虚無です。",
          "en": "You try to corner them with rumors, but they are apathetic to the world itself, making social damage ineffective. They are an absolute void where your greatest weapon fails."
      },
      "defense": {
          "ja": "噂話に巻き込もうとしてきます。「へえ、そうなんですか。私は興味ないですが」と、彼らの流す毒を完全にシャットアウトしてください。",
          "en": "They will try to drag you into rumors. Completely shut out their poison by stating, 'Oh really? Well, I'm not interested.'"
      },
      "salvation": {
          "ja": "安全圏から石を投げるのをやめ、実名で（あるいは自分の責任で）意見を発信する場所を持ちましょう。傷つく覚悟が、あなたを呪縛から解放します。",
          "en": "Stop throwing stones from a safe zone. Establish a place to voice your opinions under your real name (or taking full responsibility). The readiness to be hurt will free you."
      }
    },
    "CDVP": {
      "title": { "ja": "無関心な賞賛者", "en": "The Apathetic Praiser" },
      "profile": { "ja": "自分に利益がある時だけ、裏からそっと相手を持ち上げます。そこに感情や執着は一切なく、ただシステム的に「称賛という通貨」を支払って相手を利用する、極めて機械的な関係構築を行います。", "en": "Mechanically pays the 'currency of praise' from the shadows only when it benefits their vanity, with zero emotional attachment." },
      "action_plan": { "ja": "感情を排した機械的なネットワーク構築は効率的ですが、不測の事態に誰もあなたを助けないというバグを孕んでいます。", "en": "Mechanized networking is efficient, but harbors a critical bug: no one will help you in times of unforeseen crisis." },
      "betrayal_prob": 60, "darkness_level": 40, "danger_tier": { "ja": "低 (Low)", "en": "Low" },
      "worst_partner": "ODJT",
      "partner_reason": {
          "ja": "機械的に称賛を支払って利用したい相手ですが、相手は冷徹なスコープでこちらの打算を完全に見抜いています。システム的な関係構築が通じず機能不全に陥ります。",
          "en": "You try to use them with mechanical praise, but their cold scope completely sees through your calculation. Systematic networking fails entirely, causing you to malfunction."
      },
      "defense": {
          "ja": "機械的にあなたを持ち上げて利用します。彼らの称賛には「ありがとう」とだけ返し、見返りやフォローアップの期待は一切捨てること。",
          "en": "They mechanically praise to use you. Reply only with 'Thank you' to their praise, and completely abandon any expectation of genuine support."
      },
      "salvation": {
          "ja": "「ありがとう」と言われた時、システム的な返答ではなく、一度だけ心から「どういたしまして」と笑ってみてください。感情は筋肉と同じで、使えば蘇ります。",
          "en": "When someone says 'thank you', try smiling and saying 'you're welcome' from the bottom of your heart just once, instead of a systematic reply. Emotions are like muscles; they revive if you use them."
      }
    },
    "CDVT": {
      "title": { "ja": "孤高の軽蔑者", "en": "The Solitary Scorner" },
      "profile": { "ja": "世界そのものを見下しており、誰とも深く関わらず、ただ陰で冷笑を浮かべています。他者の必死な生き様を不条理な喜劇として消費し、自身の孤独な虚栄心を満たし続ける隠遁者です。", "en": "Looks down on the world from the shadows, detached and toxic, consuming others' struggles as absurd comedies to feed their vanity." },
      "action_plan": { "ja": "他者を嘲笑うことで保たれる孤高は、ただの牢獄です。泥にまみれても何かに執着する美しさを知るべきです。", "en": "The solitude maintained by mocking others is merely a prison. Discover the beauty of grasping at something, even covered in mud." },
      "betrayal_prob": 10, "darkness_level": 80, "danger_tier": { "ja": "低 (Low)", "en": "Low" },
      "worst_partner": "OIJP",
      "partner_reason": {
          "ja": "絶対的な孤独を好むあなたにとって、笑顔で侵入し執着してくる相手は最悪のノイズです。冷笑しても決して離れない相手に、精神的なテリトリーを侵食され続けます。",
          "en": "For you who prefers absolute solitude, their smiling invasion is the worst noise. They will never leave despite your mockery, continuously eroding your mental territory."
      },
      "defense": {
          "ja": "関わるだけ無駄です。彼らの冷ややかな態度は彼ら自身の問題であり、あなたの責任ではありません。物理的・精神的に完全に関係を断つこと。",
          "en": "Getting involved is a waste of time. Their cold attitude is their own problem, not yours. Sever ties completely, both physically and mentally."
      },
      "salvation": {
          "ja": "孤独な牢獄から出るには、他者に「助けてほしい」と一言だけ伝えることです。冷笑を捨てて他者に頼る恐怖を乗り越えた時、本当の自由を得ます。",
          "en": "To escape your solitary prison, just tell someone, 'I need your help.' You will gain true freedom when you drop the cynicism and overcome the fear of relying on others."
      }
    }
  }
};

window.frenemyData = frenemyData;