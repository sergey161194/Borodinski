var link = document.querySelector(".login-link");

var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var close2 = document.querySelector(".modal-close-1");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	login.focus();

	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	console.log(evt);
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

close2.addEventListener("click", function (evt) {
	evt.preventDefault();
	console.log(evt);
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!login.value || !password.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", login.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});