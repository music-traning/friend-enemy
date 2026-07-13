// ==========================================
// main.js
// スタンドアローン版 (JA/EN完全対応版)
// ==========================================

const appState = {
    lang: 'ja',
    screen: 'home', 
    questions: [],
    currentIdx: 0,
    answers: {},
    history: JSON.parse(localStorage.getItem('frenemy_history')) || [],
    shareText: ""
};

// --- UIテキストマスタ ---
const uiText = {
    "btn-help": { "ja": "業の目録", "en": "The Codex" },
    "ui-title": { "ja": "潜在フレネミー診断", "en": "Hidden Frenemy Assessment" },
    "ui-desc": { "ja": "- The Hidden Karma -", "en": "- The Hidden Karma -" },
    "ui-about-content": { 
        "ja": "あなたの中にも確実に存在している、<br>他者を呪い、利用し、引きずり下ろそうとする「業」。<br>その暗い欲望の形を、16の類型から暴き出します。", 
        "en": "Even within you, it surely exists.<br>The 'karma' to curse, use, and drag down others.<br>We will expose the shape of that dark desire through 16 archetypes." 
    },
    "btn-tier1": { "ja": "診断を開始する (全20問)", "en": "Begin Assessment (20 Qs)" },
    "ui-history-title": { "ja": "過去の観測記録", "en": "Past Observations" },
    "btn-clear-history": { "ja": "記録を抹消する", "en": "Erase Records" },
    "empty-history": { "ja": "観測記録は存在しません", "en": "No observations found." },
    "history-recheck": { "ja": "再確認", "en": "Review" },
    "btn-quiz-abort": { "ja": "逃走する", "en": "Flee" },
    "btn-prev": { "ja": "戻る", "en": "Back" },
    "btn-next-normal": { "ja": "次へ", "en": "Next" },
    "btn-next-finish": { "ja": "深淵を覗く (結果解析)", "en": "Peer into the Abyss" },
    "alert-select": { "ja": "回答を選択してください", "en": "Please select an answer." },
    "alert-abort": { "ja": "診断を放棄して逃走しますか？", "en": "Flee the assessment?" },
    "alert-clear": { "ja": "すべての観測記録を抹消しますか？", "en": "Erase all observation records?" },
    "label-axis1": { "ja": "直接・間接", "en": "Overt / Covert" },
    "label-axis2": { "ja": "干渉・ドライ", "en": "Invasive / Detached" },
    "label-axis3": { "ja": "嫉妬・虚栄", "en": "Jealousy / Vanity" },
    "label-axis4": { "ja": "称賛・毒舌", "en": "Praising / Toxic" },
    "ui-action-plan": { "ja": "■ 業の清算", "en": "■ Clearing the Karma" },
    "btn-share-x": { "ja": "結果をXに刻む", "en": "Engrave on X" },
    "btn-home": { "ja": "深淵から戻る", "en": "Return from the Abyss" },
    "ui-help-title": { "ja": "業の目録", "en": "The Codex" },
    "ui-help-desc": { "ja": "全16の潜在フレネミータイプ", "en": "All 16 Hidden Frenemy Types" },
    "btn-close-help": { "ja": "閉じる", "en": "Close" }
};

function setState(updates) {
    Object.assign(appState, updates);
    render();
}

function render() {
    ['home', 'quiz', 'result', 'help'].forEach(screen => {
        const el = document.getElementById(`screen-${screen}`);
        if(el) el.classList.toggle('hidden', appState.screen !== screen);
    });
    
    // ヘッダーボタン
    document.getElementById('btn-help').innerText = uiText["btn-help"][appState.lang];

    switch (appState.screen) {
        case 'home':   renderHome();   break;
        case 'quiz':   renderQuiz();   break;
        case 'result': renderResult(); break;
        case 'help':   renderHelp();   break;
    }
}

function renderHome() {
    const ids = ["ui-title", "ui-desc", "btn-tier1", "ui-history-title", "btn-clear-history"];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.innerText = uiText[id][appState.lang];
    });
    document.getElementById('ui-about-content').innerHTML = uiText["ui-about-content"][appState.lang];
    
    renderHistory();
}

function renderHistory() {
    const historyList = document.getElementById('history-list');
    const clearBtn = document.getElementById('btn-clear-history');
    historyList.innerHTML = '';
    
    if (appState.history.length === 0) {
        historyList.innerHTML = `<p style="color:var(--text-muted); font-size:13px; text-align:center;">${uiText["empty-history"][appState.lang]}</p>`;
        clearBtn.classList.add('hidden');
        return;
    }
    
    clearBtn.classList.remove('hidden');

    appState.history.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.style.cursor = 'pointer';
        div.onclick = () => loadResultFromHistory(index);
        
        // 履歴保存時の言語ではなく、現在の言語設定でタイトルを取得し直す
        const typeData = window.heroData.types[item.type];
        const displayTitle = typeData ? typeData.title[appState.lang] : item.title;

        div.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span><span style="color:#666; font-size:11px;">${item.date}</span><br><strong style="color:var(--text-color);">[${item.type}]</strong> ${displayTitle}</span>
                <span style="color:var(--accent-color); font-size:11px; border:1px solid var(--border-color); padding:4px 8px;">${uiText["history-recheck"][appState.lang]}</span>
            </div>
        `;
        historyList.appendChild(div);
    });
}

function renderQuiz() {
    const q = appState.questions[appState.currentIdx];
    if (!q) return;
    
    document.getElementById('btn-quiz-abort').innerText = uiText["btn-quiz-abort"][appState.lang];
    document.getElementById('btn-prev').innerText = uiText["btn-prev"][appState.lang];
    
    const progText = appState.lang === 'ja' 
        ? `第 ${appState.currentIdx + 1} の問い / 全 ${appState.questions.length} 問`
        : `Question ${appState.currentIdx + 1} of ${appState.questions.length}`;
    document.getElementById('quiz-progress').innerText = progText;
    document.getElementById('question-text').innerText = q.text[appState.lang];
    
    const progressPercent = ((appState.currentIdx + 1) / appState.questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    window.heroData.app_config.scale.forEach(scale => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (appState.answers[q.id] === scale.value) btn.classList.add('selected');
        btn.innerText = scale.label[appState.lang];
        btn.onclick = () => handleAnswer(q.id, scale.value);
        optionsContainer.appendChild(btn);
    });

    const btnNext = document.getElementById('btn-next');
    document.getElementById('btn-prev').style.visibility = appState.currentIdx === 0 ? 'hidden' : 'visible';
    
    if (appState.currentIdx === appState.questions.length - 1) {
        btnNext.innerText = uiText["btn-next-finish"][appState.lang];
        btnNext.style.backgroundColor = "var(--accent-color)";
        btnNext.style.color = "#fff";
    } else {
        btnNext.innerText = uiText["btn-next-normal"][appState.lang];
        btnNext.style.backgroundColor = "";
        btnNext.style.color = "var(--accent-color)";
    }
}

function renderResult() {
    // 描画は displayResultScreen 内で行うためここではボタン等の更新のみ
    document.getElementById('ui-action-plan').innerText = uiText["ui-action-plan"][appState.lang];
    document.getElementById('btn-share-x').innerText = uiText["btn-share-x"][appState.lang];
    document.getElementById('btn-home').innerText = uiText["btn-home"][appState.lang];
    
    document.getElementById('label-axis1').innerText = uiText["label-axis1"][appState.lang];
    document.getElementById('label-axis2').innerText = uiText["label-axis2"][appState.lang];
    document.getElementById('label-axis3').innerText = uiText["label-axis3"][appState.lang];
    document.getElementById('label-axis4').innerText = uiText["label-axis4"][appState.lang];
}

function renderHelp() {
    document.getElementById('ui-help-title').innerText = uiText["ui-help-title"][appState.lang];
    document.getElementById('ui-help-desc').innerText = uiText["ui-help-desc"][appState.lang];
    document.getElementById('btn-close-help').innerText = uiText["btn-close-help"][appState.lang];
    
    const helpList = document.getElementById('help-list');
    helpList.innerHTML = '';

    for (const [key, data] of Object.entries(window.heroData.types)) {
        const div = document.createElement('div');
        div.style.borderBottom = "1px dotted var(--border-color)"; 
        div.style.paddingBottom = "16px"; 
        div.style.marginBottom = "16px";
        div.innerHTML = `<div style="color: var(--accent-color); font-size: 14px; font-weight: normal; margin-bottom: 6px; letter-spacing:1px;">[${key}] ${data.title[appState.lang]}</div>
                         <div style="font-size: 13px; line-height: 1.7; color: #aaa;">${data.profile[appState.lang]}</div>`;
        helpList.appendChild(div);
    }
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    setState({ lang: appState.lang === 'ja' ? 'en' : 'ja' });
});

window.showHelp = () => setState({ screen: 'help' });
window.closeHelp = () => setState({ screen: 'home' });
window.goHome = () => setState({ screen: 'home' });

window.abortQuiz = () => {
    if(confirm(uiText["alert-abort"][appState.lang])) {
        setState({ screen: 'home' });
    }
};

window.startQuiz = () => {
    setState({
        screen: 'quiz',
        questions: window.heroData.questions,
        currentIdx: 0,
        answers: {}
    });
};

window.handleAnswer = (qId, value) => {
    const newAnswers = { ...appState.answers, [qId]: value };
    setState({ answers: newAnswers });
};

window.prevQuestion = () => {
    if (appState.currentIdx > 0) setState({ currentIdx: appState.currentIdx - 1 });
};

window.nextQuestion = () => {
    const qId = appState.questions[appState.currentIdx].id;
    if (!appState.answers[qId]) {
        alert(uiText["alert-select"][appState.lang]);
        return;
    }
    if (appState.currentIdx < appState.questions.length - 1) {
        setState({ currentIdx: appState.currentIdx + 1 });
    } else {
        calculateAndSaveResult();
    }
};

function calculateAndSaveResult() {
    const { typeStr, percentages } = calculateScore(appState.questions, appState.answers);
    const resultData = window.heroData.types[typeStr] || window.heroData.types[Object.keys(window.heroData.types)[0]];
    
    // 履歴保存用にデフォルト言語のタイトルを保持しておく（描画時に言語に合わせて差し替える）
    const titleStr = resultData.title['ja']; 
    
    const date = new Date();
    const dateStr = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2,'0')}`;
    const newHistory = [{ date: dateStr, type: typeStr, title: titleStr, percentages: percentages }, ...appState.history];
    
    localStorage.setItem('frenemy_history', JSON.stringify(newHistory));
    setState({ history: newHistory });

    displayResultScreen(typeStr, percentages);
}

window.loadResultFromHistory = (index) => {
    const item = appState.history[index];
    displayResultScreen(item.type, item.percentages);
};

function displayResultScreen(typeStr, percentages) {
    const resultData = window.heroData.types[typeStr] || window.heroData.types[Object.keys(window.heroData.types)[0]];
    const titleStr = resultData.title[appState.lang];
    
    const text = appState.lang === 'ja'
        ? `潜在フレネミー診断：私の中に眠る『業』の正体は
【 ${typeStr} : ${titleStr} 】でした。

`
        : `Hidden Frenemy Assessment: My true 'Karma' is
[ ${typeStr} : ${titleStr} ].

`;

    document.getElementById('result-type').innerText = `TYPE: ${typeStr}`;
    document.getElementById('result-title').innerText = titleStr;
    document.getElementById('result-profile').innerText = resultData.profile[appState.lang];
    document.getElementById('result-action').innerText = resultData.action_plan[appState.lang];
    
    // プログレスバーの更新 (Axis1〜Axis4)
    ['Axis1', 'Axis2', 'Axis3', 'Axis4'].forEach(axis => {
        const bar = document.getElementById(`bar-${axis.toLowerCase()}`);
        if(bar && percentages[axis]) bar.style.width = `${percentages[axis]}%`;
    });

    renderResult(); // ボタンなどの言語更新
    setState({ screen: 'result', shareText: text });
}

window.clearHistory = () => {
    if(confirm(uiText["alert-clear"][appState.lang])) {
        localStorage.removeItem('frenemy_history');
        setState({ history: [] });
    }
};

window.shareOnX = () => {
    const url = "https://your-domain.vercel.app/"; // デプロイ先のURLに変更してください
    const hashtags = appState.lang === 'ja' ? "潜在フレネミー診断,TheHiddenKarma" : "HiddenFrenemy,TheHiddenKarma";
    const intentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(appState.shareText)}&url=${encodeURIComponent(url)}&hashtags=${hashtags}`;
    window.open(intentUrl, '_blank', 'noopener,noreferrer');
};

render();