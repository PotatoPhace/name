var devTool = 0;
var mVol = 1;
var sVol = 1;

//player stats
var pPos = [2,2];
var pMax = 4;
var pHP = pMax;
var fp = 0;
var specl = 0;
var iFrm = false;
var pHit = [true,false,false];
var pColor = "";
var pGreat = 0;
var pShot = [0,0];
var pHeal = false;
var pMist = [false,false,false];
var mistHb = [-5,-5,-5,-5];//startx,starty,perx,pery
var pStats = [0,0,0,0];//DMG,SB,FPS,RGE

//trapoid stats
var tMax = 800;
var tHP = tMax;
var tColor = "#277";
var phase = -2;
var mode = 0;
var atking = false;
var curAtk = null;
var atkSet = [null,null];
var atkLen = [8,10,8];
var atkLenT = [8,10,8];
var atkLenP = [8,10,8];
var atkCnt = 0;
var stab = 0;
var sqreCnt = 0;
var push = tMax-77;
var sChan = 0;
var delay = 750;
var combo = 3;
var hb = {
  ball1: [-1,0],
  ball2: [5,1],
  ball3: [-1,2],
  ball4: [5,3],
  ball5: [-1,4],
  stab: [[1,2,3],[1,2,4],[1,3,4],[2,3,4]]
};
var field = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0]
];  
var credits = [11,false];

//perfetto stats
var tPos = [2,5];
var IvyCnt = 0;
var IvyDial = [
  "Especially not Loui.",
  "Still poised huh, then let me lay your aspirations to rest.",
  "No need Ivy, let me take care of him. He ought to pay after refusing to repay my hit. It is bloody hard to clean up animal corpses.",
  "",
  "I see now, you just wanted more. More more more, you always crave more. You just can't handle when things are taken away from you. ",
  "Well anyways, that's all fine. You will go back now, and fight. Again, and again, and again, and again. Until someone breaks. This was our deal after all.",
]

//unlocking nonesense

var noSpecials = true;
var noPush = true;
var guning = 0;
var timer = 0;
var bumpscocity = 0;
var letsRock = false;

// sound effects

var a = {
  TTheme1: id('aTTheme1'),
  BTheme1: id('aBTheme1'),
  BTheme2: id('aBTheme2'),
  BTheme3: id('aBTheme3'),
  Swipe: id('aSwipe'),
  GSwipe: id('aGSwipe'),
  Punch: id('aPunch'),
  Gun: id('aGun'),
  Heal: id('aHeal'),
  Mist: id('aMist'),
  Broke: id('aBroke'),
  Youch: id('aYouch'),
  Push: id('aPush'),
  P2Now: id('aP2Now'),
  Unlock: id('aUnlock')
};

a.TTheme1.loop = true;
a.BTheme1.loop = true;
a.BTheme2.loop = true;
a.BTheme3.loop = true;

//sprites

var s = {
  sword: "https://i.imgur.com/uoVomzP.png",
  swSlash: "https://i.imgur.com/A6zpNPP.png",
  perGreatSw: "https://i.imgur.com/QW9K3qg.png"
};
//areas

var z = {
  toTitle: {
    bgd: "linear-gradient(0deg, #68b, #589)",
    bos: -1,
    zon: "title",
  }, toHub: {
    bgd: "linear-gradient(180deg, #ed9 0%, #48a 60%, #36e 93%, #953 100%)",
    bos: 0,
    zon: "hub",
  }, toTrapoid: {
    bgd: "radial-gradient(circle, #dc9 0%, #a64 60%, #c85 93%, #431 100%)",
    bos: 1,
    zon: "arena",
  }, toTrigon: {
    bgd: "#fff",
    bos: 2,
    zon: "arena",
  }, toIvy: {
    bgd: "repeating-radial-gradient(#512, #302 80px)",
    bos: 3,
    zon: "arena",
  }
};

//loadouts
var ld = [0,8,0];

var l = {
  wpn: [ //name, unlocked, type, damage, range, description
    ["Sword", true, 0, 4, 3, "whoops", "A small, chiped blade filled with memories, it's been a while. <br>A basic weapon with solid damage and range. It does more damage at the top row."],
    ["Spear", false, 0, 3, 2, "To Unlock <br>Meet your first demise.", "Trapoid always hated this one. It belonged to an old friend. <br>A long weapon with extra reach and low damage."],
    ["Great Sword", false, 1, 7, 3, "To Unlock <br>Beat trapoid phase 1 in under 1:30.", "Trapoid had a brother who went abroad. Trianges, I think his name was. <br>A large weapon with high damage and stationary swinging."],
    ["Fists", false, 2, 1, 4, "To Unlock <br>Beat trapoid phase one without using specials.", "Trapoid could not take you in a 1v1 fist fight. <br>A debatable weapon with low damage and focus strikes."]
  ],
  spc: [ //name, unlocked, type, spell bonus, cost, description
   ["TR 16", true, 0, 4, 9, "whoops", "A cold steel firearm that smells of gunpowder. <br>A ranged blast dealing mild damage, more at the bottom row."],
   ["Poison Mist", false, 1, 5, 65, "To Unlock <br>Dodge every push attack in phase 1.", "A crazed, yellow circle man once used this in the Shapeous Arena, and he was promptly arrested. <br>Summon a cloud of damaging gas that hurts you and trapoid."],
   ["Heal", false, 2, 1, 100, "To Unlock <br>Beat phase 1 with 1 health left.", "An odd fellow taught you this power. She had a pointy head and large eyes. <br>Use your will to close your wounds while stationary. Said will grants strength afterward."],
   ["Blood Pistol", false, 4, 1, 12, "To Unlock <br>Shoot Trapid 100 times with the gun in one run.", "The barrel feels warm to the touch. <br>A ranged blast dealing low damage that increases every shot."],
   ["Parry", false, 3, 4, 9, "To Unlock<br> ", " <br>A maneuver to deflect an attack and increase your damage."]
  ],
  itm: [//name, unlocked, type, bonus1, *bonus2, description
    ["Cardboard Armor", false, 0, "H1", "To Unlock <br>All you gotta do is ask.", "This void has quite the silly jokes. <br>+1HP"],
    ["Smoking Addiction", false, 1, "D4", "To Unlock <br>Click on Trapoid's eye in phase 2.", "Every pack reminds you of Shapeous. And those you left behind. <br>+4DMG -2HP"],
    ["Arm Stretcher", false, 1, "R1", "To Unlock <br>Click on the PIT Works.", "You left Shapeous for a reason. He wouldn't forgive you. <br>+1RGE -2HP -3SB"],
    ["The Dark Dog", false, 1, "S2", "To Unlock <br>Beat the secret boss.", "U gyot tat dark dawg in u. <br>+2SB +3FPS -2HP"],
    ["Bumpscocity", false, 2, "h3", "To Unlock <br>Well you start by increasing Bumpscocity.", "The more you have, the more you'll... She didn't finish. <br>An all stats up ;), Let's Rock."],
    ["Light Bulb", false, 3, "D3", "To Unlock <br>Beat Trigon Trapoid.", "It hurt when it broke. It hurt him more. <br>+3DMG +3SB -1HP until it breaks. Don't let it break."],
    ["Magic Shield", false, 4, "filler", "To Unlock <br>Use the Legacy Controls.", "A safe place to stay and never return to your problems. <br>+1DR at the bottom 3 rows."],
    ["Magnet", false, 5, 0, "To Unlock <br>Die with the greatsword.", 1, '"Loui" is faintly written on the side. <br>Move in the opposite direction while casting a spell. At max FP, it grants temporary invincibility.'],
    ["None", true, 10, 0, "whoops", "empty."]
  ]
};

//asset loading
for(let i = 0; i<25; i++) {
  let id = i%5+""+Math.abs(4 -((i -(i%5)) /5));
  $("#field").append("<div id=\"t"+id+"\" class=\"tile\">"+id+"</div>");
  if(!devTool) $(".tile").html("");
};

var unloced = document.cookie.split('; ');
for(var j = 0; j < unloced.length; j++){
  var curr = unloced[j].split('|');
  if(curr[curr.length - 1] == 'true'){
    curr[0] = curr[0].substring(0, (Math.floor(curr[0].length / 2)));
    unlock(curr[0], curr[1], curr[2], true);
  }
  if(curr == 'trig=beat')/**/$("#toTrigon").show();
  if(curr == 'perf=beat')/**/$("#toIvy").show();
}


$(".attack, .hidden, .hint").hide();
if(!devTool) {
  $("#lText").hide();
  $(".circ").html("");
  $("#loadout").hide();
} else {
  unlock("eSpear", "wpn", 1, false);
  unlock("eGSword", "wpn", 2, false);
  unlock("eFist", "wpn", 3, false);
  unlock("eMist", "spc", 1, false);
  unlock("eHeal", "spc", 2, false);
  unlock("eBGun", "spc", 3, false);
  unlock("iCA", "itm", 0, false);
  unlock("iSA", "itm", 1, false);
  unlock("iAS", "itm", 2, false);
  unlock("iTDD", "itm", 3, false);
  unlock("iB", "itm", 4, false);
  unlock("iMS", "itm", 6, false);
  unlock("iHW", "itm", 7, false);
  unlock("iLB", "itm", 5, false);
}

document.body.onkeydown = function(e){
  if(mode > 0) {
    // w ^ i
    if(pPos[1] < 4 && key(e, 87, 38, 73))/**/{move(0,1); if(e.which == 73)/**/unlock("iMS", "itm", 6, false);}
    // a < j
    if(pPos[0] > 0 && key(e, 65, 37, 74))/**/move(-1);
    // s V k
    if(pPos[1] > 0 && key(e, 83, 40, 75))/**/move(0,-1);
    // d > l 
    if(pPos[0] < 4 && key(e, 68, 39, 76))/**/move(1);
    // x m attack
    if(pPos[1] >= l.wpn[ld[0]][4]-pStats[3] && tHP > 0 && key(e,88,77,1))/**/melee();
    // c n special
    if(key(e,67,78,1) && tHP > 0)/**/special();
  }
}

$(".toZone").click(function() {
  setArea(z[$(this).val()]);
});

$(".equip").hover(function() {
  let v = $(this).val();
  $("#eDescription").html(l[v.substring(0,3)][v[3]][l[v.substring(0,3)][v[3]].length-1]) 
  if(!l[v.substring(0,3)][v[3]][1]) {
    switch(v.substring(0,3)) {
      case "wpn":  $("#eDescription").html(l.wpn[v[3]][5]);  break;
      case "spc":  $("#eDescription").html(l.spc[v[3]][5]);  break;
      case "itm":  $("#eDescription").html(l.itm[v[3]][4]);  break;
    }
  }
}).click(function() {
  let v = $(this).val();
  if(l[v.substring(0,3)][v[3]][1]) {
    switch(v.substring(0,3)) {
      case "wpn":
        ld[0] = v[3];
        $("#eWpn").html(l.wpn[ld[0]][0]);
        break;
      case "spc":
        ld[2] = v[3];
        $("#eSpc").html(l.spc[ld[2]][0]);
        break;
      case "itm":
        ld[1] = v[3];
        $("#eItm").html(l.itm[ld[1]][0]);
        break;
    }
    pMax = 4;
    pStats = [0,0,0,0];
    switch(l.itm[ld[1]][2]) {
      case 0: pMax = 5; break;
      case 1:
        pMax = 2;
        switch(l.itm[ld[1]][3][0]) {
          case "D":
            pStats[0] = parseInt(l.itm[ld[1]][3][1]);
            break;
          case "S":
            pStats[1] = parseInt(l.itm[ld[1]][3][1]);
            pStats[2] = parseInt(l.itm[ld[1]][3][1])*1.5;
            break;
          case "R":
            pStats[3] = parseInt(l.itm[ld[1]][3][1]);
            pStats[1] = -3;
            break;
        }
        break;
      case 2: pMax = 1; break;
      case 3:
        pMax = 3;
        pStats[0] = parseInt(l.itm[ld[1]][3][1]);
        pStats[1] = parseInt(l.itm[ld[1]][3][1]);
        break;
    }
    pHP = pMax;
    barUp();
  }
});

$("#equipment").click(_=> {
  $("#setting, #patchy").fadeOut();
  $("#loadout").fadeIn();
});

$("#settings").click(_=> {
  $("#loadout, #patchy").fadeOut();
  $("#setting").fadeIn();
});

$("#patchNotes").click(_=> {
  $("#loadout, #setting").fadeOut();
  $("#patchy").fadeIn();
});

$("#sxf").change(_=> {
  sVol = $("#sxf").val();
});

$("#music").change(_=> {
  mVol = $("#music").val()/100;
  a["TTheme1"].volume = mVol;
});

$("#upBump").change(_=> {
  bumpscocity = $("#upBump").val();
  if(bumpscocity == 100) {
    if(letsRock)/**/unlock("iB", "itm", 4, false);
    $("#hint1, #hint2").show();
  }else/**/$("#hint1, #hint2").hide();
});

$("#hint3").click(_=> {
  if(bumpscocity == 100 && ld[2] == 2) {
    bumpscocity = 50;
    letsRock = true;
    $("#upBump").val(50);
    $("#hint1").html("Your Bumpscocity is ample, now come and find me.");
    $("#hint1, #hint3").hide();
  }
});

$("#iCA").click(_=> {
  unlock("iCA", "itm", 0, false);
});

$("#patch").click(_=> {
  unlock("iAS", "itm", 2, false);
});

$(".eye").click(_=> {
  if(phase == 2)/**/unlock("iSA", "itm", 1, false);
});

$("#clearCook").click(_=> {
  clearCookies();
});

$("#next").click(_=> {
  $("#dialouge").html(IvyDial[IvyCnt]);
  IvyCnt++;
  if(IvyCnt == 3) {
    $("#Ivy").fadeOut();
    $("#per").fadeIn();
    $("#dialouge").css({color: "#fc7"});
  } else/**/$("#dialouge").css({color: "#fff"});
  if(IvyCnt == 4)/**/$("#next, #dialouge").hide();
  if(IvyCnt == 7) {
    $("#next, #dialouge").hide();
    sd("Youch");
    deathIsNowFinallyAMechanic();
  }
});

//---------------------Core Clock--------------------

setInterval(_=> {
  if(phase > -2 && mode > 0) {
    timer++;
    let s = hb.stab[stab];
    mistMurder();
    switch(mode) {
      case 1:
        if(!atking) { // attack chooser
          sChan = Math.round(Math.random()*5);
          atking = true;
          atkReset(phase);
          setTimeout(_=> {
            delay = combo === 0 ? 1250 : 50;
            combo = combo > -1 ? combo-1 : 2;
            stab = Math.round(Math.random()* 3);
            curAtk = Math.floor(Math.random()*3);
            //curAtk = 1;
            tele(curAtk);
          }, delay);
        }
        switch(phase) { // attack execution
          case 1:
            switch(curAtk) {
              case 0: brit(s[0], s[1], s[2]); break;
              case 1: weBall(); break;
              case 2: squared(); break;
            }
            stopT();
            break;
          case 2:
            cubed();
            switch(curAtk) {
              case 0: brit(s[0], s[1], s[2]); break;
              case 1: weBall(); break;
              case 2: pissOn(); break;
            }
            stopT();
            break;
        }
        break;
      case 2:
        break;
      case 3:
        if(!atking) {
          let rando = pMist[2] ? 3+Math.round(Math.random()*3) : Math.round(Math.random()*6);
          if((rando <= 1 && tPos[0] < 4) || pMist[2] && pPos[0] > tPos[0]) {
            move(1, 0,false,"per");
          } else if((rando == 2 && tPos[0] > 0) || pMist[2] && pPos[0] < tPos[0]) {
            move(-1, 0,false,"per");
          } else if(rando > 3) {
            for(let i = 0; i < 3; i++) {
              curAtk = AICheck(i);
              if(curAtk) {
                atking = true;
                break;
              }
            }
          }
        }
        switch(curAtk) {
          case 1: sideSlash(); break;
          case 2: frontSlash(); break;
          case 3: dashSlash(); break;
          case 4:
            if(!pMist[2]) {
              smoker();
            } else {
              atking = false;
              curAtk = null;
            }
            break;
        }
        break;
    }
  }
}, 250);

//-----------------game state updates----------------

function clearCookies (){
  document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";"); });
  window.location.reload();
}

function setArea(zone) {
  curAtk = null;
  mode = zone.bos;
  $(".holder, .popUp").hide();
  $("#"+zone.zon).fadeIn();
  $("#background").css({background: zone.bgd});
  a.TTheme1.pause();
  if(zone.bos == 0)/**/sd("TTheme1");
  if(mode == 3) {
    $("#trapoid").hide();
    if(IvyCnt < 4)/**/$("#Ivy, #next, #dialouge").show();
    else/**/$("#per").show();
    $("#bHP").css({background: "linear-gradient(180deg, #fc7, #963)"});
    $("#nametag").css({color: "#612"}).html("Perfetto");
  } else {
    $("#trapoid").show().css({"border-top": "100px solid #277"});
    if(ld[1] == 4)/**/$("#trapoid").css({"border-top": "200px solid #277"});
    $("#per, #Ivy").hide();
  }
}

function deathIsNowFinallyAMechanic() {
  pHP = pMax;
  tHP = tMax;
   push = tMax-77;
   l.spc[ld[2]][3] = 1;
   phase = -2;
   timer = 0;
   guning = 0;
  tColor = "#277";
  pColor = "#39f";
   atking = false;
   noSpecials = true;
   noPush = true;
   pMist[0] = false;
   pMist[1] = false;
   pMist[2] = false;
  a.BTheme1.pause();
  a.BTheme2.pause();
  a.BTheme3.pause();
  unlock("eSpear", "wpn", 1, false);
  if(ld[0] == 2)/**/unlock("iHW", "itm", 7, false);
  fpUp(-10000);
  setArea(z.toTitle);
  atkReset();
  $(".mist, .tMist").remove();
  $("#trapoid").css({ "animation-name": "float", "animation-duration": "4s", 
    "border-top-color": "#277", transform: "rotate(0deg)",  top: "-110px"});
  $("#bHP").css({background: "linear-gradient(180deg, #e24, #902)"});
  $("#nametag").css({color: "#499"}).html("Trapoid");
}

function barUp() {  
  pColor = pHP <=pMax/4 ? "#169" : pHP <= pMax/2 ? "#28c" : "#39f";
  $("#bHP").animate({"width": (tHP/tMax*100)+"%"}, 50);
  $("#hp").animate({width: (pHP/pMax*100)+"%"}, 100).html(pHP+" HP");
  $("#fpGone").css({"border-color": "#ccc"});
  $("#fp").css({transform: "scale("+(100-fp)+"%)"});
  if(fp == 100)/**/$("#fpGone").css({"border-color": "#dff"});
  if(devTool)/**/$("#bHP").html(tHP+" HP");
}

function fpUp(by) {
  fp = fp+by > 100 ? 100 : fp+by < 0 ? 0 : fp+by;
  if(fp == 0)/**/$(".pShot").remove();
  barUp();
}

function ballSmack() {
  for(let i = 1; i < 6; i++) {
    if(pos(pPos,hb["ball"+i]) && phase > 0)/**/ouchers(1);
  }
}

function phase2() {
  a.BTheme2.pause();
  sd("BTheme1", "P2Now");
  tColor = "#d25";
  $("#background").css({"animation-name": "redBack"});
  $("#trapoid").css({"animation-name": "pissed", "animation-duration": "5s"});
  $("#bHP").animate({width: "100%"}, 5000).css({background: "linear-gradient(180deg, #4e9, #499)"});
  $("#nametag").css({color: "#c26"}).html("Pissed Trapoid");
  if(noSpecials)/**/unlock("eFist", "wpn", 3, false);
  if(timer <= 365)/**/unlock("eGSword", "wpn", 2, false);
  if(pHP == 1)/**/unlock("eHeal", "spc", 2, false);
  if(noPush)/**/unlock("eMist", "spc", 1, false);
  setTimeout(_=> {
    atking = false;
    phase = 2;
    tHP = tMax;
    $("#trapoid").css({ "animation-name": "float2", "animation-duration": "0.5s", 
      "border-top-color": "#d25", transform: "rotate(180deg)", top: "-135px"});
    $("#background").css({ "animation-name": "none",
      background: "radial-gradient(circle, #612 0%, #524 60%, #d42 100%)"});
    barUp();
    if(bumpscocity == 100 && ld[2] == 2 && !letsRock)/**/{$("#hint3").show(); $("#trapoid").hide()}
  }, 5000);
}

function unlock(but, ld, slot, cook = false) {
  if(!l[ld][slot][1])/**/sd("Unlock");
  l[ld][slot][1] = true; 
  if(!cook)/**/document.cookie = but + ' = ' + but + '|' + ld + '|' + slot + '|true';
  $("#"+but).css({background: "#521"});
}

function sd() {
  for(let i in arguments) {
    a[arguments[i]].load();
    a[arguments[i]].play();
    a[arguments[i]].volume = 0.2;
    if(arguments[i].indexOf("Theme") > 0)/**/a[arguments[i]].volume = mVol;
    else/**/a[arguments[i]].volume = sVol;
  }
}

//------------------player functions-----------------
function move(X = 0,Y = 0, I = false, whom = "p") {
  if((((tp("wpn0", 1) && pGreat == 0) || l.wpn[ld[0]][2] != 1) && !pHeal) || I || whom == "per") {
    if(whom == "per") {
      tPos[1]+=Y;
      tPos[0]+=X;
    } else {
      pPos[1]+=Y;
      pPos[0]+=X;
      if(!I && tp("itm1", 5)) { // heavy weapon 
        l.itm[ld[1]][3] = X == -1 ? 1 : X === 0 ? 0 : -1;
        l.itm[ld[1]][5] = Y == -1 ? 1 : Y === 0 ? 0 : -1;
      } else if(I && fp == 100) {
        iFrm = true;
        setTimeout(_=> iFrm = false, 200);
      }
      ballSmack();
    }
    if(X !== 0) { //left and right movement
      $("#"+whom).css({left: "+="+(32.5*X)+"px", width: "65px"});
      setTimeout(_=> $("#"+whom).css({left: "+="+(32.5*X)+"px", width: "45px"}), 50);
    } 
    if (Y !== 0) { // up and down movement
      $("#"+whom).css({top: "-="+(22.5*Y)+"px", height: "70px"});
      setTimeout(_=> $("#"+whom).css({top: "-="+(22.5*Y)+"px", height: "50px"}), 50);
    }
    if(tPos[0] == 5)/**/$("#pTile").show(); else/**/$("#pTile").hide();
  }
}

function melee() {
  if(phase == -2) {
    if(mode == 3) {
      IvyCnt = 4;
      sd("BTheme3");
      move(1, 0,false,"per");
      $("#per").fadeIn();
      $("#Ivy, #dialouge, #next").fadeOut();
      $("#background").css({background: "repeating-radial-gradient(#da5, #612 80px)"});
    } else/**/sd("BTheme2");
  }
  phase = phase == -2 ? 1 : phase;
  if(!pHit[0]) { //anti spam
    pHit[0] = true;
    if(!pHit[1]) {
      pHit[2] = true;
      $("#p").css({"border-color": "#f00"});
      setTimeout(_=>{
        pHit[2] = false;
        $("#p").css({"border-color": "transparent"});
      }, 1000);
    }
  }
  if(pHit[0] && !pHit[2]) { //actual attack
    pHit[0] = false;
    pHit[1] = false;
    pGreat = tp("wpn0", 1) ? pGreat+1 : pGreat;
    $("#pAtk").attr("src", s.sword).show()
      .css({transform: "rotate(-150deg)",left: "-75px", bottom: "-80px"});
    setTimeout(_=> {
      pHit[1] = true;
      $("#p").css({"border-color": "#fff"});
      $("#pAtk").attr("src", s.swSlash).css({
        transform: "rotate(0deg)", left: "-25px", bottom: "0px", width: "80px"});
      sd(ld[0] == 2 ? "GSwipe" : ld[0] == 3 ? "Punch" : "Swipe");
      if((mode != 3 || mode == 3 && pPos[0] == tPos[0]) && phase > 0){
        hurtYou((pPos[1] == 4 ? l.wpn[ld[0]][3]*2 : l.wpn[ld[0]][3])+pStats[0]);
        fpUp((tp("wpn0", 2) ? 9 : 4)+pStats[2]);
      }
      setTimeout(_=> pGreat = tp("wpn0", 1) ? pGreat-1 : pGreat,200);
      setTimeout(_=> {
        pHit[1] = false;
        $("#pAtk").hide();
        $("#p").css({"border-color": "transparent"});
        setTimeout(_=> {
          pHit[0] = true;
        }, 300);
      }, 300);
    }, 300);
  }
}

function special() {
  noSpecials = false;
  $("#controls").fadeOut(5000);
  if(tp("itm1", 5) && canMove(l.itm[ld[1]][3], l.itm[ld[1]][5])) {
    move(l.itm[ld[1]][3], l.itm[ld[1]][5], true);
  }
  switch(l.spc[ld[2]][2]) {
    case 0: sGun(); break;
    case 1: sMist(); break;
    case 2: sHeal(); break;
    case 3: sGun(true); break;
    case 4: sGun(true); break;
  }
}

function sGun(blood = false) {
  if(fp >= l.spc[ld[2]][4]) {
    guning++;
    if(guning >= 100)/**/unlock("eBGun", "spc", 3, false);
    fpUp(-1*l.spc[ld[2]][4]);
    if(mode != 3 || mode == 3 && pPos[0] == tPos[0]){
      hurtYou((pPos[1] == 0 ? l.spc[ld[2]][3]*2 : l.spc[ld[2]][3])+pStats[1]);
    }
    l.spc[ld[2]][3] = blood ? l.spc[ld[2]][3]+0.2 : l.spc[ld[2]][3];
    sd("Gun");
    $("#p").append("<div class='pShot' style='left:"+Math.random()*100+"%;'></div>");
  }
}

function sHeal() {
  if(fp >= l.spc[ld[2]][4]) {
    pHeal = true;
    fpUp(-1*l.spc[ld[2]][4]);
    $("#p").css({'box-shadow': "0px 0px 50px #ffc"});
    sd("Heal");
    setTimeout(_=> {
      pHeal = false;
      $("#p").css({'box-shadow': "none"});
      if(!iFrm) {
        pHP = pHP+1 > pMax ? pMax : pHP+1;
        barUp();
        $("#p").css({background: pColor, "box-shadow": "0px 0px 50px #f47"});
        if(tp("itm1", 3) && pHP == pMax) {
          pStats[0] = parseInt(l.itm[ld[1]][3][1]);
          pStats[1] = parseInt(l.itm[ld[1]][3][1]);
        }
        pStats[0] += 5+pStats[1];
        setTimeout(_=> {
          pStats[0] -= 5+pStats[1];
          pStats[0] = pStats[0] > 20 ? 20 : pStats[0] < 0 ? 0 : pStats[0];
          $("#p").css({'box-shadow': "none"});
        }, 6000);
      }
    }, 1500);
  }
}

function sMist(per = 0) {
  if((fp >= l.spc[ld[2]][4] && !pMist[0]) || per) {
    pMist[2] = per ? true : pMist[2];
    fpUp(!per ? -1*l.spc[ld[2]][4] : 0);
    mistHb[0] = !per ? pPos[0]-1 : mistHb[0];
    mistHb[1] = !per ? pPos[1]+1 : mistHb[1];
    mistHb[2] = per ? tPos[0]-1 : mistHb[2];
    mistHb[3] = per ? tPos[1]+1 : mistHb[3];
    sd("Mist");
    if(!per) {
      $("#arena").append('<div class="mist"></div>');
      $(".mist").css({opacity: ".5", left: (-65+(65*pPos[0]))+"px", top: (135-(45*pPos[1]))+"px"}); 
    } else {
      $("#arena").append('<div class="tMist"></div>');
      $(".tMist").css({opacity: ".5", left: (-65+(65*tPos[0]))+"px", top: (135-(45*tPos[1]))+"px"});
    }
    setTimeout(_=> {
      pMist[per] = true;
      if(!per)/**/$(".mist").css({opacity: "1"});
      else/**/$(".tMist").css({opacity: "1"});
    }, 1500);
    setTimeout(_=> {
      pMist[per] = false;
      pMist[2] = per ? false : pMist[2];
      if(!per)/**/$(".mist").remove();
      else/**/$(".tMist").remove();
    }, 5500);
  }
}

function mistMurder() {
  mistHit(0, [0,1], l.spc[ld[2]][3]+pStats[1]);
  mistHit(1, [2,3], 9);
}

function mistHit(m, hb, dmg) {
  if(pMist[m]) {
    for(let i = mistHb[hb[0]]; i < mistHb[hb[0]]+3; i++) {
      for(let j = mistHb[hb[1]]; j > mistHb[hb[1]]-3; j--) { 
        if(pos(pPos,[i,j]))/**/ouchers(1);
        if(pos(tPos,[i,j]) && mode == 3)/**/hurtYou(dmg);
      }
    }
    if(mistHb[1] == 5 && mode != 3 && m == 0)/**/hurtYou(dmg);
  }
}

//damage trapoid
function hurtYou(dmg) {
  tHP -= dmg;
  $("#trapoid").css({"border-top-color": "#ddd4"});
  $("#per").css({background: "#ddd4"});
  pissOff();
  barUp();
  if(pPos[1] == 4)/**/$("#pAtk").css({width: "100px"});//adjusting attack size
  if(tHP <= 0 && phase > 0) {
    if(phase == 1) {
      if(mode == 3) {
        a.BTheme3.pause();
        unlock("iTDD", "itm", 3, false);
        $("#per").fadeOut(5000);
        setTimeout(_=> {
          $("#dialouge, #next, #Ivy").fadeIn();
          IvyCnt = 4;
          $("#dialouge").html(IvyDial[IvyCnt]);
        }, 5100);
      } else/**/phase2();
    } else {
      a.BTheme1.pause();
      if(ld[1] == 4)/**/{
        $("#toIvy").show(); 
        document.cookie = 'perf=beat;';
      }
      if(mode == 2)/**/unlock("iLB", "itm", 5, false);
      $("#toTrigon").show();
      document.cookie = 'trig=beat;';
      $("#trapoid").css({"animation-name": "none"}).fadeOut(5000);
      setTimeout(_=> {
        if(!credits[1]) {
          $('#container').fadeIn(4000, function() {
            $('#machine1').animate({'top': "-"+(300*credits[0]-80)+"px"
            }, 1200*credits[0], 'linear', function() {
              credits[1] = true;
              deathIsNowFinallyAMechanic();
              $("#container").fadeOut(4000);
            });
          });
        } else/**/ deathIsNowFinallyAMechanic();
      }, 5100);
    }
    phase = -3;
    curAtk = null;
    atking = true;
    atkReset();
  }
  setTimeout(_=> {
    $("#trapoid").css({"border-top-color": tColor});
    $("#per").css({background: "#fc7"});
  }, 20);
}

//------------------trapoid functions-----------------

function brit(h1, h2, h3) {
  if(sChan == 1 && pPos[0] != 4 && atkCnt == 4) {//spawn
    atkCnt = 1;
    sChan = 0;
    stab = 0;
    $(".stabTop").hide().css({"animation-duration" : "1s"});
    setTimeout(_=> { $(".stabTop").show();}, 50);
  }
  atkCnt++;
  $(".stab").show();
  if(atkCnt>=6) {
    for(let i in arguments) {
      if(pPos[0] == arguments[i] || pPos[0] == 0) {
        ouchers(1); 
      }
    }
  }
  $("#stab2").css({"left": (12+h1*65)+"px"});
  $("#stab3").css({"left": (12+h2*65)+"px"});
  $("#stab4").css({"left": (12+h3*65)+"px"});
}

function weBall() {
  if(atkCnt == 0) {
    $(".circ").show();
    $(".pincerL").css({left: "-256px", opacity: "0.2"})
      .animate({left: "+=200px", opacity: "1"}, 900);
    $(".pincerR").css({left: "532px", opacity: "0.2"})
      .animate({left: "-=200px", opacity: "1"}, 900);
  }
  if(atkCnt >= 5) {
    for(let i = 1; i < 6; i++) {
      let b = hb["ball"+i][0];
      hb["ball"+i][0] = i%2 == 0 ? b-1 : b+1;
      if(pos(pPos,hb["ball"+i])) {
        ouchers(1);
      }
    }
    $(".pincerL").css({left: (7+65*hb.ball1[0])+"px"});
    $(".pincerR").css({left: (7+65*hb.ball2[0])+"px"});
  }
  atkCnt++;
}

function squared() {
  if(atkCnt === 0) {
    for(let i in field) {
      for(let j in field[i]) {
        if(Math.round(Math.random()*2) == 1) {
          field[i][j] = 1;
          $("#t"+i+j).addClass("hurt");
        }
      }
    }
  }
  if(atkCnt >= 4) {
    $(".hurt").css({background: "red"});
    for(let i in field) {
      for(let j in field[i]) {
        if(field[i][j] == 1 && pos(pPos,[i,j]))/**/ouchers(1);
      }
    }
  }
  atkCnt++;
}

function cubed() {
  let randy = Math.round(Math.random()*4);
  if(sqreCnt%8 == 0) {
    atkReset(0);
    for(let i in field) {
      for(let j in field[i])/**/field[i][j] = 0;
      field[i][randy] = 1;
      $("#t"+i+randy).addClass("hurt");
    }
  }
  if(sqreCnt%8 > 5) {
    $(".hurt").css({background: "red"});
    for(let i in field) {
      for(let j in field[i]) {
        if(field[i][j] == 1 && pos(pPos,[i,j]))/**/ouchers(1);
      }
    }
  }
  sqreCnt++;
}

function pissOff() {
  if(tHP <= push && phase == 1 && mode != 3) {
    push -= 77;
    sd("Push");
    $("#pTele").animate({opacity: "1"}, 750, _=> {
      $("#pTele").css({opacity: "0"});
      $("#push").show().css({top: "-215px"})
        .animate({top: "+=180px"}, 400, _=> {
          if(pPos[1] > 2 && phase == 1){
            noPush = false;
            ouchers(1);
          }
          $("#push").fadeOut("250");
        });
    });
  }
}

function pissOn/*😎*/() {
  curAtk = null;
  $("#pTele").animate({opacity: "1"}, 1000, _=> {
    $("#pTele").css({opacity: "0"});
    $("#push").show().css({top: "-215px"})
      .animate({top: "+=225px"}, 500, _=>{
        atking = false;
        if(pPos[1] > 1 && phase == 2)/**/ouchers(1);
        $("#push").fadeOut("250");
      });
  });
}

// ----------------Perfetto-------------------------
  
function AICheck(type) {
  if(Math.round(Math.random()*6) == 2)/**/return 4;
  switch(type) {
    case 0: return pos(pPos, [tPos[0]-1, 4]) || pos(pPos, [tPos[0]+1, 4]) || pos(pPos, [tPos[0], 3], true) ? 1 : null; break;
    case 1: return pos(pPos, [tPos[0], 4]) || pos(pPos, [tPos[0], 2]) ? 2 : null; break;
    case 2: return pos(pPos, [tPos[0], 0]) || pos(pPos, [tPos[0], 1]) ? 3 : null; break;
  }
}

function sideSlash() {
  slash();
  $("#tAtk").attr("src", s.perGreatSw).css({
    transform: "rotate(-60deg)", left: "-150px",
    top: "-110px", width: "220px", height: "220px"})
  setTimeout(_=> {
    sd("GSwipe");
    for(let i = 0; i < 2; i++) {
      for(let j = -1; j < 2; j++) {
        if(pos(pPos, [i == 0 && j == 0 ? 9 : tPos[0]+j,4-i]))/**/ouchers(1);
      }
    }
    $("#tAtk").attr("src", s.swSlash).css({width: "200px", height: "160px",
      left: "-80px", top: "10px", transform: "rotate(180deg)"});
  },550);
}

function frontSlash() {
  slash();
  $("#tAtk").attr("src", s.perGreatSw).css({
    transform: "rotate(30deg)", left: "-60px",
    top: "-150px", width: "220px", height: "220px"})
  setTimeout(_=> {
    sd("GSwipe");
    for(let j = 0; j < 3; j++) {
      if(pos(pPos, [tPos[0],4-j]))/**/ouchers(1);
    }
  $("#tAtk").attr("src", s.swSlash).css({width: "65px", height: "420px",
    left: "-10px", top: "-180px", transform: "rotate(180deg)"});
  },550);
}

function dashSlash() {
  slash(true);
  move(0, -1,false,"per");
  $("#tAtk").attr("src", s.perGreatSw).css({
    transform: "rotate(30deg)", left: "-60px",
    top: "-150px", width: "220px", height: "220px"})
  setTimeout(_=> {
    sd("GSwipe");
    for(let i = 0; i < 5; i++) {
      for(let j = -1; j < 2; j++) {
        if(pos(pPos, [(i == 0 || i == 1) && j == 0 ? 9 : tPos[0]+j,4-i]))/**/ouchers(1);
      }
    }
  $("#tAtk").attr("src", s.swSlash).css({width: "250px", height: "460px",
  left: "-100px", top: "-180px", transform: "rotate(180deg)"});
  },500);
}

function smoker() {
  curAtk = null;
  move(0, -1,false,"per");
  setTimeout(_=>{
    move(0, -1,false,"per");
    sMist(1);
  }, 55);
  setTimeout(_=>{move(0, 1,false,"per");}, 745);
  setTimeout(_=> {
    move(0, 1,false,"per");
    atking = false;
  },800);
}

function slash(dash = false) {
  curAtk = null;
  setTimeout(_=> {
    atking = false;
  $("#tAtk").attr("src", s.perGreatSw).css({
    transform: "rotate(-20deg)", left: "-150px",
    top: "-110px", width: "220px", height: "220px"});
    if(dash)/**/move(0, 1,false,"per");
  }, 800);
}

function atkReset(sec = 1) {
  if(sec >= 1) {
    atkCnt = 0;
    hb.ball1 = [-1,0];
    hb.ball2 = [5,1];
    hb.ball3 = [-1,2];
    hb.ball4 = [5,3];
    hb.ball5 = [-1,4];
    $(".stab, .circ").fadeOut(100);
    $(".stabTop").css({"animation-duration" : "1.25s"});
    $("#ball3").css({top: "185px"});
    $("#ball4").css({top: "50px"});
  }
  if(sec == 2) {
    hb.ball1 = [-1,4];
    hb.ball3 = [-1,3];
    hb.ball5 = [-1,2];/**/
    hb.ball2 = [5,1];/**/
    hb.ball4 = [5,0];
    $("#ball3").css({top: "50px"});
    $("#ball4").css({top: "185px"});
  }
  if(sec <= 1) {
    for(let i in field) {
      for(let j in field[i])/**/field[i][j] = 0;
    }
    $(".hurt").css({background: "#334"});
    $(".tile").removeClass("hurt");
  }
}

function tele/*vision? phone? tele what?*/(at) {
  switch(at) {
    case 0:
      $("#eye1, #eye2").animate({width: "10px", height: "30px"}, 200)
        .css({background: "#fb7"});
      $("#brow").hide();
      break;
    case 1:
      $("#eye1, #eye2").animate({width: "15px", "border-radius": "50%"}, 200)
        .css({background: "#fea"});
      break;
    case 2:
      if(phase == 2)/**/{
        $("#eye2, #eye1").animate({width: "5px"}, 200)
          .css({background: "#cde"});
        $("#brow").hide();
      } else $("#eye1, #eye2").animate({height: "9px"}, 200).css({background: "#f99"});
      break;
  }
  setTimeout(_=> {
    $("#eye1").css({width: "14px", height: "15px"});
    $("#eye2").css({width: "18px", height: "18px"});
    $("#eye1, #eye2").css({background: "#cfd", "border-radius": "0%"});
    $("#brow").show();
  }, 1000);
}
//end attack
function stopT() {
  if(atkCnt >= atkLen[curAtk]) {
    curAtk = null;
    atking = false;
  }
}

//take damage
function ouchers(dmg) {
  if(!iFrm) {
    iFrm = true;
    sd(tp("itm1", 3) && pHP == pMax ? "Broke" : "Youch");
    //damage resistance
    pHP = (tp("itm1", 4) && pPos[1] < 3 || tp("itm1", 3) && pHP == pMax) ? pHP-dmg/2 : pHP-dmg;
    //charater health color
    pColor = pHP <=pMax/4 ? "#169" : pHP <= pMax/2 ? "#28c" : "#39f";
    pStats[0] = tp("itm1", 3) ? 0 : pStats[0];
    pStats[1] = tp("itm1", 3) ? 0 : pStats[1];
    $("#p, .tile").css({background: "#d677"});
    barUp();
    if(pHP <= 0) {
      deathIsNowFinallyAMechanic();
    }
    setTimeout(_=> {
      iFrm = false;
      $("#p").css({background: pColor});
      $(".tile").css({background: "#334"});
    }, 1000);
  }
}

// ----------------general use---------------------

//many keycode shorthand
function key(e, k1, k2, k3) {
  return e.which == k1 || e.which == k2 || e.which == k3;
}

function canMove(dir, d2) {
  return dir == 0 ?  pPos[1]+d2 > -1 && pPos[1]+d2 < 5 : pPos[0]+dir < 5 && pPos[0]+dir > -1;
}

function tp(ob, n) {
  return l[ob.substring(0,3)][ld[parseInt(ob.substring(3))]][2] == n;
}

function id(who) {
  return document.getElementById(who);
}

function pos(p1,bp1, sides = false) {
  if(sides)/**/return p1[0] >= bp1[0]-1 && p1[0] <= bp1[0]+1 && p1[1] == bp1[1];
  return p1[0] == bp1[0] && p1[1] == bp1[1];
}

