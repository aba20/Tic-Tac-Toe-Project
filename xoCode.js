let counter = 0;
const winChance = [
    ['#sq1', '#sq2', '#sq3'],//   [0]     [1,2,3],       
    ['#sq4', '#sq5', '#sq6'],//   [1]     [4,5,6],
    ['#sq7', '#sq8', '#sq9'],//   [2]     [7,8,9],

    ['#sq1', '#sq5', '#sq9'],//   [3]     [1,5,9],
    ['#sq3', '#sq5', '#sq7'],//   [4]     [3,5,7],

    ['#sq1', '#sq4', '#sq7'],//   [5]     [1,4,7],
    ['#sq2', '#sq5', '#sq8'],//   [6]     [2,5,8],
    ['#sq3', '#sq6', '#sq9'] //   [7]     [3,6,9],    
];
const theGame = function (id, player) {
    let newId = "#" + id

    for (let i = 0; i < winChance.length; i++) {
        for (let j = 0; j < winChance[i].length; j++) {
            if (newId == winChance[i][j]) {
                winChance[i][j] = player
            }
        }
    };
    setTimeout(checkWin, 200);
};

/*  clicker on the game allows to click and identifies
            which one is clicked.   */

let plyerTurn = true;
const $itemsCall = $('.items')

const clicker = function () {
    console.log($(this).attr('id'))

    counter++
    if (plyerTurn === true) {
        $(this).text('X')
        plyerTurn = false
        $(this).unbind()
        theGame($(this).attr('id'), "X")
    } else {
        $(this).text('O')
        plyerTurn = true
        $(this).unbind()
        theGame($(this).attr('id'), "O")
    }

    // const aninmatItems = document.querySelector('.items');
    $(this).addClass('animated')
    $(this).addClass( 'pulse')
};
$itemsCall.click(clicker);


// this is for hovering and it colors.
// this is to change color when it's hovering.
const hoverColor = function () {
    $(this).css('background-color', '#876635')
};
// this is to change back the color when it's not hovering.
const hoverColorLeave = function () {
    $(this).css('background-color', '#292723')
};
$itemsCall.mouseenter(hoverColor);
$itemsCall.mouseleave(hoverColorLeave);

// Replay click and foreward to play agian.
const $replayCall = $('#replay');
const replayFunction = function () {
    location.reload()
}
$replayCall.click(replayFunction);
$replayCall.mouseenter(hoverColor);
$replayCall.mouseleave(hoverColorLeave);

const endGame = function () {
    $itemsCall.off('click')
}

// this is a function to check the winner from the loop above 
const checkWin = function () {
    let winner = 'O';
    if (winChance[0][0] === winChance[0][1] && winChance[0][0] == winChance[0][2]) {
        if (!plyerTurn) {
            winner = 'X'
        }
        alert(winner + " win");
        endGame()
    } else
        if (winChance[1][0] === winChance[1][1] && winChance[1][0] == winChance[1][2]) {
            if (!plyerTurn) {
                winner = 'X'
            }
            alert(winner + " win"); endGame()
        } else
            if (winChance[2][0] === winChance[2][1] && winChance[2][0] == winChance[2][2]) {
                if (!plyerTurn) {
                    winner = 'X'
                }
                alert(winner + " win");
                endGame()
            } else
                if (winChance[3][0] === winChance[3][1] && winChance[3][0] == winChance[3][2]) {
                    if (!plyerTurn) {
                        winner = 'X'
                    }
                    alert(winner + " win");
                    endGame()
                } else
                    if (winChance[4][0] === winChance[4][1] && winChance[4][0] == winChance[4][2]) {
                        if (!plyerTurn) {
                            winner = 'X'
                        }
                        alert(winner + " win");
                        endGame()
                    } else
                        if (winChance[5][0] === winChance[5][1] && winChance[5][0] == winChance[5][2]) {
                            if (!plyerTurn) {
                                winner = 'X'
                            }
                            alert(winner + " win");
                            endGame()
                        } else
                            if (winChance[6][0] === winChance[6][1] && winChance[6][0] == winChance[6][2]) {
                                if (!plyerTurn) {
                                    winner = 'X'
                                }
                                alert(winner + " win");
                                endGame()
                            } else
                                if (winChance[7][0] === winChance[7][1] && winChance[7][0] == winChance[7][2]) {
                                    if (!plyerTurn) {
                                        winner = 'X'
                                    }
                                    alert(winner + " win");
                                    endGame()
                                } else if (counter == 9) {
                                    alert("T I E   G A M E")
                                }
}


