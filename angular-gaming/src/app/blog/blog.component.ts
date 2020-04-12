import { Component, OnInit } from '@angular/core';
import {FeedItem,Feed} from '../models/feedcards';
import { FeedsService } from '../feeds.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

//   feeds: Feed = {
//     "items":[
//        {
//           "title":"Mortal Kombat 11 Devs Are Live-Tweeting The First Movie Tonight",
//           "description":"<p>Unlike most video game movies, especially early attempts, the 1995 Mortal Kombat film is not terrible. If you're interested in seeing just <i>how </i>not terrible it is, you can watch it tonight alongside the live-tweeting <a href=\"https://www.gamespot.com/mortal-kombat-11/\">Mortal Kombat 11</a> team.</p><div data-embed-type=\"tweet\" data-src=\"https://twitter.com/MortalKombat/status/1249061220100919296\"><blockquote align=\"center\" class=\"twitter-tweet\" data-conversation=\"none\" data-mce-disable-toolbar=\"true\"><p dir=\"ltr\">Ready for the Tournament?! Sync up with us and press play on <a href=\"https://twitter.com/netflix?ref_src=twsrc^tfw\">@Netflix</a> or your copy of Mortal Kombat tonight at 7:00pm PST. Stretch accordingly. <a href=\"https://twitter.com/hashtag/MortalKombatWatchParty?src=hash&amp;ref_src=twsrc^tfw\">#MortalKombatWatchParty</a> <a href=\"https://t.co/iVvalacv5A\">pic.twitter.com/iVvalacv5A</a></p>— Mortal Kombat 11 (@MortalKombat) <a href=\"https://twitter.com/MortalKombat/status/1249061220100919296?ref_src=twsrc^tfw\">April 11, 2020</a></blockquote></div><p>At 7 PM PT / 10 PM ET, the Mortal Kombat 11 official Twitter account will begin watching and tweeting along to the original movie. You can use the hashtag #MortalKombatWatchParty if you start the movie at the same time, either through your personal copy or via <a href=\"https://www.gamespot.com/netflix/\">Netflix</a>.</p><p>The original Mortal Kombat film featured some <a href=\"https://www.imdb.com/title/tt0113855/\">truly inspired casting</a>. Christopher Lambert starred as Raiden, while Bridgette Wilson of Billy Madison fame played Sonya Blade. Series co-creator Ed Boon performed the voice of Scorpion himself, as no one could match those gravely pipes.</p><a href=\"https://www.gamespot.com/articles/mortal-kombat-11-devs-are-live-tweeting-the-first-/1100-6475933/?ftag=CAD-01-10abi2f\">Continue Reading at GameSpot</a>",
//           "link":"https://www.gamespot.com/articles/mortal-kombat-11-devs-are-live-tweeting-the-first-/1100-6475933/?ftag=CAD-01-10abi2f",
//           "url":"https://www.gamespot.com/articles/mortal-kombat-11-devs-are-live-tweeting-the-first-/1100-6475933/?ftag=CAD-01-10abi2f",
//           "guid":{
//              "_":"1100-6475933",
//              "isPermaLink":[
//                 "false"
//              ]
//           },
//           "category":"",
//           "dc_creator":"Gabe Gurwin",
//           "pubDate":"Sat, 11 Apr 2020 13:15:00 -0700",
//           "created":1586636100000,
//           "media":{
//              "content":[
//                 {
//                    "url":[
//                       "https://gamespot1.cbsistatic.com/uploads/screen_medium/1593/15930215/3534445-81o7x7jenhl._ac_sl1500_.jpg"
//                    ],
//                    "type":[
//                       "image/jpeg"
//                    ],
//                    "width":[
//                       "480"
//                    ],
//                    "height":[
//                       "270"
//                    ]
//                 }
//              ]
//           }
//        },
//        {
//           "title":"The Animal Crossing And Final Fantasy 7 Remake Crossover You Didn't Know You Needed",
//           "description":"<p>Move over, <a href=\"https://www.gamespot.com/articles/doom-eternal-and-animal-crossing-fans-have-become-/1100-6473879/\">Doomguy</a>! Isabelle, and the Animal Crossing universe, may have a new friend. In celebration of <a href=\"https://www.gamespot.com/final-fantasy-vii-remake/\">Final Fantasy VII Remake</a> finally dropping, Twitter user <a href=\"https://twitter.com/catwithmonocle\">Cat with Monocle</a> made some delightful crossover videos.</p><div data-embed-type=\"tweet\" data-src=\"https://twitter.com/catwithmonocle/status/1248626227570561026\"><blockquote align=\"center\" class=\"twitter-tweet\" data-conversation=\"none\" data-mce-disable-toolbar=\"true\"><p dir=\"ltr\">It's THE battle on the biggest bridge in town.<br />(original gameplay footage from <a href=\"https://twitter.com/sagittayystar?ref_src=twsrc^tfw\">@sagittayystar</a>) <a href=\"https://twitter.com/hashtag/AnimalCrossing?src=hash&amp;ref_src=twsrc^tfw\">#AnimalCrossing</a> <a href=\"https://twitter.com/hashtag/FinalFantasy?src=hash&amp;ref_src=twsrc^tfw\">#FinalFantasy</a> <a href=\"https://t.co/RUKNoqsmhG\">pic.twitter.com/RUKNoqsmhG</a></p> — Cat with Monocle (@catwithmonocle) <a href=\"https://twitter.com/catwithmonocle/status/1248626227570561026?ref_src=twsrc^tfw\">April 10, 2020</a></blockquote></div><p>The videos put Villager toe to toe with islands deadliest creature the Tarantula in pure Final Fantasy form. Dramatic music, epic backdrops, and killer tension make this the perfect jump off to a weekend gaming session with two of the biggest releases this year.</p><p>Hopefully, we will continue to see more from the Animal Crossing extend universe, making its way into more upcoming <a href=\"https://www.gamespot.com/articles/video-game-release-dates-of-2020-xbox-series-x-xbo/1100-6469273/\">big releases</a> this year like <a href=\"https://www.gamespot.com/ghost-of-tsushima/\">Ghost of Tsushima</a> and <a href=\"https://www.gamespot.com/cyberpunk-2077/\">Cyberpunk 2077</a>.</p><a href=\"https://www.gamespot.com/articles/the-animal-crossing-and-final-fantasy-7-remake-cro/1100-6475932/?ftag=CAD-01-10abi2f\">Continue Reading at GameSpot</a>",
//           "link":"https://www.gamespot.com/articles/the-animal-crossing-and-final-fantasy-7-remake-cro/1100-6475932/?ftag=CAD-01-10abi2f",
//           "url":"https://www.gamespot.com/articles/the-animal-crossing-and-final-fantasy-7-remake-cro/1100-6475932/?ftag=CAD-01-10abi2f",
//           "guid":{
//              "_":"1100-6475932",
//              "isPermaLink":[
//                 "false"
//              ]
//           },
//           "category":"",
//           "dc_creator":"O'Dell Harmon Jr.",
//           "pubDate":"Sat, 11 Apr 2020 08:52:00 -0700",
//           "created":1586620320000,
//           "media":{
//              "content":[
//                 {
//                    "url":[
//                       "https://gamespot1.cbsistatic.com/uploads/screen_medium/1597/15977951/3653909-ff7-animal%20crossing.jpg"
//                    ],
//                    "type":[
//                       "image/jpeg"
//                    ],
//                    "width":[
//                       "480"
//                    ],
//                    "height":[
//                       "270"
//                    ]
//                 }
//              ]
//           }
//        },
//        {
//           "title":"Overwatch League's Free Tokens Let You Get Your Favorite Team's Skin",
//           "description":"<p>Want to show your pride for your hometown <a href=\"https://www.gamespot.com/overwatch/\">Overwatch</a> team while you move the payload? Blizzard is <a href=\"https://www.dexerto.com/overwatch/how-to-get-an-overwatch-league-skin-for-free-until-april-29-1351976\">currently offering</a> free Overwatch League tokens that you can use to purchase a skin from your favorite team, but you will have to act quickly.</p><p>By signing up on the official <a href=\"https://overwatchleague.com/en-us/email\">Overwatch League website</a> or verifying your existing information, you'll be able to claim 100 Overwatch League tokens on either PC or console. The only information you need to submit is your name, the email address associated with your account, your favorite Overwatch League teams, and your country.</p><p>You'll need to have do this by April 29, and then the tokens will be placed into your Battle.net account by May 6. You also must already have an Overwatch game account and game license on PS4, Xbox One, Switch, or PC.</p><a href=\"https://www.gamespot.com/articles/overwatch-leagues-free-tokens-let-you-get-your-fav/1100-6475930/?ftag=CAD-01-10abi2f\">Continue Reading at GameSpot</a>",
//           "link":"https://www.gamespot.com/articles/overwatch-leagues-free-tokens-let-you-get-your-fav/1100-6475930/?ftag=CAD-01-10abi2f",
//           "url":"https://www.gamespot.com/articles/overwatch-leagues-free-tokens-let-you-get-your-fav/1100-6475930/?ftag=CAD-01-10abi2f",
//           "guid":{
//              "_":"1100-6475930",
//              "isPermaLink":[
//                 "false"
//              ]
//           },
//           "category":"",
//           "dc_creator":"Gabe Gurwin",
//           "pubDate":"Sat, 11 Apr 2020 08:14:00 -0700",
//           "created":1586618040000,
//           "media":{
//              "content":[
//                 {
//                    "url":[
//                       "https://gamespot1.cbsistatic.com/uploads/screen_medium/1593/15930215/3563624-wrecking-ball-screenshot-01.jpg"
//                    ],
//                    "type":[
//                       "image/jpeg"
//                    ],
//                    "width":[
//                       "480"
//                    ],
//                    "height":[
//                       "270"
//                    ]
//                 }
//              ]
//           }
//        },
//        {
//           "title":"CS:GO Update: Patch Notes Show Big SG553 Nerf",
//           "description":"<p>Valve has rolled out a new update in <a href=\"https://www.gamespot.com/counter-strike-global-offensive/\">Counter-Strike: Global Offensive</a>, rebalancing and changing several weapons and making tweaks to the game's maps. Though no individual CS:GO change is likely to massively disrupt the formula, the weapon adjustments could shift competitive play.</p><p>Assault rifles got the bulk of adjustments in the April 10 patch. The SG553 had its rate of fire and accuracy reduced, and the AUG's accuracy was also adjusted to make it more effective while un-scoped and slightly less effective while scoped. The M4A1-S, meanwhile, had its price reduced by $200 to $2900.</p><p>The Deagle and Tec-9 pistols were also adjusted. The Deagle's jumping accuracy has been improved to shorten the time for recovery after landing, and the Tec-9's overall firing accuracy has also been improved. The Bizon submachine gun's armor penetration was improved, as well.</p><a href=\"https://www.gamespot.com/articles/csgo-update-patch-notes-show-big-sg553-nerf/1100-6475929/?ftag=CAD-01-10abi2f\">Continue Reading at GameSpot</a>",
//           "link":"https://www.gamespot.com/articles/csgo-update-patch-notes-show-big-sg553-nerf/1100-6475929/?ftag=CAD-01-10abi2f",
//           "url":"https://www.gamespot.com/articles/csgo-update-patch-notes-show-big-sg553-nerf/1100-6475929/?ftag=CAD-01-10abi2f",
//           "guid":{
//              "_":"1100-6475929",
//              "isPermaLink":[
//                 "false"
//              ]
//           },
//           "category":"",
//           "dc_creator":"Gabe Gurwin",
//           "pubDate":"Sat, 11 Apr 2020 07:02:00 -0700",
//           "created":1586613720000,
//           "media":{
//              "content":[
//                 {
//                    "url":[
//                       "https://gamespot1.cbsistatic.com/uploads/screen_medium/mig/9/7/1/2/1789712-639765_20110922_006.jpg"
//                    ],
//                    "type":[
//                       "image/jpeg"
//                    ],
//                    "width":[
//                       "480"
//                    ],
//                    "height":[
//                       "270"
//                    ]
//                 }
//              ]
//           }
//        },
//        {
//           "title":"MLB Starts Online Season With MLB The Show Players League",
//           "description":"<p>Major League Baseball announced Friday that for the first time, it would host a virtual baseball season with 30 MLB athletes in PS4's <a href=\"https://www.gamespot.com/mlb-the-show-20/\">MLB The Show 20</a>. The season will consist of 29 three-inning games throughout April, with the top eight teams making it to the playoffs, ending with the two best teams going head to head in the World Series.</p><div data-embed-type=\"tweet\" data-src=\"https://twitter.com/PlayStation/status/1248638179701190657\"><blockquote align=\"center\" class=\"twitter-tweet\" data-conversation=\"none\" data-mce-disable-toolbar=\"true\"><p dir=\"ltr\">Don’t miss a single inning. Follow <a href=\"https://twitter.com/MLB?ref_src=twsrc^tfw\">@MLB</a>, <a href=\"https://twitter.com/MLB_PLAYERS?ref_src=twsrc^tfw\">@MLB_PLAYERS</a>, <a href=\"https://twitter.com/MLBTheShow?ref_src=twsrc^tfw\">@MLBTheShow</a>, and the players for stream timing and info. <a href=\"https://t.co/Pek3c0koyS\">https://t.co/Pek3c0koyS</a></p> — PlayStation (@PlayStation) <a href=\"https://twitter.com/PlayStation/status/1248638179701190657?ref_src=twsrc^tfw\">April 10, 2020</a></blockquote></div><p> </p><p>The season opener started April 10 with Amir Garrett, of the Cincinnati Reds, beating Blake Snell, pitcher for Tampa Bay Rays on MLB Network’s <a href=\"https://www.twitch.tv/mlbnetwork\">Twitch </a>account. Players were ecstatically jumping up and down on-screen and showing frustration in the inaugural game.</p><a href=\"https://www.gamespot.com/articles/mlb-starts-online-season-with-mlb-the-show-players/1100-6475931/?ftag=CAD-01-10abi2f\">Continue Reading at GameSpot</a>",
//           "link":"https://www.gamespot.com/articles/mlb-starts-online-season-with-mlb-the-show-players/1100-6475931/?ftag=CAD-01-10abi2f",
//           "url":"https://www.gamespot.com/articles/mlb-starts-online-season-with-mlb-the-show-players/1100-6475931/?ftag=CAD-01-10abi2f",
//           "guid":{
//              "_":"1100-6475931",
//              "isPermaLink":[
//                 "false"
//              ]
//           },
//           "category":"",
//           "dc_creator":"O'Dell Harmon Jr.",
//           "pubDate":"Sat, 11 Apr 2020 06:48:00 -0700",
//           "created":1586612880000,
//           "media":{
//              "content":[
//                 {
//                    "url":[
//                       "https://gamespot1.cbsistatic.com/uploads/screen_medium/1597/15977951/3653897-mlb%20the%20show%20players%20league.jpg"
//                    ],
//                    "type":[
//                       "image/jpeg"
//                    ],
//                    "width":[
//                       "480"
//                    ],
//                    "height":[
//                       "270"
//                    ]
//                 }
//              ]
//           }
//        },
//        {
//           "title":"Animal Crossing: New Horizons Balloon Guide - Gift Types, Tips, And More",
//           "description":"<p dir=\"ltr\">One of the many quirks to island life in <a href=\"https://www.gamespot.com/animal-crossing-new-horizons/\">Animal Crossing: New Horizons</a> is that balloons carrying presents will periodically float overhead. These balloon gifts can contain a variety of items, from crafting materials to bells to rare DIY recipes, and you can even farm balloons to get the gifts you want--provided you have some patience. While there's no specific way to get balloons to spawn on your island, there are specific times and locations they'll spawn. Below we detail where and when you can look for balloons, what you can expect to get from them, and more.</p><p dir=\"ltr\">For more Animal Crossing tips, be sure to check out our lists of <a href=\"https://www.gamespot.com/articles/animal-crossing-new-horizons-fish-guide-how-to-cat/1100-6474887/\">all the fish</a> and <a href=\"https://www.gamespot.com/articles/animal-crossing-new-horizons-bug-guide/1100-6475001/\">bugs you can catch</a> in the game. For even more advanced tips, check out our full <a href=\"https://www.gamespot.com/articles/animal-crossing-turnips-guide-how-to-play-new-hori/1100-6475474/\">turnip stalk market guide</a> and our <a href=\"https://www.gamespot.com/articles/animal-crossing-terraforming-guide-how-to-unlock-a/1100-6475813/\">guide to terraforming</a>.</p><h2 dir=\"ltr\">Balloon Basics: How To Pop Balloons</h2><p dir=\"ltr\">As you go about your business you may see a balloon floating by--or you might hear it first, since balloons have a windy sort of sound to them. When you encounter a balloon, pull out your <strong>slingshot</strong>--which you can craft yourself or buy at Nook's Cranny--line yourself up underneath the balloon, and shoot. If your aim is correct, the balloon will pop and the gift will fall to the ground.</p><a href=\"https://www.gamespot.com/articles/animal-crossing-new-horizons-balloon-guide-gift-ty/1100-6475927/?ftag=CAD-01-10abi2f\">Continue Reading at GameSpot</a>",
//           "link":"https://www.gamespot.com/articles/animal-crossing-new-horizons-balloon-guide-gift-ty/1100-6475927/?ftag=CAD-01-10abi2f",
//           "url":"https://www.gamespot.com/articles/animal-crossing-new-horizons-balloon-guide-gift-ty/1100-6475927/?ftag=CAD-01-10abi2f",
//           "guid":{
//              "_":"1100-6475927",
//              "isPermaLink":[
//                 "false"
//              ]
//           },
//           "category":"",
//           "dc_creator":"Kallie Plagge",
//           "pubDate":"Fri, 10 Apr 2020 17:31:00 -0700",
//           "created":1586565060000,
//           "media":{
//              "content":[
//                 {
//                    "url":[
//                       "https://gamespot1.cbsistatic.com/uploads/screen_medium/1575/15759911/3653799-2020030612302500-02cb906ea538a35643c1e1484c4b947d.jpg"
//                    ],
//                    "type":[
//                       "image/jpeg"
//                    ],
//                    "width":[
//                       "480"
//                    ],
//                    "height":[
//                       "270"
//                    ]
//                 }
//              ]
//           }
//        },
//        {
//           "title":"Good News Gaming: Dark Souls 3's Ring Fit Mod Looks Exhausting And Fun",
//           "description":"<p>Good News Gaming is back and our mission to highlight uplifting news stories you might have missed continues. Social isolation can be tricky, but if you look in the right places you'll find there's plenty to keep the spirits up and the smiles wide. Things like cool initiatives that developers are undertaking to improve the world, daft memes that folks are creating, and generally just fun things people are doing in games to make us smile.</p><p>We're here to point you to the right places and, this week, we take a look at how playing <a href=\"https://www.gamespot.com/borderlands-3/\">Borderlands 3</a> can help real-world medical research thanks to Borderlands Science. One man has decided <a href=\"https://www.gamespot.com/dark-souls-iii/\">Dark Souls III</a> isn't challenging enough as is and modded his Ring Fit controller for it--squat to swig Estus sounds like a nightmare.</p><video data-embed-type=\"video\" data-src=\"https://www.youtube.com/watch?v=q1Bb35Mxy0g\" data-width=\"854\" data-height=\"480\" data-embed-url=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fq1Bb35Mxy0g%3Fwmode%3Dopaque&amp;wmode=opaque&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dq1Bb35Mxy0g&amp;key=4de70bf370934f33a67422a7b05063bd&amp;type=text%2Fhtml&amp;schema=youtube\"></video><p>We've also got a handy-dandy list of free games that you can grab right now, including <a href=\"https://www.gamespot.com/uncharted-4-a-thiefs-end/\">Uncharted 4 </a>and access to Google Stadia for free. Plus, there's a look at some of the incredible and creative things people are making in <a href=\"https://www.gamespot.com/animal-crossing-new-horizons/\">Animal Crossing: New Horizons</a>.</p><a href=\"https://www.gamespot.com/articles/good-news-gaming-dark-souls-3s-ring-fit-mod-looks-/1100-6475924/?ftag=CAD-01-10abi2f\">Continue Reading at GameSpot</a>",
//           "link":"https://www.gamespot.com/articles/good-news-gaming-dark-souls-3s-ring-fit-mod-looks-/1100-6475924/?ftag=CAD-01-10abi2f",
//           "url":"https://www.gamespot.com/articles/good-news-gaming-dark-souls-3s-ring-fit-mod-looks-/1100-6475924/?ftag=CAD-01-10abi2f",
//           "guid":{
//              "_":"1100-6475924",
//              "isPermaLink":[
//                 "false"
//              ]
//           },
//           "category":"",
//           "dc_creator":"Tamoor Hussain",
//           "pubDate":"Fri, 10 Apr 2020 17:00:00 -0700",
//           "created":1586563200000,
//           "media":{
//              "content":[
//                 {
//                    "url":[
//                       "https://gamespot1.cbsistatic.com/uploads/screen_medium/43/434805/3653702-gng2_site.jpg"
//                    ],
//                    "type":[
//                       "image/jpeg"
//                    ],
//                    "width":[
//                       "480"
//                    ],
//                    "height":[
//                       "270"
//                    ]
//                 }
//              ]
//           }
//        },
//        {
//           "title":"Valorant Beta: Tips, Tactics, And Everything You Need To Know",
//           "description":"<p dir=\"ltr\">There's a ton of interest around <a href=\"https://www.gamespot.com/valorant/\">Valorant</a>, the character-based tactical shooter from Riot Games (developers of <a href=\"https://www.gamespot.com/league-of-legends/\">League of Legends</a> and Teamfight Tactics). It set Twitch streaming viewership records with 34 million hours watched in a single day and, at one point, reached a peak concurrent of 1.7 million viewers.</p><p dir=\"ltr\">Whether or not it's from the thirst for beta access, Valorant is gaining notoriety by combining aspects of <a href=\"https://www.gamespot.com/counter-strike-global-offensive/\">Counter-Strike: Global Offensive</a>, <a href=\"https://www.gamespot.com/tom-clancys-rainbow-six-siege/\">Rainbow Six Siege</a>, and <a href=\"https://www.gamespot.com/overwatch/\">Overwatch</a>. For those who haven't dug into its systems or haven't even had a chance to play, here's our basic rundown so you can get a full picture of what Valorant is about.</p><h3 dir=\"ltr\">Agents Are The Real Heroes</h3><p dir=\"ltr\">The \"heroes\" in Valorant are called Agents and there are five to start off with an additional five to unlock, which you get from simply playing the game and earning XP on your account. Each player chooses who to play as throughout an entire match, and only one of each Agent is allowed per team.</p><a href=\"https://www.gamespot.com/articles/valorant-beta-tips-tactics-and-everything-you-need/1100-6475926/?ftag=CAD-01-10abi2f\">Continue Reading at GameSpot</a>",
//           "link":"https://www.gamespot.com/articles/valorant-beta-tips-tactics-and-everything-you-need/1100-6475926/?ftag=CAD-01-10abi2f",
//           "url":"https://www.gamespot.com/articles/valorant-beta-tips-tactics-and-everything-you-need/1100-6475926/?ftag=CAD-01-10abi2f",
//           "guid":{
//              "_":"1100-6475926",
//              "isPermaLink":[
//                 "false"
//              ]
//           },
//           "category":"",
//           "dc_creator":"Aaron Sampson",
//           "pubDate":"Fri, 10 Apr 2020 16:03:00 -0700",
//           "created":1586559780000,
//           "media":{
//              "content":[
//                 {
//                    "url":[
//                       "https://gamespot1.cbsistatic.com/uploads/screen_medium/1574/15747411/3652722-1500x500.jpg"
//                    ],
//                    "type":[
//                       "image/jpeg"
//                    ],
//                    "width":[
//                       "480"
//                    ],
//                    "height":[
//                       "270"
//                    ]
//                 }
//              ]
//           }
//        },
//        {
//           "title":"Final Fantasy 7 Remake Materia Guide: Essential Materia You Might've Missed",
//           "description":"<p><a href=\"https://www.gamespot.com/final-fantasy-vii-remake/\">Final Fantasy 7 Remake</a> is a massive game with a mostly straightforward structure. Throughout its 40-plus hour playtime, you'll go from dungeon to dungeon, completing some side-missions along the way, while pushing the story forward and rarely looking back. If you allow yourself to be swept up in the momentum of your mission to liberate Midgar, it can be easy to miss valuable collectibles accidentally. Some of the most important is Materia, which are colored orbs you can equip to characters to beef up their base attack skills by providing them spells, abilities, and summons.</p><p dir=\"ltr\">You're not going to want to bypass all the useful Materia you can collect throughout your journey. Below, we've detailed the easiest ones to miss, which includes info on what they do and how to find them. With this guide, you'll be able to find Materia like Revival, Elemental, HP Up, Magnify, and more. </p><p dir=\"ltr\">Be sure to check back often as we update this feature with even more essential Materia you might've missed. For more about Materia, you should also read our <a href=\"https://www.gamespot.com/articles/final-fantasy-7-remake-materia-loadout-guide-impor/1100-6475765/\">Materia loadout guide</a> about how to build the proper set for your party. Otherwise, read our <a href=\"https://www.gamespot.com/reviews/final-fantasy-7-remake-review-limit-break/1900-6417445/\">FF7 Remake review</a>.</p><a href=\"https://www.gamespot.com/articles/final-fantasy-7-remake-materia-guide-essential-mat/1100-6475922/?ftag=CAD-01-10abi2f\">Continue Reading at GameSpot</a>",
//           "link":"https://www.gamespot.com/articles/final-fantasy-7-remake-materia-guide-essential-mat/1100-6475922/?ftag=CAD-01-10abi2f",
//           "url":"https://www.gamespot.com/articles/final-fantasy-7-remake-materia-guide-essential-mat/1100-6475922/?ftag=CAD-01-10abi2f",
//           "guid":{
//              "_":"1100-6475922",
//              "isPermaLink":[
//                 "false"
//              ]
//           },
//           "category":"",
//           "dc_creator":"Matt Espineli",
//           "pubDate":"Fri, 10 Apr 2020 14:23:00 -0700",
//           "created":1586553780000,
//           "media":{
//              "content":[
//                 {
//                    "url":[
//                       "https://gamespot1.cbsistatic.com/uploads/screen_medium/1552/15524586/3653739-materiaaaaa.png"
//                    ],
//                    "type":[
//                       "image/png"
//                    ],
//                    "width":[
//                       "480"
//                    ],
//                    "height":[
//                       "270"
//                    ]
//                 }
//              ]
//           }
//        },
//        {
//           "title":"What Would Suit Tifa Choices: Final Fantasy 7 Remake Dress Guide",
//           "description":"<p>There are a few points in <a href=\"https://www.gamespot.com/final-fantasy-vii-remake/\">Final Fantasy 7 Remake</a> where your actions affect the story later on, and it's definitely not clear how your answers will change things. One of those moments is in <a href=\"https://www.gamespot.com/articles/final-fantasy-7-remake-chapter-3-walkthrough-home-/1100-6475894/\">Chapter 3</a>, when you can spend a few minutes alone with Tifa. When she suggests dressing up and going out with Cloud, Tifa asks you what kind of outfit would suit her for the date. What you answer will change a later event slightly, and ties into a Trophy you can only earn once you fully completed the game.</p><p><em>Note: Spoilers for Final Fantasy 7 Remake's story beyond this point. They're minor, but if you want to experience everything yourself, quit reading and go play.</em></p><h2>What Would Suit Tifa Answers And Effects</h2><p>You first spend time with Tifa in FF7 Remake when you reach Sector 7 in Chapter 3. At that point, you'll have several side-quests you can complete in the town to earn various rewards--check out our <a href=\"https://www.gamespot.com/articles/final-fantasy-7-remake-chapter-3-walkthrough-home-/1100-6475894/\">full Chapter 3 walkthrough</a> for everything you need to know about them.</p><a href=\"https://www.gamespot.com/articles/what-would-suit-tifa-choices-final-fantasy-7-remak/1100-6475925/?ftag=CAD-01-10abi2f\">Continue Reading at GameSpot</a>",
//           "link":"https://www.gamespot.com/articles/what-would-suit-tifa-choices-final-fantasy-7-remak/1100-6475925/?ftag=CAD-01-10abi2f",
//           "url":"https://www.gamespot.com/articles/what-would-suit-tifa-choices-final-fantasy-7-remak/1100-6475925/?ftag=CAD-01-10abi2f",
//           "guid":{
//              "_":"1100-6475925",
//              "isPermaLink":[
//                 "false"
//              ]
//           },
//           "category":"",
//           "dc_creator":"Phil Hornshaw",
//           "pubDate":"Fri, 10 Apr 2020 13:59:00 -0700",
//           "created":1586552340000,
//           "media":{
//              "content":[
//                 {
//                    "url":[
//                       "https://gamespot1.cbsistatic.com/uploads/screen_medium/1581/15811374/3653723-final%20fantasy%20vii%20remake_20200410133520.jpg"
//                    ],
//                    "type":[
//                       "image/jpeg"
//                    ],
//                    "width":[
//                       "480"
//                    ],
//                    "height":[
//                       "270"
//                    ]
//                 }
//              ]
//           }
//        },
//        {
//           "title":"Nioh 2 Update Addresses Yokai Abilities And More, Full Patch Notes Revealed",
//           "description":"<p>Developer Team Ninja has dropped a new update for the PS4 samurai Soul-like <a href=\"https://www.gamespot.com/nioh-2/\">Nioh 2</a> that \"primarily focuse[s] on Yokai abilities.\" We've compiled the full patch notes below.</p><div data-src=\"https://twitter.com/TeamNINJAStudio/status/1248691190754693123\" data-embed-type=\"tweet\"><blockquote align=\"center\" class=\"twitter-tweet\" data-mce-disable-toolbar=\"true\" data-conversation=\"none\"><p dir=\"ltr\">[Update] <br />Latest patch v1.08 has now rolled out. This patch is primarily focused on Yokai Abilities. Please read all the adjustments on the images below and continue to improve your yokai hunting techniques 👹! <a href=\"https://twitter.com/hashtag/Nioh2?src=hash&amp;ref_src=twsrc^tfw\">#Nioh2</a> <a href=\"https://twitter.com/hashtag/PlayStation4?src=hash&amp;ref_src=twsrc^tfw\">#PlayStation4</a> <a href=\"https://t.co/llDsZzsSdT\">pic.twitter.com/llDsZzsSdT</a></p> — Team NINJA (@TeamNINJAStudio) <a href=\"https://twitter.com/TeamNINJAStudio/status/1248691190754693123?ref_src=twsrc^tfw\">April 10, 2020</a></blockquote></div><p>The update makes a number of adjustments to Nioh 2's various Soul Cores. Many of these tweaks make the Yokai abilities easier to execute, cause them to do more damage and produce more hits, decrease startup and recovery time, increase drop rates, and more. Team Ninja said these alterations should provide \"a more balanced and well-rounded experience for the player.\"</p><p>In addition to adjusting the Yokai abilities, Team Ninja also tweaked some of Nioh 2's mechanics to make them a little more forgiving. These include increasing the success window of the Ki Pulse, adjusting a bunch of different weapon skills, fixing a host of issues related to Yokai Shift and the Blacksmith, and more.</p><a href=\"https://www.gamespot.com/articles/nioh-2-update-addresses-yokai-abilities-and-more-f/1100-6475923/?ftag=CAD-01-10abi2f\">Continue Reading at GameSpot</a>",
//           "link":"https://www.gamespot.com/articles/nioh-2-update-addresses-yokai-abilities-and-more-f/1100-6475923/?ftag=CAD-01-10abi2f",
//           "url":"https://www.gamespot.com/articles/nioh-2-update-addresses-yokai-abilities-and-more-f/1100-6475923/?ftag=CAD-01-10abi2f",
//           "guid":{
//              "_":"1100-6475923",
//              "isPermaLink":[
//                 "false"
//              ]
//           },
//           "category":"",
//           "dc_creator":"Jeremy Winslow",
//           "pubDate":"Fri, 10 Apr 2020 13:02:00 -0700",
//           "created":1586548920000,
//           "media":{
//              "content":[
//                 {
//                    "url":[
//                       "https://gamespot1.cbsistatic.com/uploads/screen_medium/1578/15789366/3653701-056311.jpg"
//                    ],
//                    "type":[
//                       "image/jpeg"
//                    ],
//                    "width":[
//                       "480"
//                    ],
//                    "height":[
//                       "270"
//                    ]
//                 }
//              ]
//           }
//        },
//        {
//           "title":"Dragon Ball Z: Kakarot Discounted To Lowest Price Yet At Amazon",
//           "description":"<p><a href=\"https://www.gamespot.com/dragon-ball-z-kakarot/\">Dragon Ball Z: Kakarot</a> has been on sale often since its January release on PS4, Xbox One, and PC, but we've never seen it for less than $40. If you haven't scooped up the open-world action-RPG based on the incredibly popular anime, Amazon is selling the <a href=\"https://www.amazon.com/Dragon-Ball-Game-Project-PlayStation-4/dp/B07N3GM3KY?tag=gamespotdeals-20\">PS4 and Xbox One versions for just $35</a> right now.</p><div title=\"\" data-embed-type=\"buylink\" data-size=\"buylink__small\" data-title=\"\" data-collection=\"%7B%22text%22:%22See%20at%20Amazon%22,%22url%22:%22https://www.amazon.com/Dragon-Ball-Game-Project-PlayStation-4/dp/B07N3GM3KY?tag=gamespotdeals-20%22%7D\"><a href=\"https://www.amazon.com/Dragon-Ball-Game-Project-PlayStation-4/dp/B07N3GM3KY?tag=gamespotdeals-20\"> See at Amazon </a></div><p> </p><p>It's important to note that neither version will ship right away. Amazon estimates that both will be back in stock on April 22. Still, you can order now for something to look forward to. Plus, it's unlikely this price will hold for long, and we imagine it might sell out, too.</p><a href=\"https://www.gamespot.com/articles/dragon-ball-z-kakarot-discounted-to-lowest-price-y/1100-6475920/?ftag=CAD-01-10abi2f\">Continue Reading at GameSpot</a>",
//           "link":"https://www.gamespot.com/articles/dragon-ball-z-kakarot-discounted-to-lowest-price-y/1100-6475920/?ftag=CAD-01-10abi2f",
//           "url":"https://www.gamespot.com/articles/dragon-ball-z-kakarot-discounted-to-lowest-price-y/1100-6475920/?ftag=CAD-01-10abi2f",
//           "guid":{
//              "_":"1100-6475920",
//              "isPermaLink":[
//                 "false"
//              ]
//           },
//           "category":"",
//           "dc_creator":"Steven Petite",
//           "pubDate":"Fri, 10 Apr 2020 12:37:00 -0700",
//           "created":1586547420000,
//           "media":{
//              "content":[
//                 {
//                    "url":[
//                       "https://gamespot1.cbsistatic.com/uploads/screen_medium/1595/15950357/3653677-dragon%20ball%20z%20kakarot.jpeg"
//                    ],
//                    "type":[
//                       "image/jpeg"
//                    ],
//                    "width":[
//                       "480"
//                    ],
//                    "height":[
//                       "270"
//                    ]
//                 }
//              ]
//           }
//        },
//        {
//           "title":"Final Fantasy 7 Remake Launch Inspires Tributes From The Doom Slayer, Arby's",
//           "description":"<p><a href=\"https://www.gamespot.com/final-fantasy-vii-remake/\">Final Fantasy 7 Remake</a> has finally launched, following a years-long wait that was preceded by still more years of rumors and fan wishes. Now that the day has arrived, other companies are giving congrats and well-wishes to the new RPG from Square Enix via social media.</p><p>One of the coolest tributes has to be from the <a href=\"https://twitter.com/DOOM/status/1248648412792225793\">official Doom account</a>, which shared a piece of crossover art modeled after the iconic image of Cloud standing in front of Shinra headquarters. Not to be outdone, the restaurant chain <a href=\"https://twitter.com/Arbys/status/1248627043710967809\">Arby's </a>made Cloud's motorcycle and buster sword out of its fast food boxes.</p><p>On a more serious note, the PlayStation account shared a short video featuring lead producer Yoshinori Kitase. Kitase explains some of the thinking that went into the Remake and how he reenvisioned key scenes from the original.</p><a href=\"https://www.gamespot.com/articles/final-fantasy-7-remake-launch-inspires-tributes-fr/1100-6475918/?ftag=CAD-01-10abi2f\">Continue Reading at GameSpot</a>",
//           "link":"https://www.gamespot.com/articles/final-fantasy-7-remake-launch-inspires-tributes-fr/1100-6475918/?ftag=CAD-01-10abi2f",
//           "url":"https://www.gamespot.com/articles/final-fantasy-7-remake-launch-inspires-tributes-fr/1100-6475918/?ftag=CAD-01-10abi2f",
//           "guid":{
//              "_":"1100-6475918",
//              "isPermaLink":[
//                 "false"
//              ]
//           },
//           "category":"",
//           "dc_creator":"Steve Watts",
//           "pubDate":"Fri, 10 Apr 2020 12:23:00 -0700",
//           "created":1586546580000,
//           "media":{
//              "content":[
//                 {
//                    "url":[
//                       "https://gamespot1.cbsistatic.com/uploads/screen_medium/1585/15855271/3653672-3650722-cool%20pic.jpg"
//                    ],
//                    "type":[
//                       "image/jpeg"
//                    ],
//                    "width":[
//                       "480"
//                    ],
//                    "height":[
//                       "270"
//                    ]
//                 }
//              ]
//           }
//        },
//        {
//           "title":"Final Fantasy 7 Remake Guide: Secret Medicine Locations",
//           "description":"<p dir=\"ltr\">Before you reach the last act of <a href=\"https://www.gamespot.com/final-fantasy-vii-remake/\">Final Fantasy 7 Remake</a>, you'll find a load of side-quests to complete in Chapter 14. Unlike earlier quests, these ones are a little tougher to figure out, with the people you need to talk to and the locations you need to visit being a lot less obvious than they have been in the past. For the \"Secret Medicine\" side-quest, you actually need to access a second quest to find everything you need.</p><p dir=\"ltr\">We've run down where to find all three ingredients for the \"Secret Medicine\" quest, so you can complete it quickly and efficiently to get one of the better quest rewards in the game. Here's everything you need to know.</p><p dir=\"ltr\">Check out our <a href=\"https://www.gamespot.com/articles/final-fantasy-7-remake-walkthrough-guides-and-tips/1100-6475886/\">Final Fantasy 7 Remake guide rundown</a> for everything else you need to know about <a href=\"https://www.gamespot.com/reviews/final-fantasy-7-remake-review-limit-break/1900-6417445/\">FF7 Remake</a>!</p><a href=\"https://www.gamespot.com/articles/final-fantasy-7-remake-guide-secret-medicine-locat/1100-6475915/?ftag=CAD-01-10abi2f\">Continue Reading at GameSpot</a>",
//           "link":"https://www.gamespot.com/articles/final-fantasy-7-remake-guide-secret-medicine-locat/1100-6475915/?ftag=CAD-01-10abi2f",
//           "url":"https://www.gamespot.com/articles/final-fantasy-7-remake-guide-secret-medicine-locat/1100-6475915/?ftag=CAD-01-10abi2f",
//           "guid":{
//              "_":"1100-6475915",
//              "isPermaLink":[
//                 "false"
//              ]
//           },
//           "category":"",
//           "dc_creator":"Phil Hornshaw",
//           "pubDate":"Fri, 10 Apr 2020 12:12:00 -0700",
//           "created":1586545920000,
//           "media":{
//              "content":[
//                 {
//                    "url":[
//                       "https://gamespot1.cbsistatic.com/uploads/screen_medium/1581/15811374/3653639-final%20fantasy%20vii%20remake_20200410114305.jpg"
//                    ],
//                    "type":[
//                       "image/jpeg"
//                    ],
//                    "width":[
//                       "480"
//                    ],
//                    "height":[
//                       "270"
//                    ]
//                 }
//              ]
//           }
//        },
//        {
//           "title":"Monster Hunter World Iceborne Seasonal Event Now Live On All Platforms",
//           "description":"<p>Capcom has announced that the <a href=\"http://www.capcom-unity.com/monster_hunter/blog/2020/04/09/stop-and-smell-the-roses-in-the-monster-hunter-world-iceborne-full-bloom-fest-now-through-may-7\">Full Bloom Fest seasonal event</a> is now live in <a href=\"https://www.gamespot.com/monster-hunter-world/\">Monster Hunter World: Iceborne</a> on PC, PlayStation 4, and Xbox One.</p><p>The event, which runs until May 7 at 4:59 PM PT / 7:59 PM ET / 11:59 GMT, gives players the chance to earn a variety of gear, including weapons, armor, pendants, and more. Every player will receive one special ticket for each day they log in to Monster Hunter World. These can be used to craft new equipment for yourself and your Palico, but that's not the only way to earn them.</p><p>You can also get tickets by taking on Event Quests or assisting lower rank players via Hunter Helper, which will reward you with VIP tickets. These can be used to craft \"the Layered Armor equivalent of your Rose outfit and various other weapon pendants following the same rose bouquet motif.\"</p><a href=\"https://www.gamespot.com/articles/monster-hunter-world-iceborne-seasonal-event-now-l/1100-6475916/?ftag=CAD-01-10abi2f\">Continue Reading at GameSpot</a>",
//           "link":"https://www.gamespot.com/articles/monster-hunter-world-iceborne-seasonal-event-now-l/1100-6475916/?ftag=CAD-01-10abi2f",
//           "url":"https://www.gamespot.com/articles/monster-hunter-world-iceborne-seasonal-event-now-l/1100-6475916/?ftag=CAD-01-10abi2f",
//           "guid":{
//              "_":"1100-6475916",
//              "isPermaLink":[
//                 "false"
//              ]
//           },
//           "category":"",
//           "dc_creator":"Jeremy Winslow",
//           "pubDate":"Fri, 10 Apr 2020 11:58:00 -0700",
//           "created":1586545080000,
//           "media":{
//              "content":[
//                 {
//                    "url":[
//                       "https://gamespot1.cbsistatic.com/uploads/screen_medium/1578/15789366/3653651-3532154-banbaro2_bmp_jpgcopy.jpg"
//                    ],
//                    "type":[
//                       "image/jpeg"
//                    ],
//                    "width":[
//                       "480"
//                    ],
//                    "height":[
//                       "270"
//                    ]
//                 }
//              ]
//           }
//        }
//     ],
//     "title":"GameSpot - Game News",
//     "description":"All the latest GameSpot Game and Tech News",
//     "url":"https://www.gamespot.com/feeds/game-news/",
//     "image":""
//  }

 feeds1: Feed;
 feedsOfAllItems: FeedItem[];

  constructor(private feedsService: FeedsService) {}

  ngOnInit(): void {
    this.feedsService.getFeeds().subscribe(feeds => {
      this.feeds1 = feeds;
      this.feedsOfAllItems = this.feeds1.items;
      console.log(this.feeds1.description);
    });

  }

}
