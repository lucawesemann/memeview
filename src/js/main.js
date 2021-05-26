var video = document.getElementById("Video");

var startBtn = document.getElementById("startBtn");

var reCallBtn = document.getElementById("reCallBtn"); // Button "Nächstes Meme"

var audio = document.getElementById("audio");

var videoStopped = false; //bool für den "Pause" Button

var i = 0; // Integer für die for Schleife beim factChanger

var randomFactList = ["Den Kopf gegen die Wand zu schlagen verbrennt 150 Kalorien.", "Ein kleinen Kind kann durch die Venen eines Blauwals schwimmen.", "Hitlers Mutter hat in Betracht gezogen abzutreiben aber der Doktor hat sie überzeugt das Baby zu behalten", "Seeotter halten im Schlaf Händchen, damit sie nicht voneinander abdriften.", "In Großbritannien ist es illegal, am Weihnachtstag Hackfleisch Pasteten zu essen.", "Pteronophobie ist die Angst, von Vätern gekitzelt zu werden.", "Wenn Flusspferde verärgert sind, wird ihr Schweiß rot.", "Eine Herde von Krähen wird als Mörder bezeichnet.", "Die “Facebook Sucht” ist eine psychische Störung, die von Psychologen identifiziert wurde.", "Die durchschnittliche Frau verbraucht in 5 Jahre ca. 1,7 Meter Lippenstift.", "Der 29. Mai ist der offizielle “Steck-ein-Kissen-in-dein-Gefrierfach-Tag”.", "Cherophobie ist die Angst vor Spaß.", "Menschlicher Speichel hat einen dreimal so hohen Siedepunkt wie normales Wasser", "Wenn man einen Känguru-Schwanz anhebt kann es nicht hüpfen.", "Bananen sind krumm weil sie in Richtung der Sonne wachsen.", "Billy-Ziegen urinieren auf ihren eigenen Köpfe um attraktiver für Weibchen zu riechen.", "Der Erfinder der Frisbee wurde nach seinem Tod eingeäschert und zu einer Frisbee verarbeitet.", "Yoda und Miss Piggy wurden von ein und derselben Person gesprochen.", "1989 übertrug die Sowjetunion dem Pepsi-Konzern in einem Tauschhandel 17 U-Boote, einen Kreuzer, eine Fregatte und einen Zerstörer, dafür, dass sie weiter Pepsi in der Sowjetunion verkaufen konnte. Dieser Handel machte Pepsi damals zur sechstgrößten Militärmacht der Welt.", "Ein Pinguin ist Brigadegeneral ehrenhalber der königlichen Garde Norwegens. Sein Name ist Sir Nils Olav.", "Das längste englische Wort mit nur einem einzigen Vokal ist strengths.", "Arnold Schwarzenegger war der erste Zivilist, der einen Militärgeländewagen vom Typ Hummer besaß.", "Otter haben häufig einen Lieblingsstein. Sie verwahren ihn in einem kleinen Beutel unter ihrem Arm, wenn sie ihn nicht brauchen", "Als Ian Fleming seine mittlerweile berühmten Spionagegeschichten schrieb, wollte er seinem Hauptcharakter den langweiligsten Namen geben, der möglich war. Der Name war Bond, James Bond.", "Schnabeltiere und Ameisenigel haben keine Mägen.", "Gruntled - das Gegenteil von disgruntled (verstimmt) - heißt erfreut, zufrieden, stillvergnügt.", "Jimmy Carter war der erste Präsident, der in einem Krankenhaus geboren wurde.", "Der Klebstoff auf der Rückseite israelischer Briefmarken ist koscher.", "Haie gibt es auf unserem Planten schon länger als Bäume.", "Wombats kacken Würfel.", "Als der erste Star-Wars-Film herauskam, setzte Frankreich immer noch die Guillotine ein, um Menschen hinzurichten.", "Jeder Mensch hat einen einzigartigen Zungenabdruck, ganz genau so wie Fingerabdrücke.", "Schätzungen zufolge gibt es mehr Bäume auf der Erde als Sterne in der Milchstraße (3 Billionen gegenüber 100-400 Milliarden).", "Wenn du von Detroit aus nach Süden gehst, kannst du in Kanada landen."];

var randomMemeList = ["ricardo", "heyya", "murbubz", "damage", "pepe", "ahh", "winnie", "pakistan"] //Meme MP4 + MP3 in Data ziehen, Name hier eintragen, ohne die Dateiendung. MP4&MP3 müssen gleich heißen!

var lastPlayed = random_fact(randomMemeList);

video.src = "data/" + lastPlayed + ".mp4";

audio.src = "data/" + lastPlayed + ".mp3";

factDiv.hidden = true;

video.hidden = true;

video.pause();

document.getElementById("currentStock").innerHTML = "Memes auf Lager: " + randomMemeList.length + " <br>Fakten auf Lager: " + randomFactList.length;

function random_fact(rndm)
{
return rndm[Math.floor(Math.random()*rndm.length)];
}

function factChanger() {

  if(i>=10) {
    i = 0;
    setTimeout(factChanger, 10000);
  } else {
    i++;
    setTimeout(factChanger, 10000);
}
  document.getElementById("change").innerHTML = random_fact(randomFactList);

}


function startMeme() {

    video.hidden = false;
    video.play();
    audio.volume = 0.05;
    audio.play();
    startBtn.style.display = "none";
    document.getElementById("startDiv").style.display = "none";
    factDiv.hidden = false;
    factChanger();

}

function reCall() {

  var next = random_fact(randomMemeList);
  while(next == lastPlayed) {
    next = random_fact(randomMemeList);
  }

  video.src = "data/" + next + ".mp4";
  video.play();
  audio.src = "data/" + next + ".mp3";
  audio.volume = 0.05;
  audio.play();
  lastPlayed = next;
  videoStopped = true;
  stopVideo();

}
function stopVideo() {

  if(videoStopped == true) {
    document.getElementById("stopBtn").innerHTML = 'Pause';
      video.play();
      audio.play();
      videoStopped = false;
  } else {
    document.getElementById("stopBtn").innerHTML = 'Starten';
      video.pause();
      audio.pause();
      videoStopped = true;
  }

}
