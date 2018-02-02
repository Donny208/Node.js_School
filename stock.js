var players = [
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434115&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434112&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434133&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434103&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=3483943&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434118&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434094&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434104&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434152&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434148&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434120&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434114&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9137089&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434113&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434108&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434095&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434110&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434101&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434107&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434092&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434096&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434105&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434098&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434109&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434091&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434117&GameID=408866",
    "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434099&GameID=408866"
]

playerData = {
};

sorted = [];

function getPlayerData(link){
    $.get(link, function( data ) {
        webPage = data;
        console.log("Successfully Got "+link)
        var name;
        if (link == "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434091&GameID=408866"){
            name = "donwwright"
        }
        else{
            name = webPage.slice(webPage.indexOf("?nickname=")+10,webPage.indexOf('Send Private Message')-2);
        }
        playerData[name] = {
            "money":JSON.parse(webPage.slice(webPage.indexOf("PortfolioSummary_lblAccountValue")+34,webPage.indexOf("PortfolioSummary_lblAccountValue")+50).replace(/[^\d.-]/g, '')),
            "id": name
        }
    });
}
function getAllData(){
    timer = 250;
    players.forEach(function (link) {
        setTimeout(function () {
            getPlayerData(link)
            if (link == "https://www.investopedia.com/simulator/ranking/viewportfolio.aspx?UserID=9434099&GameID=408866"){
                sortRankings();
            }
        },timer)
        timer = timer + 250
    })
}

function sortRankings(){
    sorted = Object.values(playerData).sort(function(a,b){
        return b.money-a.money;
    })
}
