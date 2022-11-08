// Valueの設定
$("#answer00").val(0);
$("#answer01").val(1);
// 結果を記録する配列を用意する↑
const result = [];


const quiz = [
    {
        question: '0ねえねえ、どこ行く？',
        answers: ['海', '山'],
        correct: 1,
    },
];

//1問目
$("#question").text(quiz[0].question);
$("#question_number").text("第1問");
$("#answer00").text(quiz[0].answers[0]); //海
$("#answer01").text(quiz[0].answers[1]); //山

// button タグの value の値を受け取る．
$("button").on("click", function (e) {
    if (Number(e.target.value) === 0) {
        result.push("1");

        // $("#question_number").text("分岐１");
        $("#question").text(quiz1[0].question1);
        $("#answer00").text(quiz1[0].answers1[0]);
        $("#answer01").text(quiz1[0].answers1[1]);

    } else {
        // $("#result").text("山ねえ");
        result.push("2");

        // $("#question_number").text("分岐２");
        $("#question").text(quiz1[1].question1);
        // $("#picture").html(quiz2[1].picture).hide();
        $("#answer00").text(quiz1[1].answers1[0]);
        $("#answer01").text(quiz1[1].answers1[1]);
    }

});
const quiz1 = [
    {
        question1: '1　海はいいねえ、海で何をわる？',
        answers1: ['スイカ', 'たまご'],
        correct1: 1,
    },
    {
        question1: '2 山はいいねえ、さぁ',
        answers1: ['蚊に刺される', 'ビールを飲む',],
        correct1: 1,
    }
];

$("button").on("click", function (e) {
    if (Number(e.target.value) === 0) {
        // $("#result").text("スイカねえ");
        result.push("ok");

        $("#question_number").text("分岐３");
        $("#question").text(quiz3[0].question);
        $("#picture").html(quiz3[0].picture).hide();
        $("#answer00").text(quiz3[0].answers[0]);
        $("#answer01").text(quiz3[0].answers[1]);


    } else {
        // $("#result").text("卵ねえ");
        result.push("ng");

        $("#question_number").text("分岐４");
        $("#question").text(quiz4[1].question);
        $("#picture").html(quiz4[1].picture).hide();
        $("#answer00").text(quiz4[1].answers[0]);
        $("#answer01").text(quiz4[1].answers[1]);
    }
});

const quiz3 = [
    {
        question: '3スイカ→楽しかったね、夜何食べる',
        answers: ['カレー', '焼き鳥',],
        correct: 1,
    },
    {
        question: '4たまご割→いまいちだね、夜は何食べる？',
        answers: ['中華', 'フレンチ',],
        correct: 1,
    },
];




















// //今４
// $("button").on("click", function (e) {
//     // 1, 2 `value`を受け取り，条件分岐
//     if (Number(e.target.value) === quiz[result.length].correct) {
//         $("#result").text("正解");
//         result.push("ok");
//         $("#question_number").text("第１問");
//         $("#question").text(quiz[0].question);
//         $("#picture").html(quiz[0].picture).hide();
//         $("#answer00").text(quiz[0].answers[0]);
//         $("#answer01").text(quiz[0].answers[1]);

//     } else {
//         $("#result").text("不正解");
//         result.push("ng");
//         $("#question_number").text("第1問");
//         $("#question").text(quiz[0].question);
//         $("#picture").html(quiz[0].picture).hide();
//         $("#answer00").text(quiz[0].answers[0]);
//         $("#answer01").text(quiz[0].answers[1]);
//     }




    //クリックしたら次の問題の選択肢を表示する
    // $("#question_number").text("第4問");
    // $("#question").text(quiz[3].question);
    // $("#picture").html(quiz[3].picture).hide();
    // $("#answer00").text(quiz[3].answers[0]);
    // $("#answer01").text(quiz[3].answers[1]);
    // $("#answer02").text(quiz[result.length].answers[2]);


// });

