document.addEventListener("DOMContentLoaded", function () {
	// Substitua isso pela sua lógica de autenticação real
	var isLoggedIn = false;

	// Define o conteúdo do Popover com base no estado de login
	var popoverContent = isLoggedIn
		? '<a href="#" onclick="logout()">Sair</a>' // Substitua logout() pela sua função de logout
		: '<a href="login.html">Login</a><br><a href="register.html">Registro</a>';

	// Inicializa o Popover
	var popoverTriggerEl = document.getElementById("accountTab").querySelector("a");
	var popover = new bootstrap.Popover(popoverTriggerEl, {
		content: popoverContent,
		html: true,
		trigger: "focus",
	});
});
