/**
 * 診断結果のスコアとタイプを計算する (フレネミー4軸対応版)
 */
function calculateScore(questions, answers) {
    // 4つの軸でスコアを集計
    let scores = { Axis1: 0, Axis2: 0, Axis3: 0, Axis4: 0 };
    let counts = { Axis1: 0, Axis2: 0, Axis3: 0, Axis4: 0 };

    questions.forEach(q => {
        let val = answers[q.id];
        if (q.is_reversed) val = 6 - val; // 逆転項目の処理
        scores[q.category] += val;
        counts[q.category] += 1;
    });

    let typeStr = "";
    let percentages = {};
    
    // Axis1: Overt(O) / Covert(C)
    // Axis2: Invasive(I) / Detached(D)
    // Axis3: Jealousy(J) / Vanity(V)
    // Axis4: Praising(P) / Toxic(T)
    const axes = [
        { key: 'Axis1', high: 'O', low: 'C' },
        { key: 'Axis2', high: 'I', low: 'D' },
        { key: 'Axis3', high: 'J', low: 'V' },
        { key: 'Axis4', high: 'P', low: 'T' }
    ];

    axes.forEach(axis => {
        let avg = scores[axis.key] / counts[axis.key];
        // 平均3.0以上ならHigh属性、未満ならLow属性
        typeStr += avg >= 3.0 ? axis.high : axis.low;
        // スコアを0〜100%に正規化（グラフ表示用）
        percentages[axis.key] = ((avg - 1) / 4) * 100;
    });

    return { typeStr, percentages };
}

/**
 * 相性計算ロジックも、組織的シナジーから「フレネミー同士の危険な化学反応」等へ
 * テキストを変更することでそのまま流用可能です。
 */