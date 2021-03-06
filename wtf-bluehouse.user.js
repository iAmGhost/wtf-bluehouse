// ==UserScript==
// @name     WTF-Bluehouse
// @version  3
// @grant    none
// @include  https://www1.president.go.kr/petitions/*
// ==/UserScript==

var REQUIRED_VOTES = 200000;

var votesTextElement = document.querySelector(".cspv_participant span");

if (votesTextElement) {
  var votesText = votesTextElement.innerHTML;
  var votes = Number(votesText.replace(/,/g, ''));

  var daysLeftElement = document.querySelector(".cspvp_day");

  var daysLeftText = daysLeftElement.innerHTML;

  document.querySelector(".cspv_participant").innerHTML = '청원 참여(' + daysLeftText + ')';
  daysLeftElement.innerHTML = votesText + '/' + Number(REQUIRED_VOTES).toLocaleString() + '명 참여';

  document.querySelector(".cspvp_ing").style.width = String(votes / REQUIRED_VOTES * 100) + "%";
}
