// Получаем элементы
const connectBtn = document.getElementById('connectBtn');
const popupDownloadData = document.getElementById('popupDownloadData');
const popupFillData = document.getElementById('popupFillData');

// Обработка нажатия на кнопку "Подключить"
connectBtn.addEventListener('click', function () {
	popupDownloadData.classList.remove('show'); // Скрываем первое окно
	popupFillData.classList.add('show'); // Показываем второе окно
});
