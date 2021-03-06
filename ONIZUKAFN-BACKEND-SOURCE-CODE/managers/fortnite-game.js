const { default: axios } = require("axios");
const { application } = require('express')
/**
 * 
 * @param {application} app 
 * @param {String} port 
 */
module.exports = (app, port) => {
    //var lastest = await axios.get("https://api.nitestats.com/v1/epic/builds/fltoken")
    app.get(["/content/api/pages/fortnite-game", "/content/api/pages/"], async (req, res) => {
        var season = "9";
        try {
            season = req.headers["user-agent"].split('-')[1].split('.')[0]
        } catch { }
        finally {
            if (season == "10") {
                season = "x";
            }
        }

        res.json({
            "jcr:isCheckedOut": true,
            "_title": "Fortnite Game",
            "jcr:baseVersion": "a7ca237317f1e7b00bc82e-d9a2-4f0d-b951-704d295cd1aa",
            "_activeDate": "2017-07-24T22:24:02.300Z",
            "lastModified": "2020-11-01T17:36:19.024Z",
            "_locale": "en-US",
            "emergencynotice": {
                "news": {

                    
                },
                "jcr:isCheckedOut": true,
                "_title": "emergencynotice",
                "_noIndex": false,
                "alwaysShow": true,
                "jcr:baseVersion": "a7ca237317f1e761d4ee60-7c40-45a8-aa3e-bb0a2ffa9bb5",
                "_activeDate": "2018-08-06T19:00:26.217Z",
                "lastModified": "2020-10-30T04:50:59.198Z",
                "_locale": "en-US"
            },
            "emergencynoticev2": {
                "jcr:isCheckedOut": true,
                "_title": "emergencynoticev2",
                "_noIndex": false,
                "emergencynotices": {
                    "_type": "Emergency Notices",
                    "emergencynotices": [
                        {
                            "hidden": false,
                            "_type": "CommonUI Emergency Notice Base",
                            "title": "ONIZUKAFN V14",
                            "body": "Server created by Robim \r\n Discord: SU LINK DEL SERVER DE DISCORD",
                        }
                    ]
                },
                "_activeDate": "2018-08-06T19:00:26.217Z",
                "lastModified": "2021-03-17T15:07:27.924Z",
                "_locale": "en-US"

            },
            "shopCarousel": {
                "jcr:isCheckedOut": true,
                "itemsList": {
                    "_type": "ShopCarouselItemList",
                    "items": [{
                        "tileImage": `URL DE LA IMAGEN QUE QUIERES EN LAS NOTICIAS`,
                        "fullTitle": "ONIZUKAFN V14",
                        "hidden": false,
                        "_type": "ShopCarouselItem",
                        "landingPriority": 100,
                        "action": "ShowOfferDetails",
                        "offerId": null,
                        "title": "ONIZUKAFN"
                    }]
                }
            },

            "dynamicbackgrounds": {
                "jcr:isCheckedOut": true,
                "backgrounds": {
                    "backgrounds": [
                        {
                            "stage": `season${17}`,
                            "_type": "DynamicBackground",
                            "key": "lobby"
                        }
                    ],
                    "_type": "DynamicBackgroundList"
                },
                "_title": "dynamicbackgrounds",
                "_noIndex": false,
                "jcr:baseVersion": "a7ca237317f1e7fb739979-8025-4304-bb56-b3ad0080e265",
                "_activeDate": "2019-08-21T15:59:59.342Z",
                "lastModified": "2021-03-16T06:22:03.584Z",
                "_locale": "en-US"
            },

            "_suggestedPrefetch": [
                `URL DE LA IMAGEN QUE QUIERES EN LAS NOTICIAS`
            ]
        })
    })
    //implementation needed in the future, response example: https://api.nitestats.com/v1/epic/prm/motd
    /*app.post("/api/v1/fortnite-br/surfaces/motd/target", (req, res) => {
        res.status(404).end();
    })*/
}
