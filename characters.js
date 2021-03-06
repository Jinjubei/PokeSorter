// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa
 
// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';
 
str_ImgPath = 'http://i.imgur.com/';
var bln_ResultMode = 1;
var int_ResultImg = 2;
var int_ResultRank = 3;
 
var bln_ResultStyle = 0;
 
var bln_ProgessBar = 1;
 
var int_Colspan = 3;
var ary_TitleData = [
   "Red/Blue/Yellow",
   "Gold/Silver/Crystal",
   "Ruby/Saphire/Emerald",
   "Diamond/Perl",
   "Black/White",
   "X/Y",
   "Sun/Moon",
];
 
var ary_CharacterData = [
   [1, "Phoenix Wright",                [1,1,1,1,0,0,1], "W9GjFYq.png"],
   [1, "Mia Fey",                       [1,1,1,0,0,0,0], "wq9dF68.png"],
   [1, "Maya Fey",                      [1,1,1,0,0,0,0], "u28nX8p.png"],
   [1, "Miles Edgeworth",               [1,1,1,0,1,1,1], "abBnJYs.png"],
   [1, "Dick Gumshoe",                  [1,1,1,1,1,1,0], "UihBC5Z.png"],
   [1, "Larry Butz",                    [1,0,1,0,1,1,0], "67UdC9C.png"],
   [1, "Winston Payne",                 [1,1,1,1,1,1,0], "OkN0b4t.png"],
   [1, "Frank Sahwit",                  [1,0,0,0,0,1,0], "lI5Q9I4.png"],
   [1, "April May",                     [1,0,0,0,0,0,0], "QnbkrXm.png"],
   [1, "Redd White",                    [1,0,0,0,0,0,0], "0NwDkmE.png"],
   [1, "Bellboy",                       [1,1,0,0,0,0,0], "mdvFxAG.png"],
   [1, "Marvin Grossberg",              [1,0,1,0,0,0,0], "bKVHQjy.png"],
   [1, "Gregory Edgeworth",             [1,0,0,0,0,1,0], "1r80OC4.png"],
   [1, "Misty Fey",                     [1,0,1,0,0,0,0], "SKChIRW.png"],
   [1, "The Judge",                     [1,1,1,1,1,0,1], "NaCzFqx.png"],
   [1, "Will Powers",                   [1,1,0,0,0,1,0], "6DKW8Nr.png"],
   [1, "Cody Hackins",                  [1,0,0,0,0,0,0], "WquyJYO.png"],
   [1, "Penny Nichols",                 [1,0,0,0,0,1,0], "ldvCXSl.png"],
   [1, "Wendy Oldbag",                  [1,1,1,0,1,0,0], "PaVsNev.png"],
   [1, "Sal Manella",                   [1,0,0,0,0,0,0], "v4kni0H.png"],
   [1, "Dee Vasquez",                   [1,0,0,0,0,0,0], "0HIZxTP.png"],
   [1, "Manfred von Karma",             [1,0,0,0,1,1,0], "p1F6VvQ.png"],
   [1, "Lotta Hart",                    [1,1,0,0,0,1,0], "yBVtQ9l.png"],
   [1, "Yanni Yogi",                    [1,0,0,0,0,0,0], "4CnFllj.png"],
   [1, "Missile",                       [1,0,0,0,1,1,0], "oHYtP10.png"],
   [1, "Polly",                         [1,0,0,0,0,0,0], "WxrkKYt.png"],
   [1, "Lana Skye",                     [1,0,0,0,0,0,0], "I6VqrMx.png"],
   [1, "Ema Skye",                      [1,0,0,1,1,1,0], "57AL4s1.png"],
   [1, "Damon Gant",                    [1,0,0,0,0,0,0], "h3E5Fma.png"],
   [1, "Jake Marshall",                 [1,0,0,0,0,0,0], "nLSjERz.png"],
   [1, "Angel Starr",                   [1,0,0,0,0,0,0], "MHz8BMg.png"],
   [1, "Mike Meekins",                  [1,0,0,1,1,0,0], "tidyO7Z.png"],
   [1, "Maggey Byrde",                  [0,1,1,0,1,0,0], "RIo50ro.png"],
   [1, "Richard Wellington",            [0,1,0,0,0,0,0], "D2eULc7.png"],
   [1, "Franziska von Karma",           [0,1,1,0,1,1,0], "SPBtCdo.png"],
   [1, "Pearl Fey",                     [0,1,1,0,1,0,1], "s31EBq4.png"],
   [1, "Morgan Fey",                    [0,1,1,0,0,0,0], "IuIW2e2.png"],
   [1, "Turner Grey",                   [0,1,0,0,0,0,0], "2wHgoob.png"],
   [1, "Mimi Miney",                    [0,1,0,0,0,0,0], "KquCTdF.png"],
   [1, "Dr. Hickfield",                 [0,1,0,1,0,0,0], "8y8icZL.png"],
   [1, "Max Galactica",                 [0,1,0,0,0,0,0], "5AgK6e9.png"],
   [1, "Regina Berry",                  [0,1,0,0,0,1,0], "e6jyWeh.png"],
   [1, "Money the monkey",              [0,1,0,0,0,1,0], "4HOJt90.png"],
   [1, "Moe",                           [0,1,0,0,0,0,0], "KYlUDif.png"],
   [1, "Benjamin Woodman",              [0,1,0,0,0,0,0], "UDgWyG7.png"],
   [1, "Trilo Quist",                   [0,1,0,0,0,0,0], "5V54JP7.png"],
   [1, "Ken 'Acro' Dingling",           [0,1,0,0,0,0,0], "uRS2HLb.png"],
   [1, "Matt Engarde",                  [0,1,0,0,0,0,0], "biEJEaI.png"],
   [1, "Adrian Andrews",                [0,1,1,0,0,0,0], "e7y9pv7.png"],
   [1, "Shelly de Killer",              [0,1,0,0,0,1,0], "tCGLFCq.png"],
   [1, "Dahlia Hawthorne",              [0,0,1,0,0,0,0], "1M8C98R.png"],
   [1, "Godot / Diego Armando",         [0,0,1,0,0,0,0], "wH6FrjO.png"],
   [1, "Ron DeLite",                    [0,0,1,0,0,0,0], "hJoemwq.png"],
   [1, "Luke Atmey",                    [0,0,1,0,0,0,0], "Qikhzdt.png"],
   [1, "Desirée DeLite",               [0,0,1,0,0,0,0], "wPwzhvM.png"],
   [1, "The Judge's brother",           [0,0,1,0,0,0,0], "gVMBRxJ.png"],
   [1, "Furio Tigre",                   [0,0,1,0,0,0,0], "ejxTnvf.png"],
   [1, "Viola Cadaverini",              [0,0,1,0,0,0,0], "eHygBv0.png"],
   [1, "Victor Kudo",                   [0,0,1,0,0,0,0], "gSoOr9o.png"],
   [1, "Jean Armstrong",                [0,0,1,0,0,0,0], "OlIkLAU.png"],
   [1, "Lisa Basil",                    [0,0,1,0,0,0,0], "95xr7MS.png"],
   [1, "Terry Fawles",                  [0,0,1,0,0,0,0], "kyXa8QS.png"],
   [1, "Iris",                          [0,0,1,0,0,0,0], "zSVA8Ae.png"],
   [1, "Bikini",                        [0,0,1,0,0,0,0], "GPHNPcQ.png"],
   [1, "Apollo Justice",                [0,0,0,1,0,0,1], "kwhf50Q.png"],
   [1, "Trucy Wright",                  [0,0,0,1,0,0,1], "9JHQCxt.png"],
   [1, "Mr. Hat",                       [0,0,0,1,0,0,0], "jgepfqA.png"],
   [1, "Kristoph Gavin",                [0,0,0,1,0,0,0], "MHt3g0Q.png"],
   [1, "Klavier Gavin",                 [0,0,0,1,0,0,1], "19tE8rm.png"],
   [1, "Shadi Smith / Zak Gramarye",    [0,0,0,1,0,0,0], "aLVlYxR.png"],
   [1, "Olga Orly",                     [0,0,0,1,0,0,0], "kTg97ao.png"],
   [1, "Wocky Kitaki",                  [0,0,0,1,0,0,0], "Ti7OSrX.png"],
   [1, "Alita Tiala",                   [0,0,0,1,0,0,0], "nkuSojM.png"],
   [1, "Guy Eldoon",                    [0,0,0,1,0,0,0], "m41tGDR.png"],
   [1, "Plum Kitaki",                   [0,0,0,1,0,0,0], "b1uulii.png"],
   [1, "Winfred 'Big Wins' Kitaki",     [0,0,0,1,0,0,0], "lh785cy.png"],
   [1, "Wesley Stickler",               [0,0,0,1,0,0,0], "97Hx2lP.png"],
   [1, "Lamiroir / Thalassa Gramarye",  [0,0,0,1,0,0,0], "4d9gBfM.png"],
   [1, "Machi Tobaye",                  [0,0,0,1,0,0,0], "MafZJd1.png"],
   [1, "Daryan Crescend",               [0,0,0,1,0,0,0], "OR7PVCV.png"],
   [1, "Valant Gramarye",               [0,0,0,1,0,0,0], "PTpaDEC.png"],
   [1, "Vera Misham",                   [0,0,0,1,0,0,0], "FpilTHK.png"],
   [1, "Drew Misham",                   [0,0,0,1,0,0,0], "otgCskW.png"],
   [1, "Spark Brushel",                 [0,0,0,1,0,0,0], "9bVX4Yp.png"],
   [1, "Kay Faraday",                   [0,0,0,0,1,1,0], "H4No9UH.png"],
   [1, "Jacques Portsman",              [0,0,0,0,1,0,0], "0xQsNCI.png"],
   [1, "Rhoda Teneiro",                 [0,0,0,0,1,0,0], "C7bDMxr.png"],
   [1, "Zinc Lablanc II",               [0,0,0,0,1,0,0], "cAGtJUU.png"],
   [1, "Cammy Meele",                   [0,0,0,0,1,0,0], "cnducNJ.png"],
   [1, "Shi-Long Lang",                 [0,0,0,0,1,1,0], "88kzm2x.png"],
   [1, "'Shin-Na'",                     [0,0,0,0,1,0,0], "JPMfdyo.png"],
   [1, "Ernest Amano",                  [0,0,0,0,1,0,0], "2588ooe.png"],
   [1, "Lance Amano",                   [0,0,0,0,1,0,0], "ffIKjib.png"],
   [1, "Lauren Paups",                  [0,0,0,0,1,0,0], "YX3vE4f.png"],
   [1, "Byrne Faraday",                 [0,0,0,0,1,0,0], "5D9WFMq.png"],
   [1, "Calisto Yew",                   [0,0,0,0,1,0,0], "fN3MMR2.png"],
   [1, "Tyrell Badd",                   [0,0,0,0,1,1,0], "EihCEIF.png"],
   [1, "Colias Palaeno",                [0,0,0,0,1,0,0], "5j0wCsr.png"],
   [1, "Quercus Alba",                  [0,0,0,0,1,0,0], "iSKfoeC.png"],
   [1, "Hakari Mikagami",               [0,0,0,0,0,1,0], "Qo4Fd86.png"],
   [1, "Yumihiko Ichiyanagi",           [0,0,0,0,0,1,0], "nTpbJEl.png"],
   [1, "Tateyuki Shiragaki",            [0,0,0,0,0,1,0], "aPyqtYC.png"],
   [1, "Teikun Ou",                     [0,0,0,0,0,1,0], "Bv7IINE.png"],
   [1, "Manosuke Naitou",               [0,0,0,0,0,1,0], "8Ma7JCq.png"],
   [1, "Mikiko Hayami",                 [0,0,0,0,0,1,0], "AHsMjYn.png"],
   [1, "Souta Sarushiro",               [0,0,0,0,0,1,0], "Zifnoyz.png"],
   [1, "Shuuji Orinaka",                [0,0,0,0,0,1,0], "tGuCY7l.png"],
   [1, "Marie Miwa",                    [0,0,0,0,0,1,0], "NLqZEQc.png"],
   [1, "Ryouken Houinbou",              [0,0,0,0,0,1,0], "zA0etxg.png"],
   [1, "Kuro",                          [0,0,0,0,0,1,0], "LJEAhxq.png"],
   [1, "Issei Tenkai",                  [0,0,0,0,0,1,0], "RhOvZKv.png"],
   [1, "Tsukasa Oyashiki",              [0,0,0,0,0,1,0], "obU8poT.png"],
   [1, "Yutaka Kazami",                 [0,0,0,0,0,1,0], "Fnbp5hG.png"],
   [1, "Delicy Scone",                  [0,0,0,0,0,1,0], "8DcTxIv.png"],
   [1, "Otome Itami",                   [0,0,0,0,0,1,0], "5LMqrjK.png"],
   [1, "Touko Mutou",                   [0,0,0,0,0,1,0], "tTLHZiU.png"],
   [1, "Bansai Ichiyanagi",             [0,0,0,0,0,1,0], "4OaQOdr.png"],
   [1, "Shimon Aizawa",                 [0,0,0,0,0,1,0], "0dRDSeL.png"],
   [1, "Athena Cykes",                  [0,0,0,0,0,0,1], "dZsbkpw.png"],
   [1, "Simon Blackquill",              [0,0,0,0,0,0,1], "CsY28Jv.png"],
   [1, "Taka",                          [0,0,0,0,0,0,1], "oKaNMQ6.png"],
   [1, "Bobby Fulbright",               [0,0,0,0,0,0,1], "Rpjc0ai.png"],
   [1, "Gaspen Payne",                  [0,0,0,0,0,0,1], "MI0Qxoc.png"],
   [1, "Juniper Woods",                 [0,0,0,0,0,0,1], "9PSxlmF.png"],
   [1, "Ted Tonate",                    [0,0,0,0,0,0,1], "44TDtlu.png"],
   [1, "Jinxie Tenma",                  [0,0,0,0,0,0,1], "geihEqL.png"],
   [1, "Damian Tenma",                  [0,0,0,0,0,0,1], "OLozU0z.png"],
   [1, "Phineas Filch",                 [0,0,0,0,0,0,1], "NGjreJ3.png"],
   [1, "Florent L'Belle",               [0,0,0,0,0,0,1], "WfgcnS2.png"],
   [1, "Aristotle Means",               [0,0,0,0,0,0,1], "zmOMGSP.png"],
   [1, "Hugh O'Conner",                 [0,0,0,0,0,0,1], "S0Ik4W7.png"],
   [1, "Robin Newman",                  [0,0,0,0,0,0,1], "RHgtYjl.png"],
   [1, "Myriam Scuttlebutt",            [0,0,0,0,0,0,1], "GYPvh1N.png"],
   [1, "Solomon Starbuck",              [0,0,0,0,0,0,1], "bHzjlNF.png"],
   [1, "Clay Terran",                   [0,0,0,0,0,0,1], "xq3APeP.png"],
   [1, "Yuri Cosmos",                   [0,0,0,0,0,0,1], "OMlJLT8.png"],
   [1, "Aura Blackquill",               [0,0,0,0,0,0,1], "0YWeDeb.png"],
   [1, "Ponco",                         [0,0,0,0,0,0,1], "j2rUDT8.png"],
   [1, "Clonco",                        [0,0,0,0,0,0,1], "uKScYrP.png"],
   [1, "Metis Cykes",                   [0,0,0,0,0,0,1], "y2XVDIl.png"],
];
