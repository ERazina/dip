<?php define('PAGE', 'index');
include_once "header.php";
include_once "footer.php";
?>
<main>
	<div class="container">
		<div class="image"></div>
		<div class="about">
			<h1>О приложении WebMoney</h1>
			<p>Приложение WebMoney - простое приложение для ежедневного контроля Ваших расходов.</p>
			<p>Пользоваться им легко и удобно. Просто попробуйте!</p>
			<p>Больше никаких сложностей - всего 1 минута в день и Вы имеете полный контроль над своим бюджетом!</p>
		</div>
	</div>
</main>
<!-- авторизация -->
<div id="auth">
	<div class="close">&#10006;</div>
		<h2>Авторизация</h2>
	<form action="">
		<input type="text" placeholder="введите логин" id="authLogin"><br>
		<input type="password" placeholder="введите пароль" id="authPass"><br>
		<input type="submit" value="войти" id="authButton">
	</form>
</div>
<!-- авторизация -->

<!-- регистрация -->
<div id="reg">
	<div class="close">&#10006;</div>
		<h2>Регистрация</h2>
	<form action="">
		<input type="text" placeholder="введите логин" id="regLogin"><br>
		<input type="password" placeholder="введите пароль" id="regPass1"><br>
		<input type="password" placeholder="повторите пароль" id="regPass2"><br>
		<input type="submit" value="зарегистрироваться" id="regButton">
	</form>
</div>
<!-- регистрация -->
