$(function () {
    setTimeout(function () {
        $('.start p').fadeIn(1600);
    }, 1000); //0.5秒後にロゴをフェードイン
    setTimeout(function () {
        $('.start').fadeOut(500);
    }, 5000); //ロゴ含め真っ白背景をフェードアウト
});


const quiz = [
    {
        question: 'まずは誘拐現場。MR.GREENの行きつけがバレていた',
        answers: ['STARBUCKS', 'MACDONALDS', 'WENDYS'],
        correct: 0,
        picture: '<p><br>TRY<br>NOT<br>TO<br>FORGET<br>HE<br>LIKES<br><br>GREEN...</P>'
    },
    {
        question: '誘拐の日...卑屈にもMR.GREENらしいな',
        answers: ['１２月２５日', '１１月２３日', '５月４日'],
        correct: 2,
        picture: ''
    },
    {
        question: 'MR.GREENは漢字が苦手だったな',
        answers: ['縁', '緑', '録'],
        correct: 1,
        picture: ''
    },
    {
        question: 'MR.GREENは緑色の食べ物が好物だった',
        answers: ['BANANA', 'STRAWBERRY', 'APPLE'],
        correct: 2,
        picture: ''
    },
    {
        question: 'この色でなければ犯人に追いついていたのに...',
        answers: ['左', '真ん中', '右'],
        correct: 0,
        picture: '<p><img src="./img/signal.png"></p>'
    },
    {
        question: 'MR.GREENの好きな色に暗号が?',
        answers: ['小豆色 #96514d', '萌葱色 #006e54', '煤竹色 #6f514c'],
        correct: 1,
        picture: ''
    },
    {
        question: 'あいつがいてくれれば...',
        answers: ['1', '2', '3'],
        correct: 0,
        picture: '<p><img src="./img/avengers.png"></p>'
    },
    {
        question: '犯人の落とした本。狡猾な犯人はこのチームだな',
        answers: ['グリフィンドール', 'ハッフルパフ', 'スリザリン'],
        correct: 2,
        picture: ''
    },
    {
        question: 'GREENはどこだ',
        answers: ['１行目', '３行目', '４行目'],
        correct: 2,
        picture: '<p><img src="./img/words.png"></p>'
    },
    {
        question: '犯人の屋敷だ！緑のボタンで中に入れそうだ',
        answers: ['<font color="green" >●</font>', '<font color="pink" >●</font>', '<font color="orange" >●</font>'],
        correct: 0,
        picture: ''
    },
    {
        question: 'そう簡単にはいかない。暗号だ',
        answers: ['<font color="green" >BLUE</font>', '<font color="blue" >ORANGE</font>', '<font color="orange" >GREEN</font>'],
        correct: 2,
        picture: '<br><br><br><br><br>▶︎ &lt;p&gt; GREEN &lt;/p&gt'
    },
    {
        question: '暗号だ',
        answers: ['<font color="purple" >GREEN</font>', '<font color="green" >RED</font>', '<font color="red" >PURPLE</font>'],
        correct: 1,
        picture: '<br><br><br><br><br>▶︎FIND color:GREEN'
    },
    {
        question: '絵画のどこかにヒントがありそうだ',
        answers: ['左下', '真ん中', '右下'],
        correct: 0,
        picture: '<p><img src="./img/orympic.png"></p>'
    },
    {
        question: '暗証番号・・・ここだ！天井に何かある',
        answers: ['3', '100', '7'],
        correct: 2,
        picture: '<br><br><br><br><br>▶︎COUNT THE NUMBER OF _'
    },
    {
        question: 'ドアが開いた。MR GREENが...........',
        answers: ['死んでいる...', '犯人だ', '生きている！'],
        correct: 2,
        picture: '<p><img src="./img/mrgreen.png"></p>'
    },

];

// 結果を記録する配列を用意する
const result = [];

$("#question_number").text("第 " + (result.length + 1) + " 問");
// 選択肢の表示

$("#question").text(quiz[result.length].question);
$("#answer00").html(quiz[result.length].answers[0]);
$("#answer01").html(quiz[result.length].answers[1]);
$("#answer02").html(quiz[result.length].answers[2]);
$(".container_picture").html(quiz[result.length].picture);
// Valueの設定

$("#answer00").val(0);
$("#answer01").val(1);
$("#answer02").val(2);

//button タグの value の値を受け取る．
$("button").on("click", function (e) {
    // 1, 2 `value`を受け取り，条件分岐


    if (result.length < quiz.length) {

        if (Number(e.target.value) === quiz[result.length].correct) {
            $("#result").text("CORRECT");
            result.push(0);
        } else {
            $("#result").text("WRONG");
            result.push(1);
        }
    }

    if (result.length !== quiz.length) {//次の問題の選択肢を表示する
        $("#question_number").text("第 " + (result.length + 1) + " 問");
        $("#question").html(quiz[result.length].question);
        $("#answer00").html(quiz[result.length].answers[0]);
        $("#answer01").html(quiz[result.length].answers[1]);
        $("#answer02").html(quiz[result.length].answers[2]);
        $(".container_picture").html(quiz[result.length].picture);

    } else {
        let total = 0
        for (let i = 0; i < result.length; i++) {
            total += result[i];
        }
        console.log(total);
        if (total >= 3) {
            $("#blood").show("#blood");
        } else {
            $(".drunk").show(".drunk");
        }
        // console.log(result);

    }

});




// console.log(total);

// $(function () {
//     if (result === 15) {
//         $("#blood").show("#blood");
//     } 
// });


//スポットライト
const spot = document.querySelector("body");
const spotLight = (event) => {
    spot.setAttribute(
        "style",
        `background-image:
     radial-gradient(circle at ${event.clientX}px ${event.clientY}px, 
     transparent  0px, transparent 30px, rgba(0,0,0,0.95) 50px)`
    );
};

document.addEventListener("mousemove", spotLight);



//タイトルをフェードアウトさせたかった
// $(document).ready(() => {
//     ("#title").fadeOut(3000);
// });