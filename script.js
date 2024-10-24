'use strict';
const connectBtn = document.getElementById('connectBtn');
const saveBtn = document.getElementById('saveBtn');
const closeBtn = document.getElementById('closeBtn');
const finishBtn = document.getElementById('finishBtn');
const downloadData = document.getElementById('downloadData');
const fillData = document.getElementById('fillData');
const connected = document.getElementById('connected');
const overlay = document.getElementById('overlay');

connectBtn.addEventListener('click', function () {
	downloadData.style.display = 'none';
	fillData.style.display = 'block';
});

saveBtn.addEventListener('click', function () {
	fillData.style.display = 'none';
	connected.style.display = 'block';
});

finishBtn.addEventListener('click', function () {
	fillData.style.display = 'none';
	downloadData.style.display = 'none';
	connected.style.display = 'none';
	overlay.style.display = 'none';
});

closeBtn.addEventListener('click', function () {
	fillData.style.display = 'none';
	downloadData.style.display = 'none';
	connected.style.display = 'none';
	overlay.style.display = 'none';
});
