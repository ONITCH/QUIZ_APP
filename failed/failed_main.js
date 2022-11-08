//ランダムでコメントをピックアップしたい

const quiz = [
    {
        question: 'おなかすいた...あれが食べたいなぁ、丸くて甘いやつ',
        answers: ['りんご', 'パイナップル', 'ゴキブリ'],
        correct: [0, 1, 2],
        comment: ['そうそうりんごは甘くておいしいね', 'へーこれなんて食べ物？', '...なんかちょっとバリバリするね']
    },
    {
        question: 'ねえねえ、一緒にどこかにいこうよ',
        answers: ['富士の樹海', '遊園地', '映画館'],
        correct: [0, 1, 2],
        comment: ['樹海', '楽しい', '見たかった']
    },
    {
        question: 'コードを書くことに疲れたときはどうするのがよいか．',
        answers: ['温泉に浸かる', 'ビールを飲む', '更にコードを書く'],
        correct: 2,
        comment: ['えっなんで', 'おいしい', 'うーん']
    },
    {
        question: '44444コードを書くことに疲れたときはどうするのがよいか．',
        answers: ['温泉に浸かる', 'ビールを飲む', '更にコードを書く'],
        correct: 2,
        comment: ['えっなんで', 'おいしい', 'うーん']
    },
    {
        question: '55555コードを書くことに疲れたときはどうするのがよいか．',
        answers: ['温泉に浸かる', 'ビールを飲む', '更にコードを書く'],
        correct: 2,
        comment: ['えっなんで', 'おいしい', 'うーん']
    },
    {
        question: '66666コードを書くことに疲れたときはどうするのがよいか．',
        answers: ['温泉に浸かる', 'ビールを飲む', '更にコードを書く'],
        correct: 2,
        comment: ['えっなんで', 'おいしい', 'うーん']
    }
];

// 結果を記録する配列を用意する
const result = [];
// console.log();
console.log(result.length)



$("#question").text(quiz[result.length].question);
$("#question_number").text("こんにちは！");
// 選択肢の表示

$("#question").text(quiz[result.length].question);
$("#answer00").text(quiz[result.length].answers[0]);
$("#answer01").text(quiz[result.length].answers[1]);
$("#answer02").text(quiz[result.length].answers[2]);
// Valueの設定
$("#answer00").val(0);
$("#answer01").val(1);
$("#answer02").val(2);


//button タグの value の値を受け取る．
$("button").on("click", function (e) {
    // 1, 2 `value`を受け取り，条件分岐
    if (Number(e.target.value) === quiz[result.length].correct[0]) {
        $("#result").text(quiz[result.length].comment[0]);
        result.push("3poins");
    } else if (Number(e.target.value) === quiz[result.length].correct[1]) {
        $("#result").text(quiz[result.length].comment[1]);
        result.push("2poins");
    } else {
        $("#result").text(quiz[result.length].comment[2]);
        result.push("0points");
    }


    //次の問題の選択肢を表示する
    $("#question_number").text("第 " + (result.length + 1) + " 問");
    $("#question").text(quiz[result.length].question);
    $("#answer00").text(quiz[result.length].answers[0]);
    $("#answer01").text(quiz[result.length].answers[1]);
    $("#answer02").text(quiz[result.length].answers[2]);


});